import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import LogoShowcase from "./sections/LogoShowcase";
import ExperienceSection from "./sections/ExperienceSection";
import Grid from "./components/Grid";
import Progects from "./components/Projects";
import Testimonials from "./sections/Testimonials";
import Approach from "./components/Approach";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <header>
      <NavBar />
      <Hero />
    </header>
    <main>
      <Grid />
      <Progects />
      <Testimonials />
      <LogoShowcase />
      <ExperienceSection />
      <Approach />
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default App;
