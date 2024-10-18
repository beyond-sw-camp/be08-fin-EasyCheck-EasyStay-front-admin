<template>
  <div class="py-4 container-fluid">
    <DiningTable title="다이닝 목록" :parks="Event" />
  </div>
</template>

<script>
import DiningTable from "./components/DiningTable.vue";

export default {
  components: { DiningTable },
  data() {
    return {
      Event: [
        {
          id: 1,
          name: "프렌치 레스토랑 '라벨라'",
          location: "스테이크, 와인, 디저트",
          openingDate: "12:00 ~ 22:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 2,
          name: "한식당 '정갈'",
          location: "비빔밥, 불고기, 된장찌개",
          openingDate: "11:00 ~ 21:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 3,
          name: "이탈리안 레스토랑 '아모레'",
          location: "파스타, 피자, 티라미수",
          openingDate: "12:00 ~ 23:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 4,
          name: "디저트 카페 '스위트룸'",
          location: "케이크, 커피, 아이스크림",
          openingDate: "10:00 ~ 22:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 5,
          name: "바 & 라운지 '블루문'",
          location: "칵테일, 와인, 간단한 안주",
          openingDate: "18:00 ~ 02:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 6,
          name: "일식당 '하나비'",
          location: "초밥, 사시미, 텐동",
          openingDate: "11:30 ~ 21:30",
          image: require("../assets/img/006.png"),
        },
        {
          id: 7,
          name: "뷔페 레스토랑 '해밀턴'",
          location: "한식, 중식, 양식 뷔페",
          openingDate: "07:00 ~ 10:00, 12:00 ~ 14:30, 18:00 ~ 21:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 8,
          name: "수영장 바 '오아시스'",
          location: "과일 주스, 샌드위치, 맥주",
          openingDate: "09:00 ~ 19:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 9,
          name: "베이커리 '브레드가든'",
          location: "크로아상, 바게트, 샌드위치",
          openingDate: "08:00 ~ 20:00",
          image: require("../assets/img/006.png"),
        },
        {
          id: 10,
          name: "테라스 레스토랑 '썬샤인'",
          location: "바비큐, 그릴 요리, 샐러드",
          openingDate: "17:00 ~ 23:00",
          image: require("../assets/img/006.png"),
        },
      ],
    };
  },
};
</script>
