"use strict";(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_modules_pb-row-tabs_index_js"],{"./src/js/modules/module/Module.js":(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,{Z:()=>i});const i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&r(e.prototype,n),i&&r(e,i),t}()},"./src/js/modules/pb-row-tabs/index.js":(t,e,n)=>{n.r(e),n.d(e,{default:()=>R,instance:()=>T});var r=n("./src/js/utils/dom.js"),i=n("./src/js/modules/module/Module.js"),o=n("./node_modules/eventemitter2/lib/eventemitter2.js"),u=n.n(o),s=n("./src/js/utils/listener.js");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function h(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?c(t):e}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function y(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return h(this,n)}}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(u,t);var e,n,i,o=d(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=o.call(this)).el=t,e.buttons=y((0,r.$$)('[role*="tab"]',e.el)),e._selectedItem=null,e._value=null,e._onClick=e._onClick.bind(c(e)),e.init(),e}return e=u,(n=[{key:"init",value:function(){this._selectedItem=this.buttons.find((function(t){return"true"===t.getAttribute("aria-selected")})),this._selectedItem&&(this._value=this._selectedItem.getAttribute("aria-controls")),this._bindEvents()}},{key:"destroy",value:function(){this._unbindEvents(),this.el=null,this.buttons=null,this._selectedItem=null,this._value=null,this._onClick=null}},{key:"_bindEvents",value:function(){this.buttons&&(0,s.on)(this.buttons,"click",this._onClick)}},{key:"_unbindEvents",value:function(){this.buttons&&(0,s.S1)(this.buttons,"click",this._onClick)}},{key:"_onClick",value:function(t){t&&(t.preventDefault(),t.stopImmediatePropagation());var e=t.currentTarget;if(e!==this._selectedItem){if(this._selectedItem&&this._selectedItem.setAttribute("aria-selected",!1),this._value){var n=(0,r.$)("#".concat(this._value));n&&n.setAttribute("aria-hidden",!0)}this._selectedItem=e,this._selectedItem.setAttribute("aria-selected",!0),this._value=this._selectedItem.getAttribute("aria-controls");var i=(0,r.$)("#".concat(this._value));i&&i.setAttribute("aria-hidden",!1),this.emit("change",this._value)}}},{key:"selectedItem",get:function(){return this._selectedItem}},{key:"value",get:function(){return this._value}}])&&l(e.prototype,n),i&&l(e,i),u}(u());const m=v;function _(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var g=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.el=e,this.emitter=n,this.tablist=(0,r.$)(".pb-row-tabs__tablist",this.el),this._onTabListChange=this._onTabListChange.bind(this),this.init()}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.tablist&&(this.tablist=new m(this.tablist))}},{key:"destroy",value:function(){this.tablist&&this.tablist.destroy(),this.el=null,this.emitter=null,this.tablist=null,this._onTabListChange=null}},{key:"start",value:function(){this._bindEvents()}},{key:"stop",value:function(){this._unbindEvents()}},{key:"_bindEvents",value:function(){this.tabs&&this.tabs.on("change",this._onTabListChange)}},{key:"_unbindEvents",value:function(){this.tabs&&this.tabs.on("change",this._onTabListChange)}},{key:"_onTabListChange",value:function(){this.emitter.emit("SiteScroll.update")}}])&&_(e.prototype,n),i&&_(e,i),t}();const k=g;function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function j(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},A(t)}function E(t,e){return!e||"object"!==S(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function C(t,e){return C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},C(t,e)}function I(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=A(t);if(e){var i=A(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return E(this,n)}}var T=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(u,t);var e,n,i,o=P(u);function u(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return j(this,u),(t=o.call(this)).initialized=!1,t.items=null,e&&t.init(),t}return e=u,(n=[{key:"name",get:function(){return"PbRowTabs"}},{key:"init",value:function(){var t=this;this.initialized=!0,this.items=I((0,r.$$)("[data-pb-row-tabs]")).map((function(e){return new k(e,t.emitter)}))}},{key:"destroy",value:function(){this.items&&this.items.forEach((function(t){return t.destroy()})),this.initialized=!1,this.items=null}},{key:"start",value:function(){this.items&&this.items.forEach((function(t){return t.start()}))}},{key:"stop",value:function(){this.items&&this.items.forEach((function(t){return t.stop()}))}}])&&O(e.prototype,n),i&&O(e,i),u}(i.Z));const R={instance:T}}}]);
//# sourceMappingURL=src_js_modules_pb-row-tabs_index_js.9a6ca2883ae7c6582083.bundle.js.map