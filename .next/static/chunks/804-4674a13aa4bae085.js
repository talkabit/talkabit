"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{5704:function(t,e,n){n.d(e,{fi:function(){return x},kZ:function(){return w}});var r=n(400),o=n(2163),i=n(2057),a=n(2556);var f=n(6333),u=n(4063),c=n(7252),s=n(611),p=n(138);function d(t,e,n){void 0===n&&(n=!1);var d=(0,a.Re)(e),l=(0,a.Re)(e)&&function(t){var e=t.getBoundingClientRect(),n=(0,p.NM)(e.width)/t.offsetWidth||1,r=(0,p.NM)(e.height)/t.offsetHeight||1;return 1!==n||1!==r}(e),v=(0,c.Z)(e),h=(0,r.Z)(t,l,n),m={scrollLeft:0,scrollTop:0},Z={x:0,y:0};return(d||!d&&!n)&&(("body"!==(0,f.Z)(e)||(0,s.Z)(v))&&(m=function(t){return t!==(0,i.Z)(t)&&(0,a.Re)(t)?{scrollLeft:(e=t).scrollLeft,scrollTop:e.scrollTop}:(0,o.Z)(t);var e}(e)),(0,a.Re)(e)?((Z=(0,r.Z)(e,!0)).x+=e.clientLeft,Z.y+=e.clientTop):v&&(Z.x=(0,u.Z)(v))),{x:h.left+m.scrollLeft-Z.x,y:h.top+m.scrollTop-Z.y,width:h.width,height:h.height}}var l=n(583),v=n(1492),h=n(8552),m=n(7701);function Z(t){var e=new Map,n=new Set,r=[];function o(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var r=e.get(t);r&&o(r)}})),r.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||o(t)})),r}function g(t){var e;return function(){return e||(e=new Promise((function(n){Promise.resolve().then((function(){e=void 0,n(t())}))}))),e}}var y={placement:"bottom",modifiers:[],strategy:"absolute"};function b(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"===typeof t.getBoundingClientRect)}))}function w(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,r=void 0===n?[]:n,o=e.defaultOptions,i=void 0===o?y:o;return function(t,e,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},y,i),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},f=[],u=!1,c={state:o,setOptions:function(n){var u="function"===typeof n?n(o.options):n;s(),o.options=Object.assign({},i,o.options,u),o.scrollParents={reference:(0,a.kK)(t)?(0,v.Z)(t):t.contextElement?(0,v.Z)(t.contextElement):[],popper:(0,v.Z)(e)};var p=function(t){var e=Z(t);return m.xs.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}(function(t){var e=t.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{});return Object.keys(e).map((function(t){return e[t]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=p.filter((function(t){return t.enabled})),o.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,r=void 0===n?{}:n,i=t.effect;if("function"===typeof i){var a=i({state:o,name:e,instance:c,options:r}),u=function(){};f.push(a||u)}})),c.update()},forceUpdate:function(){if(!u){var t=o.elements,e=t.reference,n=t.popper;if(b(e,n)){o.rects={reference:d(e,(0,h.Z)(n),"fixed"===o.options.strategy),popper:(0,l.Z)(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(t){return o.modifiersData[t.name]=Object.assign({},t.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,f=i.options,s=void 0===f?{}:f,p=i.name;"function"===typeof a&&(o=a({state:o,options:s,name:p,instance:c})||o)}else o.reset=!1,r=-1}}},update:g((function(){return new Promise((function(t){c.forceUpdate(),t(o)}))})),destroy:function(){s(),u=!0}};if(!b(t,e))return c;function s(){f.forEach((function(t){return t()})),f=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var x=w()},4985:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2556);function o(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&(0,r.Zq)(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}},400:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(2556),o=n(138),i=n(2057),a=n(7977);function f(t,e,n){void 0===e&&(e=!1),void 0===n&&(n=!1);var f=t.getBoundingClientRect(),u=1,c=1;e&&(0,r.Re)(t)&&(u=t.offsetWidth>0&&(0,o.NM)(f.width)/t.offsetWidth||1,c=t.offsetHeight>0&&(0,o.NM)(f.height)/t.offsetHeight||1);var s=((0,r.kK)(t)?(0,i.Z)(t):window).visualViewport,p=!(0,a.Z)()&&n,d=(f.left+(p&&s?s.offsetLeft:0))/u,l=(f.top+(p&&s?s.offsetTop:0))/c,v=f.width/u,h=f.height/c;return{width:v,height:h,top:l,right:d+v,bottom:l+h,left:d,x:d,y:l}}},3062:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2057);function o(t){return(0,r.Z)(t).getComputedStyle(t)}},7252:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2556);function o(t){return(((0,r.kK)(t)?t.ownerDocument:t.document)||window.document).documentElement}},583:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(400);function o(t){var e=(0,r.Z)(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}},6333:function(t,e,n){function r(t){return t?(t.nodeName||"").toLowerCase():null}n.d(e,{Z:function(){return r}})},8552:function(t,e,n){n.d(e,{Z:function(){return p}});var r=n(2057),o=n(6333),i=n(3062),a=n(2556);function f(t){return["table","td","th"].indexOf((0,o.Z)(t))>=0}var u=n(5923),c=n(5918);function s(t){return(0,a.Re)(t)&&"fixed"!==(0,i.Z)(t).position?t.offsetParent:null}function p(t){for(var e=(0,r.Z)(t),n=s(t);n&&f(n)&&"static"===(0,i.Z)(n).position;)n=s(n);return n&&("html"===(0,o.Z)(n)||"body"===(0,o.Z)(n)&&"static"===(0,i.Z)(n).position)?e:n||function(t){var e=/firefox/i.test((0,c.Z)());if(/Trident/i.test((0,c.Z)())&&(0,a.Re)(t)&&"fixed"===(0,i.Z)(t).position)return null;var n=(0,u.Z)(t);for((0,a.Zq)(n)&&(n=n.host);(0,a.Re)(n)&&["html","body"].indexOf((0,o.Z)(n))<0;){var r=(0,i.Z)(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||e&&"filter"===r.willChange||e&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(t)||e}},5923:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(6333),o=n(7252),i=n(2556);function a(t){return"html"===(0,r.Z)(t)?t:t.assignedSlot||t.parentNode||((0,i.Zq)(t)?t.host:null)||(0,o.Z)(t)}},2057:function(t,e,n){function r(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}n.d(e,{Z:function(){return r}})},2163:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(2057);function o(t){var e=(0,r.Z)(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}},4063:function(t,e,n){n.d(e,{Z:function(){return a}});var r=n(400),o=n(7252),i=n(2163);function a(t){return(0,r.Z)((0,o.Z)(t)).left+(0,i.Z)(t).scrollLeft}},2556:function(t,e,n){n.d(e,{Re:function(){return i},Zq:function(){return a},kK:function(){return o}});var r=n(2057);function o(t){return t instanceof(0,r.Z)(t).Element||t instanceof Element}function i(t){return t instanceof(0,r.Z)(t).HTMLElement||t instanceof HTMLElement}function a(t){return"undefined"!==typeof ShadowRoot&&(t instanceof(0,r.Z)(t).ShadowRoot||t instanceof ShadowRoot)}},7977:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(5918);function o(){return!/^((?!chrome|android).)*safari/i.test((0,r.Z)())}},611:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(3062);function o(t){var e=(0,r.Z)(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}},1492:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(5923),o=n(611),i=n(6333),a=n(2556);function f(t){return["html","body","#document"].indexOf((0,i.Z)(t))>=0?t.ownerDocument.body:(0,a.Re)(t)&&(0,o.Z)(t)?t:f((0,r.Z)(t))}var u=n(2057);function c(t,e){var n;void 0===e&&(e=[]);var i=f(t),a=i===(null==(n=t.ownerDocument)?void 0:n.body),s=(0,u.Z)(i),p=a?[s].concat(s.visualViewport||[],(0,o.Z)(i)?i:[]):i,d=e.concat(p);return a?d:d.concat(c((0,r.Z)(p)))}},7701:function(t,e,n){n.d(e,{BL:function(){return c},Ct:function(){return m},DH:function(){return w},F2:function(){return i},I:function(){return o},MS:function(){return j},N7:function(){return Z},Pj:function(){return d},XM:function(){return b},YP:function(){return v},bw:function(){return h},cW:function(){return k},d7:function(){return f},ij:function(){return g},iv:function(){return O},k5:function(){return l},mv:function(){return u},r5:function(){return y},t$:function(){return a},ut:function(){return s},wX:function(){return x},we:function(){return r},xs:function(){return E},zV:function(){return p}});var r="top",o="bottom",i="right",a="left",f="auto",u=[r,o,i,a],c="start",s="end",p="clippingParents",d="viewport",l="popper",v="reference",h=u.reduce((function(t,e){return t.concat([e+"-"+c,e+"-"+s])}),[]),m=[].concat(u,[f]).reduce((function(t,e){return t.concat([e,e+"-"+c,e+"-"+s])}),[]),Z="beforeRead",g="read",y="afterRead",b="beforeMain",w="main",x="afterMain",O="beforeWrite",k="write",j="afterWrite",E=[Z,g,y,b,w,x,O,k,j]},7824:function(t,e,n){var r=n(6333),o=n(2556);e.Z={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},i=e.attributes[t]||{},a=e.elements[t];(0,o.Re)(a)&&(0,r.Z)(a)&&(Object.assign(a.style,n),Object.keys(i).forEach((function(t){var e=i[t];!1===e?a.removeAttribute(t):a.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var i=e.elements[t],a=e.attributes[t]||{},f=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});(0,o.Re)(i)&&(0,r.Z)(i)&&(Object.assign(i.style,f),Object.keys(a).forEach((function(t){i.removeAttribute(t)})))}))}},requires:["computeStyles"]}},6896:function(t,e,n){var r=n(6206),o=n(583),i=n(4985),a=n(8552),f=n(1516),u=n(7516),c=n(3293),s=n(3706),p=n(7701);e.Z={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,i=t.name,d=t.options,l=n.elements.arrow,v=n.modifiersData.popperOffsets,h=(0,r.Z)(n.placement),m=(0,f.Z)(h),Z=[p.t$,p.F2].indexOf(h)>=0?"height":"width";if(l&&v){var g=function(t,e){return t="function"===typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t,(0,c.Z)("number"!==typeof t?t:(0,s.Z)(t,p.mv))}(d.padding,n),y=(0,o.Z)(l),b="y"===m?p.we:p.t$,w="y"===m?p.I:p.F2,x=n.rects.reference[Z]+n.rects.reference[m]-v[m]-n.rects.popper[Z],O=v[m]-n.rects.reference[m],k=(0,a.Z)(l),j=k?"y"===m?k.clientHeight||0:k.clientWidth||0:0,E=x/2-O/2,D=g[b],M=j-y[Z]-g[w],R=j/2-y[Z]/2+E,A=(0,u.u)(D,R,M),L=m;n.modifiersData[i]=((e={})[L]=A,e.centerOffset=A-R,e)}},effect:function(t){var e=t.state,n=t.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=e.elements.popper.querySelector(r)))&&(0,i.Z)(e.elements.popper,r)&&(e.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},6531:function(t,e,n){var r=n(7701),o=n(8552),i=n(2057),a=n(7252),f=n(3062),u=n(6206),c=n(4943),s=n(138),p={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(t){var e,n=t.popper,u=t.popperRect,c=t.placement,d=t.variation,l=t.offsets,v=t.position,h=t.gpuAcceleration,m=t.adaptive,Z=t.roundOffsets,g=t.isFixed,y=l.x,b=void 0===y?0:y,w=l.y,x=void 0===w?0:w,O="function"===typeof Z?Z({x:b,y:x}):{x:b,y:x};b=O.x,x=O.y;var k=l.hasOwnProperty("x"),j=l.hasOwnProperty("y"),E=r.t$,D=r.we,M=window;if(m){var R=(0,o.Z)(n),A="clientHeight",L="clientWidth";if(R===(0,i.Z)(n)&&(R=(0,a.Z)(n),"static"!==(0,f.Z)(R).position&&"absolute"===v&&(A="scrollHeight",L="scrollWidth")),c===r.we||(c===r.t$||c===r.F2)&&d===r.ut)D=r.I,x-=(g&&R===M&&M.visualViewport?M.visualViewport.height:R[A])-u.height,x*=h?1:-1;if(c===r.t$||(c===r.we||c===r.I)&&d===r.ut)E=r.F2,b-=(g&&R===M&&M.visualViewport?M.visualViewport.width:R[L])-u.width,b*=h?1:-1}var F,P=Object.assign({position:v},m&&p),V=!0===Z?function(t){var e=t.x,n=t.y,r=window.devicePixelRatio||1;return{x:(0,s.NM)(e*r)/r||0,y:(0,s.NM)(n*r)/r||0}}({x:b,y:x}):{x:b,y:x};return b=V.x,x=V.y,h?Object.assign({},P,((F={})[D]=j?"0":"",F[E]=k?"0":"",F.transform=(M.devicePixelRatio||1)<=1?"translate("+b+"px, "+x+"px)":"translate3d("+b+"px, "+x+"px, 0)",F)):Object.assign({},P,((e={})[D]=j?x+"px":"",e[E]=k?b+"px":"",e.transform="",e))}e.Z={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,f=n.roundOffsets,s=void 0===f||f,p={placement:(0,u.Z)(e.placement),variation:(0,c.Z)(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,d(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:s})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,d(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}}},2372:function(t,e,n){var r=n(2057),o={passive:!0};e.Z={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,i=t.options,a=i.scroll,f=void 0===a||a,u=i.resize,c=void 0===u||u,s=(0,r.Z)(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return f&&p.forEach((function(t){t.addEventListener("scroll",n.update,o)})),c&&s.addEventListener("resize",n.update,o),function(){f&&p.forEach((function(t){t.removeEventListener("scroll",n.update,o)})),c&&s.removeEventListener("resize",n.update,o)}},data:{}}},8855:function(t,e,n){n.d(e,{Z:function(){return p}});var r={left:"right",right:"left",bottom:"top",top:"bottom"};function o(t){return t.replace(/left|right|bottom|top/g,(function(t){return r[t]}))}var i=n(6206),a={start:"end",end:"start"};function f(t){return t.replace(/start|end/g,(function(t){return a[t]}))}var u=n(6486),c=n(4943),s=n(7701);var p={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var a=n.mainAxis,p=void 0===a||a,d=n.altAxis,l=void 0===d||d,v=n.fallbackPlacements,h=n.padding,m=n.boundary,Z=n.rootBoundary,g=n.altBoundary,y=n.flipVariations,b=void 0===y||y,w=n.allowedAutoPlacements,x=e.options.placement,O=(0,i.Z)(x),k=v||(O===x||!b?[o(x)]:function(t){if((0,i.Z)(t)===s.d7)return[];var e=o(t);return[f(t),e,f(e)]}(x)),j=[x].concat(k).reduce((function(t,n){return t.concat((0,i.Z)(n)===s.d7?function(t,e){void 0===e&&(e={});var n=e,r=n.placement,o=n.boundary,a=n.rootBoundary,f=n.padding,p=n.flipVariations,d=n.allowedAutoPlacements,l=void 0===d?s.Ct:d,v=(0,c.Z)(r),h=v?p?s.bw:s.bw.filter((function(t){return(0,c.Z)(t)===v})):s.mv,m=h.filter((function(t){return l.indexOf(t)>=0}));0===m.length&&(m=h);var Z=m.reduce((function(e,n){return e[n]=(0,u.Z)(t,{placement:n,boundary:o,rootBoundary:a,padding:f})[(0,i.Z)(n)],e}),{});return Object.keys(Z).sort((function(t,e){return Z[t]-Z[e]}))}(e,{placement:n,boundary:m,rootBoundary:Z,padding:h,flipVariations:b,allowedAutoPlacements:w}):n)}),[]),E=e.rects.reference,D=e.rects.popper,M=new Map,R=!0,A=j[0],L=0;L<j.length;L++){var F=j[L],P=(0,i.Z)(F),V=(0,c.Z)(F)===s.BL,B=[s.we,s.I].indexOf(P)>=0,W=B?"width":"height",H=(0,u.Z)(e,{placement:F,boundary:m,rootBoundary:Z,altBoundary:g,padding:h}),I=B?V?s.F2:s.t$:V?s.I:s.we;E[W]>D[W]&&(I=o(I));var N=o(I),q=[];if(p&&q.push(H[P]<=0),l&&q.push(H[I]<=0,H[N]<=0),q.every((function(t){return t}))){A=F,R=!1;break}M.set(F,q)}if(R)for(var C=function(t){var e=j.find((function(e){var n=M.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return A=e,"break"},T=b?3:1;T>0;T--){if("break"===C(T))break}e.placement!==A&&(e.modifiersData[r]._skip=!0,e.placement=A,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},9892:function(t,e,n){var r=n(7701),o=n(6486);function i(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function a(t){return[r.we,r.F2,r.I,r.t$].some((function(e){return t[e]>=0}))}e.Z={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,r=e.rects.reference,f=e.rects.popper,u=e.modifiersData.preventOverflow,c=(0,o.Z)(e,{elementContext:"reference"}),s=(0,o.Z)(e,{altBoundary:!0}),p=i(c,r),d=i(s,f,u),l=a(p),v=a(d);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":v})}}},2122:function(t,e,n){var r=n(6206),o=n(7701);e.Z={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,i=t.name,a=n.offset,f=void 0===a?[0,0]:a,u=o.Ct.reduce((function(t,n){return t[n]=function(t,e,n){var i=(0,r.Z)(t),a=[o.t$,o.we].indexOf(i)>=0?-1:1,f="function"===typeof n?n(Object.assign({},e,{placement:t})):n,u=f[0],c=f[1];return u=u||0,c=(c||0)*a,[o.t$,o.F2].indexOf(i)>=0?{x:c,y:u}:{x:u,y:c}}(n,e.rects,f),t}),{}),c=u[e.placement],s=c.x,p=c.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=p),e.modifiersData[i]=u}}},7421:function(t,e,n){var r=n(2581);e.Z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=(0,r.Z)({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}}},394:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(7701),o=n(6206),i=n(1516);var a=n(7516),f=n(583),u=n(8552),c=n(6486),s=n(4943),p=n(3607),d=n(138);var l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,l=t.name,v=n.mainAxis,h=void 0===v||v,m=n.altAxis,Z=void 0!==m&&m,g=n.boundary,y=n.rootBoundary,b=n.altBoundary,w=n.padding,x=n.tether,O=void 0===x||x,k=n.tetherOffset,j=void 0===k?0:k,E=(0,c.Z)(e,{boundary:g,rootBoundary:y,padding:w,altBoundary:b}),D=(0,o.Z)(e.placement),M=(0,s.Z)(e.placement),R=!M,A=(0,i.Z)(D),L="x"===A?"y":"x",F=e.modifiersData.popperOffsets,P=e.rects.reference,V=e.rects.popper,B="function"===typeof j?j(Object.assign({},e.rects,{placement:e.placement})):j,W="number"===typeof B?{mainAxis:B,altAxis:B}:Object.assign({mainAxis:0,altAxis:0},B),H=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,I={x:0,y:0};if(F){if(h){var N,q="y"===A?r.we:r.t$,C="y"===A?r.I:r.F2,T="y"===A?"height":"width",$=F[A],S=$+E[q],K=$-E[C],_=O?-V[T]/2:0,z=M===r.BL?P[T]:V[T],U=M===r.BL?-V[T]:-P[T],X=e.elements.arrow,Y=O&&X?(0,f.Z)(X):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:(0,p.Z)(),J=G[q],Q=G[C],tt=(0,a.u)(0,P[T],Y[T]),et=R?P[T]/2-_-tt-J-W.mainAxis:z-tt-J-W.mainAxis,nt=R?-P[T]/2+_+tt+Q+W.mainAxis:U+tt+Q+W.mainAxis,rt=e.elements.arrow&&(0,u.Z)(e.elements.arrow),ot=rt?"y"===A?rt.clientTop||0:rt.clientLeft||0:0,it=null!=(N=null==H?void 0:H[A])?N:0,at=$+et-it-ot,ft=$+nt-it,ut=(0,a.u)(O?(0,d.VV)(S,at):S,$,O?(0,d.Fp)(K,ft):K);F[A]=ut,I[A]=ut-$}if(Z){var ct,st="x"===A?r.we:r.t$,pt="x"===A?r.I:r.F2,dt=F[L],lt="y"===L?"height":"width",vt=dt+E[st],ht=dt-E[pt],mt=-1!==[r.we,r.t$].indexOf(D),Zt=null!=(ct=null==H?void 0:H[L])?ct:0,gt=mt?vt:dt-P[lt]-V[lt]-Zt+W.altAxis,yt=mt?dt+P[lt]+V[lt]-Zt-W.altAxis:ht,bt=O&&mt?(0,a.q)(gt,dt,yt):(0,a.u)(O?gt:vt,dt,O?yt:ht);F[L]=bt,I[L]=bt-dt}e.modifiersData[l]=I}},requiresIfExists:["offset"]}},804:function(t,e,n){n.d(e,{fi:function(){return v}});var r=n(5704),o=n(2372),i=n(7421),a=n(6531),f=n(7824),u=n(2122),c=n(8855),s=n(394),p=n(6896),d=n(9892),l=[o.Z,i.Z,a.Z,f.Z,u.Z,c.Z,s.Z,p.Z,d.Z],v=(0,r.kZ)({defaultModifiers:l})},2581:function(t,e,n){n.d(e,{Z:function(){return f}});var r=n(6206),o=n(4943),i=n(1516),a=n(7701);function f(t){var e,n=t.reference,f=t.element,u=t.placement,c=u?(0,r.Z)(u):null,s=u?(0,o.Z)(u):null,p=n.x+n.width/2-f.width/2,d=n.y+n.height/2-f.height/2;switch(c){case a.we:e={x:p,y:n.y-f.height};break;case a.I:e={x:p,y:n.y+n.height};break;case a.F2:e={x:n.x+n.width,y:d};break;case a.t$:e={x:n.x-f.width,y:d};break;default:e={x:n.x,y:n.y}}var l=c?(0,i.Z)(c):null;if(null!=l){var v="y"===l?"height":"width";switch(s){case a.BL:e[l]=e[l]-(n[v]/2-f[v]/2);break;case a.ut:e[l]=e[l]+(n[v]/2-f[v]/2)}}return e}},6486:function(t,e,n){n.d(e,{Z:function(){return k}});var r=n(7701),o=n(2057),i=n(7252),a=n(4063),f=n(7977);var u=n(3062),c=n(2163),s=n(138);var p=n(1492),d=n(8552),l=n(2556),v=n(400),h=n(5923),m=n(4985),Z=n(6333);function g(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function y(t,e,n){return e===r.Pj?g(function(t,e){var n=(0,o.Z)(t),r=(0,i.Z)(t),u=n.visualViewport,c=r.clientWidth,s=r.clientHeight,p=0,d=0;if(u){c=u.width,s=u.height;var l=(0,f.Z)();(l||!l&&"fixed"===e)&&(p=u.offsetLeft,d=u.offsetTop)}return{width:c,height:s,x:p+(0,a.Z)(t),y:d}}(t,n)):(0,l.kK)(e)?function(t,e){var n=(0,v.Z)(t,!1,"fixed"===e);return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}(e,n):g(function(t){var e,n=(0,i.Z)(t),r=(0,c.Z)(t),o=null==(e=t.ownerDocument)?void 0:e.body,f=(0,s.Fp)(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),p=(0,s.Fp)(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),d=-r.scrollLeft+(0,a.Z)(t),l=-r.scrollTop;return"rtl"===(0,u.Z)(o||n).direction&&(d+=(0,s.Fp)(n.clientWidth,o?o.clientWidth:0)-f),{width:f,height:p,x:d,y:l}}((0,i.Z)(t)))}function b(t,e,n,r){var o="clippingParents"===e?function(t){var e=(0,p.Z)((0,h.Z)(t)),n=["absolute","fixed"].indexOf((0,u.Z)(t).position)>=0&&(0,l.Re)(t)?(0,d.Z)(t):t;return(0,l.kK)(n)?e.filter((function(t){return(0,l.kK)(t)&&(0,m.Z)(t,n)&&"body"!==(0,Z.Z)(t)})):[]}(t):[].concat(e),i=[].concat(o,[n]),a=i[0],f=i.reduce((function(e,n){var o=y(t,n,r);return e.top=(0,s.Fp)(o.top,e.top),e.right=(0,s.VV)(o.right,e.right),e.bottom=(0,s.VV)(o.bottom,e.bottom),e.left=(0,s.Fp)(o.left,e.left),e}),y(t,a,r));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}var w=n(2581),x=n(3293),O=n(3706);function k(t,e){void 0===e&&(e={});var n=e,o=n.placement,a=void 0===o?t.placement:o,f=n.strategy,u=void 0===f?t.strategy:f,c=n.boundary,s=void 0===c?r.zV:c,p=n.rootBoundary,d=void 0===p?r.Pj:p,h=n.elementContext,m=void 0===h?r.k5:h,Z=n.altBoundary,y=void 0!==Z&&Z,k=n.padding,j=void 0===k?0:k,E=(0,x.Z)("number"!==typeof j?j:(0,O.Z)(j,r.mv)),D=m===r.k5?r.YP:r.k5,M=t.rects.popper,R=t.elements[y?D:m],A=b((0,l.kK)(R)?R:R.contextElement||(0,i.Z)(t.elements.popper),s,d,u),L=(0,v.Z)(t.elements.reference),F=(0,w.Z)({reference:L,element:M,strategy:"absolute",placement:a}),P=g(Object.assign({},M,F)),V=m===r.k5?P:L,B={top:A.top-V.top+E.top,bottom:V.bottom-A.bottom+E.bottom,left:A.left-V.left+E.left,right:V.right-A.right+E.right},W=t.modifiersData.offset;if(m===r.k5&&W){var H=W[a];Object.keys(B).forEach((function(t){var e=[r.F2,r.I].indexOf(t)>=0?1:-1,n=[r.we,r.I].indexOf(t)>=0?"y":"x";B[t]+=H[n]*e}))}return B}},3706:function(t,e,n){function r(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}n.d(e,{Z:function(){return r}})},6206:function(t,e,n){function r(t){return t.split("-")[0]}n.d(e,{Z:function(){return r}})},3607:function(t,e,n){function r(){return{top:0,right:0,bottom:0,left:0}}n.d(e,{Z:function(){return r}})},1516:function(t,e,n){function r(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}n.d(e,{Z:function(){return r}})},4943:function(t,e,n){function r(t){return t.split("-")[1]}n.d(e,{Z:function(){return r}})},138:function(t,e,n){n.d(e,{Fp:function(){return r},NM:function(){return i},VV:function(){return o}});var r=Math.max,o=Math.min,i=Math.round},3293:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(3607);function o(t){return Object.assign({},(0,r.Z)(),t)}},5918:function(t,e,n){function r(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}n.d(e,{Z:function(){return r}})},7516:function(t,e,n){n.d(e,{q:function(){return i},u:function(){return o}});var r=n(138);function o(t,e,n){return(0,r.Fp)(t,(0,r.VV)(e,n))}function i(t,e,n){var r=o(t,e,n);return r>n?n:r}}}]);