"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const quicklinks_title = {
  title: "Quick Links",
};

const quicklinks = [
  { links: "/home", name: "Home" },
  { links: "/about-us", name: "About Us" },
  { links: "/tracking", name: "Tracking" },
  { links: "/faq", name: "FAQ’s" },
  { links: "/contact-us", name: "Contact Us" },
];

const utility_title = {
  title: "Utility Pages",
};

const utilitylinks = [
  { links: "/privacy-policy", name: "Privacy Policy" },
  { links: "/terms-and-conditions", name: "Terms & Conditions" },
  {
    links: "/refund-and-cancellation-policy",
    name: "Refund & Cancellation Policy",
  },
];

const contactInfo = {
  contactheading: "Contact Info",
  address: "Chicago HQ Estica Cop. Macomb, MI 48042",
  contactNo: "+91 123 456 789",
  headingBig: "We ship worldwide. Ready to ship with us?",
  btnorder_track: "Track Your Order",
};

const socialMedia_title = {
  title: "Follow us on",
};

const socialMedia = [
  { socialmediaLinks: "https://www.facebook.com/", icon: "icon-facebook1" },
  { socialmediaLinks: "https://twitter.com/login", icon: "icon-twitter1" },
  { socialmediaLinks: "https://www.linkedin.com/", icon: "icon-linkedin2" },
  { socialmediaLinks: "https://www.instagram.com/", icon: "icon-instagram" },
];

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="max_container">
          <div className="footer_details">
            <div className="brand_logo fadeIn">
              <Link href="/home">
                <Image
                  className="f_logo"
                  src={"/assets/images/footer_logo.svg"}
                  height={50}
                  width={250}
                  alt="Xpressmiles"
                />
              </Link>
            </div>

            <div className="footer_content grid_md50 grid_xs100 gap20 fadeIn">
              <div className="foter_links fadeIn">
                <h4>{quicklinks_title.title}</h4>
                <ul>
                  {quicklinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.links}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="foter_links fadeIn">
                <h4>{utility_title.title}</h4>
                <ul>
                  {utilitylinks.map((item, index) => (
                    <li key={index}>
                      <Link href={item.links}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="foter_links fadeIn">
                <h4>{contactInfo.contactheading}</h4>
                <ul>
                  <li>
                    <span>
                      <Image
                        src={"/assets/images/icons/pin.svg"}
                        height={25}
                        width={25}
                        alt="pin"
                      />
                    </span>
                    {contactInfo.address}
                  </li>
                  <li>
                    <span>
                      <Image
                        src={"/assets/images/icons/phone_icon.svg"}
                        height={25}
                        width={25}
                        alt="phone"
                      />
                    </span>
                    <a href={`tel:${contactInfo.contactNo}`}>
                      {contactInfo.contactNo}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer_wigide">
                <div className="heading_title">
                  <h2>{contactInfo.headingBig}</h2>
                </div>
                <Link
                  href="/tracking"
                  className="btn btn_primary border_radius2"
                >
                  {contactInfo.btnorder_track}
                </Link>
              </div>
            </div>
            <div className="social_media_links fadeIn">
              <h4>{socialMedia_title.title}</h4>
              <ul>
                {socialMedia.map((item, index) => (
                  <li key={index}>
                    <Link href={item.socialmediaLinks} target="_blank">
                      <span className={item.icon}></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer_bot">
            <p>Copyright 2024 © Xpressmiles Pvt Ltd</p>
          </div>
        </div>
      </footer>
    </>
  );
}
