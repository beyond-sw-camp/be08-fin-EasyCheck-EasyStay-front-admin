// store/index.js
import { createStore } from "vuex";
import layout from "./modules/layout";
import auth from "./modules/auth";
import notice from "./modules/notice";
import dining from "./modules/dining";

export default createStore({
  modules: {
    layout: {
      namespaced: true,
      ...layout,
    },
    auth: {
      namespaced: true,
      ...auth,
    },
    notice: {
      namespaced: true,
      ...notice,
    },
    dining: {
      namespaced: true,
      ...dining,
    },
  },
});
