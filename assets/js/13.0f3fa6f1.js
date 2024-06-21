(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{510:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("blockquote",[n("p",[t._v("在页面中，我们想对服务器传过来的一张图片给固定的宽高，but，还想让他保持宽高比，这麻烦吗？用了object-fit就不难了。\n")])]),t._v(" "),n("p",[n("strong",[t._v("object-fit")]),t._v(" 值包括：")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".fill")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fill"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".contain")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" contain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".cover")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cover"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".none")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".scale-down")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" scale-down"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("这些值的含义：")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("fill")]),t._v(": 中文释义“填充”。默认值。替换内容拉伸填满整个content box, 不保证保持原有的比例。")]),t._v(" "),n("li",[n("strong",[t._v("contain")]),t._v(": 中文释义“包含”。保持原有尺寸比例。保证替换内容尺寸一定可以在容器里面放得下。因此，此参数可能会在容器内留下空白。")]),t._v(" "),n("li",[n("strong",[t._v("cover")]),t._v(": 中文释义“覆盖”。保持原有尺寸比例。保证替换内容尺寸一定大于容器尺寸，宽度和高度至少有一个和容器一致。因此，此参数可能会让替换内容（如图片）部分区域不可见。")]),t._v(" "),n("li",[n("strong",[t._v("none")]),t._v(": 中文释义“无”。保持原有尺寸比例。同时保持替换内容原始尺寸大小。")]),t._v(" "),n("li",[n("strong",[t._v("scale-down")]),t._v(": 中文释义“降低”。就好像依次设置了"),n("strong",[t._v("none")]),t._v("或"),n("strong",[t._v("contain")]),t._v(", 最终呈现的是尺寸比较小的那个。")])]),t._v(" "),n("p",[t._v("可能这样解释不够直观，抄个例子：")]),t._v(" "),n("p",[n("img",{attrs:{src:"/images/20171128-object-fit.png",alt:"20171128-object-fit"}})]),t._v(" "),n("p",[t._v("so，如果我们想实现图片指定宽高还能保持比例，样式大概是这样：")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("150px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".box img")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("object-fit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cover"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])]),n("p",[t._v("ok，我觉得我解释清楚了。")])])}),[],!1,null,null,null);s.default=e.exports}}]);