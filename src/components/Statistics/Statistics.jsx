import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';


const fetchDonationData = () => {
  const totalDonations = 12; 

  
  const storedDonations = JSON.parse(localStorage.getItem('donations')) || [];
  const myDonations = storedDonations.length; 

  
  const remainingDonations = totalDonations - myDonations;
  const myDonationPercentage = (myDonations / totalDonations) * 100;
  const remainingDonationPercentage = (remainingDonations / totalDonations) * 100;

  return [
    { name: 'Donated', value: myDonationPercentage },
    { name: 'Remaining', value: remainingDonationPercentage }
  ];
};

const COLORS = ['#0088FE', '#FF8042'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
   
    const donationData = fetchDonationData();
    setData(donationData);
  }, []);

  return (
    <div className='w-11/12 mx-auto'>
      <h1 className='text-3xl font-bold text-center my-10'>Donation Statistics</h1>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend
            layout="horizontal"
            align="center"
            verticalAlign="bottom"
            iconSize={20}
            wrapperStyle={{ paddingTop: 20 }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
