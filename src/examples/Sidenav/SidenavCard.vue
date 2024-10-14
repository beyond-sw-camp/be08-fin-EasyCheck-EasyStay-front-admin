<script setup>
// import { computed } from "vue";
// import { useStore } from "vuex";
// const store = useStore();

// const isRTL = computed(() => store.state.isRTL);
// const layout = computed(() => store.state.layout);
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
    <!-- <div class="p-3 card-body text-center w-100 pt-0">
      <h6 v-if="isRTL" class="mb-0 text-dark up">تحتاج مساعدة ؟</h6>

      <p v-if="isRTL" class="text-xs font-weight-bold">
        يرجى التحقق من مستنداتنا
      </p>
    </div> -->

    <!-- 아랍어 버전의 메뉴바 -->
    <!-- <a
      v-if="isRTL"
      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
      target="_blank"
      class="mb-3 btn btn-dark btn-sm w-100"
    >
      توثيق
    </a> -->
    <!-- 아랍어 버전의 메뉴바 -->
    <!-- <a
      v-if="isRTL"
      href="https://www.creative-tim.com/product/vue-argon-dashboard-pro"
      target="_blank"
      class="mb-3 btn btn-success btn-sm w-100"
    >
      التطور للاحترافية
    </a> -->
    <!-- 버튼 클릭 시 링크 이동 -->
  </div>
</template>
