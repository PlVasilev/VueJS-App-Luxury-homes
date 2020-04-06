import VueRouter from 'vue-router';
import Landing from './components/core/Landing';
import NotFound from './components/core/NotFound';
import Login from './components/authentication/Login';
import Register from './components/authentication/Register';
import Add from './components/properties/Add';
import All from './components/properties/All';
import My from './components/properties/My';
import Details from './components/properties/Details';
import Edit from './components/properties/Edit';
import Search from './components/properties/Search';
import Properties from './components/properties/Properties';
import NotAuthorized from './components/core/NotAuthorized';
import store from './store.js'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing
    },
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        store.getUser()
        const redirectUrl = !store.user ? undefined : '/notAuthorized'
        next(redirectUrl);
      }

    },
    {
      path: '/register',
      component: Register,
      beforeEnter: (to, from, next) => {
        store.getUser()
        const redirectUrl = !store.user ? undefined : '/notAuthorized'
        next(redirectUrl);
      }
    },
    // {
    //   path: '/edit/:id',
    //   component: About
    // },
    {
      path: '/properties',
      component: Properties,      
      beforeEnter: (to, from, next) => {
        store.getUser()
        const redirectUrl = store.user ? undefined : '/notAuthorized'
        next(redirectUrl);
      },
      children: [
        {
          path: 'add',
          component: Add,   
        },
        {
          path: 'all',
          component: All,   
        },
        {
          name: 'search',
          path: 'search',
          component: Search,   
        },
        {
          path: 'my',
          component: My,   
        },
        {
          name: 'edit',
          path: 'edit',
          component: Edit,   
        },
        {
          path: 'details/:id',
          component: Details,   
        }
      ]
    },
    {
      path: '/notAuthorized',
      component: NotAuthorized
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;