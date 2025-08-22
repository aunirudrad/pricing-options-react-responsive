import { CheckCircleIcon } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
        <p className='flex gap-3 my-3 italic text-sm font-normal'><CheckCircleIcon></CheckCircleIcon> {feature}</p>
    );
};

export default Features;