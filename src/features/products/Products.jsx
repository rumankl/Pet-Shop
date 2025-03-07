import React from 'react'
// import TopProducts from "./TopProducts"
import TopPetClothing from "./TopPetClothing";
import DisplayImage from "../../Home/DisplayImage";
import PetFoodies from "../../Home/PetFoodies";
import Advertisement from './Advertisement';
import Secure from './Secure';
import LatestBlog from './LatestBlog';

// import Popup from "../../Home/Popup";

const Products = () => {

  return (
    <div>
      {/* <Popup /> */}
      <DisplayImage />
      <TopPetClothing />
      <PetFoodies />
      <Advertisement />
      <LatestBlog />
      <Secure />



      {/* <TopProducts /> */}






    </div>
  )
}
export default Products