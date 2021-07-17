function inputWithCross({ id, color, parentId }) {
	let input = document.querySelector(`#${id}`);
	const parentElem = document.querySelector(`#${parentId}`);

	input.style.background = color;

	parentElem.appendChild(input);
}

module.exports.inputWithCross = inputWithCross;