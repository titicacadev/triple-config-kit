import 'core-js/es6/set'
import 'core-js/es6/map'
import 'core-js/es6/symbol'
import 'core-js/es6/array'
import 'core-js/es7/array'
import 'core-js/es6/object'

function addCustomEventPolyfill() {
  if (typeof window.CustomEvent === 'function') {
    // If not IE
    return false
  }

  function CustomEvent(
    event,
    params = { bubbles: false, cancelable: false, detail: undefined },
  ) {
    const { bubbles, cancelable, detail } = params
    const customEvent = document.createEvent('CustomEvent')

    customEvent.initCustomEvent(customEvent, bubbles, cancelable, detail)

    return customEvent
  }

  CustomEvent.prototype = window.Event.prototype

  window.CustomEvent = CustomEvent
}

addCustomEventPolyfill()
