<script setup lang="ts">
  import Footer from './components/Footer/Footer.vue';
  import Header from './components/Header.vue';
</script>

<template>
  <Header />
  <div class="container">
    <router-view></router-view>
  </div>
  <Footer />
</template>
