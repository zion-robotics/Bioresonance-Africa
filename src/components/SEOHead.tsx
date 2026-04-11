import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

const BASE_URL = "https://www.1stbioresonanceistofafrica.com";

export default function SEOHead({
  title,
  description,
  path,
  image = "https://www.1stbioresonanceistofafrica.com/og-image.jpg",
  type = "website",
}: SEOHeadProps) {
  const fullTitle = path === "/" ? title : `${title} | Bioresonance Africa`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Bioresonance Africa" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
