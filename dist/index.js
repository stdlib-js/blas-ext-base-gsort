"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var s=u(function(l,i){
var c=require('@stdlib/blas-ext-base-gsorthp/dist').ndarray;function d(e,r,t,a,v){return c(e,r,t,a,v)}i.exports=d
});var o=u(function(m,n){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=s();function p(e,r,t,a){return f(e,r,t,a,y(e,a))}n.exports=p
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=o(),x=s();g(q,"ndarray",x);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
