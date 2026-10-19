import range from "../range.js"
export default bubble

function bubble (array) {
	const n = array.length
	let swapped = false

	for (let i of range (n)) {
		for (let j of range (0, n - i - 1))
			if (array[j] > array[j + 1])
				swapped = swap (array, j, j + 1)

		if (!swapped) break
	}

	return array
}

function swap (array, i, j) {
	[array[i], array[j]] = [array[j], array[i]]
	return true
}
