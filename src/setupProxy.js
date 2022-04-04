const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1', {
            target:'https://api.yelp.com/v3/businesses',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })
    )
}