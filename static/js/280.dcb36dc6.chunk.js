"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[280],{280:function(e,r,t){t.r(r),t.d(r,{default:function(){return o}});var i=t(439),s=t(87),n=t(689),l=t(791),a=t(397),c=t(184),d=function(e){var r,t,i=e.movieDetails;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{src:i.poster_path?(0,a.gJ)(i.poster_path):"https://via.placeholder.com/300x400",alt:""})}),(0,c.jsxs)("h1",{children:[i.title," ",(t=i.release_date,""!==t?"(".concat(new Date(t).getFullYear(),")"):"")]}),(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{children:["Vote: ",i.vote_average]}),(0,c.jsx)("h3",{children:"Overview: "}),(0,c.jsx)("p",{children:i.overview}),(0,c.jsx)("h3",{children:"Genre: "}),(0,c.jsx)("p",{children:(r=i.genres,r.map((function(e){return e.name})).join(" "))})]})]})},o=function(){var e,r,t=(0,l.useState)(null),o=(0,i.Z)(t,2),h=o[0],v=o[1],j=(0,n.UO)().movieId,u=(0,n.TH)(),x=(0,l.useRef)(null!==(e=null===(r=u.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/");return(0,l.useEffect)((function(){(0,a.TP)(j).then((function(e){var r=e.genres,t=e.id,i=e.overview,s=e.poster_path,n=e.release_date,l=e.title,a=e.vote_average;v({genres:r,id:t,overview:i,poster_path:s,release_date:n,title:l,vote_average:a})}))}),[j]),(0,c.jsx)("section",{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(s.rU,{to:x.current,state:{from:u},children:"Go back"}),h&&h.id&&(0,c.jsx)(d,{movieDetails:h}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{children:"Additional Information"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"cast",children:"Cast"})}),(0,c.jsx)("li",{children:(0,c.jsx)(s.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,c.jsx)(l.Suspense,{fallback:(0,c.jsx)("div",{children:"Loading page..."}),children:(0,c.jsx)(n.j3,{})})]})})}}}]);
//# sourceMappingURL=280.dcb36dc6.chunk.js.map