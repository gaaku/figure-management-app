import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  Greeting: "hello",
};
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
