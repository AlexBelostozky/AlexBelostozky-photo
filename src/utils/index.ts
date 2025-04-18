import { cloudinaryConfig } from "@/cloudinaryConfig";
import MarkdownIt from "markdown-it"
const markdownItLinkAttributes = require('markdown-it-link-attributes');

export const getImageUrl = (publicId: string) => {
	if (!publicId || typeof publicId !== 'string') {
		console.warn('Failed to get image url: invalid publicId', publicId);
		return ''
	}

	if (!cloudinaryConfig?.cloudName) {
		console.warn('Failed to get image url: cloudname is missing');
		return ''
	}

	return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.jpg`;
}

const md = new MarkdownIt({linkify: true}).use(markdownItLinkAttributes, {
	attrs: {
		target: '_blank',
		rel: 'noopener noreferrer'
	}
});

export const renderMarkdown = (text: string) => {
	try {
		const processedText = text.replace(/\\n/g, '\n');
		const prettifiedText = prettifyText(processedText);
		return md.render(prettifiedText || text);
	} catch (error) {
		console.warn('Failed to render markdown: ', error);
		return text;
	}
};

export const prettifyText = (text: string) => {
	let result = text;

	try {
		// eslint-disable-next-line no-constant-condition
		while (true) {
			// Doesn't work on old browsers...
			// 	.replace(/(?<=^|\s)(\p{L}{1,4})(,?)\s/gu, '$1$2&nbsp;') || ''
			const replaced = result.replace(/((?:^|;|\s))([\p{L}\d]{1,4})(,?)\s/gu, '$1$2$3&nbsp;');
			if (replaced === result) {
				break;
			}
			result = replaced;
		}
		return result
	} catch (error) {
		console.warn('Failed to prettify text: ', error);
		return result
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

export const applySpecificOrder = <T extends Record<string, any>>(
	items: T | undefined,
	order: string[]
): [keyof T, T[keyof T]][] => {
	if (!items) return [];

	return Object.entries(items).sort((a, b) => {
		const indexA = order.indexOf(a[0]);
		const indexB = order.indexOf(b[0]);

		if (indexA === -1 && indexB === -1) {
			return a[0].localeCompare(b[0]);
		}

		if (indexA === -1) return 1;
		if (indexB === -1) return -1;
		return indexA - indexB;
	}) as [keyof T, T[keyof T]][];
};
