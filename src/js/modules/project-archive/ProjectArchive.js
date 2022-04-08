import { $, $$ } from "@utils/dom";
import Throttle from "@utils/throttle";
import { on, off } from "@utils/listener";

const CLASSNAME_OPENED = `--opened`;

class ProjectArchive {
  constructor(el, emitter) {
    this.el = el;
    this.emitter = emitter;

    this.projects = [...$$('.project-archives__project', this.el)];

    this._enterProjects = this._enterProjects.bind(this);
    this._leaveProjects = this._leaveProjects.bind(this);
    this._imageSwap = this._imageSwap.bind(this);


    this.currentProject = null;

    this.init();
  }

  init() {
    this.imgThrottler = new Throttle({cb: this._imageSwap, delay: 250, onlyAtEnd: false});
  }
  destroy() {

    this.el = null;
    this.emitter = null;

    this.projects = null;

    this.currentProject = null;

    if(this.imgThrottler) this.imgThrottler.dispose();
    this.imgThrottler = null;

    this._enterPreviews = null;
    this._leavePreviews = null;
    this._imageSwap = null;
  }

  start() { this._bindEvents(); }
  stop() { this._unbindEvents(); }

  _imageSwap(){
    this.projects.forEach((_el) => {
      if (_el == this.currentProject) {
        _el.classList.add(CLASSNAME_OPENED);
      } else {
        _el.classList.remove(CLASSNAME_OPENED);
      }
    });
  }

  _enterProjects(e){
    this.currentProject = e.currentTarget;

    this.imgThrottler.init();
  }

  _leaveProjects(e){
    this.currentProject = null;
    
    this.imgThrottler.init();
  }

  _bindEvents() {
    if(this.projects) on(this.projects, 'mouseenter', this._enterProjects);
    if(this.projects) on(this.projects, 'mouseleave', this._leaveProjects);
  }

  _unbindEvents() {
    if(this.projects) off(this.projects, 'mouseenter', this._enterProjects);
    if(this.projects) off(this.projects, 'mouseleave', this._leaveProjects);
  }
}

export default ProjectArchive;
