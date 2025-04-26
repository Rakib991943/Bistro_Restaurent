import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const InfoCards = () => {
  const infoData = [
    {
      icon: <FaPhoneAlt className="text-white text-2xl" />,
      title: "PHONE",
      details: "+38 (012) 34 56 789",
    },
    {
      icon: <FaMapMarkerAlt className="text-white text-2xl" />,
      title: "ADDRESS",
      details: "+38 (012) 34 56 789",
    },
    {
      icon: <FaClock className="text-white text-2xl" />,
      title: "WORKING HOURS",
      details: (
        <>
          <p>Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center gap-6 flex-wrap mt-6 mb-6">
      {infoData.map((item, index) => (
        <div key={index} className="w-64 border rounded-lg shadow-md">
          <div className="bg-yellow-700 p-4 flex justify-center">
            {item.icon}
          </div>
          <div className="bg-gray-100 p-6 text-center w-64 h-32 ">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
