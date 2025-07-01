import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";
import HelloView from "@/views/HelloView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "hello",
      component: HelloView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/contact",
      name: "contact-me",
      component: ContactView,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsView,
    },
  ],
});

export default router;
