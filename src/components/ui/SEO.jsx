import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, name, type }) {
  const defaultTitle = 'Atharv Studio | Premium Digital Agency'
  const defaultDescription = 'We build immersive digital experiences, high-performance websites, and compelling brands.'

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title ? `${title} | Atharv Studio` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'Atharv Studio'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
    </Helmet>
  )
}
