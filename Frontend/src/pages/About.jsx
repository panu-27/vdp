import AboutOrganizationSection from "../components/aboutComponents/AboutOrganizationSection";
import FounderSection from "../components/aboutComponents/FounderSection";
import MilestonesSection from "../components/aboutComponents/MilestoneSection";
import VisionMissionSection from "../components/aboutComponents/VisionMissionSection";
import HeroSlider from "../components/HeroSlider";

const About = () => {
  return (
    <>
    <HeroSlider/>
    <FounderSection/>
     <AboutOrganizationSection/>
    <VisionMissionSection/>
    <MilestonesSection/>
    </>
  );
};

export default About;
