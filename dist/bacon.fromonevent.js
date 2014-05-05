(function() {
  var Bacon, init,
    __slice = [].slice;

  init = function(Bacon) {
    return Bacon.fromOnEvent = function(target, eventName, calledOnce) {
      var fn;
      if (calledOnce == null) {
        calledOnce = false;
      }
      fn = Bacon.fromBinder;
      if (calledOnce) {
        fn = Bacon.fromCallback;
      }
      return fn(function(handler) {
        target[eventName] = function() {
          var args;
          args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
          return handler.apply(null, args);
        };
        return function() {
          return target[eventName] = null;
        };
      });
    };
  };

  if (typeof module !== "undefined" && module !== null) {
    Bacon = require("baconjs");
    module.exports = init(Bacon);
  } else {
    if (typeof define === "function" && define.amd) {
      define(["bacon"], init);
    } else {
      init(this.Bacon);
    }
  }

}).call(this);
