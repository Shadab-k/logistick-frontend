"use client";
import FrequentlyAskQueitions from '@/components/FrequentlyAskQueitions';
import Head from 'next/head';
import React from 'react';


export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="faq_wrapper">
        <FrequentlyAskQueitions></FrequentlyAskQueitions>
      </main>
     
   
   </>
  )
} 