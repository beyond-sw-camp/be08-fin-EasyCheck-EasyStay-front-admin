<script setup>
import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import Carousel from "./components/Carousel.vue";
// import CategoriesList from "./components/CategoriesList.vue";

import Deluxe from "@/assets/img/icons/flags/Deluxe.png";
import Suite from "@/assets/img/icons/flags/Suite.png";
import Royal from "@/assets/img/icons/flags/Royal.png";
import Platinum from "@/assets/img/icons/flags/Platinum.png";

// 객실 관리
const sales = {
  us: {
    country: "Deluxe(디럭스)",
    sales: 10,
    value: "$288,000",
    bounce: "2명",
    flag: Deluxe,
  },
  germany: {
    country: "Suite(스위트)",
    sales: 10,
    value: "$360,000",
    bounce: "4명",
    flag: Suite,
  },
  britain: {
    country: "Royal(로얄)",
    sales: 10,
    value: "$460,000",
    bounce: "6명",
    flag: Royal,
  },
  brasil: {
    country: "Platinum(플래티넘)",
    sales: 10,
    value: "$1,208,000",
    bounce: "2명",
    flag: Platinum,
  },
};
// 가장 인기있는 객실, 당일 목표 대비 실적, 문의 개수, 매출
</script>
<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="가장 인기있는 객실"
              value="Deluxe(디럭스)"
              description="현재 가장 인기있는 객실"
              :icon="{
                component: 'ni ni-favourite-28',
                background: 'bg-gradient-danger',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="당일 목표 대비 실적"
              value="2,300"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+3%</span> 전일 대비 상승"
              :icon="{
                component: 'ni ni-world',
                background: 'bg-gradient-warning',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="문의 개수"
              value="+1,462"
              description="현재 누적 문의 개수"
              :icon="{
                component: 'ni ni-email-83',
                background: 'bg-gradient-success',
                shape: 'rounded-circle',
              }"
            />
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <mini-statistics-card
              title="매출"
              value="$103,430"
              description="<span
                class='text-sm font-weight-bolder text-success'
                >+5%</span> 실시간 변동률"
              :icon="{
                component: 'ni ni-money-coins',
                background: 'bg-gradient-secondary',
                shape: 'rounded-circle',
              }"
            />
          </div>
        </div>
        <!-- 매출 그래프 -->
        <div class="row">
          <div class="col-lg-7 mb-lg">
            <!-- line chart -->
            <div class="card z-index-2">
              <gradient-line-chart
                id="chart-line"
                title="각 객실별 매출 현황"
                description=""
                :chart="{
                  labels: ['Aug', 'Sep', 'Oct'],
                  datasets: [
                    {
                      label: '디럭스',
                      data: [150, 200, 150],
                    },
                    {
                      label: '스위트',
                      data: [180, 160, 200],
                    },
                    {
                      label: '로얄',
                      data: [200, 140, 130],
                    },
                    {
                      label: '플래티넘',
                      data: [120, 180, 170],
                    },
                  ],
                }"
              />
            </div>
          </div>
          <div class="col-lg-5">
            <!-- 그림들 (노을 풍경, 리조트 풍경 등) -->
            <Carousel />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-12 mb-lg-0 mb-4">
            <div class="card">
              <div class="p-3 pb-0 card-header">
                <div class="d-flex justify-content-between">
                  <h6 class="mb-3">객실 관리</h6>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table align-items-center">
                  <tbody>
                    <tr v-for="(sale, index) in sales" :key="index">
                      <td class="w-30">
                        <div class="px-1 py-1 d-flex align-items-center">
                          <div class="ms-3">
                            <img
                              :src="sale.flag"
                              alt="Country flag"
                              style="width: 40px; height: 40px"
                            />
                          </div>
                          <div class="ms-5">
                            <!-- <p class="mb-0 text-s font-weight-bold">
                              객실 종류:
                            </p> -->
                            <h6 class="mb-0 text-m">
                              종류 : {{ sale.country }}
                            </h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <!-- <p class="mb-0 text-s font-weight-bold">
                            객실 총 개수:
                          </p> -->
                          <h6 class="mb-0 text-sm">개수 : {{ sale.sales }}</h6>
                        </div>
                      </td>
                      <td>
                        <div class="text-center">
                          <!-- <p class="mb-0 text-s font-weight-bold">가격:</p> -->
                          <h6 class="mb-0 text-sm">가격 : {{ sale.value }}</h6>
                        </div>
                      </td>
                      <td class="text-sm align-middle">
                        <div class="text-center col">
                          <!-- <p class="mb-0 text-s font-weight-bold">:</p> -->
                          <h6 class="mb-0 text-sm">
                            기준 인원 : {{ sale.bounce }}
                          </h6>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Categories 리스트 -->
          <!-- <div class="col-lg-5">
            <categories-list
              :categories="[
                {
                  icon: {
                    component: 'ni ni-mobile-button',
                    background: 'dark',
                  },
                  label: '하츄핑 어트랙션',
                  description: '250 in stock <strong>346+ sold</strong>',
                },
                {
                  icon: {
                    component: 'ni ni-tag',
                    background: 'dark',
                  },
                  label: 'Tickets',
                  description: '123 closed <strong>15 open</strong>',
                },
                {
                  icon: { component: 'ni ni-box-2', background: 'dark' },
                  label: 'Error logs',
                  description: '1 is active <strong>40 closed</strong>',
                },
                {
                  icon: { component: 'ni ni-satisfied', background: 'dark' },
                  label: 'Happy Users',
                  description: '+ 430',
                },
              ]"
            />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
