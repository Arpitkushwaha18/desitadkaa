import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../data/siteConfig";

const SITE_URL = "https://desitadka.co.in";
const DEFAULT_IMAGE_PATH = "/Restaurant-front.avif";
const LOGO_PATH = "/android-icon-192x192.png";

const pageSeo = {
  "/": {
    title: "Desi Tadka | Indian Restaurant in Kalyanpur, Kanpur",
    description:
      "Desi Tadka is an open-air restaurant in Kalyanpur, Kanpur serving authentic Indian food, tandoor specials, biryani, dosa, and quick online ordering.",
    type: "website",
    imagePath: DEFAULT_IMAGE_PATH,
    breadcrumb: "Home",
  },
  "/menu": {
    title: "Menu | Desi Tadka Kalyanpur, Kanpur",
    description:
      "Browse the Desi Tadka menu with Indian mains, tandoor items, biryani, dosa, thalis, and more in Kalyanpur, Kanpur.",
    type: "website",
    imagePath: DEFAULT_IMAGE_PATH,
    breadcrumb: "Menu",
  },
  "/about": {
    title: "About Us | Desi Tadka Kalyanpur, Kanpur",
    description:
      "Learn about Desi Tadka, our open-air restaurant in Kalyanpur, Kanpur, and the flavors and hospitality we serve every day.",
    type: "website",
    imagePath: DEFAULT_IMAGE_PATH,
    breadcrumb: "About",
  },
  "/gallery": {
    title: "Gallery | Desi Tadka Kalyanpur, Kanpur",
    description:
      "See Desi Tadka's restaurant space, dishes, and dining moments before you visit or order in Kalyanpur, Kanpur.",
    type: "website",
    imagePath: DEFAULT_IMAGE_PATH,
    breadcrumb: "Gallery",
  },
  "/contact": {
    title: "Contact | Desi Tadka Kalyanpur, Kanpur",
    description:
      "Contact Desi Tadka in Kalyanpur, Kanpur for reservations, directions, WhatsApp orders, and restaurant timings.",
    type: "website",
    imagePath: DEFAULT_IMAGE_PATH,
    breadcrumb: "Contact",
  },
};

function ensureTag(selector, tagName, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([name, value]) => {
    element.setAttribute(name, value);
  });

  return element;
}

function buildBreadcrumbs(origin, pathname, label) {
  const siteUrl = new URL("/", origin).toString();
  const canonicalUrl = new URL(pathname === "/" ? "/" : pathname, origin).toString();
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
  ];

  if (pathname !== "/") {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: label,
      item: canonicalUrl,
    });
  }

  return items;
}

function getCanonicalUrl(pathname) {
  return new URL(pathname === "/" ? "/" : pathname, SITE_URL).toString();
}

function buildJsonLd(origin, pathname, metadata) {
  const siteUrl = new URL("/", origin).toString();
  const canonicalUrl = getCanonicalUrl(pathname);
  const imageUrl = new URL(metadata.imagePath, origin).toString();
  const logoUrl = new URL(LOGO_PATH, origin).toString();
  const breadcrumbId = `${canonicalUrl}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": `${siteUrl}#restaurant`,
        name: "Desi Tadka",
        url: siteUrl,
        image: [imageUrl],
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        servesCuisine: ["Indian", "North Indian", "South Indian", "Chinese"],
        telephone: siteConfig.phoneDisplay,
        email: siteConfig.email,
        menu: new URL("/menu", origin).toString(),
        hasMap: siteConfig.locationUrl,
        sameAs: [
          siteConfig.instagramUrl,
          siteConfig.facebookUrl,
          siteConfig.swiggyUrl,
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "G724+VHG, New Azad Nagar, Kalyanpur",
          addressLocality: "Kanpur",
          addressRegion: "Uttar Pradesh",
          postalCode: "208026",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.5021494,
          longitude: 80.2566468,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}#website`,
        url: siteUrl,
        name: "Desi Tadka",
        alternateName: "Desi Tadka Kanpur",
        inLanguage: "en-IN",
        publisher: {
          "@id": `${siteUrl}#restaurant`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: metadata.title,
        description: metadata.description,
        inLanguage: "en-IN",
        isPartOf: {
          "@id": `${siteUrl}#website`,
        },
        about: {
          "@id": `${siteUrl}#restaurant`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
        breadcrumb: {
          "@id": breadcrumbId,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: buildBreadcrumbs(origin, pathname, metadata.breadcrumb),
      },
    ],
  };
}

export default function SeoManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const normalizedPath =
      pathname !== "/" ? pathname.replace(/\/+$/, "") || "/" : "/";
    const metadata = pageSeo[normalizedPath] ?? pageSeo["/"];
    const origin = SITE_URL;
    const canonicalUrl = getCanonicalUrl(normalizedPath);
    const imageUrl = new URL(metadata.imagePath, origin).toString();
    const jsonLd = buildJsonLd(origin, normalizedPath, metadata);

    document.title = metadata.title;
    document.documentElement.lang = "en-IN";

    ensureTag('meta[name="description"]', "meta", {
      name: "description",
      content: metadata.description,
    });
    ensureTag('meta[name="robots"]', "meta", {
      name: "robots",
      content: "index, follow, max-image-preview:large",
    });
    ensureTag('link[rel="canonical"]', "link", {
      rel: "canonical",
      href: canonicalUrl,
    });
    ensureTag('meta[property="og:title"]', "meta", {
      property: "og:title",
      content: metadata.title,
    });
    ensureTag('meta[property="og:description"]', "meta", {
      property: "og:description",
      content: metadata.description,
    });
    ensureTag('meta[property="og:type"]', "meta", {
      property: "og:type",
      content: metadata.type,
    });
    ensureTag('meta[property="og:url"]', "meta", {
      property: "og:url",
      content: canonicalUrl,
    });
    ensureTag('meta[property="og:site_name"]', "meta", {
      property: "og:site_name",
      content: "Desi Tadka",
    });
    ensureTag('meta[property="og:locale"]', "meta", {
      property: "og:locale",
      content: "en_IN",
    });
    ensureTag('meta[property="og:image"]', "meta", {
      property: "og:image",
      content: imageUrl,
    });
    ensureTag('meta[property="og:image:alt"]', "meta", {
      property: "og:image:alt",
      content: "Desi Tadka restaurant front",
    });
    ensureTag('meta[name="twitter:card"]', "meta", {
      name: "twitter:card",
      content: "summary_large_image",
    });
    ensureTag('meta[name="twitter:title"]', "meta", {
      name: "twitter:title",
      content: metadata.title,
    });
    ensureTag('meta[name="twitter:description"]', "meta", {
      name: "twitter:description",
      content: metadata.description,
    });
    ensureTag('meta[name="twitter:image"]', "meta", {
      name: "twitter:image",
      content: imageUrl,
    });

    let scriptTag = document.head.querySelector('script[data-seo="json-ld"]');

    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-seo", "json-ld");
      document.head.appendChild(scriptTag);
    }

    scriptTag.textContent = JSON.stringify(jsonLd);
  }, [pathname]);

  return null;
}
