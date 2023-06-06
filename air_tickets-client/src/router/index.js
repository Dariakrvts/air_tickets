import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AccountView from '../views/AccountView.vue';
import RegisterAccountView from '../views/RegisterAccountView.vue';
import SingInView from '../views/SingInView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/account',
      name: 'Account',
      component: AccountView,
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterAccountView,
    },
    {
      path: '/singIn',
      name: 'SingIn',
      component: SingInView,
    }
  ],
});

export default router;
