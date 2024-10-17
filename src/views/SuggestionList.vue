<template>
  <div class="py-4 container-fluid">
    <SuggestionTable
      title="건의사항 목록"
      :parks="suggestion"
      @open-response-form="showResponseForm = true"
    />
    <ResponseForm
      v-if="showResponseForm"
      @close="showResponseForm = false"
      @response-submitted="handleResponseSubmitted"
    />
  </div>
</template>

<script>
import SuggestionTable from "./components/SuggestionTable.vue";
import ResponseForm from "./components/ResponseForm.vue";

export default {
  components: { SuggestionTable, ResponseForm },
  data() {
    return {
      showResponseForm: false, // 폼 표시 상태
      suggestion: [
        {
          id: 1,
          title: "주말 테마파크 할인 이벤트 제안",
          author: "홍길동",
          submittedDate: "2024-01-15",
          image: require("../assets/img/002.png"),
        },
        {
          id: 2,
          title: "신규 놀이기구 추가 요청",
          author: "김영희",
          submittedDate: "2024-02-20",
          image: require("../assets/img/002.png"),
        },
        {
          id: 3,
          title: "비 오는 날 사용할 수 있는 실내 시설 요청",
          author: "이순신",
          submittedDate: "2024-03-10",
          image: require("../assets/img/002.png"),
        },
        {
          id: 4,
          title: "할인 혜택 연장 요청",
          author: "박지민",
          submittedDate: "2024-04-05",
          image: require("../assets/img/002.png"),
        },
        {
          id: 5,
          title: "어린이 놀이시설 개선 건의",
          author: "최민수",
          submittedDate: "2024-05-18",
          image: require("../assets/img/002.png"),
        },
        {
          id: 6,
          title: "주차 공간 확대 요청",
          author: "김수현",
          submittedDate: "2024-06-22",
          image: require("../assets/img/002.png"),
        },
        {
          id: 7,
          title: "반려동물 동반 입장 가능 여부 건의",
          author: "이정훈",
          submittedDate: "2024-07-10",
          image: require("../assets/img/002.png"),
        },
        {
          id: 8,
          title: "여름 이벤트 프로그램 개선 요청",
          author: "신지혜",
          submittedDate: "2024-08-05",
          image: require("../assets/img/002.png"),
        },
        {
          id: 9,
          title: "온실가스 감축을 위한 에너지 절약 방안 제안",
          author: "이성민",
          submittedDate: "2024-09-12",
          image: require("../assets/img/002.png"),
        },
        {
          id: 10,
          title: "더 다양한 먹거리를 제공해 주세요!",
          author: "장하늘",
          submittedDate: "2024-10-02",
          image: require("../assets/img/002.png"),
        },
      ],
    };
  },
  methods: {
    handleResponseSubmitted() {
      // 여기에서 답변 제출 후의 로직을 처리
      this.showResponseForm = false; // 폼 닫기
      // 필요한 경우 데이터 갱신 또는 알림 추가
    },
  },
};
</script>
