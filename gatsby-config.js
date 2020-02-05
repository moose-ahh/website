const path = require('path')

require(`dotenv`).config({
    path: `.env`,
})

module.exports = {
    siteMetadata: {
        siteTitle: `Brendan Heussler`,
        siteTitleAlt: `Brendan Heussler`,
        siteUrl: `https://builtbybrendan.com`,
        siteDescription: `The personal website for Brendan Heussler, a Software Engineer living in San Diego, California.  Writes on topics such as Java, Javascript, and anything in between`,
        siteLanguage: `en`,
        author: `@beedaan`,
    },
    plugins: [
        {
            resolve: `@lekoarts/gatsby-theme-minimal-blog`,
            options: {
                navigation: [
                    {
                        title: `Blog`,
                        slug: `/blog`,
                    },
                    {
                        title: `About`,
                        slug: `/about`,
                    },
                ],
                externalLinks: [
                    {
                        name: `Twitter`,
                        url: `https://twitter.com/beedaan`,
                    },
                ],
                /* Required because we are using gatsby-plugin-mdx */
                mdx: false
            },
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Brendan Heussler - Software Engineer is San Diego`,
                short_name: `Brendan Heussler`,
                description: `I'm Brendan, currently living in San Diego, California. I'm a software engineer at Swing AI. Currently, I'm working on a side project and writing about it.`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#6B46C1`,
                display: `standalone`,
                icons: [
                    {
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `img`),
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            withWebp: true
                        },
                    },
                ],
            },
        },
        // `gatsby-plugin-webpack-bundle-analyser-v2`,
    ],
}
