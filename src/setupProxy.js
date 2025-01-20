// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://e-shop-backend-eta.vercel.app',
      changeOrigin: true,
      onProxyRes: function (proxyRes) {
        proxyRes.headers['Content-Security-Policy'] =
          "default-src 'self'; connect-src 'self' https://e-shop-backend-eta.vercel.app; script-src 'self'";
      },
    })
  );
};
