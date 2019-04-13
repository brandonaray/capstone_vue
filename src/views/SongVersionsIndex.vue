<template>
  <div class="continer">
    <h2>All Songs</h2>
    <div v-for="song_version in song_versions" class="row" id="songlist">
      <div class="col-md-7">
        {{ song_version.title }}
        <div class="col-md">{{ song_version.artist }}</div>
      </div>
      <div class="col-md-3">{{ song_version.label }}</div>
      <div class="col-md-1">{{ song_version.duration }}</div>
      <div class="col-md-1" id="add-queue" v-on:click="addToQueue(song_version)">Add to Queue</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      song_versions: []
    };
  },
  created: function() {
    axios.get("api/song_versions").then(response => {
      this.song_versions = response.data;
    });
  },
  methods: {
    addToQueue: function(selectedSong) {
      console.log(selectedSong.title);
    }
  }
};
</script>
