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

// grab the method off the class instance
const message = unicorn.message;

// still bound to the class instance
message();
//=> 'Rainbow is awesome!'

// without `autoBind(this)`, the above would have resulted in
message();
//=> Error: Cannot read property 'name' of undefined
```


## Related

- [bind-methods](https://github.com/sindresorhus/bind-methods) - Bind all methods in an object to itself or a specified context


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
