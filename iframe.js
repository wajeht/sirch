export default function iframe(searchedUrl) {
  return `
	<html>
		<head>
		</head>
		<style>
			*{padding: 0; margin: 0; box-sizing: border-box; overflow:hidden;}
			.button {background: red; position: fixed; width: 35px; height: 35px; border-radius: 50%; z-index: 1; bottom: 10px; right: 10px;}
			.iframe {height: 100%; width: 100%; style="border: none;}
		</style>
		<body>
			<iframe class="iframe" src="${searchedUrl}"></iframe>
			<div class="button"></div>
		</body>
	</html>
`;
}
