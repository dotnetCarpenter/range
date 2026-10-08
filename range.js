export default range

function range (start=0, stop, step=1) {
	if (stop == null)
		stop = start, start = 0

	return {
		next () {
			const done  = ! (Math.abs (start) < Math.abs (stop))
				, value = start

			start += step

			return { done, value }
		},
		[Symbol.iterator] () { return this },
	}
}
