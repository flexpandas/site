import { Helmet } from "react-helmet-async";
import logoUrl from "@assets/favicon_1757783065181.png";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
}

export default function SEOHead({ title, description, path = "" }: SEOHeadProps) {
  const url = `https://flexpandas.com${path}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
      <link rel="icon" type="image/png" href={logoUrl} />
      <link rel="shortcut icon" type="image/png" href={logoUrl} />
    </Helmet>
  );
}