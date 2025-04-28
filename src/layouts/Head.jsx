import React from "react";
import { Helmet } from "react-helmet-async";

export const SEO = ({
  title = "FoodieWeb",
  description = "FoodieWeb is a restaurant webiste.",
  pathname = "",
  siteUrl = "https://restaurantFoodieWeb.com",
  image = "logo.svg",
  twitterUsername = "foodieWebTwitter.com",
  children,
}) => {
  const seo = {
    title,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
    twitterUsername,
  };

  return (
    <Helmet>
      <title>FoodieWeb- {seo.title}</title> 
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={seo.url} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
 
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:url" content={seo.url} />
  

      {children}
    </Helmet>
  );
};
