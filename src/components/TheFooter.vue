<script setup lang="ts">
  import StreamlineLogosGithubLogo2Solid from "~icons/streamline-logos/github-logo-2-solid";
  import StreamlineLogosLinkedinLogoSolid from "~icons/streamline-logos/linkedin-logo-solid";
</script>

<template>
  <footer class="flex flex-col border-y-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex h-full flex-row items-center gap-4">
      <p class="font-medium text-slate-200">Me encontre no:</p>

      <a
        href="https://www.linkedin.com/in/ana-beatriz-rangel-mattos-7094b92b8?utm_source=share&utm_campaign=share_via&utm_content=profile"
        target="_blank"
        class="contents"
      >
        <StreamlineLogosLinkedinLogoSolid class="icon text-slate-100" />
      </a>

      <a href="https://github.com/ana-rangel-mattos" target="_blank" class="contents">
        <StreamlineLogosGithubLogo2Solid class="icon text-slate-100" />
      </a>
    </div>

    <div class="flex pt-2 sm:pt-0">
      <a href="https://github.com/ana-rangel-mattos" target="_blank" class="contents">
        <p class="flex items-center justify-between pr-3 text-slate-100">@ana-rangel-mattos</p>
        <StreamlineLogosGithubLogo2Solid class="icon text-slate-100" />
      </a>
    </div>
  </footer>
</template>
