import { toString } from 'mdast-util-to-string';
import readingTime from 'reading-time';

export function remarkReadingTime() {
  return function (tree: any, { data }: any) {
    const textOnPage = toString(tree);
    const readingTimeResult = readingTime(textOnPage);
    data.astro.frontmatter.minutesRead = readingTimeResult.text;
  };
}
