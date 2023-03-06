import Bio from "@/components/home/bio";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header";
import Content from "@/components/shared/header/content";
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
    }


    if (!SingleProject) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="bg-green-100 w-full max-w-6xl mx-auto">
            <Header name={SingleProject.name} />
            <Content>
                <div className="bg-green-100 m-5">
                    <div>{SingleProject.url}</div>
                    <div>{SingleProject.likes} likes</div>
                    <div>
                        <img src={SingleProject.img_url}/>
                    </div>
                </div>  
            </Content>
            <Footer href='/projects' title='Projects'/>
        </div>
        
    )
}