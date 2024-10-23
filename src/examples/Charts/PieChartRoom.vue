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
      text: "객실별 매출",
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

    // 모던하고 세련된 그라데이션 설정
    const serviceGradient = ctx.createLinearGradient(0, 0, 0, 500);
    serviceGradient.addColorStop(0, "#3B82F6"); // 밝은 파랑
    serviceGradient.addColorStop(1, "#60A5FA"); // 연한 파랑

    const themeparkGradient = ctx.createLinearGradient(0, 0, 0, 500);
    themeparkGradient.addColorStop(0, "#10B981"); // 에메랄드
    themeparkGradient.addColorStop(1, "#34D399"); // 연한 에메랄드

    const roomGradient = ctx.createLinearGradient(0, 0, 0, 500);
    roomGradient.addColorStop(0, "#6366F1"); // 인디고
    roomGradient.addColorStop(1, "#818CF8"); // 연한 인디고

    new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["부가서비스", "테마파크", "객실"],
        datasets: [
          {
            label: "각 테마별 매출 비율",
            data: [360000, 460000, 1208000],
            backgroundColor: [serviceGradient, themeparkGradient, roomGradient],
          },
        ],
      },
      options: chartOptions,
      plugins: [backgroundColorPlugin],
    });
  }
});
</script>
