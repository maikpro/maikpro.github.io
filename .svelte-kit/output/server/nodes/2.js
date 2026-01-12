

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BKHoiBiI.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/C6NikhGR.js","_app/immutable/chunks/BHm7SPZ2.js"];
export const stylesheets = [];
export const fonts = [];
