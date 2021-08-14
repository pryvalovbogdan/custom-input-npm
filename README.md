# What is this?

Create input with cross button by id.

# Installation

`npm i custom-input-npm`

# Usage
```javascript
import { inputWithCross } from 'custom-input-npm';

  inputWithCross({
     id: 'input',
     inputStyles: {
       backgroundColor: 'red'
     },
     parentId: 'root',
     onClick: () => {},
     onFocus: () => {},
     onBlur: () => {},
     onChange: () => {},
     onEnter: () => {},
     withDropdown: true,
     dropDownProps: {
       options: ['yes', 'no', 'hmm'],
       styles: {},
     },
  });
```

To change cross button style pass in props crossStyle obj.
```javascript
import { inputWithCross } from 'custom-input-npm';

  inputWithCross({
     id: 'input',
     crossStyle: {
       lineStyle: '1px solid red',
       height: '12px',
       positionRight: '10px',
       positionTop: '20%',
     },
     parentId: 'root',
  });
```

To add dropdown to input add prop withDropdown and 
dropDownProps there must be options an array if it empty dropdown will not shown.
```javascript
import { inputWithCross } from 'custom-input-npm';

  inputWithCross({
     id: 'input',
     parentId: 'root',
     withDropdown: true,
     dropDownProps: {
       options: ['yes', 'no', 'hmm'],
       styles: {},
     },
  });
```

## Options

*    *id* - string (without #),
*    *parentId* - string (without #),
*    *inputStyles*- object with styles for input,
*    *crossStyle*- object with styles for cross button, 
crossStyle properties: lineStyle, height, positionRight, positionTop, all should be strings.
*    *onClick* - function,
*    *onFocus* - function,
*    *onBlur* - function,
*    *onChange* - function,
*    *onEnter* - function,
*    *withDropdown*- boolean to show dropdown,
*    *dropDownProps*- object with options and styles for dropdown, 
dropDownProps properties: options an array, styles an object.
