import './styles/index.css';

const defaultCrossStyle = {
	lineStyle: '1px solid #000',
	height: '12px',
	positionRight: '6px',
	positionTop: '25%',
};

function inputWithCross({
  id,
	inputStyles,
	crossStyle = defaultCrossStyle,
	placeholder = '',
	parentId, onClick,
	onFocus,
	onBlur,
	onChange,
	onEnter,
}) {
	if (!parentId) {
		return new Error('You need to set parent id');
	}

	const parentElem = document.querySelector(`#${parentId}`);
	const inputWrapper = document.createElement('div');
	const crossIcon = document.createElement('span');
	const input = document.createElement('input');

	inputWrapper.setAttribute('id', 'custom-input-wrapper');

	crossIcon.setAttribute('id', 'custom-input-cross-icon');
	crossIcon.style.setProperty('--lineStyle', crossStyle.lineStyle);
	crossIcon.style.setProperty('--height', crossStyle.height);
	crossIcon.style.setProperty('--positionRight', crossStyle.positionRight);
	crossIcon.style.setProperty('--positionTop', crossStyle.positionTop);
	crossIcon.addEventListener('click', () => {
		input.value = '';
		crossIcon.classList.remove('close');
	});

	input.setAttribute('id', id);
	input.setAttribute('class-name', 'custom-input-with-cross-btn');
	input.placeholder = placeholder;
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

	if (!parentElem) {
		return new Error(`There is no node with parentId:${parentId} in DOM`);
	}

	parentElem.appendChild(inputWrapper);
}

export { inputWithCross };
