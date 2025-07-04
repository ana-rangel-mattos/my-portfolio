<script setup lang="ts">
  const model = defineModel();
  import PortfolioFolder from "./PortfolioFolder.vue";

  const { folderName, id, iconColor } = defineProps<{
    folderName: string;
    iconColor?: string;
    id: string;
  }>();
</script>

<template>
  <div>
    <PortfolioFolder v-model="model" :folder-name="folderName" :icon-color="iconColor" :id="id" />
    <slot name="files"></slot>
  </div>
</template>
