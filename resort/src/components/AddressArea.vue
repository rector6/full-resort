<template>
  <div class="page-container">
    <div class="contact-grid-wrapper">
      <!-- Address -->
      <div class="company-metadata-sidebar-wrapper">
        <div class="logo">
          <img src="../assets/logo.png" alt="Logo" />
        </div>
        <div class="company-details-wrapper">
          <i class="fa fa-phone"></i>
          <div>1234 Any St<br />South road Maraba</div>
        </div>
        <div class="company-details-wrapper">
          <i class="fa fa-phone"></i>
          <i class="fa-sharp fa-light fa-clock fa-beat"></i>
          <div>555 555 555</div>
        </div>
        <div class="company-details-wrapper">
          <i class="fa fa-phone"></i>
          <div>10 AM - MIDNIGHT</div>
        </div>
      </div>
      <!-- Form  section-->
      <div class="form">
        <div class="form-group">
          <input type="text" id="fullName" placeholder="Your name" />
          <label for="fullName">Your Name</label>
        </div>
        <div class="form-group">
          <input type="email" id="email" placeholder="Your email" />
          <label for="email">Your Email</label>
        </div>
        <div class="form-group">
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
          <label for="message">Your Message</label>
        </div>
        <div class="centered-btn-wrapper">
          <button type="submit" class="btn">Send</button>
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
  margin: 0;
  font-family: "Ubutu", sans-serif;
}
.page-container {
  width: 100vw;
  min-height: 70vh;
  height: 70vh;
}
.form {
  display: block;
  justify-content: left;
}
.contact-grid-wrapper {
  width: 100vw;
  display: flex;
  /* grid-template-columns: 1fr 3fr;
  grid-gap: 10px; */
  justify-content: space-evenly;
  align-items: center;
}
.company-metadata-sidebar-wrapper > .logo img {
  width: 100%;
  height: 250px;
}
.company-metadata-sidebar-wrapper > .company-details-wrapper i {
  color: #cea135;
  font-size: 1em;
}
.company-metadata-sidebar-wrapper > .company-details-wrapper {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
  margin: 25px;
  font-size: 1.25em;
}
/* form */
.form > .form-group {
  margin-top: 30px;
  margin-bottom: 30px;
}
.form input {
  font-size: 1.3em;
  font-family: inherit;
  color: inherit;
  padding: 1rem 1rem;
  border-radius: 2px;
  border: none;
  outline: none;
  border-bottom: 2px solid #11122b;
  width: 90%;
  display: block;
  transition: all 0.3s;
}
.form input:focus {
  outline: none;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border-bottom: 3px solid #cea135;
}
.form textarea {
  width: 90%;
  height: 150px;
  margin-right: 30em;
  border-radius: 3px;
  border: 2px solid #11122b;
  font-size: 1rem;
  outline: none;
  font-family: inherit;
  color: inhert;
  transition: all 0.3s;
}
.form textarea:focus {
  outline: none;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
  border: 3px solid #cea135;
}
.btn {
  background-color: #cea135;
  color: #11122b;
  font-size: 1.2em;
  padding: 5px 20px;
  border: 1px solid #cea135;
  border-radius: 2px;
  outline: none;
  float: left;
  transition: 0.3s;
}
.btn:active {
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.4);
}
.btn:hover {
  background: #cea135;
}
.form input::-webkit-input-placeholder,
.form textarea::-webkit-input-placeholder {
  color: #11122b;
}
.form input:focus::-webkit-input-placeholder,
.form textarea:focus::-webkit-input-placeholder {
  color: transparent;
}
.form label {
  font-size: 1rem;
  font-weight: 700;
  text-align: left;
  display: block;
  transition: all 0.3s;
  color: #cea135;
  visibility: hidden;
  opacity: 0;
}
.form input:focus + label,
.form textarea:focus + label {
  opacity: 1;
  visibility: visible;
  transform: translateY(1rem);
}
.centered-btn-wrapper {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 615px) {
  .page-container {
    height: 100%;
    width: 100%;
  }
  .page-container > .contact-grid-wrapper {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  .form {
    width: 100%;
  }
  .form textarea {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .form input {
    width: 100%;
  }
}
</style>
