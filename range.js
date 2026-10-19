export default range

function *range (start=0, stop, step=1) {
	if (stop == null)
		stop = start, start = 0

	while (Math.abs (start) < Math.abs (stop)) {
		yield start
		start += step
	}
}
