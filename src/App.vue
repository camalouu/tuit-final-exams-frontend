<template>
  <div id="app" class="w-75 m-auto text-center">
    <router-view :subjects="subjects"></router-view>
  </div>
</template>
<script>
import api from "./services";
export default {
  name: "App",
  data: () => ({ subjects: [] }),
  async mounted() {
    this.subjects = await api.getSubjecNames();
  },
};
</script>
