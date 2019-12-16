import {expectType} from 'tsd';
import {Component as ReactComponent} from 'react';
import autoBindReact = require('./react');
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

		expectType<this>(autoBindReact(this));
		expectType<this>(autoBindReact(this, {include: ['foo', /bar/]}));
		expectType<this>(autoBindReact(this, {exclude: ['foo', /bar/]}));
	}
}
