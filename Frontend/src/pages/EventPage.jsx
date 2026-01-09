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
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-orange-600 mb-4">
            Experience the Energy
          </h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase text-slate-900">
            Past Event Highlights
          </h3>
        </div>

        <EventGallery/>
      </section>

      {/* 4. Testimonials */}
      <Testimonials/>

      {/* 5. CTA */}
      <section className="bg-black py-20 text-white text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">
          Ready To Take The Next Step?
        </h2>
        <Link to="/contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-12 py-5 rounded-full font-black text-xl transition-all hover:scale-105 shadow-orange-900/20 shadow-2xl">
          Get In Touch Now
        </Link>
      </section>
    </div>
  );
};

export default EventPage;
