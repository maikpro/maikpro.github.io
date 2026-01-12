import "clsx";
import { E as escape_html, D as pop, z as push, F as getContext, G as attr_class, I as stringify, J as store_get, K as unsubscribe_stores } from "../../chunks/index.js";
import "../../chunks/client.js";
function Footer($$payload, $$props) {
  push();
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$payload.out += `<footer class="border-t border-gray-200 bg-white"><div class="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between"><p class="text-sm text-gray-600">© ${escape_html(currentYear)} 🧑🏻‍💻 developed by Maik</p> <div class="flex gap-4"><a href="https://linkedin.com/in/maik" target="_blank" rel="noopener noreferrer" class="text-gray-600 transition-colors hover:text-gray-900" aria-label="LinkedIn">💼 LinkedIn</a> <a href="https://github.com/maik" target="_blank" rel="noopener noreferrer" class="text-gray-600 transition-colors hover:text-gray-900" aria-label="GitHub">💻 GitHub</a></div></div></footer>`;
  pop();
}
const getStores = () => {
  const stores$1 = getContext("__svelte__");
  return {
    /** @type {typeof page} */
    page: {
      subscribe: stores$1.page.subscribe
    },
    /** @type {typeof navigating} */
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    /** @type {typeof updated} */
    updated: stores$1.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function Nav($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<header class="border-b border-gray-200 bg-white"><nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4"><a href="/" class="text-xl font-bold text-gray-900 hover:text-gray-600">Maik</a> <ul class="flex gap-6"><li><a href="/"${attr_class(`text-gray-600 transition-colors hover:text-gray-900 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/" ? "font-semibold text-gray-900" : "")}`)}>Home</a></li> <li><a href="/about"${attr_class(`text-gray-600 transition-colors hover:text-gray-900 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/about" ? "font-semibold text-gray-900" : "")}`)}>About</a></li> <li><a href="/projects"${attr_class(`text-gray-600 transition-colors hover:text-gray-900 ${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname === "/projects" ? "font-semibold text-gray-900" : "")}`)}>Projects</a></li></ul></nav></header>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _layout($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="flex min-h-screen flex-col bg-white text-gray-900">`;
  Nav($$payload);
  $$payload.out += `<!----> <main class="mx-auto w-full max-w-4xl flex-1 px-4 py-8">`;
  children($$payload);
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
