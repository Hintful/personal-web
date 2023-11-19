import ProjectItem from "./ProjectItem";

const Page = () => {
    const projects = [
        {
            name: "aram.tools",
            tags: ["React", "Node.js", "Docker"],
            link: "https://github.com/Hintful/aram.tools",
            description: "A full-stack web application that analyzes and visualizes users' performance for a popular online game, League of Legends."
        }
    ]

    return ( 
        <div className="flex-col mt-36 text-white space-y-12">
            <span className="text-white text-2xl">Projects</span>
            <div className="flex-col">
                {
                    projects.map(project => (
                        <ProjectItem item={project} />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Page;