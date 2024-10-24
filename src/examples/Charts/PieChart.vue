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

// 차트 데이터를 설정
// const chartData = {
//   labels: ["디럭스", "스위트", "로얄", "플래티넘"],
//   datasets: [
//     {
//       label: "객실 매출 비율",
//       data: [288000, 360000, 460000, 1208000],
//       backgroundColor: ["#E53935", "#1E88E5", "#FDD835", "#00897B"],
//     },
//   ],
// };

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
      text: "각 테마별 매출 비율",
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

    // 그라데이션 색상 설정

    // 나뭇잎 초록색 계열 그라데이션 설정
    const leafGradient1 = ctx.createLinearGradient(0, 0, 0, 500);
    leafGradient1.addColorStop(0, "#A8D5BA"); // 연한 초록색
    leafGradient1.addColorStop(1, "#4BB543"); // 진한 초록색

    const leafGradient2 = ctx.createLinearGradient(0, 0, 0, 500);
    leafGradient2.addColorStop(0, "#C1E1C1"); // 밝은 연두색
    leafGradient2.addColorStop(1, "#3B8A3A"); // 중간 초록색

    const leafGradient3 = ctx.createLinearGradient(0, 0, 0, 500);
    leafGradient3.addColorStop(0, "#E3F8E3"); // 아주 연한 초록색
    leafGradient3.addColorStop(1, "#007A33"); // 깊은 초록색

    new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["부가서비스", "테마파크", "객실"],
        datasets: [
          {
            label: "각 테마별 매출 비율",
            data: [360000, 460000, 1208000],
            backgroundColor: [
              //   deluxeGradient,
              leafGradient1, // 첫 번째 나뭇잎 초록색 그라데이션
              leafGradient2, // 두 번째 나뭇잎 초록색 그라데이션
              leafGradient3, // 세 번째 나뭇잎 초록색 그라데이션
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
