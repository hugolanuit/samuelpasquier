"use strict";(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_ui_gform_index_js"],{"./src/js/modules/module/Module.js":(t,n,e)=>{function i(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e.d(n,{Z:()=>r});const r=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,e,r;return n=t,(e=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&i(n.prototype,e),r&&i(n,r),t}()},"./src/js/ui/gform/index.js":(t,n,e)=>{e.r(n),e.d(n,{default:()=>Q,instance:()=>q});var i=e("./src/js/utils/dom.js"),r=e("./src/js/modules/module/Module.js"),o=e("./node_modules/eventemitter2/lib/eventemitter2.js"),u=e.n(o),s=e("./src/js/utils/listener.js");function l(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function f(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,n,e){return n&&f(t.prototype,n),e&&f(t,e),t}function p(t,n,e){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var i=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=y(t)););return t}(t,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(e):r.value}},p(t,n,e||t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function d(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&v(t,n)}function b(t,n){return!n||"object"!==_(n)&&"function"!=typeof n?c(t):n}function v(t,n){return v=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},v(t,n)}function m(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return l(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function g(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=y(t);if(n){var r=y(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return b(this,e)}}var w="--filled",k="--submitting",j=function(t){d(e,t);var n=g(e);function e(t){var i;return a(this,e),(i=n.call(this)).el=t,i.id=parseInt(i.el.id.replace("gform_wrapper_","")),i._onRender=i._onRender.bind(c(i)),i._onSubmit=i._onSubmit.bind(c(i)),i.reset(),i.init(),i}return h(e,[{key:"init",value:function(){jQuery(document).on("gform_post_render",this._onRender)}},{key:"destroy",value:function(){jQuery(document).off("gform_post_render",this._onRender),this.fields&&this.fields.forEach((function(t){return t.destroy()})),this.el=null,this.id=null,this.form=null,this.body=null,this.submit=null,this.fields=null,this._onRender=null,this._onSubmit=null}},{key:"reset",value:function(){this.fields&&this.fields.forEach((function(t){return t.destroy()})),this.submit&&(0,s.S1)(this.submit,"click",null),this.form=(0,i.$)("form",this.el),this.body=(0,i.$)(".gform_body",this.el),this.submit=(0,i.$)(".gsubmit",this.el),this.fields=m((0,i.$$)(".gfield",this.body)).map((function(t){return new O(t)})),this.el.setAttribute("data-scroll","1"),this.submit&&(0,s.on)(this.submit,"click",this._onSubmit)}},{key:"_onRender",value:function(t,n){n===this.id&&(this.el.classList.remove(k),this.reset(),this.emit("resize"),window.dispatchEvent(new Event("resize")))}},{key:"_onSubmit",value:function(){this.el.classList.add(k)}}]),e}(u()),O=function(){function t(n){a(this,t),this.el=n,this.label=(0,i.$)(".gfield_label",this.el),this.inputContainer=(0,i.$)(".ginput_container",this.el),this.parentContainer=this.inputContainer.parentElement,this.input=this._getInput(),this.type=this._getType(),this._onInputFocus=this._onInputFocus.bind(this),this._onInputBlur=this._onInputBlur.bind(this),this.init()}return h(t,[{key:"init",value:function(){this.input&&(this.input.on("focus",this._onInputFocus),this.input.on("blur",this._onInputBlur),this.parentContainer&&this.parentContainer.classList.add("--".concat(this.type)),this.input.value.trim()&&this._onInputFocus())}},{key:"destroy",value:function(){this.input&&(this.input.off("focus",this._onInputFocus),this.input.off("blur",this._onInputBlur),this.input.destroy()),this.el=null,this.label=null,this.inputContainer=null,this.input=null,this._onInputFocus=null,this._onInputBlur=null}},{key:"_onInputFocus",value:function(){this.el.classList.add(w)}},{key:"_onInputBlur",value:function(){if(this.input&&this.input.value.trim())return;this.el.classList.remove(w)}},{key:"_getInput",value:function(){if(!this.inputContainer)return null;var t=(0,i.$)("textarea",this.inputContainer);if(t)return new E(t);var n=(0,i.$)("select",this.inputContainer);if(n)return new S(n);var e=(0,i.$)('input:not([type="radio"]):not([type="checkbox"]):not([type="submit"]):not([type="image"]):not([type="file"]):not([type="hidden"])',this.inputContainer);return e?new I(e):null}},{key:"_getType",value:function(){if(!this.input)return null;var t=this.input.el.getAttribute("type"),n=this.input.el.tagName.toLowerCase();return t||n}}]),t}(),I=function(t){d(e,t);var n=g(e);function e(t){var i;return a(this,e),(i=n.call(this)).el=t,i._onFocus=i._onFocus.bind(c(i)),i._onBlur=i._onBlur.bind(c(i)),i.init(),i}return h(e,[{key:"init",value:function(){this._bindEvents()}},{key:"destroy",value:function(){this._unbindEvents(),this.el=null,this._onFocus=null,this._onBlur=null}},{key:"_bindEvents",value:function(){(0,s.on)(this.el,"focus",this._onFocus),(0,s.on)(this.el,"blur",this._onBlur)}},{key:"_unbindEvents",value:function(){(0,s.S1)(this.el,"focus",this._onFocus),(0,s.S1)(this.el,"blur",this._onBlur)}},{key:"_onFocus",value:function(){this.emit("focus",this)}},{key:"_onBlur",value:function(){this.emit("blur",this)}},{key:"value",get:function(){return this.el.value}}]),e}(u()),E=function(t){d(e,t);var n=g(e);function e(){return a(this,e),n.apply(this,arguments)}return h(e,[{key:"init",value:function(){this.el.setAttribute("rows",1),this.el.removeAttribute("cols"),this._currentHeight=null,this._onInput=this._onInput.bind(this),p(y(e.prototype),"init",this).call(this),this.update()}},{key:"destroy",value:function(){this._currentHeight=null,this._onInput=null,p(y(e.prototype),"destroy",this).call(this)}},{key:"update",value:function(){if(this.el){this.el.style.height="inherit";var t=this.el.scrollHeight;this._currentHeight!==t&&null!==this._currentHeight&&(this.emit("resize",this),window.dispatchEvent(new Event("resize"))),this._currentHeight=t,this.el.style.height="".concat(this._currentHeight,"px")}}},{key:"_bindEvents",value:function(){p(y(e.prototype),"_bindEvents",this).call(this),(0,s.on)(this.el,"input",this._onInput)}},{key:"_unbindEvents",value:function(){p(y(e.prototype),"_unbindEvents",this).call(this),(0,s.S1)(this.el,"input",this._onInput)}},{key:"_onInput",value:function(){this.update()}}]),e}(I),S=function(t){d(e,t);var n=g(e);function e(){return a(this,e),n.apply(this,arguments)}return e}(I);const R=j;function C(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var A=function(){function t(n){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=n,this.gform=null,this.init()}var n,e,i;return n=t,(e=[{key:"init",value:function(){this.gform=new R(this.el)}},{key:"destroy",value:function(){this.gform&&this.gform.destroy(),this.el=null,this.gform_wrapper=null,this.gform=null}}])&&C(n.prototype,e),i&&C(n,i),t}();const B=A;function P(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}function $(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function F(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},T(t)}function x(t,n){return!n||"object"!==L(n)&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function z(t,n){return z=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},z(t,n)}function H(t){return function(t){if(Array.isArray(t))return P(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return P(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return P(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function M(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,i=T(t);if(n){var r=T(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return x(this,e)}}var q=new(function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&z(t,n)}(u,t);var n,e,r,o=M(u);function u(){var t,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return $(this,u),(t=o.call(this)).initialized=!1,t.items=null,n&&t.init(),t}return n=u,(e=[{key:"name",get:function(){return"Gform"}},{key:"init",value:function(){var t=this;this.initialized=!0,this.items=H((0,i.$$)(".gform_wrapper")).map((function(n){return new B(n,t.emitter)}))}},{key:"destroy",value:function(){this.items&&this.items.forEach((function(t){return t.destroy()})),this.initialized=!1,this.items=null}}])&&F(n.prototype,e),r&&F(n,r),u}(r.Z));const Q={instance:q}}}]);
//# sourceMappingURL=src_js_ui_gform_index_js.bb3a11a09455adca237a.bundle.js.map