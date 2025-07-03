<script setup lang="ts">
  const { text } = defineProps<{
    text: string;
  }>();
</script>

<template>
  <span class="text-base/normal">// {{ text }}</span>
</template>

<style scoped></style>
