var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"production"',
  platformUrl: '"https://stage.facedrive.com/platform"',
  dispatcherUrl: '"https://stage.facedrive.com/dispatch"',
  publishableKey: '"pk_live_3sOFQYMqR2RDFSxa005kBPNy"'
})
