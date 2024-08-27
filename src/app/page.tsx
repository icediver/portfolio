import { IProject } from '@/assets/data/project.data';
import AboutSection from '@/components/sections/about-section/AboutSection';
import AchievementsSection from '@/components/sections/achievements-section/AchievementsSection';
import EmailSection from '@/components/sections/email-section/EmailSection';
import HeroSection from '@/components/sections/hero-section/HeroSection';
import ProjectsSection from '@/components/sections/projects-section/ProjectsSection';
import { ProjectsService } from '@/services/projects.services';

async function getProjects() {
	try {
		const projects: IProject[] = await ProjectsService.getProjects();
		return projects;
	} catch (error) {
		console.log(error);

		return [];
	}
}

export default async function HomePage() {
	const projects = await getProjects();
	return (
		<main className="container mx-auto mt-28 flex w-full flex-col px-4">
			<HeroSection />
			<AchievementsSection />
			<AboutSection />
			{projects && <ProjectsSection projects={projects as IProject[]} />}
			<EmailSection />
		</main>
	);
}
