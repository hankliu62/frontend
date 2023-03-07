const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const withTM = require("next-transpile-modules")([
  // `monaco-editor` isn't published to npm correctly: it includes both CSS
  // imports and non-Node friendly syntax, so it needs to be compiled.
  "monaco-editor",
  "highlight.js",
  "diff2html",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["antd"],
  webpack: (config, { isServer }) => {
    const rule = config.module.rules
      .find((rule) => rule.oneOf)
      .oneOf.find(
        (r) =>
          // Find the global CSS loader
          r.issuer && r.issuer.include && r.issuer.include.includes("_app")
      );
    if (rule) {
      rule.issuer.include = [
        rule.issuer.include,
        // Allow `monaco-editor` to import global CSS:
        // /[\\/]node_modules[\\/]monaco-editor[\\/]/
        /[/\\]node_modules[/\\]monaco-editor[/\\]/,
      ];
    }

    if (!isServer) {
      config.plugins.push(
        new MonacoWebpackPlugin({
          languages: [
            "sql",
            "json",
            "markdown",
            "css",
            "typescript",
            "javascript",
            "html",
            "graphql",
            "python",
            "scss",
            "yaml",
          ],
          filename: "static/[name].worker.js",
        })
      );
    }

    return config;
  },
  async headers() {
    return [
      {
        source: "/styles/animate.css/@4.1.1/animate.css",
        headers: [
          {
            key: "cache-control",
            value: "public, immutable, max-age=31536000",
          },
        ],
      },
    ];
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = withTM(nextConfig);
