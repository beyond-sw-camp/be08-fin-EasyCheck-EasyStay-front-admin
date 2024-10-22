<template>
  <div>
    <div v-if="showResponseForm" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>건의사항 답변</h2>
        <!-- 폼 전체에 대한 이벤트를 감지해 폼 제출 시 submitResponse 메소드가 호출됨. -->
        <form @submit.prevent="submitResponse">
          <div class="form-group">
            <label for="response">답변 내용:</label>
            <textarea
              id="response"
              v-model="response"
              rows="8"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: "",
    };
  },
  props: {
    showResponseForm: Boolean,
  },
  methods: {
    async submitResponse() {
      try {
        // API 요청을 통해 이메일 전송
        this.$store.dispatch("suggestion/reply", this.response);

        this.response = ""; // 입력 필드 초기화
        this.closeModal(); // 모달 닫기
      } catch (error) {
        console.error("이메일 전송 실패:", error);
        alert("답변 제출에 실패했습니다. 다시 시도해 주세요."); // 에러 메시지 출력
      }
    },
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* 모달 오버레이 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(6px);
}

/* 모달 콘텐츠 */
.modal-content {
  background: #fdfdfd;
  border-radius: 24px;
  padding: 40px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

/* 타이틀 */
h2 {
  margin-bottom: 30px;
  font-size: 2rem;
  color: #34495e;
  text-align: center;
  font-weight: 700;
  font-family: "Noto Sans KR", sans-serif;
}

/* 폼 그룹 */
.form-group {
  margin-bottom: 30px;
}

/* 레이블 */
label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.3rem;
  color: #34495e;
  font-weight: bold;
}

/* 텍스트 영역 */
.form-control {
  width: 100%;
  padding: 18px;
  border: 1px solid #d1d8e0;
  border-radius: 16px;
  font-size: 1.1rem;
  background-color: #f5f8fa;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease;
  resize: none;
}

.form-control:focus {
  border-color: #3498db;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.3);
}

/* 버튼 그룹 */
.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

/* 버튼 */
.btn {
  flex: 1;
  padding: 15px;
  font-size: 1.2rem;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
  font-family: "Noto Sans KR", sans-serif;
}

/* 등록 버튼 */
.btn-primary {
  background-color: #3498db;
  color: white;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.4);
}

.btn-primary:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

/* 취소 버튼 */
.btn-secondary {
  background-color: #95a5a6;
  color: white;
  box-shadow: 0 4px 12px rgba(149, 165, 166, 0.4);
}

.btn-secondary:hover {
  background-color: #7f8c8d;
  transform: scale(1.05);
}
</style>
