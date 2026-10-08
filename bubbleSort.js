import range from "./range.js"
export default bubble

function bubble (array) {
	const n = array.length
	for (let i of range (n))
		for (let j of range (0, n-i-1))
			if (array[j] > array[j+1])
				[array[j], array[j+1]] = [array[j+1], array[j]]
	return array
}
