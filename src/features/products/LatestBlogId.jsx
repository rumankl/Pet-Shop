import React, { useEffect, useState } from 'react';
import { Typography, } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';

const LatestBlogId = () => {
  const [blog, setBlog] = useState(null);
  const { id } = useParams();

  const getBlogById = async () => {
    try {
      const response = await fetch(`https://676125ef6be7889dc35fea3b.mockapi.io/v1/latest-blog/${id}`);
      const result = await response.json();
      setBlog(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBlogById();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h2" className="text-center mt-8">
        Blog Details
      </Typography>

      <div className="relative flex flex-col md:flex-row w-full my-6 bg-white shadow-sm border border-slate-200 rounded-lg ">
        <div className="relative p-2.5 md:w-2/5 shrink-0 overflow-hidden ">
          <img src={blog.avatar} alt={blog.name} className='h-full w-full rounded-md md:rounded-lg object-cover' />
        </div>

        <div className="p-6">
          <Typography variant="h5" className="mb-2 text-slate-800 text-xl font-semibold">
            {blog.name}
          </Typography>



          <div className='mb-8 text-slate-600 leading-normal font-light'>
            <Typography>{blog.detail}</Typography>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LatestBlogId;
