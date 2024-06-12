"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const productHubtitle_discroption = {heading:'Transportation Product hub', sdiscription:'Explore our comprehensive range of transport services designed to move goods efficiently, reliably, and securely.', btncontact_us:'Contact Us'}
const productHubbox = [
    {title:'B2B', imgBox:'/assets/images/pic1.jpg', altatribute:'B2B', iconImg:'/assets/images/icons/b2b.svg', discription:'Efficient and reliable delivery services tailored for a smooth B2C experience.', btn:'Learn More'},
    {title:'B2C', imgBox:'/assets/images/pic2.jpg', altatribute:'B2C', iconImg:'/assets/images/icons/b2c.svg', discription:'Efficient and reliable delivery services tailored for a smooth B2C experience.', btn:'Learn More'},
    {title:'B2B', imgBox:'/assets/images/pic3.jpg', altatribute:'B2B', iconImg:'/assets/images/icons/d2c.svg', discription:'Efficient and reliable delivery services tailored for a smooth B2C experience.', btn:'Learn More'},
    {title:'B2B', imgBox:'/assets/images/pic4.jpg', altatribute:'B2B', iconImg:'/assets/images/icons/b2globe.svg', discription:'Efficient and reliable delivery services tailored for a smooth B2C experience.', btn:'Learn More'},
    {title:'B2B', imgBox:'/assets/images/pic5.jpg', altatribute:'B2B', iconImg:'/assets/images/icons/b21.svg', discription:'Efficient and reliable delivery services tailored for a smooth B2C experience.', btn:'Learn More'},
]
export default function ProductHubs(){
    // const handleNavLinkClick = (path: string) => {
    //     if (typeof window !== 'undefined') {
    //       localStorage.setItem('activeLink', path);
    //       window.location.href = path;
    //     }
    //   };
    return(
        <>
        <section className='transportation common_sec_gap'>
            <div className='max_container'>
                <div className='prduct_hub items_center gap20 grid_xs100'>
                <div className='verticale_boxinfo  fadeIn'>
                        <div className='content'>
                            <div className='heading_title'><h2 className='text_secondry'>{productHubtitle_discroption.heading}</h2></div>
                            <p>{productHubtitle_discroption.sdiscription}</p>
                            <div className='pt-20 pb-10'><Link href="/contact-us" className="btn btn_secondry border_radius2">{productHubtitle_discroption.btncontact_us}</Link></div>
                        </div>
                    </div>
                    {productHubbox.map((item, index:any)=>(
                    <div key={index} className='verticale_boxinfo  fadeIn'>
                        <div className='img_box'>
                            <Image src={item.imgBox} height={200} width={500} alt={item.altatribute} />
                            <span className='icon'><Image src={item.iconImg} height={40} width={40} alt={item.altatribute} /></span>
                        </div>
                        <div className='pt-20'>
                            <h4 className='mb-10'>{item.title}</h4>
                           <p>{item.discription}</p>
                           <Link href='#' className='mt-20 d_inline_block btn_arrow_left'>{item.btn}</Link>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </section>
        </>
    )
}