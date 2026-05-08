export type Program = {
  id: number;
  title: string;
  ageGroup: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  color: string;
};

export type Props = {
  program: Program;
  reverse?: boolean;
};