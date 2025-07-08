import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ExperienceSection from "./sections/ExperienceSection";
import Grid from "./components/Grid";
import Progects from "./components/Projects"
import Testimonials from "./sections/Testimonials";
import Approach from "./components/Approach";
import Footer from "./sections/Footer";
// import Contact from "./sections/Contact";

const App = () => (
<>
<NavBar />
<Hero />
<Grid />
<Progects />
<Testimonials />
<LogoShowcase />
<ExperienceSection />
<Approach />
<Footer />
{/* <Contact /> */}
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