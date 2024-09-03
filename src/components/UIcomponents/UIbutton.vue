<script setup lang="ts">
  import { ref } from 'vue';

  const { style, title, isWhite } = defineProps<{
    style: string;
    title: string;
    isWhite: boolean;
  }>();

  const color = ref(isWhite);
</script>

<template>
  <button
    :class="color ? 'button-white' : 'button'"
    :style="style"
  >
    {{ title }}
  </button>
</template>
