# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist
echo 'blog.chgtaxihe.top' > CNAME
# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:Chgtaxihe/chgtaxihe.github.io.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://Chgtaxihe:${GITHUB_TOKEN}@github.com/Chgtaxihe/chgtaxihe.github.io.git
  git config --global user.name "chgtaxihe"
  git config --global user.email "cgxihe@126.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

rm -rf docs/.vuepress/dist

