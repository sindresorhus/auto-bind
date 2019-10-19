import {expectType} from 'tsd';
import {Component as ReactComponent} from 'react';
import autoBind = require('.');

const foo = {
	bar: 'bar',

	method(foo: string) {
		return this.bar;
	}
};

expectType<typeof foo>(autoBind(foo));
expectType<typeof foo>(autoBind(foo, {include: ['foo', /bar/]}));
expectType<typeof foo>(autoBind(foo, {exclude: ['foo', /bar/]}));

class Bar extends ReactComponent {
	constructor(props: object) {
		super(props);

		expectType<this>(autoBind.react(this));
		expectType<this>(autoBind.react(this, {include: ['foo', /bar/]}));
		expectType<this>(autoBind.react(this, {exclude: ['foo', /bar/]}));
	}
}
