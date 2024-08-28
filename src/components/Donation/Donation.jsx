import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DoneDonation from '../DoneDonation/DoneDonation';

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the stored donations from localStorage
        const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
        setDonations(storedDonations);
    }, []);

    const handleGoHome = () => {
        navigate("/");
    };

    const handleSeeAll = () => {
        setShowAll(true);
    };

    
    const donationsToShow = showAll ? donations : donations.slice(0, 4);

    return (
        <div className="w-11/12 mt-36 md:mt-48 mx-auto">
            <h1 className='text-3xl font-bold text-red-500 mt-10 mb-20'>Your Donations</h1>
            {donations.length === 0 ? (
                <p className="mt-4 text-xl">No donations made yet.</p>
            ) : (
                <>
                    <div className=' flex flex-col md:grid  md:grid-cols-2 md:w-4/6 mx-auto gap-5'>
                        {donationsToShow.map(donation => (
                            <DoneDonation key={donation.title} donation={donation} />
                        ))}
                    </div>

                    {donations.length > 4 && !showAll && (
                        <div className='text-center mt-4'>
                            <button onClick={handleSeeAll} className='btn btn-info text-white'>See All</button>
                        </div>
                    )}
                </>
            )}
            <div className='mt-20 text-center mx-auto'>
                <button onClick={handleGoHome} className='btn btn-error text-white'>Go Home</button>
            </div>
        </div>
    );
};

export default Donation;
