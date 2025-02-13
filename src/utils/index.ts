import { cloudinaryConfig } from "@/cloudinaryConfig";
import MarkdownIt from "markdown-it"
const markdownItLinkAttributes = require('markdown-it-link-attributes');

export const getImageUrl = (publicId: string) => {
	return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.jpg`;
}

const md = new MarkdownIt({linkify: true}).use(markdownItLinkAttributes, {
	attrs: {
		target: '_blank',
		rel: 'noopener noreferrer'
	}
});

export const renderMarkdown = (text: string) => md.render(text
	.replace(/\\n/g, '\n')
	.replace(/(?<=^|\s)(\p{L}{1,4})(,?)\s/gu, '$1$2&nbsp;') || ''
);
