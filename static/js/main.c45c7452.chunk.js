(this.webpackJsonpbookslist=this.webpackJsonpbookslist||[]).push([[0],{12:function(t,e,n){t.exports={navbar:"Navbar_navbar__13M8M",active:"Navbar_active__LsdbG"}},16:function(t,e,n){t.exports={filter:"Filter_filter__3p_2w",tags:"Filter_tags__1Jrpn",tag:"Filter_tag__2sfcQ"}},39:function(t,e,n){},41:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(30),o=n.n(r),i=(n(39),n(19)),s=n.n(i),u=n(31),l=n(8),d=n(6),j=(n(41),n(32)),b=n.n(j),f=n(9),O=n.n(f),g=n(1),p=function(t){var e=t.item,n=t.button,a=t.onButton,c=t.onTag;return Object(g.jsxs)("div",{className:O.a.card,children:[Object(g.jsxs)("div",{className:O.a.headerOfCard,children:[Object(g.jsx)("h4",{children:e.author}),Object(g.jsxs)("button",{onClick:function(){return a(e)},className:O.a.button,children:[n,"=>"]})]}),Object(g.jsx)("h3",{children:e.title}),Object(g.jsx)("div",{children:e.description}),Object(g.jsx)("div",{className:O.a.tags,children:e.tags.map((function(t,e){return Object(g.jsxs)("div",{onClick:function(){return c(t)},className:O.a.tag,children:["#",t]},e)}))})]})},h=n(16),x=n.n(h),v=function(t){var e=t.items,n=t.clear;return Object(g.jsxs)("div",{className:x.a.filter,children:[Object(g.jsxs)("div",{className:x.a.tags,children:[Object(g.jsx)("div",{children:"Filteres by tags:"}),e.map((function(t,e){return Object(g.jsxs)("div",{className:x.a.tag,children:["#",t]},e)}))]}),Object(g.jsx)("button",{onClick:function(){return n(e)},children:"(clear)"})]})},m=function(t){var e=t.props;return Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(v,{items:e.tags,clear:e.clear}),e.data.map((function(t,n){return Object(g.jsx)(p,{button:e.button,onButton:e.onButton,item:t,onTag:e.onTag},n)}))]})},_=n(12),N=n.n(_),S=n(7),w=function(t){var e=t.props;return Object(g.jsxs)("div",{className:N.a.navbar,children:[Object(g.jsx)(S.b,{to:"/toread",activeClassName:N.a.active,children:e[0].title+"("+e[0].count+")"}),Object(g.jsx)(S.b,{to:"/inprogress",activeClassName:N.a.active,children:e[1].title+"("+e[1].count+")"}),Object(g.jsx)(S.b,{to:"/done",activeClassName:N.a.active,children:e[2].title+"("+e[2].count+")"})]})},C=n(2);var k=function(){var t=Object(a.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(n),o=Object(d.a)(r,2),i=o[0],j=o[1],f=Object(a.useState)([]),O=Object(d.a)(f,2),p=O[0],h=O[1],x=Object(a.useState)([]),v=Object(d.a)(x,2),_=v[0],N=v[1],S=Object(a.useState)([]),k=Object(d.a)(S,2),I=k[0],J=k[1],y=Object(a.useState)([]),B=Object(d.a)(y,2),D=B[0],T=B[1],E=Object(a.useState)([]),F=Object(d.a)(E,2),M=F[0],L=F[1],P=[{clear:function(){J([])},title:"To read",data:i,button:"start reading",tags:I,count:i.length,onTag:function(t){I.includes(t)||J((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){h((function(e){return[].concat(Object(l.a)(e),[t])})),j((function(e){return e.filter((function(e){return e.id!==t.id}))}))}},{clear:function(){T([])},title:"In progress",data:p,button:"finished reading",tags:D,count:p.length,onTag:function(t){D.includes(t)||T((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){N((function(e){return[].concat(Object(l.a)(e),[t])})),h((function(e){return e.filter((function(e){return e.id!==t.id}))}))}},{clear:function(){L([])},title:"Done",data:_,button:"add to read",tags:M,count:_.length,onTag:function(t){M.includes(t)||L((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){j((function(e){return[].concat(Object(l.a)(e),[t])})),N((function(e){return e.filter((function(e){return e.id!==t.id}))}))}}];return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("10-items.json");case 3:e=t.sent,c(e.data.items),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){j(JSON.parse(window.localStorage.getItem("bookData"))),h(JSON.parse(window.localStorage.getItem("inProgressData"))),N(JSON.parse(window.localStorage.getItem("doneData")))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("bookData",JSON.stringify(i)),window.localStorage.setItem("inProgressData",JSON.stringify(p)),window.localStorage.setItem("doneData",JSON.stringify(_))}),[i,p,_]),Object(g.jsxs)("div",{className:"wrapper",children:[Object(g.jsx)(w,{props:P}),Object(g.jsx)(C.a,{path:"/toread",children:Object(g.jsx)(m,{props:P[0]})}),Object(g.jsx)(C.a,{path:"/inprogress",children:Object(g.jsx)(m,{props:P[1]})}),Object(g.jsx)(C.a,{path:"/done",children:Object(g.jsx)(m,{props:P[2]})})]})};o.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(S.a,{children:Object(g.jsx)(k,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={card:"Card_card__3-9IY",headerOfCard:"Card_headerOfCard__1Wp7x",button:"Card_button__xhumk",tags:"Card_tags__1jNju",tag:"Card_tag__8LcOc"}}},[[69,1,2]]]);
//# sourceMappingURL=main.c45c7452.chunk.js.map