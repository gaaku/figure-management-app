import Vue from "vue";
import Vuex from "vuex";
import { state as Liststate } from "./modules/messages/index";

Vue.use(Vuex);

const state = {
  Greeting: "hello",
};
export default new Vuex.Store({
  modules: {
    messages: {
      namespaced: true,
      state: Liststate,
    },
  },
});
