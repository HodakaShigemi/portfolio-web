import Image from "next/image";

type projectCardProps = {
  title: string;
  summary: string;
  description: string;
  image: string;
};

function ProjectCard(props: projectCardProps) {
  return (
    <>
  <div className="relative flex flex-col justify-center items-center h-64 w-full bg-cover bg-center" style={{ backgroundImage: `url(${props.image})` }}>
      <h3 className="text-xl font-bold text-white">{props.title}</h3>
      <p className="text-md text-white">{props.summary}</p>
      <details className="mt-2">
        <summary className="text-sm text-white cursor-pointer">More Details</summary>
        <p className="text-md text-white mt-2">{props.description}</p>
      </details>
  </div>
  </>
  );
}

export default function Projects() {
  const props = {
    title: "Project Name",
    summary: "Summary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/sample-project.svg",
  };
  return (
    <section id="projects" className="bg-gray-100 p-8">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
    <ProjectCard {...props} />
    </section>
  );
};
