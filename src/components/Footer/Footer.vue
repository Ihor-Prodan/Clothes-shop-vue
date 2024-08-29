<script setup lang="ts">
  import { payment, socials } from './footerVariables';
</script>

<template>
  <div class="wrapper">
    <section class="footer">
      <div class="footer-container">
        <div class="footer-content">
          <img
            class="footer-logo"
            src="../../assets/svg/logo.svg"
            alt="logo"
          />
          <p class="footer-content-description">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
        </div>

        <div class="footer-content-socials">
          <div class="footer-content-contact">
            <p><strong>Contact us:</strong></p>
            <p>Email: shop@co.com</p>
            <p>Phone: +38 123 456 789</p>
            <p>Address: Fashion Street 10, Kyev, Ukraine</p>
          </div>
          <div class="footer-content-socials-icons">
            <img
              v-for="social in socials"
              :key="social.name"
              :src="social.icon"
              :alt="social.name"
            />
          </div>
        </div>
        <div class="footer-content-paymentContainer">
          <div class="footer-content-hours">
            <p><strong>Working Hours:</strong></p>
            <p>Mon-Fri: 9 AM - 6 PM</p>
            <p>Sat-Sun: Closed</p>
          </div>
          <div class="footer-content-payment">
            <img
              v-for="pay in payment"
              :key="pay.name"
              :src="pay.icon"
              :alt="pay.name"
            />
          </div>
        </div>
        <div class="footer-content-policy">
          <!-- <p>
            We use cookies to enhance your experience. Learn more in our Privacy
            Policy.
          </p>
          <p class="footer-content-mission">
            Our mission is to provide sustainable fashion for everyone.
          </p> -->
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/mixins.scss';

  .footer {
    width: 100%;
    height: 250px;
    flex-shrink: 0;
    background: #f0f0f0;

    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0 100px;
    }

    &-content {
      margin-bottom: 40px;
      display: flex;
      width: 20%;
      flex-direction: column;
      gap: 10px;

      &-description {
        @include fontBase;
        color: rgba(0, 0, 0, 0.6);
      }
    }

    &-content-socials {
      display: flex;
      flex-direction: column;
      gap: 30px;

      &-icons {
        display: flex;
        gap: 10px;
      }
    }

    &-content-paymentContainer {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    &-content-payment {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: start;
    }
  }
</style>
