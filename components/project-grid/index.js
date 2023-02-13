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
                                idApi={project.id}
                                name={project.name}
                                url={project.url}
                                imgUrl={project.img_url} // in the DB it is img_url, if you take if from project-grid/projects it change it to imgUrl
                                likesApi={project.likes}
                                dislikesApi={project.dislikes}
                            ></ProjectItem>
                        )
                    })}
                                        
                </div>
                
            
            </div>
    )
}