(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{254:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return d}),n.d(e,"ThemeQuery",function(){return p});var o=n(9),i=n.n(o),a=n(0),r=n.n(a),l=n(291),c=n(271),s=n(266),d=function(t){function e(e){var n;n=t.call(this,e)||this;var o=c.a,i=n.props.data.themeYaml;if("undefined"!=typeof window){var a=window.localStorage.getItem("drama"),r=window.localStorage.getItem("theme");a&&(o=JSON.parse(a)),r&&(i=JSON.parse(r))}return n.state={drama:o,theme:i},n}i()(e,t);var n=e.prototype;return n.previewCode=function(t,e){return'\n<!DOCTYPE html><html><head><meta charset="utf-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312"><title>PinkX - 小粉红模拟器</title>\n<link rel="stylesheet" type="text/css" media="screen" href="/demo/jjwxc.min.css" /></head><body bgcolor="#FFE7F7" topmargin="0">\n<section class="top"><div class="google-ad">广告区</div></section><section class="boardname">\n<div class="left">面包屑导航</div><div class="right">登录信息</div></section>\n<table width="760" border="0" align="center" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td bgcolor="#E8F3FF"><div id="msgsubject" style="float:left;">主题：小粉红模拟器\n<font color="#999999" size="-1">[1]</font></div><div style="float:right;">\n<span style="font-weight:bold;font-size:14px;color:blue;cursor:pointer;display:inline;" id="addfavorite" onclick="addfavorite(2, 5068113)">收藏该帖</span></div></td></tr>\n<tr class="comment_5068113"><td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tbody><tr><td valign="bottom" width="350"><div class="image1" style="display:inline-block;"></div>\n<br></td><td class="textbook"><div align="right"><img class="heartimg" src="/demo/img/heart.gif" width="10" height="9">\n<a href="#"><font color="#0d7328" size="-1">【出版书广告区】</font></a></div></td></tr></tbody>\n</table></td></tr><tr class="comment_5068113 gifffter"><td>\n<table width="760" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td class="read"><div id="topic">\n'+Object(l.a)(t,e)+'\n</div></td></tr></tbody></table></td></tr><tr class="comment_5068113"><td class="authorname">\n<div align="left"><font color="99CC00" size="-1">№0 </font><font color="99CC00">☆☆☆</font>PINKX\n<font color="#999999">78adf6e4</font><font color="99CC00">于</font>2019-02-29 11:11:11留言\n<font color="99CC00">☆☆☆</font></div></td></tr><tr class="comment_5068113"><td height="1">\n<div align="right"></div></td></tr></tbody></table><div align="center">\n<hr width="760" color="#99CC00" size="1"></div></body></html>\n    '},n.render=function(){var t=this.state,e=t.drama,n=t.theme;return r.a.createElement(a.Fragment,null,r.a.createElement(s.f,null),r.a.createElement(s.g,{id:"screen",srcDoc:this.previewCode(e,n)}))},e}(r.a.PureComponent),p="3376140715"},263:function(t,e,n){},264:function(t){t.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},266:function(t,e,n){"use strict";var o=n(9),i=n.n(o),a=n(273),r=n.n(a),l=n(0),c=n.n(l),s=n(261),d={colors:{primary:"#FEDBD0",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},p={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"};n(263);function m(){var t=r()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return m=function(){return t},t}var u=Object(s.b)(m(),d.colors.bg,d.colors.primary,d.colors.bg,d.colors.grey.default,p.phone,d.colors.grey.dark,d.transitions.normal,d.colors.primary,d.colors.grey.dark,d.colors.primary,d.colors.grey.dark),f=s.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}@media ","{min-height:100%;}"],p.tablet,p.phone),g=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.children;return c.a.createElement(s.a,{theme:d},c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(F,null),c.a.createElement(_,null),c.a.createElement(f,null,t)))},e}(c.a.PureComponent),h=s.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:36vw;padding-right:24vw;padding-bottom:100px;box-sizing:border-box;z-index:0;"]),b=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){var t=this.props.children;return c.a.createElement(h,{id:"main"},c.a.createElement(Y,null),t)},e}(c.a.PureComponent),w=s.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;"]),y=s.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100vw;height:99vh;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),x=n(268),v=n.n(x),E=n(269),k=n.n(E),z=s.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;top:0;bottom:0;left:0;right:0;color:#ffffff;"]),C=s.c.div.withConfig({displayName:"Footer__Content",componentId:"sc-1bz5sjq-1"})(["position:absolute;bottom:0;right:0;width:60vw;height:300px;box-sizing:border-box;"]),j=s.c.div.withConfig({displayName:"Footer__List",componentId:"sc-1bz5sjq-2"})(["padding:20px;padding-top:100px;p{font-size:14px;line-height:1.5;margin:5px;color:#ffffff;img{position:absolute;width:160px;height:160px;right:0;top:100px;opacity:0;transition:opacity 300ms;}}h4{color:#ffffff;}p:hover{img{opacity:1;}}"]),_=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return c.a.createElement(z,null,c.a.createElement(C,null,c.a.createElement(v.a,{cellHeight:300,cols:2},c.a.createElement(k.a,{cols:1},c.a.createElement(j,null,c.a.createElement("h4",null,"关注"),c.a.createElement("a",{href:"https://weibo.com/uuPin1",target:"_black"},c.a.createElement("p",null,"微博：@游里")),c.a.createElement("p",{className:"wechat"},"微信：uupin1",c.a.createElement("img",{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fyavwpwln2j30e80e8wep.jpg"})),c.a.createElement("p",null,"QQ群：123456789"))),c.a.createElement(k.a,{cols:1},c.a.createElement(j,null,c.a.createElement("h4",null,"帮助"),c.a.createElement("p",null,"使用教程"),c.a.createElement("p",null,"常见问题"),c.a.createElement("p",null,"报告BUG"))))))},e}(c.a.PureComponent),N=n(264),P=n(265),I=n.n(P),S=n(51),F=function(t){return c.a.createElement(S.StaticQuery,{query:q,render:function(e){var n=e.site.siteMetadata,o=n.defaultTitle,i=n.titleTemplate,a=n.siteUrl,r=n.defaultDescription,l={title:t.title||o,description:t.description||r,url:""+a+(t.pathname||"/")};return c.a.createElement(I.a,{title:l.title,titleTemplate:i},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}))},data:N})};F.defaultProps={title:null,description:null,pathname:null,theme:!1};var q="4287772990",Q=n(267),T=n.n(Q),D=n(18),K=s.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:40vw;height:100px;top:50px;left:36vw;z-index:999;"]),X=s.c.div.withConfig({displayName:"Header__Font",componentId:"sc-1ompd6b-1"})(["text-align:center;line-height:100px;height:100px;color:#968082;"]),Y=function(t){function e(){return t.apply(this,arguments)||this}return i()(e,t),e.prototype.render=function(){return c.a.createElement(K,null,c.a.createElement(T.a,{container:!0},c.a.createElement(T.a,{item:!0,xs:1}),c.a.createElement(T.a,{item:!0,xs:4},c.a.createElement(X,null,"PINKX")),c.a.createElement(T.a,{item:!0,xs:2},c.a.createElement(D.Link,{to:"/"},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),c.a.createElement(T.a,{item:!0,xs:4},c.a.createElement(X,null,"编帖助手")),c.a.createElement(T.a,{item:!0,xs:1})))},e}(c.a.PureComponent),L=s.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:8vw;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}"]);n.d(e,"e",function(){return g}),n.d(e,"h",function(){return b}),n.d(e,"a",function(){return w}),n.d(e,"g",function(){return y}),n.d(e,"c",function(){return _}),n.d(e,"f",function(){return F}),n.d(e,"d",function(){return Y}),n.d(e,"b",function(){return L})},271:function(t,e,n){"use strict";e.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://placem.at/things?txt=海报&w=1000&h=1000",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},272:function(t,e,n){var o=n(36).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||n(22)&&o(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},291:function(t,e,n){"use strict";n(272);var o=function(t){return'\n<section id="title">\n<h1>'+t.title+"</h1>\n<h5>"+t.episode+"</h5>\n<p>"+t.subtitle+"</p>\n</section>\n  "},i=function(t){return'\n<section id="cover">\n<imgChunk class="img" style="background-image:url('+t.dramaPoster+')"></imgChunk>\n</section>\n  '},a=function(t,e){return'\n<section id="content">\n'+r(t.staff,"staff","制作组",e.author)+"\n"+r(t.cast,"cast","配音组")+"\n"+r(t.ed,"ed","片尾曲")+"\n</section>\n  "},r=function(t,e,n,o){console.log(o);var i="staff"===e&&o?'\n<item><a href="https://weibo.com/n/'+o.weibo+'" class="item" target="_black">\n<span class="job">宣传</span><span class="name">'+o.name+"&pinkX</span></a></item>\n      ":"";return'\n<group class="'+e+'">\n<h3>'+n+"</h3>\n    "+t.map(function(t){return"\n<item>\n<a "+(t.weibo?'href="https://weibo.com/n/'+t.weibo+'" target="_black"':" ")+' class="item">\n<span class="job">'+t.job+'</span>\n<span class="name">'+t.name+"</span>\n"+(t.organization?'<span class="org">'+t.organization+"</span>":"")+"\n</a>\n</item>\n        "}).join("")+"\n"+i+"\n</group>\n  "},l=function(t){return'\n<section id="links">\n<h3>链接</h3>\n      '+t.map(function(t){return"\n<item>\n<a href="+t.url+' class="link" target="_black">'+t.name+"</a>\n"+(t.other?'<span class="other">'+t.other+"</span>":"")+"\n</item>\n          "}).join("")+"\n</section>\n  "},c=function(){return'\n<section id="state">\n<h3>- 声明 -</h3>\n<item>本作品仅供配音爱好者学习、交流使用，请勿进行二次修改和用于商业用途。</item>\n<item>转载时请保留以上信息完整，谢谢合作！</item>\n</section>\n  '};e.a=function(t,e){return'\n<pinkx id="pinkx">\n'+o(t)+"\n"+i(t)+"\n"+a(t,e)+"\n"+l(t.links)+"\n"+c()+'\n</pinkx>\n<link rel="stylesheet" type="text/css" media="screen" href="'+e.css+'" />\n  '}}}]);
//# sourceMappingURL=component---src-templates-theme-tsx-e41981c50d21b913b2c1.js.map