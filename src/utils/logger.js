export const DEBUG = 'DEBUG'
export const ERROR = 'ERROR'

let _level = 'ERROR'

export default {
  set level (logLevel) {
    _level = logLevel
  },
  get level () {
    return _level
  },
  error (...msgs) {
    console.error(...msgs)
  },
  warn (...msgs) {
    if (_level === DEBUG) {
      console.warn(...msgs)
    }
  },
  log (...msgs) {
    if (_level === DEBUG) {
      console.log(...msgs)
    }
  }
}
