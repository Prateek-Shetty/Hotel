const HotelCard = ({ hotel }) => (
  <div className="border p-4 shadow rounded-lg">
    <h2 className="text-lg font-bold">{hotel.name}</h2>
    <p>{hotel.location}</p>
    <p className="text-sm text-gray-500">{hotel.description}</p>
  </div>
);
export default HotelCard;
