import { $$ } from "@utils/dom";

import Module from "../module/Module";
import FilteredPostsList from "./FilteredPostsList";

export const SELECTOR = `[data-filtered-posts-list]`;

class Factory extends Module {
  constructor(init = false) {
    super();

    this.initialized = false;
    this.items = null;

    init ? this.init() : null;
  }

  get name() {
    return "FilteredPostsList";
  }

  init() {
    // set initialized
    this.initialized = true;
    this.items = [...$$(SELECTOR)].map(el => new FilteredPostsList(el, this.emitter));
  }

  destroy() {
    if (this.items) this.items.forEach(el => el.destroy());

    this.initialized = false;
    this.items = null;
  }
}

export default Factory;
