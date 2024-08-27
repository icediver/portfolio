import { IProject } from '@/assets/data/project.data';

export const ProjectsService = {
	async getProjects(): Promise<IProject[]> {
		return fetch('http://localhost:3000/api/projects').then((res) =>
			res.json()
		);
	},
};
