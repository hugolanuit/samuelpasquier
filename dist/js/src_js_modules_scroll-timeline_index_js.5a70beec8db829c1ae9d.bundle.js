"use strict";(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_modules_scroll-timeline_index_js"],{"./src/js/modules/module/Module.js":(t,e,n)=>{function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n.d(e,{Z:()=>i});const i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,i;return e=t,(n=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&r(e.prototype,n),i&&r(e,i),t}()},"./src/js/modules/scroll-timeline/index.js":(t,e,n)=>{n.r(e),n.d(e,{instance:()=>j,default:()=>g});var r=n("./node_modules/animejs/lib/anime.es.js"),i=n("./src/js/utils/dom.js"),o=n("./src/js/utils/viewport.js"),l=n("./src/js/modules/module/Module.js");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}function y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){f(t,e,n[e])}))}return t}function b(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?u(t):e}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=function(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t};function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=m(t);if(e){var i=m(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return b(this,n)}}var _={easing:"linear",autoplay:!1,duration:1e3},j=new(function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(f,t);var e,n,l,a=v(f);function f(){var t,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return c(this,f),(t=a.call(this)).initialized=!1,t.items=null,t._onCall=t._onCall.bind(u(t)),t._onScroll=t._onScroll.bind(u(t)),e&&t.init(),t}return e=f,(n=[{key:"name",get:function(){return"ScrollTimeline"}},{key:"init",value:function(){this.initialized=!0,this.items=[],h((0,i.$$)("[data-timeline]")).forEach((function(t,e){t.hasAttribute("data-scroll-call")&&"timeline"!==t.dataset.scrollCall?console.warn("ScrollTimeline will be disabled on ".concat(t," because it already has a data-scroll-call attribute."),t):(t.hasAttribute("data-scroll")||t.setAttribute("data-scroll",""),t.hasAttribute("data-scroll-scroll")&&"timeline"===t.dataset.scrollCall||t.setAttribute("data-scroll-call","timeline"),t.dataset.timelineID=e)})),this._bindEvents()}},{key:"destroy",value:function(){this._unbindEvents(),this.items&&this.items.forEach((function(t){return r.Z.remove(t.el)})),this.initialized=!1,this.items=null}},{key:"_bindEvents",value:function(){this.emitter.on("SiteScroll.timeline",this._onCall),this.emitter.on("SiteScroll.scroll",this._onScroll)}},{key:"_unbindEvents",value:function(){this.emitter.off("SiteScroll.timeline",this._onCall),this.emitter.off("SiteScroll.scroll",this._onScroll)}},{key:"_timelineExists",value:function(t){return void 0!==this._getTimeline(t)}},{key:"_getTimeline",value:function(t){return this.items.find((function(e){return e.id===t}))}},{key:"_onCall",value:function(t,e){if("enter"===t){var n=e.el,i=n.dataset.timelineID||0;if(this._timelineExists(i)){var o=this._getTimeline(i);return o.top=e.top,void(o.bottom=e.bottom)}var l=JSON.parse(n.dataset.timeline);this.items.push({id:i,top:e.top,bottom:e.bottom,el:n,timeline:(0,r.Z)(y({targets:n},_,l))})}}},{key:"_onScroll",value:function(t){var e=o.Z.height;this.items.forEach((function(n){var r=n.timeline,i=n.top,o=n.bottom,l=Math.min(o,e+o-i),a=1-Math.min(l,Math.max(0,o-t))/l;r.seek(r.duration*a)}))}}])&&s(e.prototype,n),l&&s(e,l),f}(l.Z));const g={instance:j}}}]);
//# sourceMappingURL=src_js_modules_scroll-timeline_index_js.5a70beec8db829c1ae9d.bundle.js.map