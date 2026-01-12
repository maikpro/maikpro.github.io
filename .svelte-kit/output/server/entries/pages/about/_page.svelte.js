import { P as ensure_array_like, O as head, E as escape_html } from "../../../chunks/index.js";
function _page($$payload) {
  const each_array = ensure_array_like([
    "TypeScript",
    "JavaScript",
    "Svelte",
    "SvelteKit",
    "React",
    "Node.js",
    "Python",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "SQL"
  ]);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Maik - About</title>`;
    $$payload2.out += `<meta name="description" content="Learn more about Maik - background, skills, and experience"/>`;
  });
  $$payload.out += `<article class="prose prose-gray max-w-none"><h1 class="mb-8 text-3xl font-bold sm:text-4xl">About Me 👨‍💻</h1> <section class="mb-12"><h2 class="mb-4 text-2xl font-semibold">Bio</h2> <p class="text-gray-600">Hi! I'm Maik, a passionate software developer with a love for building elegant solutions to complex problems. 
			I enjoy working with modern technologies and creating applications that make a difference.</p></section> <section class="mb-12"><h2 class="mb-4 text-2xl font-semibold">Skills 🛠️</h2> <div class="flex flex-wrap gap-2"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let skill = each_array[$$index];
    $$payload.out += `<span class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">${escape_html(skill)}</span>`;
  }
  $$payload.out += `<!--]--></div></section> <section class="mb-12"><h2 class="mb-4 text-2xl font-semibold">Work Experience 💼</h2> <div class="space-y-6"><div class="border-l-4 border-gray-300 pl-4"><h3 class="font-semibold text-gray-900">Software Developer</h3> <p class="text-sm text-gray-500">Company Name • 2022 - Present</p> <p class="mt-2 text-gray-600">Developing and maintaining web applications using modern frameworks and best practices.</p></div> <div class="border-l-4 border-gray-300 pl-4"><h3 class="font-semibold text-gray-900">Junior Developer</h3> <p class="text-sm text-gray-500">Previous Company • 2020 - 2022</p> <p class="mt-2 text-gray-600">Started my career building features and fixing bugs in various projects.</p></div></div></section> <section class="mb-12"><h2 class="mb-4 text-2xl font-semibold">Education 🎓</h2> <div class="border-l-4 border-gray-300 pl-4"><h3 class="font-semibold text-gray-900">Bachelor's Degree in Computer Science</h3> <p class="text-sm text-gray-500">University Name • 2016 - 2020</p></div></section> <section class="mb-12"><h2 class="mb-4 text-2xl font-semibold">Contact 📬</h2> <p class="text-gray-600">Feel free to reach out to me via email or connect on social media!</p> <div class="mt-4 space-y-2"><p><span class="font-medium">Email:</span> <a href="mailto:maik@example.com" class="text-gray-600 hover:text-gray-900 hover:underline">maik@example.com</a></p></div></section> <section><h2 class="mb-4 text-2xl font-semibold">Connect 🔗</h2> <div class="flex gap-4"><a href="https://linkedin.com/in/maik" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50">💼 LinkedIn</a> <a href="https://github.com/maik" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50">💻 GitHub</a></div></section></article>`;
}
export {
  _page as default
};
