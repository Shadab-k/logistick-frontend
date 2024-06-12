"use client";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Thankyou() {
  return (
    <>
      <section className="about_us circle_effects common_sec_gap overflow_hidden">
        <div className="max_container position_index">
          <div className="text_center d_grid items_center " style={{minHeight:250}}>
            <h1 className="text_primary">Thank you</h1>
            <div className="mb-20"><p>With Appricieate your help. Your responses have been recorded.</p></div>
            <Link href="/home" className="btn btn_secondry border_radius2 d_inline m-auto" style={{width:200}}>Back To Home</Link>
          </div>
          
        </div>
        <span className="bg_circle1"></span>
        <span className="bg_circle2"></span>
      </section>
    </>
  );
}
