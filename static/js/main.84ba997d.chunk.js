(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{107:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(8),s=c.n(i),r=(c(87),c(88),c(36)),o=c(15),j=c(140),d=(c(89),c(2));function l(e){var t=e.addTodo,c=Object(n.useState)(""),a=Object(o.a)(c,2),i=a[0],s=a[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),i&&(t(i),s(""))},children:Object(d.jsx)("input",{type:"text",className:"input",value:i,placeholder:"Add todo...",size:"45",onChange:function(e){return s(e.target.value)}})})}var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];function i(e){var t=e.todo,n=e.index,a=e.completeTodo,i=e.removeTodo;return Object(d.jsxs)("div",{style:{textDecoration:t.isCompleted?"line-through":""},className:"todo",children:[t.text,Object(d.jsxs)("div",{children:[Object(d.jsx)(j.a,{color:"primary",onClick:function(){return a(n,c[n].isCompleted)},children:"Complete"}),Object(d.jsx)(j.a,{onClick:function(){return i(n)},children:"X"})]})]})}var s=function(e,t){if(!0===t){var n=Object(r.a)(c);n[e].isCompleted=!1,a(n)}else{var i=Object(r.a)(c);i[e].isCompleted=!0,a(i)}},b=function(e){var t=Object(r.a)(c);t.splice(e,1),a(t)},h=new Date,u=String(h.getDate()).padStart(2,"0"),O=String(h.getMonth()+1).padStart(2,"0"),x=h.getFullYear();return h=O+"/"+u+"/"+x,Object(d.jsxs)("section",{className:"todos",id:"Todos",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h6",{className:"ha",children:"-"}),Object(d.jsx)("h6",{className:"ha",children:"-"}),Object(d.jsx)("h6",{className:"ha",children:"-"}),Object(d.jsx)("h1",{className:"title",children:"Todos"}),Object(d.jsx)("h2",{className:"Data",children:h})]}),Object(d.jsxs)("div",{className:"todo-list",children:[c.map((function(e,t){return Object(d.jsx)(i,{index:t,todo:e,completeTodo:s,removeTodo:b},t)})),Object(d.jsx)(l,{className:"form",addTodo:function(e){var t=[].concat(Object(r.a)(c),[{text:e}]);a(t)}})]})]})};c(94);function h(e){return Object(d.jsxs)("div",{className:"Focus-time",children:[Object(d.jsx)("h2",{className:"title",children:"Focus Time"}),Object(d.jsxs)("div",{className:"button-container",children:[Object(d.jsx)(j.a,{id:"increament",onClick:e.increamentFocus,children:"+"}),Object(d.jsx)("h2",{id:"time",children:e.focusLength}),Object(d.jsx)(j.a,{id:"decraement",onClick:e.decreamentFocus,children:"-"})]})]})}c(95);function u(e){return Object(d.jsxs)("div",{className:"Break-time",children:[Object(d.jsx)("h2",{className:"title",children:"Break Time"}),Object(d.jsxs)("div",{className:"button-container",children:[Object(d.jsx)(j.a,{id:"increament",onClick:e.increamentBreak,children:"+"}),Object(d.jsx)("h2",{id:"time",children:e.breakLength}),Object(d.jsx)(j.a,{id:"decraement",onClick:e.decreamentBreak,children:"-"})]})]})}var O=c.p+"static/media/alarm.56d24f02.mp3";c(96);function x(){var e=Object(n.useState)(25),t=Object(o.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(5),s=Object(o.a)(i,2),r=s[0],l=s[1],b=Object(n.useState)("Focus"),x=Object(o.a)(b,2),m=x[0],p=x[1],f=Object(n.useState)(1500),v=Object(o.a)(f,2),g=v[0],k=v[1],N=Object(n.useState)(!1),w=Object(o.a)(N,2),C=w[0],S=w[1],T=Object(n.useState)(0),y=Object(o.a)(T,2),B=y[0],F=y[1],L=Object(n.useRef)(),I=new AudioContext,D=Math.floor(g/60),A=g%60;Object(n.useEffect)((function(){var e=null;return C&&g>0?e=setInterval((function(){k(g-1)}),1e3):C&&0===g?(e=setInterval((function(){k(g-1)}),1e3),L.current.play(),"Focus"===m?(p("Break"),k(60*r)):"Break"===m&&(p("Focus"),k(60*c),F(B+1))):clearInterval(e),function(){return clearInterval(e)}}),[C,g,m,r,c,L]);return Object(d.jsxs)("div",{className:"Clock",id:"Clock",children:[Object(d.jsx)("h1",{className:"title",children:"Tomato Clock"}),Object(d.jsxs)("div",{className:"label-container",children:[Object(d.jsx)(h,{focusLength:c,increamentFocus:function(){!C&&c<60&&(console.log(c),a(c+1),k(60*(c+1)))},decreamentFocus:function(){!C&&c>1&&(a(c-1),k(60*(c-1)))}}),Object(d.jsx)(u,{breakLength:r,increamentBreak:function(){!C&&r<60&&l(r+1)},decreamentBreak:function(){!C&&r>1&&l(r-1)}})]}),Object(d.jsxs)("div",{className:"timer-container",children:[Object(d.jsxs)("h1",{id:"timer-label",children:[m," Times!"]}),Object(d.jsxs)("h3",{id:"time-left",children:[D<10?("0"+D).slice(-2):D,":",A<10?("0"+A).slice(-2):A]}),Object(d.jsx)(j.a,{id:"start_stop",onClick:C?function(){S(!1)}:function(){I.resume(),S(!0)},children:"Start/Stop"}),Object(d.jsx)(j.a,{onClick:function(){a(25),l(5),k(1500),p("Focus"),S(!1),L.current.pause(),L.current.currentTime=0},id:"reset",children:"Reset"}),Object(d.jsx)(j.a,{onClick:function(){L.current.pause(),L.current.currentTime=0},children:"Dismiss Alarm"})]}),Object(d.jsx)("audio",{id:"beep",ref:L,src:O,type:"audio"}),Object(d.jsxs)("h2",{children:["Cycles finished : ",B,", Congratulation!!!"]})]})}c(97);function m(){return Object(d.jsxs)("div",{className:"Head",id:"Head",children:[Object(d.jsxs)("div",{className:"blank",children:[Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h1",{className:"Head-title",children:"Focus.io"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h6",{children:"-"}),Object(d.jsx)("h2",{className:"Head-sub",children:"Let us help you with daily office work"})]}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("span",{})})})]})}var p=c(72),f=c(19),v=c(57),g=c(77),k=c.n(g),N=c(78),w=c.n(N),C=c(76),S=c.n(C),T=c(4),y=c(143),B=c(27),F=c(152),L=c(145),I=c(146),D=c(148),A=c(144),H=c(50),z=c(147),R=c(73),E=c.n(R),J=c(75),M=c.n(J),X=c(74),G=c.n(X),W=c(149),Y=c(150),_=c(151),q=c(49),K=240,P=Object(y.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:K,width:"calc(100% - ".concat(K,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:K,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:K,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(f.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+1},e.breakpoints.up("sm"),{width:e.spacing(9)+1}),toolbar:Object(p.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:e.spacing(0,1)},e.mixins.toolbar),content:{flexGrow:1,padding:e.spacing(3)}}}));function Q(){var e,t,c=P(),n=Object(B.a)(),i=a.a.useState(!1),s=Object(o.a)(i,2),r=s[0],j=s[1];return Object(d.jsxs)("div",{className:c.root,children:[Object(d.jsx)(A.a,{}),Object(d.jsx)(L.a,{position:"fixed",className:Object(T.a)(c.appBar,Object(f.a)({},c.appBarShift,r)),children:Object(d.jsxs)(I.a,{children:[Object(d.jsx)(z.a,{color:"inherit","aria-label":"open drawer",onClick:function(){j(!0)},edge:"start",className:Object(T.a)(c.menuButton,Object(f.a)({},c.hide,r)),children:Object(d.jsx)(E.a,{})}),Object(d.jsx)(H.a,{variant:"h6",noWrap:!0,children:"Focus.io"})]})}),Object(d.jsx)(v.a,{children:Object(d.jsxs)(F.a,{variant:"permanent",className:Object(T.a)(c.drawer,(e={},Object(f.a)(e,c.drawerOpen,r),Object(f.a)(e,c.drawerClose,!r),e)),classes:{paper:Object(T.a)((t={},Object(f.a)(t,c.drawerOpen,r),Object(f.a)(t,c.drawerClose,!r),t))},children:[Object(d.jsx)("div",{className:c.toolbar,children:Object(d.jsx)(z.a,{onClick:function(){j(!1)},children:"rtl"===n.direction?Object(d.jsx)(G.a,{}):Object(d.jsx)(M.a,{})})}),Object(d.jsxs)(D.a,{children:[Object(d.jsx)(W.a,{button:!0,children:Object(d.jsx)(Y.a,{children:Object(d.jsxs)(q.Link,{to:"Head",class:"button",smooth:!0,duration:500,children:[Object(d.jsx)(S.a,{}),Object(d.jsx)(_.a,{primary:" Top"})]})})}),Object(d.jsx)(W.a,{button:!0,children:Object(d.jsx)(Y.a,{children:Object(d.jsxs)(q.Link,{to:"Todos",class:"button",smooth:!0,duration:500,children:[Object(d.jsx)(k.a,{}),Object(d.jsx)(_.a,{primary:" Todos"})]})})},"Todos"),Object(d.jsx)(W.a,{button:!0,children:Object(d.jsx)(Y.a,{children:Object(d.jsxs)(q.Link,{to:"Clock",class:"button",smooth:!0,duration:500,children:[Object(d.jsx)(w.a,{}),Object(d.jsx)(_.a,{primary:" Alarm"})]})})})]})]})})]})}function U(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Focus.io"}),Object(d.jsx)(m,{}),Object(d.jsx)(b,{}),Object(d.jsx)(x,{}),Object(d.jsx)(Q,{})]})}s.a.render(Object(d.jsx)(U,{}),document.getElementById("root"))},87:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){}},[[107,1,2]]]);
//# sourceMappingURL=main.84ba997d.chunk.js.map