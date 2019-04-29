<template>
  <div class="container">
    <div class="col-md-10">
      <div class="player">
        <iframe
          v-bind:src="event_songs[0].song_url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
    <div v-for="event_song in event_songs" class="col-md-2" id="list">
      <div>
        <span id="song-title">
          {{ event_song.song_title }}
        </span>
      </div>
      <div>{{ event_song.user_name }}</div>
      <div>{{ event_song.friendly_duration }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      event_songs: []
    };
  },
  created: function() {
    axios.get("api/event_songs").then(response => {
      this.event_songs = response.data;
    });
  }
};
</script>
