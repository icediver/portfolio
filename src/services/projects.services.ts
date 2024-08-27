import { IProject } from '@/assets/data/project.data';

export const ProjectsService = {
	async getProjects(): Promise<IProject[]> {
		return fetch(`${process.env.APP_URL}/api/projects`).then((res) =>
			res.json()
		);
	},
};
