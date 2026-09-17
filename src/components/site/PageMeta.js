import React from "react";
import { Helmet } from "react-helmet-async";
import { site } from "../../portfolio";

export default function PageMeta({ title, description, path = "/", type = "website", jsonLd }) {
  const canonical = `${site.url}${path === "/" ? "/" : path}`;
  const fullTitle = title ? `${title} | ${site.name}` : site.title;
  const summary = description || site.description;

  return (
    <Helmet>
      <title>{fullTitle}</title>
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
      <meta property="og:image:alt" content="Zacharia Lentz — maintenance leadership, CMMS administration, and industrial implementation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={`${site.url}/og-image.png`} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
}
