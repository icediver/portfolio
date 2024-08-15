import Image from 'next/image';
import clsx from 'clsx';
import { GithubIcon, LinkIcon } from '@/components/ui/icons/Icons';
import { HiCodeBracket, HiEye } from 'react-icons/hi2';
import Link from 'next/link';
import { IProject } from '@/assets/data/project.data';
import { motion } from 'framer-motion';
/* interface IProjectCard {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
} */

export function ProjectCard({
	project: { title, url, github, stack, image },
}: {
	project: IProject;
}) {
	return (
		<motion.div
			className={clsx(
				'relative box-border h-[500px] w-[400px] cursor-pointer border-2 border-[#000]/5 bg-[#190A1F]',
				'rounded shadow-xl shadow-gray-800/30 transition-all duration-500 hover:scale-105'
			)}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			exit={{ opacity: 0 }}
		>
			<svg className="absolute left-0 top-0 h-full w-full fill-transparent">
				<rect
					className="absolute left-0 top-0 h-full w-full rounded-lg fill-transparent"
					strokeWidth={2}
					strokeDasharray={445}
					rx={8}
					ry={8}
					// stroke="#fcd34d"
					stroke="#a855f7"
				/>
				<animate
					attributeName={'stroke-dashoffset'}
					values="900;0"
					dur="7s"
					repeatCount="indefinite"
				/>
			</svg>
			<div
				className={
					'relative m-4 rounded-lg border border-blue-600/50 p-8 text-center text-white'
				}
			>
				<div className="group">
					<h1 className="mb-2.5 p-0 text-2xl">{title}</h1>
					<Image
						src={image}
						alt={title}
						width={300}
						height={300}
						className="mx-auto h-[200px] w-[300px] overflow-hidden rounded object-cover"
					/>
					<div className="overlay absolute left-0 top-0 z-50 hidden h-full w-full items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:flex group-hover:bg-opacity-60">
						<Link
							href={github || '#'}
							className="group/link relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
						>
							<HiCodeBracket className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
						</Link>
						<Link
							href={url || '#'}
							className="group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE] hover:border-white"
						>
							<HiEye className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer text-[#ADB7BE] group-hover/link:text-white" />
						</Link>
					</div>
				</div>
				<div className="flex justify-center gap-4 py-4">
					{github && <GithubIcon url={github} size={24} />}
					{url && <LinkIcon url={url} size={24} />}
				</div>
			</div>
		</motion.div>
	);
}
