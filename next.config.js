const withTM = require('next-transpile-modules')(['react-spring']);

module.exports = withTM();

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
