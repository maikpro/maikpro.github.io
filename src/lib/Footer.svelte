<script lang="ts">
	import { Linkedin, Github } from 'lucide-svelte';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-gray-200 bg-white">
	<div
		class="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between"
	>
		<p class="text-sm text-gray-600">© {currentYear} 🧑🏻‍💻 developed by Maik</p>
		<div class="flex gap-4">
			<a
				href="https://www.linkedin.com/in/maik-proba/"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-600 transition-colors hover:text-gray-900"
				aria-label="LinkedIn"
			>
				<Linkedin size={20} />
			</a>
			<a
				href="https://github.com/maikpro"
				target="_blank"
				rel="noopener noreferrer"
				class="text-gray-600 transition-colors hover:text-gray-900"
				aria-label="GitHub"
			>
				<Github size={20} />
			</a>
		</div>
	</div>
</footer>
