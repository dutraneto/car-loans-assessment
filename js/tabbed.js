/*

ploblem2: tabbed text
Author: Jose Dutra
Assessment
Starts on: 09/17/19

*/
const ul = document.querySelector('#nav')

const tabItemClicked = evt => {
	// Select all elements with .clicked class
	const classes = document.querySelectorAll('.clicked')
	// loop through classnames to check for a class 'clicked' and replaces it.
	for (let c of classes) {
		// method replace goes through a string and replace a matched name for another.
		// In that case it will replace for an empty value
		c.className = c.className.replace('clicked', '')
	}
	event.target.parentElement.className = `${event.target.parentElement.className} clicked`
	// console.log(event.target.href.split('#'))
	// As Id has specificity above classNames we can pick up ID dynamically based on the event
	document.getElementById(event.target.href.split('#')[1]).className += ' clicked'
}

// add an event listener
ul.addEventListener('click', tabItemClicked)
