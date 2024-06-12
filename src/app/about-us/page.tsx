"use client";
import AboutUs from '@/components/AboutUs';
import Head from 'next/head';
import React from 'react';


export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="about_wrapper">
       <AboutUs></AboutUs>
      </main>
     
   
   </>
  )
} 