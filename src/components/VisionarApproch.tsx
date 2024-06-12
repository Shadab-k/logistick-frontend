"use client";
import React from 'react';
import Image from 'next/image';

const Wearhouse = {heading_sm:'Grow your Business with us', heading:'Our Visionary Approach', discription:'At Xpressmiles Logistics, we envision a future where logistics cease to be a challenge, and shipping becomes an effortless experience. Our visionary approach is rooted in simplifying the complexities of supply chains, offering unparalleled solutions for businesses worldwide. With a commitment to excellence, transparency, and tailored services, Xpressmiles Logistics is your trusted partner in navigating the ever-evolving landscape of logistics',
    img:'/assets/images/about_midle.png'
}

export default function VisionarApproch(){
    return(
        <section className='about_us circle_effects'>
            <div className='max_container position_index'>
                <div className='d_grid grid50 grid_sm100 column_gap20 justify-between items_center'>
                    <div>
                    <div className="heading_title under_line">
                        <h4 className='text_primary mb-10'>{Wearhouse.heading_sm}</h4>
                        <h2 className='text_secondry'>{Wearhouse.heading}</h2>
                        </div>
                        <p>{Wearhouse.discription}</p>
                    </div>
                    <div>
                    <Image className='w-full h-full' src={Wearhouse.img} height={600} width={1200} alt='Visionary Approach' />
                    </div>
                </div>
            </div>
        </section>
    )
}