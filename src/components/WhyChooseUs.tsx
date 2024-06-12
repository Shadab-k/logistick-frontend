"use client";
import React from 'react';
import Image from 'next/image';

const whychoseustitle_discroption = {heading:'Why Choose Us?', sdiscription:'At Optnship Logistics, we understand that the world of logistics can be complex and demanding. That is why we have made it our mission to simplify it for you.'}
const why_choseus = [
    {title:'Our Mission', altatribute:'Our Mission', iconImg:'/assets/images/icons/mission.svg', discription:'We tirelessly troubleshoot to eliminate choke points, prevent stock depletion, streamline unnecessary redundancies, and make delays a thing of the past.',},

    {title:'Our Vision', altatribute:'Our Mission', iconImg:'/assets/images/icons/vision.svg', discription:'Our mission is to design, build and implement innovative, profitable and sustainable products and services that help our customers meet consumer and industrial demands globally and irrespective of fulfillment channels.',},

    {title:'Our Values', altatribute:'Our Mission', iconImg:'/assets/images/icons/ourvelue.svg', discription:'Our mission is to design, build and implement innovative, profitable and sustainable products and services that help our customers meet consumer and industrial demands globally and irrespective of fulfillment channels.',},   
]
const properties_chose = [
    {title:'Adaptability', altatribute:'Adaptability', image:'/assets/images/Adaptability.jpg', discription:'We specialize in taking on complex problems, transforming them into easy-to-manage solutions.',},

    {title:'Experience', altatribute:'Experience', image:'/assets/images/Endto_end_solutions.jpg', discription:'We specialize in taking on complex problems, transforming them into easy-to-manage solutions.',},

    {title:'End To End Solutions', altatribute:'End To End Solutions', image:'/assets/images/Experience.jpg', discription:'We specialize in taking on complex problems, transforming them into easy-to-manage solutions.',},   

    {title:'Reach', altatribute:'Reach', image:'/assets/images/Reach.jpg', discription:'We specialize in taking on complex problems, transforming them into easy-to-manage solutions.',},  
]
export default function WhyChooseUs(){
  return (
 <>
   <section className='whychose_us common_sec_gap'>
    <div className='max_container'>
       <div className='d_grid grid50 grid_md100 column_gap20 justify-between items_center'>
            <div className='image_box fadeIn'>
                <Image className='w-full' src={'/assets/images/whychose_us.jpg'} height={600} width={700} alt='hero_banner' />
            </div>
       
       <div className='content fadeIn'>
            <div className='heading_title'><h2 className='text_secondry'>{whychoseustitle_discroption.heading}</h2></div>
            <p>{whychoseustitle_discroption.sdiscription}</p>
           <div className='choose_vision'>
                <ul>
                    {why_choseus.map((item, index:any)=>(
                    <li key={index}>
                        <span className='rotating_element'><Image src={item.iconImg} height={50} width={50} alt={item.altatribute} /></span>
                        <h4>{item.title}</h4>
                        <p>{item.discription}</p>
                    </li>
                    ))}
                </ul>
           </div>
        </div>
        </div>

        <div className='d_grid grid4 box_surface gap20 grid_md50 grid_xs100'>
            {properties_chose.map((item, index:any)=>(
            <div key={index} className='verticle_box'>
                <div className='img_box'><Image src={item.image} height={200} width={500} alt={item.altatribute} /></div>
                <div className='text_area'>
                    <h4>{item.title}</h4>
                    <p>{item.discription}</p>
                </div>
            </div>
            ))}
           
        </div>
    </div>
</section>

  
   </>
  )
} 