(this["webpackJsonpcontact-eurail"]=this["webpackJsonpcontact-eurail"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var c=n(5),a=n(0),s=n.n(a),r=n(14),i=n.n(r),l=(n(81),n(33)),o=n(36),j=n(4),u=n.n(j),d=n(109),b="Contact List",h="https://api.randomuser.me",m=120,O=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],x=n(24),f=n.n(x),p=n(49),_=n.n(p),v=n(61),C=function(e){var t=e.results,n=O,c=n.reduce((function(e,t){return e[t]||(e[t]=[]),e}),{});return t.filter((function(e){var t=e.name.last.charAt(0).toLowerCase();return n.includes(t)})).forEach((function(e){var t=e.name.last.charAt(0).toLowerCase();c[t].push(e)})),Object.keys(c).map((function(e){return{key:e,results:c[e]}}))},g=function(e,t){var n=Object(a.useRef)({}),c=Object(a.useState)(null),s=Object(o.a)(c,2),r=s[0],i=s[1],l=Object(a.useState)(t),j=Object(o.a)(l,2),u=j[0],d=j[1];return Object(a.useEffect)((function(){(function(){var t=Object(v.a)(_.a.mark((function t(){var c,a,s,r,l;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.current[e]){t.next=7;break}c=n.current[e],a=C(c),i(a),d(!1),t.next=17;break;case 7:return t.next=9,fetch(e);case 9:return s=t.sent,t.next=12,s.json();case 12:r=t.sent,n.current[e]=r,l=C(r),i(l),d(!1);case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),{response:r,isLoading:u}},I=n(25),k=n.n(I),N=n(110),y=function(e){var t,n=e.userInfo,a=u()(Object(l.a)({},k.a.contactCard,!0));return Object(c.jsxs)("div",{className:a,children:[Object(c.jsx)("span",{className:k.a.closeIcon,onClick:function(){e.closeUserCard()},children:Object(c.jsx)(N.a,{})}),Object(c.jsx)("div",{className:k.a.photo,children:Object(c.jsx)("img",{src:n.picture.medium,alt:"".concat(n.name.first," ").concat(n.name.last)})}),Object(c.jsxs)("div",{className:k.a.information,children:[Object(c.jsxs)("div",{className:k.a.fullname,children:[(t=n.name.first,t.toUpperCase()),", ",n.name.last]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"e-mail"}),Object(c.jsx)("span",{children:n.email})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"phone"}),Object(c.jsx)("span",{children:n.phone})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"street"}),Object(c.jsxs)("span",{children:[n.location.street.number," ",n.location.street.name]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"city"}),Object(c.jsx)("span",{children:n.location.city})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"state"}),Object(c.jsx)("span",{children:n.location.state})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"postcode"}),Object(c.jsx)("span",{children:n.location.postcode})]})]}),Object(c.jsxs)("div",{className:k.a.username,children:[Object(c.jsx)("label",{children:"username"}),n.login.username]})]})},L=d.a.TabPane,w=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],s=t[1],r="".concat(h,"/?results=").concat(m),i=g(r,!0),j=i.response,O=i.isLoading,x=function(){s({})},p=u()(Object(l.a)({},f.a.contacts,!0));return Object(c.jsxs)("div",{className:p,children:[Object(c.jsx)("h4",{className:f.a.title,children:b}),O?Object(c.jsx)("p",{children:"Loading ..."}):Object(c.jsx)(d.a,{type:"card",defaultActiveKey:"1",children:j.map((function(e){return Object(c.jsx)(L,{tab:Object(c.jsxs)("div",{className:f.a.tabItem,children:[Object(c.jsx)("span",{className:f.a.tabItemChar,children:e.key})," ",Object(c.jsxs)("span",{className:f.a.tabItemLength,children:[" ",e.results.length]})]}),disabled:0===e.results.length,children:Object(c.jsx)("ul",{className:f.a.listWrapper,children:e.results.map((function(e,t){return Object(c.jsxs)("li",{onClick:function(){return t=e.login.uuid,void(Object.keys(n)[0]!==t&&s((function(e){return Object(l.a)({},t,!e[t])})));var t},children:[Object(c.jsxs)("span",{children:[e.name.last,", ",e.name.first]}),n[e.login.uuid]?Object(c.jsx)(y,{userInfo:e,closeUserCard:x}):null]},t)}))})},e.key)}))})]})};n(103),n(104);var S=function(){return Object(c.jsx)("div",{className:"container mt40",children:Object(c.jsx)(w,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,111)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root")),T()},24:function(e,t,n){e.exports={contacts:"Contacts_contacts__kbOkO",title:"Contacts_title__35lfT",listWrapper:"Contacts_listWrapper__3e46q"}},25:function(e,t,n){e.exports={fixedHeight:"ContactItem_fixedHeight__3ScLc",autoHeight:"ContactItem_autoHeight__2NEt5",contactCard:"ContactItem_contactCard__v5uoT",information:"ContactItem_information__328LB",fullname:"ContactItem_fullname__1wN4J",item:"ContactItem_item__32b6X",photo:"ContactItem_photo__3zTk5",username:"ContactItem_username__2BQl3",closeIcon:"ContactItem_closeIcon__2AVGo"}}},[[105,1,2]]]);
//# sourceMappingURL=main.cde406ea.chunk.js.map