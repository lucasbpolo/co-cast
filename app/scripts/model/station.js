(function (root, factory) {

    if (typeof define === 'function' && define.amd) {
    define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
    root.CoCast = root.CoCast || {};
    root.CoCast.Model = root.CoCast.Model || {};
        factory(root.CoCast.Model);
    }

}(this, function (ns) {

  function Station(raw) {
    var self = this;

    if(!(this instanceof Station)){
      return new Station(raw);
    }
    
    $.extend(this, raw);

    if(!this.type){
      this.type = 'station';
    }

    if(this.channels){
      $.each(this.channels, function(i, raw){
        self.channels[i] = new ns.Channel(raw);
      });
    }

  }

  Station.prototype.getStyles = function () {
    return this.styles;
  };

  Station.prototype.getChannels = function () {
    return this.channels;
  };

  Station.prototype.getCaption = function () {
    return this.caption;
  };

  ns.Station = Station;

}));