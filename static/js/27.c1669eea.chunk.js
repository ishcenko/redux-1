"use strict";(self.webpackChunkredux_1=self.webpackChunkredux_1||[]).push([[27],{27:function(e,t,r){r.r(t);var n=r(861),s=r(687),a=r.n(s),c=r(791),i=r(154),o=r(420),u=r(689),l=r(87),p=r(94),d=r(498),f=r(390),h=r(184),v=(0,c.lazy)((function(){return r.e(1).then(r.bind(r,1))})),x={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"};t.default=function(){var e,t,r=(0,o.v9)((function(e){return e.postDetails.postDetails})),s=(0,o.v9)((function(e){return e.postDetails.isLoading})),m=(0,o.v9)((function(e){return e.postDetails.error})),w=(0,o.I0)(),j=(0,u.UO)().postId,b=(0,u.TH)(),g=(0,c.useRef)(null!==(e=null===(t=b.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,c.useEffect)((function(){if(j){var e=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w((0,d.wt)(!0)),e.next=4,(0,f.DD)(j);case 4:t=e.sent,w((0,d.xI)(t)),p.Am.success("Post details were successfully fetched!",x),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),w((0,d.sT)(e.t0.message)),p.Am.error(e.t0.message,x);case 13:return e.prev=13,w((0,d.wt)(!1)),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}}),[j,w]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Post Details"}),(0,h.jsx)(l.rU,{to:g.current,children:"Go back"}),null!==m&&(0,h.jsx)("p",{className:"c-error",children:" Oops, error."}),s&&(0,h.jsx)(i.Z1,{visible:!0,height:"100",width:"100",color:"#04e4f9",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""}),null!==r&&(0,h.jsxs)("div",{className:"post-details",children:[(0,h.jsxs)("h2",{className:"post_details-title",children:["Title: ",r.title," "]}),(0,h.jsxs)("p",{className:"post_details-id",children:["ID: ",r.id," "]}),(0,h.jsxs)("p",{className:"post_details-body",children:[" ",r.body," "]}),(0,h.jsx)("div",{children:(0,h.jsx)(l.OL,{to:"comments",children:"Comments"})})]}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)(i.Z1,{visible:!0,height:"100",width:"100",color:"#04e4f9",ariaLabel:"three-circles-loading",wrapperStyle:{},wrapperClass:""}),children:(0,h.jsx)(u.Z5,{children:(0,h.jsx)(u.AW,{path:"comments",element:(0,h.jsx)(v,{})})})})]})}},390:function(e,t,r){r.d(t,{DD:function(){return u},T6:function(){return o},tH:function(){return l}});var n=r(861),s=r(687),a=r.n(s),c=r(809),i="https://jsonplaceholder.typicode.com",o=function(){var e=(0,n.Z)(a().mark((function e(){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/posts"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/posts/").concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(t){var r,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/posts/").concat(t,"/comments"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=27.c1669eea.chunk.js.map