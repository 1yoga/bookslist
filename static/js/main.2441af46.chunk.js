(this.webpackJsonpbookslist=this.webpackJsonpbookslist||[]).push([[0],{12:function(t,e,n){t.exports={navbar:"Navbar_navbar__13M8M",active:"Navbar_active__LsdbG"}},16:function(t,e,n){t.exports={filter:"Filter_filter__3p_2w",tags:"Filter_tags__1Jrpn",tag:"Filter_tag__2sfcQ"}},42:function(t,e,n){},44:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(32),s=n.n(r),o=(n(42),n(19)),i=n.n(o),u=n(33),l=n(8),j=n(7),d=(n(44),n(34)),b=n.n(d),f=n(9),O=n.n(f),g=n(1),h=function(t){var e=t.item,n=t.button,a=t.onButton,c=t.onTag;return Object(g.jsxs)("div",{className:O.a.card,children:[Object(g.jsxs)("div",{className:O.a.headerOfCard,children:[Object(g.jsx)("h4",{children:e.author}),Object(g.jsxs)("button",{onClick:function(){return a(e)},className:O.a.button,children:[n,"=>"]})]}),Object(g.jsx)("h3",{children:e.title}),Object(g.jsx)("div",{children:e.description}),Object(g.jsx)("div",{className:O.a.tags,children:e.tags.map((function(t,e){return Object(g.jsxs)("div",{onClick:function(){return c(t)},className:O.a.tag,children:["#",t]},e)}))})]})},p=n(16),x=n.n(p),v=n(6),m=function(t){var e=t.items,n=t.clear,a=t.url;return Object(g.jsxs)("div",{className:x.a.filter,children:[Object(g.jsxs)("div",{className:x.a.tags,children:[Object(g.jsx)("div",{children:"Filteres by tags:"}),e.map((function(t,e){return Object(g.jsxs)("div",{className:x.a.tag,children:["#",t]},e)}))]}),Object(g.jsx)("button",{onClick:function(){return n(e)},children:Object(g.jsx)(v.b,{to:a,children:"(clear)"})})]})},_=n(3),N=n(37),S=n.n(N),w=function(t){var e=t.props,n="/"+e.title.split(" ").join("").toLowerCase(),c=Object(_.a)();Object(a.useEffect)((function(){var t=c.location.hash.substr(c.location.hash.split("").indexOf("=")-1),n=S.a.parse(t);!function(){try{n.s&&e.setTags(n.s.split(" "))}catch(t){console.error(t)}}()}),[]),Object(a.useEffect)((function(){0!==e.tags.length?c.push("#".concat(n,"?tags=").concat(e.tags.join(" "))):c.push("".concat(c.location.hash))}),[e.tags]);var r=e.data;return e.tags.length&&(r=e.data.filter((function(t){return t.tags.find((function(t){return e.tags.includes(t)}))}))),Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(m,{url:n,items:e.tags,clear:e.clear}),r.map((function(t,n){return Object(g.jsx)(h,{button:e.button,onButton:e.onButton,item:t,onTag:e.onTag},n)}))]})},C=n(12),k=n.n(C),T=function(t){var e=t.props;return Object(g.jsxs)("div",{className:k.a.navbar,children:[Object(g.jsx)(v.b,{to:"/toread",activeClassName:k.a.active,children:e[0].title+"("+e[0].count+")"}),Object(g.jsx)(v.b,{to:"/inprogress",activeClassName:k.a.active,children:e[1].title+"("+e[1].count+")"}),Object(g.jsx)(v.b,{to:"/done",activeClassName:k.a.active,children:e[2].title+"("+e[2].count+")"})]})},I=n(2);var J=function(){var t=Object(a.useState)([]),e=Object(j.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)([]),s=Object(j.a)(r,2),o=s[0],d=s[1],f=Object(a.useState)([]),O=Object(j.a)(f,2),h=O[0],p=O[1],x=Object(a.useState)([]),v=Object(j.a)(x,2),m=v[0],_=v[1],N=Object(a.useState)([]),S=Object(j.a)(N,2),C=S[0],k=S[1],J=Object(a.useState)([]),y=Object(j.a)(J,2),E=y[0],B=y[1],D=Object(a.useState)([]),F=Object(j.a)(D,2),L=F[0],M=F[1],P=[{clear:function(){k([])},title:"To read",data:o,button:"start reading",tags:C,setTags:k,count:o.length,onTag:function(t){C.includes(t)||k((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){p((function(e){return[].concat(Object(l.a)(e),[t])})),d((function(e){return e.filter((function(e){return e.id!==t.id}))}))}},{clear:function(){B([])},title:"In progress",data:h,button:"finished reading",tags:E,setTags:B,count:h.length,onTag:function(t){E.includes(t)||B((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){_((function(e){return[].concat(Object(l.a)(e),[t])})),p((function(e){return e.filter((function(e){return e.id!==t.id}))}))}},{clear:function(){M([])},title:"Done",data:m,button:"add to read",tags:L,setTags:M,count:m.length,onTag:function(t){L.includes(t)||M((function(e){return[].concat(Object(l.a)(e),[t])}))},onButton:function(t){d((function(e){return[].concat(Object(l.a)(e),[t])})),_((function(e){return e.filter((function(e){return e.id!==t.id}))}))}}];return Object(a.useEffect)((function(){function t(){return(t=Object(u.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.a.get("10-items.json");case 3:e=t.sent,c(e.data.items),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){d(JSON.parse(window.localStorage.getItem("bookData"))),p(JSON.parse(window.localStorage.getItem("inProgressData"))),_(JSON.parse(window.localStorage.getItem("doneData")))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("bookData",JSON.stringify(o))}),[o]),Object(a.useEffect)((function(){window.localStorage.setItem("inProgressData",JSON.stringify(h))}),[h]),Object(a.useEffect)((function(){window.localStorage.setItem("doneData",JSON.stringify(m))}),[m]),Object(g.jsxs)("div",{className:"wrapper",children:[Object(g.jsx)("button",{onClick:function(){d(n)},children:"Reload"}),Object(g.jsx)(T,{props:P}),Object(g.jsx)(I.a,{path:"/toread",children:Object(g.jsx)(w,{props:P[0]})}),Object(g.jsx)(I.a,{path:"/inprogress",children:Object(g.jsx)(w,{props:P[1]})}),Object(g.jsx)(I.a,{path:"/done",children:Object(g.jsx)(w,{props:P[2]})})]})};s.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(v.a,{children:Object(g.jsx)(J,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={card:"Card_card__3-9IY",headerOfCard:"Card_headerOfCard__1Wp7x",button:"Card_button__xhumk",tags:"Card_tags__1jNju",tag:"Card_tag__8LcOc"}}},[[74,1,2]]]);
//# sourceMappingURL=main.2441af46.chunk.js.map