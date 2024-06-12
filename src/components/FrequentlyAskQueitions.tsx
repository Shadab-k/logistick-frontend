"use client";
import React from 'react';
import Image from 'next/image';
import Faqs from './Faqs';

const faqData ={
    heading_sm:'FAQs', heading:'Quick <span>Solutions </span><br/> to Your <span> Queries</span>', discription:'At Optnship Logistics, we take your queries very seriously.Please check the answer to frequently asked questions below. Else contact us at',
    btn_email:'info@nirvasa.com', img:'/assets/images/faqs.png'
}
export default function FrequentlyAskQueitions(){
    return(
        <>
        <section className='about_us circle_effects_left overflow_hidden'>

<div className='max_container position_index'>
    <div className='d_grid grid50 grid_sm100 column_gap20 justify-between items_center'>
        <div className='hero_content'>
            <h4 className="text_primary mb-10">{faqData.heading_sm}</h4>
            <h2 className='text_secondry' dangerouslySetInnerHTML={{__html:`${faqData.heading}`}}></h2>
            <p>{faqData.discription} <a href='mailto:info@nirvasa.com' className='text_primary'> {faqData.btn_email}</a></p>
            
        </div>
        <div className='timeline_area'>
            <div className='w-full h-full mt-30 text_center'>
                <Image className='object_fill m-auto' src={faqData.img} height={400} width={500} alt='Faqs' />
            </div>
        </div>
    </div>
</div>
<span className='bg_circle1'></span>
<span className='bg_circle2'></span>
</section>
        <Faqs></Faqs>
        </>
    )
}