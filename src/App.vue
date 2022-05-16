<template>
  <AppMenu />
  <router-view />
</template>

<script lang="ts">
import AppMenu from "@/components/AppMenu.vue";
export default {
  components: {
    AppMenu,
  },
};
</script>

<!--default app styling-->
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
