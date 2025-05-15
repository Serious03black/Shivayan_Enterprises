
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
  language?: string;
  author?: string;
}

const SEO = ({
  title,
  description = "Shivayan Enterprises blends innovation with Indian heritage to provide cutting-edge software development and IT consulting services for businesses worldwide.",
  keywords = "software development, IT consulting, AI solutions, cloud services, custom software, Indian tech company, web development, mobile app development, digital transformation, enterprise solutions",
  ogImage = "https://shivayan.com/opengraph-image.png",
  ogUrl = "https://shivayan.com",
  ogType = "website",
  canonicalUrl,
  structuredData,
  language = "en",
  author = "Shivayan Enterprises",
}: SEOProps) => {
  const fullTitle = `${title} | Shivayan Enterprises`;
  const finalCanonicalUrl = canonicalUrl || ogUrl;
  
  // Default structured data for organization
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shivayan Enterprises",
    "url": "https://shivayan.com",
    "logo": "https://shivayan.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/shivayan",
      "https://www.twitter.com/shivayan",
      "https://www.linkedin.com/company/shivayan",
      "https://www.instagram.com/shivayan"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXX-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Hindi"]
    }
  };
  
  // Merge custom structured data with default if provided
  const finalStructuredData = structuredData ? structuredData : defaultStructuredData;
  
  return (
    <Helmet>
      {/* Basic Metadata */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Shivayan Enterprises" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shivayan" />
      <meta name="twitter:creator" content="@shivayan" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="theme-color" content="#6b21a8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
