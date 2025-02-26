import React, { useEffect, useState } from 'react';
import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';

const MeetTeam = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch('https://676125ef6be7889dc35fea3b.mockapi.io/v1/pet');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <div>

      <Typography variant="h2" className="text-center mt-8">
        Meet Our Team 🐾
      </Typography>

      <div className="flex flex-wrap justify-center">
        {data.map((cata) => (
          <Card key={cata.id} className="max-w-sm mx-auto mt-6 ">
            <CardBody>
              <Avatar src={cata.avatar} alt={cata.name} className="mb-4 mx-auto rounded-xl border-4 border-orange-400  border-b-deep-purple-50 border-b-8  flex justify-center items-center border-r-8 " size='xl' withBorder={true}
                color="green" />
              <div className="ml-4">
                <Typography variant="h5" className="mb-2 text-center">
                  {cata.name}
                </Typography>
                <Typography className="mb-2 text-center">
                  <strong>Role:</strong>{cata.role}
                </Typography>
                <Typography >
                  {cata.bio}
                </Typography>
              </div>

            </CardBody>
          </Card>
        ))}

      </div>
    </div>
  );
};

export default MeetTeam;
