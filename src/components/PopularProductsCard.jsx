import React from 'react';
import { Link } from 'react-router-dom';
import { star } from '../nike_landing_assets/assets/icons';

const PopularProductsCard = ({ product }) => {
  const {imgURL, name, price, key} = product;
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center">
      <Link to={`/productsSelection?shoe=${key}`} onClick={() => { imgURL, name, price }}>
        <img 
          src={imgURL} 
          alt={name}
          className="w-[280px] h-[280px] transform transition-transform duration-300 hover:scale-110" 
        />
      </Link>

      <div className="mt-3 flex justify-start gap-2.5">
        <img 
          src={star} 
          alt="rating"
          width={24}
          height={24}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>

      <h3 className="mt-4 text-2xl font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 text-xl font-semibold font-montserrat text-coral-red">{price}</p>
    </div>
  ) 
}

export default PopularProductsCard;