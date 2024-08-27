<script setup lang="ts">
  const { style, title } = defineProps<{ style: string; title: string }>();
</script>

<template>
  <div class="button-container">
    <button
      class="button"
      :style="style"
    >
      {{ title }}
    </button>
  </div>
</template>
