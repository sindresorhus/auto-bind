import test from 'ava';
import m from '.';

test('autoBind()', t => {
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

	const {message} = unicorn;
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

	const {foo, bar} = new Unicorn('Rainbow');

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

	const {foo, bar} = new Unicorn('Rainbow');

	t.is(foo(), 'Rainbow');

	t.throws(() => {
		bar();
	});
});

test('autoBind.react()', t => {
	class Unicorn {
		constructor(name) {
			this.name = name;
			m.react(this);
		}

		componentWillMount() {
			return this.name;
		}

		foo() {
			return this.name;
		}
	}

	const {foo, componentWillMount} = new Unicorn('Rainbow');

	t.throws(() => {
		componentWillMount();
	});

	t.is(foo(), 'Rainbow');
});

