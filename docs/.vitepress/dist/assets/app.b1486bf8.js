import{d as p,K as s,a3 as i,u,h as c,l,a4 as d,a5 as f,a6 as m,a7 as h,a8 as A,a9 as g,aa as P,ab as v,ac as w,ad as y,ae as C,af as R,ag as _,H as b}from"./chunks/framework.11a869bf.js";import{t as E}from"./chunks/theme.8c89c816.js";const D={...E};function r(e){if(e.extends){const a=r(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=r(D),T=p({name:"VitePressApp",setup(){const{site:e}=u();return c(()=>{l(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),d(),f(),m(),n.setup&&n.setup(),()=>h(n.Layout)}});async function O(){const e=j(),a=S();a.provide(A,e);const t=g(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",w),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:y}),{app:a,router:e,data:t}}function S(){return C(T)}function j(){let e=s,a;return R(t=>{let o=_(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),b(()=>import(o),[])},n.NotFound)}s&&O().then(({app:e,router:a,data:t})=>{a.go().then(()=>{i(a.route,t.site),e.mount("#app")})});export{O as createApp};