# bacon.fromonevent

Legacy event binding plugin for [Bacon.js](https://github.com/baconjs/bacon.js).

Quite useless at desktop/mobile, but certainly useful in a huge variety of embedded browsers (e.g. Set-Top Boxes and SmartTVs), which component APIs use 'on-eventname' style for their callbacks.

[![Build Status](https://api.travis-ci.org/wolfflow/bacon.fromonevent.png)](https://travis-ci.org/wolfflow/bacon.fromonevent)

## Example Code

```js
btn = document.getElementById("btn")
Bacon.fromOnEvent(btn, "onclick").onValue(function(){
  //callback here
})
```
