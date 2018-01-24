﻿export default ({body, title})=>{
	
	return `<!Doctype html>
	<html>
	<head>
	<title>${title}</title>
	</head>
	<body>
	  <div id="root">${body}</div>
	</body>
	<scripts src="../../dist/bundle.js"></script>`;
}