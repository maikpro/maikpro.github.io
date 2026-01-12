<svelte:head>
	<title>Maik - About</title>
	<meta name="description" content="Learn more about Maik - background, skills, and experience" />
</svelte:head>

<article class="prose prose-gray max-w-none">
	<h1 class="mb-8 text-3xl font-bold sm:text-4xl">About Me 🧑🏻‍💻</h1>

	<!-- Bio Section -->
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Bio</h2>
		<p class="text-gray-600">
			Hi! I'm Maik, a passionate Cloud Developer with a love for building elegant solutions to complex problems. 
			I enjoy working with modern technologies and creating applications that make a difference.
		</p>
	</section>

	<!-- Skills Section -->
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Skills 🛠️</h2>
		<div class="flex flex-wrap gap-2">
			{#each ['Google Cloud Platform (GCP)', 'Java','Spring Boot','TypeScript', 'Go', 'SvelteKit', 'React', 'Python', 'Terraform', 'GitHub Actions'] as skill}
				<span class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
					{skill}
				</span>
			{/each}
		</div>
	</section>

	<!-- Work Experience Section -->
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Work Experience 💼</h2>
		<div class="space-y-6">
			<div class="border-l-4 border-gray-300 pl-4">
				<h3 class="font-semibold text-gray-900">Software Developer</h3>
				<p class="text-sm text-gray-500">OTTO • 2023 - Present</p>
				<p class="mt-1 text-gray-600">
					• Development of cloud-native, event-driven microservices for processing high-volume data
				</p>
				<p class="mt-1 text-gray-600">
					• Design and ownership of a Transactional Outbox Pattern using Apache Beam / Google Dataflow, including CI/CD pipeline implementation
				</p>
				<p class="mt-1 text-gray-600">
					• Cross-functional development to ensure stable and scalable logistics processes
				</p>
				<p class="mt-1 text-gray-600">
					• Design and implementation of REST APIs for multiple functional modules
				</p>
				<p class="mt-1 text-gray-600">
					• Ownership of complex features from analysis and design to implementation and production support
				</p>
				<p class="mt-1 text-gray-600">
					• Test-driven development using JUnit, Mockito, and AssertJ (unit, integration, E2E tests)
				</p>
				<p class="mt-1 text-gray-600">
					• Development of Dataflow pipelines (Kafka-to-BigQuery) and internal communication via Kafka and Google Pub/Sub
				</p>
				<p class="mt-1 text-gray-600">
					• Operation of cloud infrastructure on Google Cloud Platform using Terraform, including monitoring, troubleshooting, disaster recovery activities, and replay of failed events
				</p>
				<p class="mt-1 text-gray-600">
					• Collaboration within an international team, including colleagues from India, ensuring effective communication in English
				</p>
			</div>
			<div class="border-l-4 border-gray-300 pl-4">
				<h3 class="font-semibold text-gray-900">Software Developer</h3>
				<p class="text-sm text-gray-500">HDI • 2023 - 2023</p>
				<p class="mt-1 text-gray-600">
					• Development and optimization of a sales platform for life insurance products
					in a banking (Sparkassen) environment
				</p>
				<p class="mt-1 text-gray-600">
					• Backend and frontend development using Java, Spring Boot, React
					with a strong focus on clean, maintainable, and performant code
				</p>
				<p class="mt-1 text-gray-600">
					• Contribution to the migration of the application to the cloud (AWS),
					including responsibility for further development and architectural improvements
				</p>
				<p class="mt-1 text-gray-600">
					• Continuous improvement of processes using agile methodologies
					(Scrum, SAFe), modern development practices, and pair programming
				</p>
				<p class="mt-1 text-gray-600">
					• Close collaboration with developers, business analysts, and domain experts
					in an agile, cross-functional team
				</p>

			</div>
		</div>
	</section>

	<!-- Education Section -->
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Education 🎓</h2>
		<div class="border-l-4 border-gray-300 pl-4">
			<h3 class="font-semibold text-gray-900">Bachelor's Degree in Computer Science</h3>
			<p class="text-sm text-gray-500">Hochschule Osnabrück • 2019 - 2023</p>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="mb-12">
		<h2 class="mb-4 text-2xl font-semibold">Contact 📬</h2>
		<p class="text-gray-600">
			Feel free to reach out to me on social media!
		</p>
	</section>

	<!-- Social Links Section -->
	<section>
		<h2 class="mb-4 text-2xl font-semibold">Connect 🔗</h2>
		<div class="flex gap-4">
			<a
				href="https://linkedin.com/in/maik"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
			>
				💼 LinkedIn
			</a>
			<a
				href="https://github.com/maik"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
			>
				💻 GitHub
			</a>
		</div>
	</section>
</article>