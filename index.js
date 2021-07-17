function returnInput(options, id) {
	let input = document.querySelector(`#${id}`);

	input.style.background = options.color;
}

module.exports.returnInput = returnInput;