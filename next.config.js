// const withTM = require('next-transpile-modules')(['react-spring']);

// module.exports = withTM();

config.module.rules.push({
  test: /react-spring/,
  sideEffects: true,
});

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
