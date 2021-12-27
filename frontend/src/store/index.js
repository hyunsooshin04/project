import { createStore } from "vuex";

export default createStore({
  state: {
    isLogin: false,
  },
  mutations: {
    Login(state) {
      state.isLogin = true;
    },
    Logout(state) {
      state.isLogin = false;
    }
  },
  actions: {},
  modules: {},
});
