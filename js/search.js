/*

ploblem3: search text
Author: Jose Dutra
Assessment
Starts on: 09/17/19

*/

let button = document.querySelector("input[type='submit']")

// function search words
const searchWord = () => {
	let count = 0
	let input = document.getElementById('search_input')
	// decided to search case-sensitive words
	let filter = input.value
	// property sets or returns the text content of the specified node and its descendants
	let text = document.getElementById('search_text').textContent
	// this variable collects an array of phrases that finishes with a period
	let phrases = text.split('.')
	phrases = phrases.map(phrase => phrase + '.')
	// for every phrase, it removes special a special character bracket "["
	phrases = phrases.map(phrase => phrase.replace(/ *\[[^\]]*]/, ''))
	// for every phrase, it removes an additional space between words
	phrases = phrases.map(phrase => phrase.replace(/\s\s+/g, ' '))
	// for every phrase, it removes break lines
	phrases = phrases.map(phrase => phrase.replace(/(\r\n|\n|\r)/gm, ' '))

	let sentence = ''
	for (let phrase of phrases) {
		for (let word of phrase) {
			if (word.indexOf(filter) > -1) count += 1
		}
		if (phrase.indexOf(filter) > -1) count += 1
	}
	let occurances = count > 1 ? 'occurances' : 'occurance'
	sentence = `Found ${count} ${occurances} of the word "${filter}" in the below text.`
	return sentence
}

// function innerResults that inner uccurances to HTML
const innerResult = evt => {
	// to avoid refreshing
	evt.preventDefault()
	document.getElementById('results').innerHTML = searchWord()
}

// add an event listener
button.addEventListener('click', innerResult)
