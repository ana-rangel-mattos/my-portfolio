<script setup lang="ts">
  import { usePortifolioStore } from "@/stores/PortfolioStore";
  import CommentText from "./CommentText.vue";

  const { project } = defineProps<{
    project: {
      title: string;
      objectId: string;
      technologies: string[];
      imageUrl: string;
      description: string;
    };
  }>();

  const portfolio = usePortifolioStore();
</script>

<template>
  <div class="px-4 py-2 sm:px-10 sm:py-8">
    <div class="flex gap-2 pb-3 text-base">
      <p class="font-medium text-indigo-500">{{ project.title }}</p>
      <CommentText text="_portifólio-vue" />
    </div>
    <div class="relative w-72 rounded-2xl border-2 bg-slate-950 pb-2">
      <div class="absolute top-4 right-4 flex gap-2">
        <component
          v-for="tech in project.technologies"
          :key="tech"
          :is="portfolio.getIconFromTech(tech).icon"
          :class="`icon-lg ${portfolio.getIconFromTech(tech).bgColor} text-slate-950`"
        />
      </div>
      <div class="flex flex-col">
        <div class="h-1/2">
          <img
            :src="project.imageUrl"
            :alt="'Image from ' + project.title"
            class="h-full w-full rounded-t-[14px] object-cover"
          />
        </div>
        <div class="flex h-1/2 flex-col items-start p-8">
          <p class="pb-6 text-base">{{ project.description }}</p>
          <a
            class="rounded-lg bg-slate-600 px-4 py-2 text-sm text-slate-50 hover:cursor-pointer hover:bg-slate-200 hover:text-slate-950"
            target="_blank"
            >ver-mais</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
