// next.config.js
module.exports = {
    target: 'server',
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });

        config.resolve.fallback = { fs: false, process: require.resolve("process/browser") };

        return config;
    },
    async redirects() {     
        return [
          {
            source: '/online-company-registration',
            destination: '/company-incorporation',
            permanent: true,
          },
          {
            source: '/virtual-accounting-bookkeeping',
            destination: '/virtual-cfo',
            permanent: true,
          },
        ]
      },
}
