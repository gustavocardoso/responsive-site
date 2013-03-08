/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */(function(e){String.prototype.trim===e&&(String.prototype.trim=function(){return this.replace(/^\s+/,"").replace(/\s+$/,"")}),Array.prototype.reduce===e&&(Array.prototype.reduce=function(t){if(this===void 0||this===null)throw new TypeError;var n=Object(this),r=n.length>>>0,i=0,s;if(typeof t!="function")throw new TypeError;if(r==0&&arguments.length==1)throw new TypeError;if(arguments.length>=2)s=arguments[1];else do{if(i in n){s=n[i++];break}if(++i>=r)throw new TypeError}while(!0);while(i<r)i in n&&(s=t.call(e,s,n[i],i,n)),i++;return s})})();var Zepto=function(){function e(e){return B.call(e)=="[object Function]"}function t(e){return e instanceof Object}function n(t){var n,r;if(B.call(t)!=="[object Object]")return!1;r=e(t.constructor)&&t.constructor.prototype;if(!r||!hasOwnProperty.call(r,"isPrototypeOf"))return!1;for(n in t);return n===v||hasOwnProperty.call(t,n)}function r(e){return e instanceof Array}function i(e){return typeof e.length=="number"}function s(e){return e.filter(function(e){return e!==v&&e!==null})}function o(e){return e.length>0?[].concat.apply([],e):e}function u(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function a(e){return e in x?x[e]:x[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function f(e,t){return typeof t=="number"&&!N[u(e)]?t+"px":t}function l(e){var t,n;return S[e]||(t=E.createElement(e),E.body.appendChild(t),n=T(t,"").getPropertyValue("display"),t.parentNode.removeChild(t),n=="none"&&(n="block"),S[e]=n),S[e]}function c(e,t){return t===v?g(e):g(e).filter(t)}function h(t,n,r,i){return e(n)?n.call(t,r,i):n}function p(e,t,n){var r=e%2?t:t.parentNode;r?r.insertBefore(n,e?e==1?r.firstChild:e==2?t:null:t.nextSibling):g(n).remove()}function d(e,t){t(e);for(var n in e.childNodes)d(e.childNodes[n],t)}var v,m,g,y,b=[],w=b.slice,E=window.document,S={},x={},T=E.defaultView.getComputedStyle,N={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},C=/^\s*<(\w+|!)[^>]*>/,k=[1,3,8,9,11],L=["after","prepend","before","append"],A=E.createElement("table"),O=E.createElement("tr"),M={tr:E.createElement("tbody"),tbody:A,thead:A,tfoot:A,td:O,th:O,"*":E.createElement("div")},_=/complete|loaded|interactive/,D=/^\.([\w-]+)$/,P=/^#([\w-]+)$/,H=/^[\w-]+$/,B={}.toString,j={},F,I,q=E.createElement("div");return j.matches=function(e,t){if(!e||e.nodeType!==1)return!1;var n=e.webkitMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.matchesSelector;if(n)return n.call(e,t);var r,i=e.parentNode,s=!i;return s&&(i=q).appendChild(e),r=~j.qsa(i,t).indexOf(e),s&&q.removeChild(e),r},F=function(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})},I=function(e){return e.filter(function(t,n){return e.indexOf(t)==n})},j.fragment=function(e,t){t===v&&(t=C.test(e)&&RegExp.$1),t in M||(t="*");var n=M[t];return n.innerHTML=""+e,g.each(w.call(n.childNodes),function(){n.removeChild(this)})},j.Z=function(e,t){return e=e||[],e.__proto__=arguments.callee.prototype,e.selector=t||"",e},j.isZ=function(e){return e instanceof j.Z},j.init=function(t,i){if(!t)return j.Z();if(e(t))return g(E).ready(t);if(j.isZ(t))return t;var o;if(r(t))o=s(t);else if(n(t))o=[g.extend({},t)],t=null;else if(k.indexOf(t.nodeType)>=0||t===window)o=[t],t=null;else if(C.test(t))o=j.fragment(t.trim(),RegExp.$1),t=null;else{if(i!==v)return g(i).find(t);o=j.qsa(E,t)}return j.Z(o,t)},g=function(e,t){return j.init(e,t)},g.extend=function(e){return w.call(arguments,1).forEach(function(t){for(m in t)t[m]!==v&&(e[m]=t[m])}),e},j.qsa=function(e,t){var n;return e===E&&P.test(t)?(n=e.getElementById(RegExp.$1))?[n]:b:e.nodeType!==1&&e.nodeType!==9?b:w.call(D.test(t)?e.getElementsByClassName(RegExp.$1):H.test(t)?e.getElementsByTagName(t):e.querySelectorAll(t))},g.isFunction=e,g.isObject=t,g.isArray=r,g.isPlainObject=n,g.inArray=function(e,t,n){return b.indexOf.call(t,e,n)},g.trim=function(e){return e.trim()},g.uuid=0,g.map=function(e,t){var n,r=[],s,u;if(i(e))for(s=0;s<e.length;s++)n=t(e[s],s),n!=null&&r.push(n);else for(u in e)n=t(e[u],u),n!=null&&r.push(n);return o(r)},g.each=function(e,t){var n,r;if(i(e)){for(n=0;n<e.length;n++)if(t.call(e[n],n,e[n])===!1)return e}else for(r in e)if(t.call(e[r],r,e[r])===!1)return e;return e},g.fn={forEach:b.forEach,reduce:b.reduce,push:b.push,indexOf:b.indexOf,concat:b.concat,map:function(e){return g.map(this,function(t,n){return e.call(t,n,t)})},slice:function(){return g(w.apply(this,arguments))},ready:function(e){return _.test(E.readyState)?e(g):E.addEventListener("DOMContentLoaded",function(){e(g)},!1),this},get:function(e){return e===v?w.call(this):this[e]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(e){return this.forEach(function(t,n){e.call(t,n,t)}),this},filter:function(e){return g([].filter.call(this,function(t){return j.matches(t,e)}))},add:function(e,t){return g(I(this.concat(g(e,t))))},is:function(e){return this.length>0&&j.matches(this[0],e)},not:function(t){var n=[];if(e(t)&&t.call!==v)this.each(function(e){t.call(this,e)||n.push(this)});else{var r=typeof t=="string"?this.filter(t):i(t)&&e(t.item)?w.call(t):g(t);this.forEach(function(e){r.indexOf(e)<0&&n.push(e)})}return g(n)},eq:function(e){return e===-1?this.slice(e):this.slice(e,+e+1)},first:function(){var e=this[0];return e&&!t(e)?e:g(e)},last:function(){var e=this[this.length-1];return e&&!t(e)?e:g(e)},find:function(e){var t;return this.length==1?t=j.qsa(this[0],e):t=this.map(function(){return j.qsa(this,e)}),g(t)},closest:function(e,t){var n=this[0];while(n&&!j.matches(n,e))n=n!==t&&n!==E&&n.parentNode;return g(n)},parents:function(e){var t=[],n=this;while(n.length>0)n=g.map(n,function(e){if((e=e.parentNode)&&e!==E&&t.indexOf(e)<0)return t.push(e),e});return c(t,e)},parent:function(e){return c(I(this.pluck("parentNode")),e)},children:function(e){return c(this.map(function(){return w.call(this.children)}),e)},siblings:function(e){return c(this.map(function(e,t){return w.call(t.parentNode.children).filter(function(e){return e!==t})}),e)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return this.map(function(){return this[e]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=null),T(this,"").getPropertyValue("display")=="none"&&(this.style.display=l(this.nodeName))})},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return this.each(function(){g(this).wrapAll(g(e)[0].cloneNode(!1))})},wrapAll:function(e){return this[0]&&(g(this[0]).before(e=g(e)),e.append(this)),this},unwrap:function(){return this.parent().each(function(){g(this).replaceWith(g(this).children())}),this},clone:function(){return g(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css("display","none")},toggle:function(e){return(e===v?this.css("display")=="none":e)?this.show():this.hide()},prev:function(){return g(this.pluck("previousElementSibling"))},next:function(){return g(this.pluck("nextElementSibling"))},html:function(e){return e===v?this.length>0?this[0].innerHTML:null:this.each(function(t){var n=this.innerHTML;g(this).empty().append(h(this,e,t,n))})},text:function(e){return e===v?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e})},attr:function(e,n){var r;return typeof e=="string"&&n===v?this.length==0||this[0].nodeType!==1?v:e=="value"&&this[0].nodeName=="INPUT"?this.val():!(r=this[0].getAttribute(e))&&e in this[0]?this[0][e]:r:this.each(function(r){if(this.nodeType!==1)return;if(t(e))for(m in e)this.setAttribute(m,e[m]);else this.setAttribute(e,h(this,n,r,this.getAttribute(e)))})},removeAttr:function(e){return this.each(function(){this.nodeType===1&&this.removeAttribute(e)})},prop:function(e,t){return t===v?this[0]?this[0][e]:v:this.each(function(n){this[e]=h(this,t,n,this[e])})},data:function(e,t){var n=this.attr("data-"+u(e),t);return n!==null?n:v},val:function(e){return e===v?this.length>0?this[0].value:v:this.each(function(t){this.value=h(this,e,t,this.value)})},offset:function(){if(this.length==0)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:e.width,height:e.height}},css:function(e,t){if(t===v&&typeof e=="string")return this.length==0?v:this[0].style[F(e)]||T(this[0],"").getPropertyValue(e);var n="";for(m in e)typeof e[m]=="string"&&e[m]==""?this.each(function(){this.style.removeProperty(u(m))}):n+=u(m)+":"+f(m,e[m])+";";return typeof e=="string"&&(t==""?this.each(function(){this.style.removeProperty(u(e))}):n=u(e)+":"+f(e,t)),this.each(function(){this.style.cssText+=";"+n})},index:function(e){return e?this.indexOf(g(e)[0]):this.parent().children().indexOf(this[0])},hasClass:function(e){return this.length<1?!1:a(e).test(this[0].className)},addClass:function(e){return this.each(function(t){y=[];var n=this.className,r=h(this,e,t,n);r.split(/\s+/g).forEach(function(e){g(this).hasClass(e)||y.push(e)},this),y.length&&(this.className+=(n?" ":"")+y.join(" "))})},removeClass:function(e){return this.each(function(t){if(e===v)return this.className="";y=this.className,h(this,e,t,y).split(/\s+/g).forEach(function(e){y=y.replace(a(e)," ")}),this.className=y.trim()})},toggleClass:function(e,t){return this.each(function(n){var r=h(this,e,n,this.className);(t===v?!g(this).hasClass(r):t)?g(this).addClass(r):g(this).removeClass(r)})}},["width","height"].forEach(function(e){g.fn[e]=function(t){var n,r=e.replace(/./,function(e){return e[0].toUpperCase()});return t===v?this[0]==window?window["inner"+r]:this[0]==E?E.documentElement["offset"+r]:(n=this.offset())&&n[e]:this.each(function(n){var r=g(this);r.css(e,h(this,t,n,r[e]()))})}}),L.forEach(function(e,n){g.fn[e]=function(){var e=g.map(arguments,function(e){return t(e)?e:j.fragment(e)});if(e.length<1)return this;var r=this.length,i=r>1,s=n<2;return this.each(function(t,o){for(var u=0;u<e.length;u++){var a=e[s?e.length-u-1:u];d(a,function(e){e.nodeName!=null&&e.nodeName.toUpperCase()==="SCRIPT"&&(!e.type||e.type==="text/javascript")&&window.eval.call(window,e.innerHTML)}),i&&t<r-1&&(a=a.cloneNode(!0)),p(n,o,a)}})},g.fn[n%2?e+"To":"insert"+(n?"Before":"After")]=function(t){return g(t)[e](this),this}}),j.Z.prototype=g.fn,j.camelize=F,j.uniq=I,g.zepto=j,g}();window.Zepto=Zepto,"$"in window||(window.$=Zepto),function(e){function t(e){return e._zid||(e._zid=h++)}function n(e,n,s,o){n=r(n);if(n.ns)var u=i(n.ns);return(c[t(e)]||[]).filter(function(e){return e&&(!n.e||e.e==n.e)&&(!n.ns||u.test(e.ns))&&(!s||t(e.fn)===t(s))&&(!o||e.sel==o)})}function r(e){var t=(""+e).split(".");return{e:t[0],ns:t.slice(1).sort().join(" ")}}function i(e){return new RegExp("(?:^| )"+e.replace(" "," .* ?")+"(?: |$)")}function s(t,n,r){e.isObject(t)?e.each(t,r):t.split(/\s/).forEach(function(e){r(e,n)})}function o(n,i,o,u,a,f){f=!!f;var l=t(n),h=c[l]||(c[l]=[]);s(i,o,function(t,i){var s=a&&a(i,t),o=s||i,l=function(e){var t=o.apply(n,[e].concat(e.data));return t===!1&&e.preventDefault(),t},c=e.extend(r(t),{fn:i,proxy:l,sel:u,del:s,i:h.length});h.push(c),n.addEventListener(c.e,l,f)})}function u(e,r,i,o){var u=t(e);s(r||"",i,function(t,r){n(e,t,r,o).forEach(function(t){delete c[u][t.i],e.removeEventListener(t.e,t.proxy,!1)})})}function a(t){var n=e.extend({originalEvent:t},t);return e.each(m,function(e,r){n[e]=function(){return this[r]=d,t[e].apply(t,arguments)},n[r]=v}),n}function f(e){if(!("defaultPrevented"in e)){e.defaultPrevented=!1;var t=e.preventDefault;e.preventDefault=function(){this.defaultPrevented=!0,t.call(this)}}}var l=e.zepto.qsa,c={},h=1,p={};p.click=p.mousedown=p.mouseup=p.mousemove="MouseEvents",e.event={add:o,remove:u},e.proxy=function(n,r){if(e.isFunction(n)){var i=function(){return n.apply(r,arguments)};return i._zid=t(n),i}if(typeof r=="string")return e.proxy(n[r],n);throw new TypeError("expected function")},e.fn.bind=function(e,t){return this.each(function(){o(this,e,t)})},e.fn.unbind=function(e,t){return this.each(function(){u(this,e,t)})},e.fn.one=function(e,t){return this.each(function(n,r){o(this,e,t,null,function(e,t){return function(){var n=e.apply(r,arguments);return u(r,t,e),n}})})};var d=function(){return!0},v=function(){return!1},m={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};e.fn.delegate=function(t,n,r){var i=!1;if(n=="blur"||n=="focus")e.iswebkit?n=n=="blur"?"focusout":n=="focus"?"focusin":n:i=!0;return this.each(function(s,u){o(u,n,r,t,function(n){return function(r){var i,s=e(r.target).closest(t,u).get(0);if(s)return i=e.extend(a(r),{currentTarget:s,liveFired:u}),n.apply(s,[i].concat([].slice.call(arguments,1)))}},i)})},e.fn.undelegate=function(e,t,n){return this.each(function(){u(this,t,n,e)})},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.on=function(t,n,r){return n==undefined||e.isFunction(n)?this.bind(t,n):this.delegate(n,t,r)},e.fn.off=function(t,n,r){return n==undefined||e.isFunction(n)?this.unbind(t,n):this.undelegate(n,t,r)},e.fn.trigger=function(t,n){return typeof t=="string"&&(t=e.Event(t)),f(t),t.data=n,this.each(function(){"dispatchEvent"in this&&this.dispatchEvent(t)})},e.fn.triggerHandler=function(t,r){var i,s;return this.each(function(o,u){i=a(typeof t=="string"?e.Event(t):t),i.data=r,i.target=u,e.each(n(u,t.type||t),function(e,t){s=t.proxy(i);if(i.isImmediatePropagationStopped())return!1})}),s},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error".split(" ").forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}}),["focus","blur"].forEach(function(t){e.fn[t]=function(e){if(e)this.bind(t,e);else if(this.length)try{this.get(0)[t]()}catch(n){}return this}}),e.Event=function(e,t){var n=document.createEvent(p[e]||"Events"),r=!0;if(t)for(var i in t)i=="bubbles"?r=!!t[i]:n[i]=t[i];return n.initEvent(e,r,!0,null,null,null,null,null,null,null,null,null,null,null,null),n}}(Zepto),function(e){function t(e){var t=this.os={},n=this.browser={},r=e.match(/WebKit\/([\d.]+)/),i=e.match(/(Android)\s+([\d.]+)/),s=e.match(/(iPad).*OS\s([\d_]+)/),o=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),u=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),a=u&&e.match(/TouchPad/),f=e.match(/Kindle\/([\d.]+)/),l=e.match(/Silk\/([\d._]+)/),c=e.match(/(BlackBerry).*Version\/([\d.]+)/);if(n.webkit=!!r)n.version=r[1];i&&(t.android=!0,t.version=i[2]),o&&(t.ios=t.iphone=!0,t.version=o[2].replace(/_/g,".")),s&&(t.ios=t.ipad=!0,t.version=s[2].replace(/_/g,".")),u&&(t.webos=!0,t.version=u[2]),a&&(t.touchpad=!0),c&&(t.blackberry=!0,t.version=c[2]),f&&(t.kindle=!0,t.version=f[1]),l&&(n.silk=!0,n.version=l[1]),!l&&t.android&&e.match(/Kindle Fire/)&&(n.silk=!0)}t.call(e,navigator.userAgent),e.__detect=t}(Zepto),function(e,t){function n(e){return e.toLowerCase()}function r(e){return s?s+e:n(e)}var i="",s,o,u,a={Webkit:"webkit",Moz:"",O:"o",ms:"MS"},f=window.document,l=f.createElement("div"),c=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,h={};e.each(a,function(e,r){if(l.style[e+"TransitionProperty"]!==t)return i="-"+n(e)+"-",s=r,!1}),h[i+"transition-property"]=h[i+"transition-duration"]=h[i+"transition-timing-function"]=h[i+"animation-name"]=h[i+"animation-duration"]="",e.fx={off:s===t&&l.style.transitionProperty===t,cssPrefix:i,transitionEnd:r("TransitionEnd"),animationEnd:r("AnimationEnd")},e.fn.animate=function(t,n,r,i){return e.isObject(n)&&(r=n.easing,i=n.complete,n=n.duration),n&&(n/=1e3),this.anim(t,n,r,i)},e.fn.anim=function(n,r,s,o){var u,a={},f,l=this,p,d=e.fx.transitionEnd;r===t&&(r=.4),e.fx.off&&(r=0);if(typeof n=="string")a[i+"animation-name"]=n,a[i+"animation-duration"]=r+"s",d=e.fx.animationEnd;else{for(f in n)c.test(f)?(u||(u=[]),u.push(f+"("+n[f]+")")):a[f]=n[f];u&&(a[i+"transform"]=u.join(" ")),!e.fx.off&&typeof n=="object"&&(a[i+"transition-property"]=Object.keys(n).join(", "),a[i+"transition-duration"]=r+"s",a[i+"transition-timing-function"]=s||"linear")}return p=function(t){if(typeof t!="undefined"){if(t.target!==t.currentTarget)return;e(t.target).unbind(d,arguments.callee)}e(this).css(h),o&&o.call(this)},r>0&&this.bind(d,p),setTimeout(function(){l.css(a),r<=0&&setTimeout(function(){l.each(function(){p.call(this)})},0)},0),this},l=null}(Zepto),function($){function triggerAndReturn(e,t,n){var r=$.Event(t);return $(e).trigger(r,n),!r.defaultPrevented}function triggerGlobal(e,t,n,r){if(e.global)return triggerAndReturn(t||document,n,r)}function ajaxStart(e){e.global&&$.active++===0&&triggerGlobal(e,null,"ajaxStart")}function ajaxStop(e){e.global&&!--$.active&&triggerGlobal(e,null,"ajaxStop")}function ajaxBeforeSend(e,t){var n=t.context;if(t.beforeSend.call(n,e,t)===!1||triggerGlobal(t,n,"ajaxBeforeSend",[e,t])===!1)return!1;triggerGlobal(t,n,"ajaxSend",[e,t])}function ajaxSuccess(e,t,n){var r=n.context,i="success";n.success.call(r,e,i,t),triggerGlobal(n,r,"ajaxSuccess",[t,n,e]),ajaxComplete(i,t,n)}function ajaxError(e,t,n,r){var i=r.context;r.error.call(i,n,t,e),triggerGlobal(r,i,"ajaxError",[n,r,e]),ajaxComplete(t,n,r)}function ajaxComplete(e,t,n){var r=n.context;n.complete.call(r,t,e),triggerGlobal(n,r,"ajaxComplete",[t,n]),ajaxStop(n)}function empty(){}function mimeToDataType(e){return e&&(e==htmlType?"html":e==jsonType?"json":scriptTypeRE.test(e)?"script":xmlTypeRE.test(e)&&"xml")||"text"}function appendQuery(e,t){return(e+"&"+t).replace(/[&?]{1,2}/,"?")}function serializeData(e){isObject(e.data)&&(e.data=$.param(e.data)),e.data&&(!e.type||e.type.toUpperCase()=="GET")&&(e.url=appendQuery(e.url,e.data))}function serialize(e,t,n,r){var i=$.isArray(t);$.each(t,function(t,s){r&&(t=n?r:r+"["+(i?"":t)+"]"),!r&&i?e.add(s.name,s.value):(n?$.isArray(s):isObject(s))?serialize(e,s,n,t):e.add(t,s)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType="application/json",htmlType="text/html",blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(e){var t="jsonp"+ ++jsonpID,n=document.createElement("script"),r=function(){$(n).remove(),t in window&&(window[t]=empty),ajaxComplete("abort",i,e)},i={abort:r},s;return e.error&&(n.onerror=function(){i.abort(),e.error()}),window[t]=function(r){clearTimeout(s),$(n).remove(),delete window[t],ajaxSuccess(r,i,e)},serializeData(e),n.src=e.url.replace(/=\?/,"="+t),$("head").append(n),e.timeout>0&&(s=setTimeout(function(){i.abort(),ajaxComplete("timeout",i,e)},e.timeout)),i},$.ajaxSettings={type:"GET",beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript",json:jsonType,xml:"application/xml, text/xml",html:htmlType,text:"text/plain"},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&&(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&&RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType=="jsonp"||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,"callback=?")),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders["X-Requested-With"]="XMLHttpRequest"),mime&&(baseHeaders.Accept=mime,mime.indexOf(",")>-1&&(mime=mime.split(",",2)[0]),xhr.overrideMimeType&&xhr.overrideMimeType(mime));if(settings.contentType||settings.data&&settings.type.toUpperCase()!="GET")baseHeaders["Content-Type"]=settings.contentType||"application/x-www-form-urlencoded";settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status>=200&&xhr.status<300||xhr.status==304||xhr.status==0&&protocol=="file:"){dataType=dataType||mimeToDataType(xhr.getResponseHeader("content-type")),result=xhr.responseText;try{dataType=="script"?(1,eval)(result):dataType=="xml"?result=xhr.responseXML:dataType=="json"&&(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,"parsererror",xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,"error",xhr,settings)}};var async="async"in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout>0&&(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,"timeout",xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(e,t){return $.ajax({url:e,success:t})},$.post=function(e,t,n,r){return $.isFunction(t)&&(r=r||n,n=t,t=null),$.ajax({type:"POST",url:e,data:t,success:n,dataType:r})},$.getJSON=function(e,t){return $.ajax({url:e,success:t,dataType:"json"})},$.fn.load=function(e,t){if(!this.length)return this;var n=this,r=e.split(/\s/),i;return r.length>1&&(e=r[0],i=r[1]),$.get(e,function(e){n.html(i?$(document.createElement("div")).html(e.replace(rscript,"")).find(i).html():e),t&&t.call(n)}),this};var escape=encodeURIComponent;$.param=function(e,t){var n=[];return n.add=function(e,t){this.push(escape(e)+"="+escape(t))},serialize(n,e,t),n.join("&").replace("%20","+")}}(Zepto),function(e){e.fn.serializeArray=function(){var t=[],n;return e(Array.prototype.slice.call(this.get(0).elements)).each(function(){n=e(this);var r=n.attr("type");this.nodeName.toLowerCase()!="fieldset"&&!this.disabled&&r!="submit"&&r!="reset"&&r!="button"&&(r!="radio"&&r!="checkbox"||this.checked)&&t.push({name:n.attr("name"),value:n.val()})}),t},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},e.fn.submit=function(t){if(t)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(e){function t(e){return"tagName"in e?e:e.parentNode}function n(e,t,n,r){var i=Math.abs(e-t),s=Math.abs(n-r);return i>=s?e-t>0?"Left":"Right":n-r>0?"Up":"Down"}function r(){a=null,s.last&&(s.el.trigger("longTap"),s={})}function i(){a&&clearTimeout(a),a=null}var s={},o,u=750,a;e(document).ready(function(){var l,p;e(document.body).bind("touchstart",function(n){l=Date.now(),p=l-(s.last||l),s.el=e(t(n.touches[0].target)),o&&clearTimeout(o),s.x1=n.touches[0].pageX,s.y1=n.touches[0].pageY,p>0&&p<=250&&(s.isDoubleTap=!0),s.last=l,a=setTimeout(r,u)}).bind("touchmove",function(e){i(),s.x2=e.touches[0].pageX,s.y2=e.touches[0].pageY}).bind("touchend",function(e){i(),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?(s.el.trigger("swipe")&&s.el.trigger("swipe"+n(s.x1,s.x2,s.y1,s.y2)),s={}):"last"in s&&(s.el.trigger("tap"),o=setTimeout(function(){o=null,s.el.trigger("singleTap"),s={}},250))}).bind("touchcancel",function(){o&&clearTimeout(o),a&&clearTimeout(a),a=o=null,s={}})}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto);