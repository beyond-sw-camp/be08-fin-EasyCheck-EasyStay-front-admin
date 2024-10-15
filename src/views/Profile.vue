<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
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
</script>
<template>
  <main>
    <div class="container-fluid">
      <div
        class="page-header min-height-300"
        style="
          background-image: linear-gradient(310deg, #5e72e4, #825ee4);
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
                <h5 class="mb-1">이벤트 등록</h5>
                <p class="mb-0 font-weight-bold text-sm">
                  리조트/호텔에 대한 이벤트를 등록
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
        <div class="col-md-8">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">이벤트 등록</p>
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >이름</label
                  >
                  <argon-input type="text" value="name" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >진행기간</label
                  >
                  <argon-input type="text" value="day" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >판매기간</label
                  >
                  <argon-input type="text" value="day" />
                </div>
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >소개</label
                  >
                  <argon-input type="text" value="introduce" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >이벤트 상세 제목</label
                  >
                  <argon-input type="text" value="Content" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >기간</label
                  >
                  <argon-input type="text" value="month" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >시간</label
                  >
                  <argon-input type="text" value="time" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >장소</label
                  >
                  <argon-input type="text" value="place" />
                </div>
                <div class="col-md-6">
                  <label for="example-text-input" class="form-control-label"
                    >예약 문의</label
                  >
                  <argon-input type="text" value="reservation" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <label for="example-text-input" class="form-control-label"
                    >주의사항</label
                  >
                  <argon-input type="text" value="warning" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <profile-card />
        </div>
      </div>
    </div>
  </main>
</template>
