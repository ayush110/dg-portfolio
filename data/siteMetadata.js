/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'ayush shah',
  author: 'Ayush Shah',
  headerTitle: '',
  description: 'Systems Design Engineering student at UWaterloo.',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'http://www.ayushshah.co',
  siteRepo: '',
  siteLogo: '/static/images/face.jpeg',
  image: '/static/images/face.jpeg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'ayush110shah@gmail.com',
  github: 'https://github.com/ayush110',
  linkedin: 'https://www.linkedin.com/in/shah-ayush/',
  twitter: 'https://twitter.com/ayushshah110',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: 'programaniak.vercel.app',
    googleAnalyticsId: 'G-EZ2LTMDD9D',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'pl',
    },
  },
}

module.exports = siteMetadata
