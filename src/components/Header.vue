<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import Navigation from './Navigation.vue';
  import UIinput from './UIcomponents/UIinput.vue';

  const router = useRouter();
</script>

<template>
  <div class="wrapper">
    <section class="header">
      <div class="header-content">
        <img
          class="icon"
          src="../assets/svg/logo.svg"
          alt="logo"
          @click="router.push('/')"
        />
        <Navigation />
        <UIinput />
        <div class="header-content-imgContainer">
          <router-link to="/cart">
            <img
              class="icon"
              src="../assets/svg/cart.svg"
              alt="cart"
            />
          </router-link>
          <img
            class="icon-account"
            src="../assets/svg/account.svg"
            alt="account"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 96px;
    width: 100%;
  }

  .header-content {
    display: flex;
    max-width: 1240px;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .header-content-imgContainer {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 14px;
  }
</style>
