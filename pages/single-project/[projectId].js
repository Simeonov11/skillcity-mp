import Bio from "@/components/home/bio";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function SingleProject () {
    const router = useRouter();
    const [SingleProject, setSingleProject] = useState(null);

    const { projectId } = router.query;
    
    useEffect(() => {
        if (!projectId) return;

        getSingleProject(projectId);
    },[projectId]);

    const getSingleProject = async (id) => {
        const response = await fetch(`/api/project-by-id?id=${id}`);
        const data = await response.json();
        setSingleProject(data);
        console.log("data: ", SingleProject);
    }

    if (!SingleProject) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="w-full">
            <div>{SingleProject.name}</div>
            <div>{SingleProject.url}</div>
            <div>{SingleProject.likes}</div>


            <Footer href='/projects' title='Projects'/>
        </div>
        
    )
}