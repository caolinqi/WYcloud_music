// import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../views/Home/HomePage.vue";
// import Podcast from "../views/Home/Podcast.vue";
// import MyMusic from "../views/Home/MyMusic.vue";
// import Follow from "../views/Home/Follow.vue";
// import Community from "../views/Home/Community.vue";

// const routes = [
//   { path: "/", redirect: "/discover" },
//   { path: "/discover", component: HomePage },
//   { path: "/podcast", component: Podcast },
//   { path: "/my", component: MyMusic },
//   { path: "/follow", component: Follow },
//   { path: "/community", component: Community },
// ];

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home/HomePage.vue";
import Podcast from "../views/Home/Podcast.vue";
import MyMusic from "../views/Home/MyMusic.vue";
import Follow from "../views/Home/Follow.vue";
import Community from "../views/Home/Community.vue";

const routes = [
  { path: "/", redirect: "/discover" },
  { path: "/discover", component: HomePage },
  { path: "/podcast", component: Podcast },
  { path: "/my", component: MyMusic },
  { path: "/follow", component: Follow },
  { path: "/community", component: Community },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//全局前置守卫

router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});

export default router;
