<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
// import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

const store = useStore();

onMounted(() => {
  store.state.isAbsolute = true;
  setNavPills();
  setTooltip();
});
onBeforeMount(() => {
  store.state.imageLayout = "profile-overview";
  store.state.showNavbar = false;
  store.state.showFooter = true;
  store.state.hideConfigButton = true;
  body.classList.add("profile-overview");
});
onBeforeUnmount(() => {
  store.state.isAbsolute = false;
  store.state.imageLayout = "default";
  store.state.showNavbar = true;
  store.state.showFooter = true;
  store.state.hideConfigButton = false;
  body.classList.remove("profile-overview");
});
</script>
<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background: linear-gradient(310deg, #5e72e4, #825ee4);
          margin-right: -24px;
          margin-left: -34%;
        "
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="card shadow-lg mt-n6">
        <div class="card-body p-3">
          <div class="row gx-4">
            <div class="col-auto">
              <div class="avatar avatar-xl position-relative">
                <img
                  src="../assets/img/002.png"
                  alt="profile_image"
                  class="shadow-sm w-100 border-radius-lg"
                />
              </div>
            </div>
            <div class="col-auto my-auto">
              <div class="h-100">
                <h5 class="mb-1">공지사항 등록</h5>
                <p class="mb-0 font-weight-bold text-sm">
                  리조트/호텔에 대한 공지사항을 등록
                </p>
              </div>
            </div>
            <div
              class="mx-auto mt-3 col-lg-4 col-md-10 my-sm-auto ms-sm-auto me-sm-0"
            >
              <div class="nav-wrapper position-relative end-0">
                <ul
                  class="p-1 bg-transparent nav nav-pills nav-fill"
                  role="tablist"
                >
                  <li class="nav-item">
                    <a
                      class="px-0 py-1 mb-0 nav-link"
                      data-bs-toggle="tab"
                      href="javascript:;"
                      role="tab"
                      aria-selected="false"
                    >
                      <argon-button
                        color="success"
                        size=""
                        class="ms-auto"
                        style="
                          padding: 15px 100px;
                          font-size: 20px;
                          margin-right: 5px;
                        "
                        >등록하기</argon-button
                      >
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">공지사항 등록</p>
              </div>
            </div>
            <div class="card-body">
              <p class="text-uppercase text-sm">제목</p>
              <div class="row mb-3">
                <div class="col-md-4">
                  <argon-input
                    type="text"
                    value="공지사항 제목을 입력하세요"
                    style="border-radius: 5px; padding: 10px"
                  />
                </div>
              </div>
              <hr class="horizontal dark" />
              <p class="text-uppercase text-sm">내용</p>
              <div class="row mb-3">
                <div class="col-md-12">
                  <textarea
                    class="form-control"
                    style="
                      resize: none;
                      height: 300px;
                      padding: 10px;
                      border-radius: 5px;
                    "
                    placeholder="공지사항 내용을 입력하세요"
                  ></textarea>
                </div>
              </div>
              <div class="row"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.text-uppercase {
  color: #5e72e4; /* 제목 색상 */
}

input[type="text"],
textarea {
  transition: all 0.3s; /* 부드러운 효과 */
}

input[type="text"]:focus,
textarea:focus {
  border-color: #5e72e4; /* 포커스 시 테두리 색상 변경 */
  box-shadow: 0 0 5px rgba(94, 114, 228, 0.5); /* 포커스 시 그림자 효과 */
}
</style>
