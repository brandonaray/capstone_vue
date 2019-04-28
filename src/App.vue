<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup" v-if="!jwt">Signup</router-link>
      |
      <router-link to="/login" v-if="!jwt">Login</router-link>
      |
      <router-link to="/logout" v-if="jwt">Logout</router-link>
      |
      <router-link to="/events/new" v-if="jwt">Create Event</router-link>
      |
      <router-link to="/events/join" v-if="jwt && !event_token">Join Event</router-link>
      |
      <router-link to="/songs" v-if="jwt && event_token">Songs</router-link>
      |
      <router-link to="/events/queue" v-if="jwt && event_token">Song Queue</router-link>
    </div>
    <router-view v-on:changeJwt="setJwt()" v-on:changeToken="setToken" />
  </div>
</template>

<style>
body {
  margin: 10px;
}
#list:nth-child(even) {
  background-color: #f2f2f2;
}
#song-title {
  font-size: 110%;
  font-weight: bold;
}
#title-bar {
  background-color: #bfb7b7;
  padding: 3px 0px 0px 0px;
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
