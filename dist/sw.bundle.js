if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const a=e=>n(e,c),f={module:{uri:c},exports:o,require:a};i[c]=Promise.all(s.map((e=>f[e]||a(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c15e4145"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"91bf5c4a50c73e706c25.jpg",revision:null},{url:"DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"app.bundle.js",revision:"71b1d81f6fc17c3f1a3f2664ba95dfa5"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"8895e756d5f18942e125903399d636af"},{url:"images/heros/hero-image_1.jpg",revision:"a2f444d9e2e43a5d0373b1a0d8cb2236"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"images/heros/hero-image_3.jpg",revision:"d232e05589056e05f52cf2689f315c6c"},{url:"images/heros/hero-image_4.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"images/icons/icon-128x128.png",revision:"d1f424d921dc9cacd2779434ae2444ee"},{url:"images/icons/icon-144x144.png",revision:"e6fc7f5333ec3fa73f91350a6846e792"},{url:"images/icons/icon-152x152.png",revision:"a2462699be64aca564d29c3113c7186b"},{url:"images/icons/icon-192x192.png",revision:"4246f4388fe22b1ebe470a538fb02b84"},{url:"images/icons/icon-384x384.png",revision:"096e152609023028ea0d228a9e751ce8"},{url:"images/icons/icon-512x512.png",revision:"276d8b7e76a10d7146b36bd380000075"},{url:"images/icons/icon-72x72.png",revision:"86bf69990bfb6bf1d456d9a309ad41fd"},{url:"images/icons/icon-96x96.png",revision:"de3c6c52f7b775200ed42a17b55c8b67"},{url:"index.html",revision:"fe3d0c8ce81c21f420cbe756aeffc452"},{url:"restaurant.png",revision:"32ddda1b7322ddc3d4a21b2c2f4f8c7f"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"restaurant-apps",plugins:[new e.CacheableResponsePlugin({statuses:[200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
