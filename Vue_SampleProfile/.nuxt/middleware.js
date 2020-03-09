const middleware = {}

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['i18n'] = require('..\\middleware\\i18n.js')
middleware['i18n'] = middleware['i18n'].default || middleware['i18n']

middleware['stats'] = require('..\\middleware\\stats.js')
middleware['stats'] = middleware['stats'].default || middleware['stats']

export default middleware
