/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).bootstrap={},e.jQuery)}(this,function(e,p){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var n="transitionend";function o(e){var t=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(t)},e),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=p(e).css("transition-duration"),n=p(e).css("transition-delay"),i=parseFloat(t),o=parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){p(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?m.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=p.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};m.jQueryDetection(),p.fn.emulateTransitionEnd=o,p.event.special[m.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(p(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=p.fn[r],u={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},f="alert",d="fade",g="show",_=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){p.removeData(this._element,a),this._element=null},e._getRootElement=function(e){var t=m.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n=n||p(e).closest("."+f)[0]},e._triggerCloseEvent=function(e){var t=p.Event(u.CLOSE);return p(e).trigger(t),t},e._removeElement=function(t){var n=this;if(p(t).removeClass(g),p(t).hasClass(d)){var e=m.getTransitionDurationFromElement(t);p(t).one(m.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){p(e).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(a);t||(t=new i(this),e.data(a,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),p.fn[r]=_._jQueryInterface,p.fn[r].Constructor=_,p.fn[r].noConflict=function(){return p.fn[r]=h,_._jQueryInterface};var v="button",y="bs.button",E="."+y,b=".data-api",w=p.fn[v],T="active",C="btn",S="focus",D='[data-toggle^="button"]',I='[data-toggle="buttons"]',A='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',N='input:not([type="hidden"])',k=".active",L=".btn",P={CLICK_DATA_API:"click"+E+b,FOCUS_BLUR_DATA_API:"focus"+E+b+" blur"+E+b,LOAD_DATA_API:"load"+E+b},x=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=p(this._element).closest(I)[0];if(n){var i=this._element.querySelector(N);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))e=!1;else{var o=n.querySelector(k);o&&p(o).removeClass(T)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(T)&&(e=!1):e=!1;e&&(i.checked=!this._element.classList.contains(T),p(i).trigger("change")),i.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),e&&p(this._element).toggleClass(T))},e.dispose=function(){p.removeData(this._element,y),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(y);e||(e=new n(this),p(this).data(y,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();p(document).on(P.CLICK_DATA_API,D,function(e){var t=e.target;if(p(t).hasClass(C)||(t=p(t).closest(L)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector(N);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();x._jQueryInterface.call(p(t),"toggle")}}).on(P.FOCUS_BLUR_DATA_API,D,function(e){var t=p(e.target).closest(L)[0];p(t).toggleClass(S,/^focus(in)?$/.test(e.type))}),p(window).on(P.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(O)),t=0,n=e.length;t<n;t++){var i=e[t],o=i.querySelector(N);o.checked||o.hasAttribute("checked")?i.classList.add(T):i.classList.remove(T)}for(var r=0,s=(e=[].slice.call(document.querySelectorAll(A))).length;r<s;r++){var a=e[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(T):a.classList.remove(T)}}),p.fn[v]=x._jQueryInterface,p.fn[v].Constructor=x,p.fn[v].noConflict=function(){return p.fn[v]=w,x._jQueryInterface};var j="carousel",H="bs.carousel",R="."+H,F=".data-api",M=p.fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},B="next",q="prev",K="left",Q="right",V={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHSTART:"touchstart"+R,TOUCHMOVE:"touchmove"+R,TOUCHEND:"touchend"+R,POINTERDOWN:"pointerdown"+R,POINTERUP:"pointerup"+R,DRAG_START:"dragstart"+R,LOAD_DATA_API:"load"+R+F,CLICK_DATA_API:"click"+R+F},Y="carousel",z="active",X="slide",G="carousel-item-right",$="carousel-item-left",J="carousel-item-next",Z="carousel-item-prev",ee="pointer-event",te=".active",ne=".active.carousel-item",ie=".carousel-item",oe=".carousel-item img",re=".carousel-item-next, .carousel-item-prev",se=".carousel-indicators",ae="[data-slide], [data-slide-to]",le='[data-ride="carousel"]',ce={TOUCH:"touch",PEN:"pen"},he=function(){function r(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(se),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=r.prototype;return e.next=function(){this._isSliding||this._slide(B)},e.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(q)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(re)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(ne);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)p(this._element).one(V.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?B:q;this._slide(i,this._items[e])}},e.dispose=function(){p(this._element).off(R),p.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},W,{},e),m.typeCheckConfig(j,e,U),e},e._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&p(this._element).on(V.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&p(this._element).on(V.MOUSEENTER,function(e){return t.pause(e)}).on(V.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};p(this._element.querySelectorAll(oe)).on(V.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(p(this._element).on(V.POINTERDOWN,function(e){return n(e)}),p(this._element).on(V.POINTERUP,function(e){return i(e)}),this._element.classList.add(ee)):(p(this._element).on(V.TOUCHSTART,function(e){return n(e)}),p(this._element).on(V.TOUCHMOVE,function(e){return function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),p(this._element).on(V.TOUCHEND,function(e){return i(e)}))}},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(ie)):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===B,i=e===q,o=this._getItemIndex(t),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return t;var s=(o+(e===q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(ne)),o=p.Event(V.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return p(this._element).trigger(o),o},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(te));p(t).removeClass(z);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&p(n).addClass(z)}},e._slide=function(e,t){var n,i,o,r=this,s=this._element.querySelector(ne),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=e===B?(n=$,i=J,K):(n=G,i=Z,Q),l&&p(l).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(V.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(X)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(z),p(s).removeClass(z+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(z),p(l).addClass(z),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var e=p(this).data(H),t=l({},W,{},p(this).data());"object"==typeof i&&(t=l({},t,{},i));var n="string"==typeof i?i:t.slide;if(e||(e=new r(this,t),p(this).data(H,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&t.ride&&(e.pause(),e.cycle())})},r._dataApiClickHandler=function(e){var t=m.getSelectorFromElement(this);if(t){var n=p(t)[0];if(n&&p(n).hasClass(Y)){var i=l({},p(n).data(),{},p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(H).to(o),e.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return W}}]),r}();p(document).on(V.CLICK_DATA_API,ae,he._dataApiClickHandler),p(window).on(V.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(le)),t=0,n=e.length;t<n;t++){var i=p(e[t]);he._jQueryInterface.call(i,i.data())}}),p.fn[j]=he._jQueryInterface,p.fn[j].Constructor=he,p.fn[j].noConflict=function(){return p.fn[j]=M,he._jQueryInterface};var ue="collapse",fe="bs.collapse",de="."+fe,pe=p.fn[ue],me={toggle:!0,parent:""},ge={toggle:"boolean",parent:"(string|element)"},_e={SHOW:"show"+de,SHOWN:"shown"+de,HIDE:"hide"+de,HIDDEN:"hidden"+de,CLICK_DATA_API:"click"+de+".data-api"},ve="show",ye="collapse",Ee="collapsing",be="collapsed",we="width",Te="height",Ce=".show, .collapsing",Se='[data-toggle="collapse"]',De=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Se)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){p(this._element).hasClass(ve)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(ve)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains(ye)})).length&&(e=null),!(e&&(t=p(e).not(this._selector).data(fe))&&t._isTransitioning))){var i=p.Event(_e.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(p(e).not(this._selector),"hide"),t||p(e).data(fe,null));var o=this._getDimension();p(this._element).removeClass(ye).addClass(Ee),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(be).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(Ee).addClass(ye).addClass(ve),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(_e.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&p(this._element).hasClass(ve)){var t=p.Event(_e.HIDE);if(p(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(ve)||p(r).addClass(be).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e.setTransitioning(!1),p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){p.removeData(this._element,fe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},me,{},e)).toggle=Boolean(e.toggle),m.typeCheckConfig(ue,e,ge),e},e._getDimension=function(){return p(this._element).hasClass(we)?we:Te},e._getParent=function(){var e,n=this;m.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return p(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){var n=p(e).hasClass(ve);t.length&&p(t).toggleClass(be,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(e){var t=m.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=p(this),t=e.data(fe),n=l({},me,{},e.data(),{},"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(fe,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return me}}]),a}();p(document).on(_e.CLICK_DATA_API,Se,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=p(this),t=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));p(i).each(function(){var e=p(this),t=e.data(fe)?"toggle":n.data();De._jQueryInterface.call(e,t)})}),p.fn[ue]=De._jQueryInterface,p.fn[ue].Constructor=De,p.fn[ue].noConflict=function(){return p.fn[ue]=pe,De._jQueryInterface};var Ie="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Ae=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Ie&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}();var Oe=Ie&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Ae))}};function Ne(e){return e&&"[object Function]"==={}.toString.call(e)}function ke(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function Le(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function Pe(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=ke(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:Pe(Le(e))}function xe(e){return e&&e.referenceNode?e.referenceNode:e}var je=Ie&&!(!window.MSInputMethodContext||!document.documentMode),He=Ie&&/MSIE 10/.test(navigator.userAgent);function Re(e){return 11===e?je:10===e?He:je||He}function Fe(e){if(!e)return document.documentElement;for(var t=Re(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===ke(n,"position")?Fe(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Me(e){return null!==e.parentNode?Me(e.parentNode):e}function We(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||Fe(e.firstElementChild)===e)}(s)?s:Fe(s);var a=Me(e);return a.host?We(a.host,t):We(e,Me(t).host)}function Ue(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"!==i&&"HTML"!==i)return e[n];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}function Be(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function qe(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Re(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function Ke(e){var t=e.body,n=e.documentElement,i=Re(10)&&getComputedStyle(n);return{height:qe("Height",t,n,i),width:qe("Width",t,n,i)}}var Qe=function(e,t,n){return t&&Ve(e.prototype,t),n&&Ve(e,n),e};function Ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Xe(e){return ze({},e,{right:e.left+e.width,bottom:e.top+e.height})}function Ge(e){var t={};try{if(Re(10)){t=e.getBoundingClientRect();var n=Ue(e,"top"),i=Ue(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?Ke(e.ownerDocument):{},s=r.width||e.clientWidth||o.width,a=r.height||e.clientHeight||o.height,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var h=ke(e);l-=Be(h,"x"),c-=Be(h,"y"),o.width-=l,o.height-=c}return Xe(o)}function $e(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Re(10),r="HTML"===t.nodeName,s=Ge(e),a=Ge(t),l=Pe(e),c=ke(t),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=Xe({top:s.top-a.top-h,left:s.left-a.left-u,width:s.width,height:s.height});if(f.marginTop=0,f.marginLeft=0,!o&&r){var d=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10);f.top-=h-d,f.bottom-=h-d,f.left-=u-p,f.right-=u-p,f.marginTop=d,f.marginLeft=p}return(o&&!i?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(f=function(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Ue(t,"top"),r=Ue(t,"left"),s=i?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=r*s,e.right+=r*s,e}(f,t)),f}function Je(e){if(!e||!e.parentElement||Re())return document.documentElement;for(var t=e.parentElement;t&&"none"===ke(t,"transform");)t=t.parentElement;return t||document.documentElement}function Ze(e,t,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?Je(e):We(e,xe(t));if("viewport"===i)s=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,o=$e(e,i),r=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),a=n?0:Ue(i),l=n?0:Ue(i,"left");return Xe({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:s})}(a,r);else{var l=void 0;"scrollParent"===i?"BODY"===(l=Pe(Le(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=$e(l,a,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===ke(t,"position"))return!0;var i=Le(t);return!!i&&e(i)}(a))s=c;else{var h=Ke(e.ownerDocument),u=h.height,f=h.width;s.top+=c.top-c.marginTop,s.bottom=u+c.top,s.left+=c.left-c.marginLeft,s.right=f+c.left}}var d="number"==typeof(n=n||0);return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function et(e,t,i,n,o,r){var s=5<arguments.length&&void 0!==r?r:0;if(-1===e.indexOf("auto"))return e;var a=Ze(i,n,s,o),l={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(l).map(function(e){return ze({key:e},l[e],{area:function(e){return e.width*e.height}(l[e])})}).sort(function(e,t){return t.area-e.area}),h=c.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<h.length?h[0].key:c[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function tt(e,t,n,i){var o=3<arguments.length&&void 0!==i?i:null;return $e(n,o?Je(t):We(t,xe(n)),o)}function nt(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function ot(e,t,n){n=n.split("-")[0];var i=nt(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=t[s]+t[l]/2-i[l]/2,o[a]=n===a?t[a]-i[c]:t[it(a)],o}function rt(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=rt(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&Ne(t)&&(n.offsets.popper=Xe(n.offsets.popper),n.offsets.reference=Xe(n.offsets.reference),n=t(n,e))}),n}function at(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if("undefined"!=typeof document.body.style[r])return r}return null}function ct(e){var t=e.ownerDocument;return t?t.defaultView:window}function ht(e,t,n,i){n.updateBound=i,ct(e).addEventListener("resize",n.updateBound,{passive:!0});var o=Pe(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,s=r?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),r||e(Pe(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ut(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return ct(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function ft(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function dt(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&ft(i[e])&&(t="px"),n.style[e]=i[e]+t})}function pt(e,t){function n(e){return e}var i=e.offsets,o=i.popper,r=i.reference,s=Math.round,a=Math.floor,l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),f=t?h||u||l%2==c%2?s:a:n,d=t?s:n;return{left:f(l%2==1&&c%2==1&&!u&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}}var mt=Ie&&/Firefox/i.test(navigator.userAgent);function gt(e,t,n){var i=rt(e,function(e){return e.name===t}),o=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!o){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var _t=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],vt=_t.slice(3);function yt(e,t){var n=1<arguments.length&&void 0!==t&&t,i=vt.indexOf(e),o=vt.slice(i+1).concat(vt.slice(0,i));return n?o.reverse():o}var Et="flip",bt="clockwise",wt="counterclockwise";function Tt(e,o,r,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(rt(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return e;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Xe(a)[t]/100*r}(e,n,o,r)})})).forEach(function(n,i){n.forEach(function(e,t){ft(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}var Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ye({},l,r[l]),end:Ye({},l,r[l]+r[c]-s[c])};e.offsets.popper=ze({},s,h[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ft(+n)?[+n,0]:Tt(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||Fe(e.instance.popper);e.instance.reference===t&&(t=Fe(t));var n=lt("transform"),o=e.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Ze(e.instance.popper,e.instance.reference,i.padding,t,e.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=e.offsets.popper,u={primary:function(e){var t=h[e];return h[e]<l[e]&&!i.escapeWithReference&&(t=Math.max(h[e],l[e])),Ye({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=h[t];return h[e]>l[e]&&!i.escapeWithReference&&(n=Math.min(h[t],l[e]-("right"===e?h.width:h.height))),Ye({},t,n)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";h=ze({},h,u[t](e))}),e.offsets.popper=h,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(e.offsets.popper[l]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!gt(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=nt(i)[c];a[d]-p<s[u]&&(e.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(e.offsets.popper[u]+=a[u]+p-s[d]),e.offsets.popper=Xe(e.offsets.popper);var m=a[u]+a[c]/2-p/2,g=ke(e.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-e.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(Ye(n={},u,Math.round(y)),Ye(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(m,g){if(at(m.instance.modifiers,"inner"))return m;if(m.flipped&&m.placement===m.originalPlacement)return m;var _=Ze(m.instance.popper,m.instance.reference,g.padding,g.boundariesElement,m.positionFixed),v=m.placement.split("-")[0],y=it(v),E=m.placement.split("-")[1]||"",b=[];switch(g.behavior){case Et:b=[v,y];break;case bt:b=yt(v);break;case wt:b=yt(v,!0);break;default:b=g.behavior}return b.forEach(function(e,t){if(v!==e||b.length===t+1)return m;v=m.placement.split("-")[0],y=it(v);var n=m.offsets.popper,i=m.offsets.reference,o=Math.floor,r="left"===v&&o(n.right)>o(i.left)||"right"===v&&o(n.left)<o(i.right)||"top"===v&&o(n.bottom)>o(i.top)||"bottom"===v&&o(n.top)<o(i.bottom),s=o(n.left)<o(_.left),a=o(n.right)>o(_.right),l=o(n.top)<o(_.top),c=o(n.bottom)>o(_.bottom),h="left"===v&&s||"right"===v&&a||"top"===v&&l||"bottom"===v&&c,u=-1!==["top","bottom"].indexOf(v),f=!!g.flipVariations&&(u&&"start"===E&&s||u&&"end"===E&&a||!u&&"start"===E&&l||!u&&"end"===E&&c),d=!!g.flipVariationsByContent&&(u&&"start"===E&&a||u&&"end"===E&&s||!u&&"start"===E&&c||!u&&"end"===E&&l),p=f||d;(r||h||p)&&(m.flipped=!0,(r||h)&&(v=b[t+1]),p&&(E=function(e){return"end"===e?"start":"start"===e?"end":e}(E)),m.placement=v+(E?"-"+E:""),m.offsets.popper=ze({},m.offsets.popper,ot(m.instance.popper,m.offsets.reference,m.placement)),m=st(m.instance.modifiers,m,"flip"))}),m},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Xe(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!gt(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=rt(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=rt(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=Fe(e.instance.popper),l=Ge(a),c={position:o.position},h=pt(e,window.devicePixelRatio<2||!mt),u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=lt("transform"),p=void 0,m=void 0;if(m="bottom"==u?"HTML"===a.nodeName?-a.clientHeight+h.bottom:-l.height+h.bottom:h.top,p="right"==f?"HTML"===a.nodeName?-a.clientWidth+h.right:-l.width+h.right:h.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[u]=0,c[f]=0,c.willChange="transform";else{var g="bottom"==u?-1:1,_="right"==f?-1:1;c[u]=m*g,c[f]=p*_,c.willChange=u+", "+f}var v={"x-placement":e.placement};return e.attributes=ze({},v,e.attributes),e.styles=ze({},c,e.styles),e.arrowStyles=ze({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return dt(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&dt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=tt(o,t,e,n.positionFixed),s=et(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),dt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},St=(Qe(Dt,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ot(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,at(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ht(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ut.call(this)}}]),Dt);function Dt(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Dt),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=Oe(this.update.bind(this)),this.options=ze({},Dt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ze({},Dt.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=ze({},Dt.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ze({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&Ne(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}St.Utils=("undefined"!=typeof window?window:global).PopperUtils,St.placements=_t,St.Defaults=Ct;var It="dropdown",At="bs.dropdown",Ot="."+At,Nt=".data-api",kt=p.fn[It],Lt=new RegExp("38|40|27"),Pt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+Nt,KEYDOWN_DATA_API:"keydown"+Ot+Nt,KEYUP_DATA_API:"keyup"+Ot+Nt},xt="disabled",jt="show",Ht="dropup",Rt="dropright",Ft="dropleft",Mt="dropdown-menu-right",Wt="position-static",Ut='[data-toggle="dropdown"]',Bt=".dropdown form",qt=".dropdown-menu",Kt=".navbar-nav",Qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Vt="top-start",Yt="top-end",zt="bottom-start",Xt="bottom-end",Gt="right-start",$t="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)){var e=p(this._menu).hasClass(jt);c._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||p(this._element).hasClass(xt)||p(this._menu).hasClass(jt))){var t={relatedTarget:this._element},n=p.Event(Pt.SHOW,t),i=c._getParentFromElement(this._element);if(p(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof St)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(i).addClass(Wt),this._popper=new St(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(i).closest(Kt).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(jt),p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN,t))}}},e.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)&&p(this._menu).hasClass(jt)){var e={relatedTarget:this._element},t=p.Event(Pt.HIDE,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(this._popper&&this._popper.destroy(),p(this._menu).toggleClass(jt),p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN,e)))}},e.dispose=function(){p.removeData(this._element,At),p(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;p(this._element).on(Pt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,{},p(this._element).data(),{},e),m.typeCheckConfig(It,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(qt))}return this._menu},e._getPlacement=function(){var e=p(this._element.parentNode),t=zt;return e.hasClass(Ht)?(t=Vt,p(this._menu).hasClass(Mt)&&(t=Yt)):e.hasClass(Rt)?t=Gt:e.hasClass(Ft)?t=$t:p(this._menu).hasClass(Mt)&&(t=Xt),t},e._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,{},this._config.popperConfig)},c._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(At);if(e||(e=new c(this,"object"==typeof t?t:null),p(this).data(At,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(Ut)),n=0,i=t.length;n<i;n++){var o=c._getParentFromElement(t[n]),r=p(t[n]).data(At),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),r){var a=r._menu;if(p(o).hasClass(jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&p.contains(o,e.target))){var l=p.Event(Pt.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),t[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),p(a).removeClass(jt),p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=m.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||p(e.target).closest(qt).length)):Lt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!p(this).hasClass(xt))){var t=c._getParentFromElement(this),n=p(t).hasClass(jt);if(n||27!==e.which)if(n&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(Qt)).filter(function(e){return p(e).is(":visible")});if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&0<o&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var r=t.querySelector(Ut);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}();p(document).on(Pt.KEYDOWN_DATA_API,Ut,en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API,qt,en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API+" "+Pt.KEYUP_DATA_API,en._clearMenus).on(Pt.CLICK_DATA_API,Ut,function(e){e.preventDefault(),e.stopPropagation(),en._jQueryInterface.call(p(this),"toggle")}).on(Pt.CLICK_DATA_API,Bt,function(e){e.stopPropagation()}),p.fn[It]=en._jQueryInterface,p.fn[It].Constructor=en,p.fn[It].noConflict=function(){return p.fn[It]=kt,en._jQueryInterface};var tn="modal",nn="bs.modal",on="."+nn,rn=p.fn[tn],sn={backdrop:!0,keyboard:!0,focus:!0,show:!0},an={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ln={HIDE:"hide"+on,HIDE_PREVENTED:"hidePrevented"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,FOCUSIN:"focusin"+on,RESIZE:"resize"+on,CLICK_DISMISS:"click.dismiss"+on,KEYDOWN_DISMISS:"keydown.dismiss"+on,MOUSEUP_DISMISS:"mouseup.dismiss"+on,MOUSEDOWN_DISMISS:"mousedown.dismiss"+on,CLICK_DATA_API:"click"+on+".data-api"},cn="modal-dialog-scrollable",hn="modal-scrollbar-measure",un="modal-backdrop",fn="modal-open",dn="fade",pn="show",mn="modal-static",gn=".modal-dialog",_n=".modal-body",vn='[data-toggle="modal"]',yn='[data-dismiss="modal"]',En=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top",wn=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(gn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=o.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(dn)&&(this._isTransitioning=!0);var n=p.Event(ln.SHOW,{relatedTarget:e});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(ln.CLICK_DISMISS,yn,function(e){return t.hide(e)}),p(this._dialog).on(ln.MOUSEDOWN_DISMISS,function(){p(t._element).one(ln.MOUSEUP_DISMISS,function(e){p(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(ln.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(dn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(ln.FOCUSIN),p(this._element).removeClass(pn),p(this._element).off(ln.CLICK_DISMISS),p(this._dialog).off(ln.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return p(e).off(on)}),p(document).off(ln.FOCUSIN),p.removeData(this._element,nn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},sn,{},e),m.typeCheckConfig(tn,e,an),e},e._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=p.Event(ln.HIDE_PREVENTED);if(p(this._element).trigger(t),t.defaultPrevented)return;this._element.classList.add(mn);var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e._element.classList.remove(mn)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},e._showElement=function(e){var t=this,n=p(this._element).hasClass(dn),i=this._dialog?this._dialog.querySelector(_n):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(cn)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(pn),this._config.focus&&this._enforceFocus();function o(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,p(t._element).trigger(r)}var r=p.Event(ln.SHOWN,{relatedTarget:e});if(n){var s=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},e._enforceFocus=function(){var t=this;p(document).off(ln.FOCUSIN).on(ln.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===p(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?p(this._element).on(ln.KEYDOWN_DISMISS,function(e){27===e.which&&t._triggerBackdropTransition()}):this._isShown||p(this._element).off(ln.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?p(window).on(ln.RESIZE,function(e){return t.handleUpdate(e)}):p(window).off(ln.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(fn),e._resetAdjustments(),e._resetScrollbar(),p(e._element).trigger(ln.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=p(this._element).hasClass(dn)?dn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=un,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(ln.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(pn),!e)return;if(!n)return void e();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(pn);var o=function(){t._removeBackdrop(),e&&e()};if(p(this._element).hasClass(dn)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(En)),t=[].slice.call(document.querySelectorAll(bn));p(e).each(function(e,t){var n=t.style.paddingRight,i=p(t).css("padding-right");p(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(t).each(function(e,t){var n=t.style.marginRight,i=p(t).css("margin-right");p(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(fn)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(En));p(e).each(function(e,t){var n=p(t).data("padding-right");p(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+bn));p(t).each(function(e,t){var n=p(t).data("margin-right");"undefined"!=typeof n&&p(t).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=hn,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(n,i){return this.each(function(){var e=p(this).data(nn),t=l({},sn,{},p(this).data(),{},"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),p(this).data(nn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return sn}}]),o}();p(document).on(ln.CLICK_DATA_API,vn,function(e){var t,n=this,i=m.getSelectorFromElement(this);i&&(t=document.querySelector(i));var o=p(t).data(nn)?"toggle":l({},p(t).data(),{},p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=p(t).one(ln.SHOW,function(e){e.isDefaultPrevented()||r.one(ln.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});wn._jQueryInterface.call(p(t),o,this)}),p.fn[tn]=wn._jQueryInterface,p.fn[tn].Constructor=wn,p.fn[tn].noConflict=function(){return p.fn[tn]=rn,wn._jQueryInterface};var Tn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Cn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Sn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Dn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function In(e,r,t){if(0===e.length)return e;if(t&&"function"==typeof t)return t(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(e){var t=a[e],n=t.nodeName.toLowerCase();if(-1===s.indexOf(t.nodeName.toLowerCase()))return t.parentNode.removeChild(t),"continue";var i=[].slice.call(t.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(e){!function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===Tn.indexOf(n)||Boolean(e.nodeValue.match(Sn)||e.nodeValue.match(Dn));for(var i=t.filter(function(e){return e instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(e,o)&&t.removeAttribute(e.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var An="tooltip",On="bs.tooltip",Nn="."+On,kn=p.fn[An],Ln="bs-tooltip",Pn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=["sanitize","whiteList","sanitizeFn"],jn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Hn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Rn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Cn,popperConfig:null},Fn="show",Mn="out",Wn={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,INSERTED:"inserted"+Nn,CLICK:"click"+Nn,FOCUSIN:"focusin"+Nn,FOCUSOUT:"focusout"+Nn,MOUSEENTER:"mouseenter"+Nn,MOUSELEAVE:"mouseleave"+Nn},Un="fade",Bn="show",qn=".tooltip-inner",Kn=".arrow",Qn="hover",Vn="focus",Yn="click",zn="manual",Xn=function(){function i(e,t){if("undefined"==typeof St)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=p(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(Bn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var e=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(e);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Un);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new St(this.element,o,this._getPopperConfig(a)),p(o).addClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,p(t.element).trigger(t.constructor.Event.SHOWN),e===Mn&&t._leave(null,t)};if(p(this.tip).hasClass(Un)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(e){function t(){n._hoverState!==Fn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),p(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()}var n=this,i=this.getTipElement(),o=p.Event(this.constructor.Event.HIDE);if(p(this.element).trigger(o),!o.isDefaultPrevented()){if(p(i).removeClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Yn]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[Qn]=!1,p(this.tip).hasClass(Un)){var r=m.getTransitionDurationFromElement(i);p(i).one(m.TRANSITION_END,t).emulateTransitionEnd(r)}else t();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){p(this.getTipElement()).addClass(Ln+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(p(e.querySelectorAll(qn)),this.getTitle()),p(e).removeClass(Un+" "+Bn)},e.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=In(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?p(t).parent().is(e)||e.empty().append(t):e.text(p(t).text())},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e=e||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},e._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Kn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},{},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},e._getAttachment=function(e){return Hn[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==zn){var t=e===Qn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Qn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}}),this._hideModalHandler=function(){i.element&&i.hide()},p(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Vn:Qn]=!0),p(t.getTipElement()).hasClass(Bn)||t._hoverState===Fn?t._hoverState=Fn:(clearTimeout(t._timeout),t._hoverState=Fn,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Fn&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Vn:Qn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Mn,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===Mn&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){var t=p(this.element).data();return Object.keys(t).forEach(function(e){-1!==xn.indexOf(e)&&delete t[e]}),"number"==typeof(e=l({},this.constructor.Default,{},t,{},"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),m.typeCheckConfig(An,e,this.constructor.DefaultType),e.sanitize&&(e.template=In(e.template,e.whiteList,e.sanitizeFn)),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Pn);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(p(e).removeClass(Un),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(On),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(On,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Rn}},{key:"NAME",get:function(){return An}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Wn}},{key:"EVENT_KEY",get:function(){return Nn}},{key:"DefaultType",get:function(){return jn}}]),i}();p.fn[An]=Xn._jQueryInterface,p.fn[An].Constructor=Xn,p.fn[An].noConflict=function(){return p.fn[An]=kn,Xn._jQueryInterface};var Gn="popover",$n="bs.popover",Jn="."+$n,Zn=p.fn[Gn],ei="bs-popover",ti=new RegExp("(^|\\s)"+ei+"\\S+","g"),ni=l({},Xn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ii=l({},Xn.DefaultType,{content:"(string|element|function)"}),oi="fade",ri="show",si=".popover-header",ai=".popover-body",li={HIDE:"hide"+Jn,HIDDEN:"hidden"+Jn,SHOW:"show"+Jn,SHOWN:"shown"+Jn,INSERTED:"inserted"+Jn,CLICK:"click"+Jn,FOCUSIN:"focusin"+Jn,FOCUSOUT:"focusout"+Jn,MOUSEENTER:"mouseenter"+Jn,MOUSELEAVE:"mouseleave"+Jn},ci=function(e){function i(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(i,e);var t=i.prototype;return t.isWithContent=function(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function(e){p(this.getTipElement()).addClass(ei+"-"+e)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var e=p(this.getTipElement());this.setElementContent(e.find(si),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(ai),t),e.removeClass(oi+" "+ri)},t._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(ti);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data($n),t="object"==typeof n?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data($n,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ni}},{key:"NAME",get:function(){return Gn}},{key:"DATA_KEY",get:function(){return $n}},{key:"Event",get:function(){return li}},{key:"EVENT_KEY",get:function(){return Jn}},{key:"DefaultType",get:function(){return ii}}]),i}(Xn);p.fn[Gn]=ci._jQueryInterface,p.fn[Gn].Constructor=ci,p.fn[Gn].noConflict=function(){return p.fn[Gn]=Zn,ci._jQueryInterface};var hi="scrollspy",ui="bs.scrollspy",fi="."+ui,di=p.fn[hi],pi={offset:10,method:"auto",target:""},mi={offset:"number",method:"string",target:"(string|element)"},gi={ACTIVATE:"activate"+fi,SCROLL:"scroll"+fi,LOAD_DATA_API:"load"+fi+".data-api"},_i="dropdown-item",vi="active",yi='[data-spy="scroll"]',Ei=".nav, .list-group",bi=".nav-link",wi=".nav-item",Ti=".list-group-item",Ci=".dropdown",Si=".dropdown-item",Di=".dropdown-toggle",Ii="offset",Ai="position",Oi=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+bi+","+this._config.target+" "+Ti+","+this._config.target+" "+Si,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(gi.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?Ii:Ai,o="auto"===this._config.method?e:this._config.method,r=o===Ai?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=m.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[p(t)[o]().top+r,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){p.removeData(this._element,ui),p(this._scrollElement).off(fi),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},pi,{},"object"==typeof e&&e?e:{})).target){var t=p(e.target).attr("id");t||(t=m.getUID(hi),p(e.target).attr("id",t)),e.target="#"+t}return m.typeCheckConfig(hi,e,mi),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=p([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass(_i)?(n.closest(Ci).find(Di).addClass(vi),n.addClass(vi)):(n.addClass(vi),n.parents(Ei).prev(bi+", "+Ti).addClass(vi),n.parents(Ei).prev(wi).children(bi).addClass(vi)),p(this._scrollElement).trigger(gi.ACTIVATE,{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(vi)}).forEach(function(e){return e.classList.remove(vi)})},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(ui);if(e||(e=new n(this,"object"==typeof t&&t),p(this).data(ui,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return pi}}]),n}();p(window).on(gi.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(yi)),t=e.length;t--;){var n=p(e[t]);Oi._jQueryInterface.call(n,n.data())}}),p.fn[hi]=Oi._jQueryInterface,p.fn[hi].Constructor=Oi,p.fn[hi].noConflict=function(){return p.fn[hi]=di,Oi._jQueryInterface};var Ni="bs.tab",ki="."+Ni,Li=p.fn.tab,Pi={HIDE:"hide"+ki,HIDDEN:"hidden"+ki,SHOW:"show"+ki,SHOWN:"shown"+ki,CLICK_DATA_API:"click"+ki+".data-api"},xi="dropdown-menu",ji="active",Hi="disabled",Ri="fade",Fi="show",Mi=".dropdown",Wi=".nav, .list-group",Ui=".active",Bi="> li > .active",qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ki=".dropdown-toggle",Qi="> .dropdown-menu .active",Vi=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(ji)||p(this._element).hasClass(Hi))){var e,i,t=p(this._element).closest(Wi)[0],o=m.getSelectorFromElement(this._element);if(t){var r="UL"===t.nodeName||"OL"===t.nodeName?Bi:Ui;i=(i=p.makeArray(p(t).find(r)))[i.length-1]}var s=p.Event(Pi.HIDE,{relatedTarget:this._element}),a=p.Event(Pi.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(e=document.querySelector(o)),this._activate(this._element,t);var l=function(){var e=p.Event(Pi.HIDDEN,{relatedTarget:n._element}),t=p.Event(Pi.SHOWN,{relatedTarget:i});p(i).trigger(e),p(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){p.removeData(this._element,Ni),this._element=null},e._activate=function(e,t,n){function i(){return o._transitionComplete(e,r,n)}var o=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?p(t).children(Ui):p(t).find(Bi))[0],s=n&&r&&p(r).hasClass(Ri);if(r&&s){var a=m.getTransitionDurationFromElement(r);p(r).removeClass(Fi).one(m.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},e._transitionComplete=function(e,t,n){if(t){p(t).removeClass(ji);var i=p(t.parentNode).find(Qi)[0];i&&p(i).removeClass(ji),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(p(e).addClass(ji),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),m.reflow(e),e.classList.contains(Ri)&&e.classList.add(Fi),e.parentNode&&p(e.parentNode).hasClass(xi)){var o=p(e).closest(Mi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ki));p(r).addClass(ji)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(Ni);if(t||(t=new i(this),e.data(Ni,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(Pi.CLICK_DATA_API,qi,function(e){e.preventDefault(),Vi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Vi._jQueryInterface,p.fn.tab.Constructor=Vi,p.fn.tab.noConflict=function(){return p.fn.tab=Li,Vi._jQueryInterface};var Yi="toast",zi="bs.toast",Xi="."+zi,Gi=p.fn[Yi],$i={CLICK_DISMISS:"click.dismiss"+Xi,HIDE:"hide"+Xi,HIDDEN:"hidden"+Xi,SHOW:"show"+Xi,SHOWN:"shown"+Xi},Ji="fade",Zi="hide",eo="show",to="showing",no={animation:"boolean",autohide:"boolean",delay:"number"},io={animation:!0,autohide:!0,delay:500},oo='[data-dismiss="toast"]',ro=function(){function i(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var e=i.prototype;return e.show=function(){var e=this,t=p.Event($i.SHOW);if(p(this._element).trigger(t),!t.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Ji);var n=function(){e._element.classList.remove(to),e._element.classList.add(eo),p(e._element).trigger($i.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove(Zi),m.reflow(this._element),this._element.classList.add(to),this._config.animation){var i=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains(eo)){var e=p.Event($i.HIDE);p(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(eo)&&this._element.classList.remove(eo),p(this._element).off($i.CLICK_DISMISS),p.removeData(this._element,zi),this._element=null,this._config=null},e._getConfig=function(e){return e=l({},io,{},p(this._element).data(),{},"object"==typeof e&&e?e:{}),m.typeCheckConfig(Yi,e,this.constructor.DefaultType),e},e._setListeners=function(){var e=this;p(this._element).on($i.CLICK_DISMISS,oo,function(){return e.hide()})},e._close=function(){function e(){t._element.classList.add(Zi),p(t._element).trigger($i.HIDDEN)}var t=this;if(this._element.classList.remove(eo),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(zi);if(t||(t=new i(this,"object"==typeof n&&n),e.data(zi,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return no}},{key:"Default",get:function(){return io}}]),i}();p.fn[Yi]=ro._jQueryInterface,p.fn[Yi].Constructor=ro,p.fn[Yi].noConflict=function(){return p.fn[Yi]=Gi,ro._jQueryInterface},e.Alert=_,e.Button=x,e.Carousel=he,e.Collapse=De,e.Dropdown=en,e.Modal=wn,e.Popover=ci,e.Scrollspy=Oi,e.Tab=Vi,e.Toast=ro,e.Tooltip=Xn,e.Util=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map
/*!
 * AdminLTE v3.0.5 (https://adminlte.io)
 * Copyright 2014-2020 Colorlib <http://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).adminlte={})}(this,(function(t){"use strict";var e=function(t){var e="ControlSidebar",i="lte.controlsidebar",n=t.fn[e],s={COLLAPSED:"collapsed.lte.controlsidebar",EXPANDED:"expanded.lte.controlsidebar"},o=".control-sidebar",a=".control-sidebar-content",r='[data-widget="control-sidebar"]',l=".main-header",c=".main-footer",d="control-sidebar-animate",h="control-sidebar-open",f="control-sidebar-slide-open",u="layout-fixed",g="layout-navbar-fixed",p="layout-sm-navbar-fixed",_="layout-md-navbar-fixed",m="layout-lg-navbar-fixed",v="layout-xl-navbar-fixed",C="layout-footer-fixed",y="layout-sm-footer-fixed",b="layout-md-footer-fixed",w="layout-lg-footer-fixed",x="layout-xl-footer-fixed",E={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l"},A=function(){function e(t,e){this._element=t,this._config=e,this._init()}var n=e.prototype;return n.collapse=function(){this._config.controlsidebarSlide?(t("html").addClass(d),t("body").removeClass(f).delay(300).queue((function(){t(o).hide(),t("html").removeClass(d),t(this).dequeue()}))):t("body").removeClass(h);var e=t.Event(s.COLLAPSED);t(this._element).trigger(e)},n.show=function(){this._config.controlsidebarSlide?(t("html").addClass(d),t(o).show().delay(10).queue((function(){t("body").addClass(f).delay(300).queue((function(){t("html").removeClass(d),t(this).dequeue()})),t(this).dequeue()}))):t("body").addClass(h);var e=t.Event(s.EXPANDED);t(this._element).trigger(e)},n.toggle=function(){t("body").hasClass(h)||t("body").hasClass(f)?this.collapse():this.show()},n._init=function(){var e=this;this._fixHeight(),this._fixScrollHeight(),t(window).resize((function(){e._fixHeight(),e._fixScrollHeight()})),t(window).scroll((function(){(t("body").hasClass(h)||t("body").hasClass(f))&&e._fixScrollHeight()}))},n._fixScrollHeight=function(){var e={scroll:t(document).height(),window:t(window).height(),header:t(l).outerHeight(),footer:t(c).outerHeight()},i=Math.abs(e.window+t(window).scrollTop()-e.scroll),n=t(window).scrollTop(),s=!1,r=!1;t("body").hasClass(u)&&((t("body").hasClass(g)||t("body").hasClass(p)||t("body").hasClass(_)||t("body").hasClass(m)||t("body").hasClass(v))&&"fixed"===t(l).css("position")&&(s=!0),(t("body").hasClass(C)||t("body").hasClass(y)||t("body").hasClass(b)||t("body").hasClass(w)||t("body").hasClass(x))&&"fixed"===t(c).css("position")&&(r=!0),0===n&&0===i?(t(o).css("bottom",e.footer),t(o).css("top",e.header),t(o+", "+o+" "+a).css("height",e.window-(e.header+e.footer))):i<=e.footer?!1===r?(t(o).css("bottom",e.footer-i),t(o+", "+o+" "+a).css("height",e.window-(e.footer-i))):t(o).css("bottom",e.footer):n<=e.header?!1===s?(t(o).css("top",e.header-n),t(o+", "+o+" "+a).css("height",e.window-(e.header-n))):t(o).css("top",e.header):!1===s?(t(o).css("top",0),t(o+", "+o+" "+a).css("height",e.window)):t(o).css("top",e.header))},n._fixHeight=function(){var e=t(window).height(),i=t(l).outerHeight(),n=t(c).outerHeight();if(t("body").hasClass(u)){var s=e-i;(t("body").hasClass(C)||t("body").hasClass(y)||t("body").hasClass(b)||t("body").hasClass(w)||t("body").hasClass(x))&&"fixed"===t(c).css("position")&&(s=e-i-n),t(o+" "+a).css("height",s),"undefined"!=typeof t.fn.overlayScrollbars&&t(o+" "+a).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})}},e._jQueryInterface=function(n){return this.each((function(){var s=t(this).data(i),o=t.extend({},E,t(this).data());if(s||(s=new e(this,o),t(this).data(i,s)),"undefined"===s[n])throw new Error(n+" is not a function");s[n]()}))},e}();return t(document).on("click",r,(function(e){e.preventDefault(),A._jQueryInterface.call(t(this),"toggle")})),t.fn[e]=A._jQueryInterface,t.fn[e].Constructor=A,t.fn[e].noConflict=function(){return t.fn[e]=n,A._jQueryInterface},A}(jQuery),i=function(t){var e="Layout",i=t.fn[e],n=".main-header",s=".main-sidebar",o=".main-sidebar .sidebar",a=".content-wrapper",r=".control-sidebar-content",l='[data-widget="control-sidebar"]',c=".main-footer",d='[data-widget="pushmenu"]',h=".login-box",f=".register-box",u="sidebar-focused",g="layout-fixed",p="control-sidebar-slide-open",_="control-sidebar-open",m={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,loginRegisterAutoHeight:!0},v=function(){function e(t,e){this._config=e,this._element=t,this._init()}var i=e.prototype;return i.fixLayoutHeight=function(e){void 0===e&&(e=null);var i=0;(t("body").hasClass(p)||t("body").hasClass(_)||"control_sidebar"==e)&&(i=t(r).height());var s={window:t(window).height(),header:0!==t(n).length?t(n).outerHeight():0,footer:0!==t(c).length?t(c).outerHeight():0,sidebar:0!==t(o).length?t(o).height():0,control_sidebar:i},l=this._max(s),d=this._config.panelAutoHeight;!0===d&&(d=0),!1!==d&&(l==s.control_sidebar?t(a).css("min-height",l+d):l==s.window?t(a).css("min-height",l+d-s.header-s.footer):t(a).css("min-height",l+d-s.header),this._isFooterFixed()&&t(a).css("min-height",parseFloat(t(a).css("min-height"))+s.footer)),t("body").hasClass(g)&&(!1!==d&&t(a).css("min-height",l+d-s.header-s.footer),"undefined"!=typeof t.fn.overlayScrollbars&&t(o).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}))},i.fixLoginRegisterHeight=function(){if(0===t(h+", "+f).length)t("body, html").css("height","auto");else if(0!==t(h+", "+f).length){var e=t(h+", "+f).height();t("body").css("min-height")!==e&&t("body").css("min-height",e)}},i._init=function(){var e=this;this.fixLayoutHeight(),!0===this._config.loginRegisterAutoHeight?this.fixLoginRegisterHeight():Number.isInteger(this._config.loginRegisterAutoHeight)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),t(o).on("collapsed.lte.treeview expanded.lte.treeview",(function(){e.fixLayoutHeight()})),t(d).on("collapsed.lte.pushmenu shown.lte.pushmenu",(function(){e.fixLayoutHeight()})),t(l).on("collapsed.lte.controlsidebar",(function(){e.fixLayoutHeight()})).on("expanded.lte.controlsidebar",(function(){e.fixLayoutHeight("control_sidebar")})),t(window).resize((function(){e.fixLayoutHeight()})),setTimeout((function(){t("body.hold-transition").removeClass("hold-transition")}),50)},i._max=function(t){var e=0;return Object.keys(t).forEach((function(i){t[i]>e&&(e=t[i])})),e},i._isFooterFixed=function(){return"fixed"===t(".main-footer").css("position")},e._jQueryInterface=function(i){return void 0===i&&(i=""),this.each((function(){var n=t(this).data("lte.layout"),s=t.extend({},m,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.layout",n)),"init"===i||""===i?n._init():"fixLayoutHeight"!==i&&"fixLoginRegisterHeight"!==i||n[i]()}))},e}();return t(window).on("load",(function(){v._jQueryInterface.call(t("body"))})),t(o+" a").on("focusin",(function(){t(s).addClass(u)})),t(o+" a").on("focusout",(function(){t(s).removeClass(u)})),t.fn[e]=v._jQueryInterface,t.fn[e].Constructor=v,t.fn[e].noConflict=function(){return t.fn[e]=i,v._jQueryInterface},v}(jQuery),n=function(t){var e="PushMenu",i=".lte.pushmenu",n=t.fn[e],s={COLLAPSED:"collapsed"+i,SHOWN:"shown"+i},o={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},a='[data-widget="pushmenu"]',r="body",l="#sidebar-overlay",c=".wrapper",d="sidebar-collapse",h="sidebar-open",f="sidebar-closed",u=function(){function e(e,i){this._element=e,this._options=t.extend({},o,i),t(l).length||this._addOverlay(),this._init()}var n=e.prototype;return n.expand=function(){this._options.autoCollapseSize&&t(window).width()<=this._options.autoCollapseSize&&t(r).addClass(h),t(r).removeClass(d).removeClass(f),this._options.enableRemember&&localStorage.setItem("remember"+i,h);var e=t.Event(s.SHOWN);t(this._element).trigger(e)},n.collapse=function(){this._options.autoCollapseSize&&t(window).width()<=this._options.autoCollapseSize&&t(r).removeClass(h).addClass(f),t(r).addClass(d),this._options.enableRemember&&localStorage.setItem("remember"+i,d);var e=t.Event(s.COLLAPSED);t(this._element).trigger(e)},n.toggle=function(){t(r).hasClass(d)?this.expand():this.collapse()},n.autoCollapse=function(e){void 0===e&&(e=!1),this._options.autoCollapseSize&&(t(window).width()<=this._options.autoCollapseSize?t(r).hasClass(h)||this.collapse():1==e&&(t(r).hasClass(h)?t(r).removeClass(h):t(r).hasClass(f)&&this.expand()))},n.remember=function(){this._options.enableRemember&&(localStorage.getItem("remember"+i)==d?this._options.noTransitionAfterReload?t("body").addClass("hold-transition").addClass(d).delay(50).queue((function(){t(this).removeClass("hold-transition"),t(this).dequeue()})):t("body").addClass(d):this._options.noTransitionAfterReload?t("body").addClass("hold-transition").removeClass(d).delay(50).queue((function(){t(this).removeClass("hold-transition"),t(this).dequeue()})):t("body").removeClass(d))},n._init=function(){var e=this;this.remember(),this.autoCollapse(),t(window).resize((function(){e.autoCollapse(!0)}))},n._addOverlay=function(){var e=this,i=t("<div />",{id:"sidebar-overlay"});i.on("click",(function(){e.collapse()})),t(c).append(i)},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.pushmenu"),s=t.extend({},o,t(this).data());n||(n=new e(this,s),t(this).data("lte.pushmenu",n)),"string"==typeof i&&i.match(/collapse|expand|toggle/)&&n[i]()}))},e}();return t(document).on("click",a,(function(e){e.preventDefault();var i=e.currentTarget;"pushmenu"!==t(i).data("widget")&&(i=t(i).closest(a)),u._jQueryInterface.call(t(i),"toggle")})),t(window).on("load",(function(){u._jQueryInterface.call(t(a))})),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=n,u._jQueryInterface},u}(jQuery),s=function(t){var e="Treeview",i=t.fn[e],n={SELECTED:"selected.lte.treeview",EXPANDED:"expanded.lte.treeview",COLLAPSED:"collapsed.lte.treeview",LOAD_DATA_API:"load.lte.treeview"},s=".nav-item",o=".nav-treeview",a=".menu-open",r='[data-widget="treeview"]',l="menu-open",c="sidebar-collapse",d={trigger:r+" "+".nav-link",animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},h=function(){function e(t,e){this._config=e,this._element=t}var i=e.prototype;return i.init=function(){this._setupListeners()},i.expand=function(e,i){var s=this,r=t.Event(n.EXPANDED);if(this._config.accordion){var c=i.siblings(a).first(),d=c.find(o).first();this.collapse(d,c)}e.stop().slideDown(this._config.animationSpeed,(function(){i.addClass(l),t(s._element).trigger(r)})),this._config.expandSidebar&&this._expandSidebar()},i.collapse=function(e,i){var s=this,r=t.Event(n.COLLAPSED);e.stop().slideUp(this._config.animationSpeed,(function(){i.removeClass(l),t(s._element).trigger(r),e.find(a+" > "+o).slideUp(),e.find(a).removeClass(l)}))},i.toggle=function(e){var i=t(e.currentTarget),n=i.parent(),a=n.find("> "+o);if(a.is(o)||(n.is(s)||(a=n.parent().find("> "+o)),a.is(o))){e.preventDefault();var r=i.parents(s).first();r.hasClass(l)?this.collapse(t(a),r):this.expand(t(a),r)}},i._setupListeners=function(){var e=this;t(document).on("click",this._config.trigger,(function(t){e.toggle(t)}))},i._expandSidebar=function(){t("body").hasClass(c)&&t(this._config.sidebarButtonSelector).PushMenu("expand")},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.treeview"),s=t.extend({},d,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.treeview",n)),"init"===i&&n[i]()}))},e}();return t(window).on(n.LOAD_DATA_API,(function(){t(r).each((function(){h._jQueryInterface.call(t(this),"init")}))})),t.fn[e]=h._jQueryInterface,t.fn[e].Constructor=h,t.fn[e].noConflict=function(){return t.fn[e]=i,h._jQueryInterface},h}(jQuery),o=function(t){var e="DirectChat",i=t.fn[e],n="toggled{EVENT_KEY}",s='[data-widget="chat-pane-toggle"]',o=".direct-chat",a="direct-chat-contacts-open",r=function(){function e(t,e){this._element=t}return e.prototype.toggle=function(){t(this._element).parents(o).first().toggleClass(a);var e=t.Event(n);t(this._element).trigger(e)},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.directchat");n||(n=new e(t(this)),t(this).data("lte.directchat",n)),n[i]()}))},e}();return t(document).on("click",s,(function(e){e&&e.preventDefault(),r._jQueryInterface.call(t(this),"toggle")})),t.fn[e]=r._jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=function(){return t.fn[e]=i,r._jQueryInterface},r}(jQuery),a=function(t){var e="TodoList",i=t.fn[e],n='[data-widget="todo-list"]',s="done",o={onCheck:function(t){return t},onUnCheck:function(t){return t}},a=function(){function e(t,e){this._config=e,this._element=t,this._init()}var i=e.prototype;return i.toggle=function(e){e.parents("li").toggleClass(s),t(e).prop("checked")?this.check(e):this.unCheck(t(e))},i.check=function(t){this._config.onCheck.call(t)},i.unCheck=function(t){this._config.onUnCheck.call(t)},i._init=function(){var e=this;t(n).find("input:checkbox:checked").parents("li").toggleClass(s),t(n).on("change","input:checkbox",(function(i){e.toggle(t(i.target))}))},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.todolist"),s=t.extend({},o,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.todolist",n)),"init"===i&&n[i]()}))},e}();return t(window).on("load",(function(){a._jQueryInterface.call(t(n))})),t.fn[e]=a._jQueryInterface,t.fn[e].Constructor=a,t.fn[e].noConflict=function(){return t.fn[e]=i,a._jQueryInterface},a}(jQuery),r=function(t){var e="CardWidget",i=".lte.cardwidget",n=t.fn[e],s={EXPANDED:"expanded"+i,COLLAPSED:"collapsed"+i,MAXIMIZED:"maximized"+i,MINIMIZED:"minimized"+i,REMOVED:"removed"+i},o="card",a="collapsed-card",r="collapsing-card",l="expanding-card",c="was-collapsed",d="maximized-card",h={DATA_REMOVE:'[data-card-widget="remove"]',DATA_COLLAPSE:'[data-card-widget="collapse"]',DATA_MAXIMIZE:'[data-card-widget="maximize"]',CARD:"."+o,CARD_HEADER:".card-header",CARD_BODY:".card-body",CARD_FOOTER:".card-footer",COLLAPSED:"."+a},f={animationSpeed:"normal",collapseTrigger:h.DATA_COLLAPSE,removeTrigger:h.DATA_REMOVE,maximizeTrigger:h.DATA_MAXIMIZE,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},u=function(){function e(e,i){this._element=e,this._parent=e.parents(h.CARD).first(),e.hasClass(o)&&(this._parent=e),this._settings=t.extend({},f,i)}var i=e.prototype;return i.collapse=function(){var e=this;this._parent.addClass(r).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideUp(this._settings.animationSpeed,(function(){e._parent.addClass(a).removeClass(r)})),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon);var i=t.Event(s.COLLAPSED);this._element.trigger(i,this._parent)},i.expand=function(){var e=this;this._parent.addClass(l).children(h.CARD_BODY+", "+h.CARD_FOOTER).slideDown(this._settings.animationSpeed,(function(){e._parent.removeClass(a).removeClass(l)})),this._parent.find("> "+h.CARD_HEADER+" "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon);var i=t.Event(s.EXPANDED);this._element.trigger(i,this._parent)},i.remove=function(){this._parent.slideUp();var e=t.Event(s.REMOVED);this._element.trigger(e,this._parent)},i.toggle=function(){this._parent.hasClass(a)?this.expand():this.collapse()},i.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue((function(){t(this).addClass(d),t("html").addClass(d),t(this).hasClass(a)&&t(this).addClass(c),t(this).dequeue()}));var e=t.Event(s.MAXIMIZED);this._element.trigger(e,this._parent)},i.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height:"+this._parent[0].style.height+" !important;width:"+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue((function(){t(this).removeClass(d),t("html").removeClass(d),t(this).css({height:"inherit",width:"inherit"}),t(this).hasClass(c)&&t(this).removeClass(c),t(this).dequeue()}));var e=t.Event(s.MINIMIZED);this._element.trigger(e,this._parent)},i.toggleMaximize=function(){this._parent.hasClass(d)?this.minimize():this.maximize()},i._init=function(e){var i=this;this._parent=e,t(this).find(this._settings.collapseTrigger).click((function(){i.toggle()})),t(this).find(this._settings.maximizeTrigger).click((function(){i.toggleMaximize()})),t(this).find(this._settings.removeTrigger).click((function(){i.remove()}))},e._jQueryInterface=function(i){var n=t(this).data("lte.cardwidget"),s=t.extend({},f,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.cardwidget","string"==typeof i?n:i)),"string"==typeof i&&i.match(/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/)?n[i]():"object"==typeof i&&n._init(t(this))},e}();return t(document).on("click",h.DATA_COLLAPSE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"toggle")})),t(document).on("click",h.DATA_REMOVE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"remove")})),t(document).on("click",h.DATA_MAXIMIZE,(function(e){e&&e.preventDefault(),u._jQueryInterface.call(t(this),"toggleMaximize")})),t.fn[e]=u._jQueryInterface,t.fn[e].Constructor=u,t.fn[e].noConflict=function(){return t.fn[e]=n,u._jQueryInterface},u}(jQuery),l=function(t){var e="CardRefresh",i=t.fn[e],n={LOADED:"loaded.lte.cardrefresh",OVERLAY_ADDED:"overlay.added.lte.cardrefresh",OVERLAY_REMOVED:"overlay.removed.lte.cardrefresh"},s="card",o={CARD:"."+s,DATA_REFRESH:'[data-card-widget="card-refresh"]'},a={source:"",sourceSelector:"",params:{},trigger:o.DATA_REFRESH,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(t){return t}},r=function(){function e(e,i){if(this._element=e,this._parent=e.parents(o.CARD).first(),this._settings=t.extend({},a,i),this._overlay=t(this._settings.overlayTemplate),e.hasClass(s)&&(this._parent=e),""===this._settings.source)throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var i=e.prototype;return i.load=function(){this._addOverlay(),this._settings.onLoadStart.call(t(this)),t.get(this._settings.source,this._settings.params,function(e){this._settings.loadInContent&&(""!=this._settings.sourceSelector&&(e=t(e).find(this._settings.sourceSelector).html()),this._parent.find(this._settings.content).html(e)),this._settings.onLoadDone.call(t(this),e),this._removeOverlay()}.bind(this),""!==this._settings.responseType&&this._settings.responseType);var e=t.Event(n.LOADED);t(this._element).trigger(e)},i._addOverlay=function(){this._parent.append(this._overlay);var e=t.Event(n.OVERLAY_ADDED);t(this._element).trigger(e)},i._removeOverlay=function(){this._parent.find(this._overlay).remove();var e=t.Event(n.OVERLAY_REMOVED);t(this._element).trigger(e)},i._init=function(e){var i=this;t(this).find(this._settings.trigger).on("click",(function(){i.load()})),this._settings.loadOnInit&&this.load()},e._jQueryInterface=function(i){var n=t(this).data("lte.cardrefresh"),s=t.extend({},a,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.cardrefresh","string"==typeof i?n:i)),"string"==typeof i&&i.match(/load/)?n[i]():n._init(t(this))},e}();return t(document).on("click",o.DATA_REFRESH,(function(e){e&&e.preventDefault(),r._jQueryInterface.call(t(this),"load")})),t(document).ready((function(){t(o.DATA_REFRESH).each((function(){r._jQueryInterface.call(t(this))}))})),t.fn[e]=r._jQueryInterface,t.fn[e].Constructor=r,t.fn[e].noConflict=function(){return t.fn[e]=i,r._jQueryInterface},r}(jQuery),c=function(t){var e="Dropdown",i=t.fn[e],n=".navbar",s=".dropdown-menu",o=".dropdown-menu.show",a='[data-toggle="dropdown"]',r="dropdown-menu-right",l={},c=function(){function e(t,e){this._config=e,this._element=t}var i=e.prototype;return i.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(".dropdown-menu").first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",(function(e){t(".dropdown-submenu .show").removeClass("show").hide()}))},i.fixPosition=function(){var e=t(o);if(0!==e.length){e.hasClass(r)?(e.css("left","inherit"),e.css("right",0)):(e.css("left",0),e.css("right","inherit"));var i=e.offset(),n=e.width(),s=t(window).width()-i.left;i.left<0?(e.css("left","inherit"),e.css("right",i.left-5)):s<n&&(e.css("left","inherit"),e.css("right",0))}},e._jQueryInterface=function(i){return this.each((function(){var n=t(this).data("lte.dropdown"),s=t.extend({},l,t(this).data());n||(n=new e(t(this),s),t(this).data("lte.dropdown",n)),"toggleSubmenu"!==i&&"fixPosition"!=i||n[i]()}))},e}();return t(s+" "+a).on("click",(function(e){e.preventDefault(),e.stopPropagation(),c._jQueryInterface.call(t(this),"toggleSubmenu")})),t(n+" "+a).on("click",(function(e){e.preventDefault(),setTimeout((function(){c._jQueryInterface.call(t(this),"fixPosition")}),1)})),t.fn[e]=c._jQueryInterface,t.fn[e].Constructor=c,t.fn[e].noConflict=function(){return t.fn[e]=i,c._jQueryInterface},c}(jQuery),d=function(t){var e="Toasts",i=t.fn[e],n={INIT:"init.lte.toasts",CREATED:"created.lte.toasts",REMOVED:"removed.lte.toasts"},s="#toastsContainerTopRight",o="#toastsContainerTopLeft",a="#toastsContainerBottomRight",r="#toastsContainerBottomLeft",l="toasts-top-right",c="toasts-top-left",d="toasts-bottom-right",h="toasts-bottom-left",f="topRight",u="topLeft",g="bottomRight",p="bottomLeft",_={position:f,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},m=function(){function e(e,i){this._config=i,this._prepareContainer();var s=t.Event(n.INIT);t("body").trigger(s)}var i=e.prototype;return i.create=function(){var e=t('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');e.data("autohide",this._config.autohide),e.data("animation",this._config.fade),this._config.class&&e.addClass(this._config.class),this._config.delay&&500!=this._config.delay&&e.data("delay",this._config.delay);var i=t('<div class="toast-header">');if(null!=this._config.image){var s=t("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);null!=this._config.imageHeight&&s.height(this._config.imageHeight).width("auto"),i.append(s)}if(null!=this._config.icon&&i.append(t("<i />").addClass("mr-2").addClass(this._config.icon)),null!=this._config.title&&i.append(t("<strong />").addClass("mr-auto").html(this._config.title)),null!=this._config.subtitle&&i.append(t("<small />").html(this._config.subtitle)),1==this._config.close){var o=t('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');null==this._config.title&&o.toggleClass("ml-2 ml-auto"),i.append(o)}e.append(i),null!=this._config.body&&e.append(t('<div class="toast-body" />').html(this._config.body)),t(this._getContainerId()).prepend(e);var a=t.Event(n.CREATED);t("body").trigger(a),e.toast("show"),this._config.autoremove&&e.on("hidden.bs.toast",(function(){t(this).delay(200).remove();var e=t.Event(n.REMOVED);t("body").trigger(e)}))},i._getContainerId=function(){return this._config.position==f?s:this._config.position==u?o:this._config.position==g?a:this._config.position==p?r:void 0},i._prepareContainer=function(){if(0===t(this._getContainerId()).length){var e=t("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==f?e.addClass(l):this._config.position==u?e.addClass(c):this._config.position==g?e.addClass(d):this._config.position==p&&e.addClass(h),t("body").append(e)}this._config.fixed?t(this._getContainerId()).addClass("fixed"):t(this._getContainerId()).removeClass("fixed")},e._jQueryInterface=function(i,n){return this.each((function(){var s=t.extend({},_,n),o=new e(t(this),s);"create"===i&&o[i]()}))},e}();return t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=i,m._jQueryInterface},m}(jQuery);t.CardRefresh=l,t.CardWidget=r,t.ControlSidebar=e,t.DirectChat=o,t.Dropdown=c,t.Layout=i,t.PushMenu=n,t.Toasts=d,t.TodoList=a,t.Treeview=s,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=adminlte.min.js.map
/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict'

  var $sidebar   = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray',
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange',
  ]

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  var $no_border_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', {'class': 'mb-1'}).append($no_border_checkbox).append('<span>No Navbar border</span>')
  $container.append($no_border_container)

  var $text_sm_body_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', {'class': 'mb-1'}).append($text_sm_body_checkbox).append('<span>Body small text</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', {'class': 'mb-1'}).append($text_sm_header_checkbox).append('<span>Navbar small text</span>')
  $container.append($text_sm_header_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', {'class': 'mb-1'}).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', {'class': 'mb-1'}).append($text_sm_footer_checkbox).append('<span>Footer small text</span>')
  $container.append($text_sm_footer_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', {'class': 'mb-1'}).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', {'class': 'mb-1'}).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', {'class': 'mb-1'}).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', {'class': 'mb-1'}).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>')
  $container.append($child_indent_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', {'class': 'mb-1'}).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>')
  $container.append($no_expand_sidebar_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', {'class': 'mb-4'}).append($text_sm_brand_checkbox).append('<span>Brand small text</span>')
  $container.append($text_sm_brand_container)

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants        = $('<div />', {
    'class': 'd-flex'
  })
  var navbar_all_colors       = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color')
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
    } else {
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color         = $(this).data('color')
    var accent_class = color
    var $body      = $('body')
    accent_colors.map(function (skin) {
      $body.removeClass(skin)
    })

    $body.addClass(accent_class)
  }))

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_light)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    })

    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width       : '40px',
        height      : '20px',
        borderRadius: '25px',
        marginRight : 10,
        marginBottom: 10,
        opacity     : 0.8,
        cursor      : 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }

  $('.product-image-thumb').on('click', function() {
    const image_element = $(this).find('img');
    $('.product-image').prop('src', $(image_element).attr('src'))
    $('.product-image-thumb.active').removeClass('active');
    $(this).addClass('active');
  });
})(jQuery)

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(d){var e=function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd)var e=d.fn.select2.amd;var t,n,i,h,o,s,f,g,m,v,y,_,r,a,w,l;function b(e,t){return r.call(e,t)}function c(e,t){var n,i,r,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),--u;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;--u){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;--d)if(r=(r=f[h.slice(0,d).join("/")])&&r[i]){o=r,a=u;break}if(o)break;!l&&g&&g[i]&&(l=g[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?u(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},r=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,i,r=u(e),o=r[0],s=t[1];return e=r[1],o&&(n=D(o=c(o,s))),o?e=n&&n.normalize?n.normalize(e,(i=s,function(e){return c(e,i)})):c(e,s):(o=(r=u(e=c(e,s)))[0],e=r[1],o&&(n=D(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:(t=e,function(){return y&&y.config&&y.config[t]||{}})};var t}},o=function(e,t,n,i){var r,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)r=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(i,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(r&&r.exports!==h&&r.exports!==m[e]?m[e]=r.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,i,r){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=r),i?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=d||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var r={};function u(e){var t=e.prototype,n=[];for(var i in t){"function"==typeof t[i]&&"constructor"!==i&&n.push(i)}return n}r.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r.Decorate=function(i,r){var e=u(r),t=u(i);function o(){var e=Array.prototype.unshift,t=r.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=r.prototype.constructor),n.apply(this,arguments)}r.displayName=i.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=i.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=r.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},r.Observable=e,r.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},r.bind=function(e,t){return function(){e.apply(t,arguments)}},r._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},r.hasScroll=function(e,t){var n=o(t),i=t.style.overflowX,r=t.style.overflowY;return(i!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===i||"scroll"===r||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},r.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},r.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},r.__cache={};var n=0;return r.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},r.StoreData=function(e,t,n){var i=r.GetUniqueElementId(e);r.__cache[i]||(r.__cache[i]={}),r.__cache[i][t]=n},r.GetData=function(e,t){var n=r.GetUniqueElementId(e);return t?r.__cache[n]&&null!=r.__cache[n][t]?r.__cache[n][t]:o(e).data(t):r.__cache[n]},r.RemoveData=function(e){var t=r.GetUniqueElementId(e);null!=r.__cache[t]&&delete r.__cache[t],e.removeAttribute("data-select2-id")},r}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var r in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[r];t.setAttribute(r,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var r=t.eq(i);r.trigger("mouseenter");var o=l.$results.offset().top,s=r.offset().top,a=l.$results.scrollTop()+(s-o);0===i?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var r=l.$results.offset().top+l.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),s=l.$results.scrollTop()+o-r;0===n?l.$results.scrollTop(0):r<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,r=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),r=n(e,t);null==r?t.style.display="none":"string"==typeof r?t.innerHTML=i(r):h(t).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,r){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return i.Extend(o,i.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,i=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===r.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&i.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(t,e){var n=this;r.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var r=t.title||t.text;r?n.attr("title",r):n.removeAttr("title")}else this.clear()},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(r,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.isDisabled()){var t=r(this).parent(),n=l.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=this.selectionContainer(),o=this.display(i,r);r.append(o);var s=i.title||i.text;s&&r.attr("title",s),l.StoreData(r[0],"data",i),t.push(r)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(r,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),r=this.$element.val();this.$element.val(this.placeholder.id);var o={data:i};if(this.trigger("clear",o),o.prevented)this.$element.val(r);else{for(var s=0;s<i.length;s++)if(o={data:i[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(r);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=r('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),t.on("open",function(){i.$search.attr("aria-controls",r),i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){i.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,r)){t=t||{};var n=s.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(r){var o=this;if(r.selected=!0,l(r.element).is("option"))return r.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(r=[r]).push.apply(r,e);for(var n=0;n<r.length;n++){var i=r[n].id;-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=r.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(r){var o=this;if(this.$element.prop("multiple")){if(r.selected=!1,l(r.element).is("option"))return r.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==r.id&&-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var r=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(i,t);null!==n&&r.push(n)}}),e({results:r})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],r=0;r<n.length;r++){var o=l(n[r]),s=this.item(o);i.push(s)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return f.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),r=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,i)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}r.push(p)}}return r},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var i=o.ajax(e);return i.then(t),i.fail(n),i}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var r=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=r.processResults(e,n);r.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,r=0;r<i.length;r++){var o=i[r],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var r=this;t.term=t.term||"";var i=this.tokenizer(t,this.options,function(e){var t,n=r._normalizeItem(e);if(!r.$element.find("option").filter(function(){return d(this).val()===n.id}).length){var i=r.option(n);i.attr("data-select2-tag",!0),r._removeOldTags(),r.addOptions([i])}t=n,r.trigger("select",{data:t})});i.term!==t.term&&(this.$search.length&&(this.$search.val(i.term),this.$search.trigger("focus")),t.term=i.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var r=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,r)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(i(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var i=this;this.current(function(e){var t=null!=e?e.length:0;0<i.maximumSelectionLength&&t>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.attr("aria-controls",r),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,r="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+r+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+r)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<r.top-s,u=l>r.bottom+s,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=o.top-h.top-s),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var r=o.GetData(i[0],"data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,w,$,b,A,x,D,S,C,E,O,T,q,j,L,I,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=$:null!=e.data?e.dataAdapter=w:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,b)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,L))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=C;else{var i=y.Decorate(C,E);e.dropdownAdapter=i}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,I)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var r=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,r)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=c.extend(!0,{},n),r=n.children.length-1;0<=r;r--)null==e(t,n.children[r])&&i.children.splice(r,1);return 0<i.children.length?i:e(t,i)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],i=0;i<t.length;i++)if(n.push(t[i]),"string"==typeof t[i]&&0<t[i].indexOf("-")){var r=t[i].split("-")[0];n.push(r)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,i=0;i<e.length;i++){var r=new s,o=e[i];if("string"==typeof o)try{r=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,r=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else r=c.isPlainObject(o)?new s(o):o;n.extend(r)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var i=y._convertData(n);c.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,r,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=r.applyFromElement(this.options,t)),this.options=r.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var r=0;r<e[0].attributes.length;r++){var o=e[0].attributes[r].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,i){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var i=this.options.get("dataAdapter");this.dataAdapter=new i(e,this.options);var r=this.render();this._placeContainer(r);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,r);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,r);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,i)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(e),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var r=0;r<t.addedNodes.length;r++){t.addedNodes[r].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(i._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),i=this;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var r=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,r,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("select2/compat/utils",["jquery"],function(s){return{syncCssClasses:function(e,t,n){var i,r,o=[];(i=s.trim(e.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&o.push(this)}),(i=s.trim(t.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=n(this))&&o.push(r)}),e.attr("class",o.join(" "))}}}),e.define("select2/compat/containerCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("containerCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptContainerCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("containerCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/dropdownCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("dropdownCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptDropdownCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("dropdownCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/initSelection",["jquery"],function(i){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return e.prototype.current=function(e,t){var n=this;this._isInitialized?e.call(this,t):this.initSelection.call(null,this.$element,function(e){n._isInitialized=!0,i.isArray(e)||(e=[e]),t(e)})},e}),e.define("select2/compat/inputData",["jquery","../utils"],function(s,i){function e(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return e.prototype.current=function(e,t){function i(e,t){var n=[];return e.selected||-1!==s.inArray(e.id,t)?(e.selected=!0,n.push(e)):e.selected=!1,e.children&&n.push.apply(n,i(e.children,t)),n}for(var n=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r];n.push.apply(n,i(o,this.$element.val().split(this._valueSeparator)))}t(n)},e.prototype.select=function(e,t){if(this.options.get("multiple")){var n=this.$element.val();n+=this._valueSeparator+t.id,this.$element.val(n),this.$element.trigger("input").trigger("change")}else this.current(function(e){s.map(e,function(e){e.selected=!1})}),this.$element.val(t.id),this.$element.trigger("input").trigger("change")},e.prototype.unselect=function(e,r){var o=this;r.selected=!1,this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];r.id!=i.id&&t.push(i.id)}o.$element.val(t.join(o._valueSeparator)),o.$element.trigger("input").trigger("change")})},e.prototype.query=function(e,t,n){for(var i=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r],s=this.matches(t,o);null!==s&&i.push(s)}n({results:i})},e.prototype.addOptions=function(e,t){var n=s.map(t,function(e){return i.GetData(e[0],"data")});this._currentData.push.apply(this._currentData,n)},e}),e.define("select2/compat/matcher",["jquery"],function(s){return function(o){return function(e,t){var n=s.extend(!0,{},t);if(null==e.term||""===s.trim(e.term))return n;if(t.children){for(var i=t.children.length-1;0<=i;i--){var r=t.children[i];o(e.term,r.text,r)||n.children.splice(i,1)}if(0<n.children.length)return n}return o(e.term,t.text,t)?n:null}}}),e.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),e.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),e.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),e.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),l=function(p){var h,f,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(p.event.fixHooks)for(var n=e.length;n;)p.event.fixHooks[e[--n]]=p.event.mouseHooks;var m=p.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;p.data(this,"mousewheel-line-height",m.getLineHeight(this)),p.data(this,"mousewheel-page-height",m.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;p.removeData(this,"mousewheel-line-height"),p.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=p(e),n=t["offsetParent"in p.fn?"offsetParent":"parent"]();return n.length||(n=p("body")),parseInt(n.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return p(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=g.call(arguments,1),r=0,o=0,s=0,a=0,l=0;if((e=p.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*s,s=0),r=0===s?o:s,"deltaY"in n&&(r=s=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===s&&(r=-1*o)),0!==s||0!==o){if(1===n.deltaMode){var c=p.data(this,"mousewheel-line-height");r*=c,s*=c,o*=c}else if(2===n.deltaMode){var u=p.data(this,"mousewheel-page-height");r*=u,s*=u,o*=u}if(t=Math.max(Math.abs(s),Math.abs(o)),(!f||t<f)&&y(n,f=t)&&(f/=40),y(n,t)&&(r/=40,o/=40,s/=40),r=Math[1<=r?"floor":"ceil"](r/f),o=Math[1<=o?"floor":"ceil"](o/f),s=Math[1<=s?"floor":"ceil"](s/f),m.settings.normalizeOffset&&this.getBoundingClientRect){var d=this.getBoundingClientRect();a=e.clientX-d.left,l=e.clientY-d.top}return e.deltaX=o,e.deltaY=s,e.deltaFactor=f,e.offsetX=a,e.offsetY=l,e.deltaMode=0,i.unshift(e,r,o,s),h&&clearTimeout(h),h=setTimeout(v,200),(p.event.dispatch||p.event.handle).apply(this,i)}}function v(){f=null}function y(e,t){return m.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}p.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof e.define&&e.define.amd?e.define("jquery-mousewheel",["jquery"],l):"object"==typeof exports?module.exports=l:l(d),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(r,e,o,t,s){if(null==r.fn.select2){var a=["open","close","destroy"];r.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=r.extend(!0,{},t);new o(r(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<r.inArray(t,a)?this:n}}return null==r.fn.select2.defaults&&(r.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return d.fn.select2.amd=e,t});
/*!
 * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).bsCustomFileInput=t()}(this,function(){"use strict";var s={CUSTOMFILE:'.custom-file input[type="file"]',CUSTOMFILELABEL:".custom-file-label",FORM:"form",INPUT:"input"},l=function(e){if(0<e.childNodes.length)for(var t=[].slice.call(e.childNodes),n=0;n<t.length;n++){var l=t[n];if(3!==l.nodeType)return l}return e},u=function(e){var t=e.bsCustomFileInput.defaultText,n=e.parentNode.querySelector(s.CUSTOMFILELABEL);n&&(l(n).textContent=t)},n=!!window.File,r=function(e){if(e.hasAttribute("multiple")&&n)return[].slice.call(e.files).map(function(e){return e.name}).join(", ");if(-1===e.value.indexOf("fakepath"))return e.value;var t=e.value.split("\\");return t[t.length-1]};function d(){var e=this.parentNode.querySelector(s.CUSTOMFILELABEL);if(e){var t=l(e),n=r(this);n.length?t.textContent=n:u(this)}}function v(){for(var e=[].slice.call(this.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),t=0,n=e.length;t<n;t++)u(e[t])}var p="bsCustomFileInput",m="reset",h="change";return{init:function(e,t){void 0===e&&(e=s.CUSTOMFILE),void 0===t&&(t=s.FORM);for(var n,l,r=[].slice.call(document.querySelectorAll(e)),i=[].slice.call(document.querySelectorAll(t)),o=0,u=r.length;o<u;o++){var c=r[o];Object.defineProperty(c,p,{value:{defaultText:(n=void 0,n="",(l=c.parentNode.querySelector(s.CUSTOMFILELABEL))&&(n=l.textContent),n)},writable:!0}),d.call(c),c.addEventListener(h,d)}for(var f=0,a=i.length;f<a;f++)i[f].addEventListener(m,v),Object.defineProperty(i[f],p,{value:!0,writable:!0})},destroy:function(){for(var e=[].slice.call(document.querySelectorAll(s.FORM)).filter(function(e){return!!e.bsCustomFileInput}),t=[].slice.call(document.querySelectorAll(s.INPUT)).filter(function(e){return!!e.bsCustomFileInput}),n=0,l=t.length;n<l;n++){var r=t[n];u(r),r[p]=void 0,r.removeEventListener(h,d)}for(var i=0,o=e.length;i<o;i++)e[i].removeEventListener(m,v),e[i][p]=void 0}}});
//# sourceMappingURL=bs-custom-file-input.min.js.map

/*!
 * 
 * Super simple wysiwyg editor v0.8.18
 * https://summernote.org
 * 
 * 
 * Copyright 2013- Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license.
 * 
 * Date: 2020-05-20T18:09Z
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jquery"));
	else if(typeof define === 'function' && define.amd)
		define(["jquery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jquery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Renderer = /*#__PURE__*/function () {
  function Renderer(markup, children, options, callback) {
    _classCallCheck(this, Renderer);

    this.markup = markup;
    this.children = children;
    this.options = options;
    this.callback = callback;
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render($parent) {
      var $node = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.markup);

      if (this.options && this.options.contents) {
        $node.html(this.options.contents);
      }

      if (this.options && this.options.className) {
        $node.addClass(this.options.className);
      }

      if (this.options && this.options.data) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(this.options.data, function (k, v) {
          $node.attr('data-' + k, v);
        });
      }

      if (this.options && this.options.click) {
        $node.on('click', this.options.click);
      }

      if (this.children) {
        var $container = $node.find('.note-children-container');
        this.children.forEach(function (child) {
          child.render($container.length ? $container : $node);
        });
      }

      if (this.callback) {
        this.callback($node, this.options);
      }

      if (this.options && this.options.callback) {
        this.options.callback($node);
      }

      if ($parent) {
        $parent.append($node);
      }

      return $node;
    }
  }]);

  return Renderer;
}();

/* harmony default export */ __webpack_exports__["a"] = ({
  create: function create(markup, callback) {
    return function () {
      var options = _typeof(arguments[1]) === 'object' ? arguments[1] : arguments[0];
      var children = Array.isArray(arguments[0]) ? arguments[0] : [];

      if (options && options.children) {
        children = options.children;
      }

      return new Renderer(markup, children, options, callback);
    };
  }
});

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

// CONCATENATED MODULE: ./src/js/base/summernote-en-US.js

external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote || {
  lang: {}
};
external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang, {
  'ru-RU': {
    font: {
      bold: 'Полужирный',
      italic: 'Курсив',
      underline: 'Подчёркнутый',
      clear: 'Убрать стили шрифта',
      height: 'Высота линии',
      name: 'Шрифт',
      strikethrough: 'Зачёркнутый',
      subscript: 'Нижний индекс',
      superscript: 'Верхний индекс',
      size: 'Размер шрифта'
    },
    image: {
      image: 'Картинка',
      insert: 'Вставить картинку',
      resizeFull: 'Восстановить размер',
      resizeHalf: 'Уменьшить до 50%',
      resizeQuarter: 'Уменьшить до 25%',
      floatLeft: 'Расположить слева',
      floatRight: 'Расположить справа',
      floatNone: 'Расположение по-умолчанию',
      shapeRounded: 'Форма: Закругленная',
      shapeCircle: 'Форма: Круг',
      shapeThumbnail: 'Форма: Миниатюра',
      shapeNone: 'Форма: Нет',
      dragImageHere: 'Перетащите сюда картинку',
      dropImage: 'Перетащите картинку',
      selectFromFiles: 'Выбрать из файлов',
      maximumFileSize: 'Максимальный размер файла',
      maximumFileSizeError: 'Превышен максимальный размер файла',
      url: 'URL картинки',
      remove: 'Удалить картинку',
      original: 'Оригинал'
    },
    video: {
      video: 'Видео',
      videoLink: 'Ссылка на видео',
      insert: 'Вставить видео',
      url: 'URL видео',
      providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion или Youku)'
    },
    link: {
      link: 'Ссылка',
      insert: 'Вставить ссылку',
      unlink: 'Убрать ссылку',
      edit: 'Редактировать',
      textToDisplay: 'Отображаемый текст',
      url: 'URL для перехода',
      openInNewWindow: 'Открывать в новом окне'
    },
    table: {
      table: 'Таблица',
      addRowAbove: 'Добавить строку выше',
      addRowBelow: 'Добавить строку ниже',
      addColLeft: 'Добавить столбец слева',
      addColRight: 'Добавить столбец справа',
      delRow: 'Удалить строку',
      delCol: 'Удалить столбец',
      delTable: 'Удалить таблицу'
    },
    hr: {
      insert: 'Вставить горизонтальную линию'
    },
    style: {
      style: 'Стиль',
      p: 'Нормальный',
      blockquote: 'Цитата',
      pre: 'Код',
      h1: 'Заголовок 1',
      h2: 'Заголовок 2',
      h3: 'Заголовок 3',
      h4: 'Заголовок 4',
      h5: 'Заголовок 5',
      h6: 'Заголовок 6'
    },
    lists: {
      unordered: 'Маркированный список',
      ordered: 'Нумерованный список'
    },
    options: {
      help: 'Помощь',
      fullscreen: 'На весь экран',
      codeview: 'Исходный код'
    },
    paragraph: {
      paragraph: 'Параграф',
      outdent: 'Уменьшить отступ',
      indent: 'Увеличить отступ',
      left: 'Выровнять по левому краю',
      center: 'Выровнять по центру',
      right: 'Выровнять по правому краю',
      justify: 'Растянуть по ширине'
    },
    color: {
      recent: 'Последний цвет',
      more: 'Еще цвета',
      background: 'Цвет фона',
      foreground: 'Цвет шрифта',
      transparent: 'Прозрачный',
      setTransparent: 'Сделать прозрачным',
      reset: 'Сброс',
      resetToDefault: 'Восстановить умолчания'
    },
    shortcut: {
      shortcuts: 'Сочетания клавиш',
      close: 'Закрыть',
      textFormatting: 'Форматирование текста',
      action: 'Действие',
      paragraphFormatting: 'Форматирование параграфа',
      documentStyle: 'Стиль документа',
      extraKeys: 'Дополнительные комбинации'
    },
    help: {
      'insertParagraph': 'Новый параграф',
      'undo': 'Отменить последнюю команду',
      'redo': 'Повторить последнюю команду',
      'tab': 'Tab',
      'untab': 'Untab',
      'bold': 'Установить стиль "Жирный"',
      'italic': 'Установить стиль "Наклонный"',
      'underline': 'Установить стиль "Подчеркнутый"',
      'strikethrough': 'Установить стиль "Зачеркнутый"',
      'removeFormat': 'Сборсить стили',
      'justifyLeft': 'Выровнять по левому краю',
      'justifyCenter': 'Выровнять по центру',
      'justifyRight': 'Выровнять по правому краю',
      'justifyFull': 'Растянуть на всю ширину',
      'insertUnorderedList': 'Включить/отключить маркированный список',
      'insertOrderedList': 'Включить/отключить нумерованный список',
      'outdent': 'Убрать отступ в текущем параграфе',
      'indent': 'Вставить отступ в текущем параграфе',
      'formatPara': 'Форматировать текущий блок как параграф (тег P)',
      'formatH1': 'Форматировать текущий блок как H1',
      'formatH2': 'Форматировать текущий блок как H2',
      'formatH3': 'Форматировать текущий блок как H3',
      'formatH4': 'Форматировать текущий блок как H4',
      'formatH5': 'Форматировать текущий блок как H5',
      'formatH6': 'Форматировать текущий блок как H6',
      'insertHorizontalRule': 'Вставить горизонтальную черту',
      'linkDialog.show': 'Показать диалог "Ссылка"'
    },
    history: {
      undo: 'Отменить',
      redo: 'Повтор'
    },
    specialChar: {
      specialChar: 'SPECIAL CHARACTERS',
      select: 'Select Special characters'
    }
  }
});
// CONCATENATED MODULE: ./src/js/base/core/env.js

var isSupportAmd = typeof define === 'function' && __webpack_require__(2); // eslint-disable-line

/**
 * returns whether font is installed or not.
 *
 * @param {String} fontName
 * @return {Boolean}
 */

var genericFontFamilies = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

function validFontName(fontName) {
  return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.inArray(fontName.toLowerCase(), genericFontFamilies) === -1 ? "'".concat(fontName, "'") : fontName;
}

function env_isFontInstalled(fontName) {
  var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
  var testText = 'mmmmmmmmmmwwwww';
  var testSize = '200px';
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = testSize + " '" + testFontName + "'";
  var originalWidth = context.measureText(testText).width;
  context.font = testSize + ' ' + validFontName(fontName) + ', "' + testFontName + '"';
  var width = context.measureText(testText).width;
  return originalWidth !== width;
}

var userAgent = navigator.userAgent;
var isMSIE = /MSIE|Trident/i.test(userAgent);
var browserVersion;

if (isMSIE) {
  var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);

  if (matches) {
    browserVersion = parseFloat(matches[1]);
  }

  matches = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(userAgent);

  if (matches) {
    browserVersion = parseFloat(matches[1]);
  }
}

var isEdge = /Edge\/\d+/.test(userAgent);
var isSupportTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0; // [workaround] IE doesn't have input events for contentEditable
// - see: https://goo.gl/4bfIvA

var inputEventName = isMSIE ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted' : 'input';
/**
 * @class core.env
 *
 * Object which check platform and agent
 *
 * @singleton
 * @alternateClassName env
 */

/* harmony default export */ var env = ({
  isMac: navigator.appVersion.indexOf('Mac') > -1,
  isMSIE: isMSIE,
  isEdge: isEdge,
  isFF: !isEdge && /firefox/i.test(userAgent),
  isPhantom: /PhantomJS/i.test(userAgent),
  isWebkit: !isEdge && /webkit/i.test(userAgent),
  isChrome: !isEdge && /chrome/i.test(userAgent),
  isSafari: !isEdge && /safari/i.test(userAgent) && !/chrome/i.test(userAgent),
  browserVersion: browserVersion,
  jqueryVersion: parseFloat(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.jquery),
  isSupportAmd: isSupportAmd,
  isSupportTouch: isSupportTouch,
  isFontInstalled: env_isFontInstalled,
  isW3CRangeSupport: !!document.createRange,
  inputEventName: inputEventName,
  genericFontFamilies: genericFontFamilies,
  validFontName: validFontName
});
// CONCATENATED MODULE: ./src/js/base/core/func.js

/**
 * @class core.func
 *
 * func utils (for high-order func's arg)
 *
 * @singleton
 * @alternateClassName func
 */

function eq(itemA) {
  return function (itemB) {
    return itemA === itemB;
  };
}

function eq2(itemA, itemB) {
  return itemA === itemB;
}

function peq2(propName) {
  return function (itemA, itemB) {
    return itemA[propName] === itemB[propName];
  };
}

function ok() {
  return true;
}

function fail() {
  return false;
}

function not(f) {
  return function () {
    return !f.apply(f, arguments);
  };
}

function and(fA, fB) {
  return function (item) {
    return fA(item) && fB(item);
  };
}

function func_self(a) {
  return a;
}

function func_invoke(obj, method) {
  return function () {
    return obj[method].apply(obj, arguments);
  };
}

var idCounter = 0;
/**
 * reset globally-unique id
 *
 */

function resetUniqueId() {
  idCounter = 0;
}
/**
 * generate a globally-unique id
 *
 * @param {String} [prefix]
 */


function uniqueId(prefix) {
  var id = ++idCounter + '';
  return prefix ? prefix + id : id;
}
/**
 * returns bnd (bounds) from rect
 *
 * - IE Compatibility Issue: http://goo.gl/sRLOAo
 * - Scroll Issue: http://goo.gl/sNjUc
 *
 * @param {Rect} rect
 * @return {Object} bounds
 * @return {Number} bounds.top
 * @return {Number} bounds.left
 * @return {Number} bounds.width
 * @return {Number} bounds.height
 */


function rect2bnd(rect) {
  var $document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
  return {
    top: rect.top + $document.scrollTop(),
    left: rect.left + $document.scrollLeft(),
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
}
/**
 * returns a copy of the object where the keys have become the values and the values the keys.
 * @param {Object} obj
 * @return {Object}
 */


function invertObject(obj) {
  var inverted = {};

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      inverted[obj[key]] = key;
    }
  }

  return inverted;
}
/**
 * @param {String} namespace
 * @param {String} [prefix]
 * @return {String}
 */


function namespaceToCamel(namespace, prefix) {
  prefix = prefix || '';
  return prefix + namespace.split('.').map(function (name) {
    return name.substring(0, 1).toUpperCase() + name.substring(1);
  }).join('');
}
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 * @param {Function} func
 * @param {Number} wait
 * @param {Boolean} immediate
 * @return {Function}
 */


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}
/**
 *
 * @param {String} url
 * @return {Boolean}
 */


function isValidUrl(url) {
  var expression = /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  return expression.test(url);
}

/* harmony default export */ var func = ({
  eq: eq,
  eq2: eq2,
  peq2: peq2,
  ok: ok,
  fail: fail,
  self: func_self,
  not: not,
  and: and,
  invoke: func_invoke,
  resetUniqueId: resetUniqueId,
  uniqueId: uniqueId,
  rect2bnd: rect2bnd,
  invertObject: invertObject,
  namespaceToCamel: namespaceToCamel,
  debounce: debounce,
  isValidUrl: isValidUrl
});
// CONCATENATED MODULE: ./src/js/base/core/lists.js

/**
 * returns the first item of an array.
 *
 * @param {Array} array
 */

function lists_head(array) {
  return array[0];
}
/**
 * returns the last item of an array.
 *
 * @param {Array} array
 */


function lists_last(array) {
  return array[array.length - 1];
}
/**
 * returns everything but the last entry of the array.
 *
 * @param {Array} array
 */


function initial(array) {
  return array.slice(0, array.length - 1);
}
/**
 * returns the rest of the items in an array.
 *
 * @param {Array} array
 */


function tail(array) {
  return array.slice(1);
}
/**
 * returns item of array
 */


function find(array, pred) {
  for (var idx = 0, len = array.length; idx < len; idx++) {
    var item = array[idx];

    if (pred(item)) {
      return item;
    }
  }
}
/**
 * returns true if all of the values in the array pass the predicate truth test.
 */


function lists_all(array, pred) {
  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (!pred(array[idx])) {
      return false;
    }
  }

  return true;
}
/**
 * returns true if the value is present in the list.
 */


function contains(array, item) {
  if (array && array.length && item) {
    if (array.indexOf) {
      return array.indexOf(item) !== -1;
    } else if (array.contains) {
      // `DOMTokenList` doesn't implement `.indexOf`, but it implements `.contains`
      return array.contains(item);
    }
  }

  return false;
}
/**
 * get sum from a list
 *
 * @param {Array} array - array
 * @param {Function} fn - iterator
 */


function sum(array, fn) {
  fn = fn || func.self;
  return array.reduce(function (memo, v) {
    return memo + fn(v);
  }, 0);
}
/**
 * returns a copy of the collection with array type.
 * @param {Collection} collection - collection eg) node.childNodes, ...
 */


function from(collection) {
  var result = [];
  var length = collection.length;
  var idx = -1;

  while (++idx < length) {
    result[idx] = collection[idx];
  }

  return result;
}
/**
 * returns whether list is empty or not
 */


function lists_isEmpty(array) {
  return !array || !array.length;
}
/**
 * cluster elements by predicate function.
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 * @param {Array[]}
 */


function clusterBy(array, fn) {
  if (!array.length) {
    return [];
  }

  var aTail = tail(array);
  return aTail.reduce(function (memo, v) {
    var aLast = lists_last(memo);

    if (fn(lists_last(aLast), v)) {
      aLast[aLast.length] = v;
    } else {
      memo[memo.length] = [v];
    }

    return memo;
  }, [[lists_head(array)]]);
}
/**
 * returns a copy of the array with all false values removed
 *
 * @param {Array} array - array
 * @param {Function} fn - predicate function for cluster rule
 */


function compact(array) {
  var aResult = [];

  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (array[idx]) {
      aResult.push(array[idx]);
    }
  }

  return aResult;
}
/**
 * produces a duplicate-free version of the array
 *
 * @param {Array} array
 */


function unique(array) {
  var results = [];

  for (var idx = 0, len = array.length; idx < len; idx++) {
    if (!contains(results, array[idx])) {
      results.push(array[idx]);
    }
  }

  return results;
}
/**
 * returns next item.
 * @param {Array} array
 */


function lists_next(array, item) {
  if (array && array.length && item) {
    var idx = array.indexOf(item);
    return idx === -1 ? null : array[idx + 1];
  }

  return null;
}
/**
 * returns prev item.
 * @param {Array} array
 */


function prev(array, item) {
  if (array && array.length && item) {
    var idx = array.indexOf(item);
    return idx === -1 ? null : array[idx - 1];
  }

  return null;
}
/**
 * @class core.list
 *
 * list utils
 *
 * @singleton
 * @alternateClassName list
 */


/* harmony default export */ var lists = ({
  head: lists_head,
  last: lists_last,
  initial: initial,
  tail: tail,
  prev: prev,
  next: lists_next,
  find: find,
  contains: contains,
  all: lists_all,
  sum: sum,
  from: from,
  isEmpty: lists_isEmpty,
  clusterBy: clusterBy,
  compact: compact,
  unique: unique
});
// CONCATENATED MODULE: ./src/js/base/core/dom.js




var NBSP_CHAR = String.fromCharCode(160);
var ZERO_WIDTH_NBSP_CHAR = "\uFEFF";
/**
 * @method isEditable
 *
 * returns whether node is `note-editable` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */

function isEditable(node) {
  return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-editable');
}
/**
 * @method isControlSizing
 *
 * returns whether node is `note-control-sizing` or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function isControlSizing(node) {
  return node && external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).hasClass('note-control-sizing');
}
/**
 * @method makePredByNodeName
 *
 * returns predicate which judge whether nodeName is same
 *
 * @param {String} nodeName
 * @return {Function}
 */


function makePredByNodeName(nodeName) {
  nodeName = nodeName.toUpperCase();
  return function (node) {
    return node && node.nodeName.toUpperCase() === nodeName;
  };
}
/**
 * @method isText
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is text(3)
 */


function isText(node) {
  return node && node.nodeType === 3;
}
/**
 * @method isElement
 *
 *
 *
 * @param {Node} node
 * @return {Boolean} true if node's type is element(1)
 */


function isElement(node) {
  return node && node.nodeType === 1;
}
/**
 * ex) br, col, embed, hr, img, input, ...
 * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
 */


function isVoid(node) {
  return node && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(node.nodeName.toUpperCase());
}

function isPara(node) {
  if (isEditable(node)) {
    return false;
  } // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph


  return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
}

function isHeading(node) {
  return node && /^H[1-7]/.test(node.nodeName.toUpperCase());
}

var isPre = makePredByNodeName('PRE');
var isLi = makePredByNodeName('LI');

function isPurePara(node) {
  return isPara(node) && !isLi(node);
}

var isTable = makePredByNodeName('TABLE');
var isData = makePredByNodeName('DATA');

function dom_isInline(node) {
  return !isBodyContainer(node) && !isList(node) && !isHr(node) && !isPara(node) && !isTable(node) && !isBlockquote(node) && !isData(node);
}

function isList(node) {
  return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
}

var isHr = makePredByNodeName('HR');

function dom_isCell(node) {
  return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
}

var isBlockquote = makePredByNodeName('BLOCKQUOTE');

function isBodyContainer(node) {
  return dom_isCell(node) || isBlockquote(node) || isEditable(node);
}

var isAnchor = makePredByNodeName('A');

function isParaInline(node) {
  return dom_isInline(node) && !!dom_ancestor(node, isPara);
}

function isBodyInline(node) {
  return dom_isInline(node) && !dom_ancestor(node, isPara);
}

var isBody = makePredByNodeName('BODY');
/**
 * returns whether nodeB is closest sibling of nodeA
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @return {Boolean}
 */

function isClosestSibling(nodeA, nodeB) {
  return nodeA.nextSibling === nodeB || nodeA.previousSibling === nodeB;
}
/**
 * returns array of closest siblings with node
 *
 * @param {Node} node
 * @param {function} [pred] - predicate function
 * @return {Node[]}
 */


function withClosestSiblings(node, pred) {
  pred = pred || func.ok;
  var siblings = [];

  if (node.previousSibling && pred(node.previousSibling)) {
    siblings.push(node.previousSibling);
  }

  siblings.push(node);

  if (node.nextSibling && pred(node.nextSibling)) {
    siblings.push(node.nextSibling);
  }

  return siblings;
}
/**
 * blank HTML for cursor position
 * - [workaround] old IE only works with &nbsp;
 * - [workaround] IE11 and other browser works with bogus br
 */


var blankHTML = env.isMSIE && env.browserVersion < 11 ? '&nbsp;' : '<br>';
/**
 * @method nodeLength
 *
 * returns #text's text size or element's childNodes size
 *
 * @param {Node} node
 */

function nodeLength(node) {
  if (isText(node)) {
    return node.nodeValue.length;
  }

  if (node) {
    return node.childNodes.length;
  }

  return 0;
}
/**
 * returns whether deepest child node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function deepestChildIsEmpty(node) {
  do {
    if (node.firstElementChild === null || node.firstElementChild.innerHTML === '') break;
  } while (node = node.firstElementChild);

  return dom_isEmpty(node);
}
/**
 * returns whether node is empty or not.
 *
 * @param {Node} node
 * @return {Boolean}
 */


function dom_isEmpty(node) {
  var len = nodeLength(node);

  if (len === 0) {
    return true;
  } else if (!isText(node) && len === 1 && node.innerHTML === blankHTML) {
    // ex) <p><br></p>, <span><br></span>
    return true;
  } else if (lists.all(node.childNodes, isText) && node.innerHTML === '') {
    // ex) <p></p>, <span></span>
    return true;
  }

  return false;
}
/**
 * padding blankHTML if node is empty (for cursor position)
 */


function paddingBlankHTML(node) {
  if (!isVoid(node) && !nodeLength(node)) {
    node.innerHTML = blankHTML;
  }
}
/**
 * find nearest ancestor predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */


function dom_ancestor(node, pred) {
  while (node) {
    if (pred(node)) {
      return node;
    }

    if (isEditable(node)) {
      break;
    }

    node = node.parentNode;
  }

  return null;
}
/**
 * find nearest ancestor only single child blood line and predicate hit
 *
 * @param {Node} node
 * @param {Function} pred - predicate function
 */


function singleChildAncestor(node, pred) {
  node = node.parentNode;

  while (node) {
    if (nodeLength(node) !== 1) {
      break;
    }

    if (pred(node)) {
      return node;
    }

    if (isEditable(node)) {
      break;
    }

    node = node.parentNode;
  }

  return null;
}
/**
 * returns new array of ancestor nodes (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */


function listAncestor(node, pred) {
  pred = pred || func.fail;
  var ancestors = [];
  dom_ancestor(node, function (el) {
    if (!isEditable(el)) {
      ancestors.push(el);
    }

    return pred(el);
  });
  return ancestors;
}
/**
 * find farthest ancestor predicate hit
 */


function lastAncestor(node, pred) {
  var ancestors = listAncestor(node);
  return lists.last(ancestors.filter(pred));
}
/**
 * returns common ancestor node between two nodes.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 */


function dom_commonAncestor(nodeA, nodeB) {
  var ancestors = listAncestor(nodeA);

  for (var n = nodeB; n; n = n.parentNode) {
    if (ancestors.indexOf(n) > -1) return n;
  }

  return null; // difference document area
}
/**
 * listing all previous siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [optional] pred - predicate function
 */


function listPrev(node, pred) {
  pred = pred || func.fail;
  var nodes = [];

  while (node) {
    if (pred(node)) {
      break;
    }

    nodes.push(node);
    node = node.previousSibling;
  }

  return nodes;
}
/**
 * listing next siblings (until predicate hit).
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */


function listNext(node, pred) {
  pred = pred || func.fail;
  var nodes = [];

  while (node) {
    if (pred(node)) {
      break;
    }

    nodes.push(node);
    node = node.nextSibling;
  }

  return nodes;
}
/**
 * listing descendant nodes
 *
 * @param {Node} node
 * @param {Function} [pred] - predicate function
 */


function listDescendant(node, pred) {
  var descendants = [];
  pred = pred || func.ok; // start DFS(depth first search) with node

  (function fnWalk(current) {
    if (node !== current && pred(current)) {
      descendants.push(current);
    }

    for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
      fnWalk(current.childNodes[idx]);
    }
  })(node);

  return descendants;
}
/**
 * wrap node with new tag.
 *
 * @param {Node} node
 * @param {Node} tagName of wrapper
 * @return {Node} - wrapper
 */


function wrap(node, wrapperName) {
  var parent = node.parentNode;
  var wrapper = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<' + wrapperName + '>')[0];
  parent.insertBefore(wrapper, node);
  wrapper.appendChild(node);
  return wrapper;
}
/**
 * insert node after preceding
 *
 * @param {Node} node
 * @param {Node} preceding - predicate function
 */


function insertAfter(node, preceding) {
  var next = preceding.nextSibling;
  var parent = preceding.parentNode;

  if (next) {
    parent.insertBefore(node, next);
  } else {
    parent.appendChild(node);
  }

  return node;
}
/**
 * append elements.
 *
 * @param {Node} node
 * @param {Collection} aChild
 */


function appendChildNodes(node, aChild) {
  external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(aChild, function (idx, child) {
    node.appendChild(child);
  });
  return node;
}
/**
 * returns whether boundaryPoint is left edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isLeftEdgePoint(point) {
  return point.offset === 0;
}
/**
 * returns whether boundaryPoint is right edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isRightEdgePoint(point) {
  return point.offset === nodeLength(point.node);
}
/**
 * returns whether boundaryPoint is edge or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isEdgePoint(point) {
  return isLeftEdgePoint(point) || isRightEdgePoint(point);
}
/**
 * returns whether node is left edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */


function dom_isLeftEdgeOf(node, ancestor) {
  while (node && node !== ancestor) {
    if (dom_position(node) !== 0) {
      return false;
    }

    node = node.parentNode;
  }

  return true;
}
/**
 * returns whether node is right edge of ancestor or not.
 *
 * @param {Node} node
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isRightEdgeOf(node, ancestor) {
  if (!ancestor) {
    return false;
  }

  while (node && node !== ancestor) {
    if (dom_position(node) !== nodeLength(node.parentNode) - 1) {
      return false;
    }

    node = node.parentNode;
  }

  return true;
}
/**
 * returns whether point is left edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isLeftEdgePointOf(point, ancestor) {
  return isLeftEdgePoint(point) && dom_isLeftEdgeOf(point.node, ancestor);
}
/**
 * returns whether point is right edge of ancestor or not.
 * @param {BoundaryPoint} point
 * @param {Node} ancestor
 * @return {Boolean}
 */


function isRightEdgePointOf(point, ancestor) {
  return isRightEdgePoint(point) && isRightEdgeOf(point.node, ancestor);
}
/**
 * returns offset from parent.
 *
 * @param {Node} node
 */


function dom_position(node) {
  var offset = 0;

  while (node = node.previousSibling) {
    offset += 1;
  }

  return offset;
}

function hasChildren(node) {
  return !!(node && node.childNodes && node.childNodes.length);
}
/**
 * returns previous boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function dom_prevPoint(point, isSkipInnerOffset) {
  var node;
  var offset;

  if (point.offset === 0) {
    if (isEditable(point.node)) {
      return null;
    }

    node = point.node.parentNode;
    offset = dom_position(point.node);
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset - 1];
    offset = nodeLength(node);
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? 0 : point.offset - 1;
  }

  return {
    node: node,
    offset: offset
  };
}
/**
 * returns next boundaryPoint
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function dom_nextPoint(point, isSkipInnerOffset) {
  var node, offset;

  if (nodeLength(point.node) === point.offset) {
    if (isEditable(point.node)) {
      return null;
    }

    var nextTextNode = getNextTextNode(point.node);

    if (nextTextNode) {
      node = nextTextNode;
      offset = 0;
    } else {
      node = point.node.parentNode;
      offset = dom_position(point.node) + 1;
    }
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset];
    offset = 0;
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
  }

  return {
    node: node,
    offset: offset
  };
}
/**
 * returns next boundaryPoint with empty node
 *
 * @param {BoundaryPoint} point
 * @param {Boolean} isSkipInnerOffset
 * @return {BoundaryPoint}
 */


function nextPointWithEmptyNode(point, isSkipInnerOffset) {
  var node, offset; // if node is empty string node, return current node's sibling.

  if (dom_isEmpty(point.node)) {
    node = point.node.nextSibling;
    offset = 0;
    return {
      node: node,
      offset: offset
    };
  }

  if (nodeLength(point.node) === point.offset) {
    if (isEditable(point.node)) {
      return null;
    }

    var nextTextNode = getNextTextNode(point.node);

    if (nextTextNode) {
      node = nextTextNode;
      offset = 0;
    } else {
      node = point.node.parentNode;
      offset = dom_position(point.node) + 1;
    } // if next node is editable, return current node's sibling node.


    if (isEditable(node)) {
      node = point.node.nextSibling;
      offset = 0;
    }
  } else if (hasChildren(point.node)) {
    node = point.node.childNodes[point.offset];
    offset = 0;

    if (dom_isEmpty(node)) {
      return null;
    }
  } else {
    node = point.node;
    offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;

    if (dom_isEmpty(node)) {
      return null;
    }
  }

  return {
    node: node,
    offset: offset
  };
}
/*
* returns the next Text node index or 0 if not found.
*/


function getNextTextNode(actual) {
  if (!actual.nextSibling) return undefined;
  if (actual.parent !== actual.nextSibling.parent) return undefined;
  if (isText(actual.nextSibling)) return actual.nextSibling;
  return getNextTextNode(actual.nextSibling);
}
/**
 * returns whether pointA and pointB is same or not.
 *
 * @param {BoundaryPoint} pointA
 * @param {BoundaryPoint} pointB
 * @return {Boolean}
 */


function isSamePoint(pointA, pointB) {
  return pointA.node === pointB.node && pointA.offset === pointB.offset;
}
/**
 * returns whether point is visible (can set cursor) or not.
 *
 * @param {BoundaryPoint} point
 * @return {Boolean}
 */


function isVisiblePoint(point) {
  if (isText(point.node) || !hasChildren(point.node) || dom_isEmpty(point.node)) {
    return true;
  }

  var leftNode = point.node.childNodes[point.offset - 1];
  var rightNode = point.node.childNodes[point.offset];

  if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
    return true;
  }

  return false;
}
/**
 * @method prevPointUtil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */


function prevPointUntil(point, pred) {
  while (point) {
    if (pred(point)) {
      return point;
    }

    point = dom_prevPoint(point);
  }

  return null;
}
/**
 * @method nextPointUntil
 *
 * @param {BoundaryPoint} point
 * @param {Function} pred
 * @return {BoundaryPoint}
 */


function nextPointUntil(point, pred) {
  while (point) {
    if (pred(point)) {
      return point;
    }

    point = dom_nextPoint(point);
  }

  return null;
}
/**
 * returns whether point has character or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */


function isCharPoint(point) {
  if (!isText(point.node)) {
    return false;
  }

  var ch = point.node.nodeValue.charAt(point.offset - 1);
  return ch && ch !== ' ' && ch !== NBSP_CHAR;
}
/**
 * returns whether point has space or not.
 *
 * @param {Point} point
 * @return {Boolean}
 */


function isSpacePoint(point) {
  if (!isText(point.node)) {
    return false;
  }

  var ch = point.node.nodeValue.charAt(point.offset - 1);
  return ch === ' ' || ch === NBSP_CHAR;
}
/**
 * @method walkPoint
 *
 * @param {BoundaryPoint} startPoint
 * @param {BoundaryPoint} endPoint
 * @param {Function} handler
 * @param {Boolean} isSkipInnerOffset
 */


function walkPoint(startPoint, endPoint, handler, isSkipInnerOffset) {
  var point = startPoint;

  while (point) {
    handler(point);

    if (isSamePoint(point, endPoint)) {
      break;
    }

    var isSkipOffset = isSkipInnerOffset && startPoint.node !== point.node && endPoint.node !== point.node;
    point = nextPointWithEmptyNode(point, isSkipOffset);
  }
}
/**
 * @method makeOffsetPath
 *
 * return offsetPath(array of offset) from ancestor
 *
 * @param {Node} ancestor - ancestor node
 * @param {Node} node
 */


function makeOffsetPath(ancestor, node) {
  var ancestors = listAncestor(node, func.eq(ancestor));
  return ancestors.map(dom_position).reverse();
}
/**
 * @method fromOffsetPath
 *
 * return element from offsetPath(array of offset)
 *
 * @param {Node} ancestor - ancestor node
 * @param {array} offsets - offsetPath
 */


function fromOffsetPath(ancestor, offsets) {
  var current = ancestor;

  for (var i = 0, len = offsets.length; i < len; i++) {
    if (current.childNodes.length <= offsets[i]) {
      current = current.childNodes[current.childNodes.length - 1];
    } else {
      current = current.childNodes[offsets[i]];
    }
  }

  return current;
}
/**
 * @method splitNode
 *
 * split element or #text
 *
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @param {Boolean} [options.isDiscardEmptySplits] - default: false
 * @return {Node} right node of boundaryPoint
 */


function splitNode(point, options) {
  var isSkipPaddingBlankHTML = options && options.isSkipPaddingBlankHTML;
  var isNotSplitEdgePoint = options && options.isNotSplitEdgePoint;
  var isDiscardEmptySplits = options && options.isDiscardEmptySplits;

  if (isDiscardEmptySplits) {
    isSkipPaddingBlankHTML = true;
  } // edge case


  if (isEdgePoint(point) && (isText(point.node) || isNotSplitEdgePoint)) {
    if (isLeftEdgePoint(point)) {
      return point.node;
    } else if (isRightEdgePoint(point)) {
      return point.node.nextSibling;
    }
  } // split #text


  if (isText(point.node)) {
    return point.node.splitText(point.offset);
  } else {
    var childNode = point.node.childNodes[point.offset];
    var clone = insertAfter(point.node.cloneNode(false), point.node);
    appendChildNodes(clone, listNext(childNode));

    if (!isSkipPaddingBlankHTML) {
      paddingBlankHTML(point.node);
      paddingBlankHTML(clone);
    }

    if (isDiscardEmptySplits) {
      if (dom_isEmpty(point.node)) {
        remove(point.node);
      }

      if (dom_isEmpty(clone)) {
        remove(clone);
        return point.node.nextSibling;
      }
    }

    return clone;
  }
}
/**
 * @method splitTree
 *
 * split tree by point
 *
 * @param {Node} root - split root
 * @param {BoundaryPoint} point
 * @param {Object} [options]
 * @param {Boolean} [options.isSkipPaddingBlankHTML] - default: false
 * @param {Boolean} [options.isNotSplitEdgePoint] - default: false
 * @return {Node} right node of boundaryPoint
 */


function splitTree(root, point, options) {
  // ex) [#text, <span>, <p>]
  var ancestors = listAncestor(point.node, func.eq(root));

  if (!ancestors.length) {
    return null;
  } else if (ancestors.length === 1) {
    return splitNode(point, options);
  }

  return ancestors.reduce(function (node, parent) {
    if (node === point.node) {
      node = splitNode(point, options);
    }

    return splitNode({
      node: parent,
      offset: node ? dom_position(node) : nodeLength(parent)
    }, options);
  });
}
/**
 * split point
 *
 * @param {Point} point
 * @param {Boolean} isInline
 * @return {Object}
 */


function splitPoint(point, isInline) {
  // find splitRoot, container
  //  - inline: splitRoot is a child of paragraph
  //  - block: splitRoot is a child of bodyContainer
  var pred = isInline ? isPara : isBodyContainer;
  var ancestors = listAncestor(point.node, pred);
  var topAncestor = lists.last(ancestors) || point.node;
  var splitRoot, container;

  if (pred(topAncestor)) {
    splitRoot = ancestors[ancestors.length - 2];
    container = topAncestor;
  } else {
    splitRoot = topAncestor;
    container = splitRoot.parentNode;
  } // if splitRoot is exists, split with splitTree


  var pivot = splitRoot && splitTree(splitRoot, point, {
    isSkipPaddingBlankHTML: isInline,
    isNotSplitEdgePoint: isInline
  }); // if container is point.node, find pivot with point.offset

  if (!pivot && container === point.node) {
    pivot = point.node.childNodes[point.offset];
  }

  return {
    rightNode: pivot,
    container: container
  };
}

function dom_create(nodeName) {
  return document.createElement(nodeName);
}

function createText(text) {
  return document.createTextNode(text);
}
/**
 * @method remove
 *
 * remove node, (isRemoveChild: remove child or not)
 *
 * @param {Node} node
 * @param {Boolean} isRemoveChild
 */


function remove(node, isRemoveChild) {
  if (!node || !node.parentNode) {
    return;
  }

  if (node.removeNode) {
    return node.removeNode(isRemoveChild);
  }

  var parent = node.parentNode;

  if (!isRemoveChild) {
    var nodes = [];

    for (var i = 0, len = node.childNodes.length; i < len; i++) {
      nodes.push(node.childNodes[i]);
    }

    for (var _i = 0, _len = nodes.length; _i < _len; _i++) {
      parent.insertBefore(nodes[_i], node);
    }
  }

  parent.removeChild(node);
}
/**
 * @method removeWhile
 *
 * @param {Node} node
 * @param {Function} pred
 */


function removeWhile(node, pred) {
  while (node) {
    if (isEditable(node) || !pred(node)) {
      break;
    }

    var parent = node.parentNode;
    remove(node);
    node = parent;
  }
}
/**
 * @method replace
 *
 * replace node with provided nodeName
 *
 * @param {Node} node
 * @param {String} nodeName
 * @return {Node} - new node
 */


function dom_replace(node, nodeName) {
  if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
    return node;
  }

  var newNode = dom_create(nodeName);

  if (node.style.cssText) {
    newNode.style.cssText = node.style.cssText;
  }

  appendChildNodes(newNode, lists.from(node.childNodes));
  insertAfter(newNode, node);
  remove(node);
  return newNode;
}

var isTextarea = makePredByNodeName('TEXTAREA');
/**
 * @param {jQuery} $node
 * @param {Boolean} [stripLinebreaks] - default: false
 */

function dom_value($node, stripLinebreaks) {
  var val = isTextarea($node[0]) ? $node.val() : $node.html();

  if (stripLinebreaks) {
    return val.replace(/[\n\r]/g, '');
  }

  return val;
}
/**
 * @method html
 *
 * get the HTML contents of node
 *
 * @param {jQuery} $node
 * @param {Boolean} [isNewlineOnBlock]
 */


function dom_html($node, isNewlineOnBlock) {
  var markup = dom_value($node);

  if (isNewlineOnBlock) {
    var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
    markup = markup.replace(regexTag, function (match, endSlash, name) {
      name = name.toUpperCase();
      var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) && !!endSlash;
      var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);
      return match + (isEndOfInlineContainer || isBlockNode ? '\n' : '');
    });
    markup = markup.trim();
  }

  return markup;
}

function posFromPlaceholder(placeholder) {
  var $placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(placeholder);
  var pos = $placeholder.offset();
  var height = $placeholder.outerHeight(true); // include margin

  return {
    left: pos.left,
    top: pos.top + height
  };
}

function attachEvents($node, events) {
  Object.keys(events).forEach(function (key) {
    $node.on(key, events[key]);
  });
}

function detachEvents($node, events) {
  Object.keys(events).forEach(function (key) {
    $node.off(key, events[key]);
  });
}
/**
 * @method isCustomStyleTag
 *
 * assert if a node contains a "note-styletag" class,
 * which implies that's a custom-made style tag node
 *
 * @param {Node} an HTML DOM node
 */


function isCustomStyleTag(node) {
  return node && !isText(node) && lists.contains(node.classList, 'note-styletag');
}

/* harmony default export */ var dom = ({
  /** @property {String} NBSP_CHAR */
  NBSP_CHAR: NBSP_CHAR,

  /** @property {String} ZERO_WIDTH_NBSP_CHAR */
  ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,

  /** @property {String} blank */
  blank: blankHTML,

  /** @property {String} emptyPara */
  emptyPara: "<p>".concat(blankHTML, "</p>"),
  makePredByNodeName: makePredByNodeName,
  isEditable: isEditable,
  isControlSizing: isControlSizing,
  isText: isText,
  isElement: isElement,
  isVoid: isVoid,
  isPara: isPara,
  isPurePara: isPurePara,
  isHeading: isHeading,
  isInline: dom_isInline,
  isBlock: func.not(dom_isInline),
  isBodyInline: isBodyInline,
  isBody: isBody,
  isParaInline: isParaInline,
  isPre: isPre,
  isList: isList,
  isTable: isTable,
  isData: isData,
  isCell: dom_isCell,
  isBlockquote: isBlockquote,
  isBodyContainer: isBodyContainer,
  isAnchor: isAnchor,
  isDiv: makePredByNodeName('DIV'),
  isLi: isLi,
  isBR: makePredByNodeName('BR'),
  isSpan: makePredByNodeName('SPAN'),
  isB: makePredByNodeName('B'),
  isU: makePredByNodeName('U'),
  isS: makePredByNodeName('S'),
  isI: makePredByNodeName('I'),
  isImg: makePredByNodeName('IMG'),
  isTextarea: isTextarea,
  deepestChildIsEmpty: deepestChildIsEmpty,
  isEmpty: dom_isEmpty,
  isEmptyAnchor: func.and(isAnchor, dom_isEmpty),
  isClosestSibling: isClosestSibling,
  withClosestSiblings: withClosestSiblings,
  nodeLength: nodeLength,
  isLeftEdgePoint: isLeftEdgePoint,
  isRightEdgePoint: isRightEdgePoint,
  isEdgePoint: isEdgePoint,
  isLeftEdgeOf: dom_isLeftEdgeOf,
  isRightEdgeOf: isRightEdgeOf,
  isLeftEdgePointOf: isLeftEdgePointOf,
  isRightEdgePointOf: isRightEdgePointOf,
  prevPoint: dom_prevPoint,
  nextPoint: dom_nextPoint,
  nextPointWithEmptyNode: nextPointWithEmptyNode,
  isSamePoint: isSamePoint,
  isVisiblePoint: isVisiblePoint,
  prevPointUntil: prevPointUntil,
  nextPointUntil: nextPointUntil,
  isCharPoint: isCharPoint,
  isSpacePoint: isSpacePoint,
  walkPoint: walkPoint,
  ancestor: dom_ancestor,
  singleChildAncestor: singleChildAncestor,
  listAncestor: listAncestor,
  lastAncestor: lastAncestor,
  listNext: listNext,
  listPrev: listPrev,
  listDescendant: listDescendant,
  commonAncestor: dom_commonAncestor,
  wrap: wrap,
  insertAfter: insertAfter,
  appendChildNodes: appendChildNodes,
  position: dom_position,
  hasChildren: hasChildren,
  makeOffsetPath: makeOffsetPath,
  fromOffsetPath: fromOffsetPath,
  splitTree: splitTree,
  splitPoint: splitPoint,
  create: dom_create,
  createText: createText,
  remove: remove,
  removeWhile: removeWhile,
  replace: dom_replace,
  html: dom_html,
  value: dom_value,
  posFromPlaceholder: posFromPlaceholder,
  attachEvents: attachEvents,
  detachEvents: detachEvents,
  isCustomStyleTag: isCustomStyleTag
});
// CONCATENATED MODULE: ./src/js/base/Context.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Context_Context = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $note
   * @param {Object} options
   */
  function Context($note, options) {
    _classCallCheck(this, Context);

    this.$note = $note;
    this.memos = {};
    this.modules = {};
    this.layoutInfo = {};
    this.options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, options); // init ui with options

    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui_template(this.options);
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.initialize();
  }
  /**
   * create layout and initialize modules and other resources
   */


  _createClass(Context, [{
    key: "initialize",
    value: function initialize() {
      this.layoutInfo = this.ui.createLayout(this.$note);

      this._initialize();

      this.$note.hide();
      return this;
    }
    /**
     * destroy modules and other resources and remove layout
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._destroy();

      this.$note.removeData('summernote');
      this.ui.removeLayout(this.$note, this.layoutInfo);
    }
    /**
     * destory modules and other resources and initialize it again
     */

  }, {
    key: "reset",
    value: function reset() {
      var disabled = this.isDisabled();
      this.code(dom.emptyPara);

      this._destroy();

      this._initialize();

      if (disabled) {
        this.disable();
      }
    }
  }, {
    key: "_initialize",
    value: function _initialize() {
      var _this = this;

      // set own id
      this.options.id = func.uniqueId(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now()); // set default container for tooltips, popovers, and dialogs

      this.options.container = this.options.container || this.layoutInfo.editor; // add optional buttons

      var buttons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.buttons);
      Object.keys(buttons).forEach(function (key) {
        _this.memo('button.' + key, buttons[key]);
      });
      var modules = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, this.options.modules, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.plugins || {}); // add and initialize modules

      Object.keys(modules).forEach(function (key) {
        _this.module(key, modules[key], true);
      });
      Object.keys(this.modules).forEach(function (key) {
        _this.initializeModule(key);
      });
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      var _this2 = this;

      // destroy modules with reversed order
      Object.keys(this.modules).reverse().forEach(function (key) {
        _this2.removeModule(key);
      });
      Object.keys(this.memos).forEach(function (key) {
        _this2.removeMemo(key);
      }); // trigger custom onDestroy callback

      this.triggerEvent('destroy', this);
    }
  }, {
    key: "code",
    value: function code(html) {
      var isActivated = this.invoke('codeview.isActivated');

      if (html === undefined) {
        this.invoke('codeview.sync');
        return isActivated ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
      } else {
        if (isActivated) {
          this.invoke('codeview.sync', html);
        } else {
          this.layoutInfo.editable.html(html);
        }

        this.$note.val(html);
        this.triggerEvent('change', html, this.layoutInfo.editable);
      }
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.layoutInfo.editable.attr('contenteditable') === 'false';
    }
  }, {
    key: "enable",
    value: function enable() {
      this.layoutInfo.editable.attr('contenteditable', true);
      this.invoke('toolbar.activate', true);
      this.triggerEvent('disable', false);
      this.options.editing = true;
    }
  }, {
    key: "disable",
    value: function disable() {
      // close codeview if codeview is opend
      if (this.invoke('codeview.isActivated')) {
        this.invoke('codeview.deactivate');
      }

      this.layoutInfo.editable.attr('contenteditable', false);
      this.options.editing = false;
      this.invoke('toolbar.deactivate', true);
      this.triggerEvent('disable', true);
    }
  }, {
    key: "triggerEvent",
    value: function triggerEvent() {
      var namespace = lists.head(arguments);
      var args = lists.tail(lists.from(arguments));
      var callback = this.options.callbacks[func.namespaceToCamel(namespace, 'on')];

      if (callback) {
        callback.apply(this.$note[0], args);
      }

      this.$note.trigger('summernote.' + namespace, args);
    }
  }, {
    key: "initializeModule",
    value: function initializeModule(key) {
      var module = this.modules[key];
      module.shouldInitialize = module.shouldInitialize || func.ok;

      if (!module.shouldInitialize()) {
        return;
      } // initialize module


      if (module.initialize) {
        module.initialize();
      } // attach events


      if (module.events) {
        dom.attachEvents(this.$note, module.events);
      }
    }
  }, {
    key: "module",
    value: function module(key, ModuleClass, withoutIntialize) {
      if (arguments.length === 1) {
        return this.modules[key];
      }

      this.modules[key] = new ModuleClass(this);

      if (!withoutIntialize) {
        this.initializeModule(key);
      }
    }
  }, {
    key: "removeModule",
    value: function removeModule(key) {
      var module = this.modules[key];

      if (module.shouldInitialize()) {
        if (module.events) {
          dom.detachEvents(this.$note, module.events);
        }

        if (module.destroy) {
          module.destroy();
        }
      }

      delete this.modules[key];
    }
  }, {
    key: "memo",
    value: function memo(key, obj) {
      if (arguments.length === 1) {
        return this.memos[key];
      }

      this.memos[key] = obj;
    }
  }, {
    key: "removeMemo",
    value: function removeMemo(key) {
      if (this.memos[key] && this.memos[key].destroy) {
        this.memos[key].destroy();
      }

      delete this.memos[key];
    }
    /**
     * Some buttons need to change their visual style immediately once they get pressed
     */

  }, {
    key: "createInvokeHandlerAndUpdateState",
    value: function createInvokeHandlerAndUpdateState(namespace, value) {
      var _this3 = this;

      return function (event) {
        _this3.createInvokeHandler(namespace, value)(event);

        _this3.invoke('buttons.updateCurrentStyle');
      };
    }
  }, {
    key: "createInvokeHandler",
    value: function createInvokeHandler(namespace, value) {
      var _this4 = this;

      return function (event) {
        event.preventDefault();
        var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);

        _this4.invoke(namespace, value || $target.closest('[data-value]').data('value'), $target);
      };
    }
  }, {
    key: "invoke",
    value: function invoke() {
      var namespace = lists.head(arguments);
      var args = lists.tail(lists.from(arguments));
      var splits = namespace.split('.');
      var hasSeparator = splits.length > 1;
      var moduleName = hasSeparator && lists.head(splits);
      var methodName = hasSeparator ? lists.last(splits) : lists.head(splits);
      var module = this.modules[moduleName || 'editor'];

      if (!moduleName && this[methodName]) {
        return this[methodName].apply(this, args);
      } else if (module && module[methodName] && module.shouldInitialize()) {
        return module[methodName].apply(module, args);
      }
    }
  }]);

  return Context;
}();


// CONCATENATED MODULE: ./src/js/summernote.js




external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.fn.extend({
  /**
   * Summernote API
   *
   * @param {Object|String}
   * @return {this}
   */
  summernote: function summernote() {
    var type = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.type(lists.head(arguments));
    var isExternalAPICalled = type === 'string';
    var hasInitOptions = type === 'object';
    var options = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend({}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options, hasInitOptions ? lists.head(arguments) : {}); // Update options

    options.langInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'], external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang[options.lang]);
    options.icons = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(true, {}, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options.icons, options.icons);
    options.tooltip = options.tooltip === 'auto' ? !env.isSupportTouch : options.tooltip;
    this.each(function (idx, note) {
      var $note = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(note);

      if (!$note.data('summernote')) {
        var context = new Context_Context($note, options);
        $note.data('summernote', context);
        $note.data('summernote').triggerEvent('init', context.layoutInfo);
      }
    });
    var $note = this.first();

    if ($note.length) {
      var context = $note.data('summernote');

      if (isExternalAPICalled) {
        return context.invoke.apply(context, lists.from(arguments));
      } else if (options.focus) {
        context.invoke('editor.focus');
      }
    }

    return this;
  }
});
// CONCATENATED MODULE: ./src/js/base/core/range.js
function range_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function range_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function range_createClass(Constructor, protoProps, staticProps) { if (protoProps) range_defineProperties(Constructor.prototype, protoProps); if (staticProps) range_defineProperties(Constructor, staticProps); return Constructor; }






/**
 * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
 *
 * @param {TextRange} textRange
 * @param {Boolean} isStart
 * @return {BoundaryPoint}
 *
 * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
 */

function textRangeToPoint(textRange, isStart) {
  var container = textRange.parentElement();
  var offset;
  var tester = document.body.createTextRange();
  var prevContainer;
  var childNodes = lists.from(container.childNodes);

  for (offset = 0; offset < childNodes.length; offset++) {
    if (dom.isText(childNodes[offset])) {
      continue;
    }

    tester.moveToElementText(childNodes[offset]);

    if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
      break;
    }

    prevContainer = childNodes[offset];
  }

  if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
    var textRangeStart = document.body.createTextRange();
    var curTextNode = null;
    textRangeStart.moveToElementText(prevContainer || container);
    textRangeStart.collapse(!prevContainer);
    curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
    var pointTester = textRange.duplicate();
    pointTester.setEndPoint('StartToStart', textRangeStart);
    var textCount = pointTester.text.replace(/[\r\n]/g, '').length;

    while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
      textCount -= curTextNode.nodeValue.length;
      curTextNode = curTextNode.nextSibling;
    } // [workaround] enforce IE to re-reference curTextNode, hack


    var dummy = curTextNode.nodeValue; // eslint-disable-line

    if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) && textCount === curTextNode.nodeValue.length) {
      textCount -= curTextNode.nodeValue.length;
      curTextNode = curTextNode.nextSibling;
    }

    container = curTextNode;
    offset = textCount;
  }

  return {
    cont: container,
    offset: offset
  };
}
/**
 * return TextRange from boundary point (inspired by google closure-library)
 * @param {BoundaryPoint} point
 * @return {TextRange}
 */


function pointToTextRange(point) {
  var textRangeInfo = function textRangeInfo(container, offset) {
    var node, isCollapseToStart;

    if (dom.isText(container)) {
      var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
      var prevContainer = lists.last(prevTextNodes).previousSibling;
      node = prevContainer || container.parentNode;
      offset += lists.sum(lists.tail(prevTextNodes), dom.nodeLength);
      isCollapseToStart = !prevContainer;
    } else {
      node = container.childNodes[offset] || container;

      if (dom.isText(node)) {
        return textRangeInfo(node, 0);
      }

      offset = 0;
      isCollapseToStart = false;
    }

    return {
      node: node,
      collapseToStart: isCollapseToStart,
      offset: offset
    };
  };

  var textRange = document.body.createTextRange();
  var info = textRangeInfo(point.node, point.offset);
  textRange.moveToElementText(info.node);
  textRange.collapse(info.collapseToStart);
  textRange.moveStart('character', info.offset);
  return textRange;
}
/**
   * Wrapped Range
   *
   * @constructor
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   */


var range_WrappedRange = /*#__PURE__*/function () {
  function WrappedRange(sc, so, ec, eo) {
    range_classCallCheck(this, WrappedRange);

    this.sc = sc;
    this.so = so;
    this.ec = ec;
    this.eo = eo; // isOnEditable: judge whether range is on editable or not

    this.isOnEditable = this.makeIsOn(dom.isEditable); // isOnList: judge whether range is on list node or not

    this.isOnList = this.makeIsOn(dom.isList); // isOnAnchor: judge whether range is on anchor node or not

    this.isOnAnchor = this.makeIsOn(dom.isAnchor); // isOnCell: judge whether range is on cell node or not

    this.isOnCell = this.makeIsOn(dom.isCell); // isOnData: judge whether range is on data node or not

    this.isOnData = this.makeIsOn(dom.isData);
  } // nativeRange: get nativeRange from sc, so, ec, eo


  range_createClass(WrappedRange, [{
    key: "nativeRange",
    value: function nativeRange() {
      if (env.isW3CRangeSupport) {
        var w3cRange = document.createRange();
        w3cRange.setStart(this.sc, this.so);
        w3cRange.setEnd(this.ec, this.eo);
        return w3cRange;
      } else {
        var textRange = pointToTextRange({
          node: this.sc,
          offset: this.so
        });
        textRange.setEndPoint('EndToEnd', pointToTextRange({
          node: this.ec,
          offset: this.eo
        }));
        return textRange;
      }
    }
  }, {
    key: "getPoints",
    value: function getPoints() {
      return {
        sc: this.sc,
        so: this.so,
        ec: this.ec,
        eo: this.eo
      };
    }
  }, {
    key: "getStartPoint",
    value: function getStartPoint() {
      return {
        node: this.sc,
        offset: this.so
      };
    }
  }, {
    key: "getEndPoint",
    value: function getEndPoint() {
      return {
        node: this.ec,
        offset: this.eo
      };
    }
    /**
     * select update visible range
     */

  }, {
    key: "select",
    value: function select() {
      var nativeRng = this.nativeRange();

      if (env.isW3CRangeSupport) {
        var selection = document.getSelection();

        if (selection.rangeCount > 0) {
          selection.removeAllRanges();
        }

        selection.addRange(nativeRng);
      } else {
        nativeRng.select();
      }

      return this;
    }
    /**
     * Moves the scrollbar to start container(sc) of current range
     *
     * @return {WrappedRange}
     */

  }, {
    key: "scrollIntoView",
    value: function scrollIntoView(container) {
      var height = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(container).height();

      if (container.scrollTop + height < this.sc.offsetTop) {
        container.scrollTop += Math.abs(container.scrollTop + height - this.sc.offsetTop);
      }

      return this;
    }
    /**
     * @return {WrappedRange}
     */

  }, {
    key: "normalize",
    value: function normalize() {
      /**
       * @param {BoundaryPoint} point
       * @param {Boolean} isLeftToRight - true: prefer to choose right node
       *                                - false: prefer to choose left node
       * @return {BoundaryPoint}
       */
      var getVisiblePoint = function getVisiblePoint(point, isLeftToRight) {
        if (!point) {
          return point;
        } // Just use the given point [XXX:Adhoc]
        //  - case 01. if the point is on the middle of the node
        //  - case 02. if the point is on the right edge and prefer to choose left node
        //  - case 03. if the point is on the left edge and prefer to choose right node
        //  - case 04. if the point is on the right edge and prefer to choose right node but the node is void
        //  - case 05. if the point is on the left edge and prefer to choose left node but the node is void
        //  - case 06. if the point is on the block node and there is no children


        if (dom.isVisiblePoint(point)) {
          if (!dom.isEdgePoint(point) || dom.isRightEdgePoint(point) && !isLeftToRight || dom.isLeftEdgePoint(point) && isLeftToRight || dom.isRightEdgePoint(point) && isLeftToRight && dom.isVoid(point.node.nextSibling) || dom.isLeftEdgePoint(point) && !isLeftToRight && dom.isVoid(point.node.previousSibling) || dom.isBlock(point.node) && dom.isEmpty(point.node)) {
            return point;
          }
        } // point on block's edge


        var block = dom.ancestor(point.node, dom.isBlock);
        var hasRightNode = false;

        if (!hasRightNode) {
          var prevPoint = dom.prevPoint(point) || {
            node: null
          };
          hasRightNode = (dom.isLeftEdgePointOf(point, block) || dom.isVoid(prevPoint.node)) && !isLeftToRight;
        }

        var hasLeftNode = false;

        if (!hasLeftNode) {
          var _nextPoint = dom.nextPoint(point) || {
            node: null
          };

          hasLeftNode = (dom.isRightEdgePointOf(point, block) || dom.isVoid(_nextPoint.node)) && isLeftToRight;
        }

        if (hasRightNode || hasLeftNode) {
          // returns point already on visible point
          if (dom.isVisiblePoint(point)) {
            return point;
          } // reverse direction


          isLeftToRight = !isLeftToRight;
        }

        var nextPoint = isLeftToRight ? dom.nextPointUntil(dom.nextPoint(point), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(point), dom.isVisiblePoint);
        return nextPoint || point;
      };

      var endPoint = getVisiblePoint(this.getEndPoint(), false);
      var startPoint = this.isCollapsed() ? endPoint : getVisiblePoint(this.getStartPoint(), true);
      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns matched nodes on range
     *
     * @param {Function} [pred] - predicate function
     * @param {Object} [options]
     * @param {Boolean} [options.includeAncestor]
     * @param {Boolean} [options.fullyContains]
     * @return {Node[]}
     */

  }, {
    key: "nodes",
    value: function nodes(pred, options) {
      pred = pred || func.ok;
      var includeAncestor = options && options.includeAncestor;
      var fullyContains = options && options.fullyContains; // TODO compare points and sort

      var startPoint = this.getStartPoint();
      var endPoint = this.getEndPoint();
      var nodes = [];
      var leftEdgeNodes = [];
      dom.walkPoint(startPoint, endPoint, function (point) {
        if (dom.isEditable(point.node)) {
          return;
        }

        var node;

        if (fullyContains) {
          if (dom.isLeftEdgePoint(point)) {
            leftEdgeNodes.push(point.node);
          }

          if (dom.isRightEdgePoint(point) && lists.contains(leftEdgeNodes, point.node)) {
            node = point.node;
          }
        } else if (includeAncestor) {
          node = dom.ancestor(point.node, pred);
        } else {
          node = point.node;
        }

        if (node && pred(node)) {
          nodes.push(node);
        }
      }, true);
      return lists.unique(nodes);
    }
    /**
     * returns commonAncestor of range
     * @return {Element} - commonAncestor
     */

  }, {
    key: "commonAncestor",
    value: function commonAncestor() {
      return dom.commonAncestor(this.sc, this.ec);
    }
    /**
     * returns expanded range by pred
     *
     * @param {Function} pred - predicate function
     * @return {WrappedRange}
     */

  }, {
    key: "expand",
    value: function expand(pred) {
      var startAncestor = dom.ancestor(this.sc, pred);
      var endAncestor = dom.ancestor(this.ec, pred);

      if (!startAncestor && !endAncestor) {
        return new WrappedRange(this.sc, this.so, this.ec, this.eo);
      }

      var boundaryPoints = this.getPoints();

      if (startAncestor) {
        boundaryPoints.sc = startAncestor;
        boundaryPoints.so = 0;
      }

      if (endAncestor) {
        boundaryPoints.ec = endAncestor;
        boundaryPoints.eo = dom.nodeLength(endAncestor);
      }

      return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    }
    /**
     * @param {Boolean} isCollapseToStart
     * @return {WrappedRange}
     */

  }, {
    key: "collapse",
    value: function collapse(isCollapseToStart) {
      if (isCollapseToStart) {
        return new WrappedRange(this.sc, this.so, this.sc, this.so);
      } else {
        return new WrappedRange(this.ec, this.eo, this.ec, this.eo);
      }
    }
    /**
     * splitText on range
     */

  }, {
    key: "splitText",
    value: function splitText() {
      var isSameContainer = this.sc === this.ec;
      var boundaryPoints = this.getPoints();

      if (dom.isText(this.ec) && !dom.isEdgePoint(this.getEndPoint())) {
        this.ec.splitText(this.eo);
      }

      if (dom.isText(this.sc) && !dom.isEdgePoint(this.getStartPoint())) {
        boundaryPoints.sc = this.sc.splitText(this.so);
        boundaryPoints.so = 0;

        if (isSameContainer) {
          boundaryPoints.ec = boundaryPoints.sc;
          boundaryPoints.eo = this.eo - this.so;
        }
      }

      return new WrappedRange(boundaryPoints.sc, boundaryPoints.so, boundaryPoints.ec, boundaryPoints.eo);
    }
    /**
     * delete contents on range
     * @return {WrappedRange}
     */

  }, {
    key: "deleteContents",
    value: function deleteContents() {
      if (this.isCollapsed()) {
        return this;
      }

      var rng = this.splitText();
      var nodes = rng.nodes(null, {
        fullyContains: true
      }); // find new cursor point

      var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
        return !lists.contains(nodes, point.node);
      });
      var emptyParents = [];
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(nodes, function (idx, node) {
        // find empty parents
        var parent = node.parentNode;

        if (point.node !== parent && dom.nodeLength(parent) === 1) {
          emptyParents.push(parent);
        }

        dom.remove(node, false);
      }); // remove empty parents

      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyParents, function (idx, node) {
        dom.remove(node, false);
      });
      return new WrappedRange(point.node, point.offset, point.node, point.offset).normalize();
    }
    /**
     * makeIsOn: return isOn(pred) function
     */

  }, {
    key: "makeIsOn",
    value: function makeIsOn(pred) {
      return function () {
        var ancestor = dom.ancestor(this.sc, pred);
        return !!ancestor && ancestor === dom.ancestor(this.ec, pred);
      };
    }
    /**
     * @param {Function} pred
     * @return {Boolean}
     */

  }, {
    key: "isLeftEdgeOf",
    value: function isLeftEdgeOf(pred) {
      if (!dom.isLeftEdgePoint(this.getStartPoint())) {
        return false;
      }

      var node = dom.ancestor(this.sc, pred);
      return node && dom.isLeftEdgeOf(this.sc, node);
    }
    /**
     * returns whether range was collapsed or not
     */

  }, {
    key: "isCollapsed",
    value: function isCollapsed() {
      return this.sc === this.ec && this.so === this.eo;
    }
    /**
     * wrap inline nodes which children of body with paragraph
     *
     * @return {WrappedRange}
     */

  }, {
    key: "wrapBodyInlineWithPara",
    value: function wrapBodyInlineWithPara() {
      if (dom.isBodyContainer(this.sc) && dom.isEmpty(this.sc)) {
        this.sc.innerHTML = dom.emptyPara;
        return new WrappedRange(this.sc.firstChild, 0, this.sc.firstChild, 0);
      }
      /**
       * [workaround] firefox often create range on not visible point. so normalize here.
       *  - firefox: |<p>text</p>|
       *  - chrome: <p>|text|</p>
       */


      var rng = this.normalize();

      if (dom.isParaInline(this.sc) || dom.isPara(this.sc)) {
        return rng;
      } // find inline top ancestor


      var topAncestor;

      if (dom.isInline(rng.sc)) {
        var ancestors = dom.listAncestor(rng.sc, func.not(dom.isInline));
        topAncestor = lists.last(ancestors);

        if (!dom.isInline(topAncestor)) {
          topAncestor = ancestors[ancestors.length - 2] || rng.sc.childNodes[rng.so];
        }
      } else {
        topAncestor = rng.sc.childNodes[rng.so > 0 ? rng.so - 1 : 0];
      }

      if (topAncestor) {
        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline)); // wrap with paragraph

        if (inlineSiblings.length) {
          var para = dom.wrap(lists.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, lists.tail(inlineSiblings));
        }
      }

      return this.normalize();
    }
    /**
     * insert node at current cursor
     *
     * @param {Node} node
     * @return {Node}
     */

  }, {
    key: "insertNode",
    value: function insertNode(node) {
      var rng = this;

      if (dom.isText(node) || dom.isInline(node)) {
        rng = this.wrapBodyInlineWithPara().deleteContents();
      }

      var info = dom.splitPoint(rng.getStartPoint(), dom.isInline(node));

      if (info.rightNode) {
        info.rightNode.parentNode.insertBefore(node, info.rightNode);

        if (dom.isEmpty(info.rightNode) && dom.isPara(node)) {
          info.rightNode.parentNode.removeChild(info.rightNode);
        }
      } else {
        info.container.appendChild(node);
      }

      return node;
    }
    /**
     * insert html at current cursor
     */

  }, {
    key: "pasteHTML",
    value: function pasteHTML(markup) {
      markup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.trim(markup);
      var contentsContainer = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').html(markup)[0];
      var childNodes = lists.from(contentsContainer.childNodes); // const rng = this.wrapBodyInlineWithPara().deleteContents();

      var rng = this;
      var reversed = false;

      if (rng.so >= 0) {
        childNodes = childNodes.reverse();
        reversed = true;
      }

      childNodes = childNodes.map(function (childNode) {
        return rng.insertNode(childNode);
      });

      if (reversed) {
        childNodes = childNodes.reverse();
      }

      return childNodes;
    }
    /**
     * returns text in range
     *
     * @return {String}
     */

  }, {
    key: "toString",
    value: function toString() {
      var nativeRng = this.nativeRange();
      return env.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
    }
    /**
     * returns range for word before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */

  }, {
    key: "getWordRange",
    value: function getWordRange(findAfter) {
      var endPoint = this.getEndPoint();

      if (!dom.isCharPoint(endPoint)) {
        return this;
      }

      var startPoint = dom.prevPointUntil(endPoint, function (point) {
        return !dom.isCharPoint(point);
      });

      if (findAfter) {
        endPoint = dom.nextPointUntil(endPoint, function (point) {
          return !dom.isCharPoint(point);
        });
      }

      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns range for words before cursor
     *
     * @param {Boolean} [findAfter] - find after cursor, default: false
     * @return {WrappedRange}
     */

  }, {
    key: "getWordsRange",
    value: function getWordsRange(findAfter) {
      var endPoint = this.getEndPoint();

      var isNotTextPoint = function isNotTextPoint(point) {
        return !dom.isCharPoint(point) && !dom.isSpacePoint(point);
      };

      if (isNotTextPoint(endPoint)) {
        return this;
      }

      var startPoint = dom.prevPointUntil(endPoint, isNotTextPoint);

      if (findAfter) {
        endPoint = dom.nextPointUntil(endPoint, isNotTextPoint);
      }

      return new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * returns range for words before cursor that match with a Regex
     *
     * example:
     *  range: 'hi @Peter Pan'
     *  regex: '/@[a-z ]+/i'
     *  return range: '@Peter Pan'
     *
     * @param {RegExp} [regex]
     * @return {WrappedRange|null}
     */

  }, {
    key: "getWordsMatchRange",
    value: function getWordsMatchRange(regex) {
      var endPoint = this.getEndPoint();
      var startPoint = dom.prevPointUntil(endPoint, function (point) {
        if (!dom.isCharPoint(point) && !dom.isSpacePoint(point)) {
          return true;
        }

        var rng = new WrappedRange(point.node, point.offset, endPoint.node, endPoint.offset);
        var result = regex.exec(rng.toString());
        return result && result.index === 0;
      });
      var rng = new WrappedRange(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
      var text = rng.toString();
      var result = regex.exec(text);

      if (result && result[0].length === text.length) {
        return rng;
      } else {
        return null;
      }
    }
    /**
     * create offsetPath bookmark
     *
     * @param {Node} editable
     */

  }, {
    key: "bookmark",
    value: function bookmark(editable) {
      return {
        s: {
          path: dom.makeOffsetPath(editable, this.sc),
          offset: this.so
        },
        e: {
          path: dom.makeOffsetPath(editable, this.ec),
          offset: this.eo
        }
      };
    }
    /**
     * create offsetPath bookmark base on paragraph
     *
     * @param {Node[]} paras
     */

  }, {
    key: "paraBookmark",
    value: function paraBookmark(paras) {
      return {
        s: {
          path: lists.tail(dom.makeOffsetPath(lists.head(paras), this.sc)),
          offset: this.so
        },
        e: {
          path: lists.tail(dom.makeOffsetPath(lists.last(paras), this.ec)),
          offset: this.eo
        }
      };
    }
    /**
     * getClientRects
     * @return {Rect[]}
     */

  }, {
    key: "getClientRects",
    value: function getClientRects() {
      var nativeRng = this.nativeRange();
      return nativeRng.getClientRects();
    }
  }]);

  return WrappedRange;
}();
/**
 * Data structure
 *  * BoundaryPoint: a point of dom tree
 *  * BoundaryPoints: two boundaryPoints corresponding to the start and the end of the Range
 *
 * See to http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
 */


/* harmony default export */ var range = ({
  /**
   * create Range Object From arguments or Browser Selection
   *
   * @param {Node} sc - start container
   * @param {Number} so - start offset
   * @param {Node} ec - end container
   * @param {Number} eo - end offset
   * @return {WrappedRange}
   */
  create: function create(sc, so, ec, eo) {
    if (arguments.length === 4) {
      return new range_WrappedRange(sc, so, ec, eo);
    } else if (arguments.length === 2) {
      // collapsed
      ec = sc;
      eo = so;
      return new range_WrappedRange(sc, so, ec, eo);
    } else {
      var wrappedRange = this.createFromSelection();

      if (!wrappedRange && arguments.length === 1) {
        var bodyElement = arguments[0];

        if (dom.isEditable(bodyElement)) {
          bodyElement = bodyElement.lastChild;
        }

        return this.createFromBodyElement(bodyElement, dom.emptyPara === arguments[0].innerHTML);
      }

      return wrappedRange;
    }
  },
  createFromBodyElement: function createFromBodyElement(bodyElement) {
    var isCollapseToStart = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var wrappedRange = this.createFromNode(bodyElement);
    return wrappedRange.collapse(isCollapseToStart);
  },
  createFromSelection: function createFromSelection() {
    var sc, so, ec, eo;

    if (env.isW3CRangeSupport) {
      var selection = document.getSelection();

      if (!selection || selection.rangeCount === 0) {
        return null;
      } else if (dom.isBody(selection.anchorNode)) {
        // Firefox: returns entire body as range on initialization.
        // We won't never need it.
        return null;
      }

      var nativeRng = selection.getRangeAt(0);
      sc = nativeRng.startContainer;
      so = nativeRng.startOffset;
      ec = nativeRng.endContainer;
      eo = nativeRng.endOffset;
    } else {
      // IE8: TextRange
      var textRange = document.selection.createRange();
      var textRangeEnd = textRange.duplicate();
      textRangeEnd.collapse(false);
      var textRangeStart = textRange;
      textRangeStart.collapse(true);
      var startPoint = textRangeToPoint(textRangeStart, true);
      var endPoint = textRangeToPoint(textRangeEnd, false); // same visible point case: range was collapsed.

      if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) && dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) && endPoint.node.nextSibling === startPoint.node) {
        startPoint = endPoint;
      }

      sc = startPoint.cont;
      so = startPoint.offset;
      ec = endPoint.cont;
      eo = endPoint.offset;
    }

    return new range_WrappedRange(sc, so, ec, eo);
  },

  /**
   * @method
   *
   * create WrappedRange from node
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNode: function createFromNode(node) {
    var sc = node;
    var so = 0;
    var ec = node;
    var eo = dom.nodeLength(ec); // browsers can't target a picture or void node

    if (dom.isVoid(sc)) {
      so = dom.listPrev(sc).length - 1;
      sc = sc.parentNode;
    }

    if (dom.isBR(ec)) {
      eo = dom.listPrev(ec).length - 1;
      ec = ec.parentNode;
    } else if (dom.isVoid(ec)) {
      eo = dom.listPrev(ec).length;
      ec = ec.parentNode;
    }

    return this.create(sc, so, ec, eo);
  },

  /**
   * create WrappedRange from node after position
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNodeBefore: function createFromNodeBefore(node) {
    return this.createFromNode(node).collapse(true);
  },

  /**
   * create WrappedRange from node after position
   *
   * @param {Node} node
   * @return {WrappedRange}
   */
  createFromNodeAfter: function createFromNodeAfter(node) {
    return this.createFromNode(node).collapse();
  },

  /**
   * @method
   *
   * create WrappedRange from bookmark
   *
   * @param {Node} editable
   * @param {Object} bookmark
   * @return {WrappedRange}
   */
  createFromBookmark: function createFromBookmark(editable, bookmark) {
    var sc = dom.fromOffsetPath(editable, bookmark.s.path);
    var so = bookmark.s.offset;
    var ec = dom.fromOffsetPath(editable, bookmark.e.path);
    var eo = bookmark.e.offset;
    return new range_WrappedRange(sc, so, ec, eo);
  },

  /**
   * @method
   *
   * create WrappedRange from paraBookmark
   *
   * @param {Object} bookmark
   * @param {Node[]} paras
   * @return {WrappedRange}
   */
  createFromParaBookmark: function createFromParaBookmark(bookmark, paras) {
    var so = bookmark.s.offset;
    var eo = bookmark.e.offset;
    var sc = dom.fromOffsetPath(lists.head(paras), bookmark.s.path);
    var ec = dom.fromOffsetPath(lists.last(paras), bookmark.e.path);
    return new range_WrappedRange(sc, so, ec, eo);
  }
});
// CONCATENATED MODULE: ./src/js/base/core/key.js


var KEY_MAP = {
  'BACKSPACE': 8,
  'TAB': 9,
  'ENTER': 13,
  'ESCAPE': 27,
  'SPACE': 32,
  'DELETE': 46,
  // Arrow
  'LEFT': 37,
  'UP': 38,
  'RIGHT': 39,
  'DOWN': 40,
  // Number: 0-9
  'NUM0': 48,
  'NUM1': 49,
  'NUM2': 50,
  'NUM3': 51,
  'NUM4': 52,
  'NUM5': 53,
  'NUM6': 54,
  'NUM7': 55,
  'NUM8': 56,
  // Alphabet: a-z
  'B': 66,
  'E': 69,
  'I': 73,
  'J': 74,
  'K': 75,
  'L': 76,
  'R': 82,
  'S': 83,
  'U': 85,
  'V': 86,
  'Y': 89,
  'Z': 90,
  'SLASH': 191,
  'LEFTBRACKET': 219,
  'BACKSLASH': 220,
  'RIGHTBRACKET': 221,
  // Navigation
  'HOME': 36,
  'END': 35,
  'PAGEUP': 33,
  'PAGEDOWN': 34
};
/**
 * @class core.key
 *
 * Object for keycodes.
 *
 * @singleton
 * @alternateClassName key
 */

/* harmony default export */ var core_key = ({
  /**
   * @method isEdit
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isEdit: function isEdit(keyCode) {
    return lists.contains([KEY_MAP.BACKSPACE, KEY_MAP.TAB, KEY_MAP.ENTER, KEY_MAP.SPACE, KEY_MAP.DELETE], keyCode);
  },

  /**
   * @method isMove
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isMove: function isMove(keyCode) {
    return lists.contains([KEY_MAP.LEFT, KEY_MAP.UP, KEY_MAP.RIGHT, KEY_MAP.DOWN], keyCode);
  },

  /**
   * @method isNavigation
   *
   * @param {Number} keyCode
   * @return {Boolean}
   */
  isNavigation: function isNavigation(keyCode) {
    return lists.contains([KEY_MAP.HOME, KEY_MAP.END, KEY_MAP.PAGEUP, KEY_MAP.PAGEDOWN], keyCode);
  },

  /**
   * @property {Object} nameFromCode
   * @property {String} nameFromCode.8 "BACKSPACE"
   */
  nameFromCode: func.invertObject(KEY_MAP),
  code: KEY_MAP
});
// CONCATENATED MODULE: ./src/js/base/core/async.js

/**
 * @method readFileAsDataURL
 *
 * read contents of file as representing URL
 *
 * @param {File} file
 * @return {Promise} - then: dataUrl
 */

function readFileAsDataURL(file) {
  return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
    external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(new FileReader(), {
      onload: function onload(e) {
        var dataURL = e.target.result;
        deferred.resolve(dataURL);
      },
      onerror: function onerror(err) {
        deferred.reject(err);
      }
    }).readAsDataURL(file);
  }).promise();
}
/**
 * @method createImage
 *
 * create `<image>` from url string
 *
 * @param {String} url
 * @return {Promise} - then: $image
 */

function createImage(url) {
  return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
    var $img = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<img>');
    $img.one('load', function () {
      $img.off('error abort');
      deferred.resolve($img);
    }).one('error abort', function () {
      $img.off('load').detach();
      deferred.reject($img);
    }).css({
      display: 'none'
    }).appendTo(document.body).attr('src', url);
  }).promise();
}
// CONCATENATED MODULE: ./src/js/base/editing/History.js
function History_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function History_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function History_createClass(Constructor, protoProps, staticProps) { if (protoProps) History_defineProperties(Constructor.prototype, protoProps); if (staticProps) History_defineProperties(Constructor, staticProps); return Constructor; }



var History_History = /*#__PURE__*/function () {
  function History(context) {
    History_classCallCheck(this, History);

    this.stack = [];
    this.stackOffset = -1;
    this.context = context;
    this.$editable = context.layoutInfo.editable;
    this.editable = this.$editable[0];
  }

  History_createClass(History, [{
    key: "makeSnapshot",
    value: function makeSnapshot() {
      var rng = range.create(this.editable);
      var emptyBookmark = {
        s: {
          path: [],
          offset: 0
        },
        e: {
          path: [],
          offset: 0
        }
      };
      return {
        contents: this.$editable.html(),
        bookmark: rng && rng.isOnEditable() ? rng.bookmark(this.editable) : emptyBookmark
      };
    }
  }, {
    key: "applySnapshot",
    value: function applySnapshot(snapshot) {
      if (snapshot.contents !== null) {
        this.$editable.html(snapshot.contents);
      }

      if (snapshot.bookmark !== null) {
        range.createFromBookmark(this.editable, snapshot.bookmark).select();
      }
    }
    /**
    * @method rewind
    * Rewinds the history stack back to the first snapshot taken.
    * Leaves the stack intact, so that "Redo" can still be used.
    */

  }, {
    key: "rewind",
    value: function rewind() {
      // Create snap shot if not yet recorded
      if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
        this.recordUndo();
      } // Return to the first available snapshot.


      this.stackOffset = 0; // Apply that snapshot.

      this.applySnapshot(this.stack[this.stackOffset]);
    }
    /**
    *  @method commit
    *  Resets history stack, but keeps current editor's content.
    */

  }, {
    key: "commit",
    value: function commit() {
      // Clear the stack.
      this.stack = []; // Restore stackOffset to its original value.

      this.stackOffset = -1; // Record our first snapshot (of nothing).

      this.recordUndo();
    }
    /**
    * @method reset
    * Resets the history stack completely; reverting to an empty editor.
    */

  }, {
    key: "reset",
    value: function reset() {
      // Clear the stack.
      this.stack = []; // Restore stackOffset to its original value.

      this.stackOffset = -1; // Clear the editable area.

      this.$editable.html(''); // Record our first snapshot (of nothing).

      this.recordUndo();
    }
    /**
     * undo
     */

  }, {
    key: "undo",
    value: function undo() {
      // Create snap shot if not yet recorded
      if (this.$editable.html() !== this.stack[this.stackOffset].contents) {
        this.recordUndo();
      }

      if (this.stackOffset > 0) {
        this.stackOffset--;
        this.applySnapshot(this.stack[this.stackOffset]);
      }
    }
    /**
     * redo
     */

  }, {
    key: "redo",
    value: function redo() {
      if (this.stack.length - 1 > this.stackOffset) {
        this.stackOffset++;
        this.applySnapshot(this.stack[this.stackOffset]);
      }
    }
    /**
     * recorded undo
     */

  }, {
    key: "recordUndo",
    value: function recordUndo() {
      this.stackOffset++; // Wash out stack after stackOffset

      if (this.stack.length > this.stackOffset) {
        this.stack = this.stack.slice(0, this.stackOffset);
      } // Create new snapshot and push it to the end


      this.stack.push(this.makeSnapshot()); // If the stack size reachs to the limit, then slice it

      if (this.stack.length > this.context.options.historyLimit) {
        this.stack.shift();
        this.stackOffset -= 1;
      }
    }
  }]);

  return History;
}();


// CONCATENATED MODULE: ./src/js/base/editing/Style.js
function Style_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Style_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Style_createClass(Constructor, protoProps, staticProps) { if (protoProps) Style_defineProperties(Constructor.prototype, protoProps); if (staticProps) Style_defineProperties(Constructor, staticProps); return Constructor; }







var Style_Style = /*#__PURE__*/function () {
  function Style() {
    Style_classCallCheck(this, Style);
  }

  Style_createClass(Style, [{
    key: "jQueryCSS",

    /**
     * @method jQueryCSS
     *
     * [workaround] for old jQuery
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @private
     * @param  {jQuery} $obj
     * @param  {Array} propertyNames - An array of one or more CSS properties.
     * @return {Object}
     */
    value: function jQueryCSS($obj, propertyNames) {
      if (env.jqueryVersion < 1.9) {
        var result = {};
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
        });
        return result;
      }

      return $obj.css(propertyNames);
    }
    /**
     * returns style object from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */

  }, {
    key: "fromNode",
    value: function fromNode($node) {
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = this.jQueryCSS($node, properties) || {};
      var fontSize = $node[0].style.fontSize || styleInfo['font-size'];
      styleInfo['font-size'] = parseInt(fontSize, 10);
      styleInfo['font-size-unit'] = fontSize.match(/[a-z%]+$/);
      return styleInfo;
    }
    /**
     * paragraph level style
     *
     * @param {WrappedRange} rng
     * @param {Object} styleInfo
     */

  }, {
    key: "stylePara",
    value: function stylePara(rng, styleInfo) {
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rng.nodes(dom.isPara, {
        includeAncestor: true
      }), function (idx, para) {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css(styleInfo);
      });
    }
    /**
     * insert and returns styleNodes on range.
     *
     * @param {WrappedRange} rng
     * @param {Object} [options] - options for styleNodes
     * @param {String} [options.nodeName] - default: `SPAN`
     * @param {Boolean} [options.expandClosestSibling] - default: `false`
     * @param {Boolean} [options.onlyPartialContains] - default: `false`
     * @return {Node[]}
     */

  }, {
    key: "styleNodes",
    value: function styleNodes(rng, options) {
      rng = rng.splitText();
      var nodeName = options && options.nodeName || 'SPAN';
      var expandClosestSibling = !!(options && options.expandClosestSibling);
      var onlyPartialContains = !!(options && options.onlyPartialContains);

      if (rng.isCollapsed()) {
        return [rng.insertNode(dom.create(nodeName))];
      }

      var pred = dom.makePredByNodeName(nodeName);
      var nodes = rng.nodes(dom.isText, {
        fullyContains: true
      }).map(function (text) {
        return dom.singleChildAncestor(text, pred) || dom.wrap(text, nodeName);
      });

      if (expandClosestSibling) {
        if (onlyPartialContains) {
          var nodesInRange = rng.nodes(); // compose with partial contains predication

          pred = func.and(pred, function (node) {
            return lists.contains(nodesInRange, node);
          });
        }

        return nodes.map(function (node) {
          var siblings = dom.withClosestSiblings(node, pred);
          var head = lists.head(siblings);
          var tails = lists.tail(siblings);
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(tails, function (idx, elem) {
            dom.appendChildNodes(head, elem.childNodes);
            dom.remove(elem);
          });
          return lists.head(siblings);
        });
      } else {
        return nodes;
      }
    }
    /**
     * get current style on cursor
     *
     * @param {WrappedRange} rng
     * @return {Object} - object contains style properties.
     */

  }, {
    key: "current",
    value: function current(rng) {
      var $cont = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(!dom.isElement(rng.sc) ? rng.sc.parentNode : rng.sc);
      var styleInfo = this.fromNode($cont); // document.queryCommandState for toggle state
      // [workaround] prevent Firefox nsresult: "0x80004005 (NS_ERROR_FAILURE)"

      try {
        styleInfo = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(styleInfo, {
          'font-bold': document.queryCommandState('bold') ? 'bold' : 'normal',
          'font-italic': document.queryCommandState('italic') ? 'italic' : 'normal',
          'font-underline': document.queryCommandState('underline') ? 'underline' : 'normal',
          'font-subscript': document.queryCommandState('subscript') ? 'subscript' : 'normal',
          'font-superscript': document.queryCommandState('superscript') ? 'superscript' : 'normal',
          'font-strikethrough': document.queryCommandState('strikethrough') ? 'strikethrough' : 'normal',
          'font-family': document.queryCommandValue('fontname') || styleInfo['font-family']
        });
      } catch (e) {} // eslint-disable-next-line
      // list-style-type to list-style(unordered, ordered)


      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
      } else {
        var orderedTypes = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = orderedTypes.indexOf(styleInfo['list-style-type']) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
      }

      var para = dom.ancestor(rng.sc, dom.isPara);

      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
      } else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
      }

      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;
      return styleInfo;
    }
  }]);

  return Style;
}();


// CONCATENATED MODULE: ./src/js/base/editing/Bullet.js
function Bullet_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Bullet_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Bullet_createClass(Constructor, protoProps, staticProps) { if (protoProps) Bullet_defineProperties(Constructor.prototype, protoProps); if (staticProps) Bullet_defineProperties(Constructor, staticProps); return Constructor; }







var Bullet_Bullet = /*#__PURE__*/function () {
  function Bullet() {
    Bullet_classCallCheck(this, Bullet);
  }

  Bullet_createClass(Bullet, [{
    key: "insertOrderedList",

    /**
     * toggle ordered list
     */
    value: function insertOrderedList(editable) {
      this.toggleList('OL', editable);
    }
    /**
     * toggle unordered list
     */

  }, {
    key: "insertUnorderedList",
    value: function insertUnorderedList(editable) {
      this.toggleList('UL', editable);
    }
    /**
     * indent
     */

  }, {
    key: "indent",
    value: function indent(editable) {
      var _this = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
        var head = lists.head(paras);

        if (dom.isLi(head)) {
          var previousList = _this.findList(head.previousSibling);

          if (previousList) {
            paras.map(function (para) {
              return previousList.appendChild(para);
            });
          } else {
            _this.wrapList(paras, head.parentNode.nodeName);

            paras.map(function (para) {
              return para.parentNode;
            }).map(function (para) {
              return _this.appendToPrevious(para);
            });
          }
        } else {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function (idx, para) {
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
            });
          });
        }
      });
      rng.select();
    }
    /**
     * outdent
     */

  }, {
    key: "outdent",
    value: function outdent(editable) {
      var _this2 = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode'));
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
        var head = lists.head(paras);

        if (dom.isLi(head)) {
          _this2.releaseList([paras]);
        } else {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(paras, function (idx, para) {
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(para).css('marginLeft', function (idx, val) {
              val = parseInt(val, 10) || 0;
              return val > 25 ? val - 25 : '';
            });
          });
        }
      });
      rng.select();
    }
    /**
     * toggle list
     *
     * @param {String} listName - OL or UL
     */

  }, {
    key: "toggleList",
    value: function toggleList(listName, editable) {
      var _this3 = this;

      var rng = range.create(editable).wrapBodyInlineWithPara();
      var paras = rng.nodes(dom.isPara, {
        includeAncestor: true
      });
      var bookmark = rng.paraBookmark(paras);
      var clustereds = lists.clusterBy(paras, func.peq2('parentNode')); // paragraph to list

      if (lists.find(paras, dom.isPurePara)) {
        var wrappedParas = [];
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
          wrappedParas = wrappedParas.concat(_this3.wrapList(paras, listName));
        });
        paras = wrappedParas; // list to paragraph or change list style
      } else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
        }).filter(function (listNode) {
          return !external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.nodeName(listNode, listName);
        });

        if (diffLists.length) {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
          });
        } else {
          paras = this.releaseList(clustereds, true);
        }
      }

      range.createFromParaBookmark(bookmark, paras).select();
    }
    /**
     * @param {Node[]} paras
     * @param {String} listName
     * @return {Node[]}
     */

  }, {
    key: "wrapList",
    value: function wrapList(paras, listName) {
      var head = lists.head(paras);
      var last = lists.last(paras);
      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;
      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last); // P to LI

      paras = paras.map(function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
      }); // append to list(<ul>, <ol>)

      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, lists.from(nextList.childNodes));
        dom.remove(nextList);
      }

      return paras;
    }
    /**
     * @method releaseList
     *
     * @param {Array[]} clustereds
     * @param {Boolean} isEscapseToBody
     * @return {Node[]}
     */

  }, {
    key: "releaseList",
    value: function releaseList(clustereds, isEscapseToBody) {
      var _this4 = this;

      var releasedParas = [];
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(clustereds, function (idx, paras) {
        var head = lists.head(paras);
        var last = lists.last(paras);
        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) : head.parentNode;
        var parentItem = headList.parentNode;

        if (headList.parentNode.nodeName === 'LI') {
          paras.map(function (para) {
            var newList = _this4.findNextSiblings(para);

            if (parentItem.nextSibling) {
              parentItem.parentNode.insertBefore(para, parentItem.nextSibling);
            } else {
              parentItem.parentNode.appendChild(para);
            }

            if (newList.length) {
              _this4.wrapList(newList, headList.nodeName);

              para.appendChild(newList[0].parentNode);
            }
          });

          if (headList.children.length === 0) {
            parentItem.removeChild(headList);
          }

          if (parentItem.childNodes.length === 0) {
            parentItem.parentNode.removeChild(parentItem);
          }
        } else {
          var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
            node: last.parentNode,
            offset: dom.position(last) + 1
          }, {
            isSkipPaddingBlankHTML: true
          }) : null;
          var middleList = dom.splitTree(headList, {
            node: head.parentNode,
            offset: dom.position(head)
          }, {
            isSkipPaddingBlankHTML: true
          });
          paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) : lists.from(middleList.childNodes).filter(dom.isLi); // LI to P

          if (isEscapseToBody || !dom.isList(headList.parentNode)) {
            paras = paras.map(function (para) {
              return dom.replace(para, 'P');
            });
          }

          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(lists.from(paras).reverse(), function (idx, para) {
            dom.insertAfter(para, headList);
          }); // remove empty lists

          var rootLists = lists.compact([headList, middleList, lastList]);
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(rootLists, function (idx, rootList) {
            var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(listNodes.reverse(), function (idx, listNode) {
              if (!dom.nodeLength(listNode)) {
                dom.remove(listNode, true);
              }
            });
          });
        }

        releasedParas = releasedParas.concat(paras);
      });
      return releasedParas;
    }
    /**
     * @method appendToPrevious
     *
     * Appends list to previous list item, if
     * none exist it wraps the list in a new list item.
     *
     * @param {HTMLNode} ListItem
     * @return {HTMLNode}
     */

  }, {
    key: "appendToPrevious",
    value: function appendToPrevious(node) {
      return node.previousSibling ? dom.appendChildNodes(node.previousSibling, [node]) : this.wrapList([node], 'LI');
    }
    /**
     * @method findList
     *
     * Finds an existing list in list item
     *
     * @param {HTMLNode} ListItem
     * @return {Array[]}
     */

  }, {
    key: "findList",
    value: function findList(node) {
      return node ? lists.find(node.children, function (child) {
        return ['OL', 'UL'].indexOf(child.nodeName) > -1;
      }) : null;
    }
    /**
     * @method findNextSiblings
     *
     * Finds all list item siblings that follow it
     *
     * @param {HTMLNode} ListItem
     * @return {HTMLNode}
     */

  }, {
    key: "findNextSiblings",
    value: function findNextSiblings(node) {
      var siblings = [];

      while (node.nextSibling) {
        siblings.push(node.nextSibling);
        node = node.nextSibling;
      }

      return siblings;
    }
  }]);

  return Bullet;
}();


// CONCATENATED MODULE: ./src/js/base/editing/Typing.js
function Typing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Typing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Typing_createClass(Constructor, protoProps, staticProps) { if (protoProps) Typing_defineProperties(Constructor.prototype, protoProps); if (staticProps) Typing_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @class editing.Typing
 *
 * Typing
 *
 */

var Typing_Typing = /*#__PURE__*/function () {
  function Typing(context) {
    Typing_classCallCheck(this, Typing);

    // a Bullet instance to toggle lists off
    this.bullet = new Bullet_Bullet();
    this.options = context.options;
  }
  /**
   * insert tab
   *
   * @param {WrappedRange} rng
   * @param {Number} tabsize
   */


  Typing_createClass(Typing, [{
    key: "insertTab",
    value: function insertTab(rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);
      rng = range.create(tab, tabsize);
      rng.select();
    }
    /**
     * insert paragraph
     *
     * @param {jQuery} $editable
     * @param {WrappedRange} rng Can be used in unit tests to "mock" the range
     *
     * blockquoteBreakingLevel
     *   0 - No break, the new paragraph remains inside the quote
     *   1 - Break the first blockquote in the ancestors list
     *   2 - Break all blockquotes, so that the new paragraph is not quoted (this is the default)
     */

  }, {
    key: "insertParagraph",
    value: function insertParagraph(editable, rng) {
      rng = rng || range.create(editable); // deleteContents on range.

      rng = rng.deleteContents(); // Wrap range if it needs to be wrapped by paragraph

      rng = rng.wrapBodyInlineWithPara(); // finding paragraph

      var splitRoot = dom.ancestor(rng.sc, dom.isPara);
      var nextPara; // on paragraph: split paragraph

      if (splitRoot) {
        // if it is an empty line with li
        if (dom.isLi(splitRoot) && (dom.isEmpty(splitRoot) || dom.deepestChildIsEmpty(splitRoot))) {
          // toggle UL/OL and escape
          this.bullet.toggleList(splitRoot.parentNode.nodeName);
          return;
        } else {
          var blockquote = null;

          if (this.options.blockquoteBreakingLevel === 1) {
            blockquote = dom.ancestor(splitRoot, dom.isBlockquote);
          } else if (this.options.blockquoteBreakingLevel === 2) {
            blockquote = dom.lastAncestor(splitRoot, dom.isBlockquote);
          }

          if (blockquote) {
            // We're inside a blockquote and options ask us to break it
            nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0]; // If the split is right before a <br>, remove it so that there's no "empty line"
            // after the split in the new blockquote created

            if (dom.isRightEdgePoint(rng.getStartPoint()) && dom.isBR(rng.sc.nextSibling)) {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(rng.sc.nextSibling).remove();
            }

            var split = dom.splitTree(blockquote, rng.getStartPoint(), {
              isDiscardEmptySplits: true
            });

            if (split) {
              split.parentNode.insertBefore(nextPara, split);
            } else {
              dom.insertAfter(nextPara, blockquote); // There's no split if we were at the end of the blockquote
            }
          } else {
            nextPara = dom.splitTree(splitRoot, rng.getStartPoint()); // not a blockquote, just insert the paragraph

            var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
            emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(emptyAnchors, function (idx, anchor) {
              dom.remove(anchor);
            }); // replace empty heading, pre or custom-made styleTag with P tag

            if ((dom.isHeading(nextPara) || dom.isPre(nextPara) || dom.isCustomStyleTag(nextPara)) && dom.isEmpty(nextPara)) {
              nextPara = dom.replace(nextPara, 'p');
            }
          }
        } // no paragraph: insert empty paragraph

      } else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(dom.emptyPara)[0];

        if (next) {
          rng.sc.insertBefore(nextPara, next);
        } else {
          rng.sc.appendChild(nextPara);
        }
      }

      range.create(nextPara, 0).normalize().select().scrollIntoView(editable);
    }
  }]);

  return Typing;
}();


// CONCATENATED MODULE: ./src/js/base/editing/Table.js
function Table_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Table_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Table_createClass(Constructor, protoProps, staticProps) { if (protoProps) Table_defineProperties(Constructor.prototype, protoProps); if (staticProps) Table_defineProperties(Constructor, staticProps); return Constructor; }





/**
 * @class Create a virtual table to create what actions to do in change.
 * @param {object} startPoint Cell selected to apply change.
 * @param {enum} where  Where change will be applied Row or Col. Use enum: TableResultAction.where
 * @param {enum} action Action to be applied. Use enum: TableResultAction.requestAction
 * @param {object} domTable Dom element of table to make changes.
 */

var TableResultAction = function TableResultAction(startPoint, where, action, domTable) {
  var _startPoint = {
    'colPos': 0,
    'rowPos': 0
  };
  var _virtualTable = [];
  var _actionCellList = []; /// ///////////////////////////////////////////
  // Private functions
  /// ///////////////////////////////////////////

  /**
   * Set the startPoint of action.
   */

  function setStartPoint() {
    if (!startPoint || !startPoint.tagName || startPoint.tagName.toLowerCase() !== 'td' && startPoint.tagName.toLowerCase() !== 'th') {
      // Impossible to identify start Cell point
      return;
    }

    _startPoint.colPos = startPoint.cellIndex;

    if (!startPoint.parentElement || !startPoint.parentElement.tagName || startPoint.parentElement.tagName.toLowerCase() !== 'tr') {
      // Impossible to identify start Row point
      return;
    }

    _startPoint.rowPos = startPoint.parentElement.rowIndex;
  }
  /**
   * Define virtual table position info object.
   *
   * @param {int} rowIndex Index position in line of virtual table.
   * @param {int} cellIndex Index position in column of virtual table.
   * @param {object} baseRow Row affected by this position.
   * @param {object} baseCell Cell affected by this position.
   * @param {bool} isSpan Inform if it is an span cell/row.
   */


  function setVirtualTablePosition(rowIndex, cellIndex, baseRow, baseCell, isRowSpan, isColSpan, isVirtualCell) {
    var objPosition = {
      'baseRow': baseRow,
      'baseCell': baseCell,
      'isRowSpan': isRowSpan,
      'isColSpan': isColSpan,
      'isVirtual': isVirtualCell
    };

    if (!_virtualTable[rowIndex]) {
      _virtualTable[rowIndex] = [];
    }

    _virtualTable[rowIndex][cellIndex] = objPosition;
  }
  /**
   * Create action cell object.
   *
   * @param {object} virtualTableCellObj Object of specific position on virtual table.
   * @param {enum} resultAction Action to be applied in that item.
   */


  function getActionCell(virtualTableCellObj, resultAction, virtualRowPosition, virtualColPosition) {
    return {
      'baseCell': virtualTableCellObj.baseCell,
      'action': resultAction,
      'virtualTable': {
        'rowIndex': virtualRowPosition,
        'cellIndex': virtualColPosition
      }
    };
  }
  /**
   * Recover free index of row to append Cell.
   *
   * @param {int} rowIndex Index of row to find free space.
   * @param {int} cellIndex Index of cell to find free space in table.
   */


  function recoverCellIndex(rowIndex, cellIndex) {
    if (!_virtualTable[rowIndex]) {
      return cellIndex;
    }

    if (!_virtualTable[rowIndex][cellIndex]) {
      return cellIndex;
    }

    var newCellIndex = cellIndex;

    while (_virtualTable[rowIndex][newCellIndex]) {
      newCellIndex++;

      if (!_virtualTable[rowIndex][newCellIndex]) {
        return newCellIndex;
      }
    }
  }
  /**
   * Recover info about row and cell and add information to virtual table.
   *
   * @param {object} row Row to recover information.
   * @param {object} cell Cell to recover information.
   */


  function addCellInfoToVirtual(row, cell) {
    var cellIndex = recoverCellIndex(row.rowIndex, cell.cellIndex);
    var cellHasColspan = cell.colSpan > 1;
    var cellHasRowspan = cell.rowSpan > 1;
    var isThisSelectedCell = row.rowIndex === _startPoint.rowPos && cell.cellIndex === _startPoint.colPos;
    setVirtualTablePosition(row.rowIndex, cellIndex, row, cell, cellHasRowspan, cellHasColspan, false); // Add span rows to virtual Table.

    var rowspanNumber = cell.attributes.rowSpan ? parseInt(cell.attributes.rowSpan.value, 10) : 0;

    if (rowspanNumber > 1) {
      for (var rp = 1; rp < rowspanNumber; rp++) {
        var rowspanIndex = row.rowIndex + rp;
        adjustStartPoint(rowspanIndex, cellIndex, cell, isThisSelectedCell);
        setVirtualTablePosition(rowspanIndex, cellIndex, row, cell, true, cellHasColspan, true);
      }
    } // Add span cols to virtual table.


    var colspanNumber = cell.attributes.colSpan ? parseInt(cell.attributes.colSpan.value, 10) : 0;

    if (colspanNumber > 1) {
      for (var cp = 1; cp < colspanNumber; cp++) {
        var cellspanIndex = recoverCellIndex(row.rowIndex, cellIndex + cp);
        adjustStartPoint(row.rowIndex, cellspanIndex, cell, isThisSelectedCell);
        setVirtualTablePosition(row.rowIndex, cellspanIndex, row, cell, cellHasRowspan, true, true);
      }
    }
  }
  /**
   * Process validation and adjust of start point if needed
   *
   * @param {int} rowIndex
   * @param {int} cellIndex
   * @param {object} cell
   * @param {bool} isSelectedCell
   */


  function adjustStartPoint(rowIndex, cellIndex, cell, isSelectedCell) {
    if (rowIndex === _startPoint.rowPos && _startPoint.colPos >= cell.cellIndex && cell.cellIndex <= cellIndex && !isSelectedCell) {
      _startPoint.colPos++;
    }
  }
  /**
   * Create virtual table of cells with all cells, including span cells.
   */


  function createVirtualTable() {
    var rows = domTable.rows;

    for (var rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      var cells = rows[rowIndex].cells;

      for (var cellIndex = 0; cellIndex < cells.length; cellIndex++) {
        addCellInfoToVirtual(rows[rowIndex], cells[cellIndex]);
      }
    }
  }
  /**
   * Get action to be applied on the cell.
   *
   * @param {object} cell virtual table cell to apply action
   */


  function getDeleteResultActionToCell(cell) {
    switch (where) {
      case TableResultAction.where.Column:
        if (cell.isColSpan) {
          return TableResultAction.resultAction.SubtractSpanCount;
        }

        break;

      case TableResultAction.where.Row:
        if (!cell.isVirtual && cell.isRowSpan) {
          return TableResultAction.resultAction.AddCell;
        } else if (cell.isRowSpan) {
          return TableResultAction.resultAction.SubtractSpanCount;
        }

        break;
    }

    return TableResultAction.resultAction.RemoveCell;
  }
  /**
   * Get action to be applied on the cell.
   *
   * @param {object} cell virtual table cell to apply action
   */


  function getAddResultActionToCell(cell) {
    switch (where) {
      case TableResultAction.where.Column:
        if (cell.isColSpan) {
          return TableResultAction.resultAction.SumSpanCount;
        } else if (cell.isRowSpan && cell.isVirtual) {
          return TableResultAction.resultAction.Ignore;
        }

        break;

      case TableResultAction.where.Row:
        if (cell.isRowSpan) {
          return TableResultAction.resultAction.SumSpanCount;
        } else if (cell.isColSpan && cell.isVirtual) {
          return TableResultAction.resultAction.Ignore;
        }

        break;
    }

    return TableResultAction.resultAction.AddCell;
  }

  function init() {
    setStartPoint();
    createVirtualTable();
  } /// ///////////////////////////////////////////
  // Public functions
  /// ///////////////////////////////////////////

  /**
   * Recover array os what to do in table.
   */


  this.getActionList = function () {
    var fixedRow = where === TableResultAction.where.Row ? _startPoint.rowPos : -1;
    var fixedCol = where === TableResultAction.where.Column ? _startPoint.colPos : -1;
    var actualPosition = 0;
    var canContinue = true;

    while (canContinue) {
      var rowPosition = fixedRow >= 0 ? fixedRow : actualPosition;
      var colPosition = fixedCol >= 0 ? fixedCol : actualPosition;
      var row = _virtualTable[rowPosition];

      if (!row) {
        canContinue = false;
        return _actionCellList;
      }

      var cell = row[colPosition];

      if (!cell) {
        canContinue = false;
        return _actionCellList;
      } // Define action to be applied in this cell


      var resultAction = TableResultAction.resultAction.Ignore;

      switch (action) {
        case TableResultAction.requestAction.Add:
          resultAction = getAddResultActionToCell(cell);
          break;

        case TableResultAction.requestAction.Delete:
          resultAction = getDeleteResultActionToCell(cell);
          break;
      }

      _actionCellList.push(getActionCell(cell, resultAction, rowPosition, colPosition));

      actualPosition++;
    }

    return _actionCellList;
  };

  init();
};
/**
*
* Where action occours enum.
*/


TableResultAction.where = {
  'Row': 0,
  'Column': 1
};
/**
*
* Requested action to apply enum.
*/

TableResultAction.requestAction = {
  'Add': 0,
  'Delete': 1
};
/**
*
* Result action to be executed enum.
*/

TableResultAction.resultAction = {
  'Ignore': 0,
  'SubtractSpanCount': 1,
  'RemoveCell': 2,
  'AddCell': 3,
  'SumSpanCount': 4
};
/**
 *
 * @class editing.Table
 *
 * Table
 *
 */

var Table_Table = /*#__PURE__*/function () {
  function Table() {
    Table_classCallCheck(this, Table);
  }

  Table_createClass(Table, [{
    key: "tab",

    /**
     * handle tab key
     *
     * @param {WrappedRange} rng
     * @param {Boolean} isShift
     */
    value: function tab(rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);
      var nextCell = lists[isShift ? 'prev' : 'next'](cells, cell);

      if (nextCell) {
        range.create(nextCell, 0).select();
      }
    }
    /**
     * Add a new row
     *
     * @param {WrappedRange} rng
     * @param {String} position (top/bottom)
     * @return {Node}
     */

  }, {
    key: "addRow",
    value: function addRow(rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var currentTr = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
      var trAttributes = this.recoverAttributes(currentTr);
      var html = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<tr' + trAttributes + '></tr>');
      var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var idCell = 0; idCell < actions.length; idCell++) {
        var currentCell = actions[idCell];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            html.append('<td' + tdAttributes + '>' + dom.blank + '</td>');
            break;

          case TableResultAction.resultAction.SumSpanCount:
            {
              if (position === 'top') {
                var baseCellTr = currentCell.baseCell.parent;
                var isTopFromRowSpan = (!baseCellTr ? 0 : currentCell.baseCell.closest('tr').rowIndex) <= currentTr[0].rowIndex;

                if (isTopFromRowSpan) {
                  var newTd = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div></div>').append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<td' + tdAttributes + '>' + dom.blank + '</td>').removeAttr('rowspan')).html();
                  html.append(newTd);
                  break;
                }
              }

              var rowspanNumber = parseInt(currentCell.baseCell.rowSpan, 10);
              rowspanNumber++;
              currentCell.baseCell.setAttribute('rowSpan', rowspanNumber);
            }
            break;
        }
      }

      if (position === 'top') {
        currentTr.before(html);
      } else {
        var cellHasRowspan = cell.rowSpan > 1;

        if (cellHasRowspan) {
          var lastTrIndex = currentTr[0].rowIndex + (cell.rowSpan - 2);
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentTr).parent().find('tr')[lastTrIndex]).after(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(html));
          return;
        }

        currentTr.after(html);
      }
    }
    /**
     * Add a new col
     *
     * @param {WrappedRange} rng
     * @param {String} position (left/right)
     * @return {Node}
     */

  }, {
    key: "addCol",
    value: function addCol(rng, position) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
      var rowsGroup = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).siblings();
      rowsGroup.push(row);
      var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Add, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        var currentCell = actions[actionIndex];
        var tdAttributes = this.recoverAttributes(currentCell.baseCell);

        switch (currentCell.action) {
          case TableResultAction.resultAction.AddCell:
            if (position === 'right') {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).after('<td' + tdAttributes + '>' + dom.blank + '</td>');
            } else {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }

            break;

          case TableResultAction.resultAction.SumSpanCount:
            if (position === 'right') {
              var colspanNumber = parseInt(currentCell.baseCell.colSpan, 10);
              colspanNumber++;
              currentCell.baseCell.setAttribute('colSpan', colspanNumber);
            } else {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(currentCell.baseCell).before('<td' + tdAttributes + '>' + dom.blank + '</td>');
            }

            break;
        }
      }
    }
    /*
    * Copy attributes from element.
    *
    * @param {object} Element to recover attributes.
    * @return {string} Copied string elements.
    */

  }, {
    key: "recoverAttributes",
    value: function recoverAttributes(el) {
      var resultStr = '';

      if (!el) {
        return resultStr;
      }

      var attrList = el.attributes || [];

      for (var i = 0; i < attrList.length; i++) {
        if (attrList[i].name.toLowerCase() === 'id') {
          continue;
        }

        if (attrList[i].specified) {
          resultStr += ' ' + attrList[i].name + '=\'' + attrList[i].value + '\'';
        }
      }

      return resultStr;
    }
    /**
     * Delete current row
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteRow",
    value: function deleteRow(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
      var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
      var rowPos = row[0].rowIndex;
      var vTable = new TableResultAction(cell, TableResultAction.where.Row, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        var baseCell = actions[actionIndex].baseCell;
        var virtualPosition = actions[actionIndex].virtualTable;
        var hasRowspan = baseCell.rowSpan && baseCell.rowSpan > 1;
        var rowspanNumber = hasRowspan ? parseInt(baseCell.rowSpan, 10) : 0;

        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;

          case TableResultAction.resultAction.AddCell:
            {
              var nextRow = row.next('tr')[0];

              if (!nextRow) {
                continue;
              }

              var cloneRow = row[0].cells[cellPos];

              if (hasRowspan) {
                if (rowspanNumber > 2) {
                  rowspanNumber--;
                  nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                  nextRow.cells[cellPos].setAttribute('rowSpan', rowspanNumber);
                  nextRow.cells[cellPos].innerHTML = '';
                } else if (rowspanNumber === 2) {
                  nextRow.insertBefore(cloneRow, nextRow.cells[cellPos]);
                  nextRow.cells[cellPos].removeAttribute('rowSpan');
                  nextRow.cells[cellPos].innerHTML = '';
                }
              }
            }
            continue;

          case TableResultAction.resultAction.SubtractSpanCount:
            if (hasRowspan) {
              if (rowspanNumber > 2) {
                rowspanNumber--;
                baseCell.setAttribute('rowSpan', rowspanNumber);

                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                  baseCell.innerHTML = '';
                }
              } else if (rowspanNumber === 2) {
                baseCell.removeAttribute('rowSpan');

                if (virtualPosition.rowIndex !== rowPos && baseCell.cellIndex === cellPos) {
                  baseCell.innerHTML = '';
                }
              }
            }

            continue;

          case TableResultAction.resultAction.RemoveCell:
            // Do not need remove cell because row will be deleted.
            continue;
        }
      }

      row.remove();
    }
    /**
     * Delete current col
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteCol",
    value: function deleteCol(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('tr');
      var cellPos = row.children('td, th').index(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell));
      var vTable = new TableResultAction(cell, TableResultAction.where.Column, TableResultAction.requestAction.Delete, external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(row).closest('table')[0]);
      var actions = vTable.getActionList();

      for (var actionIndex = 0; actionIndex < actions.length; actionIndex++) {
        if (!actions[actionIndex]) {
          continue;
        }

        switch (actions[actionIndex].action) {
          case TableResultAction.resultAction.Ignore:
            continue;

          case TableResultAction.resultAction.SubtractSpanCount:
            {
              var baseCell = actions[actionIndex].baseCell;
              var hasColspan = baseCell.colSpan && baseCell.colSpan > 1;

              if (hasColspan) {
                var colspanNumber = baseCell.colSpan ? parseInt(baseCell.colSpan, 10) : 0;

                if (colspanNumber > 2) {
                  colspanNumber--;
                  baseCell.setAttribute('colSpan', colspanNumber);

                  if (baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = '';
                  }
                } else if (colspanNumber === 2) {
                  baseCell.removeAttribute('colSpan');

                  if (baseCell.cellIndex === cellPos) {
                    baseCell.innerHTML = '';
                  }
                }
              }
            }
            continue;

          case TableResultAction.resultAction.RemoveCell:
            dom.remove(actions[actionIndex].baseCell, true);
            continue;
        }
      }
    }
    /**
     * create empty table element
     *
     * @param {Number} rowCount
     * @param {Number} colCount
     * @return {Node}
     */

  }, {
    key: "createTable",
    value: function createTable(colCount, rowCount, options) {
      var tds = [];
      var tdHTML;

      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
      }

      tdHTML = tds.join('');
      var trs = [];
      var trHTML;

      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
      }

      trHTML = trs.join('');
      var $table = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<table>' + trHTML + '</table>');

      if (options && options.tableClassName) {
        $table.addClass(options.tableClassName);
      }

      return $table[0];
    }
    /**
     * Delete current table
     *
     * @param {WrappedRange} rng
     * @return {Node}
     */

  }, {
    key: "deleteTable",
    value: function deleteTable(rng) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(cell).closest('table').remove();
    }
  }]);

  return Table;
}();


// CONCATENATED MODULE: ./src/js/base/module/Editor.js
function Editor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Editor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Editor_createClass(Constructor, protoProps, staticProps) { if (protoProps) Editor_defineProperties(Constructor.prototype, protoProps); if (staticProps) Editor_defineProperties(Constructor, staticProps); return Constructor; }














var KEY_BOGUS = 'bogus';
/**
 * @class Editor
 */

var Editor_Editor = /*#__PURE__*/function () {
  function Editor(context) {
    var _this = this;

    Editor_classCallCheck(this, Editor);

    this.context = context;
    this.$note = context.layoutInfo.note;
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.editable = this.$editable[0];
    this.lastRange = null;
    this.snapshot = null;
    this.style = new Style_Style();
    this.table = new Table_Table();
    this.typing = new Typing_Typing(context);
    this.bullet = new Bullet_Bullet();
    this.history = new History_History(context);
    this.context.memo('help.escape', this.lang.help.escape);
    this.context.memo('help.undo', this.lang.help.undo);
    this.context.memo('help.redo', this.lang.help.redo);
    this.context.memo('help.tab', this.lang.help.tab);
    this.context.memo('help.untab', this.lang.help.untab);
    this.context.memo('help.insertParagraph', this.lang.help.insertParagraph);
    this.context.memo('help.insertOrderedList', this.lang.help.insertOrderedList);
    this.context.memo('help.insertUnorderedList', this.lang.help.insertUnorderedList);
    this.context.memo('help.indent', this.lang.help.indent);
    this.context.memo('help.outdent', this.lang.help.outdent);
    this.context.memo('help.formatPara', this.lang.help.formatPara);
    this.context.memo('help.insertHorizontalRule', this.lang.help.insertHorizontalRule);
    this.context.memo('help.fontName', this.lang.help.fontName); // native commands(with execCommand), generate function for execCommand

    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'formatBlock', 'removeFormat', 'backColor'];

    for (var idx = 0, len = commands.length; idx < len; idx++) {
      this[commands[idx]] = function (sCmd) {
        return function (value) {
          _this.beforeCommand();

          document.execCommand(sCmd, false, value);

          _this.afterCommand(true);
        };
      }(commands[idx]);

      this.context.memo('help.' + commands[idx], this.lang.help[commands[idx]]);
    }

    this.fontName = this.wrapCommand(function (value) {
      return _this.fontStyling('font-family', env.validFontName(value));
    });
    this.fontSize = this.wrapCommand(function (value) {
      var unit = _this.currentStyle()['font-size-unit'];

      return _this.fontStyling('font-size', value + unit);
    });
    this.fontSizeUnit = this.wrapCommand(function (value) {
      var size = _this.currentStyle()['font-size'];

      return _this.fontStyling('font-size', size + value);
    });

    for (var _idx = 1; _idx <= 6; _idx++) {
      this['formatH' + _idx] = function (idx) {
        return function () {
          _this.formatBlock('H' + idx);
        };
      }(_idx);

      this.context.memo('help.formatH' + _idx, this.lang.help['formatH' + _idx]);
    }

    this.insertParagraph = this.wrapCommand(function () {
      _this.typing.insertParagraph(_this.editable);
    });
    this.insertOrderedList = this.wrapCommand(function () {
      _this.bullet.insertOrderedList(_this.editable);
    });
    this.insertUnorderedList = this.wrapCommand(function () {
      _this.bullet.insertUnorderedList(_this.editable);
    });
    this.indent = this.wrapCommand(function () {
      _this.bullet.indent(_this.editable);
    });
    this.outdent = this.wrapCommand(function () {
      _this.bullet.outdent(_this.editable);
    });
    /**
     * insertNode
     * insert node
     * @param {Node} node
     */

    this.insertNode = this.wrapCommand(function (node) {
      if (_this.isLimited(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).text().length)) {
        return;
      }

      var rng = _this.getLastRange();

      rng.insertNode(node);

      _this.setLastRange(range.createFromNodeAfter(node).select());
    });
    /**
     * insert text
     * @param {String} text
     */

    this.insertText = this.wrapCommand(function (text) {
      if (_this.isLimited(text.length)) {
        return;
      }

      var rng = _this.getLastRange();

      var textNode = rng.insertNode(dom.createText(text));

      _this.setLastRange(range.create(textNode, dom.nodeLength(textNode)).select());
    });
    /**
     * paste HTML
     * @param {String} markup
     */

    this.pasteHTML = this.wrapCommand(function (markup) {
      if (_this.isLimited(markup.length)) {
        return;
      }

      markup = _this.context.invoke('codeview.purify', markup);

      var contents = _this.getLastRange().pasteHTML(markup);

      _this.setLastRange(range.createFromNodeAfter(lists.last(contents)).select());
    });
    /**
     * formatBlock
     *
     * @param {String} tagName
     */

    this.formatBlock = this.wrapCommand(function (tagName, $target) {
      var onApplyCustomStyle = _this.options.callbacks.onApplyCustomStyle;

      if (onApplyCustomStyle) {
        onApplyCustomStyle.call(_this, $target, _this.context, _this.onFormatBlock);
      } else {
        _this.onFormatBlock(tagName, $target);
      }
    });
    /**
     * insert horizontal rule
     */

    this.insertHorizontalRule = this.wrapCommand(function () {
      var hrNode = _this.getLastRange().insertNode(dom.create('HR'));

      if (hrNode.nextSibling) {
        _this.setLastRange(range.create(hrNode.nextSibling, 0).normalize().select());
      }
    });
    /**
     * lineHeight
     * @param {String} value
     */

    this.lineHeight = this.wrapCommand(function (value) {
      _this.style.stylePara(_this.getLastRange(), {
        lineHeight: value
      });
    });
    /**
     * create link (command)
     *
     * @param {Object} linkInfo
     */

    this.createLink = this.wrapCommand(function (linkInfo) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.isNewWindow;
      var checkProtocol = linkInfo.checkProtocol;

      var rng = linkInfo.range || _this.getLastRange();

      var additionalTextLength = linkText.length - rng.toString().length;

      if (additionalTextLength > 0 && _this.isLimited(additionalTextLength)) {
        return;
      }

      var isTextChanged = rng.toString() !== linkText; // handle spaced urls from input

      if (typeof linkUrl === 'string') {
        linkUrl = linkUrl.trim();
      }

      if (_this.options.onCreateLink) {
        linkUrl = _this.options.onCreateLink(linkUrl);
      } else if (checkProtocol) {
        // if url doesn't have any protocol and not even a relative or a label, use http:// as default
        linkUrl = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(linkUrl) ? linkUrl : _this.options.defaultProtocol + linkUrl;
      }

      var anchors = [];

      if (isTextChanged) {
        rng = rng.deleteContents();
        var anchor = rng.insertNode(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<A>' + linkText + '</A>')[0]);
        anchors.push(anchor);
      } else {
        anchors = _this.style.styleNodes(rng, {
          nodeName: 'A',
          expandClosestSibling: true,
          onlyPartialContains: true
        });
      }

      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(anchors, function (idx, anchor) {
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href', linkUrl);

        if (isNewWindow) {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('target', '_blank');
        } else {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).removeAttr('target');
        }
      });

      _this.setLastRange(_this.createRangeFromList(anchors).select());
    });
    /**
     * setting color
     *
     * @param {Object} sObjColor  color code
     * @param {String} sObjColor.foreColor foreground color
     * @param {String} sObjColor.backColor background color
     */

    this.color = this.wrapCommand(function (colorInfo) {
      var foreColor = colorInfo.foreColor;
      var backColor = colorInfo.backColor;

      if (foreColor) {
        document.execCommand('foreColor', false, foreColor);
      }

      if (backColor) {
        document.execCommand('backColor', false, backColor);
      }
    });
    /**
     * Set foreground color
     *
     * @param {String} colorCode foreground color code
     */

    this.foreColor = this.wrapCommand(function (colorInfo) {
      document.execCommand('foreColor', false, colorInfo);
    });
    /**
     * insert Table
     *
     * @param {String} dimension of table (ex : "5x5")
     */

    this.insertTable = this.wrapCommand(function (dim) {
      var dimension = dim.split('x');

      var rng = _this.getLastRange().deleteContents();

      rng.insertNode(_this.table.createTable(dimension[0], dimension[1], _this.options));
    });
    /**
     * remove media object and Figure Elements if media object is img with Figure.
     */

    this.removeMedia = this.wrapCommand(function () {
      var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget()).parent();

      if ($target.closest('figure').length) {
        $target.closest('figure').remove();
      } else {
        $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget()).detach();
      }

      _this.context.triggerEvent('media.delete', $target, _this.$editable);
    });
    /**
     * float me
     *
     * @param {String} value
     */

    this.floatMe = this.wrapCommand(function (value) {
      var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget());
      $target.toggleClass('note-float-left', value === 'left');
      $target.toggleClass('note-float-right', value === 'right');
      $target.css('float', value === 'none' ? '' : value);
    });
    /**
     * resize overlay element
     * @param {String} value
     */

    this.resize = this.wrapCommand(function (value) {
      var $target = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(_this.restoreTarget());
      value = parseFloat(value);

      if (value === 0) {
        $target.css('width', '');
      } else {
        $target.css({
          width: value * 100 + '%',
          height: ''
        });
      }
    });
  }

  Editor_createClass(Editor, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      // bind custom events
      this.$editable.on('keydown', function (event) {
        if (event.keyCode === core_key.code.ENTER) {
          _this2.context.triggerEvent('enter', event);
        }

        _this2.context.triggerEvent('keydown', event); // keep a snapshot to limit text on input event


        _this2.snapshot = _this2.history.makeSnapshot();
        _this2.hasKeyShortCut = false;

        if (!event.isDefaultPrevented()) {
          if (_this2.options.shortcuts) {
            _this2.hasKeyShortCut = _this2.handleKeyMap(event);
          } else {
            _this2.preventDefaultEditableShortCuts(event);
          }
        }

        if (_this2.isLimited(1, event)) {
          var lastRange = _this2.getLastRange();

          if (lastRange.eo - lastRange.so === 0) {
            return false;
          }
        }

        _this2.setLastRange(); // record undo in the key event except keyMap.


        if (_this2.options.recordEveryKeystroke) {
          if (_this2.hasKeyShortCut === false) {
            _this2.history.recordUndo();
          }
        }
      }).on('keyup', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('keyup', event);
      }).on('focus', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('focus', event);
      }).on('blur', function (event) {
        _this2.context.triggerEvent('blur', event);
      }).on('mousedown', function (event) {
        _this2.context.triggerEvent('mousedown', event);
      }).on('mouseup', function (event) {
        _this2.setLastRange();

        _this2.history.recordUndo();

        _this2.context.triggerEvent('mouseup', event);
      }).on('scroll', function (event) {
        _this2.context.triggerEvent('scroll', event);
      }).on('paste', function (event) {
        _this2.setLastRange();

        _this2.context.triggerEvent('paste', event);
      }).on('input', function () {
        // To limit composition characters (e.g. Korean)
        if (_this2.isLimited(0) && _this2.snapshot) {
          _this2.history.applySnapshot(_this2.snapshot);
        }
      });
      this.$editable.attr('spellcheck', this.options.spellCheck);
      this.$editable.attr('autocorrect', this.options.spellCheck);

      if (this.options.disableGrammar) {
        this.$editable.attr('data-gramm', false);
      } // init content before set event


      this.$editable.html(dom.html(this.$note) || dom.emptyPara);
      this.$editable.on(env.inputEventName, func.debounce(function () {
        _this2.context.triggerEvent('change', _this2.$editable.html(), _this2.$editable);
      }, 10));
      this.$editable.on('focusin', function (event) {
        _this2.context.triggerEvent('focusin', event);
      }).on('focusout', function (event) {
        _this2.context.triggerEvent('focusout', event);
      });

      if (this.options.airMode) {
        if (this.options.overrideContextMenu) {
          this.$editor.on('contextmenu', function (event) {
            _this2.context.triggerEvent('contextmenu', event);

            return false;
          });
        }
      } else {
        if (this.options.width) {
          this.$editor.outerWidth(this.options.width);
        }

        if (this.options.height) {
          this.$editable.outerHeight(this.options.height);
        }

        if (this.options.maxHeight) {
          this.$editable.css('max-height', this.options.maxHeight);
        }

        if (this.options.minHeight) {
          this.$editable.css('min-height', this.options.minHeight);
        }
      }

      this.history.recordUndo();
      this.setLastRange();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$editable.off();
    }
  }, {
    key: "handleKeyMap",
    value: function handleKeyMap(event) {
      var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
      var keys = [];

      if (event.metaKey) {
        keys.push('CMD');
      }

      if (event.ctrlKey && !event.altKey) {
        keys.push('CTRL');
      }

      if (event.shiftKey) {
        keys.push('SHIFT');
      }

      var keyName = core_key.nameFromCode[event.keyCode];

      if (keyName) {
        keys.push(keyName);
      }

      var eventName = keyMap[keys.join('+')];

      if (keyName === 'TAB' && !this.options.tabDisable) {
        this.afterCommand();
      } else if (eventName) {
        if (this.context.invoke(eventName) !== false) {
          event.preventDefault(); // if keyMap action was invoked

          return true;
        }
      } else if (core_key.isEdit(event.keyCode)) {
        this.afterCommand();
      }

      return false;
    }
  }, {
    key: "preventDefaultEditableShortCuts",
    value: function preventDefaultEditableShortCuts(event) {
      // B(Bold, 66) / I(Italic, 73) / U(Underline, 85)
      if ((event.ctrlKey || event.metaKey) && lists.contains([66, 73, 85], event.keyCode)) {
        event.preventDefault();
      }
    }
  }, {
    key: "isLimited",
    value: function isLimited(pad, event) {
      pad = pad || 0;

      if (typeof event !== 'undefined') {
        if (core_key.isMove(event.keyCode) || core_key.isNavigation(event.keyCode) || event.ctrlKey || event.metaKey || lists.contains([core_key.code.BACKSPACE, core_key.code.DELETE], event.keyCode)) {
          return false;
        }
      }

      if (this.options.maxTextLength > 0) {
        if (this.$editable.text().length + pad > this.options.maxTextLength) {
          return true;
        }
      }

      return false;
    }
    /**
     * create range
     * @return {WrappedRange}
     */

  }, {
    key: "createRange",
    value: function createRange() {
      this.focus();
      this.setLastRange();
      return this.getLastRange();
    }
    /**
     * create a new range from the list of elements
     *
     * @param {list} dom element list
     * @return {WrappedRange}
     */

  }, {
    key: "createRangeFromList",
    value: function createRangeFromList(lst) {
      var startRange = range.createFromNodeBefore(lists.head(lst));
      var startPoint = startRange.getStartPoint();
      var endRange = range.createFromNodeAfter(lists.last(lst));
      var endPoint = endRange.getEndPoint();
      return range.create(startPoint.node, startPoint.offset, endPoint.node, endPoint.offset);
    }
    /**
     * set the last range
     *
     * if given rng is exist, set rng as the last range
     * or create a new range at the end of the document
     *
     * @param {WrappedRange} rng
     */

  }, {
    key: "setLastRange",
    value: function setLastRange(rng) {
      if (rng) {
        this.lastRange = rng;
      } else {
        this.lastRange = range.create(this.editable);

        if (external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.lastRange.sc).closest('.note-editable').length === 0) {
          this.lastRange = range.createFromBodyElement(this.editable);
        }
      }
    }
    /**
     * get the last range
     *
     * if there is a saved last range, return it
     * or create a new range and return it
     *
     * @return {WrappedRange}
     */

  }, {
    key: "getLastRange",
    value: function getLastRange() {
      if (!this.lastRange) {
        this.setLastRange();
      }

      return this.lastRange;
    }
    /**
     * saveRange
     *
     * save current range
     *
     * @param {Boolean} [thenCollapse=false]
     */

  }, {
    key: "saveRange",
    value: function saveRange(thenCollapse) {
      if (thenCollapse) {
        this.getLastRange().collapse().select();
      }
    }
    /**
     * restoreRange
     *
     * restore lately range
     */

  }, {
    key: "restoreRange",
    value: function restoreRange() {
      if (this.lastRange) {
        this.lastRange.select();
        this.focus();
      }
    }
  }, {
    key: "saveTarget",
    value: function saveTarget(node) {
      this.$editable.data('target', node);
    }
  }, {
    key: "clearTarget",
    value: function clearTarget() {
      this.$editable.removeData('target');
    }
  }, {
    key: "restoreTarget",
    value: function restoreTarget() {
      return this.$editable.data('target');
    }
    /**
     * currentStyle
     *
     * current style
     * @return {Object|Boolean} unfocus
     */

  }, {
    key: "currentStyle",
    value: function currentStyle() {
      var rng = range.create();

      if (rng) {
        rng = rng.normalize();
      }

      return rng ? this.style.current(rng) : this.style.fromNode(this.$editable);
    }
    /**
     * style from node
     *
     * @param {jQuery} $node
     * @return {Object}
     */

  }, {
    key: "styleFromNode",
    value: function styleFromNode($node) {
      return this.style.fromNode($node);
    }
    /**
     * undo
     */

  }, {
    key: "undo",
    value: function undo() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.undo();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /*
    * commit
    */

  }, {
    key: "commit",
    value: function commit() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.commit();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /**
     * redo
     */

  }, {
    key: "redo",
    value: function redo() {
      this.context.triggerEvent('before.command', this.$editable.html());
      this.history.redo();
      this.context.triggerEvent('change', this.$editable.html(), this.$editable);
    }
    /**
     * before command
     */

  }, {
    key: "beforeCommand",
    value: function beforeCommand() {
      this.context.triggerEvent('before.command', this.$editable.html()); // Set styleWithCSS before run a command

      document.execCommand('styleWithCSS', false, this.options.styleWithCSS); // keep focus on editable before command execution

      this.focus();
    }
    /**
     * after command
     * @param {Boolean} isPreventTrigger
     */

  }, {
    key: "afterCommand",
    value: function afterCommand(isPreventTrigger) {
      this.normalizeContent();
      this.history.recordUndo();

      if (!isPreventTrigger) {
        this.context.triggerEvent('change', this.$editable.html(), this.$editable);
      }
    }
    /**
     * handle tab key
     */

  }, {
    key: "tab",
    value: function tab() {
      var rng = this.getLastRange();

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.table.tab(rng);
      } else {
        if (this.options.tabSize === 0) {
          return false;
        }

        if (!this.isLimited(this.options.tabSize)) {
          this.beforeCommand();
          this.typing.insertTab(rng, this.options.tabSize);
          this.afterCommand();
        }
      }
    }
    /**
     * handle shift+tab key
     */

  }, {
    key: "untab",
    value: function untab() {
      var rng = this.getLastRange();

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.table.tab(rng, true);
      } else {
        if (this.options.tabSize === 0) {
          return false;
        }
      }
    }
    /**
     * run given function between beforeCommand and afterCommand
     */

  }, {
    key: "wrapCommand",
    value: function wrapCommand(fn) {
      return function () {
        this.beforeCommand();
        fn.apply(this, arguments);
        this.afterCommand();
      };
    }
    /**
     * insert image
     *
     * @param {String} src
     * @param {String|Function} param
     * @return {Promise}
     */

  }, {
    key: "insertImage",
    value: function insertImage(src, param) {
      var _this3 = this;

      return createImage(src, param).then(function ($image) {
        _this3.beforeCommand();

        if (typeof param === 'function') {
          param($image);
        } else {
          if (typeof param === 'string') {
            $image.attr('data-filename', param);
          }

          $image.css('width', Math.min(_this3.$editable.width(), $image.width()));
        }

        $image.show();

        _this3.getLastRange().insertNode($image[0]);

        _this3.setLastRange(range.createFromNodeAfter($image[0]).select());

        _this3.afterCommand();
      }).fail(function (e) {
        _this3.context.triggerEvent('image.upload.error', e);
      });
    }
    /**
     * insertImages
     * @param {File[]} files
     */

  }, {
    key: "insertImagesAsDataURL",
    value: function insertImagesAsDataURL(files) {
      var _this4 = this;

      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(files, function (idx, file) {
        var filename = file.name;

        if (_this4.options.maximumImageFileSize && _this4.options.maximumImageFileSize < file.size) {
          _this4.context.triggerEvent('image.upload.error', _this4.lang.image.maximumFileSizeError);
        } else {
          readFileAsDataURL(file).then(function (dataURL) {
            return _this4.insertImage(dataURL, filename);
          }).fail(function () {
            _this4.context.triggerEvent('image.upload.error');
          });
        }
      });
    }
    /**
     * insertImagesOrCallback
     * @param {File[]} files
     */

  }, {
    key: "insertImagesOrCallback",
    value: function insertImagesOrCallback(files) {
      var callbacks = this.options.callbacks; // If onImageUpload set,

      if (callbacks.onImageUpload) {
        this.context.triggerEvent('image.upload', files); // else insert Image as dataURL
      } else {
        this.insertImagesAsDataURL(files);
      }
    }
    /**
     * return selected plain text
     * @return {String} text
     */

  }, {
    key: "getSelectedText",
    value: function getSelectedText() {
      var rng = this.getLastRange(); // if range on anchor, expand range with anchor

      if (rng.isOnAnchor()) {
        rng = range.createFromNode(dom.ancestor(rng.sc, dom.isAnchor));
      }

      return rng.toString();
    }
  }, {
    key: "onFormatBlock",
    value: function onFormatBlock(tagName, $target) {
      // [workaround] for MSIE, IE need `<`
      document.execCommand('FormatBlock', false, env.isMSIE ? '<' + tagName + '>' : tagName); // support custom class

      if ($target && $target.length) {
        // find the exact element has given tagName
        if ($target[0].tagName.toUpperCase() !== tagName.toUpperCase()) {
          $target = $target.find(tagName);
        }

        if ($target && $target.length) {
          var className = $target[0].className || '';

          if (className) {
            var currentRange = this.createRange();
            var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()([currentRange.sc, currentRange.ec]).closest(tagName);
            $parent.addClass(className);
          }
        }
      }
    }
  }, {
    key: "formatPara",
    value: function formatPara() {
      this.formatBlock('P');
    }
  }, {
    key: "fontStyling",
    value: function fontStyling(target, value) {
      var rng = this.getLastRange();

      if (rng !== '') {
        var spans = this.style.styleNodes(rng);
        this.$editor.find('.note-status-output').html('');
        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(spans).css(target, value); // [workaround] added styled bogus span for style
        //  - also bogus character needed for cursor position

        if (rng.isCollapsed()) {
          var firstSpan = lists.head(spans);

          if (firstSpan && !dom.nodeLength(firstSpan)) {
            firstSpan.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR;
            range.createFromNode(firstSpan.firstChild).select();
            this.setLastRange();
            this.$editable.data(KEY_BOGUS, firstSpan);
          }
        } else {
          this.setLastRange(this.createRangeFromList(spans).select());
        }
      } else {
        var noteStatusOutput = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.now();
        this.$editor.find('.note-status-output').html('<div id="note-status-output-' + noteStatusOutput + '" class="alert alert-info">' + this.lang.output.noSelection + '</div>');
        setTimeout(function () {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('#note-status-output-' + noteStatusOutput).remove();
        }, 5000);
      }
    }
    /**
     * unlink
     *
     * @type command
     */

  }, {
    key: "unlink",
    value: function unlink() {
      var rng = this.getLastRange();

      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();
        this.setLastRange();
        this.beforeCommand();
        document.execCommand('unlink');
        this.afterCommand();
      }
    }
    /**
     * returns link info
     *
     * @return {Object}
     * @return {WrappedRange} return.range
     * @return {String} return.text
     * @return {Boolean} [return.isNewWindow=true]
     * @return {String} [return.url=""]
     */

  }, {
    key: "getLinkInfo",
    value: function getLinkInfo() {
      var rng = this.getLastRange().expand(dom.isAnchor); // Get the first anchor on range(for edit).

      var $anchor = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(lists.head(rng.nodes(dom.isAnchor)));
      var linkInfo = {
        range: rng,
        text: rng.toString(),
        url: $anchor.length ? $anchor.attr('href') : ''
      }; // When anchor exists,

      if ($anchor.length) {
        // Set isNewWindow by checking its target.
        linkInfo.isNewWindow = $anchor.attr('target') === '_blank';
      }

      return linkInfo;
    }
  }, {
    key: "addRow",
    value: function addRow(position) {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.addRow(rng, position);
        this.afterCommand();
      }
    }
  }, {
    key: "addCol",
    value: function addCol(position) {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.addCol(rng, position);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteRow",
    value: function deleteRow() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteRow(rng);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteCol",
    value: function deleteCol() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteCol(rng);
        this.afterCommand();
      }
    }
  }, {
    key: "deleteTable",
    value: function deleteTable() {
      var rng = this.getLastRange(this.$editable);

      if (rng.isCollapsed() && rng.isOnCell()) {
        this.beforeCommand();
        this.table.deleteTable(rng);
        this.afterCommand();
      }
    }
    /**
     * @param {Position} pos
     * @param {jQuery} $target - target element
     * @param {Boolean} [bKeepRatio] - keep ratio
     */

  }, {
    key: "resizeTo",
    value: function resizeTo(pos, $target, bKeepRatio) {
      var imageSize;

      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
        };
      } else {
        imageSize = {
          width: pos.x,
          height: pos.y
        };
      }

      $target.css(imageSize);
    }
    /**
     * returns whether editable area has focus or not.
     */

  }, {
    key: "hasFocus",
    value: function hasFocus() {
      return this.$editable.is(':focus');
    }
    /**
     * set focus
     */

  }, {
    key: "focus",
    value: function focus() {
      // [workaround] Screen will move when page is scolled in IE.
      //  - do focus when not focused
      if (!this.hasFocus()) {
        this.$editable.focus();
      }
    }
    /**
     * returns whether contents is empty or not.
     * @return {Boolean}
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return dom.isEmpty(this.$editable[0]) || dom.emptyPara === this.$editable.html();
    }
    /**
     * Removes all contents and restores the editable instance to an _emptyPara_.
     */

  }, {
    key: "empty",
    value: function empty() {
      this.context.invoke('code', dom.emptyPara);
    }
    /**
     * normalize content
     */

  }, {
    key: "normalizeContent",
    value: function normalizeContent() {
      this.$editable[0].normalize();
    }
  }]);

  return Editor;
}();


// CONCATENATED MODULE: ./src/js/base/module/Clipboard.js
function Clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clipboard_defineProperties(Constructor, staticProps); return Constructor; }



var Clipboard_Clipboard = /*#__PURE__*/function () {
  function Clipboard(context) {
    Clipboard_classCallCheck(this, Clipboard);

    this.context = context;
    this.$editable = context.layoutInfo.editable;
  }

  Clipboard_createClass(Clipboard, [{
    key: "initialize",
    value: function initialize() {
      this.$editable.on('paste', this.pasteByEvent.bind(this));
    }
    /**
     * paste by clipboard event
     *
     * @param {Event} event
     */

  }, {
    key: "pasteByEvent",
    value: function pasteByEvent(event) {
      var _this = this;

      var clipboardData = event.originalEvent.clipboardData;

      if (clipboardData && clipboardData.items && clipboardData.items.length) {
        var item = clipboardData.items.length > 1 ? clipboardData.items[1] : lists.head(clipboardData.items);

        if (item.kind === 'file' && item.type.indexOf('image/') !== -1) {
          // paste img file
          this.context.invoke('editor.insertImagesOrCallback', [item.getAsFile()]);
          event.preventDefault();
        } else if (item.kind === 'string') {
          // paste text with maxTextLength check
          if (this.context.invoke('editor.isLimited', clipboardData.getData('Text').length)) {
            event.preventDefault();
          }
        }
      } else if (window.clipboardData) {
        // for IE
        var text = window.clipboardData.getData('text');

        if (this.context.invoke('editor.isLimited', text.length)) {
          event.preventDefault();
        }
      } // Call editor.afterCommand after proceeding default event handler


      setTimeout(function () {
        _this.context.invoke('editor.afterCommand');
      }, 10);
    }
  }]);

  return Clipboard;
}();


// CONCATENATED MODULE: ./src/js/base/module/Dropzone.js
function Dropzone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Dropzone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Dropzone_createClass(Constructor, protoProps, staticProps) { if (protoProps) Dropzone_defineProperties(Constructor.prototype, protoProps); if (staticProps) Dropzone_defineProperties(Constructor, staticProps); return Constructor; }



var Dropzone_Dropzone = /*#__PURE__*/function () {
  function Dropzone(context) {
    Dropzone_classCallCheck(this, Dropzone);

    this.context = context;
    this.$eventListener = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.documentEventHandlers = {};
    this.$dropzone = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', '</div>'].join('')).prependTo(this.$editor);
  }
  /**
   * attach Drag and Drop Events
   */


  Dropzone_createClass(Dropzone, [{
    key: "initialize",
    value: function initialize() {
      if (this.options.disableDragAndDrop) {
        // prevent default drop event
        this.documentEventHandlers.onDrop = function (e) {
          e.preventDefault();
        }; // do not consider outside of dropzone


        this.$eventListener = this.$dropzone;
        this.$eventListener.on('drop', this.documentEventHandlers.onDrop);
      } else {
        this.attachDragAndDropEvent();
      }
    }
    /**
     * attach Drag and Drop Events
     */

  }, {
    key: "attachDragAndDropEvent",
    value: function attachDragAndDropEvent() {
      var _this = this;

      var collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();
      var $dropzoneMessage = this.$dropzone.find('.note-dropzone-message');

      this.documentEventHandlers.onDragenter = function (e) {
        var isCodeview = _this.context.invoke('codeview.isActivated');

        var hasEditorSize = _this.$editor.width() > 0 && _this.$editor.height() > 0;

        if (!isCodeview && !collection.length && hasEditorSize) {
          _this.$editor.addClass('dragover');

          _this.$dropzone.width(_this.$editor.width());

          _this.$dropzone.height(_this.$editor.height());

          $dropzoneMessage.text(_this.lang.image.dragImageHere);
        }

        collection = collection.add(e.target);
      };

      this.documentEventHandlers.onDragleave = function (e) {
        collection = collection.not(e.target); // If nodeName is BODY, then just make it over (fix for IE)

        if (!collection.length || e.target.nodeName === 'BODY') {
          collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();

          _this.$editor.removeClass('dragover');
        }
      };

      this.documentEventHandlers.onDrop = function () {
        collection = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()();

        _this.$editor.removeClass('dragover');
      }; // show dropzone on dragenter when dragging a object to document
      // -but only if the editor is visible, i.e. has a positive width and height


      this.$eventListener.on('dragenter', this.documentEventHandlers.onDragenter).on('dragleave', this.documentEventHandlers.onDragleave).on('drop', this.documentEventHandlers.onDrop); // change dropzone's message on hover.

      this.$dropzone.on('dragenter', function () {
        _this.$dropzone.addClass('hover');

        $dropzoneMessage.text(_this.lang.image.dropImage);
      }).on('dragleave', function () {
        _this.$dropzone.removeClass('hover');

        $dropzoneMessage.text(_this.lang.image.dragImageHere);
      }); // attach dropImage

      this.$dropzone.on('drop', function (event) {
        var dataTransfer = event.originalEvent.dataTransfer; // stop the browser from opening the dropped content

        event.preventDefault();

        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          _this.$editable.focus();

          _this.context.invoke('editor.insertImagesOrCallback', dataTransfer.files);
        } else {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(dataTransfer.types, function (idx, type) {
            // skip moz-specific types
            if (type.toLowerCase().indexOf('_moz_') > -1) {
              return;
            }

            var content = dataTransfer.getData(type);

            if (type.toLowerCase().indexOf('text') > -1) {
              _this.context.invoke('editor.pasteHTML', content);
            } else {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(content).each(function (idx, item) {
                _this.context.invoke('editor.insertNode', item);
              });
            }
          });
        }
      }).on('dragover', false); // prevent default dragover event
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this2 = this;

      Object.keys(this.documentEventHandlers).forEach(function (key) {
        _this2.$eventListener.off(key.substr(2).toLowerCase(), _this2.documentEventHandlers[key]);
      });
      this.documentEventHandlers = {};
    }
  }]);

  return Dropzone;
}();


// CONCATENATED MODULE: ./src/js/base/module/Codeview.js
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Codeview_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Codeview_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Codeview_createClass(Constructor, protoProps, staticProps) { if (protoProps) Codeview_defineProperties(Constructor.prototype, protoProps); if (staticProps) Codeview_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @class Codeview
 */

var Codeview_CodeView = /*#__PURE__*/function () {
  function CodeView(context) {
    Codeview_classCallCheck(this, CodeView);

    this.context = context;
    this.$editor = context.layoutInfo.editor;
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.options = context.options;
    this.CodeMirrorConstructor = window.CodeMirror;

    if (this.options.codemirror.CodeMirrorConstructor) {
      this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor;
    }
  }

  Codeview_createClass(CodeView, [{
    key: "sync",
    value: function sync(html) {
      var isCodeview = this.isActivated();
      var CodeMirror = this.CodeMirrorConstructor;

      if (isCodeview) {
        if (html) {
          if (CodeMirror) {
            this.$codable.data('cmEditor').getDoc().setValue(html);
          } else {
            this.$codable.val(html);
          }
        } else {
          if (CodeMirror) {
            this.$codable.data('cmEditor').save();
          }
        }
      }
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.$codable.on('keyup', function (event) {
        if (event.keyCode === core_key.code.ESCAPE) {
          _this.deactivate();
        }
      });
    }
    /**
     * @return {Boolean}
     */

  }, {
    key: "isActivated",
    value: function isActivated() {
      return this.$editor.hasClass('codeview');
    }
    /**
     * toggle codeview
     */

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.isActivated()) {
        this.deactivate();
      } else {
        this.activate();
      }

      this.context.triggerEvent('codeview.toggled');
    }
    /**
     * purify input value
     * @param value
     * @returns {*}
     */

  }, {
    key: "purify",
    value: function purify(value) {
      if (this.options.codeviewFilter) {
        // filter code view regex
        value = value.replace(this.options.codeviewFilterRegex, ''); // allow specific iframe tag

        if (this.options.codeviewIframeFilter) {
          var whitelist = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
          value = value.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (tag) {
            // remove if src attribute is duplicated
            if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(tag)) {
              return '';
            }

            var _iterator = _createForOfIteratorHelper(whitelist),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var src = _step.value;

                // pass if src is trusted
                if (new RegExp('src="(https?:)?\/\/' + src.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '\/(.+)"').test(tag)) {
                  return tag;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return '';
          });
        }
      }

      return value;
    }
    /**
     * activate code view
     */

  }, {
    key: "activate",
    value: function activate() {
      var _this2 = this;

      var CodeMirror = this.CodeMirrorConstructor;
      this.$codable.val(dom.html(this.$editable, this.options.prettifyHtml));
      this.$codable.height(this.$editable.height());
      this.context.invoke('toolbar.updateCodeview', true);
      this.context.invoke('airPopover.updateCodeview', true);
      this.$editor.addClass('codeview');
      this.$codable.focus(); // activate CodeMirror as codable

      if (CodeMirror) {
        var cmEditor = CodeMirror.fromTextArea(this.$codable[0], this.options.codemirror); // CodeMirror TernServer

        if (this.options.codemirror.tern) {
          var server = new CodeMirror.TernServer(this.options.codemirror.tern);
          cmEditor.ternServer = server;
          cmEditor.on('cursorActivity', function (cm) {
            server.updateArgHints(cm);
          });
        }

        cmEditor.on('blur', function (event) {
          _this2.context.triggerEvent('blur.codeview', cmEditor.getValue(), event);
        });
        cmEditor.on('change', function () {
          _this2.context.triggerEvent('change.codeview', cmEditor.getValue(), cmEditor);
        }); // CodeMirror hasn't Padding.

        cmEditor.setSize(null, this.$editable.outerHeight());
        this.$codable.data('cmEditor', cmEditor);
      } else {
        this.$codable.on('blur', function (event) {
          _this2.context.triggerEvent('blur.codeview', _this2.$codable.val(), event);
        });
        this.$codable.on('input', function () {
          _this2.context.triggerEvent('change.codeview', _this2.$codable.val(), _this2.$codable);
        });
      }
    }
    /**
     * deactivate code view
     */

  }, {
    key: "deactivate",
    value: function deactivate() {
      var CodeMirror = this.CodeMirrorConstructor; // deactivate CodeMirror as codable

      if (CodeMirror) {
        var cmEditor = this.$codable.data('cmEditor');
        this.$codable.val(cmEditor.getValue());
        cmEditor.toTextArea();
      }

      var value = this.purify(dom.value(this.$codable, this.options.prettifyHtml) || dom.emptyPara);
      var isChange = this.$editable.html() !== value;
      this.$editable.html(value);
      this.$editable.height(this.options.height ? this.$codable.height() : 'auto');
      this.$editor.removeClass('codeview');

      if (isChange) {
        this.context.triggerEvent('change', this.$editable.html(), this.$editable);
      }

      this.$editable.focus();
      this.context.invoke('toolbar.updateCodeview', false);
      this.context.invoke('airPopover.updateCodeview', false);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.isActivated()) {
        this.deactivate();
      }
    }
  }]);

  return CodeView;
}();


// CONCATENATED MODULE: ./src/js/base/module/Statusbar.js
function Statusbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Statusbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Statusbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Statusbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Statusbar_defineProperties(Constructor, staticProps); return Constructor; }


var EDITABLE_PADDING = 24;

var Statusbar_Statusbar = /*#__PURE__*/function () {
  function Statusbar(context) {
    Statusbar_classCallCheck(this, Statusbar);

    this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
    this.$statusbar = context.layoutInfo.statusbar;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
  }

  Statusbar_createClass(Statusbar, [{
    key: "initialize",
    value: function initialize() {
      var _this = this;

      if (this.options.airMode || this.options.disableResizeEditor) {
        this.destroy();
        return;
      }

      this.$statusbar.on('mousedown', function (event) {
        event.preventDefault();
        event.stopPropagation();

        var editableTop = _this.$editable.offset().top - _this.$document.scrollTop();

        var onMouseMove = function onMouseMove(event) {
          var height = event.clientY - (editableTop + EDITABLE_PADDING);
          height = _this.options.minheight > 0 ? Math.max(height, _this.options.minheight) : height;
          height = _this.options.maxHeight > 0 ? Math.min(height, _this.options.maxHeight) : height;

          _this.$editable.height(height);
        };

        _this.$document.on('mousemove', onMouseMove).one('mouseup', function () {
          _this.$document.off('mousemove', onMouseMove);
        });
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$statusbar.off();
      this.$statusbar.addClass('locked');
    }
  }]);

  return Statusbar;
}();


// CONCATENATED MODULE: ./src/js/base/module/Fullscreen.js
function Fullscreen_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Fullscreen_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Fullscreen_createClass(Constructor, protoProps, staticProps) { if (protoProps) Fullscreen_defineProperties(Constructor.prototype, protoProps); if (staticProps) Fullscreen_defineProperties(Constructor, staticProps); return Constructor; }



var Fullscreen_Fullscreen = /*#__PURE__*/function () {
  function Fullscreen(context) {
    var _this = this;

    Fullscreen_classCallCheck(this, Fullscreen);

    this.context = context;
    this.$editor = context.layoutInfo.editor;
    this.$toolbar = context.layoutInfo.toolbar;
    this.$editable = context.layoutInfo.editable;
    this.$codable = context.layoutInfo.codable;
    this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
    this.$scrollbar = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('html, body');

    this.onResize = function () {
      _this.resizeTo({
        h: _this.$window.height() - _this.$toolbar.outerHeight()
      });
    };
  }

  Fullscreen_createClass(Fullscreen, [{
    key: "resizeTo",
    value: function resizeTo(size) {
      this.$editable.css('height', size.h);
      this.$codable.css('height', size.h);

      if (this.$codable.data('cmeditor')) {
        this.$codable.data('cmeditor').setsize(null, size.h);
      }
    }
    /**
     * toggle fullscreen
     */

  }, {
    key: "toggle",
    value: function toggle() {
      this.$editor.toggleClass('fullscreen');

      if (this.isFullscreen()) {
        this.$editable.data('orgHeight', this.$editable.css('height'));
        this.$editable.data('orgMaxHeight', this.$editable.css('maxHeight'));
        this.$editable.css('maxHeight', '');
        this.$window.on('resize', this.onResize).trigger('resize');
        this.$scrollbar.css('overflow', 'hidden');
      } else {
        this.$window.off('resize', this.onResize);
        this.resizeTo({
          h: this.$editable.data('orgHeight')
        });
        this.$editable.css('maxHeight', this.$editable.css('orgMaxHeight'));
        this.$scrollbar.css('overflow', 'visible');
      }

      this.context.invoke('toolbar.updateFullscreen', this.isFullscreen());
    }
  }, {
    key: "isFullscreen",
    value: function isFullscreen() {
      return this.$editor.hasClass('fullscreen');
    }
  }]);

  return Fullscreen;
}();


// CONCATENATED MODULE: ./src/js/base/module/Handle.js
function Handle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Handle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Handle_createClass(Constructor, protoProps, staticProps) { if (protoProps) Handle_defineProperties(Constructor.prototype, protoProps); if (staticProps) Handle_defineProperties(Constructor, staticProps); return Constructor; }




var Handle_Handle = /*#__PURE__*/function () {
  function Handle(context) {
    var _this = this;

    Handle_classCallCheck(this, Handle);

    this.context = context;
    this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
    this.$editingArea = context.layoutInfo.editingArea;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.events = {
      'summernote.mousedown': function summernoteMousedown(we, e) {
        if (_this.update(e.target, e)) {
          e.preventDefault();
        }
      },
      'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown': function summernoteKeyupSummernoteScrollSummernoteChangeSummernoteDialogShown() {
        _this.update();
      },
      'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
        _this.hide();
      },
      'summernote.codeview.toggled': function summernoteCodeviewToggled() {
        _this.update();
      }
    };
  }

  Handle_createClass(Handle, [{
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.$handle = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? 'note-control-holder' : 'note-control-sizing', ' note-control-se"></div>', this.options.disableResizeImage ? '' : '<div class="note-control-selection-info"></div>', '</div>', '</div>'].join('')).prependTo(this.$editingArea);
      this.$handle.on('mousedown', function (event) {
        if (dom.isControlSizing(event.target)) {
          event.preventDefault();
          event.stopPropagation();

          var $target = _this2.$handle.find('.note-control-selection').data('target');

          var posStart = $target.offset();

          var scrollTop = _this2.$document.scrollTop();

          var onMouseMove = function onMouseMove(event) {
            _this2.context.invoke('editor.resizeTo', {
              x: event.clientX - posStart.left,
              y: event.clientY - (posStart.top - scrollTop)
            }, $target, !event.shiftKey);

            _this2.update($target[0], event);
          };

          _this2.$document.on('mousemove', onMouseMove).one('mouseup', function (e) {
            e.preventDefault();

            _this2.$document.off('mousemove', onMouseMove);

            _this2.context.invoke('editor.afterCommand');
          });

          if (!$target.data('ratio')) {
            // original ratio.
            $target.data('ratio', $target.height() / $target.width());
          }
        }
      }); // Listen for scrolling on the handle overlay.

      this.$handle.on('wheel', function (e) {
        e.preventDefault();

        _this2.update();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$handle.remove();
    }
  }, {
    key: "update",
    value: function update(target, event) {
      if (this.context.isDisabled()) {
        return false;
      }

      var isImage = dom.isImg(target);
      var $selection = this.$handle.find('.note-control-selection');
      this.context.invoke('imagePopover.update', target, event);

      if (isImage) {
        var $image = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target);
        var position = $image.position();
        var pos = {
          left: position.left + parseInt($image.css('marginLeft'), 10),
          top: position.top + parseInt($image.css('marginTop'), 10)
        }; // exclude margin

        var imageSize = {
          w: $image.outerWidth(false),
          h: $image.outerHeight(false)
        };
        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
        }).data('target', $image); // save current image element.

        var origImageObj = new Image();
        origImageObj.src = $image.attr('src');
        var sizingText = imageSize.w + 'x' + imageSize.h + ' (' + this.lang.image.original + ': ' + origImageObj.width + 'x' + origImageObj.height + ')';
        $selection.find('.note-control-selection-info').text(sizingText);
        this.context.invoke('editor.saveTarget', target);
      } else {
        this.hide();
      }

      return isImage;
    }
    /**
     * hide
     *
     * @param {jQuery} $handle
     */

  }, {
    key: "hide",
    value: function hide() {
      this.context.invoke('editor.clearTarget');
      this.$handle.children().hide();
    }
  }]);

  return Handle;
}();


// CONCATENATED MODULE: ./src/js/base/module/AutoLink.js
function AutoLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoLink_defineProperties(Constructor, staticProps); return Constructor; }




var defaultScheme = 'http://';
var linkPattern = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;

var AutoLink_AutoLink = /*#__PURE__*/function () {
  function AutoLink(context) {
    var _this = this;

    AutoLink_classCallCheck(this, AutoLink);

    this.context = context;
    this.options = context.options;
    this.events = {
      'summernote.keyup': function summernoteKeyup(we, e) {
        if (!e.isDefaultPrevented()) {
          _this.handleKeyup(e);
        }
      },
      'summernote.keydown': function summernoteKeydown(we, e) {
        _this.handleKeydown(e);
      }
    };
  }

  AutoLink_createClass(AutoLink, [{
    key: "initialize",
    value: function initialize() {
      this.lastWordRange = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.lastWordRange = null;
    }
  }, {
    key: "replace",
    value: function replace() {
      if (!this.lastWordRange) {
        return;
      }

      var keyword = this.lastWordRange.toString();
      var match = keyword.match(linkPattern);

      if (match && (match[1] || match[2])) {
        var link = match[1] ? keyword : defaultScheme + keyword;
        var urlText = this.options.showDomainOnlyForAutolink ? keyword.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i, '').split('/')[0] : keyword;
        var node = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<a />').html(urlText).attr('href', link)[0];

        if (this.context.options.linkTargetBlank) {
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).attr('target', '_blank');
        }

        this.lastWordRange.insertNode(node);
        this.lastWordRange = null;
        this.context.invoke('editor.focus');
      }
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(e) {
      if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
        var wordRange = this.context.invoke('editor.createRange').getWordRange();
        this.lastWordRange = wordRange;
      }
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      if (lists.contains([core_key.code.ENTER, core_key.code.SPACE], e.keyCode)) {
        this.replace();
      }
    }
  }]);

  return AutoLink;
}();


// CONCATENATED MODULE: ./src/js/base/module/AutoSync.js
function AutoSync_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoSync_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoSync_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoSync_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoSync_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * textarea auto sync.
 */

var AutoSync_AutoSync = /*#__PURE__*/function () {
  function AutoSync(context) {
    var _this = this;

    AutoSync_classCallCheck(this, AutoSync);

    this.$note = context.layoutInfo.note;
    this.events = {
      'summernote.change': function summernoteChange() {
        _this.$note.val(context.invoke('code'));
      }
    };
  }

  AutoSync_createClass(AutoSync, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return dom.isTextarea(this.$note[0]);
    }
  }]);

  return AutoSync;
}();


// CONCATENATED MODULE: ./src/js/base/module/AutoReplace.js
function AutoReplace_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AutoReplace_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AutoReplace_createClass(Constructor, protoProps, staticProps) { if (protoProps) AutoReplace_defineProperties(Constructor.prototype, protoProps); if (staticProps) AutoReplace_defineProperties(Constructor, staticProps); return Constructor; }





var AutoReplace_AutoReplace = /*#__PURE__*/function () {
  function AutoReplace(context) {
    var _this = this;

    AutoReplace_classCallCheck(this, AutoReplace);

    this.context = context;
    this.options = context.options.replace || {};
    this.keys = [core_key.code.ENTER, core_key.code.SPACE, core_key.code.PERIOD, core_key.code.COMMA, core_key.code.SEMICOLON, core_key.code.SLASH];
    this.previousKeydownCode = null;
    this.events = {
      'summernote.keyup': function summernoteKeyup(we, e) {
        if (!e.isDefaultPrevented()) {
          _this.handleKeyup(e);
        }
      },
      'summernote.keydown': function summernoteKeydown(we, e) {
        _this.handleKeydown(e);
      }
    };
  }

  AutoReplace_createClass(AutoReplace, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !!this.options.match;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.lastWord = null;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.lastWord = null;
    }
  }, {
    key: "replace",
    value: function replace() {
      if (!this.lastWord) {
        return;
      }

      var self = this;
      var keyword = this.lastWord.toString();
      this.options.match(keyword, function (match) {
        if (match) {
          var node = '';

          if (typeof match === 'string') {
            node = dom.createText(match);
          } else if (match instanceof jQuery) {
            node = match[0];
          } else if (match instanceof Node) {
            node = match;
          }

          if (!node) return;
          self.lastWord.insertNode(node);
          self.lastWord = null;
          self.context.invoke('editor.focus');
        }
      });
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(e) {
      // this forces it to remember the last whole word, even if multiple termination keys are pressed
      // before the previous key is let go.
      if (this.previousKeydownCode && lists.contains(this.keys, this.previousKeydownCode)) {
        this.previousKeydownCode = e.keyCode;
        return;
      }

      if (lists.contains(this.keys, e.keyCode)) {
        var wordRange = this.context.invoke('editor.createRange').getWordRange();
        this.lastWord = wordRange;
      }

      this.previousKeydownCode = e.keyCode;
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      if (lists.contains(this.keys, e.keyCode)) {
        this.replace();
      }
    }
  }]);

  return AutoReplace;
}();


// CONCATENATED MODULE: ./src/js/base/module/Placeholder.js
function Placeholder_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Placeholder_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Placeholder_createClass(Constructor, protoProps, staticProps) { if (protoProps) Placeholder_defineProperties(Constructor.prototype, protoProps); if (staticProps) Placeholder_defineProperties(Constructor, staticProps); return Constructor; }



var Placeholder_Placeholder = /*#__PURE__*/function () {
  function Placeholder(context) {
    var _this = this;

    Placeholder_classCallCheck(this, Placeholder);

    this.context = context;
    this.$editingArea = context.layoutInfo.editingArea;
    this.options = context.options;

    if (this.options.inheritPlaceholder === true) {
      // get placeholder value from the original element
      this.options.placeholder = this.context.$note.attr('placeholder') || this.options.placeholder;
    }

    this.events = {
      'summernote.init summernote.change': function summernoteInitSummernoteChange() {
        _this.update();
      },
      'summernote.codeview.toggled': function summernoteCodeviewToggled() {
        _this.update();
      }
    };
  }

  Placeholder_createClass(Placeholder, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !!this.options.placeholder;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.$placeholder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-placeholder">');
      this.$placeholder.on('click', function () {
        _this2.context.invoke('focus');
      }).html(this.options.placeholder).prependTo(this.$editingArea);
      this.update();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$placeholder.remove();
    }
  }, {
    key: "update",
    value: function update() {
      var isShow = !this.context.invoke('codeview.isActivated') && this.context.invoke('editor.isEmpty');
      this.$placeholder.toggle(isShow);
    }
  }]);

  return Placeholder;
}();


// CONCATENATED MODULE: ./src/js/base/module/Buttons.js
function Buttons_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Buttons_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Buttons_createClass(Constructor, protoProps, staticProps) { if (protoProps) Buttons_defineProperties(Constructor.prototype, protoProps); if (staticProps) Buttons_defineProperties(Constructor, staticProps); return Constructor; }






var Buttons_Buttons = /*#__PURE__*/function () {
  function Buttons(context) {
    Buttons_classCallCheck(this, Buttons);

    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.context = context;
    this.$toolbar = context.layoutInfo.toolbar;
    this.options = context.options;
    this.lang = this.options.langInfo;
    this.invertedKeyMap = func.invertObject(this.options.keyMap[env.isMac ? 'mac' : 'pc']);
  }

  Buttons_createClass(Buttons, [{
    key: "representShortcut",
    value: function representShortcut(editorMethod) {
      var shortcut = this.invertedKeyMap[editorMethod];

      if (!this.options.shortcuts || !shortcut) {
        return '';
      }

      if (env.isMac) {
        shortcut = shortcut.replace('CMD', '⌘').replace('SHIFT', '⇧');
      }

      shortcut = shortcut.replace('BACKSLASH', '\\').replace('SLASH', '/').replace('LEFTBRACKET', '[').replace('RIGHTBRACKET', ']');
      return ' (' + shortcut + ')';
    }
  }, {
    key: "button",
    value: function button(o) {
      if (!this.options.tooltip && o.tooltip) {
        delete o.tooltip;
      }

      o.container = this.options.container;
      return this.ui.button(o);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.addToolbarButtons();
      this.addImagePopoverButtons();
      this.addLinkPopoverButtons();
      this.addTablePopoverButtons();
      this.fontInstalledMap = {};
    }
  }, {
    key: "destroy",
    value: function destroy() {
      delete this.fontInstalledMap;
    }
  }, {
    key: "isFontInstalled",
    value: function isFontInstalled(name) {
      if (!Object.prototype.hasOwnProperty.call(this.fontInstalledMap, name)) {
        this.fontInstalledMap[name] = env.isFontInstalled(name) || lists.contains(this.options.fontNamesIgnoreCheck, name);
      }

      return this.fontInstalledMap[name];
    }
  }, {
    key: "isFontDeservedToAdd",
    value: function isFontDeservedToAdd(name) {
      name = name.toLowerCase();
      return name !== '' && this.isFontInstalled(name) && env.genericFontFamilies.indexOf(name) === -1;
    }
  }, {
    key: "colorPalette",
    value: function colorPalette(className, tooltip, backColor, foreColor) {
      var _this = this;

      return this.ui.buttonGroup({
        className: 'note-color ' + className,
        children: [this.button({
          className: 'note-current-color-button',
          contents: this.ui.icon(this.options.icons.font + ' note-recent-color'),
          tooltip: tooltip,
          click: function click(e) {
            var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget);

            if (backColor && foreColor) {
              _this.context.invoke('editor.color', {
                backColor: $button.attr('data-backColor'),
                foreColor: $button.attr('data-foreColor')
              });
            } else if (backColor) {
              _this.context.invoke('editor.color', {
                backColor: $button.attr('data-backColor')
              });
            } else if (foreColor) {
              _this.context.invoke('editor.color', {
                foreColor: $button.attr('data-foreColor')
              });
            }
          },
          callback: function callback($button) {
            var $recentColor = $button.find('.note-recent-color');

            if (backColor) {
              $recentColor.css('background-color', _this.options.colorButton.backColor);
              $button.attr('data-backColor', _this.options.colorButton.backColor);
            }

            if (foreColor) {
              $recentColor.css('color', _this.options.colorButton.foreColor);
              $button.attr('data-foreColor', _this.options.colorButton.foreColor);
            } else {
              $recentColor.css('color', 'transparent');
            }
          }
        }), this.button({
          className: 'dropdown-toggle',
          contents: this.ui.dropdownButtonContents('', this.options),
          tooltip: this.lang.color.more,
          data: {
            toggle: 'dropdown'
          }
        }), this.ui.dropdown({
          items: (backColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, '</button>', '</div>', '<div class="note-holder" data-event="backColor"><!-- back colors --></div>', '<div>', '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette">', '</div>', '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"></div>', '</div>'].join('') : '') + (foreColor ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + '</div>', '<div>', '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, '</button>', '</div>', '<div class="note-holder" data-event="foreColor"><!-- fore colors --></div>', '<div>', '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, '</button>', '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette">', '</div>', // Fix missing Div, Commented to find easily if it's wrong
          '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"></div>', '</div>'].join('') : ''),
          callback: function callback($dropdown) {
            $dropdown.find('.note-holder').each(function (idx, item) {
              var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
              $holder.append(_this.ui.palette({
                colors: _this.options.colors,
                colorsName: _this.options.colorsName,
                eventName: $holder.data('event'),
                container: _this.options.container,
                tooltip: _this.options.tooltip
              }).render());
            });
            /* TODO: do we have to record recent custom colors within cookies? */

            var customColors = [['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']];
            $dropdown.find('.note-holder-custom').each(function (idx, item) {
              var $holder = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
              $holder.append(_this.ui.palette({
                colors: customColors,
                colorsName: customColors,
                eventName: $holder.data('event'),
                container: _this.options.container,
                tooltip: _this.options.tooltip
              }).render());
            });
            $dropdown.find('input[type=color]').each(function (idx, item) {
              external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).change(function () {
                var $chip = $dropdown.find('#' + external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this).data('event')).find('.note-color-btn').first();
                var color = this.value.toUpperCase();
                $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
                $chip.click();
              });
            });
          },
          click: function click(event) {
            event.stopPropagation();
            var $parent = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('.' + className).find('.note-dropdown-menu');
            var $button = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target);
            var eventName = $button.data('event');
            var value = $button.attr('data-value');

            if (eventName === 'openPalette') {
              var $picker = $parent.find('#' + value);
              var $palette = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()($parent.find('#' + $picker.data('event')).find('.note-color-row')[0]); // Shift palette chips

              var $chip = $palette.find('.note-color-btn').last().detach(); // Set chip attributes

              var color = $picker.val();
              $chip.css('background-color', color).attr('aria-label', color).attr('data-value', color).attr('data-original-title', color);
              $palette.prepend($chip);
              $picker.click();
            } else {
              if (lists.contains(['backColor', 'foreColor'], eventName)) {
                var key = eventName === 'backColor' ? 'background-color' : 'color';
                var $color = $button.closest('.note-color').find('.note-recent-color');
                var $currentButton = $button.closest('.note-color').find('.note-current-color-button');
                $color.css(key, value);
                $currentButton.attr('data-' + eventName, value);
              }

              _this.context.invoke('editor.' + eventName, value);
            }
          }
        })]
      }).render();
    }
  }, {
    key: "addToolbarButtons",
    value: function addToolbarButtons() {
      var _this2 = this;

      this.context.memo('button.style', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.magic), _this2.options),
          tooltip: _this2.lang.style.style,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown({
          className: 'dropdown-style',
          items: _this2.options.styleTags,
          title: _this2.lang.style.style,
          template: function template(item) {
            // TBD: need to be simplified
            if (typeof item === 'string') {
              item = {
                tag: item,
                title: Object.prototype.hasOwnProperty.call(_this2.lang.style, item) ? _this2.lang.style[item] : item
              };
            }

            var tag = item.tag;
            var title = item.title;
            var style = item.style ? ' style="' + item.style + '" ' : '';
            var className = item.className ? ' class="' + item.className + '"' : '';
            return '<' + tag + style + className + '>' + title + '</' + tag + '>';
          },
          click: _this2.context.createInvokeHandler('editor.formatBlock')
        })]).render();
      });

      var _loop = function _loop(styleIdx, styleLen) {
        var item = _this2.options.styleTags[styleIdx];

        _this2.context.memo('button.style.' + item, function () {
          return _this2.button({
            className: 'note-btn-style-' + item,
            contents: '<div data-value="' + item + '">' + item.toUpperCase() + '</div>',
            tooltip: _this2.lang.style[item],
            click: _this2.context.createInvokeHandler('editor.formatBlock')
          }).render();
        });
      };

      for (var styleIdx = 0, styleLen = this.options.styleTags.length; styleIdx < styleLen; styleIdx++) {
        _loop(styleIdx, styleLen);
      }

      this.context.memo('button.bold', function () {
        return _this2.button({
          className: 'note-btn-bold',
          contents: _this2.ui.icon(_this2.options.icons.bold),
          tooltip: _this2.lang.font.bold + _this2.representShortcut('bold'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.bold')
        }).render();
      });
      this.context.memo('button.italic', function () {
        return _this2.button({
          className: 'note-btn-italic',
          contents: _this2.ui.icon(_this2.options.icons.italic),
          tooltip: _this2.lang.font.italic + _this2.representShortcut('italic'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.italic')
        }).render();
      });
      this.context.memo('button.underline', function () {
        return _this2.button({
          className: 'note-btn-underline',
          contents: _this2.ui.icon(_this2.options.icons.underline),
          tooltip: _this2.lang.font.underline + _this2.representShortcut('underline'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.underline')
        }).render();
      });
      this.context.memo('button.clear', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.eraser),
          tooltip: _this2.lang.font.clear + _this2.representShortcut('removeFormat'),
          click: _this2.context.createInvokeHandler('editor.removeFormat')
        }).render();
      });
      this.context.memo('button.strikethrough', function () {
        return _this2.button({
          className: 'note-btn-strikethrough',
          contents: _this2.ui.icon(_this2.options.icons.strikethrough),
          tooltip: _this2.lang.font.strikethrough + _this2.representShortcut('strikethrough'),
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.strikethrough')
        }).render();
      });
      this.context.memo('button.superscript', function () {
        return _this2.button({
          className: 'note-btn-superscript',
          contents: _this2.ui.icon(_this2.options.icons.superscript),
          tooltip: _this2.lang.font.superscript,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.superscript')
        }).render();
      });
      this.context.memo('button.subscript', function () {
        return _this2.button({
          className: 'note-btn-subscript',
          contents: _this2.ui.icon(_this2.options.icons.subscript),
          tooltip: _this2.lang.font.subscript,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.subscript')
        }).render();
      });
      this.context.memo('button.fontname', function () {
        var styleInfo = _this2.context.invoke('editor.currentStyle');

        if (_this2.options.addDefaultFonts) {
          // Add 'default' fonts into the fontnames array if not exist
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(styleInfo['font-family'].split(','), function (idx, fontname) {
            fontname = fontname.trim().replace(/['"]+/g, '');

            if (_this2.isFontDeservedToAdd(fontname)) {
              if (_this2.options.fontNames.indexOf(fontname) === -1) {
                _this2.options.fontNames.push(fontname);
              }
            }
          });
        }

        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', _this2.options),
          tooltip: _this2.lang.font.name,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontname',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontNames.filter(_this2.isFontInstalled.bind(_this2)),
          title: _this2.lang.font.name,
          template: function template(item) {
            return '<span style="font-family: ' + env.validFontName(item) + '">' + item + '</span>';
          },
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontName')
        })]).render();
      });
      this.context.memo('button.fontsize', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', _this2.options),
          tooltip: _this2.lang.font.size,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontsize',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontSizes,
          title: _this2.lang.font.size,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSize')
        })]).render();
      });
      this.context.memo('button.fontsizeunit', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', _this2.options),
          tooltip: _this2.lang.font.sizeunit,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          className: 'dropdown-fontsizeunit',
          checkClassName: _this2.options.icons.menuCheck,
          items: _this2.options.fontSizeUnits,
          title: _this2.lang.font.sizeunit,
          click: _this2.context.createInvokeHandlerAndUpdateState('editor.fontSizeUnit')
        })]).render();
      });
      this.context.memo('button.color', function () {
        return _this2.colorPalette('note-color-all', _this2.lang.color.recent, true, true);
      });
      this.context.memo('button.forecolor', function () {
        return _this2.colorPalette('note-color-fore', _this2.lang.color.foreground, false, true);
      });
      this.context.memo('button.backcolor', function () {
        return _this2.colorPalette('note-color-back', _this2.lang.color.background, true, false);
      });
      this.context.memo('button.ul', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.unorderedlist),
          tooltip: _this2.lang.lists.unordered + _this2.representShortcut('insertUnorderedList'),
          click: _this2.context.createInvokeHandler('editor.insertUnorderedList')
        }).render();
      });
      this.context.memo('button.ol', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.orderedlist),
          tooltip: _this2.lang.lists.ordered + _this2.representShortcut('insertOrderedList'),
          click: _this2.context.createInvokeHandler('editor.insertOrderedList')
        }).render();
      });
      var justifyLeft = this.button({
        contents: this.ui.icon(this.options.icons.alignLeft),
        tooltip: this.lang.paragraph.left + this.representShortcut('justifyLeft'),
        click: this.context.createInvokeHandler('editor.justifyLeft')
      });
      var justifyCenter = this.button({
        contents: this.ui.icon(this.options.icons.alignCenter),
        tooltip: this.lang.paragraph.center + this.representShortcut('justifyCenter'),
        click: this.context.createInvokeHandler('editor.justifyCenter')
      });
      var justifyRight = this.button({
        contents: this.ui.icon(this.options.icons.alignRight),
        tooltip: this.lang.paragraph.right + this.representShortcut('justifyRight'),
        click: this.context.createInvokeHandler('editor.justifyRight')
      });
      var justifyFull = this.button({
        contents: this.ui.icon(this.options.icons.alignJustify),
        tooltip: this.lang.paragraph.justify + this.representShortcut('justifyFull'),
        click: this.context.createInvokeHandler('editor.justifyFull')
      });
      var outdent = this.button({
        contents: this.ui.icon(this.options.icons.outdent),
        tooltip: this.lang.paragraph.outdent + this.representShortcut('outdent'),
        click: this.context.createInvokeHandler('editor.outdent')
      });
      var indent = this.button({
        contents: this.ui.icon(this.options.icons.indent),
        tooltip: this.lang.paragraph.indent + this.representShortcut('indent'),
        click: this.context.createInvokeHandler('editor.indent')
      });
      this.context.memo('button.justifyLeft', func.invoke(justifyLeft, 'render'));
      this.context.memo('button.justifyCenter', func.invoke(justifyCenter, 'render'));
      this.context.memo('button.justifyRight', func.invoke(justifyRight, 'render'));
      this.context.memo('button.justifyFull', func.invoke(justifyFull, 'render'));
      this.context.memo('button.outdent', func.invoke(outdent, 'render'));
      this.context.memo('button.indent', func.invoke(indent, 'render'));
      this.context.memo('button.paragraph', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.alignLeft), _this2.options),
          tooltip: _this2.lang.paragraph.paragraph,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown([_this2.ui.buttonGroup({
          className: 'note-align',
          children: [justifyLeft, justifyCenter, justifyRight, justifyFull]
        }), _this2.ui.buttonGroup({
          className: 'note-list',
          children: [outdent, indent]
        })])]).render();
      });
      this.context.memo('button.height', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.textHeight), _this2.options),
          tooltip: _this2.lang.font.height,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdownCheck({
          items: _this2.options.lineHeights,
          checkClassName: _this2.options.icons.menuCheck,
          className: 'dropdown-line-height',
          title: _this2.lang.font.height,
          click: _this2.context.createInvokeHandler('editor.lineHeight')
        })]).render();
      });
      this.context.memo('button.table', function () {
        return _this2.ui.buttonGroup([_this2.button({
          className: 'dropdown-toggle',
          contents: _this2.ui.dropdownButtonContents(_this2.ui.icon(_this2.options.icons.table), _this2.options),
          tooltip: _this2.lang.table.table,
          data: {
            toggle: 'dropdown'
          }
        }), _this2.ui.dropdown({
          title: _this2.lang.table.table,
          className: 'note-table',
          items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', '</div>', '<div class="note-dimension-display">1 x 1</div>'].join('')
        })], {
          callback: function callback($node) {
            var $catcher = $node.find('.note-dimension-picker-mousecatcher');
            $catcher.css({
              width: _this2.options.insertTableMaxSize.col + 'em',
              height: _this2.options.insertTableMaxSize.row + 'em'
            }).mousedown(_this2.context.createInvokeHandler('editor.insertTable')).on('mousemove', _this2.tableMoveHandler.bind(_this2));
          }
        }).render();
      });
      this.context.memo('button.link', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.link),
          tooltip: _this2.lang.link.link + _this2.representShortcut('linkDialog.show'),
          click: _this2.context.createInvokeHandler('linkDialog.show')
        }).render();
      });
      this.context.memo('button.picture', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.picture),
          tooltip: _this2.lang.image.image,
          click: _this2.context.createInvokeHandler('imageDialog.show')
        }).render();
      });
      this.context.memo('button.video', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.video),
          tooltip: _this2.lang.video.video,
          click: _this2.context.createInvokeHandler('videoDialog.show')
        }).render();
      });
      this.context.memo('button.hr', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.minus),
          tooltip: _this2.lang.hr.insert + _this2.representShortcut('insertHorizontalRule'),
          click: _this2.context.createInvokeHandler('editor.insertHorizontalRule')
        }).render();
      });
      this.context.memo('button.fullscreen', function () {
        return _this2.button({
          className: 'btn-fullscreen note-codeview-keep',
          contents: _this2.ui.icon(_this2.options.icons.arrowsAlt),
          tooltip: _this2.lang.options.fullscreen,
          click: _this2.context.createInvokeHandler('fullscreen.toggle')
        }).render();
      });
      this.context.memo('button.codeview', function () {
        return _this2.button({
          className: 'btn-codeview note-codeview-keep',
          contents: _this2.ui.icon(_this2.options.icons.code),
          tooltip: _this2.lang.options.codeview,
          click: _this2.context.createInvokeHandler('codeview.toggle')
        }).render();
      });
      this.context.memo('button.redo', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.redo),
          tooltip: _this2.lang.history.redo + _this2.representShortcut('redo'),
          click: _this2.context.createInvokeHandler('editor.redo')
        }).render();
      });
      this.context.memo('button.undo', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.undo),
          tooltip: _this2.lang.history.undo + _this2.representShortcut('undo'),
          click: _this2.context.createInvokeHandler('editor.undo')
        }).render();
      });
      this.context.memo('button.help', function () {
        return _this2.button({
          contents: _this2.ui.icon(_this2.options.icons.question),
          tooltip: _this2.lang.options.help,
          click: _this2.context.createInvokeHandler('helpDialog.show')
        }).render();
      });
    }
    /**
     * image: [
     *   ['imageResize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']],
     *   ['float', ['floatLeft', 'floatRight', 'floatNone']],
     *   ['remove', ['removeMedia']],
     * ],
     */

  }, {
    key: "addImagePopoverButtons",
    value: function addImagePopoverButtons() {
      var _this3 = this;

      // Image Size Buttons
      this.context.memo('button.resizeFull', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">100%</span>',
          tooltip: _this3.lang.image.resizeFull,
          click: _this3.context.createInvokeHandler('editor.resize', '1')
        }).render();
      });
      this.context.memo('button.resizeHalf', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">50%</span>',
          tooltip: _this3.lang.image.resizeHalf,
          click: _this3.context.createInvokeHandler('editor.resize', '0.5')
        }).render();
      });
      this.context.memo('button.resizeQuarter', function () {
        return _this3.button({
          contents: '<span class="note-fontsize-10">25%</span>',
          tooltip: _this3.lang.image.resizeQuarter,
          click: _this3.context.createInvokeHandler('editor.resize', '0.25')
        }).render();
      });
      this.context.memo('button.resizeNone', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.rollback),
          tooltip: _this3.lang.image.resizeNone,
          click: _this3.context.createInvokeHandler('editor.resize', '0')
        }).render();
      }); // Float Buttons

      this.context.memo('button.floatLeft', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.floatLeft),
          tooltip: _this3.lang.image.floatLeft,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'left')
        }).render();
      });
      this.context.memo('button.floatRight', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.floatRight),
          tooltip: _this3.lang.image.floatRight,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'right')
        }).render();
      });
      this.context.memo('button.floatNone', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.rollback),
          tooltip: _this3.lang.image.floatNone,
          click: _this3.context.createInvokeHandler('editor.floatMe', 'none')
        }).render();
      }); // Remove Buttons

      this.context.memo('button.removeMedia', function () {
        return _this3.button({
          contents: _this3.ui.icon(_this3.options.icons.trash),
          tooltip: _this3.lang.image.remove,
          click: _this3.context.createInvokeHandler('editor.removeMedia')
        }).render();
      });
    }
  }, {
    key: "addLinkPopoverButtons",
    value: function addLinkPopoverButtons() {
      var _this4 = this;

      this.context.memo('button.linkDialogShow', function () {
        return _this4.button({
          contents: _this4.ui.icon(_this4.options.icons.link),
          tooltip: _this4.lang.link.edit,
          click: _this4.context.createInvokeHandler('linkDialog.show')
        }).render();
      });
      this.context.memo('button.unlink', function () {
        return _this4.button({
          contents: _this4.ui.icon(_this4.options.icons.unlink),
          tooltip: _this4.lang.link.unlink,
          click: _this4.context.createInvokeHandler('editor.unlink')
        }).render();
      });
    }
    /**
     * table : [
     *  ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
     *  ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]
     * ],
     */

  }, {
    key: "addTablePopoverButtons",
    value: function addTablePopoverButtons() {
      var _this5 = this;

      this.context.memo('button.addRowUp', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowAbove),
          tooltip: _this5.lang.table.addRowAbove,
          click: _this5.context.createInvokeHandler('editor.addRow', 'top')
        }).render();
      });
      this.context.memo('button.addRowDown', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowBelow),
          tooltip: _this5.lang.table.addRowBelow,
          click: _this5.context.createInvokeHandler('editor.addRow', 'bottom')
        }).render();
      });
      this.context.memo('button.addColLeft', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colBefore),
          tooltip: _this5.lang.table.addColLeft,
          click: _this5.context.createInvokeHandler('editor.addCol', 'left')
        }).render();
      });
      this.context.memo('button.addColRight', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colAfter),
          tooltip: _this5.lang.table.addColRight,
          click: _this5.context.createInvokeHandler('editor.addCol', 'right')
        }).render();
      });
      this.context.memo('button.deleteRow', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.rowRemove),
          tooltip: _this5.lang.table.delRow,
          click: _this5.context.createInvokeHandler('editor.deleteRow')
        }).render();
      });
      this.context.memo('button.deleteCol', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.colRemove),
          tooltip: _this5.lang.table.delCol,
          click: _this5.context.createInvokeHandler('editor.deleteCol')
        }).render();
      });
      this.context.memo('button.deleteTable', function () {
        return _this5.button({
          className: 'btn-md',
          contents: _this5.ui.icon(_this5.options.icons.trash),
          tooltip: _this5.lang.table.delTable,
          click: _this5.context.createInvokeHandler('editor.deleteTable')
        }).render();
      });
    }
  }, {
    key: "build",
    value: function build($container, groups) {
      for (var groupIdx = 0, groupLen = groups.length; groupIdx < groupLen; groupIdx++) {
        var group = groups[groupIdx];
        var groupName = Array.isArray(group) ? group[0] : group;
        var buttons = Array.isArray(group) ? group.length === 1 ? [group[0]] : group[1] : [group];
        var $group = this.ui.buttonGroup({
          className: 'note-' + groupName
        }).render();

        for (var idx = 0, len = buttons.length; idx < len; idx++) {
          var btn = this.context.memo('button.' + buttons[idx]);

          if (btn) {
            $group.append(typeof btn === 'function' ? btn(this.context) : btn);
          }
        }

        $group.appendTo($container);
      }
    }
    /**
     * @param {jQuery} [$container]
     */

  }, {
    key: "updateCurrentStyle",
    value: function updateCurrentStyle($container) {
      var _this6 = this;

      var $cont = $container || this.$toolbar;
      var styleInfo = this.context.invoke('editor.currentStyle');
      this.updateBtnStates($cont, {
        '.note-btn-bold': function noteBtnBold() {
          return styleInfo['font-bold'] === 'bold';
        },
        '.note-btn-italic': function noteBtnItalic() {
          return styleInfo['font-italic'] === 'italic';
        },
        '.note-btn-underline': function noteBtnUnderline() {
          return styleInfo['font-underline'] === 'underline';
        },
        '.note-btn-subscript': function noteBtnSubscript() {
          return styleInfo['font-subscript'] === 'subscript';
        },
        '.note-btn-superscript': function noteBtnSuperscript() {
          return styleInfo['font-superscript'] === 'superscript';
        },
        '.note-btn-strikethrough': function noteBtnStrikethrough() {
          return styleInfo['font-strikethrough'] === 'strikethrough';
        }
      });

      if (styleInfo['font-family']) {
        var fontNames = styleInfo['font-family'].split(',').map(function (name) {
          return name.replace(/[\'\"]/g, '').replace(/\s+$/, '').replace(/^\s+/, '');
        });
        var fontName = lists.find(fontNames, this.isFontInstalled.bind(this));
        $cont.find('.dropdown-fontname a').each(function (idx, item) {
          var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare string to avoid creating another func.

          var isChecked = $item.data('value') + '' === fontName + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontname').text(fontName).css('font-family', fontName);
      }

      if (styleInfo['font-size']) {
        var fontSize = styleInfo['font-size'];
        $cont.find('.dropdown-fontsize a').each(function (idx, item) {
          var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item); // always compare with string to avoid creating another func.

          var isChecked = $item.data('value') + '' === fontSize + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontsize').text(fontSize);
        var fontSizeUnit = styleInfo['font-size-unit'];
        $cont.find('.dropdown-fontsizeunit a').each(function (idx, item) {
          var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item);
          var isChecked = $item.data('value') + '' === fontSizeUnit + '';
          $item.toggleClass('checked', isChecked);
        });
        $cont.find('.note-current-fontsizeunit').text(fontSizeUnit);
      }

      if (styleInfo['line-height']) {
        var lineHeight = styleInfo['line-height'];
        $cont.find('.dropdown-line-height li a').each(function (idx, item) {
          // always compare with string to avoid creating another func.
          var isChecked = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(item).data('value') + '' === lineHeight + '';
          _this6.className = isChecked ? 'checked' : '';
        });
      }
    }
  }, {
    key: "updateBtnStates",
    value: function updateBtnStates($container, infos) {
      var _this7 = this;

      external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.each(infos, function (selector, pred) {
        _this7.ui.toggleBtnActive($container.find(selector), pred());
      });
    }
  }, {
    key: "tableMoveHandler",
    value: function tableMoveHandler(event) {
      var PX_PER_EM = 18;
      var $picker = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target.parentNode); // target is mousecatcher

      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');
      var posOffset; // HTML5 with jQuery - e.offsetX is undefined in Firefox

      if (event.offsetX === undefined) {
        var posCatcher = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
        };
      } else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
        };
      }

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
      };
      $highlighted.css({
        width: dim.c + 'em',
        height: dim.r + 'em'
      });
      $catcher.data('value', dim.c + 'x' + dim.r);

      if (dim.c > 3 && dim.c < this.options.insertTableMaxSize.col) {
        $unhighlighted.css({
          width: dim.c + 1 + 'em'
        });
      }

      if (dim.r > 3 && dim.r < this.options.insertTableMaxSize.row) {
        $unhighlighted.css({
          height: dim.r + 1 + 'em'
        });
      }

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
    }
  }]);

  return Buttons;
}();


// CONCATENATED MODULE: ./src/js/base/module/Toolbar.js
function Toolbar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Toolbar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Toolbar_createClass(Constructor, protoProps, staticProps) { if (protoProps) Toolbar_defineProperties(Constructor.prototype, protoProps); if (staticProps) Toolbar_defineProperties(Constructor, staticProps); return Constructor; }



var Toolbar_Toolbar = /*#__PURE__*/function () {
  function Toolbar(context) {
    Toolbar_classCallCheck(this, Toolbar);

    this.context = context;
    this.$window = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(window);
    this.$document = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document);
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$note = context.layoutInfo.note;
    this.$editor = context.layoutInfo.editor;
    this.$toolbar = context.layoutInfo.toolbar;
    this.$editable = context.layoutInfo.editable;
    this.$statusbar = context.layoutInfo.statusbar;
    this.options = context.options;
    this.isFollowing = false;
    this.followScroll = this.followScroll.bind(this);
  }

  Toolbar_createClass(Toolbar, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !this.options.airMode;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this = this;

      this.options.toolbar = this.options.toolbar || [];

      if (!this.options.toolbar.length) {
        this.$toolbar.hide();
      } else {
        this.context.invoke('buttons.build', this.$toolbar, this.options.toolbar);
      }

      if (this.options.toolbarContainer) {
        this.$toolbar.appendTo(this.options.toolbarContainer);
      }

      this.changeContainer(false);
      this.$note.on('summernote.keyup summernote.mouseup summernote.change', function () {
        _this.context.invoke('buttons.updateCurrentStyle');
      });
      this.context.invoke('buttons.updateCurrentStyle');

      if (this.options.followingToolbar) {
        this.$window.on('scroll resize', this.followScroll);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$toolbar.children().remove();

      if (this.options.followingToolbar) {
        this.$window.off('scroll resize', this.followScroll);
      }
    }
  }, {
    key: "followScroll",
    value: function followScroll() {
      if (this.$editor.hasClass('fullscreen')) {
        return false;
      }

      var editorHeight = this.$editor.outerHeight();
      var editorWidth = this.$editor.width();
      var toolbarHeight = this.$toolbar.height();
      var statusbarHeight = this.$statusbar.height(); // check if the web app is currently using another static bar

      var otherBarHeight = 0;

      if (this.options.otherStaticBar) {
        otherBarHeight = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.otherStaticBar).outerHeight();
      }

      var currentOffset = this.$document.scrollTop();
      var editorOffsetTop = this.$editor.offset().top;
      var editorOffsetBottom = editorOffsetTop + editorHeight;
      var activateOffset = editorOffsetTop - otherBarHeight;
      var deactivateOffsetBottom = editorOffsetBottom - otherBarHeight - toolbarHeight - statusbarHeight;

      if (!this.isFollowing && currentOffset > activateOffset && currentOffset < deactivateOffsetBottom - toolbarHeight) {
        this.isFollowing = true;
        this.$editable.css({
          marginTop: this.$toolbar.outerHeight()
        });
        this.$toolbar.css({
          position: 'fixed',
          top: otherBarHeight,
          width: editorWidth,
          zIndex: 1000
        });
      } else if (this.isFollowing && (currentOffset < activateOffset || currentOffset > deactivateOffsetBottom)) {
        this.isFollowing = false;
        this.$toolbar.css({
          position: 'relative',
          top: 0,
          width: '100%',
          zIndex: 'auto'
        });
        this.$editable.css({
          marginTop: ''
        });
      }
    }
  }, {
    key: "changeContainer",
    value: function changeContainer(isFullscreen) {
      if (isFullscreen) {
        this.$toolbar.prependTo(this.$editor);
      } else {
        if (this.options.toolbarContainer) {
          this.$toolbar.appendTo(this.options.toolbarContainer);
        }
      }

      if (this.options.followingToolbar) {
        this.followScroll();
      }
    }
  }, {
    key: "updateFullscreen",
    value: function updateFullscreen(isFullscreen) {
      this.ui.toggleBtnActive(this.$toolbar.find('.btn-fullscreen'), isFullscreen);
      this.changeContainer(isFullscreen);
    }
  }, {
    key: "updateCodeview",
    value: function updateCodeview(isCodeview) {
      this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), isCodeview);

      if (isCodeview) {
        this.deactivate();
      } else {
        this.activate();
      }
    }
  }, {
    key: "activate",
    value: function activate(isIncludeCodeview) {
      var $btn = this.$toolbar.find('button');

      if (!isIncludeCodeview) {
        $btn = $btn.not('.note-codeview-keep');
      }

      this.ui.toggleBtn($btn, true);
    }
  }, {
    key: "deactivate",
    value: function deactivate(isIncludeCodeview) {
      var $btn = this.$toolbar.find('button');

      if (!isIncludeCodeview) {
        $btn = $btn.not('.note-codeview-keep');
      }

      this.ui.toggleBtn($btn, false);
    }
  }]);

  return Toolbar;
}();


// CONCATENATED MODULE: ./src/js/base/module/LinkDialog.js
function LinkDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LinkDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LinkDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkDialog_defineProperties(Constructor, staticProps); return Constructor; }






var LinkDialog_LinkDialog = /*#__PURE__*/function () {
  function LinkDialog(context) {
    LinkDialog_classCallCheck(this, LinkDialog);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
    context.memo('help.linkDialog.show', this.options.langInfo.help['linkDialog.show']);
  }

  LinkDialog_createClass(LinkDialog, [{
    key: "initialize",
    value: function initialize() {
      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<div class="form-group note-form-group">', "<label for=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.textToDisplay, "</label>"), "<input id=\"note-dialog-link-txt-".concat(this.options.id, "\" class=\"note-link-text form-control note-form-control note-input\" type=\"text\"/>"), '</div>', '<div class="form-group note-form-group">', "<label for=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.link.url, "</label>"), "<input id=\"note-dialog-link-url-".concat(this.options.id, "\" class=\"note-link-url form-control note-form-control note-input\" type=\"text\" value=\"http://\"/>"), '</div>', !this.options.disableLinkTarget ? external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
        className: 'sn-checkbox-open-in-new-window',
        text: this.lang.link.openInNewWindow,
        checked: true
      }).render()).html() : '', external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div/>').append(this.ui.checkbox({
        className: 'sn-checkbox-use-protocol',
        text: this.lang.link.useProtocol,
        checked: true
      }).render()).html()].join('');
      var buttonClass = 'btn btn-primary note-btn note-btn-primary note-link-btn';
      var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.link.insert, "\" disabled>");
      this.$dialog = this.ui.dialog({
        className: 'link-dialog',
        title: this.lang.link.insert,
        fade: this.options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    }
  }, {
    key: "bindEnterKey",
    value: function bindEnterKey($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === core_key.code.ENTER) {
          event.preventDefault();
          $btn.trigger('click');
        }
      });
    }
    /**
     * toggle update button
     */

  }, {
    key: "toggleLinkBtn",
    value: function toggleLinkBtn($linkBtn, $linkText, $linkUrl) {
      this.ui.toggleBtn($linkBtn, $linkText.val() && $linkUrl.val());
    }
    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {Object} linkInfo
     * @return {Promise}
     */

  }, {
    key: "showLinkDialog",
    value: function showLinkDialog(linkInfo) {
      var _this = this;

      return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
        var $linkText = _this.$dialog.find('.note-link-text');

        var $linkUrl = _this.$dialog.find('.note-link-url');

        var $linkBtn = _this.$dialog.find('.note-link-btn');

        var $openInNewWindow = _this.$dialog.find('.sn-checkbox-open-in-new-window input[type=checkbox]');

        var $useProtocol = _this.$dialog.find('.sn-checkbox-use-protocol input[type=checkbox]');

        _this.ui.onDialogShown(_this.$dialog, function () {
          _this.context.triggerEvent('dialog.shown'); // If no url was given and given text is valid URL then copy that into URL Field


          if (!linkInfo.url && func.isValidUrl(linkInfo.text)) {
            linkInfo.url = linkInfo.text;
          }

          $linkText.on('input paste propertychange', function () {
            // If linktext was modified by input events,
            // cloning text from linkUrl will be stopped.
            linkInfo.text = $linkText.val();

            _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          }).val(linkInfo.text);
          $linkUrl.on('input paste propertychange', function () {
            // Display same text on `Text to display` as default
            // when linktext has no text
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
            }

            _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);
          }).val(linkInfo.url);

          if (!env.isSupportTouch) {
            $linkUrl.trigger('focus');
          }

          _this.toggleLinkBtn($linkBtn, $linkText, $linkUrl);

          _this.bindEnterKey($linkUrl, $linkBtn);

          _this.bindEnterKey($linkText, $linkBtn);

          var isNewWindowChecked = linkInfo.isNewWindow !== undefined ? linkInfo.isNewWindow : _this.context.options.linkTargetBlank;
          $openInNewWindow.prop('checked', isNewWindowChecked);
          var useProtocolChecked = linkInfo.url ? false : _this.context.options.useProtocol;
          $useProtocol.prop('checked', useProtocolChecked);
          $linkBtn.one('click', function (event) {
            event.preventDefault();
            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              isNewWindow: $openInNewWindow.is(':checked'),
              checkProtocol: $useProtocol.is(':checked')
            });

            _this.ui.hideDialog(_this.$dialog);
          });
        });

        _this.ui.onDialogHidden(_this.$dialog, function () {
          // detach events
          $linkText.off();
          $linkUrl.off();
          $linkBtn.off();

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        _this.ui.showDialog(_this.$dialog);
      }).promise();
    }
    /**
     * @param {Object} layoutInfo
     */

  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var linkInfo = this.context.invoke('editor.getLinkInfo');
      this.context.invoke('editor.saveRange');
      this.showLinkDialog(linkInfo).then(function (linkInfo) {
        _this2.context.invoke('editor.restoreRange');

        _this2.context.invoke('editor.createLink', linkInfo);
      }).fail(function () {
        _this2.context.invoke('editor.restoreRange');
      });
    }
  }]);

  return LinkDialog;
}();


// CONCATENATED MODULE: ./src/js/base/module/LinkPopover.js
function LinkPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LinkPopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function LinkPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) LinkPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) LinkPopover_defineProperties(Constructor, staticProps); return Constructor; }





var LinkPopover_LinkPopover = /*#__PURE__*/function () {
  function LinkPopover(context) {
    var _this = this;

    LinkPopover_classCallCheck(this, LinkPopover);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.options = context.options;
    this.events = {
      'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteChangeSummernoteScroll() {
        _this.update();
      },
      'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
        _this.hide();
      }
    };
  }

  LinkPopover_createClass(LinkPopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !lists.isEmpty(this.options.popover.link);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.$popover = this.ui.popover({
        className: 'note-link-popover',
        callback: function callback($node) {
          var $content = $node.find('.popover-content,.note-popover-content');
          $content.prepend('<span><a target="_blank"></a>&nbsp;</span>');
        }
      }).render().appendTo(this.options.container);
      var $content = this.$popover.find('.popover-content,.note-popover-content');
      this.context.invoke('buttons.build', $content, this.options.popover.link);
      this.$popover.on('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "update",
    value: function update() {
      // Prevent focusing on editable when invoke('code') is executed
      if (!this.context.invoke('editor.hasFocus')) {
        this.hide();
        return;
      }

      var rng = this.context.invoke('editor.getLastRange');

      if (rng.isCollapsed() && rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        var href = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(anchor).attr('href');
        this.$popover.find('a').attr('href', href).text(href);
        var pos = dom.posFromPlaceholder(anchor);
        var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
        pos.top -= containerOffset.top;
        pos.left -= containerOffset.left;
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$popover.hide();
    }
  }]);

  return LinkPopover;
}();


// CONCATENATED MODULE: ./src/js/base/module/ImageDialog.js
function ImageDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImageDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImageDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImageDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImageDialog_defineProperties(Constructor, staticProps); return Constructor; }





var ImageDialog_ImageDialog = /*#__PURE__*/function () {
  function ImageDialog(context) {
    ImageDialog_classCallCheck(this, ImageDialog);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
  }

  ImageDialog_createClass(ImageDialog, [{
    key: "initialize",
    value: function initialize() {
      var imageLimitation = '';

      if (this.options.maximumImageFileSize) {
        var unit = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024));
        var readableSize = (this.options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 + ' ' + ' KMGTP'[unit] + 'B';
        imageLimitation = "<small>".concat(this.lang.image.maximumFileSize + ' : ' + readableSize, "</small>");
      }

      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + '</label>', '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple"/>', imageLimitation, '</div>', '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + '</label>', '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', '</div>'].join('');
      var buttonClass = 'btn btn-primary note-btn note-btn-primary note-image-btn';
      var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.image.insert, "\" disabled>");
      this.$dialog = this.ui.dialog({
        title: this.lang.image.insert,
        fade: this.options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    }
  }, {
    key: "bindEnterKey",
    value: function bindEnterKey($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === core_key.code.ENTER) {
          event.preventDefault();
          $btn.trigger('click');
        }
      });
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      this.context.invoke('editor.saveRange');
      this.showImageDialog().then(function (data) {
        // [workaround] hide dialog before restore range for IE range focus
        _this.ui.hideDialog(_this.$dialog);

        _this.context.invoke('editor.restoreRange');

        if (typeof data === 'string') {
          // image url
          // If onImageLinkInsert set,
          if (_this.options.callbacks.onImageLinkInsert) {
            _this.context.triggerEvent('image.link.insert', data);
          } else {
            _this.context.invoke('editor.insertImage', data);
          }
        } else {
          // array of files
          _this.context.invoke('editor.insertImagesOrCallback', data);
        }
      }).fail(function () {
        _this.context.invoke('editor.restoreRange');
      });
    }
    /**
     * show image dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */

  }, {
    key: "showImageDialog",
    value: function showImageDialog() {
      var _this2 = this;

      return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
        var $imageInput = _this2.$dialog.find('.note-image-input');

        var $imageUrl = _this2.$dialog.find('.note-image-url');

        var $imageBtn = _this2.$dialog.find('.note-image-btn');

        _this2.ui.onDialogShown(_this2.$dialog, function () {
          _this2.context.triggerEvent('dialog.shown'); // Cloning imageInput to clear element.


          $imageInput.replaceWith($imageInput.clone().on('change', function (event) {
            deferred.resolve(event.target.files || event.target.value);
          }).val(''));
          $imageUrl.on('input paste propertychange', function () {
            _this2.ui.toggleBtn($imageBtn, $imageUrl.val());
          }).val('');

          if (!env.isSupportTouch) {
            $imageUrl.trigger('focus');
          }

          $imageBtn.click(function (event) {
            event.preventDefault();
            deferred.resolve($imageUrl.val());
          });

          _this2.bindEnterKey($imageUrl, $imageBtn);
        });

        _this2.ui.onDialogHidden(_this2.$dialog, function () {
          $imageInput.off();
          $imageUrl.off();
          $imageBtn.off();

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        _this2.ui.showDialog(_this2.$dialog);
      });
    }
  }]);

  return ImageDialog;
}();


// CONCATENATED MODULE: ./src/js/base/module/ImagePopover.js
function ImagePopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ImagePopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ImagePopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) ImagePopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) ImagePopover_defineProperties(Constructor, staticProps); return Constructor; }




/**
 * Image popover module
 *  mouse events that show/hide popover will be handled by Handle.js.
 *  Handle.js will receive the events and invoke 'imagePopover.update'.
 */

var ImagePopover_ImagePopover = /*#__PURE__*/function () {
  function ImagePopover(context) {
    var _this = this;

    ImagePopover_classCallCheck(this, ImagePopover);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.editable = context.layoutInfo.editable[0];
    this.options = context.options;
    this.events = {
      'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
        _this.hide();
      }
    };
  }

  ImagePopover_createClass(ImagePopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !lists.isEmpty(this.options.popover.image);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.$popover = this.ui.popover({
        className: 'note-image-popover'
      }).render().appendTo(this.options.container);
      var $content = this.$popover.find('.popover-content,.note-popover-content');
      this.context.invoke('buttons.build', $content, this.options.popover.image);
      this.$popover.on('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "update",
    value: function update(target, event) {
      if (dom.isImg(target)) {
        var position = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(target).offset();
        var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
        var pos = {};

        if (this.options.popatmouse) {
          pos.left = event.pageX - 20;
          pos.top = event.pageY;
        } else {
          pos = position;
        }

        pos.top -= containerOffset.top;
        pos.left -= containerOffset.left;
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$popover.hide();
    }
  }]);

  return ImagePopover;
}();


// CONCATENATED MODULE: ./src/js/base/module/TablePopover.js
function TablePopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TablePopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TablePopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) TablePopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) TablePopover_defineProperties(Constructor, staticProps); return Constructor; }






var TablePopover_TablePopover = /*#__PURE__*/function () {
  function TablePopover(context) {
    var _this = this;

    TablePopover_classCallCheck(this, TablePopover);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.options = context.options;
    this.events = {
      'summernote.mousedown': function summernoteMousedown(we, e) {
        _this.update(e.target);
      },
      'summernote.keyup summernote.scroll summernote.change': function summernoteKeyupSummernoteScrollSummernoteChange() {
        _this.update();
      },
      'summernote.disable summernote.blur': function summernoteDisableSummernoteBlur() {
        _this.hide();
      }
    };
  }

  TablePopover_createClass(TablePopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return !lists.isEmpty(this.options.popover.table);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      this.$popover = this.ui.popover({
        className: 'note-table-popover'
      }).render().appendTo(this.options.container);
      var $content = this.$popover.find('.popover-content,.note-popover-content');
      this.context.invoke('buttons.build', $content, this.options.popover.table); // [workaround] Disable Firefox's default table editor

      if (env.isFF) {
        document.execCommand('enableInlineTableEditing', false, false);
      }

      this.$popover.on('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "update",
    value: function update(target) {
      if (this.context.isDisabled()) {
        return false;
      }

      var isCell = dom.isCell(target);

      if (isCell) {
        var pos = dom.posFromPlaceholder(target);
        var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
        pos.top -= containerOffset.top;
        pos.left -= containerOffset.left;
        this.$popover.css({
          display: 'block',
          left: pos.left,
          top: pos.top
        });
      } else {
        this.hide();
      }

      return isCell;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$popover.hide();
    }
  }]);

  return TablePopover;
}();


// CONCATENATED MODULE: ./src/js/base/module/VideoDialog.js
function VideoDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function VideoDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function VideoDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) VideoDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) VideoDialog_defineProperties(Constructor, staticProps); return Constructor; }





var VideoDialog_VideoDialog = /*#__PURE__*/function () {
  function VideoDialog(context) {
    VideoDialog_classCallCheck(this, VideoDialog);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
  }

  VideoDialog_createClass(VideoDialog, [{
    key: "initialize",
    value: function initialize() {
      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<div class="form-group note-form-group row-fluid">', "<label for=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-form-label\">").concat(this.lang.video.url, " <small class=\"text-muted\">").concat(this.lang.video.providers, "</small></label>"), "<input id=\"note-dialog-video-url-".concat(this.options.id, "\" class=\"note-video-url form-control note-form-control note-input\" type=\"text\"/>"), '</div>'].join('');
      var buttonClass = 'btn btn-primary note-btn note-btn-primary note-video-btn';
      var footer = "<input type=\"button\" href=\"#\" class=\"".concat(buttonClass, "\" value=\"").concat(this.lang.video.insert, "\" disabled>");
      this.$dialog = this.ui.dialog({
        title: this.lang.video.insert,
        fade: this.options.dialogsFade,
        body: body,
        footer: footer
      }).render().appendTo($container);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    }
  }, {
    key: "bindEnterKey",
    value: function bindEnterKey($input, $btn) {
      $input.on('keypress', function (event) {
        if (event.keyCode === core_key.code.ENTER) {
          event.preventDefault();
          $btn.trigger('click');
        }
      });
    }
  }, {
    key: "createVideoNode",
    value: function createVideoNode(url) {
      // video url patterns(youtube, instagram, vimeo, dailymotion, youku, mp4, ogg, webm)
      var ytRegExp = /\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/;
      var ytRegExpForStart = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/;
      var ytMatch = url.match(ytRegExp);
      var igRegExp = /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/;
      var igMatch = url.match(igRegExp);
      var vRegExp = /\/\/vine\.co\/v\/([a-zA-Z0-9]+)/;
      var vMatch = url.match(vRegExp);
      var vimRegExp = /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/;
      var vimMatch = url.match(vimRegExp);
      var dmRegExp = /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/;
      var dmMatch = url.match(dmRegExp);
      var youkuRegExp = /\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/;
      var youkuMatch = url.match(youkuRegExp);
      var qqRegExp = /\/\/v\.qq\.com.*?vid=(.+)/;
      var qqMatch = url.match(qqRegExp);
      var qqRegExp2 = /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/;
      var qqMatch2 = url.match(qqRegExp2);
      var mp4RegExp = /^.+.(mp4|m4v)$/;
      var mp4Match = url.match(mp4RegExp);
      var oggRegExp = /^.+.(ogg|ogv)$/;
      var oggMatch = url.match(oggRegExp);
      var webmRegExp = /^.+.(webm)$/;
      var webmMatch = url.match(webmRegExp);
      var fbRegExp = /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/;
      var fbMatch = url.match(fbRegExp);
      var $video;

      if (ytMatch && ytMatch[1].length === 11) {
        var youtubeId = ytMatch[1];
        var start = 0;

        if (typeof ytMatch[2] !== 'undefined') {
          var ytMatchForStart = ytMatch[2].match(ytRegExpForStart);

          if (ytMatchForStart) {
            for (var n = [3600, 60, 1], i = 0, r = n.length; i < r; i++) {
              start += typeof ytMatchForStart[i + 1] !== 'undefined' ? n[i] * parseInt(ytMatchForStart[i + 1], 10) : 0;
            }
          }
        }

        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.youtube.com/embed/' + youtubeId + (start > 0 ? '?start=' + start : '')).attr('width', '640').attr('height', '360');
      } else if (igMatch && igMatch[0].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://instagram.com/p/' + igMatch[1] + '/embed/').attr('width', '612').attr('height', '710').attr('scrolling', 'no').attr('allowtransparency', 'true');
      } else if (vMatch && vMatch[0].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', vMatch[0] + '/embed/simple').attr('width', '600').attr('height', '600').attr('class', 'vine-embed');
      } else if (vimMatch && vimMatch[3].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('src', '//player.vimeo.com/video/' + vimMatch[3]).attr('width', '640').attr('height', '360');
      } else if (dmMatch && dmMatch[2].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', '//www.dailymotion.com/embed/video/' + dmMatch[2]).attr('width', '640').attr('height', '360');
      } else if (youkuMatch && youkuMatch[1].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '498').attr('width', '510').attr('src', '//player.youku.com/embed/' + youkuMatch[1]);
      } else if (qqMatch && qqMatch[1].length || qqMatch2 && qqMatch2[2].length) {
        var vid = qqMatch && qqMatch[1].length ? qqMatch[1] : qqMatch2[2];
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>').attr('frameborder', 0).attr('height', '310').attr('width', '500').attr('src', 'https://v.qq.com/txp/iframe/player.html?vid=' + vid + '&amp;auto=0');
      } else if (mp4Match || oggMatch || webmMatch) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<video controls>').attr('src', url).attr('width', '640').attr('height', '360');
      } else if (fbMatch && fbMatch[0].length) {
        $video = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<iframe>').attr('frameborder', 0).attr('src', 'https://www.facebook.com/plugins/video.php?href=' + encodeURIComponent(fbMatch[0]) + '&show_text=0&width=560').attr('width', '560').attr('height', '301').attr('scrolling', 'no').attr('allowtransparency', 'true');
      } else {
        // this is not a known video link. Now what, Cat? Now what?
        return false;
      }

      $video.addClass('note-video-clip');
      return $video[0];
    }
  }, {
    key: "show",
    value: function show() {
      var _this = this;

      var text = this.context.invoke('editor.getSelectedText');
      this.context.invoke('editor.saveRange');
      this.showVideoDialog(text).then(function (url) {
        // [workaround] hide dialog before restore range for IE range focus
        _this.ui.hideDialog(_this.$dialog);

        _this.context.invoke('editor.restoreRange'); // build node


        var $node = _this.createVideoNode(url);

        if ($node) {
          // insert video node
          _this.context.invoke('editor.insertNode', $node);
        }
      }).fail(function () {
        _this.context.invoke('editor.restoreRange');
      });
    }
    /**
     * show video dialog
     *
     * @param {jQuery} $dialog
     * @return {Promise}
     */

  }, {
    key: "showVideoDialog",
    value: function showVideoDialog()
    /* text */
    {
      var _this2 = this;

      return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
        var $videoUrl = _this2.$dialog.find('.note-video-url');

        var $videoBtn = _this2.$dialog.find('.note-video-btn');

        _this2.ui.onDialogShown(_this2.$dialog, function () {
          _this2.context.triggerEvent('dialog.shown');

          $videoUrl.on('input paste propertychange', function () {
            _this2.ui.toggleBtn($videoBtn, $videoUrl.val());
          });

          if (!env.isSupportTouch) {
            $videoUrl.trigger('focus');
          }

          $videoBtn.click(function (event) {
            event.preventDefault();
            deferred.resolve($videoUrl.val());
          });

          _this2.bindEnterKey($videoUrl, $videoBtn);
        });

        _this2.ui.onDialogHidden(_this2.$dialog, function () {
          $videoUrl.off();
          $videoBtn.off();

          if (deferred.state() === 'pending') {
            deferred.reject();
          }
        });

        _this2.ui.showDialog(_this2.$dialog);
      });
    }
  }]);

  return VideoDialog;
}();


// CONCATENATED MODULE: ./src/js/base/module/HelpDialog.js
function HelpDialog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HelpDialog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HelpDialog_createClass(Constructor, protoProps, staticProps) { if (protoProps) HelpDialog_defineProperties(Constructor.prototype, protoProps); if (staticProps) HelpDialog_defineProperties(Constructor, staticProps); return Constructor; }




var HelpDialog_HelpDialog = /*#__PURE__*/function () {
  function HelpDialog(context) {
    HelpDialog_classCallCheck(this, HelpDialog);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$body = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(document.body);
    this.$editor = context.layoutInfo.editor;
    this.options = context.options;
    this.lang = this.options.langInfo;
  }

  HelpDialog_createClass(HelpDialog, [{
    key: "initialize",
    value: function initialize() {
      var $container = this.options.dialogsInBody ? this.$body : this.options.container;
      var body = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.18</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', '</p>'].join('');
      this.$dialog = this.ui.dialog({
        title: this.lang.options.help,
        fade: this.options.dialogsFade,
        body: this.createShortcutList(),
        footer: body,
        callback: function callback($node) {
          $node.find('.modal-body,.note-modal-body').css({
            'max-height': 300,
            'overflow': 'scroll'
          });
        }
      }).render().appendTo($container);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.ui.hideDialog(this.$dialog);
      this.$dialog.remove();
    }
  }, {
    key: "createShortcutList",
    value: function createShortcutList() {
      var _this = this;

      var keyMap = this.options.keyMap[env.isMac ? 'mac' : 'pc'];
      return Object.keys(keyMap).map(function (key) {
        var command = keyMap[key];
        var $row = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div><div class="help-list-item"></div></div>');
        $row.append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<label><kbd>' + key + '</kdb></label>').css({
          'width': 180,
          'margin-right': 10
        })).append(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<span/>').html(_this.context.memo('help.' + command) || command));
        return $row.html();
      }).join('');
    }
    /**
     * show help dialog
     *
     * @return {Promise}
     */

  }, {
    key: "showHelpDialog",
    value: function showHelpDialog() {
      var _this2 = this;

      return external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.Deferred(function (deferred) {
        _this2.ui.onDialogShown(_this2.$dialog, function () {
          _this2.context.triggerEvent('dialog.shown');

          deferred.resolve();
        });

        _this2.ui.showDialog(_this2.$dialog);
      }).promise();
    }
  }, {
    key: "show",
    value: function show() {
      var _this3 = this;

      this.context.invoke('editor.saveRange');
      this.showHelpDialog().then(function () {
        _this3.context.invoke('editor.restoreRange');
      });
    }
  }]);

  return HelpDialog;
}();


// CONCATENATED MODULE: ./src/js/base/module/AirPopover.js
function AirPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AirPopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AirPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) AirPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) AirPopover_defineProperties(Constructor, staticProps); return Constructor; }



var AIRMODE_POPOVER_X_OFFSET = -5;
var AIRMODE_POPOVER_Y_OFFSET = 5;

var AirPopover_AirPopover = /*#__PURE__*/function () {
  function AirPopover(context) {
    var _this = this;

    AirPopover_classCallCheck(this, AirPopover);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.options = context.options;
    this.hidable = true;
    this.onContextmenu = false;
    this.pageX = null;
    this.pageY = null;
    this.events = {
      'summernote.contextmenu': function summernoteContextmenu(e) {
        if (_this.options.editing) {
          e.preventDefault();
          e.stopPropagation();
          _this.onContextmenu = true;

          _this.update(true);
        }
      },
      'summernote.mousedown': function summernoteMousedown(we, e) {
        _this.pageX = e.pageX;
        _this.pageY = e.pageY;
      },
      'summernote.keyup summernote.mouseup summernote.scroll': function summernoteKeyupSummernoteMouseupSummernoteScroll(we, e) {
        if (_this.options.editing && !_this.onContextmenu) {
          _this.pageX = e.pageX;
          _this.pageY = e.pageY;

          _this.update();
        }

        _this.onContextmenu = false;
      },
      'summernote.disable summernote.change summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteChangeSummernoteDialogShownSummernoteBlur() {
        _this.hide();
      },
      'summernote.focusout': function summernoteFocusout() {
        if (!_this.$popover.is(':active,:focus')) {
          _this.hide();
        }
      }
    };
  }

  AirPopover_createClass(AirPopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return this.options.airMode && !lists.isEmpty(this.options.popover.air);
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.$popover = this.ui.popover({
        className: 'note-air-popover'
      }).render().appendTo(this.options.container);
      var $content = this.$popover.find('.popover-content');
      this.context.invoke('buttons.build', $content, this.options.popover.air); // disable hiding this popover preemptively by 'summernote.blur' event.

      this.$popover.on('mousedown', function () {
        _this2.hidable = false;
      }); // (re-)enable hiding after 'summernote.blur' has been handled (aka. ignored).

      this.$popover.on('mouseup', function () {
        _this2.hidable = true;
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "update",
    value: function update(forcelyOpen) {
      var styleInfo = this.context.invoke('editor.currentStyle');

      if (styleInfo.range && (!styleInfo.range.isCollapsed() || forcelyOpen)) {
        var rect = {
          left: this.pageX,
          top: this.pageY
        };
        var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();
        rect.top -= containerOffset.top;
        rect.left -= containerOffset.left;
        this.$popover.css({
          display: 'block',
          left: Math.max(rect.left, 0) + AIRMODE_POPOVER_X_OFFSET,
          top: rect.top + AIRMODE_POPOVER_Y_OFFSET
        });
        this.context.invoke('buttons.updateCurrentStyle', this.$popover);
      } else {
        this.hide();
      }
    }
  }, {
    key: "updateCodeview",
    value: function updateCodeview(isCodeview) {
      this.ui.toggleBtnActive(this.$popover.find('.btn-codeview'), isCodeview);

      if (isCodeview) {
        this.hide();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.hidable) {
        this.$popover.hide();
      }
    }
  }]);

  return AirPopover;
}();


// CONCATENATED MODULE: ./src/js/base/module/HintPopover.js
function HintPopover_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HintPopover_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HintPopover_createClass(Constructor, protoProps, staticProps) { if (protoProps) HintPopover_defineProperties(Constructor.prototype, protoProps); if (staticProps) HintPopover_defineProperties(Constructor, staticProps); return Constructor; }







var POPOVER_DIST = 5;

var HintPopover_HintPopover = /*#__PURE__*/function () {
  function HintPopover(context) {
    var _this = this;

    HintPopover_classCallCheck(this, HintPopover);

    this.context = context;
    this.ui = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.ui;
    this.$editable = context.layoutInfo.editable;
    this.options = context.options;
    this.hint = this.options.hint || [];
    this.direction = this.options.hintDirection || 'bottom';
    this.hints = Array.isArray(this.hint) ? this.hint : [this.hint];
    this.events = {
      'summernote.keyup': function summernoteKeyup(we, e) {
        if (!e.isDefaultPrevented()) {
          _this.handleKeyup(e);
        }
      },
      'summernote.keydown': function summernoteKeydown(we, e) {
        _this.handleKeydown(e);
      },
      'summernote.disable summernote.dialog.shown summernote.blur': function summernoteDisableSummernoteDialogShownSummernoteBlur() {
        _this.hide();
      }
    };
  }

  HintPopover_createClass(HintPopover, [{
    key: "shouldInitialize",
    value: function shouldInitialize() {
      return this.hints.length > 0;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      var _this2 = this;

      this.lastWordRange = null;
      this.matchingWord = null;
      this.$popover = this.ui.popover({
        className: 'note-hint-popover',
        hideArrow: true,
        direction: ''
      }).render().appendTo(this.options.container);
      this.$popover.hide();
      this.$content = this.$popover.find('.popover-content,.note-popover-content');
      this.$content.on('click', '.note-hint-item', function (e) {
        _this2.$content.find('.active').removeClass('active');

        external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).addClass('active');

        _this2.replace();
      });
      this.$popover.on('mousedown', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.$popover.remove();
    }
  }, {
    key: "selectItem",
    value: function selectItem($item) {
      this.$content.find('.active').removeClass('active');
      $item.addClass('active');
      this.$content[0].scrollTop = $item[0].offsetTop - this.$content.innerHeight() / 2;
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      var $current = this.$content.find('.note-hint-item.active');
      var $next = $current.next();

      if ($next.length) {
        this.selectItem($next);
      } else {
        var $nextGroup = $current.parent().next();

        if (!$nextGroup.length) {
          $nextGroup = this.$content.find('.note-hint-group').first();
        }

        this.selectItem($nextGroup.find('.note-hint-item').first());
      }
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      var $current = this.$content.find('.note-hint-item.active');
      var $prev = $current.prev();

      if ($prev.length) {
        this.selectItem($prev);
      } else {
        var $prevGroup = $current.parent().prev();

        if (!$prevGroup.length) {
          $prevGroup = this.$content.find('.note-hint-group').last();
        }

        this.selectItem($prevGroup.find('.note-hint-item').last());
      }
    }
  }, {
    key: "replace",
    value: function replace() {
      var $item = this.$content.find('.note-hint-item.active');

      if ($item.length) {
        var node = this.nodeFromItem($item); // If matchingWord length = 0 -> capture OK / open hint / but as mention capture "" (\w*)

        if (this.matchingWord !== null && this.matchingWord.length === 0) {
          this.lastWordRange.so = this.lastWordRange.eo; // Else si > 0 and normal case -> adjust range "before" for correct position of insertion
        } else if (this.matchingWord !== null && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
          var rangeCompute = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;

          if (rangeCompute > 0) {
            this.lastWordRange.so += rangeCompute;
          }
        }

        this.lastWordRange.insertNode(node);

        if (this.options.hintSelect === 'next') {
          var blank = document.createTextNode('');
          external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(node).after(blank);
          range.createFromNodeBefore(blank).select();
        } else {
          range.createFromNodeAfter(node).select();
        }

        this.lastWordRange = null;
        this.hide();
        this.context.invoke('editor.focus');
      }
    }
  }, {
    key: "nodeFromItem",
    value: function nodeFromItem($item) {
      var hint = this.hints[$item.data('index')];
      var item = $item.data('item');
      var node = hint.content ? hint.content(item) : item;

      if (typeof node === 'string') {
        node = dom.createText(node);
      }

      return node;
    }
  }, {
    key: "createItemTemplates",
    value: function createItemTemplates(hintIdx, items) {
      var hint = this.hints[hintIdx];
      return items.map(function (item
      /*, idx */
      ) {
        var $item = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-item"/>');
        $item.append(hint.template ? hint.template(item) : item + '');
        $item.data({
          'index': hintIdx,
          'item': item
        });
        return $item;
      });
    }
  }, {
    key: "handleKeydown",
    value: function handleKeydown(e) {
      if (!this.$popover.is(':visible')) {
        return;
      }

      if (e.keyCode === core_key.code.ENTER) {
        e.preventDefault();
        this.replace();
      } else if (e.keyCode === core_key.code.UP) {
        e.preventDefault();
        this.moveUp();
      } else if (e.keyCode === core_key.code.DOWN) {
        e.preventDefault();
        this.moveDown();
      }
    }
  }, {
    key: "searchKeyword",
    value: function searchKeyword(index, keyword, callback) {
      var hint = this.hints[index];

      if (hint && hint.match.test(keyword) && hint.search) {
        var matches = hint.match.exec(keyword);
        this.matchingWord = matches[0];
        hint.search(matches[1], callback);
      } else {
        callback();
      }
    }
  }, {
    key: "createGroup",
    value: function createGroup(idx, keyword) {
      var _this3 = this;

      var $group = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()('<div class="note-hint-group note-hint-group-' + idx + '"></div>');
      this.searchKeyword(idx, keyword, function (items) {
        items = items || [];

        if (items.length) {
          $group.html(_this3.createItemTemplates(idx, items));

          _this3.show();
        }
      });
      return $group;
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      var _this4 = this;

      if (!lists.contains([core_key.code.ENTER, core_key.code.UP, core_key.code.DOWN], e.keyCode)) {
        var _range = this.context.invoke('editor.getLastRange');

        var wordRange, keyword;

        if (this.options.hintMode === 'words') {
          wordRange = _range.getWordsRange(_range);
          keyword = wordRange.toString();
          this.hints.forEach(function (hint) {
            if (hint.match.test(keyword)) {
              wordRange = _range.getWordsMatchRange(hint.match);
              return false;
            }
          });

          if (!wordRange) {
            this.hide();
            return;
          }

          keyword = wordRange.toString();
        } else {
          wordRange = _range.getWordRange();
          keyword = wordRange.toString();
        }

        if (this.hints.length && keyword) {
          this.$content.empty();
          var bnd = func.rect2bnd(lists.last(wordRange.getClientRects()));
          var containerOffset = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(this.options.container).offset();

          if (bnd) {
            bnd.top -= containerOffset.top;
            bnd.left -= containerOffset.left;
            this.$popover.hide();
            this.lastWordRange = wordRange;
            this.hints.forEach(function (hint, idx) {
              if (hint.match.test(keyword)) {
                _this4.createGroup(idx, keyword).appendTo(_this4.$content);
              }
            }); // select first .note-hint-item

            this.$content.find('.note-hint-item:first').addClass('active'); // set position for popover after group is created

            if (this.direction === 'top') {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top - this.$popover.outerHeight() - POPOVER_DIST
              });
            } else {
              this.$popover.css({
                left: bnd.left,
                top: bnd.top + bnd.height + POPOVER_DIST
              });
            }
          }
        } else {
          this.hide();
        }
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.$popover.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$popover.hide();
    }
  }]);

  return HintPopover;
}();


// CONCATENATED MODULE: ./src/js/base/settings.js




























external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
  version: '0.8.18',
  plugins: {},
  dom: dom,
  range: range,
  lists: lists,
  options: {
    langInfo: external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.lang['en-US'],
    editing: true,
    modules: {
      'editor': Editor_Editor,
      'clipboard': Clipboard_Clipboard,
      'dropzone': Dropzone_Dropzone,
      'codeview': Codeview_CodeView,
      'statusbar': Statusbar_Statusbar,
      'fullscreen': Fullscreen_Fullscreen,
      'handle': Handle_Handle,
      // FIXME: HintPopover must be front of autolink
      //  - Script error about range when Enter key is pressed on hint popover
      'hintPopover': HintPopover_HintPopover,
      'autoLink': AutoLink_AutoLink,
      'autoSync': AutoSync_AutoSync,
      'autoReplace': AutoReplace_AutoReplace,
      'placeholder': Placeholder_Placeholder,
      'buttons': Buttons_Buttons,
      'toolbar': Toolbar_Toolbar,
      'linkDialog': LinkDialog_LinkDialog,
      'linkPopover': LinkPopover_LinkPopover,
      'imageDialog': ImageDialog_ImageDialog,
      'imagePopover': ImagePopover_ImagePopover,
      'tablePopover': TablePopover_TablePopover,
      'videoDialog': VideoDialog_VideoDialog,
      'helpDialog': HelpDialog_HelpDialog,
      'airPopover': AirPopover_AirPopover
    },
    buttons: {},
    lang: 'en-US',
    followingToolbar: false,
    toolbarPosition: 'top',
    otherStaticBar: '',
    // toolbar
    codeviewKeepButton: false,
    toolbar: [['style', ['style']], ['font', ['bold', 'underline', 'clear']], ['fontname', ['fontname']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture', 'video']], ['view', ['fullscreen', 'codeview', 'help']]],
    // popover
    popatmouse: true,
    popover: {
      image: [['resize', ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone']], ['float', ['floatLeft', 'floatRight', 'floatNone']], ['remove', ['removeMedia']]],
      link: [['link', ['linkDialogShow', 'unlink']]],
      table: [['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']], ['delete', ['deleteRow', 'deleteCol', 'deleteTable']]],
      air: [['color', ['color']], ['font', ['bold', 'underline', 'clear']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['link', 'picture']], ['view', ['fullscreen', 'codeview']]]
    },
    // air mode: inline editor
    airMode: false,
    overrideContextMenu: false,
    // TBD
    width: null,
    height: null,
    linkTargetBlank: true,
    useProtocol: true,
    defaultProtocol: 'http://',
    focus: false,
    tabDisabled: false,
    tabSize: 4,
    styleWithCSS: false,
    shortcuts: true,
    textareaAutoSync: true,
    tooltip: 'auto',
    container: null,
    maxTextLength: 0,
    blockquoteBreakingLevel: 2,
    spellCheck: true,
    disableGrammar: false,
    placeholder: null,
    inheritPlaceholder: false,
    // TODO: need to be documented
    recordEveryKeystroke: false,
    historyLimit: 200,
    // TODO: need to be documented
    showDomainOnlyForAutolink: false,
    // TODO: need to be documented
    hintMode: 'word',
    hintSelect: 'after',
    hintDirection: 'bottom',
    styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New', 'Helvetica Neue', 'Helvetica', 'Impact', 'Lucida Grande', 'Tahoma', 'Times New Roman', 'Verdana'],
    fontNamesIgnoreCheck: [],
    addDefaultFonts: true,
    fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
    fontSizeUnits: ['px', 'pt'],
    // pallete colors(n x n)
    colors: [['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'], ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'], ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'], ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'], ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'], ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'], ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'], ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']],
    // http://chir.ag/projects/name-that-color/
    colorsName: [['Black', 'Tundora', 'Dove Gray', 'Star Dust', 'Pale Slate', 'Gallery', 'Alabaster', 'White'], ['Red', 'Orange Peel', 'Yellow', 'Green', 'Cyan', 'Blue', 'Electric Violet', 'Magenta'], ['Azalea', 'Karry', 'Egg White', 'Zanah', 'Botticelli', 'Tropical Blue', 'Mischka', 'Twilight'], ['Tonys Pink', 'Peach Orange', 'Cream Brulee', 'Sprout', 'Casper', 'Perano', 'Cold Purple', 'Careys Pink'], ['Mandy', 'Rajah', 'Dandelion', 'Olivine', 'Gulf Stream', 'Viking', 'Blue Marguerite', 'Puce'], ['Guardsman Red', 'Fire Bush', 'Golden Dream', 'Chelsea Cucumber', 'Smalt Blue', 'Boston Blue', 'Butterfly Bush', 'Cadillac'], ['Sangria', 'Mai Tai', 'Buddha Gold', 'Forest Green', 'Eden', 'Venice Blue', 'Meteorite', 'Claret'], ['Rosewood', 'Cinnamon', 'Olive', 'Parsley', 'Tiber', 'Midnight Blue', 'Valentino', 'Loulou']],
    colorButton: {
      foreColor: '#000000',
      backColor: '#FFFF00'
    },
    lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
    tableClassName: 'table table-bordered',
    insertTableMaxSize: {
      col: 10,
      row: 10
    },
    // By default, dialogs are attached in container.
    dialogsInBody: false,
    dialogsFade: false,
    maximumImageFileSize: null,
    callbacks: {
      onBeforeCommand: null,
      onBlur: null,
      onBlurCodeview: null,
      onChange: null,
      onChangeCodeview: null,
      onDialogShown: null,
      onEnter: null,
      onFocus: null,
      onImageLinkInsert: null,
      onImageUpload: null,
      onImageUploadError: null,
      onInit: null,
      onKeydown: null,
      onKeyup: null,
      onMousedown: null,
      onMouseup: null,
      onPaste: null,
      onScroll: null
    },
    codemirror: {
      mode: 'text/html',
      htmlMode: true,
      lineNumbers: true
    },
    codeviewFilter: false,
    codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
    codeviewIframeFilter: true,
    codeviewIframeWhitelistSrc: [],
    codeviewIframeWhitelistSrcBase: ['www.youtube.com', 'www.youtube-nocookie.com', 'www.facebook.com', 'vine.co', 'instagram.com', 'player.vimeo.com', 'www.dailymotion.com', 'player.youku.com', 'v.qq.com'],
    keyMap: {
      pc: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CTRL+Z': 'undo',
        'CTRL+Y': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CTRL+B': 'bold',
        'CTRL+I': 'italic',
        'CTRL+U': 'underline',
        'CTRL+SHIFT+S': 'strikethrough',
        'CTRL+BACKSLASH': 'removeFormat',
        'CTRL+SHIFT+L': 'justifyLeft',
        'CTRL+SHIFT+E': 'justifyCenter',
        'CTRL+SHIFT+R': 'justifyRight',
        'CTRL+SHIFT+J': 'justifyFull',
        'CTRL+SHIFT+NUM7': 'insertUnorderedList',
        'CTRL+SHIFT+NUM8': 'insertOrderedList',
        'CTRL+LEFTBRACKET': 'outdent',
        'CTRL+RIGHTBRACKET': 'indent',
        'CTRL+NUM0': 'formatPara',
        'CTRL+NUM1': 'formatH1',
        'CTRL+NUM2': 'formatH2',
        'CTRL+NUM3': 'formatH3',
        'CTRL+NUM4': 'formatH4',
        'CTRL+NUM5': 'formatH5',
        'CTRL+NUM6': 'formatH6',
        'CTRL+ENTER': 'insertHorizontalRule',
        'CTRL+K': 'linkDialog.show'
      },
      mac: {
        'ESC': 'escape',
        'ENTER': 'insertParagraph',
        'CMD+Z': 'undo',
        'CMD+SHIFT+Z': 'redo',
        'TAB': 'tab',
        'SHIFT+TAB': 'untab',
        'CMD+B': 'bold',
        'CMD+I': 'italic',
        'CMD+U': 'underline',
        'CMD+SHIFT+S': 'strikethrough',
        'CMD+BACKSLASH': 'removeFormat',
        'CMD+SHIFT+L': 'justifyLeft',
        'CMD+SHIFT+E': 'justifyCenter',
        'CMD+SHIFT+R': 'justifyRight',
        'CMD+SHIFT+J': 'justifyFull',
        'CMD+SHIFT+NUM7': 'insertUnorderedList',
        'CMD+SHIFT+NUM8': 'insertOrderedList',
        'CMD+LEFTBRACKET': 'outdent',
        'CMD+RIGHTBRACKET': 'indent',
        'CMD+NUM0': 'formatPara',
        'CMD+NUM1': 'formatH1',
        'CMD+NUM2': 'formatH2',
        'CMD+NUM3': 'formatH3',
        'CMD+NUM4': 'formatH4',
        'CMD+NUM5': 'formatH5',
        'CMD+NUM6': 'formatH6',
        'CMD+ENTER': 'insertHorizontalRule',
        'CMD+K': 'linkDialog.show'
      }
    },
    icons: {
      'align': 'note-icon-align',
      'alignCenter': 'note-icon-align-center',
      'alignJustify': 'note-icon-align-justify',
      'alignLeft': 'note-icon-align-left',
      'alignRight': 'note-icon-align-right',
      'rowBelow': 'note-icon-row-below',
      'colBefore': 'note-icon-col-before',
      'colAfter': 'note-icon-col-after',
      'rowAbove': 'note-icon-row-above',
      'rowRemove': 'note-icon-row-remove',
      'colRemove': 'note-icon-col-remove',
      'indent': 'note-icon-align-indent',
      'outdent': 'note-icon-align-outdent',
      'arrowsAlt': 'note-icon-arrows-alt',
      'bold': 'note-icon-bold',
      'caret': 'note-icon-caret',
      'circle': 'note-icon-circle',
      'close': 'note-icon-close',
      'code': 'note-icon-code',
      'eraser': 'note-icon-eraser',
      'floatLeft': 'note-icon-float-left',
      'floatRight': 'note-icon-float-right',
      'font': 'note-icon-font',
      'frame': 'note-icon-frame',
      'italic': 'note-icon-italic',
      'link': 'note-icon-link',
      'unlink': 'note-icon-chain-broken',
      'magic': 'note-icon-magic',
      'menuCheck': 'note-icon-menu-check',
      'minus': 'note-icon-minus',
      'orderedlist': 'note-icon-orderedlist',
      'pencil': 'note-icon-pencil',
      'picture': 'note-icon-picture',
      'question': 'note-icon-question',
      'redo': 'note-icon-redo',
      'rollback': 'note-icon-rollback',
      'square': 'note-icon-square',
      'strikethrough': 'note-icon-strikethrough',
      'subscript': 'note-icon-subscript',
      'superscript': 'note-icon-superscript',
      'table': 'note-icon-table',
      'textHeight': 'note-icon-text-height',
      'trash': 'note-icon-trash',
      'underline': 'note-icon-underline',
      'undo': 'note-icon-undo',
      'unorderedlist': 'note-icon-unorderedlist',
      'video': 'note-icon-video'
    }
  }
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"root":"jQuery","commonjs2":"jquery","commonjs":"jquery","amd":"jquery"}
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_ = __webpack_require__(0);
var external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default = /*#__PURE__*/__webpack_require__.n(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_);

// EXTERNAL MODULE: ./src/js/base/renderer.js
var renderer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/bs4/ui.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var editor = renderer["a" /* default */].create('<div class="note-editor note-frame card"/>');
var toolbar = renderer["a" /* default */].create('<div class="note-toolbar card-header" role="toolbar"/>');
var editingArea = renderer["a" /* default */].create('<div class="note-editing-area"/>');
var codable = renderer["a" /* default */].create('<textarea class="note-codable" aria-multiline="true"/>');
var editable = renderer["a" /* default */].create('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"/>');
var statusbar = renderer["a" /* default */].create(['<output class="note-status-output" role="status" aria-live="polite"></output>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="Resize">', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '</div>', '</div>'].join(''));
var airEditor = renderer["a" /* default */].create('<div class="note-editor note-airframe"/>');
var airEditable = renderer["a" /* default */].create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>', '<output class="note-status-output" role="status" aria-live="polite"></output>'].join(''));
var buttonGroup = renderer["a" /* default */].create('<div class="note-btn-group btn-group">');
var dropdown = renderer["a" /* default */].create('<div class="note-dropdown-menu dropdown-menu" role="list">', function ($node, options) {
  var markup = Array.isArray(options.items) ? options.items.map(function (item) {
    var value = typeof item === 'string' ? item : item.value || '';
    var content = options.template ? options.template(item) : item;
    var option = _typeof(item) === 'object' ? item.option : undefined;
    var dataValue = 'data-value="' + value + '"';
    var dataOption = option !== undefined ? ' data-option="' + option + '"' : '';
    return '<a class="dropdown-item" href="#" ' + (dataValue + dataOption) + ' role="listitem" aria-label="' + value + '">' + content + '</a>';
  }).join('') : options.items;
  $node.html(markup).attr({
    'aria-label': options.title
  });

  if (options && options.codeviewKeepButton) {
    $node.addClass('note-codeview-keep');
  }
});

var dropdownButtonContents = function dropdownButtonContents(contents) {
  return contents;
};

var dropdownCheck = renderer["a" /* default */].create('<div class="note-dropdown-menu dropdown-menu note-check" role="list">', function ($node, options) {
  var markup = Array.isArray(options.items) ? options.items.map(function (item) {
    var value = typeof item === 'string' ? item : item.value || '';
    var content = options.template ? options.template(item) : item;
    return '<a class="dropdown-item" href="#" data-value="' + value + '" role="listitem" aria-label="' + item + '">' + icon(options.checkClassName) + ' ' + content + '</a>';
  }).join('') : options.items;
  $node.html(markup).attr({
    'aria-label': options.title
  });

  if (options && options.codeviewKeepButton) {
    $node.addClass('note-codeview-keep');
  }
});
var dialog = renderer["a" /* default */].create('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function ($node, options) {
  if (options.fade) {
    $node.addClass('fade');
  }

  $node.attr({
    'aria-label': options.title
  });
  $node.html(['<div class="modal-dialog">', '<div class="modal-content">', options.title ? '<div class="modal-header">' + '<h4 class="modal-title">' + options.title + '</h4>' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button>' + '</div>' : '', '<div class="modal-body">' + options.body + '</div>', options.footer ? '<div class="modal-footer">' + options.footer + '</div>' : '', '</div>', '</div>'].join(''));
});
var popover = renderer["a" /* default */].create(['<div class="note-popover popover in">', '<div class="arrow"></div>', '<div class="popover-content note-children-container"></div>', '</div>'].join(''), function ($node, options) {
  var direction = typeof options.direction !== 'undefined' ? options.direction : 'bottom';
  $node.addClass(direction);

  if (options.hideArrow) {
    $node.find('.arrow').hide();
  }
});
var ui_checkbox = renderer["a" /* default */].create('<div class="form-check"></div>', function ($node, options) {
  $node.html(['<label class="form-check-label"' + (options.id ? ' for="note-' + options.id + '"' : '') + '>', '<input type="checkbox" class="form-check-input"' + (options.id ? ' id="note-' + options.id + '"' : ''), options.checked ? ' checked' : '', ' aria-label="' + (options.text ? options.text : '') + '"', ' aria-checked="' + (options.checked ? 'true' : 'false') + '"/>', ' ' + (options.text ? options.text : '') + '</label>'].join(''));
});

var icon = function icon(iconClassName, tagName) {
  tagName = tagName || 'i';
  return '<' + tagName + ' class="' + iconClassName + '"></' + tagName + '>';
};

var ui_ui = function ui(editorOptions) {
  return {
    editor: editor,
    toolbar: toolbar,
    editingArea: editingArea,
    codable: codable,
    editable: editable,
    statusbar: statusbar,
    airEditor: airEditor,
    airEditable: airEditable,
    buttonGroup: buttonGroup,
    dropdown: dropdown,
    dropdownButtonContents: dropdownButtonContents,
    dropdownCheck: dropdownCheck,
    dialog: dialog,
    popover: popover,
    icon: icon,
    checkbox: ui_checkbox,
    options: editorOptions,
    palette: function palette($node, options) {
      return renderer["a" /* default */].create('<div class="note-color-palette"/>', function ($node, options) {
        var contents = [];

        for (var row = 0, rowSize = options.colors.length; row < rowSize; row++) {
          var eventName = options.eventName;
          var colors = options.colors[row];
          var colorsName = options.colorsName[row];
          var buttons = [];

          for (var col = 0, colSize = colors.length; col < colSize; col++) {
            var color = colors[col];
            var colorName = colorsName[col];
            buttons.push(['<button type="button" class="note-color-btn"', 'style="background-color:', color, '" ', 'data-event="', eventName, '" ', 'data-value="', color, '" ', 'title="', colorName, '" ', 'aria-label="', colorName, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(''));
          }

          contents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
        }

        $node.html(contents.join(''));

        if (options.tooltip) {
          $node.find('.note-color-btn').tooltip({
            container: options.container || editorOptions.container,
            trigger: 'hover',
            placement: 'bottom'
          });
        }
      })($node, options);
    },
    button: function button($node, options) {
      return renderer["a" /* default */].create('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1">', function ($node, options) {
        if (options && options.tooltip) {
          $node.attr({
            title: options.tooltip,
            'aria-label': options.tooltip
          }).tooltip({
            container: options.container || editorOptions.container,
            trigger: 'hover',
            placement: 'bottom'
          }).on('click', function (e) {
            external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default()(e.currentTarget).tooltip('hide');
          });
        }

        if (options && options.codeviewButton) {
          $node.addClass('note-codeview-keep');
        }
      })($node, options);
    },
    toggleBtn: function toggleBtn($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
    },
    toggleBtnActive: function toggleBtnActive($btn, isActive) {
      $btn.toggleClass('active', isActive);
    },
    onDialogShown: function onDialogShown($dialog, handler) {
      $dialog.one('shown.bs.modal', handler);
    },
    onDialogHidden: function onDialogHidden($dialog, handler) {
      $dialog.one('hidden.bs.modal', handler);
    },
    showDialog: function showDialog($dialog) {
      $dialog.modal('show');
    },
    hideDialog: function hideDialog($dialog) {
      $dialog.modal('hide');
    },
    createLayout: function createLayout($note) {
      var $editor = (editorOptions.airMode ? airEditor([editingArea([codable(), airEditable()])]) : editorOptions.toolbarPosition === 'bottom' ? editor([editingArea([codable(), editable()]), toolbar(), statusbar()]) : editor([toolbar(), editingArea([codable(), editable()]), statusbar()])).render();
      $editor.insertAfter($note);
      return {
        note: $note,
        editor: $editor,
        toolbar: $editor.find('.note-toolbar'),
        editingArea: $editor.find('.note-editing-area'),
        editable: $editor.find('.note-editable'),
        codable: $editor.find('.note-codable'),
        statusbar: $editor.find('.note-statusbar')
      };
    },
    removeLayout: function removeLayout($note, layoutInfo) {
      $note.html(layoutInfo.editable.html());
      layoutInfo.editor.remove();
      $note.show();
    }
  };
};

/* harmony default export */ var bs4_ui = (ui_ui);
// EXTERNAL MODULE: ./src/js/base/settings.js + 37 modules
var settings = __webpack_require__(3);

// EXTERNAL MODULE: ./src/styles/summernote-bs4.scss
var summernote_bs4 = __webpack_require__(5);

// CONCATENATED MODULE: ./src/js/bs4/settings.js




external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote = external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.extend(external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote, {
  ui_template: bs4_ui,
  "interface": 'bs4'
});
external_root_jQuery_commonjs2_jquery_commonjs_jquery_amd_jquery_default.a.summernote.options.styleTags = ['p', {
  title: 'Blockquote',
  tag: 'blockquote',
  className: 'blockquote',
  value: 'blockquote'
}, 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

/***/ })

/******/ });
});
//# sourceMappingURL=summernote-bs4.js.map
$(document).ready(function () {
  $('.nav-sidebar a').each(function(){

    let location = window.location.protocol + '//' + window.location.host + window.location.pathname;
    let link = this.href;
    if(link == location){
      $(this).addClass('active');
      $(this).closest('.has-treeview').addClass('menu-open');
    }
  });

  //Initialize Select2 Elements
  $('.select2').select2();

  //Initialize bs-custom-file-input
  bsCustomFileInput.init();



  //SUMMERNOTE
  //////////////////////////////////////////////////////

  //Summernote custom Button
  var UlButton = function (context) {
    var ui = $.summernote.ui;

    // create button
    var button = ui.button({
      contents: '<i class="far fa-list-alt"/> Шаблон UL',
      tooltip: 'Шаблон UL для сатьи',
      click: function () {
        context.invoke('pasteHTML', '<ul class="list list__ul-bullet">' +
          '<li>Пункт</li>' +
          '<li>Пункт</li>' +
          '<li>Пункт и т.д.</li>' +
          '</ul>');
        /*var node = document.createElement('div');
        node.classList.add("foo");
        context.invoke('insertNode', node);*/
      }
    });
    return button.render();   // return button as jquery object
  };

  var ImgButton = function (context) {
    var ui = $.summernote.ui;
    // create button
    var button = ui.button({
      contents: '<i class="far fa-image"/> Image',
      tooltip: 'image',
      click: function () {
        //ckfinder POPUP
        CKFinder.popup( {
          chooseFiles: true,
          width: 800,
          height: 600,
          onInit: function( finder ) {
            finder.on( 'files:choose', function( evt ) {
              var file = evt.data.files.first();
              var url = file.getUrl();
              finder.on( 'file:choose:resizedImage', function( evt ) {
                url = evt.data.resizedUrl;
               } );
              // invoke insertText method with 'hello' on editor module.
              context.invoke('insertImage', url, function ($image) {
                //$image.css('width', $image.width() / 3);
                $image.attr({'data-filename':'retriever','class':'data-img'});
              });
            } );
          }
        } );
      }
    });

    return button.render();   // return button as jquery object
  };
  //Initialize Summernote #content #description
  var summernote = $('#content').summernote({
    lang: 'ru-RU',
    prettifyHtml: true,
    styleTags: [
      'p',
      { title: 'Заголовок H2', tag: 'h2', className: 'title-h2', value: 'h2' },
      { title: 'Blockquote', tag: 'blockquote', className: 'block', value: 'blockquote' },
    ],
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['style', 'bold', 'italic', 'underline', 'clear']],
      ['font', ['strikethrough', 'superscript', 'subscript']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['insert', ['link', 'video', 'table']],
      ['misc', ['fullscreen', 'undo', 'redo', 'codeview']],
      ['myBtn', ['image', 'templateUl']]
    ],
    buttons: {
      templateUl: UlButton,
      image: ImgButton
    },
    popover: {
      link: [
        ['link', ['linkDialogShow', 'unlink']]
      ],
    }
  });


});
