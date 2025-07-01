<script setup lang="ts">
  import TheFooter from "@/components/TheFooter.vue";
  import TheHeader from "@/components/TheHeader.vue";
  import { RouterView } from "vue-router";
</script>

<template>
  <div class="grid h-dvh grid-rows-[auto_1fr_auto] border-x-1">
    <TheHeader />

    <RouterView class="overflow-auto" />

    <TheFooter />
  </div>
</template>
