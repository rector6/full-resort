<template>
  <div class="Ourmenu-area">
    <div class="menu-chef">
      <img src="../assets/menu.png" class="ourmenu-img" />
      <h1 class="ourmenu-text">Our Menu</h1>
    </div>
    <div class="row pt-3">
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h5 class="card-title">pizza</h5>
          <p class="card-text">
            We serve the highest quality of prepared meals at a great value,in a
            home-like and friendly environment that our customer will love very
            much and affordable
          </p>
        </div>
        <img src="../assets/pizza.jpeg" class="menu-img" />
      </div>
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h5 class="card-title">salads</h5>
          <p class="card-text">
            We serve the highest quality of prepared meals at a great value,in a
            home-like and friendly environment that our customer will love very
            much and affordable
          </p>
        </div>
        <img src="../assets/salad.jpeg" class="menu-img" />
      </div>
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h5 class="card-title">desserts</h5>
          <p class="card-text">
            We serve the highest quality of prepared meals at a great value,in a
            home-like and friendly environment that our customer will love very
            much and affordable
          </p>
        </div>
        <img src="../assets/desserts.jpeg" class="menu-img" />
      </div>
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
  box-sizing: border-box;
}
.Ourmenu-area {
  width: 100vw;
  min-height: 100vh;
  top: -30px;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: none;
}
.menu-chef {
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.ourmenu-img {
  width: 8%;
}
.ourmenu-text {
  font-size: 40px;
  font-family: domins;
  font-weight: 600;
}
.row {
  justify-content: center;
  align-items: center;
}
.card {
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  margin: 20px;
  text-align: left;
}
.card-body {
  border: none;
  outline: none;
}
.card-title {
  font-size: 30px;
  font-family: "poppins";
  font-weight: 600;
  color: black;
}
.card-text {
  font-size: 15px;
  font-family: "Roboto";
  font-weight: 500;
  color: rgb(123, 114, 114);
}
.menu-img {
  width: 350px;
  height: 250px;
  border-radius: 15px;
}
@media (max-width: 615px) {
  .Ourmenu-area {
    height: 100%;
  }
  .ourmenu-img {
    width: 40%;
  }
  .card-title {
    margin: 0px 0px 20px;
    font-size: 45px;
    font-weight: 500;
    color: black;
  }
  .card-text {
    font-size: 19 px;
    font-family: "Roboto";
    font-weight: 500;
    color: rgb(123, 114, 114);
  }
}
</style>
