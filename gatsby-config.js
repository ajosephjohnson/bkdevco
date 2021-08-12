require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

process.on('warning', warning => {
  console.log(warning.stack);
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.bkdev.co',
    title: 'Brooklyn Development Co.',
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.jpg',
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        stages: ['develop'],
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        exclude: ['node_modules', '.cache', 'public'],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GA_TRACKING_ID],
      },
    },
  ],
};
