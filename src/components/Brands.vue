<template>
  <div class="wrapper">
    <section class="brands">
      <img
        src="../assets/svg/versace.svg"
        alt="Versace"
      />
      <img
        src="../assets/svg/zara.svg"
        alt="Zara"
      />
      <img
        src="../assets/svg/gucci.svg"
        alt="Gucci"
      />
      <img
        src="../assets/svg/prada.svg"
        alt="Prada"
      />
      <img
        src="../assets/svg/calvinKlein.svg"
        alt="Calvin Klein"
      />
    </section>
  </div>
</template>

<style lang="scss">
  @media (min-width: 768px) and (max-width: 1100px) {
    .brands {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 50px;
      flex-wrap: wrap;
    }
  }

  .brands {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-inline: 100px;
    height: 122px;
    width: 100%;
    background: #000;
    gap: 42px;
  }
</style>
