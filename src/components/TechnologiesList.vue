<script setup lang="ts">
  import { usePortifolioStore } from "@/stores/PortfolioStore";
  import { onBeforeMount, ref, watch } from "vue";
  import ProjectsTab from "./ProjectsTab.vue";
  import TechnologyItem from "./TechnologyItem.vue";

  const portfolio = usePortifolioStore();

  const getIconFromTech = (tech: string) => portfolio.getIconFromTech(tech);

  const showTechnologies = ref(true);

  const checkedTech = ref<string[]>([]);

  onBeforeMount(() => {
    portfolio.initializeProjects();
  });

  watch(
    checkedTech,
    (newTechs) => {
      portfolio.filterProjectsByTechnologies(newTechs);
    },
    { deep: true },
  );
</script>

<template>
  <div class="divide-y-1 border-b-1 md:border-b-0">
    <ProjectsTab v-model="showTechnologies" />
    <div v-show="showTechnologies" class="flex flex-col gap-2 p-5">
      <TechnologyItem
        v-for="(tech, index) in portfolio.getTechnologies"
        :key="index"
        :technology="tech"
        v-model="checkedTech"
        ><template #icon
          ><component
            :key="tech + index"
            :is="getIconFromTech(tech).icon"
            class="icon-lg text-slate-400" /></template
      ></TechnologyItem>
    </div>
  </div>
</template>
