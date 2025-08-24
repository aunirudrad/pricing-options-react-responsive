import React from 'react';
import Features from './Features';

const PricingCards = ({ pricing }) => {
    // console.log(pricing);
    const {plan, price, currency, description, features} = pricing;
    return (
        
        <div className='p-5 border rounded-lg bg-amber-50 text-black flex flex-col'>
            <div>
                <h2 className='md:text-3xl text-lg mt-4 font-bold'>{plan}</h2>
                <h4 className='md:text-xl text-xs mt-1 mb-4'>{price} {currency}/month</h4>
            </div>
            <div className='rounded-sm p-4 bg-cyan-400 font-medium flex-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <Features key={index} feature = {feature}></Features>)
                }
            </div>
            <div className=''><button className="btn w-full mt-4">Wide</button></div>
        </div>
    );
};

export default PricingCards;