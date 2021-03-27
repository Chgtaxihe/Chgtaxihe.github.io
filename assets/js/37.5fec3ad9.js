(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{629:function(e,a,t){"use strict";t.r(a);var s=t(30),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("折腾了一下午，将博客从Jekyll迁到了VuePress，终于不用忍受Jekyll别扭的路径啦。")]),e._v(" "),t("h1",{attrs:{id:"遇到的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遇到的坑"}},[e._v("#")]),e._v(" 遇到的坑")]),e._v(" "),t("h2",{attrs:{id:"渲染数学公式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染数学公式"}},[e._v("#")]),e._v(" 渲染数学公式")]),e._v(" "),t("p",[e._v("然而发现"),t("code",[e._v("vuepress-plugin-mathjax")]),e._v("插件不能渲染"),t("code",[e._v("/begin")]),e._v("，搜索了很久都找不到解决方案（猜测是"),t("code",[e._v("mathjax")]),e._v("版本太低了）。")]),e._v(" "),t("p",[e._v("转用"),t("code",[e._v("Katex")]),e._v("，测试了3个插件")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("markdown-it-math")]),e._v("：不能正常渲染")]),e._v(" "),t("li",[t("code",[e._v("markdown-it-texmath")]),e._v("：许多符号不支持（如"),t("code",[e._v("\\mod")]),e._v("）")]),e._v(" "),t("li",[t("code",[e._v("markdown-it-katex")]),e._v("：许多符号不支持（如"),t("code",[e._v("\\mod")]),e._v("）")])]),e._v(" "),t("p",[e._v("最终是使用"),t("a",{attrs:{href:"https://github.com/yzhang-gh/markdown-it-katex",target:"_blank",rel:"noopener noreferrer"}},[e._v("markdown-it-katex"),t("OutboundLink")],1),e._v("解决，插件名"),t("code",[e._v("@neilsustc/markdown-it-katex")])]),e._v(" "),t("p",[t("code",[e._v("config.js")]),e._v("部分配置如下")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  markdown: {\n    lineNumbers: true, // 代码行号\n    extendMarkdown: md => {\n            md.set({\n                html: true\n            })\n            md.use(require('@neilsustc/markdown-it-katex'), {\"throwOnError\" : false, \"errorColor\" : \" #cc0000\"})\n        }\n  },\n  head: [\n        ['link', {\n            rel: 'stylesheet',\n            href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-alpha/dist/katex.min.css'\n        }],\n        ['link', {\n            rel: \"stylesheet\",\n            href: \"https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css\"\n        }]\n    ],\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br")])]),t("h2",{attrs:{id:"you-may-need-an-appropriate-loader-to-handle-this-file-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#you-may-need-an-appropriate-loader-to-handle-this-file-type"}},[e._v("#")]),e._v(" You may need an appropriate loader to handle this file type")]),e._v(" "),t("p",[e._v("需要根据错误提示，具体问题具体分析。")]),e._v(" "),t("p",[e._v("对于我而言，解决方案如下：")]),e._v(" "),t("p",[t("code",[e._v("loader")]),e._v("不能识别"),t("code",[e._v("PNG")]),e._v("后缀的文件，改为"),t("code",[e._v("png")]),e._v("即可")]),e._v(" "),t("h2",{attrs:{id:"error-can-t-resolve-assets-xxx-e4-bd-bf-e7-94-a8-e6-9c-89-e6-84-9f-1-png"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-can-t-resolve-assets-xxx-e4-bd-bf-e7-94-a8-e6-9c-89-e6-84-9f-1-png"}},[e._v("#")]),e._v(" Error: Can't resolve './assets/xxx%E4%BD%BF%E7%94%A8%E6%9C%89%E6%84%9F_1.png")]),e._v(" "),t("p",[e._v("https://segmentfault.com/a/1190000022275001")]),e._v(" "),t("h2",{attrs:{id:"无法使用element-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无法使用element-ui"}},[e._v("#")]),e._v(" 无法使用Element-Ui")]),e._v(" "),t("p",[e._v("https://blog.csdn.net/qq_32855007/article/details/108726430")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("至此，本地build成功")])])}),[],!1,null,null,null);a.default=n.exports}}]);