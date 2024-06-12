"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import Link from 'next/link';

const Logistictitle_dcallTracker = {heading:'Powering logistics across business', btnorder_track:'Track Your Order', conact_no:'0124 481 1144'}

const powerLogistic =[
  {iconimg:'/assets/images/icons/tick.svg', benifits:'Safe Packing', newbenifits:'In Time Delivery',},
  {iconimg:'/assets/images/icons/tick.svg', benifits:'Ship Everywhere', newbenifits:'Cost Saving',},
  {iconimg:'/assets/images/icons/tick.svg', benifits:'Zero Risk', newbenifits:'Fastest Shipping',},
]

const counter = [
  {countnumbers:'100', labelTitle:'Total Warehouses'},
  {countnumbers:'75', labelTitle:'Total Vehicles'},
  {countnumbers:'80', labelTitle:'Total Shipments'},
  {countnumbers:'2', labelTitle:'Customer Reviews'},
]

const businesJuourney = [
  {iconImg:'/assets/images/icons/order_management.svg', altartibute:'Order Management', title:'Order Management', discription:'Our solutions are tested, proven, and best-in-class.'},
  {iconImg:'/assets/images/icons/distribution.svg', altartibute:'Distribution & Fulfillment', title:'Distribution & Fulfillment', discription:'Our solutions are tested, proven, and best-in-class.'},
  {iconImg:'/assets/images/icons/Transportation.svg', altartibute:'Transportation', title:'Transportation', discription:'Our solutions are tested, proven, and best-in-class.'},
  {iconImg:'/assets/images/icons/globe.svg', altartibute:'Global Trade Compliance', title:'Custom Brokerages & Global Trade Compliance', discription:'Our solutions are tested, proven, and best-in-class.'},
]
export default function PowerLogisticBusiness() {


  useEffect(() => {
    const handleScroll = () => {
      const track_care = document.querySelector('.track_care') as HTMLElement;
      if (track_care) {
        const scrolled = window.scrollY;
        track_care.style.transform = `translateX(${scrolled * 0.6}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className='bg_secondry common_sec_gap next_section position_index'>
        <div className='max_container'>
          <div className='logistic_business grid_sm100 grid_md100'>
            <div className='fadeIn'>
              <div className='heading_title'><h2 className='text_white'>{Logistictitle_dcallTracker.heading}</h2></div>
              <ul>
                {powerLogistic.map((item, index:any)=>(
                <li key={index}>
                  <div><span className='icon_img'><Image src={item.iconimg} alt='tick_mark' width={30} height={30} /></span>{item.benifits}</div>
                  <div><span className='icon_img'><Image src={item.iconimg} alt='tick_mark' width={30} height={30} /></span>{item.newbenifits}</div>
                </li>
                ))}
              </ul>
              <div className='action_info fadeIn'>
                <Link  href="/tracking" className="btn btn_primary border_radius2">{Logistictitle_dcallTracker.btnorder_track}</Link>
                <a href='tel:01244811144'><span className="circle_bg icon-phone-call"></span>{Logistictitle_dcallTracker.conact_no}</a>
              </div>
            </div>
          </div>
          <div className='bg_secondry counter_area grid_sm100 grid_md100'>
            <div className='blank_space'></div>
            <div className='fadeIn'>
              <div className='mt-50 text_white'><h3>Xpressmiles Company</h3></div>
              <div className='counter_xpress'>
                {counter.map((item, index:any)=>(
                <div key={index}>
                  <div className='column'>
                    <CountUp className='numbers' end={Number(item.countnumbers)} /><span className='plus_icon'>+</span>
                  </div>
                  <strong className='text_white'>{item.labelTitle}</strong>
                </div>
                ))}
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='position_index'>
        <div className='max_container'>
          <div className='turn_runner_bottom fadeIn'>
            <Image className='w-full' src={'/assets/images/line_decore2.svg'} alt='line' width={900} height={300} />
            <span className='track_care'><Image src={'/assets/images/truck_img.svg'} alt='truck' width={150} height={50} /></span>
          </div>
          <div className='feature_logistic common_sec_gap fadeIn'>
            {businesJuourney.map((item, index:any)=>(
            <div key={index} className='box_content'>
              <span><Image src={item.iconImg} height={60} width={60} alt={item.altartibute} /></span>
              <h4>{item.title}</h4>
              <p>{item.discription}</p>
            </div>
            ))}
           
          </div>
        </div>
      </section>
    </>
  );
}
