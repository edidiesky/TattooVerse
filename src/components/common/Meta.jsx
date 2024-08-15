import React from "react";
import { Helmet } from "react-helmet";
export default function Meta({ title, keyword, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="keyword" keyword={keyword} />
      <meta name="description" description={description} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "TattooVerse - Home of Afforadble and durable Tattoos",
  description: "We offer qualtiy Tattoos",
  keyword: "Tattoos, buy quality Tattoos, rare ones",
};
