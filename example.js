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

	console.log(content);
}();
