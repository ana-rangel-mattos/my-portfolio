<script setup lang="ts">
  import { usePortifolioStore } from "@/stores/PortfolioStore";
  import { storeToRefs } from "pinia";
  import { ref } from "vue";
  import MaterialSymbolsClose from "~icons/material-symbols/close";
  import ProjectItem from "./ProjectItem.vue";

  const portfolio = usePortifolioStore();

  const { selectedTechs, filteredProjects } = storeToRefs(portfolio);

  const showTab = ref(true);
</script>

<template>
  <div v-if="showTab" class="grid grid-rows-[auto_1fr] divide-y-1">
    <div class="flex items-stretch">
      <p class="flex items-center px-6 py-4">
        {{ selectedTechs.join("; ") || "All" }}
      </p>
      <button
        @click="showTab = !showTab"
        class="border-r px-4 hover:cursor-pointer hover:text-slate-100"
      >
        <MaterialSymbolsClose class="icon-lg" />
      </button>
    </div>

    <div
      class="flex flex-row flex-wrap justify-center overflow-auto pt-4 md:justify-start md:pt-0 lg:px-4 lg:py-2"
    >
      <ProjectItem v-for="(item, index) in filteredProjects" :key="index" :project="item" />
    </div>
  </div>
</template>
