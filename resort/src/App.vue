<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav class="navbar sticky">
      <div class="logo">
        <h1>Resort</h1>
      </div>
      <div class="nav-link">
        <ul v-show="!mobile" class="navigation">
          <li><router-link to="/">Home</router-link></li>
          <li>
            <router-link to="/about">About Us</router-link>
          </li>
          <li>
            <router-link to="/menu">Menu</router-link>
          </li>
          <li>
            <router-link to="{ name: 'Contact Us' }">Contact Us</router-link>
          </li>
          <li>
            <a href=""><i class="fa fa-search"></i></a>
          </li>
        </ul>
        <div class="icon">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="fa fa-bars"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown-nav">
            <li><router-link to="/">Home</router-link></li>
            <li>
              <router-link to="/about">About Us</router-link>
            </li>
            <li>
              <router-link to="/menu">Menu</router-link>
            </li>
            <li>
              <router-link to="{ name: 'Contact Us' }">Contact Us</router-link>
            </li>
          </ul>
        </transition>
      </div>
    </nav>
  </header>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>
<script>
export default {
  name: "NavBar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = false;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 950) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: Lato, HelveticaNeue, "Helvetica Neue", Helvetica, Arial,
    sans-serif;
}
/* header {
  z-index: 99;
  position: fixed;
  transition: 0.5s ease all;dr4
} */
/* nav {
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  width: 100%;
  margin: 0 auto;
} */
li {
  list-style: none;
}
li a {
  text-decoration: none;
  list-style: none;
}
ul li a {
  font-size: 18.4px;
  color: rgb(107, 107, 107);
  font-weight: 400;
  text-decoration: none;
  line-height: 30px;
  display: flex;
  margin: 15px;
  margin-top: 30px;
  text-align: right;
}
li:hover {
  border-bottom: 2px solid blue;
  transition: 0.5s ease-out;
}
@media (min-width: 750px) {
  li:hover {
    border-bottom: 2px solid blue;
  }
}
.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}
i {
  cursor: pointer;
  font-size: 30px;
  color: black;
  transition: 0.5s ease all;
}
.fa {
  color: black;
  font-size: 28px;
  font-weight: 500;
  margin: 0 20px;
}
.icon-active {
  transform: rotate(180dg);
}
nav {
  position: fixed;
}
.navbar {
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;
  scroll-behavior: none;
  color: #fff;
  top: 0;
  height: 90px;
  padding: 0 10px;
  z-index: 99;
  position: fixedy;
  @media (min-width: 1140px) {
    min-width: 1140px;
  }
}
.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}
.nav-link ul {
  display: flex;
  color: white;
  font-size: 30px;
  margin-right: 100px;
}
.logo {
  margin: 10px 0;
}
.logo img {
  font-size: 30px;
  color: black;
  width: 200px;
  height: 50px;
}
i {
  color: #4fcaff;
  font-size: 30px;
  margin: 10px;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  width: 100%;
  max-width: 250px;
  background-color: white;
  top: 0;
  left: 0;

  li {
    margin-left: 0;
    color: black;
    .link {
      color: black;
    }
    .mobile-nav-enter-active,
    .mobile-nav-enter-active {
      transition: 1s ease all;
    }
    .mobile-nav-enter-from,
    .mobile-nav-leave-to {
      transform: translateX(-250px);
    }
    .mobile-nav-enter-to {
      transform: translateX(0);
    }
  }
  .scrolled-nav {
    background-color: black;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    nav {
      padding: 8px 0;
    }
    .logo {
      width: 50px;
    }
  }
}
</style>
