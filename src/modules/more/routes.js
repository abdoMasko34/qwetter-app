import Module from './Module.vue';
import index from './views/index.vue';

export default {
  path: '/',
  component: Module,
  children: [
    { path: 'more', component: index },
  ],
};
