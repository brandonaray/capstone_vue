<template>
  <div class="create-event">
    <div class="login-wrapper" v-if="!event_token">
      <form v-on:submit.prevent="submit()">
        <h2>Start A New Party</h2>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Choose Party Length (minutes):</label>
          <input type="number" class="form-control" v-model.number="event_duration" />
        </div>
        <input type="submit" class="fun-button" value="Get This Party Started" />
      </form>
    </div>
    <div class="event-created" v-if="event_token">
      <div class="login-wrapper">
        <h2 id="party-start">Your Party Has Started!</h2>
        <div class="row">
          <h3>Your Party ID is:</h3>
          <h4>{{ event_duration }}</h4>
        </div>
        <div class="row">
          <h3>Your Party Token is:</h3>
          <h4>{{ event_token }}</h4>
        </div>
        <qriously id="qr" value="/events/join" :size="200" />
        <h3>Or scan from your smartphone:</h3>
      </div>
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
      event_token: null,
      admin: null,
      event: [],
      event_user: [],
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
          // console.log(this.event);
          localStorage.setItem("event_token", this.event.event_token);
          // console.log(localStorage.event_token);
          this.$emit("changeToken");
          const params = {
            event_id: this.event.id,
            event_token: this.event.event_token,
            status: "admin"
          };
          return axios.post("/api/event_users", params).then(response => {
            this.event_user = response.data;
            this.$emit("changeStatus");
            console.log(this.event);
            location.reload(true);
          });
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>
