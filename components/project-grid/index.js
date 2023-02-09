import ProjectItem from "./project-item";
import { projects } from "./projects";

export default function ProjectGrid() {
    return(
        <div className="w-full flex flex-col">
                <div className="grid grid-cols-3 w-full bg-red-100">
                    {projects.map((project) => {
                        return (
                            <ProjectItem
                                name={project.name}
                                url={project.url}
                                imgUrl={project.imgUrl}
                            ></ProjectItem>
                        )
                    })}
                                        
                </div>
                
            
            </div>
    )
}