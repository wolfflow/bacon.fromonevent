init = (Bacon) ->
  Bacon.fromOnEvent = (target, eventName, calledOnce = false) ->
    fn = Bacon.fromBinder
    if calledOnce
      fn = Bacon.fromCallback
    fn (handler) ->
      target[eventName] = (args...) -> handler(args...)
      (-> target[eventName] = null)

if module?
  Bacon = require "baconjs"
  module.exports = init(Bacon)
else
  if typeof define == "function" and define.amd
    define ["bacon"], init
  else
    init @Bacon
