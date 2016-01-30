// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // queue, could be an array
    // this.set('queue', []);
    // this.set('front', 0);
    // // front and end of queue
    // this.set('queueSize', 0);

  },

  queue: [],

  enqueue: function(song){
    queue.push(song);
  }

});