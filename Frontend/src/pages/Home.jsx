import AboutOrganizationSection from "../components/aboutComponents/AboutOrganizationSection";
import ExceptionalOpportunities from "../components/ExceptionalOpportunities";
import HeroSlider from "../components/HeroSlider";
import StatsBar from "../components/StatsBar";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutOrganizationSection/>
      <ExceptionalOpportunities/>
      <Testimonials/>
    </>
  );
};

export default Home;
