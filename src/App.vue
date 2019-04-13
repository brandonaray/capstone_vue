<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/songs">Songs</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
body {
  margin: 10px;
}
#songlist:nth-child(even) {
  background-color: #f2f2f2;
}
#song-title {
  font-size: 110%;
  font-weight: bold;
}
</style>
