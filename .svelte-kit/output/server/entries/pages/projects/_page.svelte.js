import { O as head, P as ensure_array_like, E as escape_html, Q as attr, I as stringify } from "../../../chunks/index.js";
function _page($$payload) {
  const projects = [
    // Add your projects here
    // Example:
    // {
    // name: 'My Awesome Project',
    // description: 'A brief description of what this project does.',
    // technologies: ['TypeScript', 'Svelte', 'Tailwind CSS'],
    // githubUrl: 'https://github.com/maik/my-awesome-project'
    // }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Maik - Projects</title>`;
    $$payload2.out += `<meta name="description" content="Browse Maik's projects and work"/>`;
  });
  $$payload.out += `<article><h1 class="mb-8 text-3xl font-bold sm:text-4xl">Projects 🚀</h1> `;
  if (projects.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-16 text-center"><p class="text-xl text-gray-600">Projects coming soon! 🚀</p> <p class="mt-2 text-gray-500">Check back later for updates on what I'm working on.</p></div>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(projects);
    $$payload.out += `<div class="space-y-6"><!--[-->`;
    for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array[$$index_1];
      const each_array_1 = ensure_array_like(project.technologies);
      $$payload.out += `<div class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"><div class="flex items-start justify-between"><div class="flex-1"><h2 class="text-xl font-semibold text-gray-900">${escape_html(project.name)}</h2> <p class="mt-2 text-gray-600">${escape_html(project.description)}</p> <div class="mt-4 flex flex-wrap gap-2"><!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tech = each_array_1[$$index];
        $$payload.out += `<span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">${escape_html(tech)}</span>`;
      }
      $$payload.out += `<!--]--></div></div> <a${attr("href", project.githubUrl)} target="_blank" rel="noopener noreferrer" class="ml-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"${attr("aria-label", `View ${stringify(project.name)} on GitHub`)}>💻 GitHub</a></div></div>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></article>`;
}
export {
  _page as default
};
