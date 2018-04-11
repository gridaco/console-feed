import { HookedConsole } from '../definitions/Console'

/**
 * Unhook a console constructor and restore back the Native methods
 * @argument console The Console constructor to Hook
 */
function Unhook(console: HookedConsole): boolean {
  if (console.feed) {
    for (const method of Object.keys(console.feed._backup)) {
      console[method] = console.feed._backup[method]
    }
    return delete console.feed
  } else {
    return false
  }
}

export default Unhook
