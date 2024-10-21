export default {
  state: {
    hideConfigButton: false,
    isPinned: false,
    showConfig: false,
    sidebarType: "bg-white",
    isRTL: false,
    mcolor: "",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
  },
  mutations: {
    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    sidebarMinimize(state) {
      let sidenav_show = document.querySelector("#app");
      if (state.isPinned) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      }
    },
    sidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      state.isNavFixed = !state.isNavFixed;
    },
    // 새로 추가된 뮤테이션들
    setHideConfigButton(state, payload) {
      state.hideConfigButton = payload;
    },
    setShowNavbar(state, payload) {
      state.showNavbar = payload;
    },
    setShowSidenav(state, payload) {
      state.showSidenav = payload;
    },
    setShowFooter(state, payload) {
      state.showFooter = payload;
    },
    setLayout(state, payload) {
      state.layout = payload;
    },
    setIsRTL(state, payload) {
      state.isRTL = payload;
    },
    setDarkMode(state, payload) {
      state.darkMode = payload;
    },
    setIsAbsolute(state, payload) {
      state.isAbsolute = payload;
    },
    setShowMain(state, payload) {
      state.showMain = payload;
    },
  },
  actions: {
    toggleSidebarColor({ commit }, payload) {
      commit("sidebarType", payload);
    },
  },
  getters: {},
};
