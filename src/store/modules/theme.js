import apiClient from "@/api";
// import image from "../../assets/img/002.png";

export default {
  namespaced: true,
  state: {
    isAuthenticated: true, // 초기 상태를 true로 설정 (필요에 따라 조정)
    themes: [], // 공지사항 리스트를 저장할 상태
  },
  mutations: {
    setthemes(state, themes) {
      console.log("받아온 다이닝 데이터 : ", themes);
      state.themes = themes;
    },
    setAuthState(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    async getAllThemes({ commit }) {
      try {
        const accommodationId = 1;
        const response = await apiClient.get(
          `/accommodations/${accommodationId}/parks`
        );
        console.log("응답 : ", response);
        const themesData = response.data.data.map((themes) => ({
          id: themes.id,
          name: themes.name,
          location: themes.description, // accommodationName을 location으로
          //   openingDate: themes.ticket_available, // description을 openingDate로 사용
        }));
        console.log("받아온 다이닝 데이터:", themesData);
        commit("setthemes", themesData); // 상태 업데이트
      } catch (error) {
        console.error("다이닝 목록 가져오기 실패:", error);
      }
    },

    // 로그아웃 액션
    logout({ commit }) {
      // 토큰 제거
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      commit("clearAuthState"); // 인증 상태 초기화
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated, // 인증 여부 확인
    currentUser: (state) => state.user, // 현재 유저 정보 반환
  },
};
