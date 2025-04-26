import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import fetureImg from '../../../assets/home/featured.jpg'
import fetureImg1 from '../../../assets/home/featured.jpg'
import './Feture.css'
const Feature = () => {
  //  <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bistroBoss})` }}></div>
  return (
    <div className='feature-item text-white mt-8 mb-7  bg-fixed'>

      <SectionTitle
        subHeading="Check it out"
        heading="Feture item "

      ></SectionTitle>
      <div className='md:flex justify-center items-center py-16 px-24 bg-slate-500 bg-opacity-40'>
        <div>
          <img src={fetureImg} alt="" />
        </div>
        <div className='text-left md:ml-6 '>
          <p className='text-xl' >Aug 20,2029</p>
          <h2 className='uppercase text-2xl '>Where can i get</h2>
          <p className=' font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse vitae magni cumque nostrum alias perferendis minima amet assumenda repellendus. A praesentium mollitia earum ab neque. A perspiciatis, possimus adipisci laudantium est nemo blanditiis? In, voluptas? Aperiam, minima, quos deserunt totam soluta et aut unde nostrum consequatur animi officia impedit! Perferendis.</p>
          <button className='btn btn-outline mt-5 border-0 border-b-4'>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;