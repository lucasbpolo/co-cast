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

  function Channel(raw) {
    var self = this;

    if(!(this instanceof Channel)){
      return new Channel(raw);
    }
    
    $.extend(this, raw);

    if(!this.type){
      this.type = 'channel';
    }

    if(this.contents){
      $.each(this.contents, function(i, raw){
        self.contents[i] = new ns.Content(raw);
      });
    }

  }

  Channel.prototype.getStyles = function () {
    return this.styles;
  };


  ns.Channel = Channel;

}));