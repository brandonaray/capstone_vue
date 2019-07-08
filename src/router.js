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
import CategoriesIndex from "./views/CategoriesIndex.vue";
import Eighties from "./views/Eighties.vue";
import PowerBallads from "./views/PowerBallads.vue";
import ForgotOnPurpose from "./views/ForgotOnPurpose.vue";
import OneHit from "./views/OneHit.vue";
import RealityBites from "./views/RealityBites.vue";
import LastCall from "./views/LastCall.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
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
    },
    {
      path: "/events/new",
      name: "create-event",
      component: EventsNew
    },
    {
      path: "/categories",
      name: "categories",
      component: CategoriesIndex
    },
    {
      path: "/categories/80s",
      name: "eighties",
      component: Eighties
    },
    {
      path: "/categories/power-ballads",
      name: "power-ballads",
      component: PowerBallads
    },
    {
      path: "/categories/forgot",
      name: "forgot",
      component: ForgotOnPurpose
    },
    {
      path: "/categories/one-hit",
      name: "one-hit",
      component: OneHit
    },
    {
      path: "/categories/reality",
      name: "reality",
      component: RealityBites
    },
    {
      path: "/categories/last-call",
      name: "last-call",
      component: LastCall
    }
  ]
});
