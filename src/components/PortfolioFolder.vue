<script setup lang="ts">
  import { computed } from "vue";
  import MaterialSymbolsKeyboardArrowDown from "~icons/material-symbols/keyboard-arrow-down";
  import MaterialSymbolsKeyboardArrowRight from "~icons/material-symbols/keyboard-arrow-right";
  import SolarFolderBold from "~icons/solar/folder-bold";
  const model = defineModel();

  const { folderName, iconColor, id } = defineProps<{
    folderName: string;
    iconColor?: string;
    id: string;
  }>();

  const isSelected = computed(() => folderName === model.value);
</script>

<template>
  <div
    :class="`relative flex items-center gap-2 px-3 pt-4 pb-2 text-sm lg:text-base ${isSelected ? 'text-slate-50' : ''}`"
  >
    <input
      type="radio"
      :id="id"
      :value="folderName"
      v-model="model"
      class="absolute hidden accent-red-500"
    />
    <label :for="id" class="contents">
      <MaterialSymbolsKeyboardArrowRight v-if="model === folderName" class="icon text-slate-200" />
      <MaterialSymbolsKeyboardArrowDown
        v-else-if="model !== folderName"
        class="icon text-slate-50"
      />
      <SolarFolderBold :class="`icon ${iconColor ? iconColor : 'text-teal-400'}`" />
      {{ folderName.toLowerCase().split(" ").join("-") }}
    </label>
  </div>
</template>
