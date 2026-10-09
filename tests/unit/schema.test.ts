import { describe, it, expect } from 'vitest';
import {
  generateLocalBusinessSchema,
  generateCourseSchema,
  generateFAQSchema,
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  generateCityPageSchema,
  generateItemListSchema,
} from '../../src/utils/schemaGenerator';

describe('schemaGenerator utilities', () => {
  it('should generate valid LocalBusiness schema', () => {
    const schema = generateLocalBusinessSchema();
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toContain('EducationalOrganization');
    expect(schema['@type']).toContain('LocalBusiness');
    expect(schema.name).toBe('Bhavya Computer Classes');
    expect(schema.address.addressLocality).toBe('Kota');
    expect(schema.geo.latitude).toBe('25.2138');
    expect(schema.aggregateRating.ratingValue).toBe('5.0');
    expect(schema.aggregateRating.reviewCount).toBe('5');
    expect(Array.isArray(schema.review)).toBe(true);
    expect(schema.review.length).toBe(5);

  });

  it('should generate valid Course schema with graph and breadcrumbs', () => {
    const schema = generateCourseSchema(
      'Python Programming',
      'Learn Python from scratch.',
      'https://www.bhavyacomputerclasses.com/courses/python-programming',
      'https://www.bhavyacomputerclasses.com/images/python.jpg',
      { duration: '3 Months', level: 'Beginner', price: 4500 }
    );

    expect(schema['@context']).toBe('https://schema.org');
    expect(Array.isArray(schema['@graph'])).toBe(true);

    const courseObj = schema['@graph'].find((item: any) => item['@type'] === 'Course');
    expect(courseObj).toBeDefined();
    expect(courseObj.name).toBe('Python Programming');
    expect(courseObj.offers.price).toBe('4500');

    const breadcrumbsObj = schema['@graph'].find((item: any) => item['@type'] === 'BreadcrumbList');
    expect(breadcrumbsObj).toBeDefined();
    expect(breadcrumbsObj.itemListElement.length).toBe(3);
  });

  it('should generate valid FAQ schema', () => {
    const faqs = [
      { question: 'What is the course duration?', answer: '3 Months.' },
      { question: 'Is certificate provided?', answer: 'Yes, government certified.' },
    ];
    const schema = generateFAQSchema(faqs);
    expect(schema['@type']).toBe('FAQPage');
    expect(schema.mainEntity.length).toBe(2);
    expect(schema.mainEntity[0].name).toBe('What is the course duration?');
  });

  it('should generate valid Breadcrumb schema', () => {
    const items = [
      { name: 'Home', item: 'https://www.bhavyacomputerclasses.com/' },
      { name: 'About Us', item: 'https://www.bhavyacomputerclasses.com/about-us' },
    ];
    const schema = generateBreadcrumbSchema(items);
    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement.length).toBe(2);
    expect(schema.itemListElement[1].name).toBe('About Us');
  });

  it('should generate valid CityPage schema', () => {
    const schema = generateCityPageSchema('Rawatbhata', 'https://www.bhavyacomputerclasses.com/cities/rawatbhata');
    expect(schema['@context']).toBe('https://schema.org');
    expect(Array.isArray(schema['@graph'])).toBe(true);
    const localBus = schema['@graph'][0];
    expect(localBus.name).toContain('Rawatbhata');
    expect(localBus.areaServed.name).toBe('Rawatbhata');
  });

  it('should generate valid ItemList schema', () => {
    const items = [
      { name: 'DCA Course', url: 'https://www.bhavyacomputerclasses.com/courses/dca' },
      { name: 'Tally Course', url: 'https://www.bhavyacomputerclasses.com/courses/tally' },
    ];
    const schema = generateItemListSchema('All Computer Courses', items);
    expect(schema['@type']).toBe('ItemList');
    expect(schema.numberOfItems).toBe(2);
  });
});
