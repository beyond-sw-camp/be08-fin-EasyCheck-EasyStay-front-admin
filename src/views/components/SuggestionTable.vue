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
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              ></th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                번호
              </th>
              <th
                class="text-secondary text-xxs font-weight-bolder opacity-7 ps-6"
              >
                제목
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                이메일
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                타입
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(park, index) in parks" :key="park.id">
              <!-- 사진 -->
              <td class="photo-cell">
                <img
                  :src="park.image"
                  class="avatar avatar-sm"
                  :alt="park.name"
                />
              </td>

              <!-- 번호 -->
              <td class="number-cell">
                <span class="text-sm font-weight-bold">{{ index + 1 }}</span>
              </td>

              <!-- 건의사항 제목 -->
              <td class="title-cell">
                <h6 class="mb-0 text-m">{{ park.title }}</h6>
              </td>

              <!-- 작성자 -->
              <td class="text-center">
                <p class="text-m text-secondary mb-0">{{ park.author }}</p>
              </td>

              <!-- 작성일 -->
              <td class="text-center">
                <span class="text-sm font-weight-bold">{{
                  park.submittedDate
                }}</span>
              </td>

              <!-- 버튼 -->
              <td class="text-center" colspan="2">
                <div class="button-group">
                  <button
                    class="btn btn-sm btn-warning-custom"
                    @click="onClickReplyButton(park)"
                  >
                    답변
                  </button>
                </div>
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
      default: "건의사항 목록",
    },
    parks: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    openResponseForm() {
      this.showResponseForm = true; // 폼 표시
    },
    onClickReplyButton(park) {
      this.$emit("open-response-form", park);
      this.$store.commit("suggestion/setSuggestionId", park.id);
    },
  },
};
</script>

<style scoped>
.table-container {
  max-height: 700px;
  overflow-y: auto;
}

/* 스크롤바 숨기기 */
.table-container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.table-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* 아바타 이미지 스타일 */
.avatar {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: cover;
}

/* 사진 셀 */
.photo-cell {
  padding: 0 8px;
  padding-left: 20px;
  text-align: center;
  width: 50px;
}

/* 번호 셀 */
.number-cell {
  text-align: center;
  width: 40px;
}

/* 제목 셀 */
.title-cell {
  padding-left: 64px;
  text-align: left; /* 중앙 정렬 추가 */
}

/* 버튼 그룹 정렬 */
.button-group {
  display: flex;
  gap: 8px;
  justify-content: center;
}

/* 버튼 스타일 */
button {
  padding: 8px 15px;
  font-size: 0.9rem;
}

/* 새로운 버튼 스타일 추가 */
.btn-warning-custom {
  background-color: #ffa500; /* 노랑주황 색상 */
  color: #fff; /* 글자 색상을 흰색으로 */
  border: none; /* 기본 테두리 제거 */
}

.btn-warning-custom:hover {
  background-color: #ff8c00; /* 호버 시 색상 변화 */
}
</style>
