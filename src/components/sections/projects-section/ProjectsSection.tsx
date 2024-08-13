"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
// import ProjectCard from "./project-card/ProjectCard";
import ProjectTag from "./project-tag/ProjectTag";
import { projects } from "@/assets/data/project.data";
import { Tag } from "@/components/ui/tag/Tag";
import { ProjectCard } from "./new-card/ProjectCard";

interface IChip {
  [key: string]: number;
}

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const [active, setActive] = useState("All");
  const [chips, setChips] = useState<IChip>({});
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Get all unique tags and their count
    const tags: string[] = projects.map((item) => item.stack).flat();
    const tagsCount = tags.reduce(
      (tagsCount, tag) => {
        tagsCount[tag] = (tagsCount[tag] || 0) + 1;
        return tagsCount;
      },
      {} as Record<string, number>,
    );

    setChips(tagsCount);
  }, []);

  function handleTagClick(key: keyof IChip) {
    setActive(key as string);
  }
  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => {
      setVisible(true);
    }, 600);

    return () => clearTimeout(timer);
  }, [active]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid grid-cols-8 w-[1280px] mx-auto gap-4">
        <Tag
          active={active}
          tag="All"
          key={"All"}
          handleTagClick={handleTagClick}
          value={projects.length}
        />
        {Object.keys(chips).map((key: keyof IChip, index: number) => {
          return (
            <Tag
              active={active}
              key={key}
              tag={String(key)}
              value={chips[key]}
              handleTagClick={handleTagClick}
            />
          );
        })}
      </div>
      <AnimatePresence>
        {visible && (
          <motion.div
            className="grid grid-cols-3 gap-y-5 xl:w-[1280px] mx-auto py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0 }}
          >
            {projects
              .filter(
                (project) => active === "All" || project.stack.includes(active),
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
        )}{" "}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
