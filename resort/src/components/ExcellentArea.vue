<template>
  <div class="excel-section">
    <div class="excellent">
      <div class="excell-text">Excellent<br />Services & Good<br />Prices</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.excel-section {
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
  background-image: url(../assets/bug.jpeg);
  padding: 100px;
  height: 70vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.excell-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 70px;
  font-family: domine;
  font-weight: 500;
}
@media screen and (max-width: 600px) {
  .excel {
    width: 100vw;
    top: -30%;
    position: relative;
    text-align: center;
    color: white;
    min-height: 40vh;
  }
  .excell-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 35px;
    font-family: domine;
    font-weight: 500;
  }
  .excel-img {
    width: 100vw;
    height: 35vh;
  }
}
</style>
