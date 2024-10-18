<template>
  <div class="py-4 container-fluid">
    <EventTable title="이벤트 목록" :parks="Event" />
  </div>
</template>

<script>
import EventTable from "./components/EventTable.vue";

export default {
  components: { EventTable },
  data() {
    return {
      Event: [
        {
          id: 1,
          name: "여름 음악 축제",
          location: "서울특별시",
          openingDate: "2024-07-01 ~ 2024-07-31",
          image: require("../assets/img/010.png"),
        },
        {
          id: 2,
          name: "가을 만화 전시회",
          location: "부산광역시",
          openingDate: "2024-09-15 ~ 2024-10-15",
          image: require("../assets/img/010.png"),
        },
        {
          id: 3,
          name: "겨울 빛의 축제",
          location: "제주특별자치도",
          openingDate: "2024-12-01 ~ 2025-01-05",
          image: require("../assets/img/010.png"),
        },
        {
          id: 4,
          name: "스포츠 경기 대회",
          location: "인천광역시",
          openingDate: "2024-08-20 ~ 2024-08-25",
          image: require("../assets/img/010.png"),
        },
        {
          id: 5,
          name: "세계 음식 페스티벌",
          location: "경기도",
          openingDate: "2024-10-10 ~ 2024-10-20",
          image: require("../assets/img/010.png"),
        },
        {
          id: 6,
          name: "청소년 문화 축제",
          location: "강원도",
          openingDate: "2024-11-01 ~ 2024-11-05",
          image: require("../assets/img/010.png"),
        },
        {
          id: 7,
          name: "전국 드론 대회",
          location: "대구광역시",
          openingDate: "2024-09-01 ~ 2024-09-03",
          image: require("../assets/img/010.png"),
        },
        {
          id: 8,
          name: "디지털 아트 전시회",
          location: "광주광역시",
          openingDate: "2024-05-01 ~ 2024-05-15",
          image: require("../assets/img/010.png"),
        },
        {
          id: 9,
          name: "지속 가능한 발전 포럼",
          location: "세종특별자치시",
          openingDate: "2024-06-10 ~ 2024-06-12",
          image: require("../assets/img/010.png"),
        },
        {
          id: 10,
          name: "마법과 환상의 세계",
          location: "울산광역시",
          openingDate: "2024-08-01 ~ 2024-08-15",
          image: require("../assets/img/010.png"),
        },
      ],
    };
  },
};
</script>
