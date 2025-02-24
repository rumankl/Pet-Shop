import React from 'react'
// import TopProducts from "./TopProducts"
import TopPetClothing from "./TopPetClothing";
import DisplayImage from "../../Home/DisplayImage";
import PetFoodies from "../../Home/PetFoodies";
import Advertisement from './Advertisement';
import Secure from './Secure';

// import Popup from "../../Home/Popup";

const Products = () => {

  return (
    <div>
      {/* <Popup /> */}
      <DisplayImage />
      <TopPetClothing />
      <PetFoodies />
      <Advertisement />
      <Secure />



      {/* <TopProducts /> */}






    </div>
  )
}
export default Products