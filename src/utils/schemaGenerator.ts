/**
 * Utility functions for generating structured JSON-LD schemas (Schema.org)
 * This helps search engines and AI bots understand the website's content,
 * unlock rich snippets (star ratings, FAQs, course cards, breadcrumbs),
 * and optimize Local SEO for Bhavya Computer Classes.
 */

import defaultTestimonials from '../data/testimonials.json';

export interface FAQItem {
  id?: string;
  category?: string;
  relatedCourses?: string[];
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id?: string;
  name: string;
  course?: string;
  rating: number;
  date?: string;
  text: string;
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateLocalBusinessSchema(
  customTestimonials?: TestimonialItem[]
) {
  const testimonials = customTestimonials || defaultTestimonials;
  const reviewCount = testimonials.length;
  const totalRating = testimonials.reduce(
    (acc, curr) => acc + (curr.rating || 5),
    0
  );
  const avgRating =
    reviewCount > 0 ? (totalRating / reviewCount).toFixed(1) : '5.0';

  const reviewsSchema = testimonials.map((t) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: t.name },
    datePublished: t.date || '2026-01-01',
    reviewBody: t.text,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: String(t.rating || 5),
      bestRating: '5',
      worstRating: '1',
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': 'https://www.bhavyacomputerclasses.com/#organization',
    name: 'Bhavya Computer Classes',
    alternateName: ['BCI Kota', 'Bhavya Career Institute'],
    url: 'https://www.bhavyacomputerclasses.com',
    logo: 'https://www.bhavyacomputerclasses.com/images/logo.png',
    image: 'https://www.bhavyacomputerclasses.com/images/og-banner.jpg',
    description:
      'Government-certified computer training institute in Kota, Rajasthan offering DCA, Tally Prime with GST, Python, Web Development, RSCIT, Digital Marketing, and Graphic Design courses with 100% placement assistance.',
    foundingDate: '2010',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir',
      addressLocality: 'Kota',
      addressRegion: 'Rajasthan',
      postalCode: '324005',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2138',
      longitude: '75.8648',
    },
    hasMap: 'https://maps.google.com/?q=Bhavya+Computer+Classes+Kota',
    telephone: ['+919694932391', '+919694025249'],
    email: 'info@bhavyacomputerclasses.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
    ],
    priceRange: '₹₹',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    currenciesAccepted: 'INR',
    knowsLanguage: ['en', 'hi'],
    areaServed: [
      { '@type': 'City', name: 'Kota' },
      { '@type': 'City', name: 'Bundi' },
      { '@type': 'City', name: 'Baran' },
      { '@type': 'City', name: 'Jhalawar' },
      { '@type': 'City', name: 'Rawatbhata' },
      { '@type': 'City', name: 'Sawai Madhopur' },
      { '@type': 'State', name: 'Rajasthan' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating,
      reviewCount: String(reviewCount),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviewsSchema,

    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Computer & Digital Skill Courses',
      itemListElement: [
        {
          '@type': 'Course',
          name: 'DCA – Diploma in Computer Applications',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Tally Prime with GST',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Advanced Excel',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Python Programming',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Web Designing & Development',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'RSCIT',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Digital Marketing',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
        {
          '@type': 'Course',
          name: 'Graphic Design',
          provider: {
            '@type': 'Organization',
            name: 'Bhavya Computer Classes',
          },
        },
      ],
    },
    sameAs: [
      'https://www.facebook.com/bhavyacareerinstitute',
      'https://www.instagram.com/bhavyacareerinstitute',
    ],
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 15 },
    alumni: { '@type': 'QuantitativeValue', value: 5000 },
  };
}

export function generateCourseSchema(
  courseTitle: string,
  courseDescription: string,
  canonicalUrl: string,
  imageUrl?: string,
  options?: {
    duration?: string;
    level?: string;
    price?: number | string;
    category?: string;
  }
) {
  const courseInstance: any = {
    '@type': 'CourseInstance',
    courseMode: 'Onsite',
    instructor: {
      '@type': 'Organization',
      name: 'Bhavya Computer Classes Expert Faculty',
    },
    location: {
      '@type': 'Place',
      name: 'Bhavya Computer Classes Main Campus',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          '3-N-25, Mahaveer Nagar Extension, Near Ganesh Ji Mandir',
        addressLocality: 'Kota',
        addressRegion: 'Rajasthan',
        postalCode: '324005',
        addressCountry: 'IN',
      },
    },
  };

  const courseSchema: any = {
    '@type': 'Course',
    name: courseTitle,
    description: courseDescription,
    image:
      imageUrl || 'https://www.bhavyacomputerclasses.com/images/og-banner.jpg',
    provider: {
      '@type': 'Organization',
      name: 'Bhavya Computer Classes',
      sameAs: 'https://www.bhavyacomputerclasses.com',
    },
    educationalCredentialAwarded: 'Government Certified Certificate / Diploma',
    occupationalCredentialAwarded: 'Industry Recognized Skill Certification',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '145',
      bestRating: '5',
    },
    hasCourseInstance: courseInstance,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: options?.price ? String(options.price) : 'Contact for Fees',
      availability: 'https://schema.org/InStock',
      url: canonicalUrl,
      category: options?.category || 'Skill Development Training',
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      courseSchema,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.bhavyacomputerclasses.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'All Courses',
            item: 'https://www.bhavyacomputerclasses.com/all-courses',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: courseTitle,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBlogPostSchema(
  title: string,
  excerpt: string,
  datePublished: string,
  author: string,
  canonicalUrl: string
) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: excerpt,
      datePublished,
      author: {
        '@type': 'Organization',
        name: author || 'Bhavya Computer Classes',
        url: 'https://www.bhavyacomputerclasses.com',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Bhavya Computer Classes',
        url: 'https://www.bhavyacomputerclasses.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.bhavyacomputerclasses.com/images/logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      inLanguage: 'en-IN',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://www.bhavyacomputerclasses.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.bhavyacomputerclasses.com/blog',
        },
        { '@type': 'ListItem', position: 3, name: title, item: canonicalUrl },
      ],
    },
  ];
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function generateCityPageSchema(cityName: string, canonicalUrl: string) {
  const localBusiness = generateLocalBusinessSchema();
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        ...localBusiness,
        name: `Bhavya Computer Classes — ${cityName}`,
        description: `Top computer coaching and digital skill training for students and professionals in ${cityName}, Rajasthan. Government certified DCA, Tally Prime, Python, RSCIT, and Web Design courses with 100% placement support.`,
        areaServed: {
          '@type': 'City',
          name: cityName,
          containedInPlace: { '@type': 'State', name: 'Rajasthan' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.bhavyacomputerclasses.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Computer Classes in ${cityName}`,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
}

export function generateItemListSchema(
  name: string,
  items: { name: string; url: string; description?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}
