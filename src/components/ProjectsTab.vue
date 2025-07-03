<script setup lang="ts">
  const model = defineModel();
</script>

<template>
  <div class="flex items-center justify-center p-4">
    <button @click="model = !model" class="contents hover:cursor-pointer hover:text-slate-100">
      <RiArrowDownSLine class="icon text-slate-50" />
      <p>projetos</p>
    </button>
  </div>
</template>

<style scoped></style>
