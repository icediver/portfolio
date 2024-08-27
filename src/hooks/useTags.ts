import { IProject } from '@/assets/data/project.data';
import { useEffect, useState } from 'react';

export interface ITag {
	[key: string]: number;
}

export function useTags(works: IProject[]) {
	const [categories, setCategories] = useState<string[]>([]);
	const [activeCategory, setActiveCategory] = useState('All');

	const [activeTag, setActiveTag] = useState('All');
	const [tags, setTags] = useState<ITag>({});

	const [projects, setProjects] = useState(works);

	useEffect(() => {
		const filteredProjects = works.filter(
			(project) =>
				activeCategory === 'All' || project.category === activeCategory
		);
		setProjects(filteredProjects);
	}, [works, activeCategory]);

	useEffect(() => {
		// Get all unique tags and their count
		const cats = works.map((item) => item.category);
		cats.unshift('All');
		const uniqCategories = [...new Set(cats)];
		setCategories(uniqCategories);
	}, [works]);

	useEffect(() => {
		const tags: string[] = projects.map((item) => item.stack).flat();
		const tagsCount = tags.reduce(
			(tagsCount, tag) => {
				tagsCount[tag] = (tagsCount[tag] || 0) + 1;
				return tagsCount;
			},
			{} as Record<string, number>
		);

		setTags(tagsCount);
	}, [projects]);

	console.log(
		categories,
		activeCategory,
		setActiveCategory,
		tags,
		activeTag,
		setActiveTag
	);

	return {
		categories,
		activeCategory,
		setActiveCategory,
		tags,
		activeTag,
		setActiveTag,
	};
}
