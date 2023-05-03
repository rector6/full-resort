<template>
  <div class="menu-area">
    <div class="menu-chef pt-4">
      <img src="../assets/chef-hats.png" />
      <h1 class="">Menu</h1>
    </div>
    <div class="row">
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h1 class="card-num">01</h1>
          <h5 class="card-title">hight quality</h5>
          <p class="card-text">
            We serve the highest quality of prepared meals at a great value,in a
            home-like and friendly environment.
          </p>
          <button class="btn btn-success">More</button>
        </div>
      </div>
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h1 class="card-num">02</h1>
          <h5 class="card-title">best recipes</h5>
          <p class="card-text">
            We use cookies and similar tracking and storage techinques on our
            site to enhance your user experience.
          </p>
          <button class="btn btn-success">More</button>
        </div>
      </div>
      <div class="card border-0" style="width: 25rem">
        <div class="card-body">
          <h1 class="card-num">03</h1>
          <h5 class="card-title">real taste</h5>
          <p class="card-text">
            A light ,sour wheat dough with roasted walnuts and freshly and
            freshly picked rosemary, thyme, poppy seed, parsley and sage.
          </p>
          <button class="btn btn-success">More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
}
.menu-area {
  width: 100vw;
  min-height: 70vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: none;
  box-shadow: inset 0px -20px 50px -8px rgba(0, 0, 0, 0.58);
}
h1 {
  font-size: 30px;
  bottom: 4px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
}
.row {
  justify-content: center;
  align-items: center;
}
.menu-area > .row .card {
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 20px;
  border-bottom: 5px solid transparent;
  transition: 1s;
}
.menu-area > .row .card:hover {
  border-bottom: 5px solid darkblue;
}
.card-body {
  border: none;
  outline: none;
}
img {
  width: 8%;
}
.card-num {
  font-size: 65px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: rgb(133, 86, 86);
}
.card-title {
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: rgba(19, 18, 18, 0.834);
}
.card-text {
  font-size: 13px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: rgb(123, 114, 114);
  text-align: center;
  letter-spacing: 2px;
}
button {
  height: 35px;
  width: 100px;
  background-color: none;
}
.btn-success {
  border: 1px solid black;
  background-color: none;
  background: none;
  color: black;
}
@media (max-width: 615px) {
  .menu-area {
    height: 100%;
  }
  img {
    width: 20%;
  }
  h1 {
    font-weight: 500;
  }
  .card-num {
    font-size: 30px;
    font-family: "poppins";
    font-weight: 550;
    color: rgb(133, 86, 86);
  }
  .card-title {
    font-size: 30px;
    font-family: "domine";
    font-weight: 600;
    color: rgba(19, 18, 18, 0.834);
  }
  button {
    height: 40px;
    width: 100px;
    background-color: none;
  }
}
</style>
