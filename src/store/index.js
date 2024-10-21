// store/index.js
import { createStore } from "vuex";
import layout from "./modules/layout";

export default createStore({
  modules: {
    layout: {
      namespaced: true,
      ...layout,
    },
  },
});
