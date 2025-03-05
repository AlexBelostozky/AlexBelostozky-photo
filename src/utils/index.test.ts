import { applySpecificOrder } from "./index";

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
})
