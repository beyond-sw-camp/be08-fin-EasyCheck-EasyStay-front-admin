<template>
  <div class="card card-profile">
    <!-- 사진 Carousel -->
    <div id="photoCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="(photo, index) in photoList"
          :key="index"
          class="carousel-item"
          :class="{ active: index === 0 }"
        >
          <img :src="photo.url" class="d-block w-100" alt="Uploaded Photo" />
        </div>
      </div>

      <!-- 이전/다음 버튼 -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#photoCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#photoCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- 파일명 리스트 및 사진 등록 -->
    <div class="card-body pt-0">
      <div class="text-center mt-4">
        <h5>사진 등록</h5>

        <!-- 파일명 리스트 -->
        <ul class="list-group my-3">
          <li
            v-for="(photo, index) in photoList"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ photo.name }}
            <button class="btn btn-sm btn-danger" @click="removeImage(index)">
              삭제
            </button>
          </li>
        </ul>

        <!-- 파일 업로드 및 등록 버튼 -->
        <input
          type="file"
          @change="handleImageUpload"
          class="form-control my-3"
        />
        <button class="styled-button" @click="registerImage">
          <i class="ni ni-cloud-upload me-2"></i> 사진올리기
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 상태 관리
const photoList = ref([]); // Carousel에 표시할 사진 리스트
const tempPhoto = ref(null); // 임시 저장된 사진 (등록 전)
const tempFileName = ref(""); // 임시 파일명 저장

// 파일 업로드 핸들러
function handleImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      tempPhoto.value = e.target.result;
      tempFileName.value = file.name;
    };
    reader.readAsDataURL(file);
  }
}

// 사진 등록 핸들러
function registerImage() {
  if (tempPhoto.value && tempFileName.value) {
    photoList.value.push({ url: tempPhoto.value, name: tempFileName.value });
    tempPhoto.value = null;
    tempFileName.value = "";
  } else {
    alert("사진을 먼저 선택해주세요.");
  }
}

// 사진 삭제 핸들러
function removeImage(index) {
  photoList.value.splice(index, 1);
}
</script>

<style scoped>
/* 버튼 스타일 */
.styled-button {
  background: #2dce89;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
}

.styled-button i {
  font-size: 22px;
  margin-right: 8px;
}

.styled-button:hover {
  background: #24b56a;
  transform: scale(1.05);
}

/* Carousel 이미지 스타일 */
.carousel-inner img {
  height: 300px;
  object-fit: cover;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
  border-radius: 50%;
}

.list-group-item {
  font-size: 14px;
}
</style>
