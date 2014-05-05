expect = require("chai").expect

fromOnEvent = require "../dist/bacon.fromonevent.js"

describe "handler sub/unsub", ->
  before ->
    node = document.createElement "div"
    node.innerHTML = "test button"
    document.body.appendChild(node)
    @button = node
    @obs = null
    @unsub = null


  it "sets on<event> handler", ->
    @obs = fromOnEvent(@button, 'onclick')
    called = false
    @unsub = @obs.onValue(-> called = true)
    @button.onclick()
    expect(called).to.equal(true)

  it "unsets on<event> handler", ->
    expect(typeof @button.onclick).to.deep.equal('function') 
    @unsub()
    expect(@button.onclick).to.deep.equal(null)
