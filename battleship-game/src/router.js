import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import BoardSetup from './views/BoardSetup.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/board-setup/:gameId',
      name: 'boardSetup',
      component: BoardSetup,
    },
  ],
});
