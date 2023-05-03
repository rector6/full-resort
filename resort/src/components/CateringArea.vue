<template>
  <div class="Catering-section">
    <div class="Catering-heading">
      <div class="Catering-text">Our Passion For <br />Delicious food</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Catering-section {
  min-width: 100vw;
  top: -30%;
  position: relative;
  text-align: center;
  color: white;
  min-height: 50vh;
  min-width: 100vw;
  top: -30%;
  position: relative;
  text-align: center;
  color: white;
  width: 100vw;
  background-image: url(../assets/bug.jpeg);
  padding: 100px;
  height: 70vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.Catering-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-family: domine;
  font-weight: 500;
  color: white;
}

@media screen and (max-width: 600px) {
  .catering-area {
    min-height: 50vh;
    width: 100vw;
    position: relative;
    margin-bottom: 40px;
  }
  img {
    width: 100vw;
    height: 30vh;
  }
}
</style>
