(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{256:function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return j});t(281),t(53);var a=t(9),o=t.n(a),i=t(35),r=t.n(i),l=t(0),c=t.n(l),s=t(259),d=t(288),p=t.n(d),m=t(283),u=t.n(m),h=t(263),g=t.n(h),f=t(282),b=t.n(f),w=t(290),v=t.n(w),x=t(404),y=t.n(x),k=t(19),E=t(264),C=t(270),z=s.c.div.withConfig({displayName:"preview__BackBlack",componentId:"ncmu27-0"})(["background-color:#424242;background-image:url('https://www.transparenttextures.com/patterns/iron-grip.png');padding:50px;"]),j=function(e){function n(n){var t;t=e.call(this,n)||this;var a="undefined"!=typeof window?window.localStorage.getItem("drama"):"",o=JSON.parse(a)||C.a;return t.state={perview:t.generatePinkx(o).replace(/(\s\s)*/g,"").replace(/\n*/g,"")},t.handleTextFiledChange=t.handleTextFiledChange.bind(r()(r()(t))),t.handleButtonClick=t.handleButtonClick.bind(r()(r()(t))),t}o()(n,e);var t=n.prototype;return t.generatePinkx=function(e){return'\n<pinkx id="pinkx">\n'+this.generateTitle(e)+"\n"+this.generateCover(e)+"\n"+this.generateContent(e)+"\n"+this.generateLinks(e.links)+"\n"+this.generateState()+'\n</pinkx>\n<link rel="stylesheet" type="text/css" media="screen" href="http://localhost:8000/demo/main.css" />\n    '},t.generateTitle=function(e){return'\n<section id="title">\n<h1>'+e.title+"</h1>\n<h5>"+e.episode+"</h5>\n<p>"+e.subtitle+"</p>\n</section>\n    "},t.generateCover=function(e){return'\n<section id="cover">\n<imgChunk data-img='+e.dramaPoster+"></imgChunk>\n</section>\n    "},t.generateContent=function(e){return'\n<section id="content">\n'+this.generatePeople(e.staff,"制作组")+"\n"+this.generatePeople(e.cast,"配音组")+"\n"+this.generatePeople(e.ed,"片尾曲")+"\n</section>\n    "},t.generatePeople=function(e,n){return'\n<group class="staff">\n<h3>'+n+"</h3>\n    "+e.map(function(e){return"\n<item>\n<a "+(e.weibo?'href="'+e.weibo+'" target="_black"':" ")+' class="item">\n<span class="job">'+e.job+'</span>\n<span class="name">'+e.name+"</span>\n"+(e.organization?'<span class="org">'+e.organization+"</span>":"")+"\n</a>\n</item>\n        "}).join("")+"\n</group>\n    "},t.generateLinks=function(e){return'\n<section id="links">\n<h3>链接</h3>\n      '+e.map(function(e){return"\n<item>\n<a href="+e.url+' class="link" target="_black">'+e.name+"</a>\n"+(e.other?'<span class="other">'+e.other+"</span>":"")+"\n</item>\n          "}).join("")+"\n</section>\n    "},t.generateState=function(){return'\n<section id="state">\n<h3>- 声明 -</h3>\n<item>本作品仅供配音爱好者学习、交流使用，请勿进行二次修改和用于商业用途。</item>\n<item>转载时请保留以上信息完整，谢谢合作！</item>\n</section>\n    '},t.previewCode=function(){return'\n<!DOCTYPE html><html><head><meta charset="utf-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312"><title>PinkX - 小粉红模拟器</title>\n<link rel="stylesheet" type="text/css" media="screen" href="/demo/jjwxc.min.css" /></head><body bgcolor="#FFE7F7" topmargin="0">\n<section class="top"><div class="google-ad">广告区</div></section><section class="boardname">\n<div class="left">面包屑导航</div><div class="right">登录信息</div></section>\n<table width="760" border="0" align="center" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td bgcolor="#E8F3FF"><div id="msgsubject" style="float:left;">主题：小粉红模拟器\n<font color="#999999" size="-1">[1]</font></div><div style="float:right;">\n<span style="font-weight:bold;font-size:14px;color:blue;cursor:pointer;display:inline;" id="addfavorite" onclick="addfavorite(2, 5068113)">收藏该帖</span></div></td></tr>\n<tr class="comment_5068113"><td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tbody><tr><td valign="bottom" width="350"><div class="image1" style="display:inline-block;"></div>\n<br></td><td class="textbook"><div align="right"><img class="heartimg" src="/demo/img/heart.gif" width="10" height="9">\n<a href="#"><font color="#0d7328" size="-1">【出版书广告区】</font></a></div></td></tr></tbody>\n</table></td></tr><tr class="comment_5068113 gifffter"><td>\n<table width="760" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td class="read"><div id="topic">\n'+this.state.perview+'\n</div></td></tr></tbody></table></td></tr><tr class="comment_5068113"><td class="authorname">\n<div align="left"><font color="99CC00" size="-1">№0 </font><font color="99CC00">☆☆☆</font>PINKX\n<font color="#999999">78adf6e4</font><font color="99CC00">于</font>2019-02-29 11:11:11留言\n<font color="99CC00">☆☆☆</font></div></td></tr><tr class="comment_5068113"><td height="1">\n<div align="right"></div></td></tr></tbody></table><div align="center">\n<hr width="760" color="#99CC00" size="1"></div></body></html>\n    '},t.handleTextFiledChange=function(e){var n=e.target.value;this.setState({perview:n})},t.handleButtonClick=function(){var e=document.getElementById("code");e&&(e.select(),document.execCommand("Copy"))},t.render=function(){var e=this.state.perview;return c.a.createElement(E.c,null,c.a.createElement(E.e,null,c.a.createElement(g.a,null,c.a.createElement(b.a,{className:"card-title"},"预览"),c.a.createElement(b.a,null,c.a.createElement(u.a,{id:"code",fullWidth:!0,variant:"filled",label:"生成的代码",name:"edStr",value:e,multiline:!0,rows:4,rowsMax:16,onChange:this.handleTextFiledChange})),c.a.createElement(E.a,null,c.a.createElement(p.a,{size:"large",className:"button",color:"primary",onClick:this.handleButtonClick},c.a.createElement(y.a,null),"复制代码"),c.a.createElement(k.Link,{to:"/generate"},c.a.createElement(p.a,{size:"large",className:"button"},c.a.createElement(v.a,null),"上一步"))))),c.a.createElement(z,null,c.a.createElement(E.d,{id:"screen",srcDoc:this.previewCode()},this.previewCode())))},n}(c.a.Component)},261:function(e){e.exports={data:{site:{buildTime:"18.12.2018"}}}},262:function(e,n,t){},264:function(e,n,t){"use strict";var a=t(9),o=t.n(a),i=t(273),r=t.n(i),l=t(261),c=t(0),s=t.n(c),d=t(51),p=t(259),m={colors:{primary:"#72cc96",bg:"#eee",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},u={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"};t(262);function h(){var e=r()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return h=function(){return e},e}var g=Object(p.b)(h(),m.colors.bg,m.colors.primary,m.colors.bg,m.colors.grey.default,u.phone,m.colors.grey.dark,m.transitions.normal,m.colors.primary,m.colors.grey.dark,m.colors.primary,m.colors.grey.dark),f=p.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#eeeeee;background-image:url('https://www.transparenttextures.com/patterns/blizzard.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}@media ","{min-height:100%;}"],u.tablet,u.phone),b=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){var e=this.props.children;return s.a.createElement(d.StaticQuery,{query:"1536950682",render:function(){return s.a.createElement(p.a,{theme:m},s.a.createElement(s.a.Fragment,null,s.a.createElement(g,null),s.a.createElement(M,null),s.a.createElement(f,null,e)))},data:l})},n}(s.a.PureComponent),w=t(263),v=t.n(w),x=t(268),y=t.n(x),k=t(19),E=p.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;grid-template-columns:264px auto;margin:0 auto;padding-top:100px;padding-bottom:100px;width:1024px;min-height:100vh;box-sizing:border-box;z-index:0;"]),C=p.c.section.withConfig({displayName:"Wrapper__LeftSection",componentId:"sc-12mqwn2-1"})(["width:184px;text-align:center;"]),z=p.c.section.withConfig({displayName:"Wrapper__RightSection",componentId:"sc-12mqwn2-2"})(["width:760px;"]),j=p.c.section.withConfig({displayName:"Wrapper__Logo",componentId:"sc-12mqwn2-3"})(["background-color:grey;width:144px;height:144px;margin:20px;border-radius:20px;"]),_=p.c.h1.withConfig({displayName:"Wrapper__SiteName",componentId:"sc-12mqwn2-4"})(["font-size:33px;"]),N=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){var e=this.props.children;return s.a.createElement(E,null,s.a.createElement(C,null,s.a.createElement(v.a,null,s.a.createElement(k.Link,{to:"/"},s.a.createElement(y.a,null,s.a.createElement(j,null),s.a.createElement(_,null,"pinkX"))))),s.a.createElement(z,{className:"main"},e))},n}(s.a.PureComponent),S=p.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;"]),P=p.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:90vw;height:96vh;margin:0 auto;background-color:white;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),F=t(274),q=t.n(F),I=t(275),L=t.n(I),B=p.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;top:0;bottom:0;left:0;right:0;color:#ffffff;"]),T=p.c.div.withConfig({displayName:"Footer__Content",componentId:"sc-1bz5sjq-1"})(["position:absolute;bottom:0;right:0;width:60vw;height:300px;box-sizing:border-box;"]),H=p.c.div.withConfig({displayName:"Footer__List",componentId:"sc-1bz5sjq-2"})(["padding:20px;padding-top:100px;p{font-size:14px;line-height:1.5;margin:5px;color:#ffffff;img{position:absolute;width:160px;height:160px;right:0;top:100px;opacity:0;transition:opacity 300ms;}}h4{color:#ffffff;}p:hover{img{opacity:1;}}"]),M=function(e){function n(){return e.apply(this,arguments)||this}return o()(n,e),n.prototype.render=function(){return s.a.createElement(B,null,s.a.createElement(T,null,s.a.createElement(q.a,{cellHeight:300,cols:2},s.a.createElement(L.a,{cols:1},s.a.createElement(H,null,s.a.createElement("h4",null,"关注"),s.a.createElement("a",{href:"https://weibo.com/uuPin1",target:"_black"},s.a.createElement("p",null,"微博：@游里")),s.a.createElement("p",{className:"wechat"},"微信：uupin1",s.a.createElement("img",{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fyavwpwln2j30e80e8wep.jpg"})),s.a.createElement("p",null,"QQ群：123456789"))),s.a.createElement(L.a,{cols:1},s.a.createElement(H,null,s.a.createElement("h4",null,"帮助"),s.a.createElement("p",null,"使用教程"),s.a.createElement("p",null,"常见问题"),s.a.createElement("p",null,"报告BUG"))))))},n}(s.a.PureComponent);t.d(n,"c",function(){return b}),t.d(n,"e",function(){return N}),t.d(n,"a",function(){return S}),t.d(n,"d",function(){return P}),t.d(n,"b",function(){return M})},270:function(e,n,t){"use strict";n.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://ws3.sinaimg.cn/large/006tNbRwgy1fy8xkbdep1j31540u0myo.jpg",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},290:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(0)),i=(0,a(t(267)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBackSharp");n.default=i},404:function(e,n,t){"use strict";var a=t(2);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t(0)),i=(0,a(t(267)).default)(o.default.createElement(o.default.Fragment,null,o.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),o.default.createElement("path",{d:"M16 1H2v16h2V3h12V1zm-1 4l6 6v12H6V5h9zm-1 7h5.5L14 6.5V12z"})),"FileCopySharp");n.default=i}}]);
//# sourceMappingURL=component---src-pages-preview-tsx-16359865cdffa423b9af.js.map