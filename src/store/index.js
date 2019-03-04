
import Vue from 'vue';
import Vuex from 'vuex';
import robotsModule from './modules/robots';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    foo: 'root-foo',
    name: 'gengyudong',
  },
  modules: {
    robots: robotsModule,
    users: usersModule,
  },
  getters: {
    foo(state) {
      console.log(state.foo);
      return `root-getter/${state.foo}`;
    },
  },
});
