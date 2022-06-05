// add whatever parameters you deem necessary
function constructNote(message, letters) {
	//
	// IN MY OWN WORDS
	// => Are the numbers of particular characters
	// in the MESSAGE string same as those in LETTERS string
	//
	if (message.length === 0) return true;
	// make frequency counter off message and letters
	let msgFreqCount = constructNodeFreqCounter(message);
	let letterFreqCount = constructNodeFreqCounter(letters);
	// check if the value of the object keys in messages are the same as that of letters
	for (let el in msgFreqCount) {
		if (letterFreqCount[el] >= msgFreqCount[el]) {
			return true;
		}
	}
	return false;
}

function constructNodeFreqCounter(str) {
	if (str.length === 0) return false;
	let frequency = {};
	for (let char of str) {
		frequency[char] = frequency[char] + 1 || 1;
	}
	return frequency;
}

module.exports = constructNote;
