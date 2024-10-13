<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    default: "300",
  },
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  chart: {
    type: Object,
    required: true,
    labels: Array,
    datasets: {
      type: Array,
      label: String,
      data: Array,
    },
  },
});

onMounted(() => {
  var gradientLineChart = document.getElementById(props.id).getContext("2d");

  var gradientStroke1 = gradientLineChart.createLinearGradient(0, 230, 0, 50);

  // 첫 번째 그래디언트를 빨간색 계열로 변경
  gradientStroke1.addColorStop(1, "rgba(255,99,132,0.2)"); // 연한 빨간색
  gradientStroke1.addColorStop(0.2, "rgba(255,99,132,0.0)"); // 투명한 빨간색
  gradientStroke1.addColorStop(0, "rgba(255,99,132,0)"); // 투명한 빨간색

  // 두 번째 그래디언트를 빨간색 계열로 변경
  var gradientStroke2 = gradientLineChart.createLinearGradient(0, 230, 0, 50);

  gradientStroke2.addColorStop(1, "rgba(255,0,0,0.2)"); // 진한 빨간색
  gradientStroke2.addColorStop(0.2, "rgba(255,0,0,0.0)"); // 투명한 진한 빨간색
  gradientStroke2.addColorStop(0, "rgba(255,0,0,0)"); // 투명한 진한 빨간색

  let chartStatus = Chart.getChart(props.id);
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }
  // props를 통해 데이터를 받아와 차트를 렌더링하고, 사용자가 원하는 데이터셋에 따라 차트를 그리는 구조
  if (props.chart.datasets.length == 2) {
    new Chart(gradientLineChart, {
      type: "line",
      data: {
        labels: props.chart.labels,
        datasets: [
          {
            label: props.chart.datasets[0].label,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#4BB543 ",
            backgroundColor: gradientStroke1,
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            fill: true,
            data: props.chart.datasets[0].data,
            maxBarThickness: 6,
          },
          {
            label: props.chart.datasets[1].label,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#3A416F",
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            backgroundColor: gradientStroke2,
            fill: true,
            data: props.chart.datasets[1].data,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#fbfbfb",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#ccc",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  } else if (props.chart.datasets.length == 1) {
    new Chart(gradientLineChart, {
      type: "line",
      data: {
        labels: props.chart.labels,
        datasets: [
          {
            label: props.chart.datasets[0].label,
            tension: 0.4,
            borderWidth: 0,
            pointRadius: 0,
            borderColor: "#ef4d4d",
            backgroundColor: gradientStroke1,
            // eslint-disable-next-line no-dupe-keys
            borderWidth: 3,
            fill: true,
            data: props.chart.datasets[0].data,
            maxBarThickness: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        interaction: {
          intersect: false,
          mode: "index",
        },
        scales: {
          y: {
            grid: {
              drawBorder: false,
              display: true,
              drawOnChartArea: true,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              padding: 10,
              color: "#fbfbfb",
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
          x: {
            grid: {
              drawBorder: false,
              display: false,
              drawOnChartArea: false,
              drawTicks: false,
              borderDash: [5, 5],
            },
            ticks: {
              display: true,
              color: "#ccc",
              padding: 20,
              font: {
                size: 11,
                family: "Open Sans",
                style: "normal",
                lineHeight: 2,
              },
            },
          },
        },
      },
    });
  }
});
</script>
<template>
  <div class="card z-index-2">
    <div class="pb-0 card-header mb-0">
      <h6>{{ props.title }}</h6>
      <!--  eslint-disable-next-line vue/no-v-html -->
      <p v-if="props.description" class="text-sm" v-html="props.description" />
    </div>
    <div class="p-3 card-body">
      <div class="chart">
        <canvas
          :id="props.id"
          class="chart-canvas"
          :height="props.height"
        ></canvas>
      </div>
    </div>
  </div>
</template>
