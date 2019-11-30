var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  platformUrl: '"/platform"',
  dispatcherUrl: '"/dispatch"',
  publishableKey: '"pk_test_owjB7vY5WV3EYFzDobwb5rMI"'
})
