"use client";
import RefundCancellationPolicy from '@/components/RefundCancellationPolicy';
import Head from 'next/head';
import React from 'react';

export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="terms_wrapper">
        <RefundCancellationPolicy></RefundCancellationPolicy>
      </main>
     
   
   </>
  )
} 