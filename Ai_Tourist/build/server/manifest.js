const manifest = (() => {
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
			__memo(() => import('./chunks/0-DCKv731E.js')),
			__memo(() => import('./chunks/1-C8I4vzmB.js')),
			__memo(() => import('./chunks/2-BTj5wwyP.js')),
			__memo(() => import('./chunks/3-D9vMPzwX.js')),
			__memo(() => import('./chunks/4-TZ1XlG2G.js'))
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
				endpoint: __memo(() => import('./chunks/_server.ts-BdfVgXSe.js'))
			},
			{
				id: "/api/speechToText",
				pattern: /^\/api\/speechToText\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-D0Z9whCc.js'))
			},
			{
				id: "/api/textToSpeech",
				pattern: /^\/api\/textToSpeech\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./chunks/_server.ts-EaQTiTXr.js'))
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

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
