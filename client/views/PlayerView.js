// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {

  },

  events: {
    'ended': function (){
      this.model.dequeue();
    }
  },

  setSong: function(song){
    this.model = song;
    console.log('currentsong', song);
    if (song) {
      this.setSongTitle(song);
    } else {
      $('#songInfo').html('');
    }
    this.render();
  },

  setSongTitle: function(song){
    var songinfo = song.get('artist') + ' | ' + song.get('title');
    $("#songInfo").html(songinfo);
  },

  render: function(){
    return this.$el.attr('src',   this.model ? this.model.get('url') : '');
  }

});
