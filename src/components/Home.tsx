"use client";
import React from 'react';
import HomeBanner from './HomeBanner';
import PowerLogisticBusiness from './PowerLogisticBusiness';
import ProductHubs from './ProductHubs';
import WhyChooseUs from './WhyChooseUs';
import Services from './Services';
import Faqs from './Faqs';
import FooterStrip from './FooterStrip';


export default function Home(){
  return (
 <>
   <HomeBanner></HomeBanner>
   <PowerLogisticBusiness></PowerLogisticBusiness>
   <ProductHubs></ProductHubs>
   <WhyChooseUs></WhyChooseUs>
   <Services></Services>
   <Faqs></Faqs>
   <FooterStrip></FooterStrip>
   </>
  )
} 