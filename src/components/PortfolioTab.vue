<script setup lang="ts">
  import MaterialSymbolsKeyboardArrowDown from "~icons/material-symbols/keyboard-arrow-down";

  const model = defineModel();

  const { tabName } = defineProps<{
    tabName: string;
  }>();
</script>

<template>
  <div class="flex items-center justify-center p-4">
    <button @click="model = !model" class="contents hover:cursor-pointer hover:text-slate-100">
      <slot name="icon">
        <MaterialSymbolsKeyboardArrowDown class="icon text-slate-50" />
      </slot>
      <p class="pl-2">_{{ tabName.toLowerCase().split(" ").join("-") }}</p>
    </button>
  </div>
</template>

<style scoped></style>
