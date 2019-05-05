<template>
  <div class="app">
    <div class="nav">
      <img alt="KHP logo" src="./assets/KHP-logo.png" />
      <ul>
        <router-link tag="li" to="/signup" v-if="!jwt"><span>Signup</span></router-link>
        <router-link tag="li" to="/login" v-if="!jwt"><span>Login</span></router-link>
        <router-link tag="li" to="/events/new" v-if="jwt && !event_token"><span>Create Event</span></router-link>
        <router-link tag="li" to="/events/join" v-if="jwt && !event_token"><span>Join Event</span></router-link>
        <router-link tag="li" to="/songs" v-if="jwt && event_token"><span>Browse Songs</span></router-link>
        <router-link tag="li" to="/events/queue" v-if="jwt && event_token"><span>Song Queue</span></router-link>
        <router-link tag="li" to="/categories" v-if="jwt && event_token"><span>Categories</span></router-link>
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
  padding-bottom: 22px;
  display: block;
}
.nav span {
  padding-bottom: 21px;
  user-select: none;
}
.nav span:hover {
  border-bottom: solid #f42ea0 5px;
  box-shadow: 0 4px 2px -2px #ff3cac;
}
#logout {
  font-family: Muli;
  font-size: 15px;
  letter-spacing: 0.4px;
  color: #e1ebeb;
  float: right;
  padding: 0;
}
.content {
  width: 1140px;
  margin: 0px 150px;
}
.content h2 {
  font-family: Bungee;
  font-size: 42px;
  letter-spacing: 1.1px;
  color: #f5fefe;
  height: 63px;
  width: 703px;
  display: inline-block;
}
.form-wrapper {
  height: 63px;
  width: 420px;
  float: right;
  text-align: right;
}
.song-list {
  width: 1140px;
  height: 545px;
  border: solid 1px #4a42bf;
  background-color: #050424;
  overflow: scroll;
}
#title-bar {
  background-color: #56ffcf;
  height: 52px;
  width: 1138px;
  margin: 0;
  position: fixed;
  z-index: 1000;
}
.bar-el {
  padding: 17px 0px 16px 31px;
}
h5 {
  font-family: Muli;
  font-size: 18px;
  font-weight: bold;
  color: #2b2672;
  user-select: none;
}
.list-wrapper {
  margin-top: 53px;
}
#songs {
  border: solid #4a42bf 1px;
  max-width: 1138px;
  height: 62px;
  margin: 0px;
}
#songs:hover {
  background-color: #1c184a;
}
.list-el {
  font-family: Muli;
  font-size: 17px;
  color: #f5fefe;
  padding: 17px 0px 16px 31px;
  user-select: none;
}
.add-queue {
  width: 151px;
  height: 36px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to right, #ff6602, #f42ea0);
  border-image-slice: 1;
  background-color: #090819;
  font-family: Bungee;
  font-size: 15px;
  color: #f5fefe;
  margin: 12px 27px 14px 0px;
}
.add-queue:hover {
  box-shadow: 0 0 8px 0 #ff3cac;
}
.add-queue:focus {
  outline: none;
}
.add-queue:active {
  border-image-source: linear-gradient(to left, #ff6602, #f42ea0);
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
