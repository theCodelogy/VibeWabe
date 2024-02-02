module.exports = {
  webpack: (config, { isServer }) => {
    // Add file-loader for video files
    config.module.rules.push({
      test: /\.(webm|mp4)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos/",
            publicPath: "/_next/static/videos/",
            name: "[name].[ext]",
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
  images: {
    domains: ['127.0.0.1', 'localhost'], // Include localhost as an allowed domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};
