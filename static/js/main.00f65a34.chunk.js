(this["webpackJsonpbooqable-doodles"]=this["webpackJsonpbooqable-doodles"]||[]).push([[0],{39:function(e,l,a){"use strict";a.r(l);var r=a(21),t=a(0),o=a(18),n=a.n(o),c=a(5),i=a(38),d=a(11),s=a(7),u=a(29),b=a(20),j=a(30),h=(a(74),a(3)),v=[{value:"arrow-1",label:"Arrow 1"},{value:"arrow-2",label:"Arrow 2"},{value:"arrow-3",label:"Arrow 3"},{value:"arrow-4",label:"Arrow 4"},{value:"arrow-5",label:"Arrow 5"},{value:"arrow-6",label:"Arrow 6"},{value:"arrow-7",label:"Arrow 7"},{value:"arrow-8",label:"Arrow 8"},{value:"circle-1",label:"Circle 1"},{value:"circle-2",label:"Circle 2"},{value:"circle-3",label:"Circle 3"},{value:"line-1",label:"Line 1"},{value:"line-2",label:"Line 2"}],p=[{value:"center",label:"Center"},{value:"top",label:"Top"},{value:"bottom",label:"Bottom"},{value:"left",label:"Left"},{value:"right",label:"Right"}],O=[{value:"green",label:"Green"},{value:"blue",label:"Blue"},{value:"secondary-blue",label:"Secondary Blue"},{value:"orange",label:"Orange"},{value:"purple",label:"Purple"},{value:"pink",label:"Pink"}];function x(){var e=Object(t.useState)(""),l=Object(r.a)(e,2),a=l[0],o=l[1],n=Object(t.useState)(v[0]),x=Object(r.a)(n,2),f=x[0],g=x[1],m=Object(t.useState)(p[0]),w=Object(r.a)(m,2),C=w[0],k=w[1],y=Object(t.useState)(O[0]),S=Object(r.a)(y,2),A=S[0],W=S[1],R="doodle doodle__".concat(f.value," doodle--").concat(C.value," doodle--").concat(A.value),B=Object(c.c)('<span class="'.concat(R,'">\n  ').concat(a.length?a:"dolor sit","\n  </span>")),P=B.hasCopied,L=B.onCopy,N=function(e){switch(e){case"left":return"flex-end";case"right":return"flex-start";default:return"center"}},q=function(e,l){var a=e.target.value;switch(l){case"phrase":o(a);break;case"doodle":g(v.find((function(l){return l.value===e.target.value})));break;case"position":k(p.find((function(l){return l.value===e.target.value})));break;case"color":W(O.find((function(l){return l.value===e.target.value})));default:return}};return Object(h.jsx)(i.a,{children:Object(h.jsxs)(d.a,{padding:4,borderWidth:{base:0,sm:1},borderRadius:{base:"none",sm:"lg"},maxWidth:"xl",margin:{base:"0",sm:"20px auto"},children:[Object(h.jsxs)(s.a,{id:"phrase",mb:2,children:[Object(h.jsx)(s.c,{children:"Phrase to wrap"}),Object(h.jsx)(u.a,{value:a,onChange:function(e){return q(e,"phrase")},placeholder:"dolor sit"})]}),Object(h.jsxs)(s.a,{id:"doodle",mb:2,children:[Object(h.jsx)(s.c,{children:"Select a doodle"}),Object(h.jsx)(b.a,{value:f.value,onChange:function(e){return q(e,"doodle")},children:v.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label},e.value)}))}),Object(h.jsx)(s.b,{children:"It's not recommended to use circle doodles for long phrases"})]}),Object(h.jsxs)(s.a,{id:"position",mb:5,children:[Object(h.jsx)(s.c,{children:"Select position of a doodle"}),Object(h.jsx)(b.a,{value:C.value,onChange:function(e){return q(e,"position")},children:p.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),Object(h.jsxs)(s.a,{id:"position",mb:5,children:[Object(h.jsx)(s.c,{children:"Select color of a doodle"}),Object(h.jsx)(b.a,{value:A.value,onChange:function(e){return q(e,"color")},children:O.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label},e.value)}))})]}),Object(h.jsxs)(d.a,{p:4,borderWidth:1,borderRadius:"lg",background:"gray.100",children:[Object(h.jsx)(d.c,{fontWeight:"600",mb:2,fontSize:"lg",children:"Code"}),Object(h.jsx)(d.a,{p:2,mb:3,background:"white",borderWidth:1,borderRadius:"lg",children:Object(h.jsxs)(d.b,{colorScheme:"white",children:['<span class="',R,'">',a.length?a:"dolor sit","</span>"]})}),Object(h.jsx)(j.a,{mb:5,colorScheme:"blue",width:"100%",onClick:L,children:P?"Copied!":"Copy"}),Object(h.jsx)(d.c,{fontWeight:"600",mb:2,fontSize:"lg",children:"Preview"}),Object(h.jsx)(d.a,{borderWidth:1,borderRadius:"lg",py:10,px:3,mb:5,background:"white",overflow:"hidden",display:"flex",justifyContent:N(C.value),children:Object(h.jsx)("span",{className:R,children:a.length?a:"dolor sit"})}),Object(h.jsx)(d.a,{borderWidth:1,borderRadius:"lg",py:10,px:3,background:"white",overflow:"hidden",display:"flex",justifyContent:N(C.value),children:Object(h.jsxs)("span",{className:"preview",children:["lorem ipsum"," ",Object(h.jsx)("span",{className:R,children:a.length?a:"dolor sit"})," ","amet"]})})]})]})})}var f=document.getElementById("root");n.a.render(Object(h.jsx)(x,{}),f)},74:function(e,l,a){}},[[39,1,2]]]);
//# sourceMappingURL=main.00f65a34.chunk.js.map