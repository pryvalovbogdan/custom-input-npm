function setDropdownOptions(dropDownProps, input, crossIcon, dropdown, inputValue) {
	dropdown.innerHTML = null;

	dropDownProps.options.map(option => {
		if (option.startsWith(inputValue) || !inputValue) {
			const optionItem = document.createElement('div');
			optionItem.innerText = option;
			optionItem.className = 'dropdown-option-item';
			optionItem.addEventListener('click', e => {
				input.value = e.target.innerText;
				dropdown.style.display = 'none';
				crossIcon.classList.add('close');
			});

			dropdown.appendChild(optionItem);
		}
	});
}

function customiseInput(
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
) {
	input.setAttribute('id', id);
	input.setAttribute('class-name', 'custom-input-with-cross-btn');
	input.placeholder = placeholder;
	input.defaultValue = defaultValue;
	input.addEventListener('click', onClick);
	input.addEventListener('focus', onFocus);
	input.addEventListener('blur', onBlur);
	input.addEventListener('change', onChange);
	input.addEventListener('mouseenter', onEnter);

	Object.assign(input.style, inputStyles);
}

function customizeDropdown(dropdown, inputStyles, dropDownProps) {
	dropdown.className = 'dropdown';
	dropdown.style.setProperty('--dropdownWidth', '100%');
	dropdown.style.setProperty('--inputHeight', inputStyles.height || '100%');
	dropdown.style.display = 'none';

	Object.assign(dropdown.style, dropDownProps.styles);
}

function customizeCrossIcon(crossIcon, crossStyle) {
	crossIcon.setAttribute('id', 'custom-input-cross-icon');
	crossIcon.style.setProperty('--lineStyle', crossStyle.lineStyle);
	crossIcon.style.setProperty('--height', crossStyle.height);
	crossIcon.style.setProperty('--positionRight', crossStyle.positionRight);
	crossIcon.style.setProperty('--positionTop', crossStyle.positionTop);
}

export { setDropdownOptions, customiseInput, customizeCrossIcon, customizeDropdown }