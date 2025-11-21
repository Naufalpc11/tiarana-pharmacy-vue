import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "@/pages/AboutUs.vue";
import ArticleDetail from "@/pages/ArticleDetail.vue";
import Artikel from "@/pages/Artikel.vue";
import Contact from "@/pages/Contact.vue";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import ReportBug from "@/pages/ReportBug.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about-us", name: "about-us", component: AboutUs },
  { path: "/artikel", name: "artikel", component: Artikel },
  { path: "/contact", name: "contact", component: Contact },

  {
    path: "/artikel/:id",
    name: "artikel-detail",
    component: ArticleDetail,
    props: true,
  },

  { path: "/report-bug", name: "report-bug", component: ReportBug },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
