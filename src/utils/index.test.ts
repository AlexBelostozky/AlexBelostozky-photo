import { cloudinaryConfig } from "@/cloudinaryConfig";
import { applySpecificOrder, getImageUrl, prettifyText } from "./index";

describe('applySpecificOrder', () => {
	it('should sort elements using specific order', () => {
		const items = {
			b: 2,
			a: 1,
			c: 3,
		};

		const order = ['a', 'b', 'c'];

		const result = applySpecificOrder(items, order);

		expect(result).toEqual([
			['a', 1],
			['b', 2],
			['c', 3]
		])
	});

	it('should leave items outside order at the end in alphabethical order', () => {
		const items = {
			d: 4,
			b: 2,
			a: 1,
			c: 3,
		};

		const order = ['b', 'a'];

		const result = applySpecificOrder(items, order);

		expect(result).toEqual([
			['b', 2],
			['a', 1],
			['c', 3],
			['d', 4],
		])
	});

	it('should return empty array if items was not provided', () => {
		const result = applySpecificOrder(undefined, ['a', 'b']);
		expect(result).toEqual([]);
	});

	it('should return items in alphabetical order if order was not provided', () => {
		const items = {
			b: 2,
			a: 1,
			c: 3,
		};

		const result = applySpecificOrder(items, []);

		expect(result).toEqual([
			['a', 1],
			['b', 2],
			['c', 3],
		])
	})
});

describe('prettifyText', () => {
	it('should not add nbsp after words longer than 4 chars', () => {
		const text = 'Fishes after shower';
		const result = prettifyText(text);
		expect(result).toBe(text);
	});

	it('should add nbsp after words up to 4 chars long', () => {
		const text = 'Cats went to the kitchen after shower. They have a tasty breakfast there.';
		const result = prettifyText(text);
		expect(result).toBe('Cats&nbsp;went&nbsp;to&nbsp;the&nbsp;kitchen after shower. They&nbsp;have&nbsp;a&nbsp;tasty breakfast there.');
	});

	it('should not affect punctuation marks', () => {
		const text = 'Hi, how are you?';
		const result = prettifyText(text);
		expect(result).toBe('Hi,&nbsp;how&nbsp;are&nbsp;you?');
	});
});

describe('getImageUrl', () => {
	it('should return correct url for valid publicId', () => {
		const publicId = 'project/example';
		const expectedUrl = `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${publicId}.jpg`;
		expect(getImageUrl(publicId)).toBe(expectedUrl);
	});

	it('should return empty string for empty publicId', () => {
		expect(getImageUrl('')).toBe('');
	});

	it('should return empty string for non-string publicId', () => {
		// @ts-expect-error: Testing non-string input
		expect(getImageUrl(123)).toBe('');
	});
})
