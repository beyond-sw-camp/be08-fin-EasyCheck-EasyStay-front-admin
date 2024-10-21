import apiClient from "@/api";
import image from "../../assets/img/002.png";

export default {
  namespaced: true,
  state: {
    isAuthenticated: true, // 초기 상태를 true로 설정 (필요에 따라 조정)
    notices: [], // 공지사항 리스트를 저장할 상태
  },
  mutations: {
    setNotices(state, notices) {
      state.notices = notices;
    },
    // 개별 공지사항을 추가하는
    addNotice(state, notice) {
      state.notices.push(notice);
    },
    setAuthState(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    // 공지사항 등록 액션 수정
    async createNotice({ dispatch }, payload) {
      console.log("Title :", payload.title);
      console.log("Content :", payload.content);
      try {
        // API 요청으로 공지사항을 등록
        const response = await apiClient.post("/notices-reply", {
          accommodationId: 1,
          title: payload.title,
          content: payload.content,
        });

        alert("공지사항이 등록되었습니다!");

        // 새 공지사항을 Vuex 상태에 추가
        const newNotice = {
          id: Date.now(),
          title: payload.title,
          content: payload.content,
          department: "작성자 이름(관리자)",
          employed: new Date().toLocaleDateString(),
          image: image,
        };

        // 공지사항 목록을 새로 가져옴
        dispatch("addNotice", newNotice);

        await dispatch("getAllNotices");

        return response;
      } catch (error) {
        console.error("공지사항 등록 실패:", error);
        throw error; // 에러를 다시 던져서 상위 컴포넌트에서 처리하도록 합니다.
      }
    },

    async getAllNotices({ commit }) {
      try {
        const response = await apiClient.get("/notices-reply"); // 공지사항 API 호출
        commit("setNotices", response.data); // 상태 업데이트
      } catch (error) {
        console.error("공지사항 목록 가져오기 실패:", error);
      }
    },

    // 유저 정보 가져오기 액션
    // async fetchUserInfo({ commit }) {
    //   try {
    //     const response = await apiClient.get("/auth/me");

    //     // user 정보를 상태에 저장 (setUser mutation 호출 필요)
    //     commit("setUser", response.data);
    //   } catch (error) {
    //     console.error("유저 정보 조회 실패:", error);
    //     throw error;
    //   }
    // },

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
