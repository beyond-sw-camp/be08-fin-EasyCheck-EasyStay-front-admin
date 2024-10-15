<script setup>
import { useStore } from "vuex";
const store = useStore();
</script>
<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, made with
            <i class="fa fa-star"></i> by
            <a
              href="https://www.creative-tim.com"
              class="font-weight-bold"
              target="_blank"
              >Easy Check</a
            >
            for a better web.
          </div>
        </div>
        <div class="col-lg-6">
          <ul
            class="nav nav-footer justify-content-center justify-content-lg-end"
          >
            <li class="nav-item">
              <a
                href="https://github.com/yongun2"
                class="nav-link text-muted"
                target="_blank"
                >계용운</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/hoyeon96"
                class="nav-link text-muted"
                target="_blank"
                >윤호연</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/limjihoon99"
                class="nav-link text-muted"
                target="_blank"
                >임지훈</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/NAHYEON0713"
                class="nav-link pe-0 text-muted"
                target="_blank"
                >김나현</a
              >
            </li>
            <li class="nav-item">
              <a
                href="https://github.com/jeongjinjoo"
                class="nav-link pe-0 text-muted"
                target="_blank"
                >정진주</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
