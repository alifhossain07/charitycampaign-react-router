import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
    
    const navigate = useNavigate();
    

    const location = useLocation();
    const {data} = location.state || {};
    if (!data) {
        return <div>No Data Available</div>; 
      }


    const { picture, title, description, price,title_text_color } = data;

      
    const notify = () => {
        const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
        // Check if the current card is already in localStorage
        const cardExists = storedDonations.some(card => card.title === title);

        if (!cardExists) {
            // Add the new card to the array
            storedDonations.push(data);
            localStorage.setItem('donations', JSON.stringify(storedDonations));
            toast.success("Congratulations! You have successfully Donated");
        } else {
            toast.info("This card has already been donated.");
        }
    };

    
    const handleGoHome =() => {
        navigate('/');

      };


      
    return (
        <div className='w-11/12 mx-auto'>
            <div className=''>
                <div className='relative'>
                <img className='w-full md:h-[600px]' src={picture} alt="" />

                <button onClick={notify} style={{backgroundColor:title_text_color}} className='absolute md:bottom-6 md:left-10 bottom-4 left-5 px-4 py-2  text-white md:px-6 md:py-4 md:text-xl  rounded-xl'>Donate: {price}</button>
                
                </div>
               
                <h1 className='text-3xl font-bold mt-8'>{title}</h1>
                <p className='text-lg md:text-xl mt-4'>{description}</p> 
            </div>
        <button style={{backgroundColor:title_text_color}} onClick={handleGoHome} className=' md:px-8 md:py-3 px-6 py-2 rounded-xl  text-xl text-white  mt-7 '>Go Back</button>
        <ToastContainer theme='dark' position="bottom-right" />
        </div>
    );
};

export default Details;