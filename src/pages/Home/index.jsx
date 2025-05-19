import React from "react";
import Hero from "../../components/hero";
import Services from "../../components/services";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Bytech.az - Texnologiyanı Sadələşdiririk, Həlləri Fərdiləşdiririk"
        />
        <meta
          name="keywords"
          content="bytech.az, ITKonsultasiya, İTSupport, Korporativ Mail Xidməti, Cloud Server Xidməti"
        />
        <meta name="author" content="bytech.az" />
        <link rel="canonical" href="https://bytech.az/" />

        {/* Title */}
        <title>Bytech.az | Texnologiya və IT Həlləri</title>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Bytech.az | Texnologiya və IT Həlləri"
        />
        <meta
          property="og:description"
          content="Bytech.az - Texnologiyanı Sadələşdiririk, Həlləri Fərdiləşdiririk"
        />
        <meta property="og:url" content="https://bytech.az/" />
        <meta property="og:site_name" content="Bytech.az" />
        <meta
          property="og:image"
          content="https://bytech.az/path-to-your-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bytech.az | Texnologiya və IT Həlləri"
        />
        <meta
          name="twitter:description"
          content="Bytech.az - Texnologiyanı Sadələşdiririk, Həlləri Fərdiləşdiririk"
        />
        <meta
          name="twitter:image"
          content="https://bytech.az/path-to-your-image.jpg"
        />
      </Helmet>
      <Hero />
      <Services />
    </div>
  );
};

export default Home;
