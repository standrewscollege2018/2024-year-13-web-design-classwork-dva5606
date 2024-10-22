

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.51iSNKj-.js","_app/immutable/chunks/scheduler.VOLigLrV.js","_app/immutable/chunks/index.DjidVCRW.js","_app/immutable/chunks/entry.nw-7vtX2.js"];
export const stylesheets = [];
export const fonts = [];
