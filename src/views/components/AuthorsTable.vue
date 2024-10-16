<template>
  <div
    class="card mb-4"
    style="width: 100%; max-width: 1900px; margin: 50px auto; padding: 0 15px"
  >
    <div class="card-header pb-0">
      <h6 class="fs-3">{{ title }}</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2 table-container">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Author
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Function
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Employed
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="author in authors" :key="author.id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <img
                      :src="author.image"
                      class="avatar avatar-sm me-3"
                      :alt="author.name"
                      style="width: 40px; height: 40px; object-fit: cover"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ author.name }}</h6>
                    <p class="text-xs text-secondary mb-0">
                      {{ author.email }}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">
                  {{ author.function }}
                </p>
                <p class="text-xs text-secondary mb-0">
                  {{ author.department }}
                </p>
              </td>
              <td class="align-middle text-center text-sm">
                <span
                  :class="['badge', 'badge-sm', statusClass(author.status)]"
                  >{{ author.status }}</span
                >
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold">{{
                  author.employed
                }}</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Authors Table",
    },
    authors: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    statusClass(status) {
      return status === "Online"
        ? "bg-gradient-success"
        : "bg-gradient-secondary";
    },
  },
};
</script>

<style scoped>
.table-container {
  max-height: 700px; /* 스크롤 제한 높이 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
}

/* 스크롤바 숨기기 */
.table-container::-webkit-scrollbar {
  width: 0; /* 스크롤바 가로 너비 숨기기 */
  height: 0; /* 스크롤바 세로 너비 숨기기 */
}

.table-container {
  scrollbar-width: none; /* Firefox에서 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge에서 스크롤바 숨기기 */
}
</style>
