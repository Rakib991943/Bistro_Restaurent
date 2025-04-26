import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMusicalNoteSharp } from "react-icons/io5";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Testimonial = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/review')
      .then(res => res.json())
      .then(data => setReview(data))
  }, [])

  return (
    <div>
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>


      <Swiper navigation={true} modules={[Navigation]} className="mySwiper  m-24">
        {
          reviews.map(review => <SwiperSlide className='p-16' key={review._id}>
            <div>
              <div>
                <div className="rating mb-5">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
              </div>
              <p>{review.details}</p>
              <h3 className='text-2xl text-yellow-500 font-bold'>{review.name}</h3>
              <div className='flex justify-center mt-7'>
                <IoMusicalNoteSharp className='text-7xl font-bold'></IoMusicalNoteSharp>
                <IoMusicalNoteSharp className='text-7xl font-bold'></IoMusicalNoteSharp>
              </div>
            </div>
          </SwiperSlide>)
        }

      </Swiper>

    </div>
  );
};

export default Testimonial;