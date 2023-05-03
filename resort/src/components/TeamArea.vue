<template>
  <div class="team-area">
    <div class="team-text">
      <h1>Our Team</h1>
      <p>
        Sample text.Lorem ipsum dolor sit amet.consecture adspising elit nullum
        nunmc justo saggits suscrpt ultrics
      </p>
    </div>
    <div class="row pt-3">
      <div class="team border-0" style="width: 17em">
        <div class="team-body">
          <img src="../assets/team2.jpeg" class="team-img" />
          <div class="team-text">
            <h2>Connor Quinn</h2>
            <span>Excutive Chef</span>
          </div>
        </div>
      </div>
      <div class="team border-0" style="width: 17rem">
        <div class="team-body">
          <img src="../assets/team3.jpeg" class="team-img" />
          <div class="team-text">
            <h2>Elon Musk</h2>
            <span>Restaurant Manager</span>
          </div>
        </div>
      </div>
      <div class="team border-0" style="width: 17em">
        <div class="team-body">
          <img src="../assets/team4.jpeg" class="team-img" />
          <div class="team-text">
            <h2>jeff B</h2>
            <span>Co-Chef</span>
          </div>
        </div>
      </div>
      <div class="team border-0" style="width: 17rem">
        <div class="team-body">
          <img src="../assets/team2.jpeg" class="team-img" />
          <div class="team-text">
            <h2>Connor Quinn</h2>
            <span>Co-Chef</span>
          </div>
        </div>
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
.team-area {
  width: 100vw;
  min-height: 50vh;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: none;
}
.row {
  justify-content: center;
  align-items: center;
}
.team {
  outline: none;
  border: none;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.team-img {
  height: 150px;
  width: 150px;
}
img {
  width: 100%;
  height: 50%;
  border-radius: 100%;
}
h1 {
  font-size: 3.5rem;
  font-family: "domine";
  font-weight: 600;
}
h2 {
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
  font-family: "poppins";
}
@media screen and (max-width: 600px) {
  .team-area {
    width: 100vw;
    min-height: 50vh;
    display: block;
  }
  h1 {
    font-size: 30px;
    margin: 10px;
  }
}
</style>
