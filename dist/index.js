"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=u(function(l,i){
var c=require('@stdlib/blas-ext-base-gsorthp/dist').ndarray;function d(e,r,a,t,v){return c(e,r,a,t,v)}i.exports=d
});var o=u(function(m,n){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=s();function p(e,r,a,t){return f(e,r,a,t,y(e,t))}n.exports=p
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),x=s();g(q,"ndarray",x);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
