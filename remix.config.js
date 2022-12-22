/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "cloudflare-pages",
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  devServerPort: 3001,
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  serverBuildPath: "functions/[[path]].js",
  publicPath: "/build/",
};
