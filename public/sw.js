if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/KAKU-logo-128.png",revision:"f040086f14373c629f24a0c89c33818c"},{url:"/KAKU-logo-192.png",revision:"c1b0ad1ea5c3a98c70feaa9cbb6acd83"},{url:"/KAKU-logo-384.png",revision:"75b05e4deeb04ecf78f00069ae92b304"},{url:"/KAKU-logo-512.png",revision:"e4d4d0b840273a5f32f197d736a6fd46"},{url:"/_next/app-build-manifest.json",revision:"54527d90f4e3f8ac460c844b59fb3a4b"},{url:"/_next/static/ZaJt44JPf4YDA1ritnJ_P/_buildManifest.js",revision:"8e6ce56c5b5d41f707ac2d8da028d2ee"},{url:"/_next/static/ZaJt44JPf4YDA1ritnJ_P/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/113-72afe5cb242f6834.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/173-672601796d67fdbc.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/402-2cd72ad7bfcb3137.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/4bd1b696-db81fd708ad1e99f.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/517-6ccfe8c56945caaa.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/631-35b2d924681d47ab.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/895-5df97d1b51e5db5d.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/970-7547c86f3f3019c3.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/_not-found/page-8a17a5e4cd404320.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/about/page-8c60ee7292e8dee1.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/blog/page-ed55522f84a2ba19.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/contact/page-e779f74e30a32edb.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/download/page-26131a2084b5d13c.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/jobs/page-6eca23e4384287ae.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/layout-436121533bd216a7.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/not-found-78beaa2e7241e24d.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/notes/page-56b23a8525177a09.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/page-324e9456718178b6.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/start/page-eacabdabefafab7c.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/app/tasks/page-713caf55e03df1b9.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/main-3330834e81596ead.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/main-app-a2bf42bfd99868db.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-a0f3643cd2fdce4d.js",revision:"ZaJt44JPf4YDA1ritnJ_P"},{url:"/_next/static/css/937162541a6880e1.css",revision:"937162541a6880e1"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/android-guide/android-guide-1.png",revision:"e5b1ca4164e98a62f19d6a0bb2137302"},{url:"/android-guide/android-guide-2.png",revision:"a831406333a94515f4da3f860d20bb1a"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/ios-guide/ios-guide-1.png",revision:"8840373c4f048b227fcd983ec84a7c75"},{url:"/ios-guide/ios-guide-2.png",revision:"6b1ddbe41e4e206b9134d8fe10627f75"},{url:"/ios-guide/ios-guide-3.png",revision:"b8e15aeec9e25b71bf88fdbdadd30af5"},{url:"/logo/android-logo.svg",revision:"29a5a82b598b9fc230c72b5db9f98cea"},{url:"/logo/apple-logo.svg",revision:"ecf9cc73efd3ca22e84fa73a64b7c0e5"},{url:"/manifest.json",revision:"eb7ea451e5221aa636fdfb43b50b6e53"},{url:"/neko.gif",revision:"a74dbaad818bb0e6997695ea161060eb"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pc-guide/pc-guide-1.png",revision:"c0b2aa4031a0acc0ed4f9373f0ec0b65"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
