<template>
  <div class="continer">
    <h2>Song Queue</h2>
    <div class="row" id="title-bar">
      <div class="col-md-6"><h5>Song</h5></div>
      <div class="col-md-4"><h5>User</h5></div>
    </div>
    <draggable v-model="event_songs" group="queue" v-bind="dragOptions" @start="drag = true" @end="drag = false">
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div v-for="event_song in event_songs" :key="event_song.id" class="row" id="list">
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
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import axios from "axios";
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data: function() {
    return {
      event_songs: [],
      drag: false
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
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>
<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
