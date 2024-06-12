"use client";
import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import WearhouseLocation from './WearhouseLocation';
import VisionarApproch from './VisionarApproch';
import OurTeam from './OurTeam';

const aboutustitle_discription ={
    heading_sm:'About Us', haading:'<span>Empowering</span> Businesses Elevating With Seamless Shipping <span>Solutions</span>', discription:'Welcome to Optnship Logistics– your efficient shipping partner for startups and entrepreneurs. Based in Delhi, we simplify logistics by uniting courier partners for transparent and informed decision-making. Serving 29,000+ pin codes, we redefine shipping with clarity and satisfaction. Welcome aboard!',
    btncontact:'Contact Us'
}
const aboutTimeline =[
    {title:'Prompt Response', icon:'icon-send1', discription:"We are committed to providing the appropriate response to our clients' business requirements."},

    {title:'Quality', icon:'icon-star', discription:"We excel in what we undertake."},

    {title:'Leadership', icon:'icon-send1', discription:"Guiding and directing the passionate team"},

    {title:'Responsive Learning', icon:'icon-send1', discription:"The pursuit of knowledge should be continuous; it never ceases here."},

    {title:'Exceed Customer Expectations', icon:'icon-send1', discription:"We consistently exceed businesses' expectations, every single time!"}
]
export default function AboutUs(){
    return(
        <>
        <section className='about_us circle_effects common_sec_gap overflow_hidden'>

            <div className='max_container position_index'>
                <div className='d_grid grid50 grid_sm100 column_gap20 justify-between items_center'>
                    <div className='hero_content'>
                        <h4 className="text_primary mb-10">{aboutustitle_discription.heading_sm}</h4>
                        <h2 className='text_secondry' dangerouslySetInnerHTML={{__html:`${aboutustitle_discription.haading}`}}></h2>
                        <p>{aboutustitle_discription.discription}</p>
                       
                        <p>Contact with us for information <a href='' className='text_primary'>{aboutustitle_discription.btncontact}</a> </p>
                    </div>
                    <div className='timeline_area'>
                        <div className='w-full'>
                            <ul>
                                {aboutTimeline.map((item, index:any)=>(
                                <li key={index}>
                                    <span className={item.icon}></span>
                                    <h4>{item.title}</h4>
                                    <p>{item.discription}</p>
                                </li>
                                ))}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <span className='bg_circle1'></span>
            <span className='bg_circle2'></span>
        </section>
        <WearhouseLocation></WearhouseLocation>
        <VisionarApproch></VisionarApproch>
        <OurTeam></OurTeam>
        </>
    )
}