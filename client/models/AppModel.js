// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
      
      //check size of queue
        // if the size of songQueue is 1, then play the list and dequeue currentSong.
      if(this.get('songQueue').length === 1){
        this.get('songQueue').playFirst();
        // this.get('currentSong').dequeue();
      }

    }, this);

    this.get('songQueue').on('playFirst', function() {
      var firstSong = this.get('songQueue').at(0);
      this.set('currentSong', firstSong);
    }, this);

    params.library.on('dequeue', function() {
      // remove the the first song
      this.get('songQueue').remove(this.get('songQueue').at(0));
      // call playlist
      if ( this.get('songQueue').length > 0 ) {
        this.get('songQueue').playFirst();
      }
    }, this);

    this.get('songQueue').on('removeFromQueue', function(){
      this.get('songQueue').remove(arguments[0]);
    }, this);
  }

});
