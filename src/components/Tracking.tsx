"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const trackingData = {
  img: "/assets/images/tracking.jpg",
  heading: "TRACK CONSIGNMENT",
  sdiscription:
    "Your Gateway to Seamless Shipping Solutions. Where Efficiency Meets Reliability, and Every Parcel Tells a Story of Excellence. Unleash the Power of Hassle-Free Deliveries with Optnship Logistics!",
  btnorder_track: "Track Your Order",
  btncontact: "Contact Us",
};
export default function Tracking() {
  return (
    <>
      <section className="hero_banner tracking_0">
        <div className="">
          <div className="d_grid grid50 grid_sm100 justify_between items_center bg_primary">
            <div className="w-full h-full">
              <Image
                className="w-full h-full d_block"
                src={trackingData.img}
                height={600}
                width={600}
                alt="hero_banner"
              />
            </div>
            <div className="hero_content midle_text w-full ">
              <div className="heading_title">
                <h2 className="text_white">
                  <span>{trackingData.heading}</span> 
                </h2>
                <p className="text_white">{trackingData.sdiscription}</p>
              </div>
              <div className="d_block w-full mt-20 mb-20">
                <div>
                  <input
                    type="number"
                    className="form_input"
                    placeholder="Your AWB Number"
                  />
                </div>
                <div className="mt-20 mb-20">
                  <Link href="" className="btn btn_secondry">
                    {trackingData.btnorder_track}
                  </Link>{" "}
                </div>
                <p className="text_white">
                  Contact with us for information{" "}
                  <Link href="/contact-us" className="text_white">
                    {trackingData.btncontact}
                  </Link>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
