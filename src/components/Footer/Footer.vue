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
            <p class="footer-text">Email: shop@co.com</p>
            <p class="footer-text">Phone: +38 123 456 789</p>
            <p class="footer-text">Address: Fashion Street 10, Kyiv, Ukraine</p>
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
            <p class="footer-text">Mon-Fri: 9am - 6pm</p>
            <p class="footer-text">Sat-Sun: Closed</p>
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
        <div class="footer-content-policy"></div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../assets/mixins.scss';

  .footer {
    display: flex;
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

  @media (min-width: 965px) and (max-width: 1199px) {
    .footer {
      &-container {
        justify-content: space-between;
        gap: 20px;
        align-items: center;
        padding: 0 50px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 964px) {
    .footer {
      &-container {
        gap: 10px;
        align-items: center;
        padding: 0 50px;
      }

      &-content {
        width: 30%;
        gap: 15px;

        &-description {
          font-size: 12px;
        }
      }

      &-text {
        font-size: 12px;
      }

      &-content-paymentContainer {
        align-items: center;
      }

      &-content-socials {
        padding-left: 25px;
        gap: 20px;

        &-icons {
          display: flex;
          gap: 10px;
        }
      }
    }
  }
</style>
