import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import Board from './components/Board.vue';
import Configurations from './components/Configurations.vue';
import BoardConfiguration from './components/BoardConfiguration.vue';
import TokenConfiguration from './components/TokenConfiguration.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'board',
          name: 'board',
          component: Board,
        },
        {
          path: 'configurations',
          name: 'configurations',
          component: Configurations,
          children: [
            {
              path: 'boardConfiguration',
              name: 'boardConfiguration',
              component: BoardConfiguration,
            },
            {
              path: 'tokenConfiguration',
              name: 'tokenConfiguration',
              component: TokenConfiguration,
            },
          ],
        },
      ],
    },
  ],
});