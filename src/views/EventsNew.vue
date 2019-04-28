<template>
  <div class="create-event">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Start A New Party</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Choose Party Length (minutes):</label>
          <input type="number" class="form-control" v-model.number="event_duration" />
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
      event_duration: "",
      event: [],
      errors: []
    };
  },
  methods: {
    submit: function() {
      const params = {
        event_duration: this.event_duration
      };
      axios
        .post("/api/events", params)
        .then(response => {
          this.event = response.data;
          console.log(this.event.id);
          console.log(this.event.event_token);
          const params = {
            event_id: this.event.id,
            event_token: this.event.event_token
          };
          return axios.post("/api/event_users", params).then(response => {
            localStorage.setItem("event_token", this.event_token);
            this.$emit("changeToken");
            this.$router.push("/songs");
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
