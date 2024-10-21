<template>
  <div class="py-4 container-fluid">
    <NoticesTable title="공지사항 목록" :authors="notices" />
  </div>
</template>

<script>
import NoticesTable from "./components/NoticesTable.vue";

import { mapState } from "vuex";

export default {
  components: { NoticesTable },
  computed: {
    ...mapState("notice", ["notices"]), // Vuex 상태에서 notices 가져오기
  },
  mounted() {
    // 공지사항을 가져오는 Vuex 액션 호출
    this.$store.dispatch("notice/getAllNotices");
  },
  data() {
    return {
      notice: [
        {
          id: 1,
          department: "김철수", // 이름을 department로 변경
          title: "시스템 점검 안내",
          employed: "11/01/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 2,
          department: "이영희",
          title: "서버 점검 완료",
          employed: "11/05/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 3,
          department: "박민수",
          title: "개발자 모집 공고",
          employed: "11/10/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 4,
          department: "최지우",
          title: "기술 세미나 안내",
          employed: "11/15/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 5,
          department: "이준호",
          title: "신규 프로젝트 발주",
          employed: "11/20/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 6,
          department: "김민지",
          title: "버전 업데이트 안내",
          employed: "11/25/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 7,
          department: "오세훈",
          title: "코드 리뷰 요청",
          employed: "11/30/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 8,
          department: "한지민",
          title: "시스템 장애 발생",
          employed: "12/01/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 9,
          department: "정해인",
          title: "안전 교육 안내",
          employed: "12/05/19",
          image: require("../assets/img/002.png"),
        },
        {
          id: 10,
          department: "송중기",
          title: "팀 빌딩 행사",
          employed: "12/10/19",
          image: require("../assets/img/002.png"),
        },
      ],
    };
  },
};
</script>
