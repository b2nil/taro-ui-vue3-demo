(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"177":function(t,e,c){var n=c(17),a=c(178);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var l={"insert":("head","head"),"singleton":!1},i=(n(a,l),a.locals?a.locals:{});t.exports=i},"178":function(t,e,c){(e=c(19)(!1)).push([t.i,"",""]),t.exports=e},"270":function(t,e,c){"use strict";c.r(e);var n=c(0),a=c(1),l=Object(n.i)("标签"),i=Object(n.i)("标签"),u=Object(n.i)("标签"),j=Object(n.i)("标签"),r=Object(n.i)("标签"),o=Object(n.i)("标签"),b=Object(n.i)("标签"),O=Object(n.i)("标签");var f=c(8),d=c(5),s=c(3),m=(c(177),Object(n.k)({"name":"TagDemo","setup":function setup(){var t=Object(s.i)({"tagList":[{"name":"tag-1","active":!1},{"name":"tag-2","active":!1},{"name":"tag-3","active":!0},{"name":"tag-4","active":!0}],"hollowTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"hollowTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}],"solidTagList2":[{"name":"标签1","active":!1},{"name":"标签2","active":!1},{"name":"标签3","active":!0},{"name":"标签4","active":!0}]});return Object(f.a)(Object(f.a)({},Object(s.p)(t)),{},{"onClick":function onClick(e){var c=t.tagList,n=c.findIndex((function(t){return t.name===e.name})),a=!c[n].active,l="您点击的 tag 标签名是：".concat(e.name,"，点击前是否选中：").concat(e.active,"，点击后：").concat(a);c[n].active=a,t.tagList=c,d.default.getEnv()===d.default.ENV_TYPE.WEB?alert(l):Object(d.showModal)({"content":l,"showCancel":!1})},"handleHollowClick":function handleHollowClick(e){var c=t.hollowTagList,n=c.findIndex((function(t){return t.name===e.name}));c[n].active=!c[n].active,t.hollowTagList=c},"handleSolidClick":function handleSolidClick(e){var c=t.solidTagList,n=c.findIndex((function(t){return t.name===e.name}));c[n].active=!c[n].active,t.solidTagList=c},"handleHollowSmallClick":function handleHollowSmallClick(e){var c=t.hollowTagList2,n=c.findIndex((function(t){return t.name===e.name}));c[n].active=!c[n].active,t.hollowTagList2=c},"handleSolidSmallClick":function handleSolidSmallClick(e){var c=t.solidTagList2,n=c.findIndex((function(t){return t.name===e.name}));c[n].active=!c[n].active,t.solidTagList2=c}})}}));m.render=function render(t,e,c,f,d,s){var m=Object(n.x)("taro-text"),v=Object(n.x)("at-tag"),_=Object(n.x)("taro-view"),E=Object(n.x)("example-item"),g=Object(n.x)("panel"),p=Object(n.x)("page");return Object(n.u)(),Object(n.e)(p,{"header-title":"Tag 标签"},{"default":Object(n.E)((function(){return[Object(n.j)(g,{"title":"空心标签"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.hollowTagList,(function(e,c){return Object(n.u)(),Object(n.e)(_,{"key":"at-tag-".concat(c),"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"name":e.name,"active":e.active,"circle":c%2==0,"onClick":t.handleHollowClick},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[l]})),"_":1})]})),"_":2},1032,["name","active","circle","onClick"])]})),"_":2},1024)})),128))]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"实心标签","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.solidTagList,(function(e,c){return Object(n.u)(),Object(n.e)(_,{"key":"at-tag-".concat(c),"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"type":"primary","name":e.name,"active":e.active,"circle":c%2==0,"onClick":t.handleSolidClick},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[i]})),"_":1})]})),"_":2},1032,["name","active","circle","onClick"])]})),"_":2},1024)})),128))]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"点击事件","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.tagList,(function(e,c){return Object(n.u)(),Object(n.e)(_,{"key":"at-tag-".concat(c),"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"type":"primary","name":e.name,"active":e.active,"circle":c%2==0,"onClick":t.onClick},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[Object(n.i)(Object(a.I)("tag-".concat(c+1)),1)]})),"_":2},1024)]})),"_":2},1032,["name","active","circle","onClick"])]})),"_":2},1024)})),128))]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"不可点击态","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[Object(n.j)(_,{"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"circle":"","disabled":"","type":"primary"},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[u]})),"_":1})]})),"_":1})]})),"_":1}),Object(n.j)(_,{"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"disabled":"","type":"primary"},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[j]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"空心标签（小）","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.hollowTagList2,(function(e,c){return Object(n.u)(),Object(n.e)(_,{"key":"at-tag-".concat(c),"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"size":"small","name":e.name,"active":e.active,"circle":c%2==0,"onClick":t.handleHollowSmallClick},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[r]})),"_":1})]})),"_":2},1032,["name","active","circle","onClick"])]})),"_":2},1024)})),128))]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"实心标签（小）","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.solidTagList2,(function(e,c){return Object(n.u)(),Object(n.e)(_,{"key":"at-tag-".concat(c),"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"size":"small","type":"primary","name":e.name,"active":e.active,"circle":c%2==0,"onClick":t.handleSolidSmallClick},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[o]})),"_":1})]})),"_":2},1032,["name","active","circle","onClick"])]})),"_":2},1024)})),128))]})),"_":1})]})),"_":1}),Object(n.j)(g,{"title":"不可点击态（小）","class":"panel__content"},{"default":Object(n.E)((function(){return[Object(n.j)(E,null,{"default":Object(n.E)((function(){return[Object(n.j)(_,{"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"circle":"","disabled":"","size":"small","type":"primary"},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[b]})),"_":1})]})),"_":1})]})),"_":1}),Object(n.j)(_,{"class":"subitem"},{"default":Object(n.E)((function(){return[Object(n.j)(v,{"disabled":"","size":"small","type":"primary"},{"default":Object(n.E)((function(){return[Object(n.j)(m,null,{"default":Object(n.E)((function(){return[O]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})};e.default=m}}]);