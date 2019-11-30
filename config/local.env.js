var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  platformUrl: '"http://local.facedrive.com:8081/platform"',
  dispatcherUrl: '"http://local.facedrive.com:8082/dispatch"',
  publishableKey: '"pk_test_owjB7vY5WV3EYFzDobwb5rMI"'
})
