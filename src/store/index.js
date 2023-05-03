import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: { posts: [] },
  mutations: {
    SET_POSTS(state, posts) {
      state.posts = posts;
      console.log(posts);
    },
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await axios.get(
        "https://api-berita-indonesia.vercel.app/antara/terbaru/"
      );
      console.log(response.data.data.posts);
      commit("SET_POSTS", response.data.data.posts);
    },
  },
  getters: {
    allPosts: (state) => state.posts,
  },
});

export default store;
