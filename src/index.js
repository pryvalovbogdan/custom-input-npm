import '../styles/index.css';
import { setDropdownOptions, customizeDropdown, customizeCrossIcon, customiseInput } from './helpers';

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
	parentId,
	onClick,
	onFocus,
	onBlur,
	onChange,
	onEnter,
	defaultValue = '',
	withDropdown,
	dropDownProps,
}) {
	if (!parentId) {
		return new Error('You need to set parent id');
	}

	const parentElem = document.querySelector(`#${parentId}`);
	const inputWrapper = document.createElement('div');
	const crossIcon = document.createElement('span');
	const input = document.createElement('input');
	const dropdown = document.createElement('div');

	inputWrapper.setAttribute('id', 'custom-input-wrapper');

	customizeCrossIcon(crossIcon, crossStyle);

	crossIcon.addEventListener('click', () => {
		input.value = '';
		crossIcon.classList.remove('close');

		setDropdownOptions(dropDownProps, input, crossIcon, dropdown);
	});

	input.addEventListener('input', e => {
		if (!e.target.value) {
			crossIcon.classList.remove('close');

			setDropdownOptions(dropDownProps, input, crossIcon, dropdown);
		} else {
			crossIcon.classList.add('close');

			if (dropDownProps.options && dropDownProps.options.length) {
				setDropdownOptions(dropDownProps, input, crossIcon, dropdown, e.target.value);
			}
		}
	});

	input.addEventListener('focus', () => {
		if (dropDownProps.options && dropDownProps.options.length) {
			dropdown.style.display = 'block';
		}
	});

	customiseInput(
		input,
		id,
		placeholder,
		defaultValue,
		onClick,
		onFocus,
		onBlur,
		onChange,
		onEnter,
		inputStyles,
	);

	inputWrapper.appendChild(input);
	inputWrapper.appendChild(crossIcon);

	if (withDropdown) {
		customizeDropdown(dropdown, inputStyles, dropDownProps);

		setDropdownOptions(dropDownProps, input, crossIcon, dropdown);

		inputWrapper.appendChild(dropdown);
	}

	if (!parentElem) {
		return new Error(`There is no node with parentId:${parentId} in DOM`);
	}

	window.document.addEventListener('click', e => {
		if (e.target !== document.querySelector('#custom-input')) {
			dropdown.style.display = 'none';
		}
	});

	parentElem.appendChild(inputWrapper);
}

export { inputWithCross };
