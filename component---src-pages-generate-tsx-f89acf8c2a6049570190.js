(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{254:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return j});n(122),n(121),n(36),n(281);var a=n(9),r=n.n(a),o=n(35),i=n.n(o),l=n(0),c=n.n(l),s=n(288),u=n.n(s),d=n(263),p=n.n(d),m=n(282),h=n.n(m),f=n(283),b=n.n(f),g=n(289),w=n.n(g),x=n(290),E=n.n(x),v=n(19),S=n(264),y=n(270),j=function(e){function t(t){var n,a;if(n=e.call(this,t)||this,"undefined"!=typeof window){var r=window.localStorage.getItem("drama");a=JSON.parse(r)||y.a}else a=y.a;return n.state={drama:a},n.handleInputChange=n.handleInputChange.bind(i()(i()(n))),n.handleOnSave=n.handleOnSave.bind(i()(i()(n))),n.handleSubmit=n.handleSubmit.bind(i()(i()(n))),n}r()(t,e);var n=t.prototype;return n.handleInputChange=function(e){var t,n=e.target,a=n.name,r=n.value,o=Object.assign({},this.state.drama,((t={})[a]=r,t));this.setState({drama:o})},n.handleOnSave=function(){var e=this.peopleToObj(this.state.drama.staffStr),t=this.peopleToObj(this.state.drama.castStr),n=this.peopleToObj(this.state.drama.edStr),a=this.linksToObj(this.state.drama.linkStr),r=this.peopleToStr(e),o=this.peopleToStr(t),i=this.peopleToStr(n),l=this.linksToStr(a),c=Object.assign({},this.state.drama,{staff:e,cast:t,ed:n,staffStr:r,castStr:o,edStr:i,links:a,linkStr:l});"undefined"!=typeof window&&window.localStorage.setItem("drama",JSON.stringify(c)),this.setState(function(){return{drama:c}})},n.handleSubmit=function(){this.handleOnSave()},n.peopleToStr=function(e){var t=this,n="";return e.forEach(function(e){n+=t.personToStr(e)}),n},n.personToStr=function(e){var t=e.organization?"【"+e.organization+"】":"",n=e.weibo?"@"+e.weibo:"";return e.job+"："+e.name+t+n+"\n"},n.peopleToObj=function(e){var t=this,n=[];return e.split("\n").forEach(function(e){e&&n.push(t.personToObj(e))}),n},n.personToObj=function(e){return{job:this.filterReObj(/([\u4E00-\u9FA5A-Za-z0-9]+)：/.exec(e)),name:this.filterReObj(/：([\u4E00-\u9FA5A-Za-z0-9《》]+)/.exec(e)),organization:this.filterReObj(/【([\u4E00-\u9FA5A-Za-z0-9]+)】/.exec(e)),weibo:this.filterReObj(/@([\u4E00-\u9FA5A-Za-z0-9]+)/.exec(e))}},n.linksToStr=function(e){var t=this,n="";return e.forEach(function(e){n+=t.linkToStr(e)}),n},n.linkToStr=function(e){return e.name+"："+e.url+"【"+e.other+"】\n"},n.linksToObj=function(e){var t=this,n=[];return e.split("\n").forEach(function(e){e&&n.push(t.linkToObj(e))}),n},n.linkToObj=function(e){return{name:this.filterReObj(/([\u4E00-\u9FA5A-Za-z0-9]+)：/.exec(e)),url:this.filterReObj(/((?:http|https):[\w\/\-.?%&=]+)/.exec(e)),other:this.filterReObj(/【([\w]+)】/.exec(e))}},n.filterReObj=function(e){return e?e[1]:""},n.render=function(){var e=this.state.drama;return c.a.createElement(S.c,null,c.a.createElement(S.e,null,c.a.createElement(p.a,null,c.a.createElement(h.a,{className:"card-title"},"填写详细信息"),c.a.createElement(h.a,null,e.title),c.a.createElement(h.a,null,c.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"正剧海报",name:"dramaPoster",required:!0,prefix:"https://",InputProps:{},value:e.dramaPoster,onChange:this.handleInputChange}),c.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"制作组名单",name:"staffStr",value:e.staffStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"配音组名单",name:"castStr",value:e.castStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"片尾曲名单",name:"edStr",value:e.edStr,multiline:!0,rows:4,rowsMax:9,required:!0,onChange:this.handleInputChange}),c.a.createElement(b.a,{fullWidth:!0,variant:"filled",label:"链接列表",name:"linkStr",value:e.linkStr,multiline:!0,rows:4,rowsMax:5,required:!0,onChange:this.handleInputChange})),c.a.createElement(S.a,null,c.a.createElement(v.Link,{to:"/preview",onClick:this.handleSubmit},c.a.createElement(u.a,{size:"large",className:"button",color:"primary"},"生成",c.a.createElement(w.a,null))),c.a.createElement(v.Link,{to:"/",onClick:this.handleOnSave},c.a.createElement(u.a,{size:"large",className:"button"},c.a.createElement(E.a,null),"上一步"))))))},t}(c.a.Component)},261:function(e){e.exports={data:{site:{buildTime:"18.12.2018"}}}},262:function(e,t,n){},264:function(e,t,n){"use strict";var a=n(9),r=n.n(a),o=n(273),i=n.n(o),l=n(261),c=n(0),s=n.n(c),u=n(51),d=n(259),p={colors:{primary:"#72cc96",bg:"#eee",white:"#fff",grey:{dark:"rgba(0, 0, 0, 0.9)",default:"rgba(0, 0, 0, 0.7)",light:"rgba(0, 0, 0, 0.5)",ultraLight:"rgba(0, 0, 0, 0.25)"}},transitions:{normal:"0.5s"},fontSize:{small:"0.9rem",big:"2.9rem"}},m={tablet:"(max-width: "+"1200px"+")",phone:"(max-width: "+"600px"+")"};n(262);function h(){var e=i()(["\n  ::selection {\n    color: ",";\n    background: ",";\n  }\n  body {\n    background: ",";\n    color: ",";\n    @media "," {\n      font-size: 14px;\n    }\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n    transition: all ",";\n  }\n  a:hover {\n    color: ",";\n  }\n  h1, h2, h3, h4 {\n    color: ",';\n  }\n  blockquote {\n    font-style: italic;\n    position: relative;\n  }\n\n  blockquote:before {\n    content: "";\n    position: absolute;\n    background: ',";\n    height: 100%;\n    width: 6px;\n    margin-left: -1.6rem;\n  }\n  label {\n    margin-bottom: .5rem;\n    color: ",";\n  }\n  input, textarea {\n    border-radius: .5rem;\n    border: none;\n    background: rgba(0, 0, 0, 0.05);\n    padding: .25rem 1rem;\n    &:focus {\n      outline: none;\n    }\n  }\n  .textRight {\n    text-align:right;\n  }\n"]);return h=function(){return e},e}var f=Object(d.b)(h(),p.colors.bg,p.colors.primary,p.colors.bg,p.colors.grey.default,m.phone,p.colors.grey.dark,p.transitions.normal,p.colors.primary,p.colors.grey.dark,p.colors.primary,p.colors.grey.dark),b=d.c.section.withConfig({displayName:"Layout__Section",componentId:"sc-1pwrqdp-0"})(["background-color:#eeeeee;background-image:url('https://www.transparenttextures.com/patterns/blizzard.png');min-height:100vh;margin-bottom:300px;z-index:0;@media ","{min-height:100%;}@media ","{min-height:100%;}"],m.tablet,m.phone),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(u.StaticQuery,{query:"1536950682",render:function(){return s.a.createElement(d.a,{theme:p},s.a.createElement(s.a.Fragment,null,s.a.createElement(f,null),s.a.createElement(R,null),s.a.createElement(b,null,e)))},data:l})},t}(s.a.PureComponent),w=n(263),x=n.n(w),E=n(268),v=n.n(E),S=n(19),y=d.c.div.withConfig({displayName:"Wrapper__Section",componentId:"sc-12mqwn2-0"})(["display:grid;grid-template-columns:264px auto;margin:0 auto;padding-top:100px;padding-bottom:100px;width:1024px;min-height:100vh;box-sizing:border-box;z-index:0;"]),j=d.c.section.withConfig({displayName:"Wrapper__LeftSection",componentId:"sc-12mqwn2-1"})(["width:184px;text-align:center;"]),k=d.c.section.withConfig({displayName:"Wrapper__RightSection",componentId:"sc-12mqwn2-2"})(["width:760px;"]),z=d.c.section.withConfig({displayName:"Wrapper__Logo",componentId:"sc-12mqwn2-3"})(["background-color:grey;width:144px;height:144px;margin:20px;border-radius:20px;"]),C=d.c.h1.withConfig({displayName:"Wrapper__SiteName",componentId:"sc-12mqwn2-4"})(["font-size:33px;"]),O=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return s.a.createElement(y,null,s.a.createElement(j,null,s.a.createElement(x.a,null,s.a.createElement(S.Link,{to:"/"},s.a.createElement(v.a,null,s.a.createElement(z,null),s.a.createElement(C,null,"pinkX"))))),s.a.createElement(k,{className:"main"},e))},t}(s.a.PureComponent),_=d.c.div.withConfig({displayName:"Arrow",componentId:"sc-1knuvyh-0"})(["display:flex;flex-direction:row-reverse;flex-wrap:nowrap;justify-content:space-between;"]),I=d.c.iframe.withConfig({displayName:"Screen",componentId:"sc-1p65mjs-0"})(["width:90vw;height:96vh;margin:0 auto;background-color:white;box-sizing:border-box;border:20px solid #474e5d;border-radius:10px;position:relative;overflow:auto;&::before{content:'';position:absolute;left:50%;top:-10px;margin:-3px 0 0 -3px;width:6px;height:6px;border-radius:6px;background:#a5adbd;}"]),N=n(274),T=n.n(N),q=n(275),A=n.n(q),F=d.c.section.withConfig({displayName:"Footer__Section",componentId:"sc-1bz5sjq-0"})(["background-color:#212121;padding:20px;position:fixed;z-index:-1;top:0;bottom:0;left:0;right:0;color:#ffffff;"]),L=d.c.div.withConfig({displayName:"Footer__Content",componentId:"sc-1bz5sjq-1"})(["position:absolute;bottom:0;right:0;width:60vw;height:300px;box-sizing:border-box;"]),P=d.c.div.withConfig({displayName:"Footer__List",componentId:"sc-1bz5sjq-2"})(["padding:20px;padding-top:100px;p{font-size:14px;line-height:1.5;margin:5px;color:#ffffff;img{position:absolute;width:160px;height:160px;right:0;top:100px;opacity:0;transition:opacity 300ms;}}h4{color:#ffffff;}p:hover{img{opacity:1;}}"]),R=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return s.a.createElement(F,null,s.a.createElement(L,null,s.a.createElement(T.a,{cellHeight:300,cols:2},s.a.createElement(A.a,{cols:1},s.a.createElement(P,null,s.a.createElement("h4",null,"关注"),s.a.createElement("a",{href:"https://weibo.com/uuPin1",target:"_black"},s.a.createElement("p",null,"微博：@游里")),s.a.createElement("p",{className:"wechat"},"微信：uupin1",s.a.createElement("img",{src:"https://ws3.sinaimg.cn/large/006tNbRwgy1fyavwpwln2j30e80e8wep.jpg"})),s.a.createElement("p",null,"QQ群：123456789"))),s.a.createElement(A.a,{cols:1},s.a.createElement(P,null,s.a.createElement("h4",null,"帮助"),s.a.createElement("p",null,"使用教程"),s.a.createElement("p",null,"常见问题"),s.a.createElement("p",null,"报告BUG"))))))},t}(s.a.PureComponent);n.d(t,"c",function(){return g}),n.d(t,"e",function(){return O}),n.d(t,"a",function(){return _}),n.d(t,"d",function(){return I}),n.d(t,"b",function(){return R})},270:function(e,t,n){"use strict";t.a={title:"广播剧标题",episode:"全一期",subtitle:"各组社室",dramaPoster:"https://ws3.sinaimg.cn/large/006tNbRwgy1fy8xkbdep1j31540u0myo.jpg",staff:[{job:"策划",name:"策划的名字",organization:"策划的社团",weibo:"策划的微博"},{job:"导演",name:"三只耳朵的兔子",organization:"",weibo:"食肉兔子"},{job:"编剧",name:"佚名",organization:"我们爱明明",weibo:"你的唯一"},{job:"后期",name:"无中有",organization:"蒙面",weibo:"你看不见我"},{job:"海报",name:"萌哒哒",organization:"",weibo:"我是超可爱的萌货"}],staffStr:"策划：策划的名字【策划的社团】@策划的微博\n导演：三只耳朵的兔子@食肉兔子\n编剧：佚名【我们爱明明】@你的唯一\n后期：无中有【蒙面】@你看不见我\n海报：萌哒哒 @我是超可爱的萌货",cast:[{job:"男一",name:"男一的名字",organization:"男一的社团",weibo:"男一的微博"},{job:"男二",name:"男二的名字",organization:"男二的社团",weibo:"男二的微博"},{job:"女一",name:"女一的名字",organization:"女一的社团",weibo:"女一的微博"},{job:"女二",name:"女二的名字",organization:"女二的社团",weibo:"女二的微博"},{job:"龙套",name:"龙套的名字",organization:"龙套的社团",weibo:"龙套的微博"}],castStr:"男一：男一的名字【男一的社团】@男一的微博\n男二：男二的名字【男二的社团】@男二的微博\n女一：女一的名字【女一的社团】@女一的微博\n女二：女二的名字【女二的社团】@女二的微博\n龙套：龙套的名字【龙套的社团】@龙套的微博",ed:[{job:"歌名",name:"《算了吧》",organization:"",weibo:""},{job:"填词",name:"QAQ",organization:"",weibo:"爱哭鬼"},{job:"翻唱",name:"小姐姐",organization:"",weibo:"家有一只爱哭鬼"},{job:"后期",name:"无害工作室",organization:"",weibo:"无公害的后期工作室"}],edStr:"歌名：《算了吧》\n填词：QAQ@爱哭鬼\n翻唱：小姐姐@家有一只爱哭鬼\n后期：无害工作室@无公害的后期工作室",links:[{name:"百度网盘",url:"http://pan.baidu.com/s/1qYskKPY",other:"3n0h"}],linkStr:"百度网盘：http://pan.baidu.com/s/1qYskKPY【3n0h】"}},289:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(267)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"})),"ArrowForwardSharp");t.default=o},290:function(e,t,n){"use strict";var a=n(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=(0,a(n(267)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"})),"ArrowBackSharp");t.default=o}}]);
//# sourceMappingURL=component---src-pages-generate-tsx-f89acf8c2a6049570190.js.map