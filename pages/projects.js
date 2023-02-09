import Header from "@/components/shared/header";
import ProjectGrid from "../components/project-grid";
import Footer from "@/components/shared/footer/footer";

export default function ProjectsPage() {
    return (
        <div className="bg-green-100 w-full max-w-6xl mx-auto">
            <Header
                name="Projects"
            />

            <ProjectGrid />
            
            <Footer 
                href="/"
                title="Home"
            />
        </div>
    )
}