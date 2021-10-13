import {expectType} from 'tsd';
import {Component as ReactComponent} from 'react';
import autoBindReact from './react.js';
import autoBind from './index.js';

const foo = {
	bar: 'bar',

	method(_foo: string) {
		return this.bar;
	},
};

expectType<typeof foo>(autoBind(foo));
expectType<typeof foo>(autoBind(foo, {include: ['foo', /bar/]}));
expectType<typeof foo>(autoBind(foo, {exclude: ['foo', /bar/]}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Bar extends ReactComponent {
	constructor(props: Record<string, unknown>) {
		super(props);

		expectType<this>(autoBindReact(this));
		expectType<this>(autoBindReact(this, {include: ['foo', /bar/]}));
		expectType<this>(autoBindReact(this, {exclude: ['foo', /bar/]}));
	}
}
