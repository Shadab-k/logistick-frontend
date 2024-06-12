"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const banner_data = {
  heading:
    '<span>Empowering</span> Businesses Elevating <span>L<span class="symbole_img"></span>gistics.</span>',
  discription:
    "Your Gateway to Seamless Shipping Solutions. Where Efficiency Meets Reliability, and Every Parcel Tells a Story of Excellence. Unleash the Power of Hassle-Free Deliveries with Optnship Logistics!",
  btngetintouch: "Get In Touch",
  btntracker: "Track Your Order",
  btncontact: "Contact Us",
};
export default function HomeBanner() {
  // const handleContactLinkClick = (path: string) => {

  useEffect(() => {
    const handleScroll = () => {
      const truck = document.querySelector(".truck") as HTMLElement;
      const hero_img = document.querySelector(".hero_img") as HTMLElement;
      const scrolled = window.scrollY;

      if (truck) {
        truck.style.transform = `translateX(${scrolled * 0.2}px)`;
      }

      if (hero_img) {
        if (scrolled > 0) {
          hero_img.style.transform = `translateY(${(scrolled - 100) * 0.55}px)`;
        } else {
          hero_img.style.transform = "translateY(0)";
        }
      }
    };

    const handleResize = () => {
      const hero_img = document.querySelector(".hero_img") as HTMLElement;
      const isMobile = window.innerWidth <= 768;

      if (isMobile && hero_img) {
        hero_img.style.transform = "translateY(0)"; // Reset transform for mobile devices
        window.removeEventListener("scroll", handleScroll); // Remove scroll event for mobile
      } else {
        window.addEventListener("scroll", handleScroll); // Add scroll event for desktop
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on component mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section className="hero_banner">
        <div className="max_container">
          <div className="d_grid grid50 grid_sm100 column_gap20 justify-between items_center">
            <div className="hero_content fadeIn">
              <h2
                className="text_secondry"
                dangerouslySetInnerHTML={{ __html: `${banner_data.heading}` }}
              ></h2>
              <p>{banner_data.discription}</p>
              <div className="d_block mt-30 mb-20">
                <div className="d_flex column_gap10">
                  <Link href="/home" className="btn btn_primary border_radius2">
                    {banner_data.btngetintouch}
                  </Link>
                  <Link
                    href="/tracking"
                    className="btn btn_secondry border_radius2"
                  >
                    {banner_data.btntracker}
                  </Link>
                </div>
              </div>
              <p>
                Contact with us for information{" "}
                <Link href="/contact-us" className="text_primary">
                  {banner_data.btncontact}
                </Link>{" "}
              </p>
            </div>
            <div className="hero_img fadeIn">
              <div className="w-full">
                <Image
                  className="w-full h-auto"
                  src={"/assets/images/hero_img.svg"}
                  height={600}
                  width={700}
                  alt="hero_banner"
                />
              </div>
            </div>
          </div>
          <div className="turn_runner fadeIn">
            <Image
              src={"/assets/images/line_decore.svg"}
              alt="line"
              width={600}
              height={300}
            />
            <span className="truck">
              <Image
                src={"/assets/images/truck_img.svg"}
                alt="truck"
                width={150}
                height={50}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
