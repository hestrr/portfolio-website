const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio-website/_app",
	assets: new Set([".nojekyll","tree-branch-icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.60906ce2.js","app":"_app/immutable/entry/app.0b731657.js","imports":["_app/immutable/entry/start.60906ce2.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.8e6ec364.js","_app/immutable/entry/app.0b731657.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.443e41d3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-f3784fa9.js')),
			__memo(() => import('./chunks/1-c8cbc92f.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set(["/portfolio-website/","/portfolio-website/comic/","/portfolio-website/comic/__data.json"]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
