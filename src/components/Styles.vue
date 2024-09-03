<template>
  <div class="wrapper">
    <section
      id="styles"
      class="styles"
    >
      <div class="styles-container">
        <h2 class="styles-title">BROWSE BY DRESS STYLE</h2>
        <div class="styles-container-image">
          <div class="small">
            <p class="styles-container-image-title">Casual</p>
            <img
              class="image"
              src="../assets/image/casual.png"
              alt="style1"
            />
          </div>
          <div class="large">
            <p class="styles-container-image-title">Formal</p>
            <img
              class="image"
              src="../assets/image/formal.png"
              alt="style1"
            />
          </div>
          <div class="large">
            <p class="styles-container-image-title">Party</p>
            <img
              class="image"
              src="../assets/image/party.png"
              alt="style1"
            />
          </div>
          <div class="small">
            <p class="styles-container-image-title">Gym</p>
            <img
              class="image"
              src="../assets/image/gym.png"
              alt="style1"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .styles {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1239px;
    height: 866px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #f0f0f0;

    &-container {
      gap: 70px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    &-container-image {
      padding-inline: 60px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 12px;

      &-title {
        position: absolute;
        left: 30px;
        top: 20px;
        color: #000;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  .image {
    width: 100%;
    max-height: 294px;
    border-radius: 20px;
    background: #fff;
  }

  .small {
    position: relative;
    width: 407px;
    height: auto;
  }

  .large {
    position: relative;
    width: 684px;
    height: auto;
  }
</style>
