import { Link } from "react-router-dom";
import EventGallery from "../components/event/EventGallary";
import EventHero from "../components/event/EventHero";
import EventStats from "../components/event/EventStats";
import Testimonials from "../components/Testimonials";


const EventPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      {/* 1. Hero */}
      <EventHero/>

      {/* 2. Stats */}
      {/* <div className="-mt-16 relative z-20">
        <EventStats/>
      </div> */}

      {/* 3. Gallery */}
      <section className="py-15 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-16 px-2">
  <h2 className="
    text-[11px] sm:text-sm
    font-semibold sm:font-bold
    tracking-[0.25em] sm:tracking-[0.3em]
    uppercase
    text-orange-600
    mb-3 sm:mb-4
  ">
    Experience the Energy
  </h2>

  <h3 className="
    text-2xl sm:text-4xl md:text-6xl
    font-extrabold sm:font-black
    italic uppercase
    text-slate-900
    leading-tight sm:leading-none
  ">
    Past Event Highlights
  </h3>
</div>


        <EventGallery/>
      </section>

      {/* 4. Testimonials */}
      <Testimonials/>

      {/* 5. CTA */}
      <section className="bg-black py-12 sm:py-16 md:py-20 text-white text-center px-6">
  <h2
    className="
      text-xl sm:text-2xl md:text-5xl
      font-bold italic
      mb-6 sm:mb-8
    "
  >
    Ready To Take The Next Step?
  </h2>

  <Link
    to="/contact"
    className="
      inline-block
      bg-yellow-600 hover:bg-yellow-700
      text-white
      px-6 py-3
      sm:px-8 sm:py-4
      md:px-12 md:py-5
      rounded-full
      font-black
      text-sm sm:text-base md:text-xl
      transition-all
      hover:scale-105
      shadow-orange-900/20 shadow-2xl
    "
  >
    Get In Touch Now
  </Link>
</section>

    </div>
  );
};

export default EventPage;
