(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g}),n.d(t,"GitHubViewerQuery",function(){return x});var a=n(9),i=n.n(a),r=n(0),o=n.n(r),l=n(276),c=n(275),p=n.n(c),m=n(277),d=n(270),u=n(77),s="关于站点",h=d.c.article.withConfig({displayName:"about__Article",componentId:"sc-11jmkle-0"})(["h3{margin:64px 0;}"]),f=d.c.section.withConfig({displayName:"about__Chunk",componentId:"sc-11jmkle-1"})(["margin-bottom:48px;h4{margin-bottom:24px;}p{font-size:14px;margin-bottom:8px;}"]),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={articles:n.props.data.github.repository.issues.edges,title:s},n}return i()(t,e),t.prototype.render=function(){var e=this.state.title;return o.a.createElement(l.f,null,o.a.createElement(p.a,{title:e}),o.a.createElement(l.i,null,o.a.createElement(l.c,null,o.a.createElement("h2",null,e)),o.a.createElement(m.c,null,o.a.createElement(h,null,o.a.createElement("h3",null,"宣传墙"),o.a.createElement(f,null,o.a.createElement("h4",null,o.a.createElement(u.Link,{to:"/users/"},"🔗使用PINKX的剧组"))),o.a.createElement("h3",{id:"help"},"帮助"),o.a.createElement(f,null,o.a.createElement("h4",null,"使用教程"),!!this.state.articles&&this.state.articles.map(function(e){return o.a.createElement("p",{key:e.node.resourcePath},o.a.createElement("a",{href:"https://github.com"+e.node.resourcePath,target:"_black"},"🔗",e.node.title))})),o.a.createElement(f,null,o.a.createElement("h4",{id:"qa"},"常见问题"),o.a.createElement("p",null,o.a.createElement("strong",null,"问：为什么我的页面跟PINKX发布在微博上的不一样。")),o.a.createElement("p",null,"答：先 shift+ctrl+R（如果是mac ctrl换成com）刷新页面。",o.a.createElement("tr",null),"PINKX的更新机制是打开网站时，会自动检查更新。\b如果找到的更新，它就会下载好并缓存资源，并在打开网站时使用。当然如果停留网站的时间过短，也会出现下次打开没有更新的情况。",o.a.createElement("tr",null),"之所以这样做，是为了平日的访问，能够更快速的打开网站。")),o.a.createElement(f,null,o.a.createElement("h4",null,"意见反馈"),o.a.createElement("p",null,"第一种：发表微博 @PINKX编帖助手 或 @游里，或者私信他们。"),o.a.createElement("p",null,"第二种：填写"," ",o.a.createElement("a",{href:"https://wj.qq.com/s2/3191208/5ec6/",target:"_black"},"🔗意见反馈表单。")),o.a.createElement("p",null,"第三种：加入PINKX功能主题交流QQ群：982996001。")),o.a.createElement(f,null,o.a.createElement("h4",null,o.a.createElement("a",{href:"https://wj.qq.com/s2/3283324/911f",target:"_black"},"🔗主题提交"))),o.a.createElement(f,null,o.a.createElement("h4",null,o.a.createElement(u.Link,{to:"/changelog/"},"🔗更新记录")))))))},t}(o.a.Component),x="1844006070"},271:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a={tablet:"(max-device-width: 960px)"}},273:function(e,t){e.exports={palette:{primary:{light:"#212121",main:"#FEDBD0",dark:"#F2D1C7",contrastText:"#442B2D"},secondary:{light:"#FEDBD0",main:"#fdfdfd",dark:"#f4f4f4",contrastText:"#442B2D"}},other:{minWidth:"960px",behindHeight:"0px",behindPadding:"0px"}}},274:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},276:function(e,t,n){"use strict";var a=n(9),i=n.n(a),r=n(281),o=n.n(r),l=n(0),c=n.n(l),p=n(270),m=n(271);n(282);function d(){var e=o()(["\n  body {\n    min-width: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  a:hover {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n  blockquote:before {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n']);return d=function(){return e},e}var u=n(273),s=Object(p.b)(d(),u.other.minWidth,u.palette.primary.contrastText,u.palette.primary.light),h=p.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:",";z-index:0;@media ","{min-height:100%;}"],u.other.behindHeight,m.a.tablet),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(p.a,{theme:u},c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(q,null),c.a.createElement(C,null),c.a.createElement(h,null,e)))},t}(c.a.PureComponent),g=n(279),x=n.n(g),E=p.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:24vw;padding-right:24vw;padding-bottom:100px;box-sizing:border-box;z-index:0;@media ","{width:100%;height:100%;padding-left:90px;padding-right:90px;}"],m.a.tablet),b=p.c.div.withConfig({displayName:"Wrapper__Content",componentId:"sc-12mqwn2-1"})(["background-color:#f9f9f9;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(E,{id:"main"},c.a.createElement(x.a,{className:"card"},c.a.createElement(S,null),c.a.createElement(b,null,e),c.a.createElement(W,null)))},t}(c.a.PureComponent),y=p.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;position:relative;bottom:-20px;margin-left:-20px;margin-right:-20px;"]),v=p.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100%;height:100%;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;box-shadow:#212121 1px 1px 20px;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),k=n(273),_=p.c.section.withConfig({displayName:"Behind__Section",componentId:"siihwa-0"})(["background-color:#212121;position:fixed;z-index:-1;padding:",";height:",";bottom:0;left:0;width:100vw;color:#f4f4f4;text-align:center;@media ","{width:100%;}h3{color:#fafafa;}p{font-size:14px;}"],k.other.behindPadding,k.other.behindHeight,m.a.tablet),C=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(_,null,c.a.createElement("h3",null,"资讯小黑板"),c.a.createElement("p",null,"现在还什么都没有呢"))},t}(c.a.PureComponent),N=n(274),I=n(275),P=n.n(I),z=n(77),q=function(e){return c.a.createElement(z.StaticQuery,{query:D,render:function(t){var n=t.site.siteMetadata,a=n.defaultTitle,i=n.titleTemplate,r=n.siteUrl,o=n.defaultDescription,l={title:e.title||a,description:e.description||o,url:""+r+(e.pathname||"/")};return c.a.createElement(P.a,{title:l.title,titleTemplate:i},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}),c.a.createElement("link",{rel:"canonical",href:"https://pinkx.uupin1.com/"}))},data:N})};q.defaultProps={title:null,description:null,pathname:null,theme:!1};var D="4287772990",K=n(278),X=n.n(K),j=n(19),H=n(277),T=p.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:100%;height:100px;top:-64px;left:0;z-index:99;text-align:center;@media ","{width:60%;left:20%;}img{width:10vw;max-width:11vh;min-width:8vh;margin-top:-1vw;}"],m.a.tablet),F=p.c.div.withConfig({displayName:"Header__LeftFont",componentId:"sc-1ompd6b-1"})(["text-align:right;line-height:100px;height:100px;color:#968082;span{font-size:14px;}"]),L=p.c.div.withConfig({displayName:"Header__RightFont",componentId:"sc-1ompd6b-2"})(["text-align:left;line-height:100px;height:100px;color:#968082;span{font-size:14px;}"]),S=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(T,null,c.a.createElement(j.Link,{to:"/"},c.a.createElement(X.a,{container:!0},c.a.createElement(X.a,{item:!0,xs:1}),c.a.createElement(X.a,{item:!0,xs:3},c.a.createElement(F,null,"PINKX ",c.a.createElement("span",null,"Beta"))),c.a.createElement(X.a,{item:!0,xs:4},c.a.createElement(H.k,{title:"点击小海马返回首页",placement:"left"},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),c.a.createElement(X.a,{item:!0,xs:3},c.a.createElement(L,null,"编帖助手")),c.a.createElement(X.a,{item:!0,xs:1}))))},t}(c.a.PureComponent),B=p.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:8vw;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}@media ","{padding-top:80px;}"],m.a.tablet),Q=p.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["font-size:15px;text-align:center;verticle-align:middle;min-height:120px;padding:50px 30px;span{font-weight:600;color:#442c2e;font-size:19px;}"]),W=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(Q,null,c.a.createElement("a",{href:"https://weibo.com/pinkxpink",target:"_black"},"PINKX")," ","由"," ",c.a.createElement("a",{href:"https://weibo.com/uupin1",target:"_black"},"@游里")," ","开发制作。初次使用建议查看"," ",c.a.createElement("span",null,c.a.createElement(j.Link,{to:"/about/#help"},"帮助"))," ","。")},t}(c.a.PureComponent);n.d(t,"f",function(){return f}),n.d(t,"i",function(){return w}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return v}),n.d(t,"b",function(){return C}),n.d(t,"g",function(){return q}),n.d(t,"e",function(){return S}),n.d(t,"c",function(){return B}),n.d(t,"d",function(){return W})}}]);
//# sourceMappingURL=component---src-pages-about-tsx-88882d0c102217dcf45a.js.map