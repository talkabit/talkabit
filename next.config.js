/** @type {import('next').NextConfig} */
// const nextConfig = {
//     reactStrictMode: true,
//     swcMinify: true,
// }

// const debug = process.env.NODE_ENV !== 'production'

module.exports = {
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            options: {
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: { removeViewBox: false },
                            },
                        },
                    ],
                },
                titleProp: true,
            },
            test: /\.svg$/,
        })

        return config
    },
    nextConfig: {
        reactStrictMode: true,
        images: {
            loader: 'akamai',
            path: '',
        },
    },
}

// module.exports = nextConfig
