function inputWithCross({ id, color, parentId, onClick, onFocus, onblur }) {
	if (!parentId) {
		return new Error('You need to set parent id');
	}

	const parentElem = document.querySelector(`#${parentId}`);
	let input = document.createElement('input');

	input.setAttribute('id', id);
	input.onclick = onClick;
	input.onfocus = onFocus;
	input.onblur = onblur;
	input.style.background = color;

	parentElem.appendChild(input);
}

module.exports.inputWithCross = inputWithCross;