(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var i=n(9),r=n.n(i),a=n(0),o=n(268),l=n(267),c=n.n(l),p=n(51),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return a.createElement(o.f,null,a.createElement(o.g,null),a.createElement(c.a,{title:"404 not found"}),a.createElement(p.Link,{to:"/"},"siteTitle"),a.createElement("h1",null,"NOT FOUND"),a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},t}(a.Component)},262:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i={tablet:"(max-device-width: 960px)"}},264:function(e,t,n){},265:function(e,t){e.exports={palette:{primary:{light:"#212121",main:"#FEDBD0",dark:"#F2D1C7",contrastText:"#442B2D"},secondary:{light:"#FEDBD0",main:"#fdfdfd",dark:"#f4f4f4",contrastText:"#442B2D"}},other:{minWidth:"960px"}}},266:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},268:function(e,t,n){"use strict";var i=n(9),r=n.n(i),a=n(276),o=n.n(a),l=n(0),c=n.n(l),p=n(261),d=n(262);n(264);function u(){var e=o()(["\n  body {\n    min-width: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n  a:hover {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n  blockquote:before {\n    content: "";\n    position: absolute;\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n']);return u=function(){return e},e}var m=n(265),s=Object(p.b)(u(),m.other.minWidth,m.palette.primary.contrastText,m.palette.primary.light),f=p.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}"],d.a.tablet),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(p.a,{theme:m},c.a.createElement(c.a.Fragment,null,c.a.createElement(s,null),c.a.createElement(D,null),c.a.createElement(C,null),c.a.createElement(f,null,e)))},t}(c.a.PureComponent),g=n(272),x=n.n(g),b=p.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:24vw;padding-right:36vw;padding-bottom:100px;box-sizing:border-box;z-index:0;@media ","{width:100%;height:100%;padding-left:90px;padding-right:90px;}"],d.a.tablet),E=p.c.div.withConfig({displayName:"Wrapper__Content",componentId:"sc-12mqwn2-1"})(["background-color:#f9f9f9;"]),w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(b,{id:"main"},c.a.createElement(x.a,{className:"card"},c.a.createElement(B,null),c.a.createElement(E,null,e),c.a.createElement(X,null)))},t}(c.a.PureComponent),y=p.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;position:relative;bottom:-20px;margin-left:-20px;margin-right:-20px;"]),v=p.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100%;height:100%;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;box-shadow:#212121 1px 1px 20px;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),k=p.c.section.withConfig({displayName:"Behind__Section",componentId:"siihwa-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;height:300px;bottom:0;left:0;right:0;color:#f4f4f4;text-align:center;h3{color:#fafafa;}p{font-size:14px;}"]),C=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(k,null,c.a.createElement("h3",null,"资讯小黑板"),c.a.createElement("p",null,"现在还什么都没有呢"))},t}(c.a.PureComponent),N=n(266),I=n(267),_=n.n(I),z=n(51),D=function(e){return c.a.createElement(z.StaticQuery,{query:P,render:function(t){var n=t.site.siteMetadata,i=n.defaultTitle,r=n.titleTemplate,a=n.siteUrl,o=n.defaultDescription,l={title:e.title||i,description:e.description||o,url:""+a+(e.pathname||"/")};return c.a.createElement(_.a,{title:l.title,titleTemplate:r},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}))},data:N})};D.defaultProps={title:null,description:null,pathname:null,theme:!1};var P="4287772990",T=n(271),q=n.n(T),F=n(18),S=n(270),j=p.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:100%;height:100px;top:-60px;left:0;z-index:99;@media ","{width:60%;left:20%;}"],d.a.tablet),L=p.c.div.withConfig({displayName:"Header__Font",componentId:"sc-1ompd6b-1"})(["text-align:center;line-height:100px;height:100px;color:#968082;"]),B=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(j,null,c.a.createElement(F.Link,{to:"/"},c.a.createElement(S.j,{title:"返回首页",placement:"top"},c.a.createElement(q.a,{container:!0},c.a.createElement(q.a,{item:!0,xs:1}),c.a.createElement(q.a,{item:!0,xs:4},c.a.createElement(L,null,"PINKX")),c.a.createElement(q.a,{item:!0,xs:2},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"})),c.a.createElement(q.a,{item:!0,xs:4},c.a.createElement(L,null,"编帖助手")),c.a.createElement(q.a,{item:!0,xs:1})))))},t}(c.a.PureComponent),K=p.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:8vw;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}@media ","{padding-top:80px;}"],d.a.tablet),W=p.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["font-size:15px;text-align:center;verticle-align:middle;min-height:120px;padding:50px 30px;span{font-weight:600;color:#442c2e;font-size:19px;}"]),X=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return c.a.createElement(W,null,"PINKX 由 @游里 开发制作。你或许需要"," ",c.a.createElement("span",null,c.a.createElement(F.Link,{to:"/about#qa"},"常见问题"))," ","和"," ",c.a.createElement("span",null,c.a.createElement(F.Link,{to:"/about#tutorial"},"使用教程"))," ","。")},t}(c.a.PureComponent);n.d(t,"f",function(){return h}),n.d(t,"i",function(){return w}),n.d(t,"a",function(){return y}),n.d(t,"h",function(){return v}),n.d(t,"b",function(){return C}),n.d(t,"g",function(){return D}),n.d(t,"e",function(){return B}),n.d(t,"c",function(){return K}),n.d(t,"d",function(){return X})}}]);
//# sourceMappingURL=component---src-pages-404-tsx-d1b9c796f0a91294cc47.js.map