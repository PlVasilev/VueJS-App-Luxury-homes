import VueRouter from 'vue-router';
import Landing from './components/core/Landing';
import NotFound from './components/core/NotFound';


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing
    },
    // {
    //   path: '/about',
    //   component: About
    // },
    // {
    //   path: '/edit/:id',
    //   component: About
    // },
    // {
    //   path: '/protected',
    //   component: Protected,
    //   beforeEnter: (to, from, next) => {
    //     const redirectUrl = store.user ? undefined : '/'
    //     next(redirectUrl);
    //   }
    // },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;