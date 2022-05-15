<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <HomeContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeContent from "@/components/HomeContent.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HomeContent,
  },
});
</script>
