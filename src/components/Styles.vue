<template>
  <div class="wrapper">
    <section class="styles">
      <div class="styles-container">
        <h2 class="styles-title">BROWSE BY DRESS STYLE</h2>
        <div class="styles-container-image">
          <div class="small">
            <img
              class="image"
              src="../assets/image/casual.png"
              alt="style1"
            />
          </div>
          <div class="large">
            <img
              class="image"
              src="../assets/image/formal.png"
              alt="style1"
            />
          </div>
          <div class="large">
            <img
              class="image"
              src="../assets/image/party.png"
              alt="style1"
            />
          </div>
          <div class="small">
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
    }
  }

  .image {
    width: 100%;
    max-height: 294px;
    border-radius: 20px;
    background: #fff;
  }

  .small {
    width: 407px;
    height: auto;
  }

  .large {
    width: 684px;
    height: auto;
  }
</style>
