(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{630:function(t,s,a){"use strict";a.r(s);var i=a(30),l=Object(i.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("博客一直在用Cloudflare CDN，在国内访问速度很慢，最近给博客套了个百度云加速CDN，在这个过程中学到了一点东西，特此记录一下。")]),t._v(" "),a("h1",{attrs:{id:"dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[t._v("#")]),t._v(" DNS")]),t._v(" "),a("p",[t._v("DNS是域名系统（Domain Name System）的缩写，最常见的用途是将域名映射为ip地址。")]),t._v(" "),a("h2",{attrs:{id:"获取ip地址的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取ip地址的过程"}},[t._v("#")]),t._v(" 获取IP地址的过程")]),t._v(" "),a("p",[t._v("现在假设用户要访问"),a("code",[t._v("blog.chgtaxihe.top")]),t._v("，此时解析请求会被发送到递归解析器中，并最终返回结果。")]),t._v(" "),a("p",[t._v("在解析过程中，递归解析器将执行以下操作（可通过"),a("code",[t._v("dig +trace blog.chgtaxihe.top")]),t._v("查看）")]),t._v(" "),a("ol",[a("li",[t._v("解析器向DNS根域名服务器“.”查询")]),t._v(" "),a("li",[t._v("根域名服务器根据其记录的顶级域（TLD）DNS服务器作出响应。")]),t._v(" "),a("li",[t._v('然后，解析器向TLD域名服务器".top"发送请求')]),t._v(" "),a("li",[t._v("随后，TLD域名服务器告知解析器域名对应的域名服务器NS（"),a("code",[t._v("chgtaxihe.top")]),t._v("的域名服务器是"),a("code",[t._v("elma.ns.cloudflare.com")]),t._v("）")]),t._v(" "),a("li",[t._v("解析器向该NS发送请求")]),t._v(" "),a("li",[t._v("通常来说，NS会直接将对应的IP地址返回给解析器，但由于"),a("code",[t._v("blog.chgtaxihe.top")]),t._v("设置了NS记录（即该域名的解析委派给了其他服务器），因此"),a("code",[t._v("elma.ns.cloudflare.com")]),t._v("将返回"),a("code",[t._v("blog.chgtaxihe.top")]),t._v("对应的域名服务器"),a("code",[t._v("ns1.alidns.com")])]),t._v(" "),a("li",[t._v("解析器向"),a("code",[t._v("ns1.alidns.com")]),t._v("发送请求")]),t._v(" "),a("li",[a("code",[t._v("ns1.alidns.com")]),t._v("中保存有"),a("code",[t._v("blog.chgtaxihe.top")]),t._v("的CNAME记录，直接返回给解析器")]),t._v(" "),a("li",[t._v("解析器继续解析该CNAME记录")])]),t._v(" "),a("h2",{attrs:{id:"dns查询的2种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns查询的2种方式"}},[t._v("#")]),t._v(" DNS查询的2种方式")]),t._v(" "),a("ul",[a("li",[t._v("递归查询：客户端要求服务器将记录返回客户端")]),t._v(" "),a("li",[t._v("迭代查询：客户端允许服务器返回能够给出的最佳应答。如果无对应记录，将返回对较低级别域名空间的DNS服务器引用，随后客户端继续向该引用查询")])]),t._v(" "),a("h2",{attrs:{id:"dns记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns记录"}},[t._v("#")]),t._v(" DNS记录")]),t._v(" "),a("p",[t._v("常见的DNS记录如下")]),t._v(" "),a("ul",[a("li",[t._v("A：地址记录，可将域名关联到对应的IP地址（IPv4）")]),t._v(" "),a("li",[t._v("AAAA：IPv6地址记录，类似于A记录")]),t._v(" "),a("li",[t._v("CNAME：规范名称记录，将一个别名关联到另一个域名，但不提供IP地址")]),t._v(" "),a("li",[t._v("NS：域名服务器记录，用于确定那些服务器负责解析")])]),t._v(" "),a("h1",{attrs:{id:"如何让cloudflare与百度云加速共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何让cloudflare与百度云加速共存"}},[t._v("#")]),t._v(" 如何让Cloudflare与百度云加速共存")]),t._v(" "),a("p",[t._v("由于某些特殊原因，如果在Cloudflare添加CNAME指向百度云加速服务器，会出现域名无法解析的情况：可以查询到CNAME记录，但无法获取IP地址。")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("dig")]),t._v("命令可以看到，当查询"),a("code",[t._v("www.example.com")]),t._v("（被加速的域名）时，cloudflare返回了一条指向"),a("code",[t._v("example.com")]),t._v("的NS记录，但由于该地址没有部署dns服务器，因此当我们"),a("code",[t._v("nslookup")]),t._v("该地址时，会得到一条服务器超时的响应。")]),t._v(" "),a("p",[t._v("这也给我们提供了思路："),a("code",[t._v("Cloudflare")]),t._v(" "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[a("mover",[a("mo",[a("mo",[t._v("⟶")])],1),a("mrow",[a("mi",[t._v("n")]),a("mi",[t._v("s")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\overset{ns}{\\longrightarrow}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.1233920000000002em","vertical-align":"-0.011em"}}),a("span",{staticClass:"mrel"},[a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.1123920000000003em"}},[a("span",{staticStyle:{top:"-3em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",[a("span",{staticClass:"mop"},[t._v("⟶")])])]),a("span",{staticStyle:{top:"-3.7110000000000003em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("s")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.011em"}},[a("span")])])])])])])])]),t._v(" "),a("code",[t._v("其他NS")]),t._v("（如阿里、腾讯）"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mo",[a("mover",[a("mo",[a("mo",[t._v("⟶")])],1),a("mrow",[a("mi",[t._v("c")]),a("mi",[t._v("n")]),a("mi",[t._v("a")]),a("mi",[t._v("m")]),a("mi",[t._v("e")])],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\overset{cname}{\\longrightarrow}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.1233920000000002em","vertical-align":"-0.011em"}}),a("span",{staticClass:"mrel"},[a("span",{staticClass:"mop op-limits"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"1.1123920000000003em"}},[a("span",{staticStyle:{top:"-3em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",[a("span",{staticClass:"mop"},[t._v("⟶")])])]),a("span",{staticStyle:{top:"-3.7110000000000003em","margin-left":"0em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("c")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("n")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("a")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("m")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("e")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.011em"}},[a("span")])])])])])])])]),t._v(" 百度云加速")])])}),[],!1,null,null,null);s.default=l.exports}}]);