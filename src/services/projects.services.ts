import { IProject } from '@/assets/data/project.data';

export const ProjectsService = {
	async getProjects(): Promise<IProject[]> {
		return fetch('https://portfolio-nu-nine-81.vercel.app/api/projects').then(
			(res) => res.json()
		);
	},
};
