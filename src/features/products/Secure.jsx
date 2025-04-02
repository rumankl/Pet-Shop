import React from 'react';
const Secure = () => {
  const head = [
    {
      image: "https://icons.iconarchive.com/icons/iconsmind/outline/128/Full-Cart-icon.png",
      title: 'Free Delivery',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      image: "https://icons.iconarchive.com/icons/iconoir-team/iconoir/128/secure-window-icon.png",
      title: '100% Secure Payment',
      description: 'Your transactions are fully protected.'
    },
    {
      image: "https://icons.iconarchive.com/icons/icons8/windows-8/128/Ecommerce-Discount-icon.png",
      title: 'Daily Offer',
      description: 'Enjoy daily discounts on your favorite items.'
    },
    {
      image: "https://icons.iconarchive.com/icons/pictogrammers/material/128/quality-high-icon.png",
      title: 'Quality Guarantee',
      description: 'We ensure top-quality products for you.'
    }
  ];
  return (
    <div className='flex flex-cols justify-around items-center gap-6   '>

      {head.map((item, i) => (
        <div key={i} className="flex flex-col items-center justify-center text-center p-4">
          <img className=" w-20 h-20 object-cover rounded-full  hover:scale-125 transition-all' size='150" src={item.image} alt={item.title} />
          <h1 className="text-2xl font-bold mb-2">{item.title}</h1>
          <p className="text-gray-700 mb-4">{item.description}</p>

        </div>
      ))}
    </div>
  )
}

export default Secure
