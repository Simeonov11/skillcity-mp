import { useEffect, useState } from "react";
import ProjectItem from "./project-item";
//import { projects } from "./projects";

export default function ProjectGrid() {
    const [projectsApi, setProjectsApi] = useState([]);
    const [name, setName] = useState("");
    const [url, setUrl] = useState("");
    const [imgUrl, setImgUrl] = useState("");

    useEffect(() => {
        getProjectsApi();
    },[]);

    const getProjectsApi = async () => {
        const data = await fetch("/api/projects");
        const response = await data.json();
        setProjectsApi(response);
    }


    return(
        <div className="w-full flex flex-col">
                <div className="grid grid-cols-3 w-full bg-red-100">
                    {projectsApi.map((project) => {
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