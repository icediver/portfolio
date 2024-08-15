import React from 'react';

interface IProjectTag {
	name: string;
	onClick: (name: string) => void;
	isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: IProjectTag) => {
	const buttonStyles = isSelected
		? 'text-white border-primary-500'
		: 'text-[#ADB7BE] border-slate-600 hover:border-white';
	return (
		<button
			className={`${buttonStyles} cursor-pointer rounded-full border-2 px-6 py-3 text-xl`}
			onClick={() => onClick(name)}
		>
			{name}
		</button>
	);
};

export default ProjectTag;
