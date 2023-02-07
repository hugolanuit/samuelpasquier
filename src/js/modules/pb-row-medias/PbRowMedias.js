import SwiperCore, { Swiper, Navigation } from 'swiper';

import { $, $$ } from "@utils/dom";
import { on, off } from "@utils/listener";

// configure Swiper to use modules
SwiperCore.use([Navigation]);

const SWIPER_OPTIONS = {
  centeredSlides: false,
  freeMode: false,
  loop: true,
  loopAdditionalSlides: 4,
  navigation: {
    nextEl: '.pb-row-medias__next',
    prevEl: '.pb-row-medias__prev',
  },
  resistance: false,
  slidesPerView: 'auto',
  slidesOffsetAfter: 12,
  slidesOffsetBefore: 12,
  spaceBetween: 12,
  speed: 650,
  breakpoints: {
    992: {
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 40,
      spaceBetween: 40,
    }
  }
};

class PbRowMedias {
  constructor(el) {
    this.el = el;
    this.slider = $(".pb-row-medias__slider", this.el);

    this.imgs = [ ...$$('.pb-row-medias__img', this.el) ];

    this._loadImg = this._loadImg.bind(this);

    this.init();
  }

  init() {
    if( this.slider ) this.swiper = new Swiper(this.slider, SWIPER_OPTIONS);

    this._initImgs();

    this._bindEvents();
  }
  destroy() {
    this._unbindEvents();

    if( this.swiper ) this.swiper.destroy();

    this.el = null;
    this.slider = null;
    this.swiper = null;
  }

  _bindEvents() {
    if (this.imgs) on(this.imgs, "load", this._loadImg);
  }
  _unbindEvents() {
    if (this.imgs) off(this.imgs, "load", this._loadImg);
  }

  _loadImg(event){
    event.currentTarget.classList.add('--loaded');
  }

  _initImgs(){
    this.imgs.forEach((img) => {
      if (img.complete) {
        img.classList.add('--loaded');
      }
    });
  }

}

export default PbRowMedias;
