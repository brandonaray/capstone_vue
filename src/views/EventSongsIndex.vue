<template>
  <div class="continer">
    <h2>Song Queue</h2>
    <div class="row" id="title-bar">
      <div class="col-md-6"><h5>Song</h5></div>
      <div class="col-md-4"><h5>User</h5></div>
    </div>
    <div v-for="event_song in event_songs" class="row" id="list">
      <div class="col-md-6">
        <span id="song-title">
          {{ event_song.song_title }}
        </span>
        <div class="col-md">{{ event_song.song_artist }}</div>
      </div>
      <div class="col-md-3">{{ event_song.user_name }}</div>
      <div class="col-md-1">{{ event_song.event_id }}</div>
      <div class="col-md-1" id="move-to-top" v-on:click="moveToTop(event_song)">Move to Top</div>
      <div class="col-md-1" id="add-queue" v-on:click="deleteFromQueue(event_song)">Delete</div>
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
  },
  methods: {
    moveToTop: function(selectedSong) {
      console.log(selectedSong.song_title + " has been moved to the top of the queue!");
    },
    deleteFromQueue: function(selectedSong) {
      axios.delete("api/event_songs/" + selectedSong.id).then(response => {
        const index = this.event_songs.indexOf(selectedSong);
        this.event_songs.splice(index, 1);
      });
    }
  }
};
</script>
