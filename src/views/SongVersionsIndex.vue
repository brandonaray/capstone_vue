<template>
  <div class="continer">
    <div class="content">
      <h2>All Songs</h2>
      <div class="form-wrapper">
        <form novalidate="novalidate" onsubmit="return false;" class="searchbox sbx-custom">
          <div role="search" class="sbx-custom__wrapper">
            <input
              type="search"
              name="search"
              placeholder="Search by artist or song title"
              autocomplete="off"
              required="required"
              class="sbx-custom__input"
              v-model="searchFilter"
            />
            <button type="submit" title="Submit your search query." class="sbx-custom__submit">
              <svg role="img" aria-label="Search">
                <use xlink:href="#sbx-icon-search-23"></use>
              </svg>
            </button>
            <button type="reset" title="Clear the search query." class="sbx-custom__reset">
              <svg role="img" aria-label="Reset">
                <use xlink:href="#sbx-icon-clear-5"></use>
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div class="row" id="title-bar">
        <div class="col-md-5 bar-el" v-on:click="setSortAttribute('title')"><h5>Title</h5></div>
        <div class="col-md-3 bar-el" v-on:click="setSortAttribute('artist')"><h5>Artist</h5></div>
        <div class="col-md-2 bar-el"><h5>Duration</h5></div>
      </div>
      <div class="song-list">
        <div
          v-for="song_version in orderBy(
            filterBy(song_versions, searchFilter, 'title', 'artist'),
            sortAttribute,
            sortAscending
          )"
          class="row"
          id="songs"
        >
          <div class="col-md-5 list-el">{{ song_version.title }}</div>
          <div class="col-md-3 list-el">{{ song_version.artist }}</div>
          <div class="col-md-2 list-el">{{ song_version.friendly_duration }}</div>
          <div class="col-md-2">
            <button class="add-queue" v-on:click="addToQueue(song_version)">
              Add to Queue
            </button>
          </div>
        </div>
      </div>
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
      const params = {
        song_version_id: selectedSong.id
      };
      axios.post("/api/event_songs", params);
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
