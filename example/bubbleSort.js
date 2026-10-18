import range from "../range.js"
export default bubble

function bubble (array) {
	const n = array.length
	let swapped = false

	for (let i of range (n)) {
		for (let j of range (0, n-i-1))
			if (array[j] > array[j+1])
				swapped = swap (array, j)

		if (!swapped) break
	}

	return array
}

function swap (array, j) {
	[array[j], array[j+1]] = [array[j+1], array[j]]
	return true
}
