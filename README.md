# What is this?

Create input with cross button by id.

# Installation

`npm i custom-npm-input --save`

# Usage

`import { inputWithCross } from 'custom-npm-input';

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
  });
`

## Options

*    *id* - string (without #),
*    *parentId* - string (without #),
*    *inputStyles*- object with styles for input,
*    *onClick* - function,
*    *onFocus* - function,
*    *onBlur* - function,
*    *onChange* - function,
