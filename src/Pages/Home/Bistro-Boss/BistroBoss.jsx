import React from 'react';
import bistroBoss from '../../../assets/home/chef-service.jpg'
const BistroBoss = () => {
  return (
    <div className="relative w-full h-[600px] mt-6 mb-5 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bistroBoss})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content Box */}
      <div className="relative bg-white p-10 max-w-3xl text-center shadow-xl rounded-lg">
        <h1 className="text-3xl font-semibold mb-4">BISTRO BOSS</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborom deserunt ratione dolor officiis praesentium!
          Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroBoss;