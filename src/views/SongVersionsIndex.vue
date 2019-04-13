<template>
  <div class="continer">
    <h2>All Songs</h2>
    <div class="row" id="title-bar">
      <div class="col-md-4"><h5>Title</h5></div>
      <div class="col-md-3"><h5>Artist</h5></div>
      <div class="col-md-2"><h5>Label</h5></div>
      <div class="col-md-2"><h5>Duration</h5></div>
    </div>
    <div v-for="song_version in song_versions" class="row" id="songlist">
      <div class="col-md-4">
        <span id="song-title">
          {{ song_version.title }}
        </span>
      </div>
      <div class="col-md-3">{{ song_version.artist }}</div>
      <div class="col-md-2">{{ song_version.label }}</div>
      <div class="col-md-2">{{ song_version.friendly_duration }}</div>
      <div class="col-md-1" id="add-queue" v-on:click="addToQueue(song_version)">Add to Queue</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      song_versions: [],
      searchFilter: ""
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
