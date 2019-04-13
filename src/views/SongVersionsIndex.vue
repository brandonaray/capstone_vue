<template>
  <div class="continer">
    <h2>All Songs</h2>
    <div v-for="song_version in song_versions" class="row" id="songlist" v-on:click="songSelect(song_version)">
      <div class="col-md-6">
        {{ song_version.title }}
        <div class="col-md">{{ song_version.artist }}</div>
      </div>
      <div class="col-md-3">{{ song_version.label }}</div>
      <div class="col-md-1">{{ song_version.duration }}</div>
      <div class="col-md-1">Move to Top</div>
      <div class="col-md-1">Delete</div>
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
    songSelect: function(selectedSong) {
      console.log(selectedSong.title);
    }
  }
};
</script>
