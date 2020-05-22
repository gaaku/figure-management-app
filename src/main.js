import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css"; //Add
import "bootstrap-vue/dist/bootstrap-vue.css"; //Add
import BootstrapVue from "bootstrap-vue"; // Add

Vue.config.productionTip = false;
Vue.use(BootstrapVue); // Add

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
