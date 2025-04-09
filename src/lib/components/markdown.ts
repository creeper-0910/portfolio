import { sanitize } from '@jill64/universal-sanitizer';
import * as cheerio from 'cheerio';
import { Marked, Parser, Renderer } from "marked";
import sanitizeHtml from 'sanitize-html';
export function parseMarkdown(source: string) {
    const marked = new Marked();
    const originalRenderer = new Renderer();
    originalRenderer.parser = new Parser();

    marked.use({
        breaks: true,
        useNewRenderer: true,
        renderer: {
          heading(heading) {
            if(heading.depth === 1) {
                return `<title>${heading.text}</title>`;
            }else if(heading.depth === 2) {
                return `<h2>${heading.text}</h2><Hr/>`;
            }
            return `<h${heading.depth}>${heading.text}</h${heading.depth}>`;
          },
        },
      });
      const html = marked.parse(source) as string;
      const node =  cheerio.load(html);
      const title = node('title').first().text();
      const sanitizedHtml = sanitize(html,{sanitizeHtml:{
        allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'Hr' ])
      }
      });
    return {
        title: title,
        html: sanitizedHtml,
    };
}