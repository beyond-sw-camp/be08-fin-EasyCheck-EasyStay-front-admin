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
      text: "부가서비스 매출",
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

    // 호텔 서비스에 어울리는 고급스러운 색상 그라데이션 설정
    const serviceGradient = ctx.createLinearGradient(0, 0, 0, 500);
    serviceGradient.addColorStop(0, "#8B4513"); // 브라운
    serviceGradient.addColorStop(1, "#A0522D"); // 연한 브라운

    const themeparkGradient = ctx.createLinearGradient(0, 0, 0, 500);
    themeparkGradient.addColorStop(0, "#C19A6B"); // 골든 브라운
    themeparkGradient.addColorStop(1, "#DEB887"); // 버르뉴드 우드

    const roomGradient = ctx.createLinearGradient(0, 0, 0, 500);
    roomGradient.addColorStop(0, "#CD853F"); // 페루
    roomGradient.addColorStop(1, "#DAA520"); // 골든로드

    const wineGradient = ctx.createLinearGradient(0, 0, 0, 500);
    wineGradient.addColorStop(0, "#8B0000"); // 다크 레드
    wineGradient.addColorStop(1, "#B22222"); // 파이어브릭

    new ChartJS(ctx, {
      type: "pie",
      data: {
        labels: ["부가서비스", "테마파크", "객실", "와인"],
        datasets: [
          {
            label: "각 테마별 매출 비율",
            data: [400000, 360000, 460000, 1208000],
            backgroundColor: [
              serviceGradient,
              themeparkGradient,
              roomGradient,
              wineGradient,
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
