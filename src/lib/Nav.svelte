<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="border-b border-gray-200 bg-white">
	<nav class="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
		<a href="/" class="text-xl font-bold text-gray-900 hover:text-gray-600">Maik</a>
		<ul class="flex gap-6">
			<li>
				<a
					href="/"
					class="text-gray-600 transition-colors hover:text-gray-900 {$page.url.pathname === '/'
						? 'font-semibold text-gray-900'
						: ''}"
				>
					Home
				</a>
			</li>
			<li>
				<a
					href="/about"
					class="text-gray-600 transition-colors hover:text-gray-900 {$page.url.pathname ===
					'/about'
						? 'font-semibold text-gray-900'
						: ''}"
				>
					About
				</a>
			</li>
			<li>
				<a
					href="/projects"
					class="text-gray-600 transition-colors hover:text-gray-900 {$page.url.pathname ===
					'/projects'
						? 'font-semibold text-gray-900'
						: ''}"
				>
					Projects
				</a>
			</li>
		</ul>
	</nav>
</header>
