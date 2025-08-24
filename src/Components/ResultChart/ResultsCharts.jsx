import React, { Suspense, use } from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultsPromise = fetch('resultsData.json').then(res => res.json());

const ResultsCharts = () => {

    const resultData = use(resultsPromise);

    // console.log(resultData);
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-lg"></span>}>
                <LineChart width={800} height={400} data={resultData}>
                    <Line type={'monotone'} dataKey={'english'} stroke='yellow'></Line>
                    <Line type={'monotone'} dataKey={'math'} stroke='white'></Line>
                    <Line type={'monotone'} dataKey={'science'} stroke='cyan'></Line>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>

                </LineChart>
            </Suspense>
        </div>
    );
};

export default ResultsCharts;