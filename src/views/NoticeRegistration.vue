<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
// import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";

const body = document.getElementsByTagName("body")[0];

const store = useStore();
const router = useRouter();

// const notices = computed(() => store.state.notices);

const title = ref(""); // 공지사항 제목
const content = ref(""); // 공지사항 내용

onMounted(() => {
  store.state.isAbsolute = true;
  store.dispatch("notice/getAllNotices"); // 공지사항 목록 가져오기
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

// 공지사항 등록 함수 정의
const handlecreateNotice = async () => {
  try {
    console.log("요청 본문:", {
      accommodationId: 1,
      title: title.value,
      content: content.value,
    });
    await store.dispatch("notice/createNotice", {
      accommodationId: 1,
      title: title.value,
      content: content.value,
    });
    // auth.js의 actions에 정의된 login 함수를 호출한다.
    // await store.dispatch("createNotice", {
    //   title: title.value,
    //   content: content.value,
    // });
    // 등록된 공지사항을 notices 배열에 추가
    // if (response && response.data) {
    //   store.commit("addNotice", {
    //     id: notices.value.length + 1,
    //     department: "작성자 이름",
    //     title: response.data.title,
    //     employed: new Date().toLocaleDateString(),
    //     image: require("../assets/img/002.png"),
    //   });
    // }
    // 리스트 페이지로 이동
    router.push("/noticeslist");
  } catch (error) {
    console.error("등록 실패:", error);
    // 여기에 에러 메시지를 표시하는 로직을 추가할 수 있습니다
    alert("등록에 실패했습니다. 다시 시도해주세요.");
  }
};
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
                        @click="handlecreateNotice"
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
                    v-model="title"
                    placeholder="공지사항 제목을 입력하세요"
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
                    v-model="content"
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
