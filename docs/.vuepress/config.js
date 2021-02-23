const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  title: "Chgtaxihe's blog",
  description: '记录杂七杂八的东西',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
    extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('@neilsustc/markdown-it-katex'), {"strict": false, "throwOnError" : false, "errorColor" : " #cc0000"})
            md.use(require("markdown-it-disable-url-encode"))
        }
  },
  head,
  plugins,
  themeConfig,
}

