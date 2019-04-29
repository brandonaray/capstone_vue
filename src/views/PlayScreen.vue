<template>
  <div class="container">
    <div class="col-md-9">
      <div class="player row">
        <iframe
          src="https://www.youtube.com/embed/-4harOr09mk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
    </div>
    <div v-for="event_song in event_songs" class="row col-md-3" id="list">
      <div class="col-md-1">
        <span id="song-title">
          {{ event_song.song_title }}
        </span>
      </div>
      <div class="col-md-1">{{ event_song.user_name }}</div>
      <div class="col-md-1">{{ event_song.friendly_duration }}</div>
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
