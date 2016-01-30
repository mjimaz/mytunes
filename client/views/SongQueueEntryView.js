// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      console.log('clicked on a song in queue. We are in Song Queue Entry View');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
