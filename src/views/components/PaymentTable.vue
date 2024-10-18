<template>
  <div
    class="card mb-4"
    style="width: 100%; max-width: 1900px; margin: 50px auto; padding: 0 15px"
  >
    <div class="card-header pb-0">
      <h6 class="fs-3">{{ title }}</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 table-container">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-center opacity-7"></th>
              <th class="text-center opacity-7">번호</th>
              <th class="opacity-7">결제자</th>
              <th class="text-center opacity-7">회원구분</th>
              <th class="text-center opacity-7">결제상태</th>
              <th class="text-center opacity-7">환불</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(customer, index) in customers" :key="customer.id">
              <!-- 사진 -->
              <td class="photo-cell">
                <img
                  :src="customer.image"
                  class="avatar"
                  :alt="customer.name"
                />
              </td>

              <!-- 번호 -->
              <td class="number-cell">
                <span class="text-sm font-weight-bold">{{ index + 1 }}</span>
              </td>

              <!-- 결제자 이름 -->
              <td class="name-cell">
                <h6 class="mb-0 text-m">{{ customer.name }}</h6>
              </td>

              <!-- 회원 구분 -->
              <td class="text-center">
                <span
                  class="badge"
                  :class="getMemberBadge(customer.memberType)"
                >
                  {{ customer.memberType }}
                </span>
              </td>

              <!-- 결제 상태 -->
              <td class="text-center">
                <span
                  class="text-lg"
                  :class="
                    customer.paymentStatus === '완료'
                      ? 'text-success'
                      : 'text-danger'
                  "
                >
                  {{ customer.paymentStatus }}
                </span>
              </td>

              <!-- 환불 버튼 -->
              <td class="text-center">
                <button
                  class="btn btn-danger btn-sm"
                  @click="confirmRefund(customer)"
                >
                  환불
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Payment Customer List",
    },
    customers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getMemberBadge(type) {
      return type === "회원" ? "badge-success" : "badge-secondary";
    },
    confirmRefund(customer) {
      const confirmed = confirm(
        `정말로 ${customer.name}님의 결제를 환불하시겠습니까?`
      );
      if (confirmed) {
        this.refundCustomer(customer);
      }
    },
    refundCustomer(customer) {
      // 결제 상태를 "취소됨"으로 변경
      customer.paymentStatus = "취소됨";
      console.log(
        `환불 처리: 고객 ID ${customer.id}, 새로운 결제 상태: ${customer.paymentStatus}`
      );
      // 추가적인 환불 처리 로직을 여기에 작성할 수 있습니다.
    },
  },
};
</script>

<style scoped>
/* 테이블 스크롤 */
.table-container {
  max-height: 600px;
  overflow-y: auto;
}

.table-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.table-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 아바타 이미지 */
.avatar {
  border-radius: 50%;
  width: 45px;
  height: 45px;
  object-fit: cover;
}

/* 셀 스타일 */
.photo-cell {
  padding: 0 8px;
  text-align: center;
  width: 50px;
}

.number-cell {
  text-align: center;
  width: 40px;
}

.name-cell {
  text-align: left;
  padding-left: 15px;
}

/* 뱃지 스타일 */
.badge {
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 1rem;
}

.badge-success {
  background-color: #2ecc71;
  color: white;
}

.badge-secondary {
  background-color: #95a5a6;
  color: white;
}

/* 버튼 스타일 */
.btn {
  padding: 6px 12px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger {
  background-color: #e74c3c;
  color: white;
  transition: background-color 0.3s;
}

.btn-danger:hover {
  background-color: #c0392b;
}
</style>
