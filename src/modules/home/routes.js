import Module from './Module.vue';
import index from './views/index.vue';

export default {
  path: '/',
  component: Module,
  redirect: 'home',
  children: [
    { path: 'home', component: index },
  ],
};
