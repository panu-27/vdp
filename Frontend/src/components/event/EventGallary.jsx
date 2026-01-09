import { Link } from "react-router-dom";

const EventGallery = () => {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      location: "Kolkata",
      title: "Real Estate Game Changer Event",
    },
    {
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      location: "Delhi",
      title: "Train the Trainer – Real Estate Event",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      location: "Mumbai",
      title: "Business Growth Masterclass",
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      location: "Bengaluru",
      title: "Entrepreneur Networking Summit",
    },
    {
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      location: "Kolkata",
      title: "Real Estate Game Changer Event",
    },
    {
      image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
      location: "Delhi",
      title: "Train the Trainer – Real Estate Event",
    },
    {
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      location: "Mumbai",
      title: "Business Growth Masterclass",
    },
    {
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
      location: "Bengaluru",
      title: "Entrepreneur Networking Summit",
    },
    
    // ... rest of your items
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {events.map((event, index) => {
        // Create a URL-friendly ID from location and title
        const eventId = `${event.location}-${event.title}`
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        return (
          <Link
            key={index}
            to={`/event/${eventId}`}
            className="relative group overflow-hidden rounded-3xl cursor-pointer shadow-lg block"
          >
            {/* Image */}
            <img
              src={event.image}
              alt={event.location}
              className="w-full h-[220px] md:h-[320px] object-cover transform group-hover:scale-105 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              {/* Location */}
              <h3 className="text-xl md:text-3xl font-extrabold leading-tight">
                {event.location}
              </h3>

              {/* Event Title */}
              <p className="text-xs md:text-sm text-gray-200 mt-1">
                {event.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default EventGallery;