import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const MyBagCard = ({ imgURL, name, price, size, count, updateCount, subtotal, onDelete }) => {
  return (
    <tr>

      {/* The product part */}
      <td className='py-[20px] max-sm:py-[25px]'>
        <div className='flex max-xs:flex-col flex-wrap'>
          <img src={imgURL} alt={name} className='h-[100px] w-[100px] mr-[10px]' />
          <div>
            <p className='font-montserrat max-sm:text-sm max-xs:pt-2'>{name}</p>
            <p className='font-montserrat text-sm'>{size}</p>
            <small className='font-montserrat'>Price: <span className='text-coral-red'>{price}</span></small>
            <button
              className="xs:flex justify-center items-center pt-2 max-xs:pl-2 font-montserrat font-bold"
              onClick={onDelete}
            >
              <DeleteOutlineOutlinedIcon sx={{fontSize: 23}} />
            </button>
          </div>
        </div>
      </td>

      {/* the Quantity part */}
      <td className='flex text-center flex-row items-center max-sm:justify-end pt-[47px] max-sm:pt-[60px] max-xs:pt-[70px]'>
        <button onClick={() => updateCount(-1)} className=''>
          <RemoveCircleIcon sx={{fontSize: '20px'}} />
        </button>
        <input
          type="number"
          value={count}
          className='w-[35px] h-[35px] font-montserrat input-center my-1 mx-1'
          readOnly
        />
        <button onClick={() => updateCount(1)} className=''>
          <AddCircleIcon sx={{fontSize: '20px'}} />
        </button>
      </td>

      {/* The Subtotal Part */}
      <td className='text-right font-montserrat max-sm:hidden'>
        ${subtotal.toFixed(2)}
      </td>
      
    </tr>
  );
};

export default MyBagCard;
