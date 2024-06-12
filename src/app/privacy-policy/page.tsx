"use client";
import PrivacyPolicy from '@/components/PrivacyPolicy';
import Head from 'next/head';
import React from 'react';

export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="terms_wrapper">
        <PrivacyPolicy></PrivacyPolicy>
      </main>
     
   
   </>
  )
} 