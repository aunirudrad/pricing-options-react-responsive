import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Links from './Links';


const navData = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Pricing", path: "/pricing" },
    { id: 3, name: "Features", path: "/features" },
    { id: 4, name: "About", path: "/about" },
    { id: 5, name: "Contact", path: "/contact" }
];
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const links = navData.map(items => <Links key={navData.id} items = {items}></Links>);




    return (
        <nav className='flex items-center justify-between my-5 mx-5'>
            <span className='flex items-center justify-center gap-6' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                
                <ul className={`md:hidden mt-34 absolute duration-1000 ${open ? 'left-12' : '-left-40'} px-6 py-4 text-black bg-red-600`}>
                    {links}
                </ul>
                <div>MyNav</div>
            </span>
            <ul className='md:flex items-center justify-center gap-9 hidden'>
                {
                    links
                }
            </ul>
            <div className='bg-amber-400 rounded-lg'><button className='my-2 mx-4  text-black'>Guta De!</button></div>
        </nav>
    );
};

export default Navbar;