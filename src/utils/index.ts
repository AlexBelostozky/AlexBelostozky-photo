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

export const renderMarkdown = (text: string) => {
	// Doesn't work on old browsers...
	// md.render(text
	// 	.replace(/\\n/g, '\n')
	// 	.replace(/(?<=^|\s)(\p{L}{1,4})(,?)\s/gu, '$1$2&nbsp;') || ''
	// )
	try {
		const processedText = text.replace(/\\n/g, '\n');
		let newResult = processedText;

		// eslint-disable-next-line no-constant-condition
		while (true) {
			const replaced = newResult.replace(/((?:^|;|\s))([\p{L}\d]{1,4})(,?)\s/gu, '$1$2$3&nbsp;');

			if (replaced === newResult) {
				break;
			}

			newResult = replaced;
		}

		return md.render(newResult || text);
	} catch (error) {
		console.warn('Failed to render markdown: ', error);

		return text;
	}
};

export const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = url;
		img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
		img.onerror = reject;
	});
};
