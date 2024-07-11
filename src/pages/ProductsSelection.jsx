import React, { useEffect, useState } from 'react';
import { Nav } from '../components';
import ProductsSelectionCard from '../components/ProductsSelectionCard';
import { productSelection } from '../constants';
import { Footer } from '../sections';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductsSelection = () => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);

  const query = useQuery();
  const shoe = query.get('shoe');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    //  Find the shoe using the shoeId parameter
    const tempShoe = productSelection.find(product => product.key === shoe);
    if (tempShoe) {
      setSelectedProduct(tempShoe); //  Set the found shoe as the selected product
      changeSimilarProduct(shoe) //  Filter out the selected product from the list to display similar products
    }
  }, [shoe]);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    changeSimilarProduct(product.key);
  };

  const changeSimilarProduct = (key) => {
    const tempSimilarProducts = productSelection.filter(product => product.key !== key);
    setSimilarProducts(tempSimilarProducts);
  }


  return (
    <>
      <Nav />

      <section
        id="home"
        className="flex justify-center items-center flex-col gap-10 padding max-sm:py-24 padding-b"
      >

        <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center flex max-lg:mt-10  lg:flex-col lg:justify-between items-center">
        { selectedProduct?.key && <ProductsSelectionCard
            imgURL={selectedProduct?.imgURL}
            name={selectedProduct?.name}
            price={selectedProduct?.price}
            description={selectedProduct?.description}
            ulList={selectedProduct?.ulList}
          />}
        </div>

         <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg pt-12">
          <span className="text-coral-red">Similar </span>Products
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {similarProducts?.map((selection) => (
            <div
              key={selection.name}
              className="cursor-pointer flex flex-col items-center mb-8"
              onClick={() => {handleProductClick(selection); scrollToTop();}}
            >
              <img
                src={selection.imgURL}
                alt={selection.name}
                className="w-[280px] h-[280px] mx-4"
              />
              <h3 className="mt-4 text-2xl font-semibold font-palanquin">{selection?.name}</h3>
              <p className="mt-2 text-xl font-semibold font-montserrat text-coral-red">{selection?.price}</p>
            </div>
          ))}
        </div>

       

    
      </section>

      <footer className='flex justify-end items-center bg-black padding-x padding-t pb-8'>
        <Footer />
      </footer>
    </>
  );
};

export default ProductsSelection;
