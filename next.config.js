// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push(
//       {
//         test: /react-spring/,
//         sideEffects: true,
//       },
//       {
//         test: /\@react-spring\/parallax/,
//         sideEffects: true,
//       },
//     );

//     return config;
//   },
// };

module.exports = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
