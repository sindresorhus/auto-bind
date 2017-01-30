# auto-bind [![Build Status](https://travis-ci.org/sindresorhus/auto-bind.svg?branch=master)](https://travis-ci.org/sindresorhus/auto-bind)

> Automatically bind methods to their class instance


## Install

```
$ npm install --save auto-bind
```


## Usage

```js
const autoBind = require('auto-bind');

class Unicorn {
	constructor(name) {
		this.name = name;
		autoBind(this);
	}
	message() {
		return `${this.name} is awesome!`;
	}
}

const unicorn = new Unicorn('Rainbow');

// Grab the method off the class instance
const message = unicorn.message;

// Still bound to the class instance
message();
//=> 'Rainbow is awesome!'

// Without `autoBind(this)`, the above would have resulted in
message();
//=> Error: Cannot read property 'name' of undefined
```


## API

### autoBind(self)

Bind methods in `self` to their class instance. Returns the `self` object.

#### self

Type: `Object`

Object with methods to bind.


## Related

- [bind-methods](https://github.com/sindresorhus/bind-methods) - Bind all methods in an object to itself or a specified context


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
