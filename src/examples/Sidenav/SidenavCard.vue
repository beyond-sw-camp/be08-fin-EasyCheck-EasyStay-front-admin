<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const isRTL = computed(() => store.state.isRTL);
const layout = computed(() => store.state.layout);
defineProps({
  card: {
    type: Object,
    required: true,
    title: String,
    description: String,
    links: {
      type: Array,
      label: String,
      route: String,
      color: String,
    },
  },
});
</script>
<template>
  <div
    v-show="layout !== 'landing'"
    class="card card-plain shadow-none"
    id="sidenavCard"
  >
    <!-- 사이드메뉴바 밑 쪽 그림 -->
    <div class="p-3 card-body text-center w-100 pt-0">
      <img
        class="w-50 mx-auto"
        src="@/assets/img/illustrations/icon-documentation.svg"
        alt="sidebar_illustration"
      />

      <h6 v-if="isRTL" class="mb-0 text-dark up">تحتاج مساعدة ؟</h6>

      <!-- 그림 밑 글씨 -->
      <h6 v-else class="mb-0 text-dark up">도움이 필요하십니까?</h6>

      <p v-if="isRTL" class="text-xs font-weight-bold">
        يرجى التحقق من مستنداتنا
      </p>

      <!-- 글씨 밑 작은 글씨 -->
      <p v-else class="text-xs font-weight-bold">뭘 도와드릴깝쇼</p>
    </div>

    <!-- 아랍어 버전의 메뉴바 -->
    <a
      v-if="isRTL"
      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
      target="_blank"
      class="mb-3 btn btn-dark btn-sm w-100"
    >
      توثيق
    </a>
    <!-- 그림과 글씨 밑 버튼 :  링크로 이동함 .-->
    <a
      v-else
      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
      target="_blank"
      class="mb-3 btn btn-dark btn-sm w-100"
    >
      버튼 1
    </a>

    <!-- 아랍어 버전의 메뉴바 -->
    <a
      v-if="isRTL"
      href="https://www.creative-tim.com/product/vue-argon-dashboard-pro"
      target="_blank"
      class="mb-3 btn btn-success btn-sm w-100"
    >
      التطور للاحترافية
    </a>
    <!-- 버튼 클릭 시 링크 이동 -->
    <a
      v-else
      href="https://www.creative-tim.com/product/vue-argon-dashboard-pro"
      target="_blank"
      class="mb-3 btn btn-success btn-sm w-100"
    >
      버튼 2
    </a>
  </div>
</template>
