/*! For license information please see 53.c4c88f48.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"128":function(t,i,e){"use strict";e.r(i),e.d(i,"taro_image_core",(function(){return a}));var o=e(31),r=e(152);e.e(64).then(e.t.bind(null,257,7));var a=function(){function Image(t){Object(o.g)(this,t),this.mode="scaleToFill",this.lazyLoad=!1,this.aspectFillMode="width",this.onLoad=Object(o.d)(this,"load",7),this.onError=Object(o.d)(this,"error",7)}return Image.prototype.componentDidLoad=function(){var t=this;if(this.lazyLoad){var i=new IntersectionObserver((function(e){e[e.length-1].isIntersecting&&(i.unobserve(t.imgRef),t.imgRef.src=t.src)}),{"rootMargin":"300px 0px"});i.observe(this.imgRef)}},Image.prototype.imageOnLoad=function(){var t=this.imgRef,i=t.width,e=t.height,o=t.naturalWidth,r=t.naturalHeight;this.onLoad.emit({"width":i,"height":e}),this.aspectFillMode=o>r?"width":"height"},Image.prototype.imageOnError=function(){this.onError.emit()},Image.prototype.render=function(){var t,i=this,e=this,a=e.src,s=e.mode,n=e.lazyLoad,m=e.aspectFillMode,h=e.imageOnLoad,g=e.imageOnError,l=Object(r.a)({"taro-img__widthfix":"widthFix"===s}),c=Object(r.a)("taro-img__mode-"+s.toLowerCase().replace(/\s/g,""),((t={})["taro-img__mode-aspectfill--"+m]="aspectFill"===s,t));return Object(o.f)(o.a,{"class":l},n?Object(o.f)("img",{"ref":function ref(t){return i.imgRef=t},"class":c,"onLoad":h.bind(this),"onError":g.bind(this)}):Object(o.f)("img",{"ref":function ref(t){return i.imgRef=t},"class":c,"src":a,"onLoad":h.bind(this),"onError":g.bind(this)}))},Object.defineProperty(Image,"style",{"get":function get(){return'img[src=""]{opacity:0}taro-image-core{display:inline-block;overflow:hidden;position:relative;font-size:0;width:320px;height:240px}.taro-img.taro-img__widthfix{height:100%}.taro-img__mode-scaletofill{width:100%;height:100%}.taro-img__mode-aspectfit{max-width:100%;max-height:100%}.taro-img__mode-aspectfill{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.taro-img__mode-aspectfill--width{min-width:100%;height:100%}.taro-img__mode-aspectfill--height{width:100%;min-height:100%}.taro-img__mode-top,.taro-img__mode-widthfix{width:100%}.taro-img__mode-bottom{width:100%;position:absolute;bottom:0}.taro-img__mode-left{height:100%}.taro-img__mode-right{height:100%}.taro-img__mode-right,.taro-img__mode-topright{position:absolute;right:0}.taro-img__mode-bottomleft{position:absolute;bottom:0}.taro-img__mode-bottomright{position:absolute;right:0;bottom:0}'},"enumerable":!0,"configurable":!0}),Image}()},"152":function(t,i,e){"use strict";e.d(i,"a",(function(){return r}));var o=e(6);var r=function createCommonjsModule(t,i){return t(i={"exports":{}},i.exports),i.exports}((function(t){!function(){var i={}.hasOwnProperty;function classNames(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=Object(o.a)(r);if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)&&r.length){var s=classNames.apply(null,r);s&&t.push(s)}else if("object"===a)for(var n in r)i.call(r,n)&&r[n]&&t.push(n)}}return t.join(" ")}t.exports?(classNames.default=classNames,t.exports=classNames):window.classNames=classNames}()}))}}]);