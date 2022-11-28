const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/user", {
      target: "http://223.130.130.51:8080/api/v1",
      changeOrigin: true,
    })
  );
};
