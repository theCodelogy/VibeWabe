// next.config.js
module.exports = {
    webpack: (config, { isServer }) => {
      // Add file-loader for video files
      config.module.rules.push({
        test: /\.(webm|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/videos/', // Output path for the videos
              publicPath: '/_next/static/videos/', // Public path for the videos
              name: '[name].[ext]',
              esModule: false,
            },
          },
        ],
      });
  
      // This is needed to avoid errors when importing non-JS files
      if (!isServer) {
        config.resolve.fallback = { fs: false };
      }
  
      return config;
    },
  };
  