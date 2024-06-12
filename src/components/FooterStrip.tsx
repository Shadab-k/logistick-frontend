"use client";
import React from "react";
import Link from "next/link";

const stripdata = {
  heading:
    "Starting an E-Commerce Store?<br/> Let us look after your logistics",
  discription: "Grow your ecommerce business with our shipping solutions",
  btncontact_us: "Contact Us",
  btnorder_track: "Track your Order",
};

export default function FooterStrip() {
  return (
    <>
      <section className="strip_after">
        <div className="max_container position_index">
          <div className="bg_primary footer_strip fadeIn">
            <div className="d_flex flex_wrap items_center justify_between w-sm100">
              <div className="text_white w-sm100">
                <h3
                  className="mb-10"
                  dangerouslySetInnerHTML={{ __html: `${stripdata.heading}` }}
                ></h3>
                <p className="text_white">{stripdata.discription}</p>
              </div>
              <div className="btn_group w-sm100 w-md100 mt-30">
                <Link
                  href="/contact-us"
                  className="btn btn_secondry border_radius2 w-full"
                >
                  {stripdata.btncontact_us}
                </Link>{" "}
                <Link
                  href="/tracking"
                  className="btn btn_default border_radius2 w-full"
                >
                  {stripdata.btnorder_track}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
