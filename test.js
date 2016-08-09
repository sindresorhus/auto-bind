import test from 'ava';
import m from './';

test(t => {
	class Unicorn {
		constructor(name) {
			this.name = name;
			m(this);
		}
		message() {
			return `${this.name} is awesome!`;
		}
	}

	const unicorn = new Unicorn('Rainbow');
	const message = unicorn.message;

	t.is(message(), 'Rainbow is awesome!');
});
