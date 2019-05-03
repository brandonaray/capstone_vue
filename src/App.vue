<template>
  <div id="app">
    <div class="nav col-md-12">
      <img class="col-md-5" alt="KHP logo" src="./assets/KHP-logo.png" />
      <div class="nav-main col-md-6">
        <router-link to="/signup" v-if="!jwt">Signup</router-link>
        <router-link to="/login" v-if="!jwt">Login</router-link>
        <router-link to="/events/new" v-if="jwt && !event_token">Create Event</router-link>
        <router-link to="/events/join" v-if="jwt && !event_token">Join Event</router-link>
        <router-link to="/songs" v-if="jwt && event_token">Browse Songs</router-link>
        <router-link to="/events/queue" v-if="jwt && event_token">Song Queue</router-link>
        <router-link to="/categories" v-if="jwt && event_token">Categories</router-link>
      </div>
      <router-link class="col-md-1" to="/logout" v-if="jwt">Logout</router-link>
    </div>
    <router-view v-on:changeJwt="setJwt()" v-on:changeToken="setToken()" />
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  font-family: "Muli", sans-serif;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(to bottom, #222045, #090819 23%, #090819);
  color: #f5fefe;
}
.app {
  max-width: 1440px;
}
.nav {
  height: 83px;
  max-width: 1140px;
  margin-top: 27px;
  margin-left: 150px;
  margin-right: 150px;
  border: white solid 2px;
}
.nav img {
  height: 100%;
  object-fit: contain;
  text-align: left;
  border: white solid 2px;
}
.nav-main {
  padding-left: 292px;
}
.nav-main a {
  font-family: Bungee;
  font-size: 18px;
  color: #f5fefe;
  text-decoration: none;
  display: inline;
  border: white solid 2px;
  text-align: left;
}
.player {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
      event_token: localStorage.event_token
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
    console.log("My event token is ", localStorage.event_token);
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
    setToken: function() {
      this.event_token = localStorage.event_token;
    }
  }
};
</script>
