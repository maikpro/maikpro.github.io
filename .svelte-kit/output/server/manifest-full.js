export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.svg","me.jpg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DWNxv5Zp.js",app:"_app/immutable/entry/app.BzYdHBRO.js",imports:["_app/immutable/entry/start.DWNxv5Zp.js","_app/immutable/chunks/rSjJfoPS.js","_app/immutable/chunks/I6y6waXP.js","_app/immutable/chunks/BHm7SPZ2.js","_app/immutable/chunks/fO_60Z-D.js","_app/immutable/entry/app.BzYdHBRO.js","_app/immutable/chunks/BHm7SPZ2.js","_app/immutable/chunks/fO_60Z-D.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/I6y6waXP.js","_app/immutable/chunks/BcT0jHM0.js","_app/immutable/chunks/Dr3MpHE0.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
