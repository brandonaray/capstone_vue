<template>
  <div class="create-event">
    <div class="content" v-if="!event_token">
      <form v-on:submit.prevent="submit()">
        <h2>Start A New Party</h2>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Choose Party Length (minutes):</label>
          <input type="number" class="form-control" v-model.number="event_duration" />
        </div>
        <input type="submit" class="fun-button" value="Submit" />
      </form>
    </div>
    <div class="event-created" v-if="event_token">
      <h1>Tell Your Friends to Join the Party!</h1>
      <h2>Your Party ID is:</h2>
      <h2>{{ event.event_duration }}</h2>
      <h2>Your Party Token is:</h2>
      <h2>{{ event_token }}</h2>
      <h2>Or scan from your smartphone:</h2>
      <qriously id="qr" value="/events/join" :size="200" />
    </div>
    <router-view v-on:changeToken="setToken()" />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      event_duration: "",
      event: [],
      errors: [],
      event_token: localStorage.event_token
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
          console.log(this.event);
          localStorage.setItem("event_token", this.event.event_token);
          console.log(localStorage.event_token);
          this.$emit("changeToken");
          const params = {
            event_id: this.event.id,
            event_token: this.event.event_token
          };
          return axios.post("/api/event_users", params).then(response => {
            this.$router.push("/events/new");
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
