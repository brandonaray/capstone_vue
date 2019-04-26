<template>
  <div class="signup">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Join An Event</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Event ID:</label>
          <input type="text" class="form-control" v-model="event_id" />
        </div>
        <div class="form-group">
          <label>Event Token:</label>
          <input type="text" class="form-control" v-model="event_token" />
        </div>
        <input type="submit" class="btn btn-primary" value="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event_id: "",
      event_token: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      const params = {
        event_id: this.event_id,
        event_token: this.event_token
      };
      axios
        .post("/api/event_users", params)
        .then(response => {
          localStorage.setItem("event_token", this.event_token);
          this.$emit("changeToken");
          this.$router.push("/songs");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
