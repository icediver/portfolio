'use client';
import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import ProjectTag from './project-tag/ProjectTag';
import { projects } from '@/assets/data/project.data';
import { Tag } from '@/components/ui/tag/Tag';
import { ProjectCard } from './new-card/ProjectCard';
import { ITag, useTags } from '@/hooks/useTags';

const ProjectsSection = () => {
	const [visible, setVisible] = useState(true);

	const {
		categories,
		activeCategory,
		setActiveCategory,
		tags,
		activeTag,
		setActiveTag,
	} = useTags(projects);

	function handleTagClick(key: keyof ITag) {
		setActiveTag(key as string);
	}
	useEffect(() => {
		setVisible(false);
		const timer = setTimeout(() => {
			setVisible(true);
		}, 600);

		return () => clearTimeout(timer);
	}, [activeTag]);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag: string) => {
		setActiveCategory(newTag);
	};

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="mb-8 mt-4 text-center text-4xl font-bold text-white md:mb-12">
				My Projects
			</h2>
			<div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
				{categories.map((cat, index) => {
					return (
						<ProjectTag
							onClick={handleTagChange}
							key={cat}
							name={cat}
							isSelected={categories[index] === activeCategory}
						/>
					);
				})}
			</div>
			<div className="mx-auto grid grid-cols-2 grid-rows-5 gap-4 lg:grid-cols-5 xl:grid-cols-8">
				<Tag
					active={activeTag}
					tag="All"
					key={'All'}
					handleTagClick={handleTagClick}
					value={projects.length}
				/>
				{Object.keys(tags).map((key: keyof ITag, index: number) => {
					return (
						<Tag
							active={activeTag}
							key={key}
							tag={String(key)}
							value={tags[key]}
							handleTagClick={handleTagClick}
						/>
					);
				})}
			</div>
			<AnimatePresence>
				{visible && (
					<motion.div
						className="mx-auto grid place-items-center gap-y-5 py-10 md:grid-cols-2 xl:grid-cols-3"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						exit={{ opacity: 0 }}
					>
						{projects
							.filter(
								(project) =>
									activeCategory === 'All' ||
									project.category === activeCategory
							)
							.filter(
								(project) =>
									activeTag === 'All' || project.stack.includes(activeTag)
							)
							.map((project) => {
								return (
									<ProjectCard
										key={project.title + Math.random()}
										project={project}
									/>
								);
							})}
					</motion.div>
				)}{' '}
			</AnimatePresence>
		</section>
	);
};

export default ProjectsSection;
