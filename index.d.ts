declare module "auto-bind" {
	interface AutoBindOptions {
		include?: Array<string | RegExp>;
		exclude?: Array<string | RegExp>;
	}

	type AutoBindFunction<selfT = object> = (
		self: selfT,
		options?: AutoBindOptions
	) => selfT;

	interface AutoBind<selfT = object> extends AutoBindFunction<selfT> {
		react: AutoBindFunction<selfT>;
	}

	const autoBind: AutoBind;
	export = autoBind;
}
