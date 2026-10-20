// @ts-check

export default range

/**
 * The range generator represents an immutable sequence of numbers and is
 * commonly used for looping a specific number of times in for-of loops
 * or fill values with `.from()` method.
 *
 * Supports all iterator helper methods like `map()`, `reduce()`, `take()` etc.
 * @kind function
 * @param {number} [start] If the `start` argument is omitted, it defaults to 0.
 * @param {number?} [stop] If the `stop` argument is omitted, it will take the value of `start` and `start` will be 0.
 * @param {number} [step] If the `step` argument is omitted, it defaults to 1.
 * @returns {IteratorObject<number>}
 */
function *range (start=0, stop, step=1) {
	if (stop == null)
		stop = start, start = 0

	while (Math.abs (start) < Math.abs (stop)) {
		yield start
		start += step
	}
}
