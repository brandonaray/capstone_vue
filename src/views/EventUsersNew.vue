<template>
  <div class="join">
    <div class="login-wrapper">
      <form v-on:submit.prevent="submit()">
        <h2>Join A Party</h2>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Event ID:</label>
          <input type="text" class="form-control" v-model="event_id" />
        </div>
        <div class="form-group">
          <label id="event-password">Event Password:</label>
          <input type="text" class="form-control" v-model="event_token" />
        </div>
        <input type="submit" class="fun-button" id="party-button" value="Join This Party" />
      </form>
      <div class="signup-link">
        <router-link to="/events/new">Start A Party</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event_id: null,
      event_token: null,
      status: null,
      errors: []
    };
  },
  methods: {
    submit: function() {
      const params = {
        event_id: this.event_id,
        event_token: this.event_token,
        status: "participant"
      };
      axios
        .post("/api/event_users", params)
        .then(response => {
          localStorage.setItem("event_token", this.event_token);
          console.log(this.event_token);
          this.$emit("changeToken");
          localStorage.setItem("status", this.status);
          console.log(this.status);
          this.$emit("changeStatus");
          this.$router.push("/songs");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
