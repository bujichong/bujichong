(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{514:function(t,a,r){"use strict";r.r(a);var s=r(6),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("img",{attrs:{src:"/images/pnggif-1.png",alt:""}})]),t._v(" "),r("p",[t._v("PNG这种文件格式值得科普下,对比GIF来说")]),t._v(" "),r("h4",{attrs:{id:"png和gif都支持动画"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#png和gif都支持动画"}},[t._v("#")]),t._v(" "),r("strong",[t._v("PNG和GIF都支持动画")])]),t._v(" "),r("p",[t._v("PNG的动画也叫APNG,只是firefox支持,详见 "),r("a",{attrs:{href:"http://ooxx.me/apng.orz",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ooxx.me/apng.orz"),r("OutboundLink")],1),t._v(" ,如Firefox看这里的favicon,是会动滴\n所以动画图片来说,还是GIF支持最好")]),t._v(" "),r("h4",{attrs:{id:"第一种png叫png8-索引色透明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第一种png叫png8-索引色透明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("第一种PNG叫PNG8(索引色透明)")])]),t._v(" "),r("p",[t._v("简单说可以理解为静态的GIF\n他们都只有256色,也支持索引透明,就是指定一个像素点是不是透明\n但是PNG由于算法的优势,体积比较少\n所以,静态GIF完全可用PNG8取代")]),t._v(" "),r("h4",{attrs:{id:"第二种png也叫png8-alpha透明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第二种png也叫png8-alpha透明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("第二种PNG也叫PNG8(Alpha透明)")])]),t._v(" "),r("p",[t._v("牛逼在可指定像素点的透明度,例如50%透明度\n这种优点在于比PNG24/32体积小,但效果一样\n缺点在于IE6支持不好,~~~~会把半透明的像素点显示成全透明")]),t._v(" "),r("h4",{attrs:{id:"第三种png叫png24"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第三种png叫png24"}},[t._v("#")]),t._v(" "),r("strong",[t._v("第三种PNG叫PNG24")])]),t._v(" "),r("p",[t._v("和PNG8的区别仅在于体积更大")]),t._v(" "),r("h4",{attrs:{id:"更正-png24不透明-但是颜色数很多-不止256色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更正-png24不透明-但是颜色数很多-不止256色"}},[t._v("#")]),t._v(" "),r("strong",[t._v("更正")]),t._v(": PNG24不透明,但是颜色数很多,不止256色")]),t._v(" "),r("p",[t._v("而Photoshop里导出的png24其实是png32")]),t._v(" "),r("h4",{attrs:{id:"第四种png叫png32"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#第四种png叫png32"}},[t._v("#")]),t._v(" "),r("strong",[t._v("第四种PNG叫PNG32")])]),t._v(" "),r("p",[t._v("和photoshop的PSD一样,是Fireworks的默认源文件格式,包含图层和通道信息\n和PNG24的区别在于有图层\n缺点在于IE6支持不好,会把透明区域显示成蓝灰底色")]),t._v(" "),r("h4",{attrs:{id:"更正-png32和png24的区别就是多了透明信息"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更正-png32和png24的区别就是多了透明信息"}},[t._v("#")]),t._v(" "),r("strong",[t._v("更正")]),t._v(": PNG32和PNG24的区别就是多了透明信息")]),t._v(" "),r("h4",{attrs:{id:"新增-第五种png叫fireworks源文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#新增-第五种png叫fireworks源文件"}},[t._v("#")]),t._v(" "),r("strong",[t._v("(新增)第五种PNG叫Fireworks源文件")])]),t._v(" "),r("p",[t._v("类似于Phosothop的PSD,有图层通道信息神马的\n是PNG的一种扩展\n这种丢到浏览器里表现和PNG32一样")]),t._v(" "),r("p",[t._v("简单的归纳就是")]),t._v(" "),r("h4",{attrs:{id:"动画"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" "),r("strong",[t._v("动画")]),t._v(":")]),t._v(" "),r("p",[t._v("支持: GIF, APNG只在firefox支持\n不支持: 非Firefox的PNG")]),t._v(" "),r("h4",{attrs:{id:"索引色透明-某像素是全透明还是全不透明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引色透明-某像素是全透明还是全不透明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("索引色透明")]),t._v("(某像素是全透明还是全不透明):")]),t._v(" "),r("p",[t._v("支持: GIF/PNG都支持\n不支持: "),r("strong",[t._v("IE6下")]),t._v("的PNG8(Alpha透明)和PNG24/32")]),t._v(" "),r("h4",{attrs:{id:"alpha透明-可指定透明度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alpha透明-可指定透明度"}},[t._v("#")]),t._v(" "),r("strong",[t._v("Alpha透明")]),t._v("(可指定透明度)**: **")]),t._v(" "),r("p",[t._v("支持:PNG8(Aplha透明)/PNG32\n不支持: GIF/PNG8(索引色透明)/PNG24")]),t._v(" "),r("h4",{attrs:{id:"图层"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#图层"}},[t._v("#")]),t._v(" "),r("strong",[t._v("图层")])]),t._v(" "),r("p",[t._v("支持: PNG(FW源文件)\n不支持: PNG8/PNG24/PNG32/GIF")]),t._v(" "),r("h4",{attrs:{id:"颜色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#颜色"}},[t._v("#")]),t._v(" "),r("strong",[t._v("颜色")])]),t._v(" "),r("p",[t._v("256色：GIF PNG8(2种)\n其他的格式颜色数不过来,好多")]),t._v(" "),r("h4",{attrs:{id:"附加说明"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#附加说明"}},[t._v("#")]),t._v(" "),r("strong",[t._v("附加说明:")])]),t._v(" "),r("p",[t._v("Photoshop 只能创建GIF、 PNG8(索引透明)和PNG24(其实是PNG32)")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/pnggif-3.png",alt:""}})]),t._v(" "),r("p",[t._v("Fireworks 能创建任意格式的GIF和PNG")]),t._v(" "),r("p",[r("img",{attrs:{src:"/images/pnggif-4.png",alt:""}})]),t._v(" "),r("p",[t._v("PNG8(索引透明)在创建的时候有个参数叫(PS杂边|FW色板),这个作用就是用杂边色加上像素点的透明度例如50%,生成伪透明的不透明像素点\n适用于固定底色的伪半透明,例子里用的杂边是黑色,在白背景下就很明显")]),t._v(" "),r("p",[t._v("PNG8(Alpha透明)在IE6下会有过度裁剪的问题,可能是把半透明的像素都去掉了,所以某些图片会如最上面第一张图所示,被狗咬的感觉\n规避方案:")]),t._v(" "),r("p",[t._v("1.用2张图,IE6用PNG8(索引透明),非IE6用PNG8(Alpha透明),在CSS里用_这个IE6hack来区别\n2.半透明在作图的时候就要考虑到被去掉后的样子,对设计师有要求,不大现实\n3.说服自己接受这坨大便,然后咽下去就这样了你想咋样")]),t._v(" "),r("p",[t._v("静态GIF、PNG 24、PNG32不大推荐在网页上用")])])}),[],!1,null,null,null);a.default=_.exports}}]);