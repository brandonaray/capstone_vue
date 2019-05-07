<template>
  <div class="container">
    <div class="col-md-10">
      <div class="player">
        <!-- <iframe
          v-bind:src="event_songs[0].song_url"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="video"
        ></iframe> -->
        <youtube
          :video-id="this.event_songs[0].song_url"
          ref="youtube"
          @playing="playing"
          @ended="nextSong()"
        ></youtube>
        <button class="btn btn-primary" @click="playVideo">Play Song</button>
        <button class="btn btn-primary" @click="nextSong()">Skip Song</button>
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
import Vue from "vue";
import axios from "axios";
import VueYoutube from "vue-youtube";
Vue.use(VueYoutube);

export default {
  data: function() {
    return {
      event_songs: []
      // videoId: this.event_songs[0].song_url
    };
  },
  created: function() {
    axios.get("api/event_songs").then(response => {
      this.event_songs = response.data;
    });
  },
  methods: {
    playVideo() {
      this.player.playVideo();
    },
    playing() {
      console.log("we are watching!!!");
    },
    nextSong() {
      axios.delete("api/event_songs/" + this.event_songs[0].id).then(response => {
        this.$router.push("/events/player");
      });
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player;
    }
  }
};
</script>
