<script setup lang="ts">
  const { to, pageName } = defineProps<{
    to: string;
    pageName: string;
  }>();
</script>

<template>
  <RouterLink
    :to="to"
    class="px-3 pt-2 pb-4 text-base font-medium transition-colors duration-300 focus:border-b-2 focus:border-b-orange-300 focus:text-slate-50 sm:pt-0"
    >_{{ pageName.trim().split(" ").join("-").toLowerCase() }}</RouterLink
  >
</template>
