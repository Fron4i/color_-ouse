const board = document.querySelector('#board')
const SQUARES_NUMBER = 837
const colors = ['#e74c3c', '#8e44ad', '#3498bd', '#e67e22', '#2ecc71', '#07724f', '#4d1266']

for (let i=0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () =>
		setColor(square))

	square.addEventListener('mouseleave', () =>
		removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)]
}