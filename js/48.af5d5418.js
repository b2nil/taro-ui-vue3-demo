(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"185":function(t,e,i){var n=i(17),c=i(186);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[t.i,c,""]]);var a={"insert":("head","head"),"singleton":!1},r=(n(c,a),c.locals?c.locals:{});t.exports=r},"186":function(t,e,i){(e=i(19)(!1)).push([t.i,".example-item .control-cnt {\n  margin-top: 0.85333rem;\n}\n.example-item .slider-list {\n  margin-top: 1.70667rem;\n}\n.example-item .slider-list__item {\n  margin-bottom: 0.85333rem;\n}\n.example-item .slider-list__item-header {\n  margin-bottom: 0.34133rem;\n  color: #999;\n  font-size: 0.59733rem;\n  text-align: center;\n}\n.example-item .slide-image {\n  width: 100%;\n  height: 7.68rem;\n}",""]),t.exports=e},"274":function(t,e,i){"use strict";i.r(e);var n=i(0),c=Object(n.i)("幻灯片切换时长(ms)"),a=Object(n.i)("自动播放间隔时长(ms)");var r=i(8),l=i(3),s=(i(185),Object(n.k)({"name":"SwiperDemo","setup":function setup(){var t=Object(l.i)({"current":1,"duration":500,"interval":5e3,"isCircular":!1,"isAutoplay":!0,"hasIndicatorDots":!0,"imgUrls":["https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180","https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180","https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180"]});return Object(r.a)(Object(r.a)({},Object(l.p)(t)),{},{"setAutoPlay":function setAutoPlay(e){t.isAutoplay=e.detail.value},"setCircular":function setCircular(e){t.isCircular=e.detail.value},"setIndicatorDots":function setIndicatorDots(e){t.hasIndicatorDots=e.detail.value},"setInterval":function setInterval(e){t.interval=e.detail.value},"setDuration":function setDuration(e){t.duration=e.detail.value}})}}));s.render=function render(t,e,i,r,l,s){var u=Object(n.x)("taro-image"),o=Object(n.x)("taro-swiper-item"),j=Object(n.x)("taro-swiper"),b=Object(n.x)("at-list-item"),d=Object(n.x)("at-list"),O=Object(n.x)("taro-text"),m=Object(n.x)("taro-view"),f=Object(n.x)("taro-slider"),h=Object(n.x)("example-item"),p=Object(n.x)("panel"),_=Object(n.x)("page");return Object(n.u)(),Object(n.e)(_,{"header-title":"Swiper 滑块视图容器"},{"default":Object(n.E)((function(){return[Object(n.j)(p,{"class":"panel__content","title":"基础用法"},{"default":Object(n.E)((function(){return[Object(n.j)(h,null,{"default":Object(n.E)((function(){return[Object(n.j)(j,{"indicatorColor":"#999","indicatorActiveColor":"#333","current":t.current,"duration":t.duration,"interval":t.interval,"circular":t.isCircular,"autoplay":t.isAutoplay,"indicatorDots":t.hasIndicatorDots,"previousMargin":"20"},{"default":Object(n.E)((function(){return[(Object(n.u)(!0),Object(n.e)(n.b,null,Object(n.v)(t.imgUrls,(function(t,e){return Object(n.u)(),Object(n.e)(o,{"key":e},{"default":Object(n.E)((function(){return[Object(n.j)(u,{"src":t,"class":"slide-image"},null,8,["src"])]})),"_":2},1024)})),128))]})),"_":1},8,["current","duration","interval","circular","autoplay","indicatorDots"]),Object(n.j)(m,{"class":"control-cnt"},{"default":Object(n.E)((function(){return[Object(n.j)(d,null,{"default":Object(n.E)((function(){return[Object(n.j)(b,{"isSwitch":"","title":"指示点","switchIsCheck":t.hasIndicatorDots,"onSwitchChange":t.setIndicatorDots},null,8,["switchIsCheck","onSwitchChange"]),Object(n.j)(b,{"isSwitch":"","title":"自动播放","switchIsCheck":t.isAutoplay,"onSwitchChange":t.setAutoPlay},null,8,["switchIsCheck","onSwitchChange"]),Object(n.j)(b,{"isSwitch":"","title":"循环播放","switchIsCheck":t.isCircular,"onSwitchChange":t.setCircular},null,8,["switchIsCheck","onSwitchChange"])]})),"_":1}),Object(n.j)(m,{"class":"slider-list"},{"default":Object(n.E)((function(){return[Object(n.j)(m,{"class":"slider-list__item"},{"default":Object(n.E)((function(){return[Object(n.j)(m,{"class":"slider-list__item-header"},{"default":Object(n.E)((function(){return[Object(n.j)(O,null,{"default":Object(n.E)((function(){return[c]})),"_":1})]})),"_":1}),Object(n.j)(m,{"class":"slider-list__item-body"},{"default":Object(n.E)((function(){return[Object(n.j)(f,{"showValue":"","activeColor":"#6190e8","step":1,"min":500,"max":2e3,"value":t.duration,"onChange":t.setDuration},null,8,["value","onChange"])]})),"_":1})]})),"_":1}),Object(n.j)(m,{"class":"slider-list__item"},{"default":Object(n.E)((function(){return[Object(n.j)(m,{"class":"slider-list__item-header"},{"default":Object(n.E)((function(){return[Object(n.j)(O,null,{"default":Object(n.E)((function(){return[a]})),"_":1})]})),"_":1}),Object(n.j)(m,{"class":"slider-list__item-body"},{"default":Object(n.E)((function(){return[Object(n.j)(f,{"showValue":"","activeColor":"#6190e8","step":1,"min":2e3,"max":1e4,"value":t.interval,"onChange":t.setInterval},null,8,["value","onChange"])]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})};e.default=s}}]);