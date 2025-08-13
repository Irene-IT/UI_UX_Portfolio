// This is the root component in the React application.
import { ActiveSectionProvider } from "@/hooks/ActiveSectionContext";

import NavBar from "../NavBar";
import Hero from "../Hero";
import About from "../About";
import RecentProjects from "../RecentProjects";
import Testimonials from "../Testimonials";
import LogoMarquee from "../LogoMarquee";
import ExperienceSection from "../ExperienceSection";
import Approach from "../Approach";
import Footer from "../Footer";

const App = () => (
      <ActiveSectionProvider>
    <header>
      <NavBar />
      <Hero />
    </header>
    <main>
      <About />
      <RecentProjects />
      <Testimonials />
      <LogoMarquee />
      <ExperienceSection />
      <Approach />
    </main>
    <footer>
      <Footer />
    </footer>
      </ActiveSectionProvider>
);

export default App;
