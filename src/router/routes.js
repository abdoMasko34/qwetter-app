import HomeModule from '../modules/home/routes';
import HelpPage from '../modules/help/routes';
import NotificationPage from '../modules/notification/routes';
import ExplorePage from '../modules/explore/routes';
import MorePage from '../modules/more/routes';

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      HomeModule,
      HelpPage,
      NotificationPage,
      ExplorePage,
      MorePage,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
