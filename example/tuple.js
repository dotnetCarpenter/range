import range from "../range.js"

const tuple = (/** @type {number} */ size) => (/** @type {string | any[]} */ input) =>
	range(0, input.length, size)
		.flatMap (n => [[input[n], input[n + 1]]])

export default tuple
