(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_modules_google-map_index_js"],{"./node_modules/load-google-maps-api/index.js":e=>{const t="__googleMapsApiOnLoadCallback",n=["channel","client","key","language","region","v"];let r=null;e.exports=function(e={}){return r=r||new Promise((function(r,o){const i=setTimeout((function(){window[t]=function(){},o(new Error("Could not load the Google Maps API"))}),e.timeout||1e4);window[t]=function(){null!==i&&clearTimeout(i),r(window.google.maps),delete window[t]};const a=document.createElement("script"),u=[`callback=${t}`];n.forEach((function(t){e[t]&&u.push(`${t}=${e[t]}`)})),e.libraries&&e.libraries.length&&u.push(`libraries=${e.libraries.join(",")}`),a.src=`${e.apiUrl||"https://maps.googleapis.com/maps/api/js"}?${u.join("&")}`,document.body.appendChild(a)})),r}},"./src/js/modules/google-map/index.js":(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O,instance:()=>k});var r=n("./src/js/utils/dom.js"),o=n("./src/js/modules/module/Module.js"),i=n("./node_modules/load-google-maps-api/index.js"),a=n.n(i);function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={zoom:16,markers:null},c=null,f=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.options=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({},s,JSON.parse(this.el.dataset.googleMap)||{}),this._initialized=!0,a()({key:"XXXXXX",language:"fr-CA",region:"CA"}).then(this._onGoogleMapsApiLoaded.bind(this))}var t,n,r;return t=e,(n=[{key:"destroy",value:function(){this.el=null,this.options=null,this._initialized=null}},{key:"addMarker",value:function(e,t){var n=this.map;if(n){var r={lat:parseFloat(e),lng:parseFloat(t)},o=new c.Marker({position:r,map:n});n.markers.push(o)}}},{key:"center",value:function(){var e=this.map;if(e){var t=new c.LatLngBounds;e.markers.forEach((function(e){t.extend({lat:e.position.lat(),lng:e.position.lng()})})),1==e.markers.length?e.setCenter(t.getCenter()):e.fitBounds(t)}}},{key:"_onGoogleMapsApiLoaded",value:function(e){var t,n=this;c=e,this._initialized&&(this.map=new c.Map(this.el,this.options),null===(t=this.options)||void 0===t||t.markers.forEach((function(e){var t=e.lat,r=e.lng;return n.addMarker(t,r)})),this.center())}}])&&u(t.prototype,n),r&&u(t,r),e}();const p=f;function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return b(this,n)}}var k=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(a,e);var t,n,o,i=j(a);function a(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return y(this,a),(e=i.call(this)).initialized=!1,e.items=null,t&&e.init(),e}return t=a,(n=[{key:"name",get:function(){return"GoogleMap"}},{key:"init",value:function(){this.initialized=!0,this.items=v((0,r.$$)("[data-google-map]")).map((function(e){return new p(e)}))}},{key:"destroy",value:function(){this.items&&this.items.forEach((function(e){return e.destroy()})),this.initialized=!1,this.items=null}}])&&m(t.prototype,n),o&&m(t,o),a}(o.Z));const O={instance:k}},"./src/js/modules/module/Module.js":(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:()=>o});const o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,(n=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&r(t.prototype,n),o&&r(t,o),e}()}}]);
//# sourceMappingURL=src_js_modules_google-map_index_js.2a48ce03f0074e418021.bundle.js.map