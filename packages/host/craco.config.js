const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "root",
          remotes: {
            remoteAppOne: "remoteAppOne@http://localhost:3001/remoteEntry.js",
            remoteAppTwo: "remoteAppTwo@http://localhost:3002/remoteEntry.js",
            remoteAppThree: "remoteAppThree@http://localhost:3003/remoteEntry.js",
          },
          shared: {
            ...deps,
            react: {
              singleton: true,
            },
            "react-dom": {
              singleton: true,
            },
          },
        }),
      ],
    },
  },
};
