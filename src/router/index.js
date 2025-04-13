import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Plantbook from '../views/plantbook.vue';
import Plantdetect from '../views/plantdetect.vue';
import scanresult from '../views/scanresult.vue';
import profile from '../views/profile.vue';
import guide from '../views/guide.vue';

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/plantbook', component: Plantbook },
  { path: '/plantdetect', component: Plantdetect },
  { path: '/scanresult', component: scanresult },
  { path: '/profile', component: profile },
  { path: '/guide', component: guide },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
