import clsx from 'clsx';
import { motion } from 'framer-motion';

interface ITag {
	handleTagClick: (key: string) => void;
	active: string;
	tag: string;
	value: number;
}

export function Tag({ active, handleTagClick, tag, value }: ITag) {
	return (
		<motion.div
			className={clsx(
				'flex cursor-pointer items-center justify-center rounded-2xl bg-tag py-1 text-white/30 transition-colors',
				{
					'!bg-active-tag !text-white/60': active === tag,
					'hover:bg-hover-tag': active !== tag,
				}
			)}
			onClick={() => handleTagClick(tag)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit={{ opacity: 0 }}
		>
			<p>
				{tag}
				<span>: {value}</span>
			</p>
		</motion.div>
	);
}
