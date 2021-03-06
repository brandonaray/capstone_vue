import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "vue-instant/dist/vue-instant.css";
import VueInstant from "vue-instant";
import VueQriously from "vue-qriously";
import draggable from "vuedraggable";
Vue.use(VueInstant);
Vue.use(VueQriously);
Vue.use(draggable);

axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + jwt;
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
