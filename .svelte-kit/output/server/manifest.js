export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg","profile.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.D_fEsGRl.js",app:"_app/immutable/entry/app.B2FY14FN.js",imports:["_app/immutable/entry/start.D_fEsGRl.js","_app/immutable/chunks/BdU6MH3K.js","_app/immutable/chunks/I6y6waXP.js","_app/immutable/chunks/BHm7SPZ2.js","_app/immutable/chunks/fO_60Z-D.js","_app/immutable/entry/app.B2FY14FN.js","_app/immutable/chunks/BHm7SPZ2.js","_app/immutable/chunks/fO_60Z-D.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/I6y6waXP.js","_app/immutable/chunks/BcT0jHM0.js","_app/immutable/chunks/Dr3MpHE0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/projects"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
