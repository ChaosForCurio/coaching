function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": "https://www.bhavyacomputerclasses.com/#organization",
    name: "Bhavya Computer Classes",
    alternateName: "BCI Kota",
    url: "https://www.bhavyacomputerclasses.com",
    logo: "https://www.bhavyacomputerclasses.com/images/logo.png",
    image: "https://www.bhavyacomputerclasses.com/images/og-banner.jpg",
    description: "Government-certified computer training institute in Kota, Rajasthan offering DCA, Tally Prime with GST, Python, Web Development, RSCIT, Digital Marketing, and Graphic Design courses with placement assistance.",
    foundingDate: "2010",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir",
      addressLocality: "Kota",
      addressRegion: "Rajasthan",
      postalCode: "324005",
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.2138",
      longitude: "75.8648"
    },
    telephone: ["+919694932391", "+919694025249"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "09:00",
        closes: "19:00"
      }
    ],
    priceRange: "₹₹",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Computer & Digital Skill Courses",
      itemListElement: [
        {
          "@type": "Course",
          name: "DCA – Diploma in Computer Applications",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Tally Prime with GST",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Advanced Excel",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Python Programming",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Web Designing & Development",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "RSCIT",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Digital Marketing",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        },
        {
          "@type": "Course",
          name: "Graphic Design",
          provider: {
            "@type": "Organization",
            name: "Bhavya Computer Classes"
          }
        }
      ]
    },
    sameAs: [
      "https://www.facebook.com/bhavyacareerinstitute",
      "https://www.instagram.com/bhavyacareerinstitute"
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 10 },
    alumni: { "@type": "QuantitativeValue", value: 5e3 }
  };
}
function generateCourseSchema(courseTitle, courseDescription, canonicalUrl) {
  return [
    {
      "@type": "Course",
      name: courseTitle,
      description: courseDescription,
      provider: {
        "@type": "Organization",
        name: "Bhavya Computer Classes",
        url: "https://www.bhavyacomputerclasses.com"
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: {
          "@type": "Place",
          name: "Bhavya Computer Classes",
          address: {
            "@type": "PostalAddress",
            streetAddress: "3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir",
            addressLocality: "Kota",
            addressRegion: "Rajasthan",
            postalCode: "324005",
            addressCountry: "IN"
          }
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.bhavyacomputerclasses.com/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "All Courses",
          item: "https://www.bhavyacomputerclasses.com/all-courses"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: courseTitle,
          item: canonicalUrl
        }
      ]
    }
  ];
}
function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
function generateBlogPostSchema(title, excerpt, datePublished, author, canonicalUrl) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: excerpt,
      datePublished,
      author: {
        "@type": "Organization",
        name: author,
        url: "https://www.bhavyacomputerclasses.com"
      },
      publisher: {
        "@type": "Organization",
        name: "Bhavya Computer Classes",
        url: "https://www.bhavyacomputerclasses.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.bhavyacomputerclasses.com/images/logo.png"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl
      },
      inLanguage: "en-IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.bhavyacomputerclasses.com/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.bhavyacomputerclasses.com/blog" },
        { "@type": "ListItem", position: 3, name: title, item: canonicalUrl }
      ]
    }
  ];
}

export { generateCourseSchema as a, generateFAQSchema as b, generateLocalBusinessSchema as c, generateBlogPostSchema as g };
