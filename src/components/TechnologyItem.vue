<script setup lang="ts">
  const { technology } = defineProps<{ technology: string }>();
  const model = defineModel();
</script>

<template>
  <div class="flex items-center gap-4">
    <input
      type="checkbox"
      :value="technology"
      :id="technology"
      v-model="model"
      class="h-5 w-5 rounded-sm border-1 border-slate-500 bg-slate-900 text-slate-50 accent-slate-500 transition-all duration-300 focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-50"
    />
    <label :for="technology" class="flex items-center"
      ><slot name="icon"></slot><span class="pl-4">{{ technology }}</span></label
    >
  </div>
</template>
