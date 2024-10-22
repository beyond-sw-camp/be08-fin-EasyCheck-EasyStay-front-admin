<template>
  <div class="py-4 container-fluid">
    <ThemeParksTable title="테마파크 목록" :parks="themes" />
  </div>
</template>

<script>
import ThemeParksTable from "./components/ThemeParksTable.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { ThemeParksTable },
  computed: {
    ...mapState({
      themes: (state) => state.theme.themes, // Vuex 상태에서 dinings 가져오기
    }),
  },
  created() {
    this.getAllThemes(); // 컴포넌트 생성 시 다이닝 목록을 가져오는 액션 실행
  },
  methods: {
    ...mapActions("theme", ["getAllThemes"]), // Vuex 액션 연결
  },
  mounted() {
    // 공지사항을 가져오는 Vuex 액션 호출
    this.$store.dispatch("theme/getAllThemes");
  },
  // data() {
  //   return {
  //     themeParks: [
  //       {
  //         id: 1,
  //         name: "어드벤처 랜드",
  //         location: "서울특별시",
  //         openingDate: "2015-05-01",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 2,
  //         name: "판타지 왕국",
  //         location: "부산광역시",
  //         openingDate: "2018-06-15",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 3,
  //         name: "우주 테마파크",
  //         location: "제주특별자치도",
  //         openingDate: "2020-07-20",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 4,
  //         name: "수중 세계",
  //         location: "인천광역시",
  //         openingDate: "2017-03-30",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 5,
  //         name: "동물 왕국",
  //         location: "경기도",
  //         openingDate: "2019-08-10",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 6,
  //         name: "신비한 숲",
  //         location: "강원도",
  //         openingDate: "2021-12-05",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 7,
  //         name: "역사 박물관 테마파크",
  //         location: "대구광역시",
  //         openingDate: "2023-01-15",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 8,
  //         name: "스포츠 테마파크",
  //         location: "광주광역시",
  //         openingDate: "2022-05-01",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 9,
  //         name: "미래 도시",
  //         location: "세종특별자치시",
  //         openingDate: "2024-03-01",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //       {
  //         id: 10,
  //         name: "마법의 세계",
  //         location: "울산광역시",
  //         openingDate: "2016-11-10",
  //         image: require("../assets/img/005.png"), // 이미지 경로 수정
  //       },
  //     ],
  //   };
  // },
};
</script>
