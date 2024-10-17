<template>
  <div>
    <!-- 모달 창 -->
    <div v-if="showResponseForm" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>건의사항 답변</h2>
        <form @submit.prevent="submitResponse">
          <div class="form-group">
            <label for="response">답변 내용:</label>
            <textarea
              id="response"
              v-model="response"
              rows="4"
              required
              class="form-control"
              placeholder="답변을 입력하세요..."
            ></textarea>
          </div>
          <div class="button-group">
            <button type="submit" class="btn btn-primary">등록</button>
            <button type="button" class="btn btn-secondary" @click="closeModal">
              취소
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="button-group">
      <button
        class="btn btn-sm btn-warning-custom"
        @click="showResponseForm = true"
      >
        답변
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: "",
      showResponseForm: false, // 모달 표시 상태
    };
  },
  methods: {
    submitResponse() {
      console.log("답변 제출:", this.response);
      this.$emit("response-submitted");
      this.closeModal(); // 모달 닫기
    },
    closeModal() {
      this.showResponseForm = false; // 모달 닫기
    },
  },
};
</script>

<style scoped>
/* 모달 오버레이 */
.modal-overlay {
  position: fixed; /* 전체 화면에 고정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex; /* 중앙 정렬을 위해 플렉스 박스 사용 */
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  z-index: 1000; /* 가장 위에 표시 */
}

/* 모달 콘텐츠 */
.modal-content {
  background-color: #fff; /* 흰색 배경 */
  border-radius: 8px; /* 모서리 둥글게 */
  padding: 20px; /* 패딩 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  width: 90%; /* 너비 설정 */
  max-width: 500px; /* 최대 너비 */
}

/* 나머지 스타일은 이전과 동일 */
h2 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-control:focus {
  border-color: #007bff;
  outline: none;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.btn {
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
  transition: background-color 0.3s;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>
