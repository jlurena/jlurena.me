(()=>{"use strict";var e,t={52:(e,t,n)=>{var a=n(294),l=n(745),r=n(417);const c=function(e){var t=e.onClick,n=e.onBlur;return a.createElement("div",{className:"co2wh"},a.createElement("button",{type:"button",className:"_gNVv","aria-label":"Menu",onClick:t,onBlur:n},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null)))};var s=n(982);const i=n.p+"public/assets/866bc0ea.jpeg",m=function(e){var t=e.words;return a.createElement(a.Fragment,null,t.map((function(e){return a.createElement("span",{className:"nKgur",key:e},e)})))},o=function(){return a.createElement("div",{className:"mYgHS"},a.createElement("img",{src:i,className:"CuWaD",alt:"Picture of Jean Luis Urena",width:"200",height:"200"}),a.createElement("div",{className:"".concat("Ua4Xc")},a.createElement("h1",null,"Hello, my name is"),a.createElement("div",{className:"Oeqdb"},"Jean Luis Ureña")),a.createElement("div",{className:"LhwFz"},"I am a",a.createElement("div",null,a.createElement(m,{words:["Leader","Software Engineer","Student","Car Enthusiast","Hiker","Coffee Fanatic"]}))),a.createElement("div",{className:"pL2tZ"},a.createElement("a",{className:"reverse",href:"mailto:eljean@live.com?subject=&body="},"moc.evil@",a.createElement("span",null),"naejle"),a.createElement(s.G,{icon:r.XCy})))},u={"tab-wrapper":"yuMlO",tabWrapper:"yuMlO",selected:"N15pQ","button-container":"TbHYq",buttonContainer:"TbHYq",tab:"VRymf",horizontal:"RZQyJ"},E=function(e){var t=e.ariaLabel,n=e.direction,l=e.icon,r=e.labelHelper,c=e.onClick,i=e.permanentSelect,m=void 0!==i&&i;return a.createElement("div",{className:"".concat(u.tabWrapper," ").concat(u[n]," ").concat(m&&u.selected)},a.createElement("div",{className:u.buttonContainer},a.createElement("button",{type:"button","aria-label":t,className:u.tab,onClick:c},a.createElement(s.G,{icon:l,size:"lg"})),a.createElement("span",{className:u.helperLabel},r)))},p=function(e){var t=e.isMobileNavOpen,n=e.selectedTab,l=e.handleOnTabClick,r=e.tabs,c=Object.keys(r).map((function(e){return a.createElement(E,{ariaLabel:e,icon:r[e].icon,onClick:function(){return l(e)},key:e,labelHelper:e,permanentSelect:e===n})}));return a.createElement(a.Fragment,null,a.createElement("div",{className:"rp1nJ"},a.createElement("div",{className:"MQqN_"},c)),a.createElement("div",{className:"".concat("JH2pn"," ").concat(t&&"_2auL")},c))};var d=n(274),v=n.n(d);const f={container:"WhMd7",icon:"hOfC9",header:"nR8Z4",level1:"NLjZn",level2:"ZzlAe",strong:"peJIl"},h=function(e){var t=e.headerLevel,n=e.icon,l=e.headerText,r=e.headerStrongText,c=e.fontSize;return a.createElement("div",{className:f.container,style:{fontSize:c}},n&&a.createElement(s.G,{className:f.icon,icon:n,size:"lg"}),a.createElement("h1",{className:"".concat(f.header," ").concat(f["level".concat(t)])},l,r&&a.createElement("span",{className:f.strong}," ".concat(r))))},b="vQM_V",y=n.p+"public/assets/9e706aa8.jpeg",N=n.p+"public/vendor/linkedin-badge.min-eef09013.js",g=function(e){return a.createElement("div",{className:"kGcGv"},a.createElement("a",e,e.children))};function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}const k=function(e){var t=e.children,n=e.className;return a.createElement("button",w({type:"button"},e,{className:"".concat(n," ").concat("RxVw9")}),t)};var O=n(24),j=n(272);const x="bEI9L",S="DNo4s",C="z1clz",L="qJVFh",T="E0VWG",I="SkQL9",A="aDwx0",P="k85Ud",z="VO0ln",M="RVy8k",R="yPp_P",_="RNfIl",H="RkC5A",G="UvRiB",B="XX_eB",F="IP2wZ",U="zmUmi",V="n3uLw",J="HAh1u",$="m9CmO",D="V4rbn",Q="tRk5C",W="sdIKy",X="y4Glh",Z="maO_s",K="P8iis",Y=n.p+"public/configs/resume-dfb875f0.yml";function q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function ee(e){var t=e.icon,n=e.url,l=e.linkText;return a.createElement("div",{className:S},a.createElement(s.G,{icon:t}),a.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},l))}const te=function(e){var t,n,l=e.showPrintButton,c=void 0!==l&&l,i=(t=(0,a.useState)(null),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,s=[],i=!0,m=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=r.call(n)).done)&&(s.push(a.value),s.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw l}}return s}}(t,n)||function(e,t){if(e){if("string"==typeof e)return q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=i[0],o=i[1];(0,a.useEffect)((function(){"true"===new URLSearchParams(window.location.search).get("resumeOnly")&&document.body.setAttribute("data-resume-only","true")}),[]),(0,a.useEffect)((function(){fetch(Y).then((function(e){return e.text().then((function(e){return o(e)}))}))}),[]);var u=(0,a.useMemo)((function(){return j.ZP.load(m)})),E="".concat(window.location.origin,"/?resumeOnly=true");return u?a.createElement("div",{className:x},a.createElement("div",{className:C},a.createElement("div",{className:A},a.createElement("div",{className:P},a.createElement("div",{className:z},a.createElement("p",{className:M},"Jean Luis Ureña"),a.createElement("div",{className:R},a.createElement("span",null,a.createElement("span",null,"N"),a.createElement("span",null,"Y"),a.createElement("span",null,"C")),a.createElement("span",{className:_},"·"),a.createElement("span",null,a.createElement("span",null,"e"),a.createElement("span",null,"l"),a.createElement("span",null,"j"),a.createElement("span",null,"e"),a.createElement("span",null,"a"),a.createElement("span",null,"n"),a.createElement("span",null,"@"),a.createElement("span",null,"l"),a.createElement("span",null,"i"),a.createElement("span",null,"v"),a.createElement("span",null,"e"),a.createElement("span",null,"."),a.createElement("span",null,"c"),a.createElement("span",null,"o"),a.createElement("span",null,"m")))))),a.createElement("div",{className:W})),a.createElement("div",{className:L},a.createElement("div",{className:A},a.createElement("div",{className:P},a.createElement("div",{className:I},a.createElement("span",null,"P"),a.createElement("span",null,"R"),a.createElement("span",null,"O"),a.createElement("span",null,"F"),a.createElement("span",null,"I"),a.createElement("span",null,"L"),a.createElement("span",null,"E")),a.createElement("div",{className:H},a.createElement("div",{className:G},a.createElement("div",{className:B},a.createElement("p",{className:V},u.profile_summary))))),a.createElement("div",{className:P},a.createElement("div",{className:I},a.createElement("span",null,"E"),a.createElement("span",null,"D"),a.createElement("span",null,"U"),a.createElement("span",null,"C"),a.createElement("span",null,"A"),a.createElement("span",null,"T"),a.createElement("span",null,"I"),a.createElement("span",null,"O"),a.createElement("span",null,"N")),a.createElement("div",{className:H},a.createElement("div",{className:G},a.createElement("div",{className:J},a.createElement("div",{className:D},a.createElement("span",null,"Rochester Institute of Technology")),a.createElement("div",{className:$},a.createElement("div",{className:Q},a.createElement("span",null,"B.S in Computer Science"),a.createElement("span",null,"Class of 2018"))))))),a.createElement("div",{className:P},a.createElement("div",{className:I},a.createElement("span",null,"E"),a.createElement("span",null,"X"),a.createElement("span",null,"P"),a.createElement("span",null,"E"),a.createElement("span",null,"R"),a.createElement("span",null,"I"),a.createElement("span",null,"E"),a.createElement("span",null,"N"),a.createElement("span",null,"C"),a.createElement("span",null,"E")),a.createElement("div",{className:H},u.experiences.map((function(e){return a.createElement("div",{className:G,key:e.experience_name},a.createElement("div",{className:J},a.createElement("div",{className:D},a.createElement("span",null,e.experience_name)),a.createElement("div",{className:$},e.experience_titles.map((function(e){return a.createElement("div",{className:Q,key:e.title},a.createElement("span",null,e.title),a.createElement("span",null,"".concat(e.start," - ").concat(e.end||"Present")))})))),a.createElement("div",{className:B},a.createElement("span",{className:F},a.createElement("span",null,"O"),a.createElement("span",null,"v"),a.createElement("span",null,"e"),a.createElement("span",null,"r"),a.createElement("span",null,"v"),a.createElement("span",null,"i"),a.createElement("span",null,"e"),a.createElement("span",null,"w")),a.createElement("p",{className:V},e.summary),e.accomplishments&&a.createElement("span",{className:F},a.createElement("span",null,"M"),a.createElement("span",null,"a"),a.createElement("span",null,"j"),a.createElement("span",null,"o"),a.createElement("span",null,"r"),a.createElement("span",null," "),a.createElement("span",null,"A"),a.createElement("span",null,"c"),a.createElement("span",null,"c"),a.createElement("span",null,"o"),a.createElement("span",null,"m"),a.createElement("span",null,"p"),a.createElement("span",null,"l"),a.createElement("span",null,"i"),a.createElement("span",null,"s"),a.createElement("span",null,"h"),a.createElement("span",null,"m"),a.createElement("span",null,"e"),a.createElement("span",null,"n"),a.createElement("span",null,"t"),a.createElement("span",null,"s")),e.accomplishments&&a.createElement("ul",{className:U},e.accomplishments.map((function(e){return a.createElement("li",{key:e.substring(0,32)},e)})))))}))))),a.createElement("div",{className:W},a.createElement("div",{className:P},a.createElement("div",{className:I},a.createElement("span",null,"L"),a.createElement("span",null,"I"),a.createElement("span",null,"N"),a.createElement("span",null,"K"),a.createElement("span",null,"S")),a.createElement("div",{className:X},a.createElement(ee,{icon:r.g4A,url:"https://jlurena.me",linkText:"jlurena.me"}),a.createElement(ee,{icon:O.zhw,url:"https://github.com/jlurena",linkText:"github.com/jlurena"}),a.createElement(ee,{icon:O.$tD,url:"https://medium.com/@jlurena123",linkText:"medium.com/@jlurena123"}))),a.createElement("div",{className:P},a.createElement("div",{className:I},a.createElement("span",null,"S"),a.createElement("span",null,"K"),a.createElement("span",null,"I"),a.createElement("span",null,"L"),a.createElement("span",null,"L"),a.createElement("span",null,"S")),a.createElement("div",{className:Z},a.createElement("ul",{className:K},u.skills.map((function(e){return a.createElement("li",{key:e.name},a.createElement("span",null,e.name),e.examples&&a.createElement("ul",null,e.examples.map((function(e){return a.createElement("li",{key:e},e)}))))}))))))),a.createElement("div",{className:T},!c&&a.createElement(g,{"aria-label":"Open in new tab",href:E,target:"_blank"},a.createElement(s.G,{icon:r.t3U})),c&&a.createElement(k,{onClick:function(){return window.print()}},"Print"))):null};var ne=[{original:y,originalClass:"ClXRQ",originalAlt:"Jean Hiking next a mountain that with craters forming a smiling face"}],ae=[{icon:r.yn$,text:"Cars"},{icon:r.imn,text:"Lounges & Bars"},{icon:r.dT$,text:"Code"},{icon:r.SvR,text:"Cafes & Brunch"},{icon:r.tc$,text:"Tech"},{icon:r.l9D,text:"Video Games"},{icon:r.e6E,text:"Hiking"},{icon:r.wKO,text:"Travel"},{icon:r.fkH,text:"Eating Out"}];const le=function(e){var t,n,l,c=e.changeTabFunc,i=(0,a.useRef)(null);return(0,a.useEffect)((function(){var e=new MutationObserver((function(e){e.forEach((function(e){e.addedNodes.forEach((function(e){if("IFRAME"===e.tagName){var t=e.contentWindow.document.head,n=document.createElement("style");n.setAttribute("type","text/css"),n.innerHTML="html{overflow-x:hidden!important;}body>*{width:100%!important;}",t.appendChild(n)}}))}))}));return i&&e.observe(i.current,{childList:!0,subtree:!0}),function(){return e.disconnect()}}),[]),t=function(){return document.body},n="script",l={src:N,type:"text/javascript",async:!0,defer:!0},(0,a.useEffect)((function(){var e=document.createElement(n);Object.keys(l).forEach((function(t){e[t]=l[t]}));var a=t();return a.appendChild(e),function(){a.removeChild(e)}}),[]),a.createElement("div",{className:"_MSOe"},a.createElement(h,{headerLevel:"1",icon:r.ILF,headerText:"About",headerStrongText:"Me",fontSize:"1.5rem"}),a.createElement("div",{className:"Vbo6b"},a.createElement(h,{headerLevel:"2",headerText:"Hey! Nice to meet you, I'm Jean Luis, but you can call me",headerStrongText:"Jean",fontSize:"18px"}),a.createElement("div",{className:"xdQjG"},a.createElement("div",null,a.createElement("div",{className:b},a.createElement("p",null,a.createElement("b",null,"Software Engineer"),","," ",a.createElement("b",null,"Leader"),","," ",a.createElement("b",null,"Student"),","," ",a.createElement("b",null,"Teacher")," ","are some adjectives that can be used to describe me. At the end of the day however, I am a simple tech nerd  ",a.createElement(s.G,{icon:r.dzc,size:"1x"}),"  that enjoys programming, learning new technologies, experimenting with tech and teaching others all I know!")),a.createElement("div",{className:b},a.createElement(h,{headerLevel:"2",headerText:"Hobbies & Interests",fontSize:"18px"}),a.createElement("p",null,"Of course, I have many other"," ",a.createElement("b",null,"hobbies")," ","and"," ",a.createElement("b",null,"interests"),". Most notably though I'm really into"),a.createElement("div",{className:"iXvGc"},ae.map((function(e){return a.createElement("div",{className:"PuYS3",key:e.text},a.createElement(s.G,{icon:e.icon,size:"lg"}),e.text)}))))),a.createElement("div",null,a.createElement("div",null,a.createElement(v(),{items:ne,autoPlay:!0,showPlayButton:!1,showFullscreenButton:!1,showBullets:!0})))),a.createElement("div",{className:b},a.createElement(h,{headerLevel:"2",headerText:"Interested in my professional experience?",fontSize:"18px"}),a.createElement("div",{className:"".concat("PD_jF"," ").concat("GcHQP")},a.createElement("div",null,a.createElement("div",{ref:i,className:"badge-base LI-profile-badge","data-locale":"en_US","data-size":"medium","data-theme":"dark","data-type":"HORIZONTAL","data-vanity":"jlurena","data-version":"v1"})),a.createElement("div",null,a.createElement(k,{onClick:function(){c("Resume")}},"View Resume"))))))},re=function(){return a.createElement("div",{className:"yimjC"},a.createElement("footer",{className:"waKtS"},a.createElement(E,{icon:O.zhw,ariaLabel:"Github Profile",labelHelper:"Github",direction:"horizontal",onClick:function(){return window.open("https://github.com/jlurena","_blank")}}),a.createElement(E,{icon:O.D9H,ariaLabel:"LinkedIn Profile",labelHelper:"LinkedIn",direction:"horizontal",onClick:function(){return window.open("https://linkedin.com/in/jlurena","_blank")}}),a.createElement(E,{icon:O.$tD,ariaLabel:"Medium Blog Profile",labelHelper:"Medium",direction:"horizontal",onClick:function(){return window.open("https://medium.com/@jlurena123","_blank")}})))};function ce(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,c,s=[],i=!0,m=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(a=r.call(n)).done)&&(s.push(a.value),s.length!==t);i=!0);}catch(e){m=!0,l=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(m)throw l}}return s}}(e,t)||function(e,t){if(e){if("string"==typeof e)return se(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?se(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function se(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ie="content",me="function";const oe=function(){var e=ce((0,a.useState)(!1),2),t=e[0],n=e[1];(0,a.useEffect)((function(){var e=new URL(window.location.href),t=new URLSearchParams(e.search);n(!!t.get("resumeOnly"))}),[t]);var l=(0,a.useMemo)((function(){return{Home:{icon:r.J9Y,tab:o,type:ie},"About Me":{icon:r.ILF,tab:le,type:ie},Resume:{icon:r.cwv,tab:te,type:ie},Blog:{icon:r.Xgz,tab:function(){return window.open("https://medium.com/@jlurena123","_blank")},type:me}}})),s=ce((0,a.useState)("Home"),2),i=s[0],m=s[1],u=ce((0,a.useState)(!1),2),E=u[0],d=u[1],v=l[i].tab,f=function(e){l[e].type===ie&&m(e),l[e].type===me&&l[e].tab(),E&&d(!E)};return t?a.createElement(te,{showPrintButton:!0}):a.createElement(a.Fragment,null,a.createElement(c,{onClick:function(){return d(!E)},onBlur:function(){return d(!1)}}),a.createElement(p,{isMobileNavOpen:E,handleOnTabClick:f,selectedTab:i,tabs:l}),a.createElement("div",{className:"N2NGO"},a.createElement("div",{className:"RaeVT"},a.createElement("section",{className:"d5CKY"},a.createElement(v,{changeTabFunc:f})))),a.createElement(re,null))};(0,l.s)(document.getElementById("root")).render(a.createElement(a.StrictMode,null,a.createElement(oe,null))),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("public/assets/service-worker.js").then((function(e){})).catch((function(e){}))}))}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=(t,n,l,r)=>{if(!n){var c=1/0;for(o=0;o<e.length;o++){for(var[n,l,r]=e[o],s=!0,i=0;i<n.length;i++)(!1&r||c>=r)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,r<c&&(c=r));if(s){e.splice(o--,1);var m=l();void 0!==m&&(t=m)}}return t}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[n,l,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var l=n.length-1;l>-1&&!e;)e=n[l--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../../"})(),(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,[c,s,i]=n,m=0;if(c.some((t=>0!==e[t]))){for(l in s)a.o(s,l)&&(a.m[l]=s[l]);if(i)var o=i(a)}for(t&&t(n);m<c.length;m++)r=c[m],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(o)},n=self.webpackChunkjlurena_me=self.webpackChunkjlurena_me||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=a.O(void 0,[592],(()=>a(52)));l=a.O(l)})();