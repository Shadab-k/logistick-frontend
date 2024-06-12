"use client";
import Head from 'next/head';

import React from 'react';
import Home from '../page';


export default function Page(){
  return (
 <>
      <Head>
        <title>XPressmiles</title>
      </Head>
      <main className="main_wrapper">
        <Home></Home>
      </main>
     
   
   </>
  )
} 