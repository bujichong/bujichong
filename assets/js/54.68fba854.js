(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{565:function(s,t,r){"use strict";r.r(t);var n=r(6),o=Object(n.a)({},(function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[r("blockquote",[r("p",[s._v("mysql连接的时候，当root用户密码为空时，php无法连接数据库，\n为此必须先修改root用户密码(当然你也可以不用root做用户名连接数据，这里只是方便平时调试和学习使用，顺便记录一下)\n")])]),s._v(" "),r("h3",{attrs:{id:"分以下几个步奏"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分以下几个步奏"}},[s._v("#")]),s._v(" 分以下几个步奏：")]),s._v(" "),r("p",[r("strong",[s._v("1，停止mysql服务")]),s._v("\ncmd中输入  net stop mysql   //停止Mysql服务")]),s._v(" "),r("p",[r("strong",[s._v("2，然后在my.ini文件中的[mysqld]下面一行添加 skip_grant_tables(加上这句话）")])]),s._v(" "),r("p",[r("strong",[s._v("3，执行cmd，将目录切换到mysql目录下的bin目录")]),s._v("\n如我的是C:\\Program Files\\MySQL\\MySQL Server 5.0\\bin\n所以在cmd中输入cd C:\\Program Files\\MySQL\\MySQL Server 5.1\\bin")]),s._v(" "),r("p",[r("strong",[s._v("4，重新开启mysql服务，然后")]),s._v("\n在cmd中输入 mysql -uroot -p ,这时cmd将切换成mysql模式\n在mysql中输入\nUPDATE user SET Password=PASSWORD(‘newpassword’) where USER=’root’\n好了，现在你的root密码已经更改成newpassword了")]),s._v(" "),r("p",[r("strong",[s._v("5，将my.ini中添加的 skip_grant_tables 删除")])]),s._v(" "),r("p",[s._v("ok，可以了~~~")])])}),[],!1,null,null,null);t.default=o.exports}}]);