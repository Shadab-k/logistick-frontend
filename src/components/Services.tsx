"use client";
import React from 'react';
import Image from 'next/image';
const servicetitle_discroption = {heading:'Our Services', sdiscription:'At Optnship Logistics, we understand that the world of logistics can be complex and demanding. That is why we have made it our mission to simplify it for you. '}
const ourservices = [
    {title:'Prepaid Orders', altatribute:'Prepaid Orders', iconImg:'/assets/images/icons/paid-search.webp',},
    {title:'Cash on Delivery (COD)', altatribute:'COD', iconImg:'/assets/images/icons/cash.webp',}, 
    {title:'B2B by Surface', altatribute:'B2B Surface', iconImg:'/assets/images/icons/truck.webp',}, 
    
    {title:'Reverse Pickup', altatribute:'Reverse Pickup', iconImg:'/assets/images/icons/delivery.webp',},

    {title:'B2B by Air', altatribute:'B2B by Air', iconImg:'/assets/images/icons/airplane.webp',},

    {title:'Ecommerce Logistics', altatribute:'Our Mission', iconImg:'/assets/images/icons/door.webp',},
]
export default function Services(){
    return(
        <>
        <section className='services common_sec_gap bg_secondry space_top'>
            <div className='max_container'>
                <div className='text_center fadeIn'>
                    <div className='heading_title text_white'><h2>{servicetitle_discroption.heading}</h2></div>
                    <p className='text_white lead'>{servicetitle_discroption.sdiscription}</p>
                </div>
                <div className='items_start d_grid gap20 grid6 grid3_md grid_xs2'>
                    {ourservices.map((item, index:any)=>(
                    <div key={index} className='sirvice_box text_center fadeIn'>
                        <div className='img_box'>
                            <span className='icon'><Image src={item.iconImg} height={60} width={60} alt={item.altatribute} unoptimized={true} /></span>
                            <strong>{item.title}</strong>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
        </>
    )
}