// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    //trigger an event called enqueue
    this.trigger('enqueue', this);
  },

  dequeue: function () {
    console.log('dequeue event:', this);
    this.trigger('dequeue', this);
  },

  removeFromQueue: function(){
    console.log('remove from queue', this);
    this.trigger('removeFromQueue', this);
  }
  // ended: function () {
  //   console.log('ended');
  //   this.trigger('ended', this);
  // }

});
