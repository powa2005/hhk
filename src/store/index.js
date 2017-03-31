import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import story from './modules/story';

Vue.use(Vuex)


export default new Vuex.Store({
  actions,
  modules: {
    story,
  }
})