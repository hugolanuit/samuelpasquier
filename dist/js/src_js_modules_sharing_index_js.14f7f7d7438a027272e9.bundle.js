/*! For license information please see src_js_modules_sharing_index_js.14f7f7d7438a027272e9.bundle.js.LICENSE.txt */
(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_modules_sharing_index_js"],{"./node_modules/clipboard-copy/index.js":t=>{function e(){return new DOMException("The request is not allowed","NotAllowedError")}t.exports=async function(t){try{await async function(t){if(!navigator.clipboard)throw e();return navigator.clipboard.writeText(t)}(t)}catch(n){try{await async function(t){const n=document.createElement("span");n.textContent=t,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);const o=window.getSelection(),i=window.document.createRange();o.removeAllRanges(),i.selectNode(n),o.addRange(i);let r=!1;try{r=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(n)}if(!r)throw e()}(t)}catch(t){throw t||n||e()}}}},"./src/js/modules/module/Module.js":(t,e,n)=>{"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}n.d(e,{Z:()=>i});const i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&o(e.prototype,n),i&&o(e,i),t}()},"./src/js/modules/sharing/index.js":(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>w,instance:()=>g});var o=n("./src/js/utils/dom.js"),i=n("./src/js/modules/module/Module.js"),r=n("./node_modules/clipboard-copy/index.js"),s=n.n(r),c=n("./src/js/utils/listener.js");function u(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var a=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.copyBtn=(0,o.$)(".sharing__copyBtn"),this.copyMessage=(0,o.$)(".sharing__copyMessage"),this._copyPromise=null,this._copyTick=null,this._onCopyClick=this._onCopyClick.bind(this),this._onCopySuccess=this._onCopySuccess.bind(this),this._onCopyError=this._onCopyError.bind(this),this._copyCompleted=this._copyCompleted.bind(this),this.init()}var e,n,i;return e=t,(n=[{key:"init",value:function(){this._bindEvents()}},{key:"destroy",value:function(){this._copyTick&&clearTimeout(this._copyTick),this._unbindEvents(),this.el=null,this.copyBtn=null,this.copyMessage=null,this._copyPromise=null,this._copyTick=null,this._onCopyClick=null,this._onCopySuccess=null,this._onCopyError=null,this._copyCompleted=null}},{key:"_bindEvents",value:function(){this.copyBtn&&(0,c.on)(this.copyBtn,"click",this._onCopyClick)}},{key:"_unbindEvents",value:function(){this.copyBtn&&(0,c.S1)(this.copyBtn,"click",this._onCopyClick)}},{key:"_onCopyClick",value:function(t){t&&(t.preventDefault(),t.stopImmediatePropagation()),this._copyPromise||(this._copyPromise=s()(this.copyBtn.dataset.sharingCopyUrl).then(this._onCopySuccess).catch(this._onCopyError))}},{key:"_onCopySuccess",value:function(){this.copyMessage&&(this.copyMessage.setAttribute("aria-hidden",!1),this._copyTick=setTimeout(this._copyCompleted,3e3))}},{key:"_onCopyError",value:function(t){console.log(t),this._copyPromise=null}},{key:"_copyCompleted",value:function(){this.copyMessage&&this.copyMessage.setAttribute("aria-hidden",!0),this._copyPromise=null}}])&&u(e.prototype,n),i&&u(e,i),t}();const l=a;function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}function d(t,e){return!e||"object"!==_(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t,e){return m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=h(t);if(e){var i=h(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return d(this,n)}}var g=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&m(t,e)}(s,t);var e,n,i,r=v(s);function s(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return p(this,s),(t=r.call(this)).initialized=!1,t.items=null,e&&t.init(),t}return e=s,(n=[{key:"name",get:function(){return"Sharing"}},{key:"init",value:function(){var t=this;this.initialized=!0,this.items=b((0,o.$$)("[data-sharing]")).map((function(e){return new l(e,t.emitter)}))}},{key:"destroy",value:function(){this.items&&this.items.forEach((function(t){return t.destroy()})),this.initialized=!1,this.items=null}}])&&f(e.prototype,n),i&&f(e,i),s}(i.Z));const w={instance:g}}}]);
//# sourceMappingURL=src_js_modules_sharing_index_js.14f7f7d7438a027272e9.bundle.js.map