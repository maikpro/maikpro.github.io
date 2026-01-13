<script lang="ts">
	import { Github, Star } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
	const { projects } = data;

</script>

<svelte:head>
	<title>Maik - Projects</title>
	<meta name="description" content="Browse Maik's projects and work" />
</svelte:head>

<article>
	<h1 class="mb-8 text-3xl font-bold sm:text-4xl">🚀 Projects</h1>

	{#if projects.length === 0}
		<div
			class="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 py-16 text-center"
		>
			<p class="text-xl text-gray-600">Projects coming soon! 🚀</p>
			<p class="mt-2 text-gray-500">Check back later for updates on what I'm working on.</p>
		</div>
	{:else}
		<div class="space-y-6">
			{#each projects as project}
				<div
					class="rounded-lg border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
				>
					<div class="flex items-start justify-between">
						<div class="flex-1">
							<h2 class="text-xl font-semibold text-gray-900">{project.name}</h2>
							<p class="mt-2 text-gray-600">{project.description}</p>
							<div class="mt-4 flex flex-wrap gap-2">
								{#each project.technologies as tech}
									<span
										class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
									>
										{tech}
									</span>
								{/each}
							</div>
						</div>
						<a
							href={project.githubUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="ml-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50"
							aria-label="View {project.name} on GitHub"
						>
							<Github size={16} />
							<span class="hidden sm:inline">GitHub</span>
						</a>
					</div>
					{#if project.stars > 0}
						<div class="mt-4 flex items-center gap-1 text-sm text-gray-600">
							<Star size={16} class="fill-yellow-400 text-yellow-400" />
							<span>{project.stars}</span>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</article>
