<script lang="ts">
	function handleImageError(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = 'https://ui-avatars.com/api/?name=Maik&size=160&background=e5e7eb&color=374151';
	}
</script>

<svelte:head>
	<title>Maik - Home</title>
	<meta name="description" content="Maik's personal portfolio website" />
</svelte:head>

<section class="flex flex-col items-center justify-center py-16 text-center">
	<div class="mb-8">
		<img
			src="/me.jpg"
			alt="Maik"
			class="h-40 w-40 rounded-full border-4 border-gray-200 object-cover shadow-lg"
			onerror={handleImageError}
		/>
	</div>

	<h1 class="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl">
		👋 Hi, I'm Maik
	</h1>

	<p class="mb-8 max-w-xl text-lg text-gray-600">
		Welcome to my personal website. I'm a developer passionate about building great software.
	</p>

	<div class="flex gap-4">
		<a
			href="https://www.linkedin.com/in/maik-proba/"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-white transition-colors hover:bg-gray-700"
		>
			💼 LinkedIn
		</a>
		<a
			href="https://github.com/maikpro"
			target="_blank"
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-gray-900 transition-colors hover:bg-gray-50"
		>
			💻 GitHub
		</a>
	</div>
</section>



