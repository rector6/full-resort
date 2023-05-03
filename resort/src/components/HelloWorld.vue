<template>
  <!-- <div class="banner">
    <img src="../assets/first-image.jpeg" class="banner-img" />
    <div class="banner-text pt-5">Our Passion<br />For Delicious<br />Food</div>
  </div>
  <div class="chef-cap">
    <i class="fa fa-hat-chef"></i>
  </div> -->
  <div class="hero-section">
    <div class="top-heading">
      <h1>Our Passion For <br />Delicious food</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// .banner {
//   width: 100%;
//   position: relative;
//   text-align: center;
//   color: white;
//   width: 100%;
//   min-height: 50vh;
// }
// .banner-text {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   font-size: 50px;
//   font-family: "poppins";
//   font-weight: 500;
// }
// img {
//   width: 100%;
//   height: 70vh;
// }
// .banner .banner-img {
//   width: 100vw;
// }
// .fa i {
//   font-size: 50em;
// }
// @media (max-width: 600px) {
//   .banner {
//     width: 100vw;
//     min-height: 50vh;
//   }
//   .banner-text {
//     font-size: 30px;
//   }
//   img {
//     width: 100%;
//     height: 50vh;
//   }
// }
.hero-section {
  background-image: url(../assets/resort2.jpeg);
  padding: 100px;
  height: 70vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-family: "poppins";
  font-weight: 500;
  color: white;
}
@media (max-width: 615) {
  .hero-section {
    padding: 50px;
    width: 100%;
  }
}
</style>
