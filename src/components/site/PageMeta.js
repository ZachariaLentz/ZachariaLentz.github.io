import React from "react";
import { Helmet } from "react-helmet-async";
import { site } from "../../portfolio";

export default function PageMeta({
  title,
  description,
  path = "/",
  type = "website",
  robots,
  jsonLd,
}) {
  const canonical = `${site.url}${path === "/" ? "/" : path}`;
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const summary = description || site.description;
  const structuredData = jsonLd || {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: fullTitle,
    description: summary,
    url: canonical,
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {robots && <meta name="robots" content={robots} />}
      <meta name="description" content={summary} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={summary} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${site.url}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content="Zacharia Lentz — industrial maintenance leadership, automated manufacturing, and maintenance systems"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={`${site.url}/og-image.png`} />
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
