(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{530:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("重新装电脑，安装express到全局总是报错，要么是找不到express要么是express不是内部或外部命令，之前处理过，是通过设置NODE_PATH处理的，总是忘掉，记录一下。")])]),s._v(" "),t("h3",{attrs:{id:"全局安装express"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#全局安装express"}},[s._v("#")]),s._v(" 全局安装express")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm install express "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gd\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("gd express"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("generator\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("generator是express 4.0以后分离出来的，也需要安装\n安装以后，可能还是不行，运行需要express时，仍然提示 "),t("strong",[s._v("Error: Cannot find module 'express'")]),s._v(",")]),s._v(" "),t("p",[s._v("这个时候，我们还需要在环境变量里添加node_path\n电脑右键\\属性\\高级系统设置\\高级\\环境变量\\系统变量\n添加： "),t("strong",[s._v("NODE_PATH")]),s._v("\n路径对应")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("出来的路径，大体是： "),t("strong",[s._v("C:\\Users\\0\\AppData\\Roaming\\npm\\node_modules")]),s._v(" 这样的")]),s._v(" "),t("p",[s._v("设置完路径以后再跑node命令，express已经可以使用了。")]),s._v(" "),t("h3",{attrs:{id:"附录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[s._v("#")]),s._v(" 附录：")]),s._v(" "),t("h4",{attrs:{id:"查看当前已安装的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前已安装的模块"}},[s._v("#")]),s._v(" 查看当前已安装的模块：")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\nnpm list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\nnpm list "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("depth"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("global\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"查看全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看全局配置"}},[s._v("#")]),s._v(" 查看全局配置")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm config ls "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"查看系统全局的路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看系统全局的路径"}},[s._v("#")]),s._v(" 查看系统全局的路径")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[s._v("npm root "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("这个就可以帮我们查看node npm全局包对应的位置了")]),s._v(" "),t("h3",{attrs:{id:"设置node-path为环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置node-path为环境变量"}},[s._v("#")]),s._v(" 设置NODE_PATH为环境变量")]),s._v(" "),t("p",[s._v("最简单的就是直接把现在的目录直接设为环境变量")]),s._v(" "),t("h3",{attrs:{id:"其他常用node命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他常用node命令"}},[s._v("#")]),s._v(" 其他常用node命令")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("npm list  查看当前目录下已安装的node包")])]),s._v(" "),t("li",[t("p",[s._v("npm help  查看帮助命令")])]),s._v(" "),t("li",[t("p",[s._v("npm update    更新node模块")])]),s._v(" "),t("li",[t("p",[s._v("npm uninstall    卸载模块")])]),s._v(" "),t("li",[t("p",[s._v("npm install -g cnpm --registry=https://registry.npm.taobao.org    安装cnpm")])]),s._v(" "),t("li",[t("p",[s._v("npm config set registry http://registry.npm.taobao.org/   设置淘宝镜像")])]),s._v(" "),t("li",[t("p",[s._v("npm root  查看当前包的安装路径")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);