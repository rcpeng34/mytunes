// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.render();

    this.collection.on('add remove', function(){
      //this adds a listener to SongQueueView
      //appends a SongQueueEntryView with the model = song
      this.render();
    }, this);

  },

  render: function() {
    // return this.$el;
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },


});
