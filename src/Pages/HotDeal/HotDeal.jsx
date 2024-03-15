import React from 'react';
import img from '../../assets/category/offfer.webp'

const HotDeal = () => {
    const busket = [
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img,
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
        {
            'name' : 'Busket',
            'price' : '1500 tk',
            'img' : img
        },
    ]

    return (
                <div className='flex flex-wrap justify-center pl-6 pr-6'>
            {
                busket.map(item =>(
                    <div className='shadow-md m-3 rounded'>
                        <img src={item.img} alt="" />
                        <div className='pl-4 pt-3 pb-4'>
                        <h5 className='sm:text-2xl text-[18px]'>{item.name}</h5>
                        <p>Price :{item.price}</p>
                        <button style={{backgroundColor: "#51CF48"}} className='mt-2 pl-10 pr-10 pb-2 pt-2 sm:text-xl text-[16px] rounded-md text-[white] '>Detail</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default HotDeal;