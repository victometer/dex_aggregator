// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//     app.use(
//         '/allowance',
//         createProxyMiddleware({
//             target: 'https://api.1inch.dev',
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/allowance': '',
//             },
//         })
//     );

//     app.use(
//         '/approve',
//         createProxyMiddleware({
//             target: 'https://api.1inch.dev',
//             changeOrigin: true,
//             pathRewrite: {
//                 '^/approve': '/swap/v5.2/1/approve',
//             },
//         })
//     );
// };
