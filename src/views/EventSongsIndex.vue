<template>
  <div class="wrapper">
    <div class="content">
      <h2>Song Queue</h2>
      <div class="row" id="title-bar">
        <div class="col-md-5 bar-el"><h5>Song</h5></div>
        <div class="col-md-3 bar-el"><h5>Artist</h5></div>
        <div class="col-md-2 bar-el"><h5>User</h5></div>
      </div>
      <div class="song-list">
        <draggable
          v-model="event_songs"
          group="queue"
          v-bind="dragOptions"
          @start="drag = true"
          @end="
            drag = false;
            dragSort();
          "
        >
          <transition-group type="transition" :name="!drag ? 'flip-list' : null">
            <div v-for="event_song in event_songs" :key="event_song.id" class="row" id="songs">
              <div class="col-md-5 list-el">{{ event_song.song_title }}</div>
              <div class="col-md-3 list-el">{{ event_song.song_artist }}</div>
              <div class="col-md-2 list-el">{{ event_song.user_name }}</div>
              <div class="col-md-1 queue-btn" id="move-top" v-on:click="moveToTop(event_song)">Move to Top</div>
              <div class="col-md-1 queue-btn" v-on:click="deleteFromQueue(event_song)">Delete</div>
            </div>
          </transition-group>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import draggable from "vuedraggable";
import ActionCable from "actioncable";

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
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: data => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        axios.get("api/event_songs").then(response => {
          this.event_songs = response.data;
        });
      }
    });
  },
  methods: {
    dragSort: function() {
      const idArray = [];
      this.event_songs.forEach(function(song) {
        idArray.push(song.id);
      });
      console.log(idArray);
      const params = {
        ids: idArray
      };
      axios.patch("api/event_songs", params);
    },
    moveToTop: function(selectedSong) {
      console.log(selectedSong.song_title + " has been moved to the top of the queue!");
      let index = this.event_songs.indexOf(selectedSong);
      if (index !== 0) {
        this.event_songs.splice(index, 1);
        this.event_songs.splice(0, 0, selectedSong);
        const idArray = [];
        this.event_songs.forEach(function(song) {
          idArray.push(song.id);
        });
        console.log(idArray);
        const params = {
          ids: idArray
        };
        axios.patch("api/event_songs", params);
      }
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
