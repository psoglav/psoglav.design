import { createRouter, createWebHistory } from "vue-router";
import Menu from "@/views/Menu.vue";
import PersonalInfo from "@/views/PersonalInfo.vue";

const routes = [
  {
    path: "/",
    component: Menu,
  },
  {
    path: "/me",
    name: 'personal info',
    component: PersonalInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
