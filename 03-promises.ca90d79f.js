var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},l=e.parcelRequire7bc7;function t(e){return document.querySelector(e)}null==l&&((l=function(e){if(e in o)return o[e].exports;if(e in n){var l=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,l.call(t.exports,t,t.exports),t.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=l),l("eWCmQ");const r={form:t(".form"),delay:t('[name="delay"]'),step:t('[name="step"]'),amount:t('[name="amount"]')};let s=null,i=r.amount.value;function a(e,o){return new Promise(((e,o)=>{const n=Math.random()>.3;setTimeout((()=>{n?e():o()}))}))}console.log(r.form),console.log(r.delay),console.log(r.step),console.log(r.amount),console.log(r.step.value),console.log(i),a().then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),r.form.addEventListener("submit",(function(e){e.preventDefault(),s=setInterval(a(),r.step.value)}));
//# sourceMappingURL=03-promises.ca90d79f.js.map
