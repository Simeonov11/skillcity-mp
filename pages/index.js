import Header from "@/components/header"
import Bio from "@/components/home/bio"
import Skills from "@/components/home/skills"

export default function Home() {
  return (
    <div className="w-full  bg-red-100 w-full max-w-6xl mx-auto">
      <Header 
        name="Home"
      />
      <Bio  
        imgUrl="/assets/profile.jpg"
        title="Plamen"
        subtitle="I am Junior Software Engineer"
      />

      <Skills />

      <div>
        <a href="/projects">Go to Projects page</a>
      </div>
      
    </div>
  )
}
