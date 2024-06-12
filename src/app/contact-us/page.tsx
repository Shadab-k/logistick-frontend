"use client";
import ContactUs from '@/components/ContactUs';
import Head from 'next/head';
import React from 'react';


export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="contact_wrapper">
        <ContactUs></ContactUs>
      </main>
     
   
   </>
  )
} 