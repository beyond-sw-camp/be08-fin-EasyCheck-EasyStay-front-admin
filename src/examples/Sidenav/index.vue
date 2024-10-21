<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct-dark.png";
import logoWhite from "@/assets/img/logo-ct.png";

const store = useStore();

// layout 모듈에서 상태를 가져옵니다
const isRTL = computed(() => store.state.layout.isRTL);
const layout = computed(() => store.state.layout.layout);
const sidebarType = computed(() => store.state.layout.sidebarType);
const darkMode = computed(() => store.state.layout.darkMode);
</script>

<template>
  <!-- 요 div가 dashboard 배경색 -->
  <!-- :class="`${darkMode ? 'bg-transparent' : 'bg-primary'}` 여기서 배경색 바꿀 수 있음 -->
  <div
    v-show="layout === 'default'"
    class="min-height-300 position-absolute w-100"
    :class="`${darkMode ? 'bg-transparent' : 'test'}`"
  />

  <aside
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="`${isRTL ? 'me-3 rotate-caret fixed-end' : 'fixed-start ms-3'}    
      ${layout === 'landing' ? 'bg-transparent shadow-none' : ' '} ${sidebarType}`"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <router-link class="m-0 navbar-brand" to="/">
        <img
          :src="darkMode || sidebarType === 'bg-default' ? logoWhite : logo"
          class="navbar-brand-img"
          alt="main_logo"
        />
      </router-link>
    </div>

    <sidenav-list />
  </aside>
</template>

<!-- <style scoped lang="scss">
@import "../../assets/scss/argon-dashboard/variables";
.gradient-bg-primary {
  background: linear-gradient(
    310deg,
    $primary-gradient,
    $primary-gradient-state
  );
}
</style> -->
