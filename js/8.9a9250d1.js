(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"207":function(e,t,n){var c=n(17),u=n(208);"string"==typeof(u=u.__esModule?u.default:u)&&(u=[[e.i,u,""]]);var r={"insert":("head","head"),"singleton":!1},l=(c(u,r),u.locals?u.locals:{});e.exports=l},"208":function(e,t,n){(t=n(19)(!1)).push([e.i,".toast-page .example__body-button {\n  display: inline-block;\n}",""]),e.exports=t},"285":function(e,t,n){"use strict";n.r(t);var c=n(0),u=Object(c.i)("普通消息"),r=Object(c.i)("成功消息"),l=Object(c.i)("错误消息"),i=Object(c.i)("警告消息"),a=Object(c.i)("提示消息");var j=n(5),o=(n(207),Object(c.k)({"name":"MessageDemo","setup":function setup(){return{"handleClick":function handleClick(e){j.default.atMessage({"message":"消息通知","type":e})}}}}));o.render=function render(e,t,n,j,o,b){var f=Object(c.x)("at-button"),O=Object(c.x)("example-item"),s=Object(c.x)("panel"),d=Object(c.x)("at-message"),p=Object(c.x)("page");return Object(c.u)(),Object(c.e)(p,{"class":"toast-page","header-title":"Message 消息通知"},{"extra":Object(c.E)((function(){return[Object(c.j)(d)]})),"default":Object(c.E)((function(){return[Object(c.j)(s,{"title":"基本案例"},{"default":Object(c.E)((function(){return[Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"onClick":t[1]||(t[1]=function(t){return e.handleClick("")})},{"default":Object(c.E)((function(){return[u]})),"_":1})]})),"_":1}),Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"onClick":t[2]||(t[2]=function(t){return e.handleClick("success")})},{"default":Object(c.E)((function(){return[r]})),"_":1})]})),"_":1}),Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"onClick":t[3]||(t[3]=function(t){return e.handleClick("error")})},{"default":Object(c.E)((function(){return[l]})),"_":1})]})),"_":1}),Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"onClick":t[4]||(t[4]=function(t){return e.handleClick("warning")})},{"default":Object(c.E)((function(){return[i]})),"_":1})]})),"_":1}),Object(c.j)(O,null,{"default":Object(c.E)((function(){return[Object(c.j)(f,{"onClick":t[5]||(t[5]=function(t){return e.handleClick("info")})},{"default":Object(c.E)((function(){return[a]})),"_":1})]})),"_":1})]})),"_":1})]})),"_":1})};t.default=o}}]);