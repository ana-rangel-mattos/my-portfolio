<script setup lang="ts">
  import NavItem from "@/components/NavItem.vue";
  import { onMounted, onUnmounted, ref } from "vue";
  import { RiMenuLine } from "vue-remix-icons";

  const width = ref(window.innerWidth);
  const showMenu = ref(false);

  function handleResize() {
    width.value = window.innerWidth;
  }

  onMounted(() => {
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });
</script>

<template>
  <header class="flex flex-wrap gap-4 border-y-1 p-4 select-none sm:pb-0">
    <div class="w-full text-center sm:contents sm:grow">
      <button @click="showMenu = !showMenu" class="grid w-full grid-cols-[auto_1fr] sm:contents">
        <RiMenuLine class="h-7 w-7 sm:hidden" />
        <p class="w-full text-right sm:contents">Ana Beatriz Rangel Mattos</p>
      </button>
    </div>
    <nav
      v-show="showMenu || width >= 640"
      class="w-full text-base sm:flex sm:w-auto sm:grow-16 sm:items-center sm:justify-between"
    >
      <div class="relative flex w-full flex-col flex-wrap sm:w-auto sm:flex-row sm:flex-nowrap">
        <NavItem to="/" pageName="Hello" />
        <NavItem to="/about" pageName="About me" />
        <NavItem to="/projects" pageName="Projects" />
      </div>

      <div class="relative flex w-full sm:mt-0 sm:mr-2 sm:w-auto">
        <NavItem to="/contact" pageName="Contact me" />
      </div>
    </nav>
  </header>
</template>
