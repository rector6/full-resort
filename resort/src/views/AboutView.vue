<template>
  <div class="skewed-header">
    <div class="header-bg1"></div>
    <img src="../assets/catering.jpg" class="header-bg" />
  </div>
  <div class="page-container">
    <div class="content-wrapper">
      <!-- image goes here -->
      <img src="../assets/chef.jpeg" alt="Chef image" id="chef" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corporis dolor
        quos incidunt accusantium eveniet aperiam porro dolores corrupti itaque?
        Saepe unde pariatur tempora odit optio quo exercitationem adipisci
        officia nemo necessitatibus voluptatum, expedita alias laboriosam totam
        atque, quod vero impedit placeat quisquam enim nulla quia? Adipisci
        corporis qui molestias eum, perferendis ut odio sequi dolor assumenda
        nisi. Vero architecto, nisi molestias commodi, dolore voluptatum ipsam
        nemo quasi laudantium doloremque hic ratione. Eum similique, ducimus,
        sequi blanditiis perferendis quos qui provident laudantium sunt dolores
        in autem maiores est eos, temporibus obcaecati consectetur distinctio
        laboriosam nisi voluptate tempora culpa. Quas vero dignissimos tempore
        iure! Optio fuga, nesciunt non vel dignissimos maiores quod maxime
        voluptatem unde dolor sint totam error, architecto ipsum repellat alias
        sequi? Perspiciatis eaque veritatis nobis dolores veniam illum
        accusantium facere quae, commodi, vero, labore ratione libero distincti
        iste iusto dolore omnis rerum! Soluta minima incidunt omnis, eaque
        pariatur aliquam, assumenda impedit ut sunt doloremque cumque? Repellat
        reprehenderit excepturi eveniet, debitis earum ipsa amet laudantium
        omnis, fuga commodi tempora possimus molestiae sunt voluptas veritatis
        distinctio officia eaque eius dolores aperiam! Velit aliquid ratione
        voluptas inventore fugit alias soluta repellat voluptates veniam
        dolorum, modi quae rem eos commodi facilis ipsam molestia
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Corporis dolor
        quos incidunt accusantium eveniet aperiam porro dolores corrupti itaque?
        Saepe unde pariatur tempora odit optio quo exercitationem adipisci
        officia nemo necessitatibus voluptatum, expedita alias laboriosam totam
        atque, quod vero impedit placeat quisquam enim nulla quia? Adipisci
        corporis qui molestias eum, perferendis ut odio sequi dolor assumenda
        nisi. Vero architecto, nisi molestias commodi, dolore voluptatum ipsam
        nemo quasi laudantium doloremque hic ratione. Eum similique, ducimus,
        sequi blanditiis perferendis quos qui provident laudantium sunt dolores
      </p>
    </div>
  </div>

  <div class="sequares-wrapper">
    <div class="squares">
      <div class="square">
        <!-- image goes here -->
        <div class="img-wrapper">
          <img src="../assets/image3.avif" alt="you" />
        </div>
        <div class="square-text-wrapper">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui
            voluptates modi ab ad facilis natus exercitationem voluptate? Vel,
            debitis, reiciendis porro inventore laboriosam ducimus vitae
            molestiae eos, iste consectetur mollitia ea. Dignissimos
            necessitatibus consectetur ab. Sed delectus quo ea laudantium
            officiis. Facere fugiat distinctio repudiandae id ipsam optio
            deserunt?
          </p>
        </div>
      </div>
      <div class="square">
        <!-- image goes here -->
        <div class="square-text-wrapper">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque qui
            voluptates modi ab ad facilis natus exercitationem voluptate? Vel,
            debitis, reiciendis porro inventore laboriosam ducimus vitae
            molestiae eos, iste consectetur mollitia ea. Dignissimos
            necessitatibus consectetur ab. Sed delectus quo ea laudantium
            officiis. Facere fugiat distinctio repudiandae id ipsam optio
            deserunt?
          </p>
        </div>
        <div class="img-wrapper">
          <img src="../assets/image2.avif" alt="you" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
.skewed-header {
  position: relative;
  height: 300px;
  overflow: hidden;
}
.skewed-header > .header-bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  transform: skewY(-6deg);
  transform-origin: top left;
  filter: brightness(50%);
}
/* page container */
.page-container {
  display: flex;
  justify-content: center;
}

.page-container > .content-wrapper {
  width: 1000px;
}
.page-container > .content-wrapper > #chef {
  width: 350px;
  margin: 23px 50px 20px 0px;
  float: left;
  border: 1px solid #cea135;
}
.page-container > .content-wrapper p {
  letter-spacing: 1px;
  line-height: 25px;
  margin: 40px;
}
/* square grid style */
.sequares-wrapper {
  display: flex;
  justify-content: center;
}
.sequares-wrapper > .squares {
  width: 1000px;
}
.sequares-wrapper > .squares > .square {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -4px;
}
.square > .img-wrapper img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.square > .square-text-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 42px;
}
.square > .square-text-wrapper h1 {
  color: #cea135;
}
/* helper style */
.spacer60 {
  height: 60px;
  width: 60%;
}
@media screen and (max-width: 615px) {
  .skewed-header > .header-bg1 {
    background-size: 550px;
  }
  .page-container {
    width: 100%;
    padding-left: 21px;
    padding-right: 21px;
  }
  .page-container > .content-wrapper > #chef {
    width: 100%;
    margin: 0px 0px 25px 0px !important;
    float: center;
  }
  .square {
    grid-template-columns: 1fr !important;
  }
  .square > .square-text-wrapper {
    order: 1;
  }
  .square > .img-wrapper {
    order: 2;
  }
}
</style>
