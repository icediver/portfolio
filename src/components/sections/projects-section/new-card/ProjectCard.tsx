import Image from "next/image";
import clsx from "clsx";
import { GithubIcon, LinkIcon } from "@/components/ui/icons/Icons";
import { HiCodeBracket, HiEye } from "react-icons/hi2";
import Link from "next/link";
import { IProject } from "@/assets/data/project.data";
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
    <div
      className={clsx(
        "relative w-[400px] h-[500px] bg-[#190A1F] box-border border-2 border-[#000]/5 cursor-pointer",
        "hover:scale-105 transition-all duration-500 rounded shadow-gray-800/30 shadow-xl",
      )}
    >
      <svg className="absolute top-0 left-0 w-full h-full fill-transparent">
        <rect
          className="absolute top-0 left-0 w-full h-full fill-transparent rounded-lg"
          strokeWidth={2}
          strokeDasharray={445}
          rx={8}
          ry={8}
          // stroke="#fcd34d"
          stroke="#a855f7"
        />
        <animate
          attributeName={"stroke-dashoffset"}
          values="900;0"
          dur="7s"
          repeatCount="indefinite"
        />
      </svg>
      <div
        className={
          "relative m-4  rounded-lg border border-blue-600/50 p-8 text-center text-white"
        }
      >
        <div className="group">
          <h1 className=" text-2xl mb-2.5 p-0">{title}</h1>
          <Image
            src={"/assets/work/" + image}
            alt={title}
            width={300}
            height={300}
            className="w-[300px] h-[200px] mx-auto overflow-hidden object-cover rounded"
          />
          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-60  transition-all duration-500 z-50">
            <Link
              href={github || "#"}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <HiCodeBracket className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
            <Link
              href={url || "#"}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <HiEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>
        <div className="flex py-4 justify-center gap-4">
          {github && <GithubIcon url={github} size={24} />}
          {url && <LinkIcon url={url} size={24} />}
        </div>
      </div>
    </div>
  );
}
