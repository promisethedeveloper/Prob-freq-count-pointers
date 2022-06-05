// add whatever parameters you deem necessary
function averagePair(arr, targetAvg) {
	/**
	 *  - Check if the average of two integers in the sorted array,
	 *      equal the target average
	 *  - The inputs that go into the problem are arrays of sorted integers
	 *      and a target average
	 *  - The output to come out from the solution is a boolean
	 *  - Yes, the output can be determined from the inputs
	 *  => Steps
	 *
	 * */

	//  initiate left and right pointers at the beginning and ending of the array
	let leftPointer = 0;
	let rightPointer = arr.length - 1;
	while (leftPointer < rightPointer) {
		// calculate the average of the sum of the left and right values
		let sum = arr[leftPointer] + arr[rightPointer];
		let average = sum / 2;
		// if the average is equal to the target value, return true
		if (average === targetAvg) {
			return true;
			// if the value is less than the average, move the left pointer towards zero
		} else if (average < targetAvg) {
			leftPointer++;
			// if the value is greater than the average, move the right pointer towards zero
		} else if (average > targetAvg) {
			rightPointer--;
		}
	}
	return false;
}

module.exports = averagePair;
