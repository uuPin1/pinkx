(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v}),n.d(t,"ThemeQuery",function(){return y});n(277);var i=n(9),a=n.n(i),o=n(0),r=n.n(o),l=n(270),c=n(19),d=n(279),s=n(302),p=n(282),m=n(276),u=n(271),h=l.c.section.withConfig({displayName:"Theme__Wrapper",componentId:"sc-4cy18s-0"})(["width:100vw;height:100vh;padding-left:3vw;padding-right:18vw;padding-top:3vw;padding-bottom:3vw;background-color:#696969;box-sizing:border-box;position:fixed;p{margin:0;}@media ","{width:100%;height:100%;padding-left:30px;padding-right:18px;padding-top:30px;padding-bottom:30px;}"],u.a.tablet),g=l.c.div.withConfig({displayName:"Theme__Logo",componentId:"sc-4cy18s-1"})(["position:absolute;width:3vw;right:6vw;top:-2vw;a,img{width:100%;height:100%;}@media ","{width:30px;left:24px;top:16px;}"],u.a.tablet),f=l.c.div.withConfig({displayName:"Theme__Info",componentId:"sc-4cy18s-2"})(["position:absolute;right:1vw;top:30vh;width:15vw;> div{padding-top:3vw;background-color:#eeeeee;}@media ","{right:10px;top:10px;width:150px;> div{padding-top:0px;}h3{font-size:20px;padding-left:64px;margin-bottom:0;}}"],u.a.tablet),b=l.c.div.withConfig({displayName:"Theme__Author",componentId:"sc-4cy18s-3"})(["a{color:#696969;font-size:12px;line-height:1.2;}"]),w=l.c.div.withConfig({displayName:"Theme__Tags",componentId:"sc-4cy18s-4"})(["span{margin-right:10px;font-size:15px;}@media ","{display:none;}"],u.a.tablet),x=l.c.ul.withConfig({displayName:"Theme__List",componentId:"sc-4cy18s-5"})(["font-size:14px;list-style:none;margin:0;padding:0;margin-bottom:8px;li{margin:0;padding:0;}@media ","{display:none;}"],u.a.tablet),v=function(e){function t(t){var n;n=e.call(this,t)||this;var i=p.a,a=n.props.data.themeYaml;if("undefined"!=typeof window){var o=window.sessionStorage.getItem("drama");o&&(i=JSON.parse(o))}return n.state={drama:i,theme:a},n}a()(t,e);var n=t.prototype;return n.previewCode=function(e,t){return'\n<!DOCTYPE html><html><head><meta charset="utf-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312"><title>PinkX - 小粉红模拟器</title>\n<link rel="stylesheet" type="text/css" media="screen" href="/demo/jjwxc.min.css" /></head><body bgcolor="#FFE7F7" topmargin="0">\n<section class="top"><div class="google-ad">广告区</div></section><section class="boardname">\n<div class="left">面包屑导航</div><div class="right">登录信息</div></section>\n<table width="760" border="0" align="center" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td bgcolor="#E8F3FF"><div id="msgsubject" style="float:left;">主题：小粉红模拟器\n<font color="#999999" size="-1">[1]</font></div><div style="float:right;">\n<span style="font-weight:bold;font-size:14px;color:blue;cursor:pointer;display:inline;" id="addfavorite" onclick="addfavorite(2, 5068113)">收藏该帖</span></div></td></tr>\n<tr class="comment_5068113"><td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tbody><tr><td valign="bottom" width="350"><div class="image1" style="display:inline-block;"></div>\n<br></td><td class="textbook"><div align="right"><img class="heartimg" src="/demo/img/heart.gif" width="10" height="9">\n<a href="#"><font color="#0d7328" size="-1">【出版书广告区】</font></a></div></td></tr></tbody>\n</table></td></tr><tr class="comment_5068113 gifffter"><td>\n<table width="760" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td class="read"><div id="topic">\n'+Object(s.a)(e,t)+'\n</div></td></tr></tbody></table></td></tr><tr class="comment_5068113"><td class="authorname">\n<div align="left"><font color="99CC00" size="-1">№0 </font><font color="99CC00">☆☆☆</font>PINKX\n<font color="#999999">78adf6e4</font><font color="99CC00">于</font>2019-02-29 11:11:11留言\n<font color="99CC00">☆☆☆</font></div></td></tr><tr class="comment_5068113"><td height="1">\n<div align="right"></div></td></tr></tbody></table><div align="center">\n<hr width="760" color="#99CC00" size="1"></div></body></html>\n    '},n.render=function(){var e=this.state,t=e.drama,n=e.theme;return r.a.createElement(o.Fragment,null,r.a.createElement(m.g,null),r.a.createElement(h,null,r.a.createElement(m.h,{id:"screen",srcDoc:this.previewCode(t,n)}),r.a.createElement(f,null,r.a.createElement(d.b,null,r.a.createElement(g,null,r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),r.a.createElement(d.c,null,r.a.createElement("h3",null,n.name,r.a.createElement(b,null,r.a.createElement("a",{href:"https://weibo.com/n/"+n.author.weibo,target:"_blank"},"@",n.author.name))),r.a.createElement(x,null,r.a.createElement("li",null,r.a.createElement("strong",null,n.description.hover?"有":"无")," 鼠标悬停动画"),r.a.createElement("li",null,r.a.createElement("strong",null,n.description.opening?"有":"无")," 开场动画"),r.a.createElement("li",null,r.a.createElement("strong",null,n.description.animation?"有":"无")," 背景动画"),r.a.createElement("li",null,r.a.createElement("strong",null,n.description.phone?"有":"无")," 手机适配"),!!n.description.other&&r.a.createElement("li",null,"补充描述：",n.description.other)),r.a.createElement(w,null,!!n.tags&&n.tags.map(function(e){return r.a.createElement("span",{key:e},e)})))))))},t}(r.a.PureComponent),y="2934646196"},271:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={tablet:"(max-device-width: 960px)"}},273:function(e,t){e.exports={palette:{primary:{light:"#212121",main:"#FEDBD0",dark:"#F2D1C7",contrastText:"#442B2D"},secondary:{light:"#FEDBD0",main:"#fdfdfd",dark:"#f4f4f4",contrastText:"#442B2D"}},other:{minWidth:"960px",behindHeight:"0px",behindPadding:"0px"}}},274:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},276:function(e,t,n){"use strict";var i=n(9),a=n.n(i),o=n(284),r=n.n(o),l=n(0),c=n.n(l),d=n(270),s=n(271);n(285);function p(){var e=r()(["\n  body {\n    min-width: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  a:hover {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n  blockquote:before {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n']);return p=function(){return e},e}var m=n(273),u=Object(d.b)(p(),m.other.minWidth,m.palette.primary.contrastText,m.palette.primary.light),h=d.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:",";z-index:0;@media ","{min-height:100%;}"],m.other.behindHeight,s.a.tablet),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(d.a,{theme:m},c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(P,null),c.a.createElement(z,null),c.a.createElement(h,null,e)))},t}(c.a.PureComponent),f=n(280),b=n.n(f),w=d.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:24vw;padding-right:36vw;padding-bottom:100px;box-sizing:border-box;z-index:0;@media ","{width:100%;height:100%;padding-left:90px;padding-right:90px;}"],s.a.tablet),x=d.c.div.withConfig({displayName:"Wrapper__Content",componentId:"sc-12mqwn2-1"})(["background-color:#f9f9f9;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(w,{id:"main"},c.a.createElement(b.a,{className:"card"},c.a.createElement(X,null),c.a.createElement(x,null,e),c.a.createElement(Y,null)))},t}(c.a.PureComponent),y=d.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;position:relative;bottom:-20px;margin-left:-20px;margin-right:-20px;"]),E=d.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100%;height:100%;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;box-shadow:#212121 1px 1px 20px;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),k=n(273),C=d.c.section.withConfig({displayName:"Behind__Section",componentId:"siihwa-0"})(["background-color:#212121;position:fixed;z-index:-1;padding:",";height:",";bottom:0;left:0;width:100vw;color:#f4f4f4;text-align:center;@media ","{width:100%;}h3{color:#fafafa;}p{font-size:14px;}"],k.other.behindPadding,k.other.behindHeight,s.a.tablet),z=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(C,null,c.a.createElement("h3",null,"资讯小黑板"),c.a.createElement("p",null,"现在还什么都没有呢"))},t}(c.a.PureComponent),_=n(274),j=n(275),I=n.n(j),N=n(78),P=function(e){return c.a.createElement(N.StaticQuery,{query:T,render:function(t){var n=t.site.siteMetadata,i=n.defaultTitle,a=n.titleTemplate,o=n.siteUrl,r=n.defaultDescription,l={title:e.title||i,description:e.description||r,url:""+o+(e.pathname||"/")};return c.a.createElement(I.a,{title:l.title,titleTemplate:a},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}),c.a.createElement("link",{rel:"canonical",href:"https://pinkx.uupin1.com/"}))},data:_})};P.defaultProps={title:null,description:null,pathname:null,theme:!1};var T="4287772990",F=n(278),S=n.n(F),q=n(19),D=n(279),L=d.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:100%;height:100px;top:-60px;left:0;z-index:99;@media ","{width:60%;left:20%;}"],s.a.tablet),K=d.c.div.withConfig({displayName:"Header__Font",componentId:"sc-1ompd6b-1"})(["text-align:center;line-height:100px;height:100px;color:#968082;"]),X=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(L,null,c.a.createElement(q.Link,{to:"/"},c.a.createElement(S.a,{container:!0},c.a.createElement(S.a,{item:!0,xs:1}),c.a.createElement(S.a,{item:!0,xs:4},c.a.createElement(K,null,"PINKX")),c.a.createElement(S.a,{item:!0,xs:2},c.a.createElement(D.j,{title:"返回首页",placement:"left"},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),c.a.createElement(S.a,{item:!0,xs:4},c.a.createElement(K,null,"编帖助手")),c.a.createElement(S.a,{item:!0,xs:1}))))},t}(c.a.PureComponent),H=d.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:8vw;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}@media ","{padding-top:80px;}"],s.a.tablet),Q=d.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["font-size:15px;text-align:center;verticle-align:middle;min-height:120px;padding:50px 30px;span{font-weight:600;color:#442c2e;font-size:19px;}"]),Y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(Q,null,"PINKX 由 @游里 开发制作。你或许需要"," ",c.a.createElement("span",null,c.a.createElement(q.Link,{to:"/about#tutorial"},"使用教程"))," ","和"," ",c.a.createElement("span",null,c.a.createElement("a",{href:"https://wj.qq.com/s2/3191208/5ec6/",target:"_black"},"意见反馈"))," ","。")},t}(c.a.PureComponent);n.d(t,"f",function(){return g}),n.d(t,"i",function(){return v}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return E}),n.d(t,"b",function(){return z}),n.d(t,"g",function(){return P}),n.d(t,"e",function(){return X}),n.d(t,"c",function(){return H}),n.d(t,"d",function(){return Y})},277:function(e,t,n){var i=n(38).f,a=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in a||n(24)&&i(a,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},282:function(e,t,n){"use strict";t.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://placem.at/things?txt=海报&w=1000&h=1000",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},302:function(e,t,n){"use strict";n(277);var i=function(e){return'\n<section id="title" data-title="'+e.title+'">\n<h1>'+e.title+"</h1>\n<h5>"+e.episode+"</h5>\n<p>"+e.subtitle+"</p>\n</section>\n  "},a=function(e){return'\n<section id="cover">\n<imgChunk class="img" style="background-image:url('+e.dramaPoster+')"></imgChunk>\n</section>\n  '},o=function(e,t){return'\n<section id="content">\n'+r(e.staff,"staff","制作组",t.author)+"\n"+r(e.cast,"cast","配音组")+"\n"+r(e.ed,"ed","片尾曲")+"\n</section>\n  "},r=function(e,t,n,i){var a="staff"===t&&i?'\n<item><a href="https://weibo.com/n/'+i.weibo+'" class="member" target="_black">\n<span class="job">代码</span><span class="name">'+i.name+"&pinkX</span></a></item>\n      ":"";return'\n<group class="'+t+'">\n<h3>'+n+"</h3>\n    "+e.map(function(e){return"\n<item>\n<a "+(e.weibo?'href="https://weibo.com/n/'+e.weibo+'" target="_black"':" ")+' class="member">\n<span class="job">'+e.job+'</span>\n<span class="name">'+e.name+"</span>\n"+(e.organization?'<span class="org">'+e.organization+"</span>":"")+"\n</a>\n</item>\n        "}).join("")+"\n"+a+"\n</group>\n  "},l=function(e){return'\n<section id="links">\n<h3>链接</h3>\n      '+e.map(function(e){return"\n<item>\n<a href="+e.url+' class="link" target="_black">'+e.name+"</a>\n"+(e.other?'<span class="other">'+e.other+"</span>":"")+"\n</item>\n          "}).join("")+"\n</section>\n  "},c=function(){return'\n<section id="state">\n<h3>- 声明 -</h3>\n<item>本作品仅供配音爱好者学习、交流使用，请勿进行二次修改和用于商业用途。</item>\n<item>转载时请保留以上信息完整，谢谢合作！</item>\n</section>\n  '};t.a=function(e,t){return'\n<pinkx id="pinkx">\n'+i(e)+"\n"+a(e)+"\n"+o(e,t)+"\n"+l(e.links)+"\n"+c()+'\n</pinkx>\n<link rel="stylesheet" type="text/css" media="screen" href="'+t.css+'" />\n  '}}}]);
//# sourceMappingURL=component---src-templates-theme-tsx-03fe211f66d3ee98e6d9.js.map