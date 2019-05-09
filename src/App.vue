<template>
  <div class="app">
    <div class="nav" v-if="jwt">
      <img alt="KHP logo" src="./assets/KHP-logo.png" />
      <ul>
        <router-link tag="li" to="/songs" v-if="jwt && event_token && !['event-player'].includes($route.name)">
          <span>Browse Songs</span>
        </router-link>
        <router-link tag="li" to="/events/queue" v-if="jwt && event_token && !['event-player'].includes($route.name)">
          <span>Song Queue</span>
        </router-link>
        <router-link tag="li" to="/categories" v-if="jwt && event_token && !['event-player'].includes($route.name)">
          <span>Categories</span>
        </router-link>
        <router-link tag="li" id="logout" to="/logout" v-if="jwt">Logout</router-link>
      </ul>
    </div>
    <router-view v-on:changeJwt="setJwt()" v-on:changeToken="setToken()" v-on:changeStatus="setStatus()" />
  </div>
</template>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
  font-family: "Muli", sans-serif;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: linear-gradient(to bottom, #222045, #090819 23%, #090819);
  color: #f5fefe;
}
a:hover {
  text-decoration: none;
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
  color: #f5fefe;
  float: right;
  padding: 0;
  user-select: none;
}
.login-wrapper {
  margin-left: 50%;
}
.event-join-wrapper {
  margin-left: 50%;
  margin-top: 110px;
}
.event-join-wrapper div {
  font-family: Bungee;
  font-size: 50px;
  text-align: center;
  color: #f5fefe;
  padding-top: 10px;
  user-select: none;
}
.event-join-wrapper h6 {
  width: 504px;
  margin-left: -252px;
  margin-top: 22px;
  margin-bottom: 23px;
  text-align: center;
  font-family: Muli;
  font-size: 20px;
  color: #f5fefe;
  user-select: none;
}
.start-event {
  width: 504px;
  height: 89px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #ff6602, #f42ea0);
  margin-left: -252px;
}
.join-event {
  width: 504px;
  height: 89px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #f42ea0, #4a42bf);
  margin-left: -252px;
}
.big-logo {
  width: 331px;
  height: 168px;
  background-color: #transparent;
  margin: 119px 0px 53px -165px;
}
.form-group label {
  font-family: Bungee;
  font-size: 20px;
  font-weight: bold;
  color: #f5fefe;
  margin-left: -266px;
}
.form-control {
  width: 532px;
  height: 58px;
  border: solid 1px #4a42bf;
  background-color: #050424;
  border-radius: 0;
  margin-left: -266px;
}
.form-control:focus {
  background-color: inherit;
  color: #f5fefe;
}
.signup .big-logo {
  margin: 75px 0px 35px -124px;
  width: 248px;
  height: 126px;
}
.signup-link {
  width: 300px;
  margin-left: -150px;
  text-align: center;
}
.signup-link a {
  font-family: Muli;
  font-size: 17px;
  color: #f5fefe;
  user-select: none;
}
.login-link {
  width: 100px;
  margin-left: -50px;
  text-align: center;
}
.login-link a {
  font-family: Muli;
  font-size: 17px;
  color: #f5fefe;
  user-select: none;
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
  width: 1138px;
  height: 545px;
  border: solid 1px #4a42bf;
  background-color: #050424;
  overflow: scroll;
}
#title-bar {
  background-color: #56ffcf;
  height: 51px;
  width: 1138px;
  margin: 0;
  border: solid 1px #4a42bf;
  border-bottom: none;
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
.queue-btn {
  font-family: Muli;
  font-size: 14px;
  color: #f42ea0;
  padding: 17px 0px 16px 31px;
  user-select: none;
  cursor: pointer;
}
#move-top {
  padding-left: 0;
}
.player {
  width: 1140px;
  padding-left: 143px;
  margin-top: ;
}
iframe {
  width: 854px;
  height: 480px;
  border: solid 3px #f5fefe;
  background-color: #060606;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
#qr {
  background-color: #f5fefe;
  height: 200px;
  width: 200px;
}
.fun-button {
  width: 238px;
  height: 52px;
  border-radius: 4px;
  background-image: linear-gradient(to right, #ff6602, #f42ea0);
  font-family: Bungee;
  font-size: 20;
  color: #f5fefe;
  outline: none;
}
.login-wrapper .fun-button {
  margin: 56px 0px 29px -119px;
}
.signup .fun-button {
  margin: 30px 0px 29px -119px;
}
.category-cards {
  margin-left: 0;
  padding: 0;
  margin-bottom: 29px;
}
.category-cards div {
  width: 342px;
  height: 302px;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to right, #ff6602, #f42ea0);
  border-image-slice: 1;
  margin-right: 29px;
  font-family: Bungee;
  font-size: 31px;
  letter-spacing: 1px;
  color: #f5fefe;
  padding: 202px 40px 18px 14px;
}
.category-cards span::before {
  content: "\A";
}
#forgot {
  padding-top: 150px;
}
#second {
  margin-top: 29px;
}
.login-wrapper h2 {
  width: 532px;
  font-family: Bungee;
  font-size: 42px;
  letter-spacing: 1.1px;
  color: #f5fefe;
  margin: 58px 0px 58px -266px;
}
#event-password {
  margin-top: 10px;
}
#party-button {
  margin-top: 32px;
}
#party-start {
  text-align: center;
  margin: 0px 0px 47px 0px;
}
.event-created .login-wrapper {
  margin-left: 432px;
}
.event-created h3 {
  font-family: Bungee;
  font-size: 20px;
  display: inline;
}
#eighties {
  background-image: url("./assets/80srock.jpg");
  background-size: 342px 302px;
  padding-right: 100px;
}
#power-ballads {
  background-image: url("./assets/powerballads.jpg");
  background-size: 342px 302px;
}
#forgot {
  background-image: url("./assets/songsyouforgot.jpg");
  background-size: 342px 302px;
}
#one-hit {
  background-image: url("./assets/onehitwonders.jpg");
  background-size: 342px 302px;
}
#reality {
  background-image: url("./assets/realitybites.jpg");
  background-size: 342px 302px;
  padding-right: 100px;
}
#last-call {
  background-image: url("./assets/lastcall.jpg");
  background-size: 342px 302px;
}
#player-queue {
  height: 310px;
  margin-bottom: 20px;
}
</style>

<script>
export default {
  data: function() {
    return {
      jwt: null,
      event_token: localStorage.event_token,
      admin: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
    console.log("My jwt is", this.jwt);
    console.log("My event token is ", localStorage.event_token);
    console.log("My user status is ", localStorage.status);
  },
  methods: {
    setJwt: function() {
      this.jwt = localStorage.jwt;
    },
    setToken: function() {
      this.event_token = localStorage.event_token;
    },
    setStatus: function() {
      this.status = localStorage.status;
      if (localStorage.status === "admin") {
        this.admin;
      }
    }
  }
};
</script>
