# Installing PostCSS Nested Calc

[PostCSS Nested Calc] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

## Node

Add [PostCSS Nested Calc] to your project:

```bash
npm install postcss @csstools/postcss-nested-calc --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssNestedCalc = require('@csstools/postcss-nested-calc');

postcss([
	postcssNestedCalc(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-nested-calc --save-dev
```

Use [PostCSS Nested Calc] in your `postcss.config.js` configuration file:

```js
const postcssNestedCalc = require('@csstools/postcss-nested-calc');

module.exports = {
	plugins: [
		postcssNestedCalc(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install @csstools/postcss-nested-calc --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"@csstools/postcss-nested-calc": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"@csstools/postcss-nested-calc": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-nested-calc --save-dev
```

Use [PostCSS Nested Calc] in your Webpack configuration:

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: { importLoaders: 1 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"@csstools/postcss-nested-calc",
										{
											// Options
										},
									],
								],
							},
						},
					},
				],
			},
		],
	},
};
```

## Next.js

Read the instructions on how to [customize the PostCSS configuration in Next.js](https://nextjs.org/docs/advanced-features/customizing-postcss-config)

```bash
npm install @csstools/postcss-nested-calc --save-dev
```

Use [PostCSS Nested Calc] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"@csstools/postcss-nested-calc"
	]
}
```

```json5
{
	"plugins": [
		[
			"@csstools/postcss-nested-calc",
			{
				// Optionally add plugin options
			}
		]
	]
}
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss @csstools/postcss-nested-calc --save-dev
```

Use [PostCSS Nested Calc] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssNestedCalc = require('@csstools/postcss-nested-calc');

gulp.task('css', function () {
	var plugins = [
		postcssNestedCalc(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-nested-calc --save-dev
```

Use [PostCSS Nested Calc] in your Gruntfile:

```js
const postcssNestedCalc = require('@csstools/postcss-nested-calc');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssNestedCalc(/* pluginOptions */)
			]
		},
		dist: {
			src: '*.css'
		}
	}
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS Nested Calc]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nested-calc
[Next.js]: https://nextjs.org
