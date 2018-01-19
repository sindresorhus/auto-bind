import test from 'ava';
import m from '.';

test('main', t => {
	let bounded;

	class Unicorn {
		constructor(name) {
			this.name = name;
			bounded = m(this);
		}
		message() {
			return `${this.name} is awesome!`;
		}
	}

	const unicorn = new Unicorn('Rainbow');
	t.is(bounded, unicorn);

	const message = unicorn.message;
	t.is(message(), 'Rainbow is awesome!');
});
