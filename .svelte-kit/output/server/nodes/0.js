import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BJe2u7Yu.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BHm7SPZ2.js","_app/immutable/chunks/I6y6waXP.js","_app/immutable/chunks/fO_60Z-D.js","_app/immutable/chunks/C6NikhGR.js","_app/immutable/chunks/TwRE8HwZ.js","_app/immutable/chunks/Dr3MpHE0.js","_app/immutable/chunks/rSjJfoPS.js"];
export const stylesheets = ["_app/immutable/assets/0.Bgt9cY_p.css"];
export const fonts = [];
