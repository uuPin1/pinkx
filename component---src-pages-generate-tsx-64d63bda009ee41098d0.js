(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{256:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return C});n(123),n(122),n(37),n(272);var a=n(9),i=n.n(a),r=n(35),o=n.n(r),l=n(0),c=n.n(l),s=n(284),u=n.n(s),d=n(274),p=n.n(d),m=n(278),h=n.n(m),f=n(285),g=n.n(f),b=n(477),w=n.n(b),E=n(328),x=n.n(E),v=n(18),S=n(266),y=n(271),j=n(265),k=n.n(j),z="填写详细信息",C=function(e){function t(t){var n,a;if(n=e.call(this,t)||this,"undefined"!=typeof window){var i=window.localStorage.getItem("drama");a=JSON.parse(i)||y.a}else a=y.a;return n.state={drama:a,title:z},n.handleInputChange=n.handleInputChange.bind(o()(o()(n))),n.handleOnSave=n.handleOnSave.bind(o()(o()(n))),n.handleSubmit=n.handleSubmit.bind(o()(o()(n))),n}i()(t,e);var n=t.prototype;return n.handleInputChange=function(e){var t,n=e.target,a=n.name,i=n.value,r=Object.assign({},this.state.drama,((t={})[a]=i,t));this.setState({drama:r})},n.handleOnSave=function(){var e=this.peopleToObj(this.state.drama.staffStr),t=this.peopleToObj(this.state.drama.castStr),n=this.peopleToObj(this.state.drama.edStr),a=this.linksToObj(this.state.drama.linkStr),i=this.peopleToStr(e),r=this.peopleToStr(t),o=this.peopleToStr(n),l=this.linksToStr(a),c=Object.assign({},this.state.drama,{staff:e,cast:t,ed:n,staffStr:i,castStr:r,edStr:o,links:a,linkStr:l});"undefined"!=typeof window&&window.localStorage.setItem("drama",JSON.stringify(c)),this.setState(function(){return{drama:c}})},n.handleSubmit=function(){this.handleOnSave()},n.peopleToStr=function(e){var t=this,n="";return e.forEach(function(e){n+=t.personToStr(e)}),n},n.personToStr=function(e){var t=e.organization?"【"+e.organization+"】":"",n=e.weibo?"@"+e.weibo:"";return e.job+"："+e.name+t+n+"\n"},n.peopleToObj=function(e){var t=this,n=[];return e.split("\n").forEach(function(e){e&&n.push(t.personToObj(e))}),n},n.personToObj=function(e){return{job:this.filterReObj(/([\u4E00-\u9FA5A-Za-z0-9]+)：/.exec(e)),name:this.filterReObj(/：([\u4E00-\u9FA5A-Za-z0-9《》]+)/.exec(e)),organization:this.filterReObj(/【([\u4E00-\u9FA5A-Za-z0-9]+)】/.exec(e)),weibo:this.filterReObj(/@([\u4E00-\u9FA5A-Za-z0-9]+)/.exec(e))}},n.linksToStr=function(e){var t=this,n="";return e.forEach(function(e){n+=t.linkToStr(e)}),n},n.linkToStr=function(e){return e.name+"："+e.url+"【"+e.other+"】\n"},n.linksToObj=function(e){var t=this,n=[];return e.split("\n").forEach(function(e){e&&n.push(t.linkToObj(e))}),n},n.linkToObj=function(e){return{name:this.filterReObj(/([\u4E00-\u9FA5A-Za-z0-9]+)：/.exec(e)),url:this.filterReObj(/((?:http|https):[\w\/\-.?%&=]+)/.exec(e)),other:this.filterReObj(/【([\w]+)】/.exec(e))}},n.filterReObj=function(e){return e?e[1]:""},n.render=function(){var e=this.state,t=e.drama,n=e.title;return c.a.createElement(S.e,null,c.a.createElement(k.a,{title:n}),c.a.createElement(S.h,null,c.a.createElement(p.a,null,c.a.createElement(S.b,null,c.a.createElement("h2",null,n)),c.a.createElement(h.a,{className:"card-title"}),c.a.createElement(h.a,null,c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"广播剧名",name:"title",required:!0,value:t.title,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"副标题",name:"subtitle",required:!0,value:t.subtitle,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"第N期",name:"episode",required:!0,value:t.episode,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"正剧海报",name:"dramaPoster",required:!0,prefix:"https://",InputProps:{},value:t.dramaPoster,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"制作组名单",name:"staffStr",value:t.staffStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"配音组名单",name:"castStr",value:t.castStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"片尾曲名单",name:"edStr",value:t.edStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(g.a,{fullWidth:!0,variant:"filled",label:"链接列表",name:"linkStr",value:t.linkStr,multiline:!0,rows:4,rowsMax:5,required:!0,onChange:this.handleInputChange})),c.a.createElement(S.a,null,c.a.createElement(v.Link,{to:"/select",onClick:this.handleSubmit},c.a.createElement(u.a,{size:"large",className:"button",variant:"contained",color:"primary"},"生成",c.a.createElement(w.a,null))),c.a.createElement(v.Link,{to:"/",onClick:this.handleOnSave},c.a.createElement(u.a,{size:"large",className:"button"},c.a.createElement(x.a,null),"上一步"))))))},t}(c.a.Component)},263:function(e,t,n){},264:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"PINKX",titleTemplate:"%s - PINKX - 小粉红编帖助手",siteUrl:"https://pinkx.uupin1.com/",defaultDescription:"小粉红编帖助手"}}}}},266:function(e,t,n){"use strict";var a=n(9),i=n.n(a),r=n(273),o=n.n(r),l=n(0),c=n.n(l),s=n(261),u={colors:{primary:"#FEDBD0",bg:"#fff",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},d={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"};n(263);function p(){var e=o()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return p=function(){return e},e}var m=Object(s.b)(p(),u.colors.bg,u.colors.primary,u.colors.bg,u.colors.grey.default,d.phone,u.colors.grey.dark,u.transitions.normal,u.colors.primary,u.colors.grey.dark,u.colors.primary,u.colors.grey.dark),h=s.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#fffafa;background-image:url('/img/inspiration-geometry.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}@media ","{min-height:100%;}"],d.tablet,d.phone),f=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(s.a,{theme:u},c.a.createElement(c.a.Fragment,null,c.a.createElement(m,null),c.a.createElement(q,null),c.a.createElement(C,null),c.a.createElement(h,null,e)))},t}(c.a.PureComponent),g=s.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;width:100vw;min-height:100vh;padding-top:115px;padding-left:36vw;padding-right:24vw;padding-bottom:100px;box-sizing:border-box;z-index:0;"]),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.children;return c.a.createElement(g,{id:"main"},c.a.createElement(M,null),e)},t}(c.a.PureComponent),w=s.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;"]),E=s.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:100vw;height:99vh;margin:0 auto;background-color:#474e5d;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),x=n(268),v=n.n(x),S=n(269),y=n.n(S),j=s.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;top:0;bottom:0;left:0;right:0;color:#ffffff;"]),k=s.c.div.withConfig({displayName:"Footer__Content",componentId:"sc-1bz5sjq-1"})(["position:absolute;bottom:0;right:0;width:60vw;height:300px;box-sizing:border-box;"]),z=s.c.div.withConfig({displayName:"Footer__List",componentId:"sc-1bz5sjq-2"})(["padding:20px;padding-top:100px;p{font-size:14px;line-height:1.5;margin:5px;color:#ffffff;img{position:absolute;width:160px;height:160px;right:0;top:100px;opacity:0;transition:opacity 300ms;}}h4{color:#ffffff;}p:hover{img{opacity:1;}}"]),C=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(j,null,c.a.createElement(k,null,c.a.createElement(v.a,{cellHeight:300,cols:2},c.a.createElement(y.a,{cols:1},c.a.createElement(z,null,c.a.createElement("h4",null,"关注"),c.a.createElement("a",{href:"https://weibo.com/uuPin1",target:"_black"},c.a.createElement("p",null,"微博：@游里")),c.a.createElement("p",{className:"wechat"},"微信：uupin1",c.a.createElement("img",{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fyavwpwln2j30e80e8wep.jpg"})),c.a.createElement("p",null,"QQ群：123456789"))),c.a.createElement(y.a,{cols:1},c.a.createElement(z,null,c.a.createElement("h4",null,"帮助"),c.a.createElement("p",null,"使用教程"),c.a.createElement("p",null,"常见问题"),c.a.createElement("p",null,"报告BUG"))))))},t}(c.a.PureComponent),O=n(264),I=n(265),T=n.n(I),N=n(51),q=function(e){return c.a.createElement(N.StaticQuery,{query:_,render:function(t){var n=t.site.siteMetadata,a=n.defaultTitle,i=n.titleTemplate,r=n.siteUrl,o=n.defaultDescription,l={title:e.title||a,description:e.description||o,url:""+r+(e.pathname||"/")};return c.a.createElement(T.a,{title:l.title,titleTemplate:i},c.a.createElement("meta",{name:"description",content:l.description}),l.url&&c.a.createElement("meta",{property:"og:url",content:l.url}),l.title&&c.a.createElement("meta",{property:"og:title",content:l.title}),l.description&&c.a.createElement("meta",{property:"og:description",content:l.description}))},data:O})};q.defaultProps={title:null,description:null,pathname:null,theme:!1};var _="4287772990",P=n(267),A=n.n(P),F=n(18),R=s.c.section.withConfig({displayName:"Header__Section",componentId:"sc-1ompd6b-0"})(["position:absolute;width:40vw;height:100px;top:50px;left:36vw;z-index:999;"]),L=s.c.div.withConfig({displayName:"Header__Font",componentId:"sc-1ompd6b-1"})(["text-align:center;line-height:100px;height:100px;color:#968082;"]),M=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return c.a.createElement(R,null,c.a.createElement(A.a,{container:!0},c.a.createElement(A.a,{item:!0,xs:1}),c.a.createElement(A.a,{item:!0,xs:4},c.a.createElement(L,null,"PINKX")),c.a.createElement(A.a,{item:!0,xs:2},c.a.createElement(F.Link,{to:"/"},c.a.createElement("img",{src:"/img/hema.svg",alt:"Logo"}))),c.a.createElement(A.a,{item:!0,xs:4},c.a.createElement(L,null,"编帖助手")),c.a.createElement(A.a,{item:!0,xs:1})))},t}(c.a.PureComponent),W=s.c.div.withConfig({displayName:"CardHeader",componentId:"sc-1t3ono5-0"})(["background-color:#feeae6;padding-top:100px;padding-bottom:20px;padding-left:50px;padding-right:50px;position:relative;color:#968082;h2{font-size:27px;text-align:center;color:#442c2e;}"]);n.d(t,"e",function(){return f}),n.d(t,"h",function(){return b}),n.d(t,"a",function(){return w}),n.d(t,"g",function(){return E}),n.d(t,"c",function(){return C}),n.d(t,"f",function(){return q}),n.d(t,"d",function(){return M}),n.d(t,"b",function(){return W})},271:function(e,t,n){"use strict";t.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://placem.at/things?txt=海报",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},477:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(0)),r=(0,a(n(316)).default)(i.default.createElement(i.default.Fragment,null,i.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),i.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})),"ArrowForwardSharp");t.default=r}}]);
//# sourceMappingURL=component---src-pages-generate-tsx-64d63bda009ee41098d0.js.map