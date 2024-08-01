"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/components/ui/tab-button/TabButton";

interface ITab {
  title: string;
  id: IdEnum;
  content: React.ReactNode;
}

enum IdEnum {
  SKILS = "skills",
  EDUCATION = "education",
  CERTIFICATIONS = "certifications",
}

const skills = [
  "Next js",
  "Nest js",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "JavaScript",
  "React",
];

const TAB_DATA: ITab[] = [
  {
    title: "Skills",
    id: IdEnum.SKILS,
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    ),
  },
  {
    title: "Education",
    id: IdEnum.EDUCATION,
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: IdEnum.CERTIFICATIONS,
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<IdEnum>(IdEnum.SKILS);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: IdEnum) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={700}
          height={500}
          alt="about-image"
          className="rounded-lg "
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-center md:justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange(IdEnum.SKILS)}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(IdEnum.EDUCATION)}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(IdEnum.CERTIFICATIONS)}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 pl-2">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
