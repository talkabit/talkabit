var Holder=Holder||{};!function(e,t){function n(e,t){var n="complete",o="readystatechange",i=!1,a=i,r=!0,s=e.document,d=s.documentElement,l=s.addEventListener?"addEventListener":"attachEvent",u=s.addEventListener?"removeEventListener":"detachEvent",g=s.addEventListener?"":"on",c=function(r){(r.type!=o||s.readyState==n)&&(("load"==r.type?e:s)[u](g+r.type,c,i),!a&&(a=!0)&&t.call(e,null))},h=function(){try{d.doScroll("left")}catch(e){return setTimeout(h,50),void 0}c("poll")};if(s.readyState==n)t.call(e,"lazy");else{if(s.createEventObject&&d.doScroll){try{r=!e.frameElement}catch(f){}r&&h()}s[l](g+"DOMContentLoaded",c,i),s[l](g+o,c,i),e[l](g+"load",c,i)}}function o(e){e=e.match(/^(\W)?(.*)/);var t=document["getElement"+(e[1]?"#"==e[1]?"ById":"sByClassName":"sByTagName")](e[2]),n=[];return null!=t&&(n=t.length?t:0==t.length?t:[t]),n}function a(e,t){var n={};for(var o in e)n[o]=e[o];for(var i in t)n[i]=t[i];return n}function r(e,t,n){var o=[t,e].sort(),i=Math.round(o[1]/16);Math.round(o[0]/16);var a=Math.max(n.size,i);return{height:a}}function s(e,t,n,o){var i=r(t.width,t.height,n),a=i.height,s=t.width*o,d=t.height*o,l=n.font?n.font:"sans-serif";f.width=s,f.height=d,e.textAlign="center",e.textBaseline="middle",e.fillStyle=n.background,e.fillRect(0,0,s,d),e.fillStyle=n.foreground,e.font="bold "+a+"px "+l;var u=n.text?n.text:t.width+"x"+t.height;return e.measureText(u).width/s>1&&(a=n.size/(e.measureText(u).width/s)),e.font="bold "+a*o+"px "+l,e.fillText(u,s/2,d/2,s),f.toDataURL("image/png")}function d(e,t,n,o){var i=n.dimensions,r=n.theme,d=n.text?decodeURIComponent(n.text):n.text,l=i.width+"x"+i.height;r=d?a(r,{text:d}):r,r=n.font?a(r,{font:n.font}):r;var u=1;window.devicePixelRatio&&window.devicePixelRatio>1&&(u=window.devicePixelRatio),"image"==e?(t.setAttribute("data-src",o),t.setAttribute("alt",d?d:r.text?r.text+" ["+l+"]":l),(h||!n.auto)&&(t.style.width=i.width+"px",t.style.height=i.height+"px"),h?t.style.backgroundColor=r.background:t.setAttribute("src",s(m,i,r,u))):h||(t.style.backgroundImage="url("+s(m,i,r,u)+")",t.style.backgroundSize=i.width+"px "+i.height+"px")}function l(e,t){var n=t.dimensions,o=t.theme,i=t.text,r=n.width+"x"+n.height;o=i?a(o,{text:i}):o;var s=document.createElement("div");s.style.backgroundColor=o.background,s.style.color=o.foreground,s.className=e.className+" holderjs-fluid",s.style.width=t.dimensions.width+(t.dimensions.width.indexOf("%")>0?"":"px"),s.style.height=t.dimensions.height+(t.dimensions.height.indexOf("%")>0?"":"px"),s.id=e.id,e.style.width=0,e.style.height=0,o.text?s.appendChild(document.createTextNode(o.text)):(s.appendChild(document.createTextNode(r)),p.push(s),setTimeout(u,0)),e.parentNode.insertBefore(s,e.nextSibling),window.jQuery&&jQuery(function(t){t(e).on("load",function(){e.style.width=s.style.width,e.style.height=s.style.height,t(e).show(),t(s).remove()})})}function u(){for(i in p)if(p.hasOwnProperty(i)){var e=p[i],t=e.firstChild;e.style.lineHeight=e.offsetHeight+"px",t.data=e.offsetWidth+"x"+e.offsetHeight}}function g(t,n){var o={theme:y.themes.gray},i=!1;for(sl=t.length,j=0;sl>j;j++){var a=t[j];e.flags.dimensions.match(a)?(i=!0,o.dimensions=e.flags.dimensions.output(a)):e.flags.fluid.match(a)?(i=!0,o.dimensions=e.flags.fluid.output(a),o.fluid=!0):e.flags.colors.match(a)?o.theme=e.flags.colors.output(a):n.themes[a]?o.theme=n.themes[a]:e.flags.text.match(a)?o.text=e.flags.text.output(a):e.flags.font.match(a)?o.font=e.flags.font.output(a):e.flags.auto.match(a)&&(o.auto=!0)}return i?o:!1}var c=!1,h=!1,f=document.createElement("canvas");if(document.getElementsByClassName||(document.getElementsByClassName=function(e){var t,n,o,i=document,a=[];if(i.querySelectorAll)return i.querySelectorAll("."+e);if(i.evaluate)for(n=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",t=i.evaluate(n,i,null,0,null);o=t.iterateNext();)a.push(o);else for(t=i.getElementsByTagName("*"),n=new RegExp("(^|\\s)"+e+"(\\s|$)"),o=0;o<t.length;o++)n.test(t[o].className)&&a.push(t[o]);return a}),window.getComputedStyle||(window.getComputedStyle=function(e){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return"float"==t&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this}),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(e){var t=this.__proto__||this.constructor.prototype;return e in this&&(!(e in t)||t[e]!==this[e])}),f.getContext)if(f.toDataURL("image/png").indexOf("data:image/png")<0)h=!0;else var m=f.getContext("2d");else h=!0;var p=[],y={domain:"holder-99f01da2.js",images:"img",bgnodes:".holderjs",themes:{gray:{background:"#eee",foreground:"#aaa",size:12},social:{background:"#3a5a97",foreground:"#fff",size:12},industrial:{background:"#434A52",foreground:"#C2F200",size:12}},stylesheet:".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"};e.flags={dimensions:{regex:/^(\d+)x(\d+)$/,output:function(e){var t=this.regex.exec(e);return{width:+t[1],height:+t[2]}}},fluid:{regex:/^([0-9%]+)x([0-9%]+)$/,output:function(e){var t=this.regex.exec(e);return{width:t[1],height:t[2]}}},colors:{regex:/#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,output:function(e){var t=this.regex.exec(e);return{size:y.themes.gray.size,foreground:"#"+t[2],background:"#"+t[1]}}},text:{regex:/text\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},font:{regex:/font\:(.*)/,output:function(e){return this.regex.exec(e)[1]}},auto:{regex:/^auto$/}};for(var x in e.flags)e.flags.hasOwnProperty(x)&&(e.flags[x].match=function(e){return e.match(this.regex)});e.add_theme=function(t,n){return null!=t&&null!=n&&(y.themes[t]=n),e},e.add_image=function(t,n){var i=o(n);if(i.length)for(var a=0,r=i.length;r>a;a++){var s=document.createElement("img");s.setAttribute("data-src",t),i[a].appendChild(s)}return e},e.run=function(t){var n=a(y,t),i=[];for(imageNodes=n.images instanceof window.NodeList?n.images:n.images instanceof window.Node?[n.images]:o(n.images),bgnodes=n.elements instanceof window.NodeList?n.bgnodes:n.bgnodes instanceof window.Node?[n.bgnodes]:o(n.bgnodes),c=!0,h=0,u=imageNodes.length;u>h;h++)i.push(imageNodes[h]);var r=document.getElementById("holderjs-style");r||(r=document.createElement("style"),r.setAttribute("id","holderjs-style"),r.type="text/css",document.getElementsByTagName("head")[0].appendChild(r)),r.styleSheet?r.styleSheet+=n.stylesheet:r.textContent+=n.stylesheet;for(var s=new RegExp(n.domain+'/(.*?)"?\\)'),u=bgnodes.length,h=0;u>h;h++){var f=window.getComputedStyle(bgnodes[h],null).getPropertyValue("background-image"),m=f.match(s);if(m){var p=g(m[1].split("/"),n);p&&d("background",bgnodes[h],p,f)}}for(var u=i.length,h=0;u>h;h++){var f=i[h].getAttribute("src")||i[h].getAttribute("data-src");if(null!=f&&f.indexOf(n.domain)>=0){var p=g(f.substr(f.lastIndexOf(n.domain)+n.domain.length+1).split("/"),n);p&&(p.fluid?l(i[h],p,f):d("image",i[h],p,f))}}return e},n(t,function(){window.addEventListener?(window.addEventListener("resize",u,!1),window.addEventListener("orientationchange",u,!1)):window.attachEvent("onresize",u),c||e.run()}),"function"==typeof define&&define.amd&&define("Holder",[],function(){return e})}(Holder,window);