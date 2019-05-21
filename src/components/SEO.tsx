// import { graphql, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Helmet from 'react-helmet'

import * as config from '../constants/index'

interface SeoProps {
  isRoot: boolean
  title?: string
  description?: string
  postUrl?: string
  postDate?: string
  largeImage?: string
}

const SEO: FC<SeoProps> = ({
  isRoot,
  title,
  description,
  postUrl,
  postDate,
  largeImage,
}) => {
  const type = isRoot ? 'website' : 'article'

  // const { site } = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //         }
  //       }
  //     }
  //   `,
  // )


  /* 画像を作成したら有効にする */
  // const image =
  //   largeImage
  //     ? largeImage
  //     : config.blogImageUrl;
  // const twitterCard =
  //   largeImage
  //     ? 'summary_large_image'
  //     : 'summary';

  const image = config.userInfo.avatarUrl
  const twitterCard = config.userInfo.avatarUrl

  return (
    <Helmet>
      {/* General tags */}
      <meta name="description" content={description || config.blogInfo.description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      {/* {JSONLDTag} */}

      {/* OpenGraph tags */}
      <meta property="og:title" content={title || config.blogInfo.title} />
      <meta property="og:description" content={description || config.blogInfo.description} />
      <meta property="og:url" content={config.blogInfo.url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={config.blogInfo.title} />
      <meta property="og:image" content={image} />

      {/* OpenGraph tags for facebook */}
      {/* <meta property="fb:app_id" content={config.facebookAppId} /> */}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:title" content={title || config.blogInfo.title} />
      <meta name="twitter:description" content={description || config.blogInfo.description} />
      <meta name="twitter:site" content={`@${config.userInfo.twitterName}`} />

      <link rel="canonical" href={postUrl || config.blogInfo.url} />
    </Helmet>
  )
}

export default SEO