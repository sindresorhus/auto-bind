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

test('include option', t => {
	class Unicorn {
		constructor(name) {
			this.name = name;
			m(this, {include: ['bar']});
		}

		foo() {
			return this.name;
		}

		bar() {
			return this.name;
		}
	}

	const unicorn = new Unicorn('Rainbow');
	const foo = unicorn.foo;
	const bar = unicorn.bar;

	t.throws(() => {
		foo();
	});

	t.is(bar(), 'Rainbow');
});

test('exclude option', t => {
	class Unicorn {
		constructor(name) {
			this.name = name;
			m(this, {exclude: ['bar']});
		}

		foo() {
			return this.name;
		}

		bar() {
			return this.name;
		}
	}

	const unicorn = new Unicorn('Rainbow');
	const foo = unicorn.foo;
	const bar = unicorn.bar;

	t.is(foo(), 'Rainbow');

	t.throws(() => {
		bar();
	});
});

