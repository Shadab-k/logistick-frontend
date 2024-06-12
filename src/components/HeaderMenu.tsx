"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const HeaderMenu: React.FC = () => {
  const pathname = usePathname();
  const [dropdownActive, setDropdownActive] = useState<{ [key: string]: boolean }>({});
  const [navMenuActive, setNavMenuActive] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHamburgerToggle = () => {
    setNavMenuActive((prev) => !prev);
    if (!navMenuActive) {
      document.body.classList.add('overlay-active');
    } else {
      document.body.classList.remove('overlay-active');
    }
  };

  const handleLinkClick = () => {
    setNavMenuActive(false);
    document.body.classList.remove('overlay-active');
  };


  return (
    <>
      <header id="nav-menu" aria-label="navigation bar" className={isScrolled ? 'scrolled scrollUp' : ''}>
        <div className="max_container header_container">
          <div className='header_menu'>
            <Link onClick={handleLinkClick} className={`logo ${pathname === '/home' ? 'activeLink' : ''}`} href="/home">
              <Image src={'/assets/images/logo.svg'} width={'200'} height={'40'} alt="XpressMiles Logo" />
            </Link>
            <div className="nav-start">
              <nav className={`menu ${navMenuActive ? 'show' : ''}`}>
                <ul className="menu-bar">
                  <li className={pathname === '/home' ? 'activeLink' : ''}>
                    <span className="navicon icon-home1"></span>
                    <Link className="nav-link" href="/home"   >Home</Link>
                  </li>
                  <li className={pathname === '/about-us' ? 'activeLink' : ''}>
                    <span className="navicon icon-about_us"></span>
                    <Link className="nav-link" href="/about-us" onClick={handleLinkClick}>About Us</Link>
                  </li>
                  <li className={pathname === '/tracking' ? 'activeLink' : ''}>
                    <span className="navicon icon-tracking"></span>
                    <Link className="nav-link" href="/tracking" onClick={handleLinkClick}>Tracking</Link>
                  </li>
                  <li className={pathname === '/faq' ? 'activeLink' : ''}>
                    <span className="navicon icon-faq"></span>
                    <Link className="nav-link" href="/faq" onClick={handleLinkClick}>FAQs</Link>
                  </li>
                  <li className={pathname === '/contact-us' ? 'activeLink' : ''}>
                    <span className="navicon icon-contact_us"></span>
                    <Link className="nav-link" href="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nav-end">
              <div className="right-container contact_no">
                <a href="tel:0124 481 1144">
                  <span className="circle_bg icon-phone-call"></span>
                  <p>Contact
                    <strong>0124 481 1144</strong></p>
                </a>
                <Link href='' className="btn btn_primary border_radius2">Get In Touch</Link>
              </div>
              <button
                id="hamburger"
                aria-label="hamburger"
                aria-haspopup="true"
                aria-expanded={navMenuActive ? "true" : "false"}
                onClick={handleHamburgerToggle}
              >
                <span className="line_bar"></span>
                <span className="line_bar"></span>
                <span className="line_bar"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMenu;
