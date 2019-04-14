<template>
  <div class="container">
    <h2>Join an Event!</h2>
    <h3>
      <div class="row" id="list" v-for="event in events">
        <div class="col-md-6">{{ event.event_name }}</div>
        <div class="col-md-6">{{ event.event_duration }}</div>
      </div>
    </h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      events: []
    };
  },
  created: function() {
    axios.get("api/events").then(response => {
      this.events = response.data;
      console.log(this.events);
    });
  }
};
</script>
