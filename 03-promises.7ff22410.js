!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc");function u(e){return document.querySelector(e)}var a={form:u(".form"),delay:u('[name="delay"]'),step:u('[name="step"]'),amount:u('[name="amount"]')},l=null,c=a.amount.value;a.form.addEventListener("submit",(function(n){n.preventDefault(),function(e,n){n=Number(a.delay.value);a.step.value;if((e=1)===c)return void clearInterval(l);return new Promise((function(t,o){var r=Math.random()>.3;l=setInterval((function(){r?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}().then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)}))}))}();
//# sourceMappingURL=03-promises.7ff22410.js.map