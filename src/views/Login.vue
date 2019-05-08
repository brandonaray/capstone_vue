<template>
  <div class="login">
    <div class="login-wrapper" v-if="!jwt">
      <img alt="KHP logo" class="big-logo" src="../assets/KHP-logo.png" />
      <form v-on:submit.prevent="submit()">
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-control" v-model="email" />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password" />
        </div>
        <input type="submit" class="fun-button" value="Submit" />
      </form>
      <div class="signup-link">
        <router-link to="/signup">Sign Up</router-link>
      </div>
    </div>
    <div class="event-join-wrapper" v-if="jwt">
      <a href="/events/new">
        <div class="start-event">Start A Party</div>
      </a>
      <h6>or</h6>
      <a href="/events/join">
        <div class="join-event">Join A Party</div>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
      jwt: null
    };
  },
  created: function() {
    this.jwt = localStorage.jwt;
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$emit("changeJwt");
          location.reload(true);
        })
        .catch(error => {
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>
