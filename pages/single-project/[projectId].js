import Bio from "@/components/home/bio";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header";
import Content from "@/components/shared/header/content";
import Link from "next/link";
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
                <div className="w-full flex flex-col  py-4 space-y-4 md:flex-row md:space-x-4 md:p-3">
                    <div className="mx-auto">
                        <img src={SingleProject.img_url}/>
                    </div>
                    <div className="w-full text-center md:text-left">
                        <Link href={SingleProject.url}>{SingleProject.url}</Link>
                        <div>{SingleProject.likes} likes | {SingleProject.dislikes} dislikes</div>
                    </div>
                    
                </div>  
            </Content>
            <Footer href='/projects' title='Projects'/>
        </div>
        
    )
}