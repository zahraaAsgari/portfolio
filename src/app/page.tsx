import { About, Contact, Home ,Projects, Skills,Footer} from "@/components";




export default function page() {
  return (
    <main className="flex-center overflow-hidden px-4 flex-col max-w-[70rem] mx-auto">
    
   <Home/>
   <About/>
   <Projects/>
   <Skills/>
   <Contact/>
   <Footer/>
    </main>
  )
}
