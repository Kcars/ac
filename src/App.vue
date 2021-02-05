<template>
  <div id="main" class="flex flex-col w-screen h-screen overflow-x-hidden">
    <!-- top -->
    <div class="mx-auto w-11/12 h-32 flex flex-row flex-wrap">
      <div class="w-2/6 m-auto text-center flex justify-end">
        <button
          class="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800 absolute left-0 top-0"
          @click="addTask(null)"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.88 3.45999L6.6 1.92999L2 5.77999L3.29 7.30999L7.88 3.45999ZM22 5.78999L17.4 1.92999L16.11 3.45999L20.71 7.31999L22 5.78999ZM3 13.07C3 8.09999 7.03 4.06999 12 4.06999C16.97 4.06999 21 8.09999 21 13.07C21 18.04 16.97 22.07 12 22.07C7.02 22.07 3 18.04 3 13.07ZM12 20.07C8.13 20.07 5 16.94 5 13.07C5 9.19999 8.13 6.06999 12 6.06999C15.87 6.06999 19 9.19999 19 13.07C19 16.94 15.87 20.07 12 20.07ZM11 12.07V9.06999H13V12.07H16V14.07H13V17.07H11V14.07H8V12.07H11Z"
              fill="black"
            />
          </svg>
        </button>
      </div>

      <div class="w-2/6 text-center text-5xl digi">
        {{
          (times.hour &lt; 10 ? "0" + times.hour.toString() : times.hour) +
          ":" +
          (times.minute &lt; 10 ? "0" + times.minute.toString() : times.minute) +
          ":" +
          (times.second &lt; 10 ? "0" + times.second.toString() : times.second)
        }}
      </div>
      <div class="w-2/6 text-center"></div>
    </div>

    <!-- main -->
    <div class="mx-auto w-11/12 h-5/6 flex flex-nowrap flex-col">
      <AlertBlockVue
        v-for="(task, index) in tasks"
        :key="task"
        :index="index"
      ></AlertBlockVue>
    </div>
  </div>
</template>

<script>
import AlertBlockVue from "./AlertBlock.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    AlertBlockVue,
  },
  computed: mapState({
    times: (state) => state.times,
    tasks: (state) => state.tasks,
    crons: (state) => state.crons,
  }),
  methods: {
    ...mapActions(["addTask", "updateTask", "deleteTask", "playSound"]),
  },
  async mounted() {
    this.$store.dispatch("start");
  },
};
</script>