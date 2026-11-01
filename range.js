export default range

/**
 * The range generator represents a stream of immutable sequence of numbers and is
 * commonly used for looping a specific number of times in for-of loops or fill values
 * with `.from()` method.
 *
 * Supports all iterator helper methods like `map()`, `reduce()`, `take()` etc.
 * @kind function
 * @param {number} [start] If the `start` argument is omitted, it defaults to 0.
 * @param {number?} [stop] If the `stop` argument is omitted, it will take the value of `start` and `start` will be 0.
 * @param {number} [step] If the `step` argument is omitted, it defaults to 1.
 * @returns {IteratorObject<number, any, any>}
 */
function *range (start=0, stop, step=1) {
	if (step === 0) throw new TypeError ("step must not be zero")
	if (stop == null)
		stop = start, start = 0

	// calculate number of steps (a negative number)
	let stepsLeft = Math.floor ((start - stop) / step)
	// if there are any steps
	if (stepsLeft < 0) {
		// yield for each step until reaching 0
		while (stepsLeft++ !== 0) {
			yield start
			start += step
		}
	}
}
