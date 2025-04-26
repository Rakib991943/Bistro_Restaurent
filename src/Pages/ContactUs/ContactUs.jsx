import React from 'react';
import Cover from '../../Share/Cover/Cover';
import contactimg from '../../assets/contact/banner.jpg'
import SectionTitle from '../../Components/SectionTitle';
import InfoCards from './InfoCards';
import Form from './Form';
const ContactUs = () => {
  return (
    <div>
      <Cover
        img={contactimg}
        title="Contact Us"
      ></Cover>
      <SectionTitle
        subHeading="Visit us"
        heading="our location"
      ></SectionTitle>
      <InfoCards></InfoCards>
      <Form></Form>
    </div>
  );
};

export default ContactUs;