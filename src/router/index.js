import { createRouter, createWebHistory } from "vue-router";

import AboutUs from "@/pages/AboutUs.vue";
import AdminArticles from "@/pages/Admin/Articles.vue";
import AdminBugReports from "@/pages/Admin/BugReports.vue";
import AdminContacts from "@/pages/Admin/Contacts.vue";
import AdminIndex from "@/pages/Admin/Index.vue";
import AdminLogin from "@/pages/Admin/Login.vue";
import ArticleDetail from "@/pages/ArticleDetail.vue";
import Artikel from "@/pages/Artikel.vue";
import Contact from "@/pages/Contact.vue";
import Home from "@/pages/Home.vue";
import NotFound from "@/pages/NotFound.vue";
import ReportBug from "@/pages/ReportBug.vue";
import AboutMe from "@/pages/AboutMe.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about-us", name: "about-us", component: AboutUs },
  { path: "/artikel", name: "artikel", component: Artikel },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/about-me", name: "about-me", component: AboutMe},

  {
    path: "/artikel/:id",
    name: "artikel-detail",
    component: ArticleDetail,
    props: true,
  },

  { path: "/report-bug", name: "report-bug", component: ReportBug },

  // // Admin
  // {
  //   path: "/admin/login",
  //   name: "admin-login",
  //   component: AdminLogin,
  //   meta: { guestOnly: true },
  // },
  // {
  //   path: "/admin",
  //   component: AdminIndex,
  //   children: [
  //     {
  //       path: "",
  //       name: "admin-dashboard",
  //       component: AdminArticles,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "articles",
  //       name: "admin-articles",
  //       component: AdminArticles,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "contacts",
  //       name: "admin-contacts",
  //       component: AdminContacts,
  //       meta: { requiresAuth: true },
  //     },
  //     {
  //       path: "bug-reports",
  //       name: "admin-bug-reports",
  //       component: AdminBugReports,
  //       meta: { requiresAuth: true },
  //     },
  //   ],
  // },

  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// function isAuthenticated() {
//   try {
//     const token = localStorage.getItem("tiarana_admin_token");
//     return !!token;
//   } catch (e) {
//     return false;
//   }
// }

// router.beforeEach((to, from, next) => {
//   const authed = isAuthenticated();
//   if (to.meta?.requiresAuth && !authed) {
//     return next({ name: "admin-login", query: { redirect: to.fullPath } });
//   }
//   if (to.meta?.guestOnly && authed) {
//     return next({ name: "admin-dashboard" });
//   }
//   next();
// });

export default router;
