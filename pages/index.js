import Header from "@/components/shared/header"
import Bio from "@/components/home/bio"
import Skills from "@/components/home/skills"

export default function Home() {
  return (
    <div className="w-full bg-blue-100  w-full max-w-6xl mx-auto">
      <Header 
        name="Home"
      />
      <Bio  
        imgUrl="/assets/profile.jpg"
        title="Plamen"
        subtitle="I am Junior Software Engineer"
      />

      <Skills />

      <div className="bg-red-200">
        <a href="/projects">Go to Projects page</a>
      </div>
      
    </div>
  )
}
