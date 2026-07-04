import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Fetch blogs
  const blog = await getCollection('blog');
  
  // Sort by date (descending)
  const sortedBlog = blog.sort((a, b) => {
    return new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf();
  });

  return rss({
    title: 'Bhavya Computer Classes - Tech Insights',
    description: 'Latest news, tech insights, and course updates from Bhavya Computer Classes in Kota.',
    site: context.site || 'https://www.bhavyacomputerclasses.com',
    items: sortedBlog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description || `Read the latest tech insights on ${post.data.title}.`,
      // Compute RSS link from post `slug`
      link: `/blog/${post.slug}/`,
    })),
    // (optional) inject custom xml
    customData: `<language>en-in</language>`,
  });
}
