export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
};

export type ExperienceItemProps = {
  role: string;
  org: string;
  time: string;
  bullets: string[];
};

export type SkillProps = {
  name: string;
  level: number;
};
