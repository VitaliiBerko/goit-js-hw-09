!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;function l(e){return document.querySelector(e)}null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return o[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t),t("iU1Pc");var r={form:l(".form"),delay:l('[name="delay"]'),step:l('[name="step"]'),amount:l('[name="amount"]')},a=r.amount.value;function i(e,o){return new Promise((function(e,o){var n=Math.random()>.3;setTimeout((function(){n?e():o()}))}))}console.log(r.form),console.log(r.delay),console.log(r.step),console.log(r.amount),console.log(r.step.value),console.log(a),i().then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms"))})),r.form.addEventListener("submit",(function(e){e.preventDefault(),setInterval(i(),r.step.value)}))}();
//# sourceMappingURL=03-promises.c981b2ab.js.map
