!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("iU1Pc");function a(e){return document.querySelector(e)}var u={form:a(".form"),delay:a('[name="delay"]'),step:a('[name="step"]'),amount:a('[name="amount"]')},l=null,f=u.amount.value,c=u.delay.value;function s(e,n){if(1,1!==f)return new Promise((function(e,t){var o=Math.random()>.3;setTimeout((function(){o?e("✅ Fulfilled promise ".concat(1," in ").concat(n,"ms")):t("❌ Rejected promise ".concat(1," in ").concat(n,"ms"))}))}));clearInterval(l)}u.form.addEventListener("submit",(function(e){e.preventDefault(),l=setInterval(s(),u.step.value),form.reset()})),s(0,c).then((function(n){e(i).Notify.success(n)})).catch((function(n){e(i).Notify.failure(n)}))}();
//# sourceMappingURL=03-promises.b529f701.js.map