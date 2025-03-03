# Installing PostCSS Conditional Values

[PostCSS Conditional Values] runs in all Node environments, with special instructions for:

- [Node](#node)
- [PostCSS CLI](#postcss-cli)
- [PostCSS Load Config](#postcss-load-config)
- [Webpack](#webpack)
- [Next.js](#nextjs)
- [Gulp](#gulp)
- [Grunt](#grunt)

## Node

Add [PostCSS Conditional Values] to your project:

```bash
npm install postcss @csstools/postcss-conditional-values --save-dev
```

Use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssConditionalValues = require('@csstools/postcss-conditional-values');

postcss([
	postcssConditionalValues(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli @csstools/postcss-conditional-values --save-dev
```

Use [PostCSS Conditional Values] in your `postcss.config.js` configuration file:

```js
const postcssConditionalValues = require('@csstools/postcss-conditional-values');

module.exports = {
	plugins: [
		postcssConditionalValues(/* pluginOptions */)
	]
}
```

## PostCSS Load Config

If your framework/CLI supports [`postcss-load-config`](https://github.com/postcss/postcss-load-config).

```bash
npm install @csstools/postcss-conditional-values --save-dev
```

`package.json`:

```json
{
	"postcss": {
		"plugins": {
			"@csstools/postcss-conditional-values": {}
		}
	}
}
```

`.postcssrc.json`:

```json
{
	"plugins": {
		"@csstools/postcss-conditional-values": {}
	}
}
```

_See the [README of `postcss-load-config`](https://github.com/postcss/postcss-load-config#usage) for more usage options._

## Webpack

_Webpack version 5_

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader @csstools/postcss-conditional-values --save-dev
```

Use [PostCSS Conditional Values] in your Webpack configuration:

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
										"@csstools/postcss-conditional-values",
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
npm install @csstools/postcss-conditional-values --save-dev
```

Use [PostCSS Conditional Values] in your `postcss.config.json` file:

```json
{
	"plugins": [
		"@csstools/postcss-conditional-values"
	]
}
```

```json5
{
	"plugins": [
		[
			"@csstools/postcss-conditional-values",
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
npm install gulp-postcss @csstools/postcss-conditional-values --save-dev
```

Use [PostCSS Conditional Values] in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssConditionalValues = require('@csstools/postcss-conditional-values');

gulp.task('css', function () {
	var plugins = [
		postcssConditionalValues(/* pluginOptions */)
	];

	return gulp.src('./src/*.css')
		.pipe(postcss(plugins))
		.pipe(gulp.dest('.'));
});
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss @csstools/postcss-conditional-values --save-dev
```

Use [PostCSS Conditional Values] in your Gruntfile:

```js
const postcssConditionalValues = require('@csstools/postcss-conditional-values');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
	postcss: {
		options: {
			processors: [
			postcssConditionalValues(/* pluginOptions */)
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
[PostCSS Conditional Values]: https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-conditional-values
[Next.js]: https://nextjs.org
