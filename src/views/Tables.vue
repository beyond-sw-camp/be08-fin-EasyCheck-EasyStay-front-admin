<template>
  <div class="py-4 container-fluid">
    <PaymentTable title="결제 고객 목록" :customers="paymentCustomers" />
  </div>
</template>

<script>
import PaymentTable from "./components/PaymentTable.vue";

export default {
  components: { PaymentTable },
  data() {
    return {
      paymentCustomers: [
        {
          id: 1,
          name: "김철수", // 결제 고객 이름
          memberType: "회원", // 회원/비회원 구분
          paymentStatus: "완료", // 결제 상태
          image: require("../assets/img/012.png"), // 프로필 사진
        },
        {
          id: 2,
          name: "이영희",
          memberType: "비회원",
          paymentStatus: "취소됨",
          image: require("../assets/img/012.png"),
        },
        {
          id: 3,
          name: "박민수",
          memberType: "회원",
          paymentStatus: "완료",
          image: require("../assets/img/012.png"),
        },
        {
          id: 4,
          name: "최지우",
          memberType: "회원",
          paymentStatus: "완료", // 진행 중 상태를 삭제하고 완료로 변경
          image: require("../assets/img/012.png"),
        },
        {
          id: 5,
          name: "이준호",
          memberType: "비회원",
          paymentStatus: "완료",
          image: require("../assets/img/012.png"),
        },
        {
          id: 6,
          name: "김민지",
          memberType: "회원",
          paymentStatus: "완료",
          image: require("../assets/img/012.png"),
        },
        {
          id: 7,
          name: "오세훈",
          memberType: "회원",
          paymentStatus: "취소됨",
          image: require("../assets/img/012.png"),
        },
        {
          id: 8,
          name: "한지민",
          memberType: "비회원",
          paymentStatus: "완료",
          image: require("../assets/img/012.png"),
        },
        {
          id: 9,
          name: "정해인",
          memberType: "회원",
          paymentStatus: "완료", // 진행 중 상태를 삭제하고 완료로 변경
          image: require("../assets/img/012.png"),
        },
        {
          id: 10,
          name: "송중기",
          memberType: "회원",
          paymentStatus: "완료",
          image: require("../assets/img/012.png"),
        },
      ],
    };
  },
};
</script>
