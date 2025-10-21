// import { ThemeToggle } from '@/shared/widgets/themeToggle'

import Footer from './(components)/Footer'
import Navbar from './(components)/Navbar'
import MyVideo from './(components)/MyVideo'
import Section1 from './(components)/Section1'
import Section2 from './(components)/Section2'
import Section3 from './(components)/Section3'
import Section4 from './(components)/Section4'
import Section5 from './(components)/Section5'
import StatsAndProjects from './(components)/StatsAndProjects'
import CurriculumAndRegister from './(components)/CurriculumAndRegister'

export default function Home() {
   return (
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
         {/* Navbar */}
         <Navbar />

         <MyVideo />

         <Section1 />

         <StatsAndProjects />

         {/* Courses Section */}
         {/* <Section2 /> */}

         {/* Articles Section */}
         {/* <Section3 /> */}
         <CurriculumAndRegister />

         {/* SuitableSection */}
         <Section5 />
         <Section4 />

         <Footer />
      </div>
   )
}
