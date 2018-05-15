# fs-tree-view
Get structure directory.

Run example
___
```
node example.js
```

Code in example.js
```
const TreeView = require('./TreeView');
const treeView = new TreeView();

void async function () {
	await treeView.scan(__dirname);

	let content = treeView.toContent([
		{
			regExp : /example\.js/,
			text : "Example use"
		},
		{
			regExp : /TreeView\.js/,
			text : "Annotation class"
		},
		{
			regExp : /LICENSE/,
			text : "About license"
		},
	]);
}();

```

Result
___
```
Root folder
├── LICENSE  -- "About license"
├── TreeView.js  -- "Annotation class"
└── example.js  -- "Example use"
```

## Authors and developers

ONLY [Igor Stcherbina](https://github.com/eagle7410)

## License

[MIT](https://github.com/eagle7410/fs-tree-view/blob/master/LICENSE)
