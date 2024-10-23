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
        size: 24,
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

const backgroundColorPlugin = {
  id: "customCanvasBackgroundColor",
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};

const chartCanvas = ref(null);

onMounted(async () => {
  await nextTick();
  if (chartCanvas.value) {
    const ctx = chartCanvas.value.getContext("2d");

    // 테마파크 분위기에 맞는 밝고 경쾌한 색상 그라데이션
    const deluxeGradient = ctx.createLinearGradient(0, 0, 0, 500);
    deluxeGradient.addColorStop(0, "#FFD700"); // 밝은 골드
    deluxeGradient.addColorStop(1, "#FFA500"); // 오렌지

    const suiteGradient = ctx.createLinearGradient(0, 0, 0, 500);
    suiteGradient.addColorStop(0, "#FF4500"); // 선명한 레드 오렌지
    suiteGradient.addColorStop(1, "#FF6347"); // 토마토 레드

    const royalGradient = ctx.createLinearGradient(0, 0, 0, 500);
    royalGradient.addColorStop(0, "#32CD32"); // 라임 그린
    royalGradient.addColorStop(1, "#98FB98"); // 연한 그린

    const platinumGradient = ctx.createLinearGradient(0, 0, 0, 500);
    platinumGradient.addColorStop(0, "#1E90FF"); // 밝은 블루
    platinumGradient.addColorStop(1, "#00BFFF"); // 딥스카이블루

    new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["디럭스", "스위트", "로얄", "플래티넘"],
        datasets: [
          {
            label: "각 테마별 매출 비율",
            data: [288000, 360000, 460000, 1208000],
            backgroundColor: [
              deluxeGradient,
              suiteGradient,
              royalGradient,
              platinumGradient,
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
