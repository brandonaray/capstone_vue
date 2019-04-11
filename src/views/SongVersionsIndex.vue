<template>
  <div class="continer">
    <h1>All Songs</h1>
    <div v-for="song_version in song_versions">
      {{ song_version.title }}
      {{ song_version.artist }}
      {{ song_version.label }}
      {{ song_version.duration }}
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
  methods: {}
};
</script>
