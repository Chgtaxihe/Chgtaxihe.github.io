# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# deploy to github
echo 'blog.chgtaxihe.top' > CNAME
msg='自动部署'
githubUrl=git@github.com:Chgtaxihe/chgtaxihe.github.io.git
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

rm -rf docs/.vuepress/dist

