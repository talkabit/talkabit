module.exports = {
    siteMetadata: {
        title: "Talk A Bit",
        description:
      "Talk a Bit is a conference where technology is discussed and is back for its 9th edition! Join us on the 12th and 13th of February, 2021!",
        author: "@talkabit",
        navLinks: [
            {
                name: "Speakers",
                link: "/speakers",
            },
            {
                name: "Schedule",
                link: "/schedule",
            },
            {
                name: "Hackathon",
                link: "/hackathon",
            },
            {
                name: "About",
                link: "/about",
            },
            {
                name: "Sponsors",
                link: "/sponsors",
            },
        ],
    },
    plugins: [
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        "gatsby-transformer-remark",
        "gatsby-transformer-json",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "data",
                path: `${__dirname}/src/data`,
            },
        },
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "gatsby-starter-default",
                short_name: "starter",
                start_url: "/",
                background_color: "#663399",
                theme_color: "#663399",
                display: "minimal-ui",
                icon: "src/images/Tab4v-04.png", // This path is relative to the root of the site.
            },
        },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    ],
};
