window.ascendon=window.ascendon?window.ascendon:{},window.ascendon.controller=(e=>{const t={container:window.CSG_CONFIG?window.CSG_CONFIG.container:"ascendon",iframeUrl:window.CSG_CONFIG?window.CSG_CONFIG.iframeUrl:"https://localhost:9000"};var n="ascendon-iframe",a=null,o=(e,n)=>{var a=document.getElementById(t.container);const o=new CustomEvent("ascendon.event",{detail:{type:e,params:n}});a.dispatchEvent(o)},i=(e,t,a)=>{t=t||{};var o=document.getElementById(n);return o.classList="",o.classList.add(t.theme),a&&a(),document.getElementById(n).contentWindow.postMessage(JSON.stringify({page:e,params:t}),"*")};return window.addEventListener("message",(e=>{if((`${window.location.href}/react/`.indexOf(e.origin.replace(/http:|https:/gi,""))>=0||t.iframeUrl.indexOf(e.origin.replace(/http:|https:/gi,""))>=0)&&void 0!==typeof e.data&&"string"==typeof e.data&&e.data.length>0){let t={};try{t=e.data.indexOf("[iFrameSizer]")<0?JSON.parse(e.data):{}}catch(t){console.warn("Ignoring unparsable message ",e,t)}if("event"===t?.type)if("app.loaded"===t?.data?.route)console.info("App iframe initial load completed"),window.iFrameResize({log:!1,checkOrigin:!1}),a&&a();else if("app.sessionCreated"===t?.data?.route)i("/",t?.data?.params);else{const e=t?.data?.route,n={eventName:e,...t?.data?.params||{}};o(e,n)}}}),!1),(e=>{var i=document.getElementById(t.container),d=document.createElement("iframe");if(d.id=n,d.src=t.iframeUrl,d.style.overflow="hidden",d.style.border="none",d.style.width="100%",i.append(d),a=()=>{o("module.ready",{eventName:"module.ready"})},!window.iFrameResize){var r=document.createElement("script");r.type="text/javascript",r.src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.min.js",window.document.body.appendChild(r)}})(),{route:(e,n,a)=>{document.getElementById(t.container).setAttribute("asc-route",e),i(e,n,a)},language:(e,t)=>document.getElementsByTagName("iframeId")[0].contentWindow.postMessage(JSON.stringify({page:e,locale:t}),"*"),events:e=>{(e=>{document.getElementById(t.container).addEventListener("ascendon.event",(function(t){var n=t.detail?t.detail.params:{};e(n,t)}))})(e)},versionInfo:()=>({version:ASCENDON_BUILD_VERSION,hash:ASCENDON_BUILD_HASH,branch:ASCENDON_BUILD_BRANCH})}})(window.ascendon);