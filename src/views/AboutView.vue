<template>
  <AboutContent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AboutContent from "@/components/AboutContent.vue";

export default defineComponent({
  name: "AboutView",
  components: {
    AboutContent,
  },
});
</script>
