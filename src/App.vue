<template>
  <div class="app">
    <div class="nav">
      <img alt="KHP logo" src="./assets/KHP-logo.png" />
      <ul>
        <router-link tag="li" to="/signup" v-if="!jwt">Signup</router-link>
        <router-link tag="li" to="/login" v-if="!jwt">Login</router-link>
        <router-link tag="li" to="/events/new" v-if="jwt && !event_token">Create Event</router-link>
        <router-link tag="li" to="/events/join" v-if="jwt && !event_token">Join Event</router-link>
        <router-link tag="li" to="/songs" v-if="jwt && event_token">Browse Songs</router-link>
        <router-link tag="li" to="/events/queue" v-if="jwt && event_token">Song Queue</router-link>
        <router-link tag="li" to="/categories" v-if="jwt && event_token">Categories</router-link>
        <router-link tag="li" id="logout" to="/logout" v-if="jwt">Logout</router-link>
      </ul>
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
  padding: 0;
  height: 83px;
  width: 1140px;
  overflow: hidden;
  margin: 27px 150px 45px 150px;
}
.nav ul {
  list-style-type: none;
  padding: 0;
  margin-left: 292px;
  width: 680px;
}
.nav img {
  height: 83px;
}
.nav li {
  float: left;
  font-family: Bungee;
  font-size: 18px;
  color: #f5fefe;
  padding-right: 72px;
}
.nav li a {
  display: block;
}
#logout {
  font-family: Muli;
  font-size: 15px;
  letter-spacing: 0.4px;
  color: #e1ebeb;
  float: right;
  padding: 0;
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
