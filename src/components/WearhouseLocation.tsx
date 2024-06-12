"use client";

import React from 'react';
import Image from 'next/image';


const maintitle = {heading:'Our Warehouse', imgMap:'/assets/images/india-map.svg'}
export default function WearhouseLocation(){
    return(
        <section className='about_us circle_effects'>
            <div className='max_container position_index'>
                <div className='text_center'>
                    <div className="heading_title under_line center"><h2 className='text_secondry'>{maintitle.heading}</h2></div>
                </div>
                <div className='text_center w-full container'>
                    <Image className='w-full h-full' src={maintitle.imgMap} height={600} width={1200} alt='wherhouses' />
                </div>
            </div>
        </section>
    )
}