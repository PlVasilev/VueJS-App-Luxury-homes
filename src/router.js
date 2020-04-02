import VueRouter from 'vue-router';
import Landing from './components/core/Landing';
import NotFound from './components/core/NotFound';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
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