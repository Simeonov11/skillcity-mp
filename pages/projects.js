import ProjectGrid from "../components/project-grid";

export default function ProjectsPage() {
    return (
        <div className="bg-green-100 w-full max-w-6xl mx-auto">
            <p>
                Projects
            </p>

            <ProjectGrid />
            
            <div>
                <a href="/">Go to home page</a>
            </div>
        </div>
    )
}