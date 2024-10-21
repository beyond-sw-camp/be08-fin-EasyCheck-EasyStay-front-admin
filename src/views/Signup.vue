<script setup>
import { onBeforeUnmount, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import carouselImage from "@/assets/img/carousel-1.jpg";

const body = document.getElementsByTagName("body")[0];
const store = useStore();
const router = useRouter();

onBeforeMount(() => {
  store.commit("layout/setHideConfigButton", true);
  store.commit("layout/setShowNavbar", false);
  store.commit("layout/setShowSidenav", false);
  store.commit("layout/setShowFooter", false);
  body.classList.remove("bg-gray-100");
});

onBeforeUnmount(() => {
  store.commit("layout/setHideConfigButton", false);
  store.commit("layout/setShowNavbar", true);
  store.commit("layout/setShowSidenav", true);
  store.commit("layout/setShowFooter", true);
  body.classList.add("bg-gray-100");
});

// 회원가입 함수 정의
const handleSignup = async () => {
  try {
    // 여기에 회원가입 처리 로직 추가
    // 예: await store.dispatch('auth/signup', { name, email, password });

    // 회원가입 성공 시 로그인 페이지로 이동
    router.push("/signin");
  } catch (error) {
    console.error("회원가입 실패:", error);
    // 에러 처리 로직 추가
  }
};
</script>

<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <div class="row">
            <div
              class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0"
            >
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <img
                    src="@/assets/img/013.png"
                    alt="로고"
                    style="width: 80px; height: auto; margin-bottom: 10px"
                  />
                  <h4 class="font-weight-bolder" style="font-size: 35px">
                    회원가입
                  </h4>
                  <p class="mb-0" style="font-size: 20px">
                    Easy Stay 관리자 회원가입
                  </p>
                </div>
                <div class="card-body">
                  <form role="form" @submit.prevent="handleSignup">
                    <div class="mb-4">
                      <ArgonInput
                        id="name"
                        type="text"
                        placeholder="이름"
                        name="name"
                        size="lg"
                        style="font-size: 28px; padding: 10px"
                      />
                    </div>
                    <div class="mb-4">
                      <ArgonInput
                        id="email"
                        type="email"
                        placeholder="이메일"
                        name="email"
                        size="lg"
                        style="font-size: 28px; padding: 10px"
                      />
                    </div>
                    <div class="mb-4">
                      <ArgonInput
                        id="password"
                        type="password"
                        placeholder="비밀번호"
                        name="password"
                        size="lg"
                        style="font-size: 28px; padding: 10px"
                      />
                    </div>

                    <div class="text-center">
                      <ArgonButton
                        class="mt-4"
                        variant="gradient"
                        style="
                          background: linear-gradient(
                            to right,
                            #ff7e5f,
                            #feb47b
                          );
                          font-size: 24px;
                          padding: 16px;
                        "
                        fullWidth
                        size="lg"
                      >
                        회원가입
                      </ArgonButton>
                    </div>
                  </form>
                </div>
                <div class="px-1 pt-0 text-center card-footer px-lg-2">
                  <a
                    href="javascript:;"
                    class="font-weight-bold"
                    style="font-size: 20px; color: #ff7e5f"
                    @click="() => router.push('/signin')"
                  >
                    로그인
                  </a>
                </div>
              </div>
            </div>
            <div
              class="top-0 my-auto text-center col-6 d-lg-flex d-none h-100 pe-0 position-absolute end-0 justify-content-center flex-column"
            >
              <div
                class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                :style="{
                  backgroundImage: `url(${carouselImage})`,
                  backgroundSize: 'cover',
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
