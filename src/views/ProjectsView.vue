<script setup lang="ts">
  import ProjectsList from "@/components/ProjectsList.vue";
  import TechnologiesList from "@/components/TechnologiesList.vue";
</script>

<template>
  <main
    class="grid grid-rows-[auto_1fr] divide-x-1 md:grid-cols-[1fr_3fr] md:grid-rows-1 lg:grid-cols-[1fr_4fr] xl:grid-cols-[1fr_5fr]"
  >
    <TechnologiesList />
    <ProjectsList />
  </main>
</template>
