import React from 'react';
import { Card, CardBody, CardFooter, Typography, Avatar } from '@material-tailwind/react';


const staffMembers = [
  {
    name: 'Jee mee',
    role: 'Store Manager',
    bio: 'With over 15 years of experience in the pet care industry, John is passionate about ensuring the well-being of all animals. When not at the shop, you\'ll find John volunteering at local animal shelters and spending time with their three dogs, Max, Bella, and Luna.',
    photo: 'url_to_john_photo'
  },
  {
    name: 'Jane Smith',
    role: 'Veterinary Specialist',
    bio: 'Jane brings extensive veterinary knowledge to our team, having worked in both clinic and retail environments. Their gentle approach and expert care make every pet\'s visit comfortable and reassuring. In their free time, Jane enjoys hiking with their Labrador, Daisy.',
    photo: 'url_to_jane_photo'
  },
  {
    name: 'Alice Brown',
    role: 'Groomer',
    bio: 'Known for their patience and skill, Alice is our grooming expert. They have a knack for calming even the most anxious pets, turning each grooming session into a positive experience. Outside of work, Alice loves gardening and playing with their cats, Whiskers and Mittens.',
    photo: 'url_to_alice_photo'
  },
  {
    name: 'Bob Green',
    role: 'Sales Associate',
    bio: 'Bob is always ready to assist customers with a friendly smile and knowledgeable advice. They have a particular interest in pet nutrition and are always up-to-date with the latest products. Bob shares their home with a playful parrot named Kiwi.',
    photo: 'url_to_bob_photo'
  },
  {
    name: 'Bob Green',
    role: 'Sales Associate',
    bio: 'Bob is always ready to assist customers with a friendly smile and knowledgeable advice. They have a particular interest in pet nutrition and are always up-to-date with the latest products. Bob shares their home with a playful parrot named Kiwi.',
    photo: 'url_to_bob_photo'
  },
  {
    name: 'Bob Green',
    role: 'Sales Associate',
    bio: 'Bob is always ready to assist customers with a friendly smile and knowledgeable advice. They have a particular interest in pet nutrition and are always up-to-date with the latest products. Bob shares their home with a playful parrot named Kiwi.',
    photo: 'url_to_bob_photo'
  }
];

const StaffProfile = ({ name, role, bio, photo }) => (

  <Card className="max-w-sm mx-auto mt-6 ">
    <CardBody>
      <Avatar src={photo} alt={`${name}'s photo`} size="lg" className="mb-4 mx-auto" />
      <Typography variant="h5" className="mb-2 text-center">{name}</Typography>
      <Typography className="mb-2 text-center"><strong>Role:</strong> {role}</Typography>
      <Typography>{bio}</Typography>
    </CardBody>
    <CardFooter className="pt-0">
      {/* Optional footer content */}
    </CardFooter>
  </Card>
);

const StaffMembers = () => (
  <div className="">
    <Typography variant="h2" className="text-center mt-8">Meet Our Team 🐾</Typography>
    <div className="flex flex-wrap justify-center">
      {staffMembers.map((member, index) => (
        <StaffProfile
          key={index}
          name={member.name}
          role={member.role}
          bio={member.bio}
          photo={member.photo}
        />
      ))}
    </div>
  </div>
);

export default StaffMembers;
