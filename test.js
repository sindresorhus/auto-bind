import test from 'ava';
import autoBindReact from './react';
import autoBind from '.';

test('autoBind()', t => {
	let bounded;

	class Unicorn {
		constructor(name) {
			this.name = name;
			bounded = autoBind(this);
		}

		message() {
			return `${this.name} is awesome!`;
		}

		get bad() {
			throw new Error('This getter somehow throws an error!');
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
			autoBind(this, {include: ['bar']});
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
			autoBind(this, {exclude: ['bar']});
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

test('symbol properties', t => {
	const messageSymbol = Symbol('message');

	let bounded;

	class Unicorn {
		constructor(name) {
			this.name = name;
			bounded = autoBind(this);
		}

		[messageSymbol]() {
			return `${this.name} is awesome!`;
		}
	}

	const unicorn = new Unicorn('Rainbow');
	t.is(bounded, unicorn);

	const message = unicorn[messageSymbol];
	t.is(message(), 'Rainbow is awesome!');
});

test('binds inherited properties', t => {
	class Base {
		constructor(name) {
			this.name = name;
		}

		message() {
			return `${this.name} is awesome!`;
		}
	}

	class Base2 extends Base {}

	let bounded;
	class Unicorn extends Base2 {
		constructor(name) {
			super(name);
			bounded = autoBind(this);
		}
	}

	const unicorn = new Unicorn('Rainbow');
	t.is(bounded, unicorn);

	const {message} = unicorn;
	t.is(message(), 'Rainbow is awesome!');
});

test('autoBindReact()', t => {
	class Unicorn {
		constructor(name) {
			this.name = name;
			autoBindReact(this);
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
