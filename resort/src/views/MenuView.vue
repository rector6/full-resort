<template>
  <div class="skewed-header">
    <div class="header-bg"></div>
    <img src="../assets/menu.avif" class="header-bg" />
  </div>
  <div class="sequares-wrapper">
    <div class="squares">
      <div class="square">
        <!-- image goes here -->
        <div class="img-wrapper">
          <img src="../assets/image1.avif" alt="you" />
        </div>
        <div class="square-text-wrapper">
          <a href="#spicy" name="name" class="anchor-link">
            <h1>Spicy</h1>
          </a>
          <ul>
            <li>Some Menu items....</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicin</li>
            <li>Odio, dolorem. Quia assumenda suscipit vitae neque</li>
            <li>Repellendus eveniet molestias recusan tempore repud</li>
            <li>Alias explicabo fugiat sint id, pariatur possimus a</li>
          </ul>
        </div>
      </div>
      <div class="square">
        <!-- image goes here -->
        <div class="square-text-wrapper">
          <a href="#medium" name="medium" class="anchor-link">
            <h1>Medium</h1>
          </a>
          <ul>
            <li>Some Menu items....</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicin</li>
            <li>Odio, dolorem. Quia assumenda suscipit vitae neque</li>
            <li>Repellendus eveniet molestias recusan tempore repud</li>
            <li>Alias explicabo fugiat sint id, pariatur possimus a</li>
          </ul>
        </div>
        <div class="img-wrapper">
          <img src="../assets/image2.avif" alt="you" />
        </div>
      </div>
      <div class="square">
        <!-- image goes here -->
        <div class="img-wrapper">
          <img src="../assets/image3.avif" alt="you" />
        </div>
        <div class="square-text-wrapper">
          <a href="#Mild" name="mild" class="anchor-link">
            <h1>Mild</h1>
          </a>
          <ul>
            <li>Some Menu items....</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisic.</li>
            <li>Odio, dolorem. Quia assumenda suscipit vitae ?</li>
            <li>Repellendus eveniet molestias recusan tempore rep!</li>
            <li>Alias explicabo fugiat sint id, pariatur possimus a.</li>
          </ul>
        </div>
      </div>
      <div class="square">
        <!-- image goes here -->
        <div class="square-text-wrapper">
          <a href="#noflavor" name="name" class="anchor-link">
            <h1>No Flavor</h1>
          </a>
          <ul>
            <li>Some Menu items....</li>
            <li>Lorem ipsum dolor sit amet consectetur adi</li>
            <li>Odio, dolorem. Quia assumenda suscipit vit?</li>
            <li>Repellendus eveniet molestias recusan tempo!</li>
            <li>Alias explicabo fugiat sint id, pariatur p.</li>
          </ul>
        </div>
        <div class="img-wrapper">
          <img src="../assets/image4.avif" alt="you" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  transform: skewY(-5deg);
  transform-origin: top left;
  filter: brightness(50%);
}
/* square  section*/
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
.square > .square-text-wrapper ul {
  text-align: left;
  margin: 15px;
}
.anchor-link {
  text-decoration: none;
}
.anchor-link:focus {
  outline: none;
}
/* before */
/* before */
/* before */
.anchor-link h1::after {
  font-family: "Font Awesome  Free";
  content: " \f0c1";
  font-weight: 800;
}
/* before */
@media screen and (max-width: 615px) {
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
