import { Avatar, Button, Card, CardBody, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LatestBlogDetail = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);


  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch('https://676125ef6be7889dc35fea3b.mockapi.io/v1/latest-blog');
        const result = await res.json();
        result.sort((a, b) => b.id - a.id);


        setData(result);
      } catch (error) {
        console.error(error);
      }

    };
    getData();
  }, []);
  return (
    <div>
      <Typography variant="h2" className="text-center mt-8">
        All Blogs
      </Typography>

      <div className="flex flex-wrap justify-center">
        {data.map((cata) => (
          <Card key={cata.id} className="max-w-sm mx-auto mt-6">
            <CardBody>
              <img src={cata.avatar} alt={cata.name} className="mb-4 mx-auto" color="green" />
              <div className="ml-4">
                <Typography variant="h5" className="mb-2 text-center">
                  {cata.name}
                </Typography>
                <Typography>{cata.detail.slice(0, 100)}...</Typography>
                <Button onClick={() => nav(`/latest-blog/${cata.id}`)}>Read More</Button>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">

        <Button onClick={() => nav(-1)} color="green">Back</Button>

      </div>
    </div>
  )
}

export default LatestBlogDetail
