<template>
  <div class="container">
    <div class="col-md-11">
      <div class="player">
        <iframe
          src="https://www.youtube.com/embed/-4harOr09mk"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe>
      </div>
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
