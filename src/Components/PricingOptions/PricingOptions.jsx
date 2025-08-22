import React, { use } from 'react';
import PricingCards from '../PricingCards/PricingCards';

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);

    console.log(pricingData);
    return (
        <div className='text-center my-16'>
            <h2 className='my-8 md:text-3xl text-xl font-bold'>Get our Premium Memberships</h2>
            <div className='grid md:grid-cols-3 md:gap-15 gap-3'>
                {
                    pricingData.map(pricing => <PricingCards key={pricing.id} pricing={pricing}></PricingCards>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;