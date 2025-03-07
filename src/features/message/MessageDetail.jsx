import React from 'react';
import { useParams } from 'react-router';
import { useGetMessageDetailQuery } from './messageApi'; 
const MessageDetail = () => {
  const { id } = useParams(); 
  const { data, isLoading, error } = useGetMessageDetailQuery({ id }); 

 
  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  const { name, email, description } = data;

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
        <div className =" mb-4">
          
        <h1>
          {`Name: ${name.charAt(0).toUpperCase() + name.slice(1)}`
        }
        </h1>
          <a href={`mailto:${email}`} className="text-purple-700 hover:underline">
            <h2 className="text-lg font-medium">
              {`Email: ${email}`}
            </h2>
          </a>
        </div>

         <div className="mb-4 text-center"> 
           <p>{description}</p>
           </div> 
        </div>
      </div>
    </div>
  );
};

export default MessageDetail;




// import React from 'react'
// import { useParams } from 'react-router'
// import { useGetMessageDetailQuery } from './messageApi'


// const MessageDetail = () => {
//   const { id } = useParams();
//   const { data, isLoading, error } = useGetMessageDetailQuery({
//     id
//   });

//   console.log(data);

//   if (isLoading) {
//     return <h1>Loading....</h1>
//   }


//   return (
//     <div className='p-4'>



//       <div className="">
//         <div >
//             <div className="grid grid-cols-2">
//               <div>

//               </div>
//               <div>
//                 {data?.name}
//                 {data?.email}
//                 {data?.description}
//               </div>

//             </div>
       

//         </div>

//       </div>


//     </div>
//   )
// }

// export default MessageDetail