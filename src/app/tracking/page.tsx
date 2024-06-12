"use client";
import Tracking from '@/components/Tracking';
import Head from 'next/head';
import React from 'react';

export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="tracking_wrapper">
       <Tracking></Tracking>
      </main>
     
   
   </>
  )
} 