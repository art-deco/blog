function q(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:q(a)}}function t(a){if(!(a instanceof Array)){a=r(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var u="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},v;
if("function"==typeof Object.setPrototypeOf)v=Object.setPrototypeOf;else{var w;a:{var aa={v:!0},x={};try{x.__proto__=aa;w=x.v;break a}catch(a){}w=!1}v=w?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var y=v;function ba(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var z=ba(this),ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function A(a,b){if(b){var c=z;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={});c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}A("globalThis",function(a){return a||z});
var da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};A("Object.assign",function(a){return a||da});A("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
function B(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}A("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=B(this,b,"endsWith");void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
A("String.prototype.repeat",function(a){return a?a:function(b){var c=B(this,null,"repeat");if(0>b||1342177279<b)throw new RangeError("Invalid count value");b|=0;for(var d="";b;)if(b&1&&(d+=c),b>>>=1)c+=c;return d}});function C(){var a=t(document.querySelectorAll("div[data-section]")).concat();if(a.length){var b=new IntersectionObserver(function(c){c.forEach(function(d){var e=d.target.id;d.isIntersecting?document.querySelector('[data-heading="'+e+'"]').classList.add("Active"):document.querySelector('[data-heading="'+e+'"]').classList.remove("Active")})},{});a.forEach(function(c){b.observe(c)})}};function D(){var a=document.getElementById("HideMenu"),b=document.getElementById("ShowMenu");a&&(a.onclick=function(c){c.target.parentElement.classList.remove("sidebarshowing");return!1});b&&(b.onclick=function(c){c.target.parentElement.classList.add("sidebarshowing");return!1})};var E={SideBarContent:"a"};var F={};function G(a){function b(c){return c.raw[0].split(/\s+/).map(function(d){var e=a[d];return e?e:(console.error("Key %s is not present in the CSS map.",d),d)}).join(" ")}if(!a)return function(c){return c};Object.keys(a).forEach(function(c){b["$"+c]=a[c]});return b};try{window.preact=preact}catch(a){window.preact={}}var H=window.preact,I=H.h,J=H.Component,ea=H.render;function K(a,b){var c=document.getElementById(a);if(!c)return console.warn("Parent element for component %s with id %s not found",b,a),{};var d=c.parentElement;return d?{parent:d,b:c}:(console.warn("Parent of element for component %s with id %s not found",b,a),{})}
function L(){var a=void 0===a?{}:a;var b=Object.assign({},a),c=void 0===a.rootMargin?"76px":a.rootMargin,d=void 0===a.log?!0:a.log;a=(delete b.rootMargin,delete b.log,b);var e=new IntersectionObserver(function(f){f.forEach(function(n){var g=n.target,l=g.render.c,k=l.key,h=l.id,m=l.plain;if(n.isIntersecting){d&&console.warn("\ud83c\udfd7 Rendering%s component %s into the element %s",m?"":" Preact",k,h,g);try{var p=g.render();p&&!p.unrender&&e.unobserve(g)}catch(fa){d&&console.warn(fa)}}else l.instance&&
(d&&console.warn("\ud83d\udca8 Unrendering%s component %s from the element %s",m?"":" Preact",k,h,g),l.instance.unrender())})},Object.assign({},{rootMargin:c},a));return e}function M(a,b,c,d){this.g=d;this.j=c;this.b=a;this.parent=b;this.unrender=this.a=null}
M.prototype.render=function(a){var b=Object.assign({},a);a=a.children;b=(delete b.children,b);if(this.a)this.a.componentDidMount&&this.a.componentDidMount(),this.a.forceUpdate();else{this.g.render(this.g.h(this.j,b,a),this.parent,this.b);var c=this.b._component;c.componentWillUnmount&&(this.unrender=function(){c.componentWillUnmount()});this.a=c}};
function N(a,b,c,d,e,f,n){function g(){c.render(Object.assign({},f,{children:n}));a.instance=c}var l={render:ea,Component:J,h:I},k=a.plain;!c&&k?c=new b(d,e):c||(c=new M(d,e,b,l));b.load?b.load(function(h,m){m&&Object.assign(f,m);h?console.warn(h):g()},d,f):g();return c};function O(a){this.b=a}O.prototype.render=function(a){var b=this,c=new XMLHttpRequest;c.open("GET","https://api.github.com/repos/"+a.s+"/"+a.name);c.onload=function(){var d=JSON.parse(c.responseText);if(200!=c.status)console.log("GitHub responded with status %s: %s (%s)",c.status,d.message,d.D);else{var e=d.stargazers_count;b.b.title=d.description;d=b.b.querySelector("[data-stargazers]");d.textContent=d.textContent.replace(/\d+/,e)}};c.send()};
z.Object.defineProperties(O,{plain:{configurable:!0,enumerable:!0,get:function(){return!0}}});function ha(a,b,c,d){var e=void 0===e?{}:e;var f=window.top,n=f.outerHeight,g=f.screenY,l=f.outerWidth,k=f.screenX;f=[];c&&f.push("width="+c,"left="+(l/2+k-c/2));d&&f.push("top="+(n/2+g-d/2-50),"height="+d);c=Object.keys(e).map(function(h){return h+"="+e[h]});f.push.apply(f,t(c));window.open(a,b,f.join(","))};function P(a){var b=Object.assign({},a),c=void 0===a.size?32:a.size,d=a.url,e=a.o,f=a.title,n=a.borderRadius,g=a.c,l=a.i.f;a=(delete b.size,delete b.url,delete b.o,delete b.title,delete b.borderRadius,delete b.c,delete b.i,b);delete a.i;if(g){g=document.querySelector('meta[name="description"]');if(!g)return I("span",Object.assign({},a),"Error Loading Social Buttons (no meta description)");f=g.content;e||(e=g.content)}return I("span",Object.assign({},a),Object.entries(ia).reduce(function(k,h){var m=
r(h);h=m.next().value;var p=m.next().value;m=Object.assign({},p);p=p.color;m=(delete m.color,m);k.push(I(ja,Object.assign({},m,{size:c,B:h,color:"rgb("+p+")",f:l,title:f,url:d,o:e,borderRadius:n,A:"email"==h}))," ");return k},[]))}
function ja(a){var b=a.size,c=a.href,d=a.B,e=a.color,f=a.alt,n=void 0===a.width?900:a.width,g=void 0===a.height?650:a.height,l=void 0===a.borderRadius?"4px":a.borderRadius,k=a.A,h=void 0===a.f?"/":a.f,m=c(a.url,a.title,a.o);a=I("img",{src:h+"buttons/"+d+".svg",width:b,height:b,alt:f,style:"background:"+e+"; border-radius:"+l});return k?I("a",{href:m},a):I("a",{onClick:function(p){ha(m,f,n,g);p.preventDefault();return!1},href:"#"},a)}
function Q(a){return Object.entries(a).map(function(b){var c=r(b);b=c.next().value;if(c=c.next().value)return b+"="+c}).filter(Boolean).join("&")}
var ia={facebook:{href:function(a,b){return"https://www.facebook.com/sharer/sharer.php?"+Q({u:a,quote:b})},color:[59,89,152],alt:"Share on Facebook"},twitter:{href:function(a,b){return"https://twitter.com/intent/tweet?"+Q({text:b,url:a})},color:[85,172,238],alt:"Share on Twitter",width:550,height:420},linkedin:{href:function(a,b){return"https://www.linkedin.com/shareArticle?"+Q({url:a,mini:!0,title:b})},color:[0,123,181],alt:"Share on LinkedIn"},whatsapp:{href:function(a,b){return"https://api.whatsapp.com/send?"+
Q({text:[b,a].filter(Boolean).join(" ")})},color:[18,175,10],alt:"Share on Whatsapp"},email:{href:function(a,b,c){return"mailto:?"+Q({subject:c,body:[b,a].filter(Boolean).join(" ")})},color:[1,102,255],alt:"Share on Email"}};

//# sourceMappingURL=common.js.map