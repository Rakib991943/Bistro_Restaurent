import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import image1 from '../../../assets/home/slide1.jpg'
import image2 from '../../../assets/home/slide2.jpg'
import image3 from '../../../assets/home/slide3.jpg'
import image4 from '../../../assets/home/slide4.jpg'
import image5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle';

const Category = () => {
  return (
    <div className='mt-5 mb-10'>
      <SectionTitle subHeading={"From 6:00 am to 12:00 pm "} heading={"Order Now "}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl uppercase'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl uppercase'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image3} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl uppercase'>pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image4} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl uppercase'>sopus</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image5} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl uppercase'>deserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="" />
          <h3 className='text-white text-center -mt-10 shadow-lg text-4xl luppercase'>salad</h3>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Category;