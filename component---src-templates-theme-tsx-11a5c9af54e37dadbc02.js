(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w}),n.d(t,"ThemeQuery",function(){return v});n(271);var o=n(9),a=n.n(o),i=n(0),r=n.n(i),l=n(261),c=n(18),s=n(383),d=n(382),p=n(272),m=n(267),u=l.c.section.withConfig({displayName:"Theme__Wrapper",componentId:"sc-4cy18s-0"})(["width:100vw;height:100vh;padding-left:3vw;padding-right:18vw;padding-top:3vw;padding-bottom:3vw;background-color:#696969;box-sizing:border-box;position:fixed;p{margin:0;}"]),f=l.c.div.withConfig({displayName:"Theme__Logo",componentId:"sc-4cy18s-1"})(["position:absolute;width:3vw;right:6vw;top:-2vw;a,img{width:100%;height:100%;}"]),g=l.c.div.withConfig({displayName:"Theme__Info",componentId:"sc-4cy18s-2"})(["position:absolute;right:1vw;top:30vh;width:15vw;> div{padding-top:3vw;background-color:#eeeeee;}"]),h=l.c.div.withConfig({displayName:"Theme__Author",componentId:"sc-4cy18s-3"})(["a{color:#696969;font-size:12px;line-height:1.2;}"]),b=l.c.div.withConfig({displayName:"Theme__Tags",componentId:"sc-4cy18s-4"})(["span{margin-right:10px;font-size:15px;}"]),w=function(e){function t(t){var n;n=e.call(this,t)||this;var o=p.a,a=n.props.data.themeYaml;if("undefined"!=typeof window){var i=window.localStorage.getItem("drama"),r=window.localStorage.getItem("theme");i&&(o=JSON.parse(i)),r&&(a=JSON.parse(r))}return n.state={drama:o,theme:a},n}a()(t,e);var n=t.prototype;return n.previewCode=function(e,t){return'\n<!DOCTYPE html><html><head><meta charset="utf-8" />\n<meta http-equiv="Content-Type" content="text/html; charset=gb2312"><title>PinkX - 小粉红模拟器</title>\n<link rel="stylesheet" type="text/css" media="screen" href="/demo/jjwxc.min.css" /></head><body bgcolor="#FFE7F7" topmargin="0">\n<section class="top"><div class="google-ad">广告区</div></section><section class="boardname">\n<div class="left">面包屑导航</div><div class="right">登录信息</div></section>\n<table width="760" border="0" align="center" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td bgcolor="#E8F3FF"><div id="msgsubject" style="float:left;">主题：小粉红模拟器\n<font color="#999999" size="-1">[1]</font></div><div style="float:right;">\n<span style="font-weight:bold;font-size:14px;color:blue;cursor:pointer;display:inline;" id="addfavorite" onclick="addfavorite(2, 5068113)">收藏该帖</span></div></td></tr>\n<tr class="comment_5068113"><td><table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tbody><tr><td valign="bottom" width="350"><div class="image1" style="display:inline-block;"></div>\n<br></td><td class="textbook"><div align="right"><img class="heartimg" src="/demo/img/heart.gif" width="10" height="9">\n<a href="#"><font color="#0d7328" size="-1">【出版书广告区】</font></a></div></td></tr></tbody>\n</table></td></tr><tr class="comment_5068113 gifffter"><td>\n<table width="760" border="0" cellpadding="0" cellspacing="0" style="table-layout:fixed;word-wrap:break-word;">\n<tbody><tr><td class="read"><div id="topic">\n'+Object(d.a)(e,t)+'\n</div></td></tr></tbody></table></td></tr><tr class="comment_5068113"><td class="authorname">\n<div align="left"><font color="99CC00" size="-1">№0 </font><font color="99CC00">☆☆☆</font>PINKX\n<font color="#999999">78adf6e4</font><font color="99CC00">于</font>2019-02-29 11:11:11留言\n<font color="99CC00">☆☆☆</font></div></td></tr><tr class="comment_5068113"><td height="1">\n<div align="right"></div></td></tr></tbody></table><div align="center">\n<hr width="760" color="#99CC00" size="1"></div></body></html>\n    '},n.render=function(){var e=this.state,t=e.drama,n=e.theme;return r.a.createElement(i.Fragment,null,r.a.createElement(m.g,null),r.a.createElement(u,null,r.a.createElement(m.h,{id:"screen",srcDoc:this.previewCode(t,n)}),r.a.createElement(g,null,r.a.createElement(s.a,null,r.a.createElement(f,null,r.a.createElement(c.Link,{to:"/"},r.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),r.a.createElement(s.b,null,r.a.createElement("h3",null,n.name,r.a.createElement(h,null,r.a.createElement("a",{href:"https://weibo.com/n/"+n.author.weibo,target:"_blank"},"@",n.author.name))),r.a.createElement(b,null,!!n.tags&&n.tags.map(function(e){return r.a.createElement("span",{key:e},e)})))))))},t}(r.a.PureComponent),v="3376140715"},264:function(e,t,n){},265:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},267:function(e,t,n){"use strict";var o=n(9),a=n.n(o),i=n(278),r=n.n(i),l=n(0),c=n.n(l),s=n(261),d={colors:{primary:"#FEDBD0",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},p={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"};n(264);function m(){var e=r()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return m=function(){return e},e}var u=Object(s.b)(m(),d.colors.bg,d.colors.primary,d.colors.bg,d.colors.grey.default,p.phone,d.colors.grey.dark,d.transitions.normal,d.colors.primary,d.colors.grey.dark,d.colors.primary,d.colors.grey.dark),f=s.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}@media ","{min-height:100%;}"],p.tablet,p.phone),g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(s.a,{theme:d},c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(I,null),c.a.createElement(C,null),c.a.createElement(f,null,e)))},t}(c.a.PureComponent),h=n(268),b=n.n(h),w=s.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:24vw;padding-right:36vw;padding-bottom:100px;box-sizing:border-box;z-index:0;"]),v=s.c.div.withConfig({displayName:"Wrapper__Content",componentId:"sc-12mqwn2-1"})(["background-color:#f9f9f9;"]),y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(w,{id:"main"},c.a.createElement(O,null),c.a.createElement(b.a,{className:"card"},c.a.createElement(v,null,e),c.a.createElement(D,null)))},t}(c.a.PureComponent),x=s.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;position:relative;bottom:-20px;margin-left:-20px;margin-right:-20px;"]),E=s.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100%;height:100%;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;box-shadow:#212121 1px 1px 20px;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),k=s.c.section.withConfig({displayName:"Behind__Section",componentId:"siihwa-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;height:300px;bottom:0;left:0;right:0;color:#f4f4f4;text-align:center;h3{color:#fafafa;}p{font-size:14px;}"]),C=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(k,null,c.a.createElement("h3",null,"资讯小黑板"),c.a.createElement("p",null,"现在还什么都没有呢"))},t}(c.a.PureComponent),z=n(265),_=n(266),j=n.n(_),N=n(51),I=function(e){return c.a.createElement(N.StaticQuery,{query:P,render:function(t){var n=t.site.siteMetadata,o=n.defaultTitle,a=n.titleTemplate,i=n.siteUrl,r=n.defaultDescription,l={title:e.title||o,description:e.description||r,url:""+i+(e.pathname||"/")};return c.a.createElement(j.a,{title:l.title,titleTemplate:a},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}))},data:z})};I.defaultProps={title:null,description:null,pathname:null,theme:!1};var P="4287772990",S=n(263),T=n.n(S),F=n(18),q=s.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:40vw;height:100px;top:50px;left:24vw;z-index:999;"]),L=s.c.div.withConfig({displayName:"Header__Font",componentId:"sc-1ompd6b-1"})(["text-align:center;line-height:100px;height:100px;color:#968082;"]),O=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(q,null,c.a.createElement(T.a,{container:!0},c.a.createElement(T.a,{item:!0,xs:1}),c.a.createElement(T.a,{item:!0,xs:4},c.a.createElement(L,null,"PINKX")),c.a.createElement(T.a,{item:!0,xs:2},c.a.createElement(F.Link,{to:"/"},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),c.a.createElement(T.a,{item:!0,xs:4},c.a.createElement(L,null,"编帖助手")),c.a.createElement(T.a,{item:!0,xs:1})))},t}(c.a.PureComponent),K=s.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:8vw;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}"]),X=s.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["font-size:15px;text-align:center;verticle-align:middle;min-height:120px;padding:50px 30px;span{font-weight:600;color:#442c2e;font-size:19px;}"]),D=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.a.createElement(X,null,"PINKX 由 @游里 开发制作。你或许需要"," ",c.a.createElement("span",null,c.a.createElement(F.Link,{to:"/about#qa"},"常见问题"))," ","和"," ",c.a.createElement("span",null,c.a.createElement(F.Link,{to:"/about#tutorial"},"使用教程"))," ","。")},t}(c.a.PureComponent);n.d(t,"f",function(){return g}),n.d(t,"i",function(){return y}),n.d(t,"a",function(){return x}),n.d(t,"h",function(){return E}),n.d(t,"b",function(){return C}),n.d(t,"g",function(){return I}),n.d(t,"e",function(){return O}),n.d(t,"c",function(){return K}),n.d(t,"d",function(){return D})},269:function(e,t,n){"use strict";var o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=o(n(288))},271:function(e,t,n){var o=n(36).f,a=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in a||n(22)&&o(a,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},272:function(e,t,n){"use strict";t.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://placem.at/things?txt=海报&w=1000&h=1000",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},288:function(e,t,n){"use strict";var o=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=o(n(7)),i=o(n(13)),r=o(n(0)),l=(o(n(1)),o(n(262))),c=o(n(119)),s=function(e){return{root:e.mixins.gutters({paddingTop:16,paddingBottom:16,"&:last-child":{paddingBottom:24}})}};function d(e){var t=e.classes,n=e.className,o=e.component,c=(0,i.default)(e,["classes","className","component"]);return r.default.createElement(o,(0,a.default)({className:(0,l.default)(t.root,n)},c))}t.styles=s,d.propTypes={},d.defaultProps={component:"div"};var p=(0,c.default)(s,{name:"MuiCardContent"})(d);t.default=p},382:function(e,t,n){"use strict";n(271);var o=function(e){return'\n<section id="title" data-title="'+e.title+'">\n<h1>'+e.title+"</h1>\n<h5>"+e.episode+"</h5>\n<p>"+e.subtitle+"</p>\n</section>\n  "},a=function(e){return'\n<section id="cover">\n<imgChunk class="img" style="background-image:url('+e.dramaPoster+')"></imgChunk>\n</section>\n  '},i=function(e,t){return'\n<section id="content">\n'+r(e.staff,"staff","制作组",t.author)+"\n"+r(e.cast,"cast","配音组")+"\n"+r(e.ed,"ed","片尾曲")+"\n</section>\n  "},r=function(e,t,n,o){var a="staff"===t&&o?'\n<item><a href="https://weibo.com/n/'+o.weibo+'" class="member" target="_black">\n<span class="job">宣传</span><span class="name">'+o.name+"&pinkX</span></a></item>\n      ":"";return'\n<group class="'+t+'">\n<h3>'+n+"</h3>\n    "+e.map(function(e){return"\n<item>\n<a "+(e.weibo?'href="https://weibo.com/n/'+e.weibo+'" target="_black"':" ")+' class="item">\n<span class="job">'+e.job+'</span>\n<span class="name">'+e.name+"</span>\n"+(e.organization?'<span class="org">'+e.organization+"</span>":"")+"\n</a>\n</item>\n        "}).join("")+"\n"+a+"\n</group>\n  "},l=function(e){return'\n<section id="links">\n<h3>链接</h3>\n      '+e.map(function(e){return"\n<item>\n<a href="+e.url+' class="link" target="_black">'+e.name+"</a>\n"+(e.other?'<span class="other">'+e.other+"</span>":"")+"\n</item>\n          "}).join("")+"\n</section>\n  "},c=function(){return'\n<section id="state">\n<h3>- 声明 -</h3>\n<item>本作品仅供配音爱好者学习、交流使用，请勿进行二次修改和用于商业用途。</item>\n<item>转载时请保留以上信息完整，谢谢合作！</item>\n</section>\n  '};t.a=function(e,t){return'\n<pinkx id="pinkx">\n'+o(e)+"\n"+a(e)+"\n"+i(e,t)+"\n"+l(e.links)+"\n"+c()+'\n</pinkx>\n<link rel="stylesheet" type="text/css" media="screen" href="'+t.css+'" />\n  '}},383:function(e,t,n){"use strict";var o=n(268),a=n.n(o);n.d(t,"a",function(){return a.a});var i=n(269),r=n.n(i);n.d(t,"b",function(){return r.a})}}]);
//# sourceMappingURL=component---src-templates-theme-tsx-11a5c9af54e37dadbc02.js.map