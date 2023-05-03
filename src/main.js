import { createApp } from "vue";
import App from "./App.vue";
// import * as VueGoogleMaps from "vue2-google-maps";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

createApp(App).use(store).use(router).mount("#app");
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: "AIzaSyBeEgPe4APAVzmjMDiTNFVU-qEsJzUzaRU",
//   },
//   installComponents: true,
// });\
