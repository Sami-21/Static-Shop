import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import vuetify from "./plugins/vuetify";
import "./assets/tailwind.css";
import "vuetify/dist/vuetify.min.css";
import VueMaterial from "vue-material";
import VueBus from "vue-bus";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(VueBus);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
