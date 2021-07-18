# What is this?

Create input with cross button by id.

# Installation

`npm i custom-npm-input --save`

# Usage
```javascript
import { inputWithCross } from 'custom-npm-input';

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
  });
```

To change cross button style pass in props crossStyle obj.
```javascript
import { inputWithCross } from 'custom-npm-input';

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
