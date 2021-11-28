export function twoSum(
	numbers: number[],
	target: number
): [number, number] | -1 {
	const cache = new Map();
	const length = numbers.length;
	let i = 0;

	for (i; i < length; ++i) {
		const n = numbers[i];
		if (cache.has(n)) {
			return [cache.get(n), n];
		} else {
			const complement = target - n;
			cache.set(complement, n);
		}
	}

	return -1;
}

console.log(twoSum([2, 5, 8, 14, 0], 10));
