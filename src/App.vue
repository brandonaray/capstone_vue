<template>
  <div id="app">
    <div id="nav">
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/songs">Songs</router-link>
      |
      <router-link to="/events">Events</router-link>
    </div>
    <router-view />
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
