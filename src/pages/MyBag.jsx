import React, { useState, useEffect } from 'react';
import { useBag } from '../constants/BagContext';
import MyBagCard from '../components/MyBagCard';
import Nav from '../components/Nav';
import Footer from '../sections/Footer';
import HelpIcon from '@mui/icons-material/Help';

const MyBag = () => {
  const { state, dispatch } = useBag();
  const { items } = state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [counts, setCounts] = useState(items.reduce((acc, item) => {
    acc[`${item.name}_${item.size}`] = item.quantity || 1;
    return acc;
  }, {}));
  
  const [subtotals, setSubtotals] = useState(items.reduce((acc, item) => {
    acc[`${item.name}_${item.size}`] = (item.quantity || 1) * parseFloat(item.price.replace(/[^0-9.-]+/g, ''));
    return acc;
  }, {}));

  const updateCount = (name, size, delta) => {
    const key = `${name}_${size}`;
    setCounts(prevCounts => {
      const newCount = Math.max(1, (prevCounts[key] || 1) + delta);
      const priceNumber = parseFloat(items.find(item => item.name === name && item.size === size).price.replace(/[^0-9.-]+/g, ''));
      setSubtotals(prevSubtotals => ({
        ...prevSubtotals,
        [key]: newCount * priceNumber
      }));
      return {
        ...prevCounts,
        [key]: newCount
      };
    });
    dispatch({ type: 'UPDATE_QUANTITY', payload: { name, size, quantity: counts[key] + delta } });
  };

  const handleDelete = (item) => {
    const key = `${item.name}_${item.size}`;
    dispatch({ type: 'DELETE_FROM_BAG', payload: { name: item.name, size: item.size } });
    setCounts(prevCounts => {
      const newCounts = { ...prevCounts };
      delete newCounts[key];
      return newCounts;
    });
    setSubtotals(prevSubtotals => {
      const newSubtotals = { ...prevSubtotals };
      delete newSubtotals[key];
      return newSubtotals;
    });
  };

  const calculateSubtotal = () => {
    return Object.values(subtotals).reduce((acc, subtotal) => acc + subtotal, 0);
  };

  const subtotal = calculateSubtotal();
  const taxRate = 0.112;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <>
      <Nav />

      <section className="padding max-sm:py-24" id="my-bag">

        <h1 className="text-4xl font-bold font-palanquin flex justify-center items-center pb-14">
          My&nbsp;<span className="text-coral-red">Bag</span>
        </h1>

        {Array.isArray(items) && items.length > 0 ? (
          <div className="m-2 auto">
            <table className='w-[100%] border-collapse'>
              <thead>
                <tr className='text-left p-[5px] text-white bg-coral-red'>
                  <th className='p-[5px] text-lg font-normal font-palanquin'>Product</th>
                  <th className='p-[5px] text-lg font-normal font-palanquin max-sm:text-right'>Quantity</th>
                  <th className='p-[5px] text-lg font-normal font-palanquin text-right max-sm:hidden'>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {items.map((bagItem) => (
                  <MyBagCard
                    key={`${bagItem.name}_${bagItem.size}`}
                    {...bagItem}
                    count={counts[`${bagItem.name}_${bagItem.size}`]}
                    updateCount={(delta) => updateCount(bagItem.name, bagItem.size, delta)}
                    subtotal={subtotals[`${bagItem.name}_${bagItem.size}`]}
                    onDelete={() => handleDelete(bagItem)}
                  />
                ))}
              </tbody>
            </table>
            
            <div className='flex flex-col items-center max-sm:items-center mt-5 max-sm:mt-10'>
              <h2 className='font-palanquin text-2xl mb-2 text-left'>Summary</h2>
              <table className='w-[100%] max-w-[400px] min-w-[200px] flex-grow flex-shrink border-t-[3px] border-t-[#ff523b]'>
                <tbody className='font-montserrat'>
                  <tr>
                    <td>Subtotal <HelpIcon sx={{fontSize: '', color: 'gray'}} /> </td>
                    <td className='text-right'>${subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td className='text-right'>11.2%</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className='text-right'>${total.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
        ) : (
          <p className="info-text flex justify-center items-center pt-[4rem] pb-6">
            Your bag is empty.
          </p>
        )}
      </section>
      <footer className="flex justify-end items-center bg-black padding-x padding-t pb-8">
        <Footer />
      </footer>
    </>
  );
};

export default MyBag;
