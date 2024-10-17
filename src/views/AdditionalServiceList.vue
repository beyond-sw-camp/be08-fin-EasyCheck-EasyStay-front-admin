<template>
  <div class="py-4 container-fluid">
    <AdditionalServiceTable title="부가서비스 목록" :parks="Event" />
  </div>
</template>

<script>
import AdditionalServiceTable from "./components/AdditionalServiceTable.vue";

export default {
  components: { AdditionalServiceTable },
  data() {
    return {
      Event: [
        {
          id: 1,
          name: "프리미엄 와인 세트",
          location: "고급 와인과 치즈 플레이트 제공",
          openingDate: "₩120,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 2,
          name: "웰컴 과일 바구니",
          location: "제철 과일로 구성된 환영 바구니",
          openingDate: "₩50,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 3,
          name: "객실 장미 꽃다발",
          location: "객실에 장미 20송이 세팅",
          openingDate: "₩80,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 4,
          name: "로맨틱 캔들 세트",
          location: "향초와 장식 캔들 포함",
          openingDate: "₩40,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 5,
          name: "마사지 서비스",
          location: "1시간 전신 마사지 제공",
          openingDate: "₩150,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 6,
          name: "조식 룸서비스",
          location: "룸 내 조식 세트 제공",
          openingDate: "₩35,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 7,
          name: "럭셔리 초콜릿 세트",
          location: "수제 초콜릿과 트러플 포함",
          openingDate: "₩70,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 8,
          name: "기념일 케이크",
          location: "커스터마이즈 가능한 케이크 제공",
          openingDate: "₩60,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 9,
          name: "공항 픽업 서비스",
          location: "공항-리조트 간 편리한 셔틀 제공",
          openingDate: "₩100,000",
          image: require("../assets/img/002.png"),
        },
        {
          id: 10,
          name: "피크닉 세트",
          location: "담요, 샌드위치, 음료 포함",
          openingDate: "₩90,000",
          image: require("../assets/img/002.png"),
        },
      ],
    };
  },
};
</script>
