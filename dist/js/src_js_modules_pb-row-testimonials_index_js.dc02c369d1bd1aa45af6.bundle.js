"use strict";(self.webpackChunksamuelpasquier=self.webpackChunksamuelpasquier||[]).push([["src_js_modules_pb-row-testimonials_index_js"],{"./src/js/modules/module/Module.js":(e,t,n)=>{function a(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}n.d(t,{Z:()=>i});const i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){}},{key:"start",value:function(){}},{key:"stop",value:function(){}},{key:"destroy",value:function(){}},{key:"name",get:function(){return null}}])&&a(t.prototype,n),i&&a(t,i),e}()},"./src/js/modules/pb-row-testimonials/index.js":(e,t,n)=>{n.r(t),n.d(t,{default:()=>w,instance:()=>C});var a=n("./src/js/utils/dom.js"),i=n("./src/js/modules/module/Module.js"),l=n("./node_modules/swiper/esm/components/core/core-class.js"),s=n("./node_modules/swiper/esm/components/pagination/pagination.js");function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}l.Z.use([s.Z]);var o={centeredSlides:!1,freeMode:!1,loop:!1,pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},slidesPerView:1,spaceBetween:0,breakpoints:{992:{centerInsufficientSlides:!0,slidesPerView:1,watchOverflow:!0}}},u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=t,this.emitter=n,this.init()}var t,n,a;return t=e,(n=[{key:"init",value:function(){this.slider=new l.Z(this.el,o)}},{key:"destroy",value:function(){this.slider&&this.slider.destroy(),this.el=null,this.emitter=null,this.slider=null}},{key:"start",value:function(){this._bindEvents()}},{key:"stop",value:function(){this._unbindEvents()}},{key:"_bindEvents",value:function(){}},{key:"_unbindEvents",value:function(){}}])&&r(t.prototype,n),a&&r(t,a),e}();const p=u;function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var h=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=m(e);if(t){var i=m(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return g(this,n)}}var C=new(function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,e);var t,n,i,l=y(s);function s(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return d(this,s),(e=l.call(this)).initialized=!1,e.items=null,t&&e.init(),e}return t=s,(n=[{key:"name",get:function(){return"PbRowTestimonials"}},{key:"init",value:function(){var e=this;this.initialized=!0,this.items=b((0,a.$$)("[data-pb-row-testimonials]")).map((function(t){return new p(t,e.emitter)}))}},{key:"destroy",value:function(){this.items&&this.items.forEach((function(e){return e.destroy()})),this.initialized=!1,this.items=null}},{key:"start",value:function(){this.items&&this.items.forEach((function(e){return e.start()}))}},{key:"stop",value:function(){this.items&&this.items.forEach((function(e){return e.stop()}))}}])&&f(t.prototype,n),i&&f(t,i),s}(i.Z));const w={instance:C}},"./node_modules/swiper/esm/components/pagination/pagination.js":(e,t,n)=>{n.d(t,{Z:()=>r});var a=n("./node_modules/swiper/esm/utils/dom.js"),i=n("./node_modules/swiper/esm/utils/utils.js");function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var s={update:function(){var e=this,t=e.rtl,n=e.params.pagination;if(n.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var l,s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,r=e.pagination.$el,o=e.params.loop?Math.ceil((s-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((l=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>s-1-2*e.loopedSlides&&(l-=s-2*e.loopedSlides),l>o-1&&(l-=o),l<0&&"bullets"!==e.params.paginationType&&(l=o+l)):l=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===n.type&&e.pagination.bullets&&e.pagination.bullets.length>0){var u,p,c,d=e.pagination.bullets;if(n.dynamicBullets&&(e.pagination.bulletSize=d.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(n.dynamicMainBullets+4)+"px"),n.dynamicMainBullets>1&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=l-e.previousIndex,e.pagination.dynamicBulletIndex>n.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=n.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),u=l-e.pagination.dynamicBulletIndex,c=((p=u+(Math.min(d.length,n.dynamicMainBullets)-1))+u)/2),d.removeClass(n.bulletActiveClass+" "+n.bulletActiveClass+"-next "+n.bulletActiveClass+"-next-next "+n.bulletActiveClass+"-prev "+n.bulletActiveClass+"-prev-prev "+n.bulletActiveClass+"-main"),r.length>1)d.each((function(e){var t=(0,a.Z)(e),i=t.index();i===l&&t.addClass(n.bulletActiveClass),n.dynamicBullets&&(i>=u&&i<=p&&t.addClass(n.bulletActiveClass+"-main"),i===u&&t.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),i===p&&t.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next"))}));else{var f=d.eq(l),m=f.index();if(f.addClass(n.bulletActiveClass),n.dynamicBullets){for(var g=d.eq(u),v=d.eq(p),b=u;b<=p;b+=1)d.eq(b).addClass(n.bulletActiveClass+"-main");if(e.params.loop)if(m>=d.length-n.dynamicMainBullets){for(var h=n.dynamicMainBullets;h>=0;h-=1)d.eq(d.length-h).addClass(n.bulletActiveClass+"-main");d.eq(d.length-n.dynamicMainBullets-1).addClass(n.bulletActiveClass+"-prev")}else g.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),v.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next");else g.prev().addClass(n.bulletActiveClass+"-prev").prev().addClass(n.bulletActiveClass+"-prev-prev"),v.next().addClass(n.bulletActiveClass+"-next").next().addClass(n.bulletActiveClass+"-next-next")}}if(n.dynamicBullets){var y=Math.min(d.length,n.dynamicMainBullets+4),C=(e.pagination.bulletSize*y-e.pagination.bulletSize)/2-c*e.pagination.bulletSize,w=t?"right":"left";d.css(e.isHorizontal()?w:"top",C+"px")}}if("fraction"===n.type&&(r.find((0,i.Wc)(n.currentClass)).text(n.formatFractionCurrent(l+1)),r.find((0,i.Wc)(n.totalClass)).text(n.formatFractionTotal(o))),"progressbar"===n.type){var x;x=n.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var k=(l+1)/o,A=1,B=1;"horizontal"===x?A=k:B=k,r.find((0,i.Wc)(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX("+A+") scaleY("+B+")").transition(e.params.speed)}"custom"===n.type&&n.renderCustom?(r.html(n.renderCustom(e,l+1,o)),e.emit("paginationRender",r[0])):e.emit("paginationUpdate",r[0]),e.params.watchOverflow&&e.enabled&&r[e.isLocked?"addClass":"removeClass"](n.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,a=e.pagination.$el,l="";if("bullets"===t.type){var s=e.params.loop?Math.ceil((n-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&!e.params.loop&&s>n&&(s=n);for(var r=0;r<s;r+=1)t.renderBullet?l+=t.renderBullet.call(e,r,t.bulletClass):l+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";a.html(l),e.pagination.bullets=a.find((0,i.Wc)(t.bulletClass))}"fraction"===t.type&&(l=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',a.html(l)),"progressbar"===t.type&&(l=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',a.html(l)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var e=this;e.params.pagination=(0,i.Up)(e.$el,e.params.pagination,e.params.createElements,{el:"swiper-pagination"});var t=e.params.pagination;if(t.el){var n=(0,a.Z)(t.el);0!==n.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&n.length>1&&(n=e.$el.find(t.el)),"bullets"===t.type&&t.clickable&&n.addClass(t.clickableClass),n.addClass(t.modifierClass+t.type),"bullets"===t.type&&t.dynamicBullets&&(n.addClass(""+t.modifierClass+t.type+"-dynamic"),e.pagination.dynamicBulletIndex=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&n.addClass(t.progressbarOppositeClass),t.clickable&&n.on("click",(0,i.Wc)(t.bulletClass),(function(t){t.preventDefault();var n=(0,a.Z)(this).index()*e.params.slidesPerGroup;e.params.loop&&(n+=e.loopedSlides),e.slideTo(n)})),(0,i.l7)(e.pagination,{$el:n,el:n[0]}),e.enabled||n.addClass(t.lockClass))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var n=e.pagination.$el;n.removeClass(t.hiddenClass),n.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&n.off("click",(0,i.Wc)(t.bulletClass))}}};const r={name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){(0,i.cR)(this,{pagination:l({dynamicBulletIndex:0},s)})},on:{init:function(e){e.pagination.init(),e.pagination.render(),e.pagination.update()},activeIndexChange:function(e){(e.params.loop||void 0===e.snapIndex)&&e.pagination.update()},snapIndexChange:function(e){e.params.loop||e.pagination.update()},slidesLengthChange:function(e){e.params.loop&&(e.pagination.render(),e.pagination.update())},snapGridLengthChange:function(e){e.params.loop||(e.pagination.render(),e.pagination.update())},destroy:function(e){e.pagination.destroy()},"enable disable":function(e){var t=e.pagination.$el;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)},click:function(e,t){var n=t.target;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&e.pagination.$el.length>0&&!(0,a.Z)(n).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&n===e.navigation.nextEl||e.navigation.prevEl&&n===e.navigation.prevEl))return;!0===e.pagination.$el.hasClass(e.params.pagination.hiddenClass)?e.emit("paginationShow"):e.emit("paginationHide"),e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)}}}}}}]);
//# sourceMappingURL=src_js_modules_pb-row-testimonials_index_js.dc02c369d1bd1aa45af6.bundle.js.map