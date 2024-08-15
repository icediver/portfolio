import AboutSection from '@/components/sections/about-section/AboutSection';
import AchievementsSection from '@/components/sections/achievements-section/AchievementsSection';
import EmailSection from '@/components/sections/email-section/EmailSection';
import HeroSection from '@/components/sections/hero-section/HeroSection';
import ProjectsSection from '@/components/sections/projects-section/ProjectsSection';

export default function Home() {
	return (
		<main className="container mx-auto mt-28 flex w-full flex-col px-4">
			<HeroSection />
			<AchievementsSection />
			<AboutSection />
			<ProjectsSection />
			<EmailSection />
		</main>
	);
}
