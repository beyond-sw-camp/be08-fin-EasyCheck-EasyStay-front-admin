<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import ProfileCard from "./components/ProfileCard.vue";
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

// 각 카드에 대한 사진 리스트 관리
const photoList1 = ref([]);
const photoList2 = ref([]);

// 사진 리스트 업데이트 핸들러
function updatePhotoList1(newPhoto, index) {
  if (newPhoto) {
    photoList1.value.push(newPhoto);
  } else if (index !== undefined) {
    photoList1.value.splice(index, 1);
  }
}

function updatePhotoList2(newPhoto, index) {
  if (newPhoto) {
    photoList2.value.push(newPhoto);
  } else if (index !== undefined) {
    photoList2.value.splice(index, 1);
  }
}
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
                <h5 class="mb-1">테마파크 등록</h5>
                <p class="mb-0 font-weight-bold text-sm">
                  리조트/호텔에 대한 테마파크를 등록
                </p>
              </div>
            </div>
            <div
              class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
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
                      aria-selected="true"
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
        <div class="col-md-6">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">테마파크 등록</p>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >시설 정보</label
                  >
                  <argon-input type="text" value="lucky.jesse" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >이용 기준</label
                  >
                  <textarea
                    class="form-control"
                    style="
                      resize: none;
                      height: 400px;
                      padding: 10px;
                      border-radius: 5px;
                    "
                    placeholder="이용기준을 입력하세요"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid py-4 col-md-6">
          <div class="row">
            <h5 class="mb-3">사진 등록</h5>
            <!-- 사진 등록 폼 1 -->
            <div class="col-md-6 mb-4">
              <profile-card
                key="profilel-card-1"
                :photoList="photoList1"
                :onPhotoChange="updatePhotoList1"
                :cardId="1"
              />
            </div>

            <!-- 사진 등록 폼 2 -->
            <div class="col-md-6 mb-4">
              <profile-card
                key="profile-card-2"
                :photoList="photoList2"
                :onPhotoChange="updatePhotoList2"
                :cardId="2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
