import { programs } from "@/data/programContent";
import ProgramContent from "./ProgramContent";

export default function ProgramPageContent() {
  return (
    <section className="py-20">
      {programs.map((program, index) => (
        <ProgramContent
          key={program.id}
          program={program}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
