<template>
  <AboutContent />
</template>

<script lang="ts">
// define about page
import { defineComponent } from "vue";
import AboutContent from "@/components/AboutContent.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    AboutContent,
  },
});
</script>
