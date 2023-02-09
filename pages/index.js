import Header from "@/components/shared/header"
import Bio from "@/components/home/bio"
import Skills from "@/components/home/skills"
import Content from "@/components/shared/header/content"
import Footer from "@/components/shared/footer/footer"

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

      <Content>
        <div className="w-full flex flex-col">
          <Skills />
        </div>
      </Content>

      <Footer 
        href="/projects"
        title="Projects"
      />
      
    </div>
  )
}
