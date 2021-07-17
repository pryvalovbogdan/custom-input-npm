import './styles/index.css';

function inputWithCross({ id, inputStyles, parentId, onClick, onFocus, onBlur, onChange, onEnter }) {
	if (!parentId) {
		return new Error('You need to set parent id');
	}

	const parentElem = document.querySelector(`#${parentId}`);
	const inputWrapper = document.createElement('div');
	const crossIcon = document.createElement('span');
	const input = document.createElement('input');

	inputWrapper.setAttribute('id', 'custom-input-wrapper');

	crossIcon.setAttribute('id', 'custom-input-cross-icon');
	crossIcon.addEventListener('click', () => {
		input.value = '';
		crossIcon.classList.remove('close');
	});

	input.setAttribute('id', id);
	input.addEventListener('input', e => {
		if (!e.target.value) {
			crossIcon.classList.remove('close');
		} else {
			crossIcon.classList.add('close');
		}
	});
	input.addEventListener('click', onClick);
	input.addEventListener('focus', onFocus);
	input.addEventListener('blur', onBlur);
	input.addEventListener('change', onChange);
	input.addEventListener('mouseenter', onEnter);

	Object.assign(input.style, inputStyles);

	inputWrapper.appendChild(input);
	inputWrapper.appendChild(crossIcon);
	parentElem.appendChild(inputWrapper);
}

export { inputWithCross };