const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col h-full">
      <h2 className="text-xl font-bold mb-1">{hotel.name}</h2>
      <p className="text-gray-600">{hotel.location}</p>
      <p className="mt-2 text-sm">{hotel.description}</p>
      <p className="mt-2 font-medium">Rating: {hotel.rating}⭐</p>
      <div className="mt-2 text-sm">
        <p><strong>Deluxe:</strong> ₹{hotel.pricePerNight?.Deluxe}</p>
        <p><strong>Executive:</strong> ₹{hotel.pricePerNight?.Executive}</p>
        <p><strong>Suite:</strong> ₹{hotel.pricePerNight?.Suite}</p>
      </div>
      <div className="mt-auto pt-4 flex justify-between">
        <a
          href={hotel.link}
          target="_blank"
          className="text-blue-600 underline text-sm"
          rel="noreferrer"
        >
          Website
        </a>
        <a
          href={hotel.mapsLink}
          target="_blank"
          className="text-blue-600 underline text-sm"
          rel="noreferrer"
        >
          Map
        </a>
      </div>
    </div>
  );
};

export default HotelCard;
