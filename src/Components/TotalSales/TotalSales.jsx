import React, { Suspense, use } from 'react';
import { Bar, BarChart, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';



const TotalSales = ({ salePromise }) => {
    const salesDataRes = use(salePromise);
    const salesData = salesDataRes.data;

    const salesDataForChart = salesData.map(singleData => {
        const sale = {
            quarter: singleData.quarter,
            period: singleData.period,
            basicPlan: singleData.purchases.Basic,
            standardPlan: singleData.purchases.Standard,
            premiumPlan: singleData.purchases.Premium,

        }
        return sale;
    })



    console.log(salesDataForChart);
    return (
        <div className=''>
            <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
                <BarChart width={800} height={400} data={salesDataForChart} 
                margin={{
                    top: 5,
                    right: 20,
                    left:20,
                    bottom:5
                    }}>

                    <XAxis dataKey={'period'}></XAxis>
                    <YAxis></YAxis>

                    <Tooltip></Tooltip>
                    <Legend></Legend>

                    <Bar dataKey={'basicPlan'} fill='green' activeBar={<Rectangle fill='pink' stroke='blue'></Rectangle>}></Bar>
                    <Bar dataKey={'standardPlan'} fill='red' activeBar={<Rectangle fill='gold' stroke='blue'></Rectangle>}></Bar>
                    <Bar dataKey={'premiumPlan'} fill='cyan' activeBar={<Rectangle fill='white' stroke='blue'></Rectangle>}></Bar>

                </BarChart>
            </Suspense>
        </div>
    );
};

export default TotalSales;