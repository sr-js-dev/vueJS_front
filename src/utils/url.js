export const getParameterByName = (name, url) => {
  /* eslint-disable no-useless-escape */
  name = name.replace(/[\[\]]/g, '\\$&')
  const results = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)').exec(url)
  if (!results || !results[2]) {
    return ''
  } else {
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
  }
}
