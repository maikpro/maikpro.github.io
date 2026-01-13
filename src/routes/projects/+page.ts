export const prerender = true;

interface GitHubRepo {
	name: string;
	description: string | null;
	html_url: string;
	stargazers_count: number;
	language: string | null;
	topics: string[];
	fork: boolean;
	updated_at: string;
}

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	githubUrl: string;
	stars: number;
	updatedAt: string;
}

// Manually specify your pinned/featured repositories
const FEATURED_REPOS: string[] = [
	'data_ingestify',
    'web_opt_mangadownloader',
    'saver',
    'cli_opt_downloader',
];

export async function load({ fetch }) {
	try {
		const response = await fetch('https://api.github.com/users/maikpro/repos?per_page=100&sort=updated');
		
		if (!response.ok) {
			console.error('Failed to fetch GitHub repos:', response.status);
			return { projects: [] };
		}

		const repos: GitHubRepo[] = await response.json();

		// Filter repositories
		let filteredRepos = repos.filter(repo => !repo.fork);

		// If featured repos are specified, show only those; otherwise show top 6 by stars
		if (FEATURED_REPOS.length > 0) {
			filteredRepos = filteredRepos.filter(repo => FEATURED_REPOS.includes(repo.name));
		} else {
			// Show top 6 repositories by stars
			filteredRepos = filteredRepos
				.sort((a, b) => b.stargazers_count - a.stargazers_count)
				.slice(0, 6);
		}

		const projects: Project[] = filteredRepos.map(repo => ({
			name: repo.name,
			description: repo.description || 'No description available',
			technologies: [
				repo.language,
				...repo.topics
			].filter(Boolean) as string[],
			githubUrl: repo.html_url,
			stars: repo.stargazers_count,
			updatedAt: repo.updated_at
		}));

		return {
			projects
		};
	} catch (error) {
		console.error('Error fetching GitHub repos:', error);
		return { projects: [] };
	}
}
