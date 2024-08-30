<script setup lang="ts">
  const { style, title } = defineProps<{ style: string; title: string }>();
</script>

<template>
  <button
    class="button"
    :style="style"
  >
    {{ title }}
  </button>
</template>
