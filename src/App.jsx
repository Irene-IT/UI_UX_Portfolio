import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ExperienceSection from "./sections/ExperienceSection";
import Grid from "./components/Grid";
import Testimonials from "./sections/Testimonials";


const App = () => (
<>
<NavBar />
<Hero />
<Grid />

<Testimonials />
<LogoShowcase />
<ExperienceSection />

</>
)
 

export default App;


{/* <div className="flex w-full">
  <div className="fixed inset-0 flex justify-center sm:px-8">
    <div className="flex w-full max-w-7xl lg:px-8">
      <div className="w-full ring-1 " />
    </div>
  </div>
</div> */}