<script setup lang="ts">
  const model = defineModel();
  import MaterialSymbolsMarkdown from "~icons/material-symbols/markdown";

  const { fileName, folderName } = defineProps<{
    fileName: string;
    folderName: string;
  }>();
</script>

<template>
  <div v-show="model === folderName">
    <div class="flex items-center py-0.5 pl-10">
      <MaterialSymbolsMarkdown class="icon text-slate-500" />
      <p class="pl-2 text-sm lg:text-base">{{ fileName.toLowerCase().split(" ").join("-") }}</p>
    </div>
  </div>
</template>
