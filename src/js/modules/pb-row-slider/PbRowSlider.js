import SwiperCore, { Swiper, Pagination } from 'swiper';
import { $ } from '@utils/dom';

// configure Swiper to use modules
SwiperCore.use([Pagination]);

const SWIPER_OPTIONS = {
  centeredSlides: false,
  freeMode: false,
  loop: true,
  slidesPerView: 1.5,
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 1.8,
      centeredSlides: true,
      loop: true,
      spaceBetween: 0
    }
  }
};

class PbRowSlider {
  constructor(el, emitter) {
    this.el = el;
    this.emitter = emitter;

    this.slider = $('.pb-row-slider__slider',this.el);
    this.swiper = null;

    this.init();
  }

  init() {
    this.swiper = new Swiper(this.slider, SWIPER_OPTIONS);
  }
  destroy() {
    if( this.swiper ) this.swiper.destroy();

    this.el = null;
    this.emitter = null;
    this.slider = null;

    this.swiper = null;
  }

  start() { this._bindEvents(); }
  stop() { this._unbindEvents(); }

  _bindEvents() {}
  _unbindEvents() {}
}

export default PbRowSlider;
