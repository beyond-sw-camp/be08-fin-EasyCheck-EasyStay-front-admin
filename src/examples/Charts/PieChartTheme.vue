<template>
  <div
    style="
      max-width: 700px;
      height: 590px;
      background-color: white;
      padding: 50px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    "
  >
    <canvas ref="chartCanvas" style="max-height: 700px"></canvas>
  </div>
</template>
<script setup>
import { ref, onMounted, nextTick } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js/auto";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

// 차트 옵션 설정
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "테마파크 매출",
      font: {
        size: 24, // 글씨 크기를 24px로 설정
      },
    },
  },
  layout: {
    padding: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
  },
};

// 차트 배경색을 하얀색으로 설정하는 beforeDraw 커스텀 훅 추가
const backgroundColorPlugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white"; // 배경색을 하얀색으로 설정
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

// DOM이 렌더링된 후에 차트를 그리기 위한 ref와 onMounted
const chartCanvas = ref(null);

onMounted(async () => {
  await nextTick(); // DOM이 완전히 렌더링된 후 차트 생성
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    // 벚꽃색 계열 그라데이션 설정
    const cherryBlossomGradient1 = ctx.createLinearGradient(0, 0, 0, 500);
    cherryBlossomGradient1.addColorStop(0, "#FFB2C2"); // 연한 벚꽃색
    cherryBlossomGradient1.addColorStop(1, "#FF6F91"); // 진한 벚꽃색

    const cherryBlossomGradient2 = ctx.createLinearGradient(0, 0, 0, 500);
    cherryBlossomGradient2.addColorStop(0, "#F8D3E4"); // 아주 연한 핑크
    cherryBlossomGradient2.addColorStop(1, "#F28E9B"); // 부드러운 핑크

    const cherryBlossomGradient3 = ctx.createLinearGradient(0, 0, 0, 500);
    cherryBlossomGradient3.addColorStop(0, "#FF69B4"); // 핫 핑크
    cherryBlossomGradient3.addColorStop(1, "#C71585"); // 미디엄 보라

    const cherryBlossomGradient4 = ctx.createLinearGradient(0, 0, 0, 500);
    cherryBlossomGradient4.addColorStop(0, "#FF8DAA"); // 중간 핑크
    cherryBlossomGradient4.addColorStop(1, "#FF3E5B"); // 강렬한 핑크
    new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["디럭스", "스위트", "로얄", "플래티넘"],
        datasets: [
          {
            label: "각 테마별 매출 비율",
            data: [288000, 360000, 460000, 1208000],
            backgroundColor: [
              cherryBlossomGradient1, // 첫 번째 벚꽃색 그라데이션
              cherryBlossomGradient2, // 두 번째 벚꽃색 그라데이션
              cherryBlossomGradient3, // 세 번째 벚꽃색 그라데이션
              cherryBlossomGradient4, // 네 번째 벚꽃색 그라데이션
            ],
          },
        ],
      },
      options: chartOptions,
      plugins: [backgroundColorPlugin],
    });
  }
});
</script>
