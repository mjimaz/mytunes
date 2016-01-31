// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },

  playFirst: function () {
    //console.log('playfirst trigger:');
    this.trigger('playFirst', this);
    // update player view, set song
      // with first song
    // listening ended
  }

  


  

});