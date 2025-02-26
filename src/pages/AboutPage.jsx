import React from 'react';
import { Typography, Card, CardBody, CardHeader } from '@material-tailwind/react';
// import StaffMembers from './StaffMembers';
import MeetTeam from './MeetTeam';

const AboutPage = () => {
  return (
    <div className="p-8 bg-gray-100">
      <Card>
        <CardHeader color="orange" className="text-4xl font-bold text-white border-red-400 border-s-8 pl-1">
          <Typography variant="h1" className="text-4xl font-bold text-white text-center">
            Our Story
          </Typography>
        </CardHeader>
        <CardBody>
          <Typography variant="paragraph" className="pl-6 mt-4">
            Our pet shop was born out of a deep love for animals and a commitment to their well-being. In 2010, our founder, [Name], recognized the need for a local pet store that went beyond just selling products. With a vision of creating a community hub for pet lovers and providing exceptional care and products for furry friends, the journey began. Over the years, we’ve grown from a small corner shop to a well-loved destination for pet owners. Our team of dedicated animal enthusiasts is always on hand to offer expert advice, share stories, and ensure that every pet has access to the best care and products available.
          </Typography>
          <Typography variant="paragraph" className="mt-4">
            <Typography variant="h2" className="text-xl text-black underline-offset-4 underline pl-6">
              Mission Statement:
            </Typography>
            <Typography className='pl-8 pt-4'>
              Our mission is to enrich the lives of pets and their owners by offering:
            </Typography>
            <ul className="list-disc pl-16 mt-2">
              <li>Quality Products: Providing a wide range of high-quality pet foods, toys, and accessories.</li>
              <li>Exceptional Care: Ensuring the health and happiness of pets through our grooming and veterinary services.</li>
              <li>Education and Support: Empowering pet owners with knowledge and resources to foster happy and healthy relationships with their pets.</li>
              <li>Community Engagement: Creating a welcoming space where pet owners can connect, share, and celebrate their love for animals.</li>
            </ul>
            <Typography variant="paragraph" className="block mt-4">
              🐾 At our pet shop, every tail wag, purr, and chirp fuels our passion. Together, let's create a better world for our beloved pets. 🐾
            </Typography>
          </Typography>
        </CardBody>
      </Card>
      {/* <StaffMembers /> */}
      <MeetTeam />
      <Card className="mt-20">
        <CardHeader color="orange" className="text-4xl font-bold text-white border-red-400 border-s-8 pl-1">
          <Typography variant="h2" className="text-4xl font-bold text-white text-center">
            Our Values
          </Typography>
        </CardHeader>
        <CardBody className="pl-4 mb-6 mt">
          <Typography variant="paragraph">
            Our pet shop is built on a foundation of love, respect, and dedication to the well-being of animals and their owners. We are committed to:
            <ul className="list-disc pl-16 mt-2">
              <li>Quality and Care: Providing top-notch products and exceptional services to ensure the health and happiness of pets.</li>
              <li>Customer-Centric Approach: Putting our customers at the heart of everything we do and continuously striving to exceed their expectations.</li>
              <li>Community Engagement: Fostering a sense of community among pet lovers and creating a welcoming space for all.</li>
              <li>Education and Support: Empowering pet owners with the knowledge and resources they need to build strong and healthy relationships with their pets.</li>
            </ul>
            <Typography variant="paragraph" className="block mt-4 bg-gray-100 p-2">
              Together, we are dedicated to creating a better world for our beloved pets and their families.
            </Typography>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}

export default AboutPage;
