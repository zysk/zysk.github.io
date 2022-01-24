!function(e,p,u,d){var s=[],t={_version:"3.11.7",_config:{classPrefix:"modernizr-",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){s.push({name:e,fn:t,options:n})},addAsyncTest:function(e){s.push({name:null,fn:e})}};(l=function(){}).prototype=t;var l=new l,c=[];function f(e,t){return typeof e===t}var i,n,m=u.documentElement,h="svg"===m.nodeName.toLowerCase();function a(e){var t,n=m.className,r=l._config.classPrefix||"";h&&(n=n.baseVal),l._config.enableJSClass&&(t=new RegExp("(^|\\s)"+r+"no-js(\\s|$)"),n=n.replace(t,"$1"+r+"js$2")),l._config.enableClasses&&(0<e.length&&(n+=" "+r+e.join(" "+r)),h?m.className.baseVal=n:m.className=n)}function v(e,t){if("object"==typeof e)for(var n in e)i(e,n)&&v(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=l[r[0]];if(void 0!==(o=2===r.length?o[r[1]]:o))return l;t="function"==typeof t?t():t,1===r.length?l[r[0]]=t:(!l[r[0]]||l[r[0]]instanceof Boolean||(l[r[0]]=new Boolean(l[r[0]])),l[r[0]][r[1]]=t),a([(t&&!1!==t?"":"no-")+r.join("-")]),l._trigger(e,t)}return l}i=void 0!==(n={}.hasOwnProperty)&&void 0!==n.call?function(e,t){return n.call(e,t)}:function(e,t){return t in e&&void 0===e.constructor.prototype[t]},t._l={},t.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},t._trigger=function(e,t){var n;this._l[e]&&(n=this._l[e],setTimeout(function(){for(var e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e])},l._q.push(function(){t.addTest=v});var r="Moz O ms Webkit",g=t._config.usePrefixes?r.split(" "):[];t._cssomPrefixes=g;function o(e){var t,n=L.length,r=p.CSSRule;if(void 0===r)return d;if(!e)return!1;if((t=(e=e.replace(/^@/,"")).replace(/-/g,"_").toUpperCase()+"_RULE")in r)return"@"+e;for(var o=0;o<n;o++){var i=L[o];if(i.toUpperCase()+"_"+t in r)return"@-"+i.toLowerCase()+"-"+e}return!1}t.atRule=o;var y=t._config.usePrefixes?r.toLowerCase().split(" "):[];function A(e){return"function"!=typeof u.createElement?u.createElement(e):h?u.createElementNS.call(u,"http://www.w3.org/2000/svg",e):u.createElement.apply(u,arguments)}t._domPrefixes=y;var b,C=(b=!("onblur"in m),function(e,t){var n;return!!e&&(!(n=(e="on"+e)in(t=!t||"string"==typeof t?A(t||"div"):t))&&b&&((t=!t.setAttribute?A("div"):t).setAttribute(e,""),n="function"==typeof t[e],t[e]!==d&&(t[e]=d),t.removeAttribute(e)),n)});t.hasEvent=C,h||function(e,a){var o,s,t=e.html5||{},r=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,n="_html5shiv",l=0,c={};function f(e,t){var n=e.createElement("p"),e=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",e.insertBefore(n.lastChild,e.firstChild)}function p(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function d(e){var t=c[e[n]];return t||(t={},l++,e[n]=l,c[l]=t),t}function u(e,t,n){return t=t||a,s?t.createElement(e):!(t=(n=n||d(t)).cache[e]?n.cache[e].cloneNode():i.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e)).canHaveChildren||r.test(e)||t.tagUrn?t:n.frag.appendChild(t)}function m(e){var t,n,r=d(e=e||a);return!h.shivCSS||o||r.hasCSS||(r.hasCSS=!!f(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),s||(t=e,(n=r).cache||(n.cache={},n.createElem=t.createElement,n.createFrag=t.createDocumentFragment,n.frag=n.createFrag()),t.createElement=function(e){return h.shivMethods?u(e,t,n):n.createElem(e)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+p().join().replace(/[\w\-:]+/g,function(e){return n.createElem(e),n.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,n.frag)),e}!function(){try{var e=a.createElement("a");e.innerHTML="<xyz></xyz>",o="hidden"in e,s=1==e.childNodes.length||function(){a.createElement("a");var e=a.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){s=o=!0}}();var h={elements:t.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==t.shivCSS,supportsUnknownElements:s,shivMethods:!1!==t.shivMethods,type:"default",shivDocument:m,createElement:u,createDocumentFragment:function(e,t){if(e=e||a,s)return e.createDocumentFragment();for(var n=(t=t||d(e)).frag.cloneNode(),r=0,o=p(),i=o.length;r<i;r++)n.createElement(o[r]);return n},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,m(t)}};e.html5=h,m(a);var v=/^$|\b(?:all|print)\b/,g="html5shiv",y=!(s||(t=a.documentElement,void 0===a.namespaces||void 0===a.parentWindow||void 0===t.applyElement||void 0===t.removeNode||void 0===e.attachEvent));function A(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+p().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(function(e){var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(g+":"+e.nodeName);for(;r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}(t)));return i}function b(s){var l,c,e=d(s),t=s.namespaces,n=s.parentWindow;return!y||s.printShived||(void 0===t[g]&&t.add(g),n.attachEvent("onbeforeprint",function(){u();for(var e,t,n,r=s.styleSheets,o=[],i=r.length,a=Array(i);i--;)a[i]=r[i];for(;n=a.pop();)if(!n.disabled&&v.test(n.media)){try{t=(e=n.imports).length}catch(e){t=0}for(i=0;i<t;i++)a.push(e[i]);try{o.push(n.cssText)}catch(e){}}o=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+p().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+g+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(o.reverse().join("")),c=A(s),l=f(s,o)}),n.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(c),clearTimeout(e._removeSheetTimer),e._removeSheetTimer=setTimeout(u,500)}),s.printShived=!0),s;function u(){clearTimeout(e._removeSheetTimer),l&&l.removeNode(!0),l=null}}h.type+=" print",(h.shivPrint=b)(a),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==p?p:this,u);var S=function(){},E=function(){};function w(e,t,n,r){var o,i,a,s="modernizr",l=A("div"),c=((a=u.body)||((a=A(h?"svg":"body")).fake=!0),a);if(parseInt(n,10))for(;n--;)(o=A("div")).id=r?r[n]:s+(n+1),l.appendChild(o);return(a=A("style")).type="text/css",a.id="s"+s,(c.fake?c:l).appendChild(a),c.appendChild(l),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(u.createTextNode(e)),l.id=s,c.fake&&(c.style.background="",c.style.overflow="hidden",i=m.style.overflow,m.style.overflow="hidden",m.appendChild(c)),e=t(l,e),c.fake&&c.parentNode?(c.parentNode.removeChild(c),m.style.overflow=i,m.offsetHeight):l.parentNode.removeChild(l),!!e}function _(e,t,n){var r,o;return"getComputedStyle"in p?(r=getComputedStyle.call(p,e,t),o=p.console,null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")):r=!t&&e.currentStyle&&e.currentStyle[n],r}p.console&&(S=function(){var e=console.error?"error":"log";p.console[e].apply(p.console,Array.prototype.slice.call(arguments))},E=function(){var e=console.warn?"warn":"log";p.console[e].apply(p.console,Array.prototype.slice.call(arguments))}),t.load=function(){"yepnope"in p?(E("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. yepnope appears to be available on the page, so we’ll use it to handle this call to Modernizr.load, but please update your code to use yepnope directly.\n See http://github.com/Modernizr/Modernizr/issues/1182 for more information."),p.yepnope.apply(p,[].slice.call(arguments,0))):S("yepnope.js (aka Modernizr.load) is no longer included as part of Modernizr. Get it from http://yepnopejs.com. See http://github.com/Modernizr/Modernizr/issues/1182 for more information.")};var x,T=(x=p.matchMedia||p.msMatchMedia)?function(e){e=x(e);return e&&e.matches||!1}:function(e){var t=!1;return w("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"===_(e,null,"position")}),t};t.mq=T;var z={elem:A("modernizr")};l._q.push(function(){delete z.elem});var j={style:z.elem.style};function N(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function M(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function P(e,t,n,r){if(r=void 0!==r&&r,void 0!==n){var o=function(e,t){var n=e.length;if("CSS"in p&&"supports"in p.CSS){for(;n--;)if(p.CSS.supports(N(e[n]),t))return!0;return!1}if("CSSSupportsRule"in p){for(var r=[];n--;)r.push("("+N(e[n])+":"+t+")");return w("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"===_(e,null,"position")})}return d}(e,n);if(void 0!==o)return o}for(var i,a,s,l,c,u=["modernizr","tspan","samp"];!j.style&&u.length;)i=!0,j.modElem=A(u.shift()),j.style=j.modElem.style;function f(){i&&(delete j.style,delete j.modElem)}for(s=e.length,a=0;a<s;a++)if(l=e[a],c=j.style[l],~(""+l).indexOf("-")&&(l=M(l)),j.style[l]!==d){if(r||void 0===n)return f(),"pfx"!==t||l;try{j.style[l]=n}catch(e){}if(j.style[l]!==c)return f(),"pfx"!==t||l}return f(),!1}function k(e,t,n){var r,o;for(o in e)if(e[o]in t)return!1===n?e[o]:f(r=t[e[o]],"function")?function(e,t){return function(){return e.apply(t,arguments)}}(r,n||t):r;return!1}function B(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+g.join(i+" ")+i).split(" ");return f(t,"string")||void 0===t?P(a,t,r,o):k(a=(e+" "+y.join(i+" ")+i).split(" "),t,n)}l._q.unshift(function(){delete j.style}),t.testAllProps=B;var D=t.prefixed=function(e,t,n){return 0===e.indexOf("@")?o(e):(-1!==e.indexOf("-")&&(e=M(e)),t?B(e,t,n):B(e,"pfx"))},L=t._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];t._prefixes=L;t.prefixedCSS=function(e){e=D(e);return e&&N(e)};t.testAllProps=function(e,t,n){return B(e,d,d,t,n)};t.testProp=function(e,t,n){return P([e],d,t,n)},t.testStyles=w;r="CSS"in p&&"supports"in p.CSS,C="supportsCSS"in p;l.addTest("supports",r||C),l.addAsyncTest(function(){var e,t,n=A("img"),r="sizes"in n;!r&&"srcset"in n?(e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",n.onload=t=function(){v("sizes",2===n.width)},n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):v("sizes",r)}),l.addTest("srcset","srcset"in A("img")),l.addTest("serviceworker","serviceWorker"in navigator),l.addTest("touchevents",function(){if("ontouchstart"in p||p.TouchEvent||p.DocumentTouch&&u instanceof DocumentTouch)return!0;var e=["(",L.join("touch-enabled),("),"heartz",")"].join("");return T(e)}),function(){var e,t,n,r,o,i,a;for(a in s)if(s.hasOwnProperty(a)){if(e=[],(t=s[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=f(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?l[i[0]]=r:(l[i[0]]&&(!l[i[0]]||l[i[0]]instanceof Boolean)||(l[i[0]]=new Boolean(l[i[0]])),l[i[0]][i[1]]=r),c.push((r?"":"no-")+i.join("-"))}}(),a(c),delete t.addTest,delete t.addAsyncTest;for(var F=0;F<l._q.length;F++)l._q[F]();e.Modernizr=l}(window,window,document);