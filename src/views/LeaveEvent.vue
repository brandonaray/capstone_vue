<template>
  <div class="leave-event"></div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: []
    };
  },
  created: function() {
    axios.patch("/api/event_users").then(response => (this.message = response.data.json));
    console.log(this.message);
    localStorage.removeItem("event_token");
    this.$emit("changeToken");
    this.$router.push("/events/join");
  }
};
</script>
