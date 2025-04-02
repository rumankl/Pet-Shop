import React, { useEffect, useState } from 'react';
import { Card, CardBody, Typography, Avatar, Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const LatestBlog = () => {
  const [data, setData] = useState([]);
  const nav = useNavigate();
  const getData = async () => {
    try {
      const response = await fetch('https://676125ef6be7889dc35fea3b.mockapi.io/v1/latest-blog');
      const result = await response.json();
      result.sort((a, b) => b.id - a.id);


      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  // Function to check if the blog post is within the last 4 days
  const isNewPost = (createdAt) => {
    const postDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - postDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24); // Convert to days

    return daysDifference <= 1;
  };

  return (
    <div className="mb-10">
      <div className=" flex justify-between pl-10 pr-10">
        <Typography variant="h2" className="text-center mt-8 text-red-600">
          Latest Blog
        </Typography>
        {data.length > 4 && (
          <div className="text-center mt-6">
            <Button onClick={() => nav('/latest-blog')} color="red">Show More</Button>
          </div>
        )}
      </div>

      <div className="flex flex-wrap justify-center">
        {data.slice(0, 3).map((cata, index) => (
          <Card key={cata.id} className="max-w-sm mx-auto mt-6">
            <CardBody>
              <img src={cata.avatar} alt={cata.name} className="mb-4 mx-auto" color="green" />
              <div className="ml-4">
                <Typography variant="h5" className="mb-2 text-center">
                  {cata.name}
                  {/* {index === 0 && (
                    <span className="ml-2 text-sm text-white bg-green-500 px-2 py-1 rounded-full">New</span>
                  )} */}
                  {isNewPost(cata.createdAt) && (
                    <span className="ml-2 text-sm text-white bg-green-500 px-2 py-1 rounded-full">New</span>
                  )}
                </Typography>
                <Typography>{cata.detail.slice(0, 100)}...</Typography>
                <Button onClick={() => nav(`/latest-blog/${cata.id}`)}>Read More</Button>
              </div>
            </CardBody>
          </Card>
        ))}

      </div>

    </div>
  );
};

export default LatestBlog;




