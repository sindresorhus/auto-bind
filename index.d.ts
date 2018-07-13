declare module "auto-bind" {
	interface AutoBindOptions {
		include?: Array<string | RegExp>;
		exclude?: Array<string | RegExp>;
	}

	type AutoBindFunction<selfT = Object> = (
		self: selfT,
		options?: AutoBindOptions
	) => selfT;

	interface AutoBind<selfT = Object> extends AutoBindFunction<selfT> {
		react: AutoBindFunction<selfT>;
	}

	const autoBind: AutoBind;
	export = autoBind;
}
