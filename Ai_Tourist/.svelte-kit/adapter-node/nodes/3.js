

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/history/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.qZ2flJHi.js","_app/immutable/chunks/scheduler.VOLigLrV.js","_app/immutable/chunks/index.DjidVCRW.js"];
export const stylesheets = [];
export const fonts = [];
