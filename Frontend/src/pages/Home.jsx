import AboutOrganizationSection from "../components/aboutComponents/AboutOrganizationSection";
import HeroSlider from "../components/HeroSlider";
import StatsBar from "../components/StatsBar";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutOrganizationSection/>
    </>
  );
};

export default Home;
