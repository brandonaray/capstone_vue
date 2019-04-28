import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import SongVersionsIndex from "./views/SongVersionsIndex.vue";
import EventUsersNew from "./views/EventUsersNew.vue";
import EventSongsIndex from "./views/EventSongsIndex.vue";
import EventsNew from "./views/EventsNew.vue";
import PlayScreen from "./views/PlayScreen.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/songs",
      name: "songs",
      component: SongVersionsIndex
    },
    {
      path: "/events/join",
      name: "join",
      component: EventUsersNew
    },
    {
      path: "/events/queue",
      name: "queue",
      component: EventSongsIndex
    },
    {
      path: "/events/player",
      name: "event-player",
      component: PlayScreen
    }
  ]
});
