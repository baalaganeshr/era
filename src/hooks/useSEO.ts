import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const useSEO = ({
  title = 'STACKO - Master Programming, Build Award-Winning Products',
  description = 'Join STACKO\'s immersive programming cohorts and high-velocity development studio. Learn Python, JavaScript, React, Node.js, and AI while building production-ready experiences.',
  keywords = 'programming education, coding bootcamp, React training, JavaScript courses, Python learning, AI development, software engineering, web development, full-stack development, STACKO',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  canonicalUrl,
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'STACKO Development Team');
    updateMetaTag('robots', 'index, follow, max-image-preview:large');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Update Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'STACKO', true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:creator', '@STACKO_dev');

    // Update canonical URL
    if (canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = canonicalUrl;
    }

    // Add structured data
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData]);
};

// Predefined structured data for different page types
export const getOrganizationStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "STACKO",
  "description": "Award-winning programming education and development collective founded by seven college builders",
  "url": "https://stacko.dev",
  "logo": "https://stacko.dev/logo.png",
  "sameAs": [
    "https://github.com/stacko-dev",
    "https://twitter.com/STACKO_dev",
    "https://linkedin.com/company/stacko-dev"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Global"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "stackoindustries@gmail.com",
    "telephone": "+91-975-198-7380"
  }
});

export const getCourseStructuredData = (course: {
  title: string;
  description: string;
  price: string;
  level: string;
  duration: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": course.title,
  "description": course.description,
  "provider": {
    "@type": "Organization",
    "name": "STACKO"
  },
  "educationalLevel": course.level,
  "timeRequired": course.duration,
  "offers": {
    "@type": "Offer",
    "price": course.price,
    "priceCurrency": "USD"
  }
});