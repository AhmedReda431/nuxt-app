const middleware = {}

middleware['adjustScroll'] = require('..\\middleware\\adjustScroll.js')
middleware['adjustScroll'] = middleware['adjustScroll'].default || middleware['adjustScroll']

export default middleware
