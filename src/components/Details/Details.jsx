import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const {data} = location.state || {};
    if (!data) {
        return <div>No Data Available</div>; 
      }
      const { picture, title, description, price,title_text_color } = data;

      const handleGoHome =() => {
        navigate('/');

      };


      
    return (
        <div className='w-11/12 mx-auto'>
            <div className=''>
                <div className='relative'>
                <img className='w-full md:h-[600px]' src={picture} alt="" />

                <button style={{backgroundColor:title_text_color}} className='absolute md:bottom-6 md:left-10 bottom-4 left-5 px-4 py-2  text-white md:px-6 md:py-4 md:text-xl  rounded-xl'>Donate: {price}</button>
                </div>
               
                <h1 className='text-3xl font-bold mt-8'>{title}</h1>
                <p className='text-xl mt-4'>{description}</p> 
            </div>
        <button style={{backgroundColor:title_text_color}} onClick={handleGoHome} className=' px-8 py-3 rounded-xl  text-xl text-white  mt-7 '>Go Back</button>

        </div>
    );
};

export default Details;