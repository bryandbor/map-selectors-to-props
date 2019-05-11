# @bryandbor/map-selectors-to-props

> Map Redux selectors to props

[![NPM](https://img.shields.io/npm/v/@bryandbor/map-selectors-to-props.svg)](https://www.npmjs.com/package/@bryandbor/map-selectors-to-props) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @bryandbor/map-selectors-to-props
```

## Usage

```js
// selectors.js
export const getUser = state => state.user || {};

export const getUserName = state => getUser(state).name || '';
export const getUserAge = state => getUser(state).age || 0;
```

```jsx
import React from 'react';
import {mapSelectorsToProps} from '@bryandbor/map-selectors-to-props';

import {getUserName, getUserAge} from 'path/to/selectors.js';

const UserComponent = ({name, age}) => (
  <div>
    Hello, my name is {name}. I am {age} years old.
  </div>
);

export default mapSelectorsToProps({
  name: getUserName,
  age: getUserAge,
})(UserComponent);
```

## License

MIT © [bryandbor](https://github.com/bryandbor)
