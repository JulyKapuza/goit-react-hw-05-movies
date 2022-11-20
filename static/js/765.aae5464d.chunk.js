"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{765:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,i,c,s=t(885),u=t(791),o=t(689),p=t(565),l=t(731),d=t(168),f=t(444),h=f.ZP.div(r||(r=(0,d.Z)(["\n  margin: 0 auto;\n  padding-left: 20px;\n  padding-right: 20px;\n"]))),x=f.ZP.div(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  box-shadow: rgba(105, 105, 105, 0.4) 0px 5px,\n    rgba(192, 192, 192, 0.3) 0px 10px;\n"]))),v=f.ZP.img(i||(i=(0,d.Z)(["\n  margin-right: 20px;\n  margin-bottom: 20px;\n"]))),g=t(128),m=t(184),j=(0,f.ZP)(l.rU)(c||(c=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: #ff1493;\n  }\n"]))),w=function(n){var e=n.to,t=n.children;return(0,m.jsxs)(j,{to:e,children:[(0,m.jsx)(g.jTe,{size:"24"}),t]})},Z=t(208),y=function(){var n,e,t=(0,o.UO)().movieId,r=(0,u.useState)(null),a=(0,s.Z)(r,2),i=a[0],c=a[1],d=(0,o.TH)();if((0,u.useEffect)((function(){(0,p.BG)(t).then(c)}),[t]),!i)return null;var f=i.original_title,g=i.poster_path,j=i.vote_average,y=i.overview,b=i.genres,k=null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";return(0,m.jsxs)(h,{children:[(0,m.jsx)(w,{to:k,children:"Go back "}),(0,m.jsxs)(x,{children:[(0,m.jsx)(v,{src:"https://image.tmdb.org/t/p/w300/".concat(g),alt:f}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h1",{children:f}),(0,m.jsxs)("p",{children:["User score ",Math.round(10*j),"%"]}),(0,m.jsx)("h2",{children:"Overview"}),(0,m.jsx)("p",{children:y}),(0,m.jsx)("h2",{children:"Genres"}),(0,m.jsx)("ul",{children:b.map((function(n){var e=n.id,t=n.name;return(0,m.jsx)("li",{children:t},e)}))})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("ul",{children:"Additional information"}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"cast",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(l.rU,{to:"reviews",children:"Reviews"})}),(0,m.jsx)(u.Suspense,{fallback:(0,m.jsx)(Z.Z,{}),children:(0,m.jsx)(o.j3,{})})]})]})}},565:function(n,e,t){t.d(e,{BG:function(){return d},Bt:function(){return v},E9:function(){return u},t9:function(){return p},y:function(){return h}});var r=t(861),a=t(757),i=t.n(a),c=t(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="bc4500f3e002eaa279df91f9e5a7b7d1";function u(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("/trending/movie/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/search/movie?api_key=".concat(s,"&query=").concat(e,"&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=765.aae5464d.chunk.js.map