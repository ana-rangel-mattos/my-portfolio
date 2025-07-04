<script setup lang="ts">
  import AboutFolder from "@/components/AboutFolder.vue";
  import PortfolioFile from "@/components/PortfolioFile.vue";
  import PortfolioTab from "@/components/PortfolioTab.vue";
  import { usePortifolioStore } from "@/stores/PortfolioStore";
  import MarkdownIt from "markdown-it";
  import { storeToRefs } from "pinia";
  import { computed, ref, watch } from "vue";
  import MaterialSymbolsClose from "~icons/material-symbols/close";

  const markdown = new MarkdownIt();

  const showWindow = ref(true);
  const showAbout = ref(true);

  const selectedFolder = ref("Escolarização");

  const portfolio = usePortifolioStore();

  const { aboutMe } = storeToRefs(portfolio);

  const aboutText = computed(
    () => aboutMe.value.find((item) => item.title === selectedFolder.value)?.text,
  );

  watch(selectedFolder, () => {
    if (!showWindow.value) {
      showWindow.value = true;
      return;
    }
  });
</script>

<template>
  <main
    class="grid grid-rows-[auto_1fr] divide-x-1 md:grid-cols-[1fr_3fr] md:grid-rows-1 lg:grid-cols-[1fr_4fr] xl:grid-cols-[1fr_5fr]"
  >
    <div class="border-b md:border-b-0">
      <PortfolioTab v-model="showAbout" tab-name="Sobre mim" class="border-b" />
      <div v-show="showAbout">
        <AboutFolder
          v-for="(item, index) in aboutMe"
          v-model="selectedFolder"
          :folder-name="item.title"
          :icon-color="item.color"
          :id="item.title + index"
          :key="index"
        >
          <template #files>
            <PortfolioFile
              v-for="(tech, techIndex) in item.items"
              :key="techIndex"
              :file-name="tech"
              :folder-name="item.title"
              v-model="selectedFolder"
            />
          </template>
        </AboutFolder>
      </div>
    </div>
    <div v-if="showWindow" class="grid grid-rows-[auto_1fr] divide-y-1">
      <div class="flex items-stretch">
        <p class="flex items-center px-6 py-4">{{ selectedFolder }}</p>
        <button
          @click="showWindow = !showWindow"
          class="border-r px-4 hover:cursor-pointer hover:text-slate-100"
        >
          <MaterialSymbolsClose class="icon-lg" />
        </button>
      </div>

      <div class="max-w-4xl px-2 pt-4 md:justify-start md:px-6 lg:px-10 lg:py-8 xl:px-14 xl:py-12">
        <div class="prose prose-invert" v-html="markdown.render(aboutText || '')"></div>
      </div>
    </div>
  </main>
</template>
