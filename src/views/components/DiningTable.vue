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
                class="ztext-secondary text-xxs font-weight-bolder opacity-7 ps-6"
              >
                이름
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                위치
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                메뉴
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

              <!-- 테마파크 이름 -->
              <td class="title-cell">
                <h6 class="mb-0 text-m">{{ park.name }}</h6>
              </td>

              <!-- 위치 -->
              <td class="text-center">
                <p class="text-m text-secondary mb-0">
                  {{ park.location }}
                </p>
              </td>

              <!-- 개장일 -->
              <td class="text-center">
                <span class="text-sm font-weight-bold">{{
                  park.openingDate
                }}</span>
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
      default: "이벤트 목록",
    },
    parks: {
      type: Array,
      required: true,
      default: () => [],
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
</style>
