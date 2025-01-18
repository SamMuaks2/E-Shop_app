// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000',
      changeOrigin: true,
      onProxyRes: function (proxyRes) {
        proxyRes.headers['Content-Security-Policy'] =
          "default-src 'self'; connect-src 'self' http://localhost:4000; script-src 'self'";
      },
    })
  );
};
