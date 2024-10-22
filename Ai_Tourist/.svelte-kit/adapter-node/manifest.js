export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.OddEiMu2.js","app":"_app/immutable/entry/app.by9wUcQn.js","imports":["_app/immutable/entry/start.OddEiMu2.js","_app/immutable/chunks/entry.nw-7vtX2.js","_app/immutable/chunks/scheduler.VOLigLrV.js","_app/immutable/entry/app.by9wUcQn.js","_app/immutable/chunks/scheduler.VOLigLrV.js","_app/immutable/chunks/index.DjidVCRW.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
				id: "/api/chatgptResponse",
				pattern: /^\/api\/chatgptResponse\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/chatgptResponse/_server.ts.js'))
			},
			{
				id: "/api/speechToText",
				pattern: /^\/api\/speechToText\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/speechToText/_server.ts.js'))
			},
			{
				id: "/api/textToSpeech",
				pattern: /^\/api\/textToSpeech\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/textToSpeech/_server.ts.js'))
			},
			{
				id: "/history",
				pattern: /^\/history\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set([]);

export const base = "";