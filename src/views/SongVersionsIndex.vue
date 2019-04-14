<template>
  <div class="continer">
    <h2>All Songs</h2>
    Search by song title or artist:
    <input type="text" v-model="searchFilter" />
    <div class="row" id="title-bar">
      <div class="col-md-4" v-on:click="setSortAttribute('title')"><h5>Title</h5></div>
      <div class="col-md-3" v-on:click="setSortAttribute('artist')"><h5>Artist</h5></div>
      <div class="col-md-2"><h5>Label</h5></div>
      <div class="col-md-2"><h5>Duration</h5></div>
    </div>
    <div
      v-for="song_version in orderBy(
        filterBy(song_versions, searchFilter, 'title', 'artist'),
        sortAttribute,
        sortAscending
      )"
      class="row"
      id="songlist"
    >
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
      searchFilter: "",
      sortAttribute: "title",
      sortAscending: 1
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
    },
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        if (this.sortAscending === 1) {
          this.sortAscending = -1;
        } else {
          this.sortAscending = 1;
        }
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = inputAttribute;
    }
  }
};
</script>
