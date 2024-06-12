"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function ContactUs() {
  const navigate = useRouter();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const handleOnChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear the error when the user starts typing again
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    const apiContactUrl = process.env.NEXT_PUBLIC_API_URL;
    e.preventDefault();
    let hasError = false;
    // Frontend validation
    if (!credentials.name) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot be blank",
      }));
      hasError = true;
    } else if (!/^[a-zA-Z\s]+$/.test(credentials.name)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name must contain only letters",
      }));
      hasError = true;
    }
    if (!credentials.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email cannot be blank",
      }));
      hasError = true;
    } else if (!/^\S+@\S+\.\S+(?<!\d)$/.test(credentials.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is invalid",
      }));
      hasError = true;
    }
    if (!credentials.phone) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone cannot be blank",
      }));
      hasError = true;
    }
    // else if (!/^\d{10}$/.test(credentials.phone)) {
    //   setErrors((prevErrors) => ({
    //     ...prevErrors,
    //     phone: "Phone must be exactly 10 digits",
    //   }));
    //   hasError = true;
    // }
    else if (!/^\d{10}$/.test(credentials.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must be exactly 10 digits",
      }));
      hasError = true;
    }

    if (!/^\d+$/.test(credentials.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must contain only numeric values",
      }));
      hasError = true;
    }

    if (credentials.phone.startsWith("+")) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone must not start with + sign",
      }));
      hasError = true;
    }
   

    if (/^0/.test(credentials.phone)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        phone: "Phone cannot start with zero",
      }));
      hasError = true;
    }

    if (!credentials.company) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        company: "Company Name cannot be blank",
      }));
      hasError = true;
    }
    if (/\d/.test(credentials.company)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        company: "Company Name must not contain numbers",
      }));
      hasError = true;
    }

    if (!credentials.message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message cannot be blank",
      }));
      hasError = true;
    }

    if (hasError) {
      return; // Exit early if there are validation errors
    }

    try {
      const response = await fetch(`${apiContactUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        // Handle success
        setShowModal(true);
        navigate.push("/thankyou");
        setCredentials({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        // alert("Contact information submitted successfully");
      } else {
        alert("Failed to submit contact information");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect hook to automatically hide modal after 5 seconds
  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [showModal]);

  return (
    <>
      <section className="common_sec_gap contact_area border_t">
        <div className="max_container">
          <div className="d_grid grid50 grid_sm100 justify-between items_center bg_light_grey border_radius30">
            <div className="contact_detail bg_primary">
              <div className="w-full h-full">
                <div>
                  <span className="tag">Contact us</span>
                </div>
                <div className="heading_title mt-20">
                  <div className="heading_title">
                    <h2 className="text_white">
                      Contact us to request a quote today.
                    </h2>
                  </div>
                </div>
                <div className="mt-20">
                  <div className="tag_list">
                    <span>Email</span>
                    <p>
                      <a href="mailto:contact@xpressmiles.com">
                        contact@xpressmiles.com
                      </a>
                    </p>
                  </div>
                  <div className="tag_list">
                    <span>Email</span>
                    <p>
                      <a href="tel:01244811144">0124 481 1144</a>
                    </p>
                  </div>
                  <div className="tag_list">
                    <span>Address</span>
                    <p>
                      Plot No.- 404-405, Phase III, Udyog Vihar III, Sector 20,
                      Gurugram, Haryana 122016
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <form onSubmit={handleSubmit}>
                <div className="contact_form">
                  <div className="d_grid grid50 column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={credentials.name}
                        onChange={handleOnChange}
                        maxLength={20}
                        id=""
                        className="input_field"
                        placeholder="Enter your name"
                      />
                      {errors.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>
                    <div className="group_lable w-full">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={credentials.email}
                        onChange={handleOnChange}
                        maxLength={100}
                        id=""
                        className="input_field"
                        placeholder="Enter your email"
                      />
                      {errors.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                  </div>
                  <div className="d_grid grid50 column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Phone</label>
                      <input
                        type="text"
                        name="phone"
                        value={credentials.phone}
                        onChange={handleOnChange}
                        id=""
                        maxLength={10}
                        className="input_field"
                        placeholder="Enter your phone"
                      />
                      {errors.phone && (
                        <span className="error">{errors.phone}</span>
                      )}
                    </div>
                    <div className="group_lable w-full">
                      <label>Company</label>
                      <input
                        type="text"
                        name="company"
                        value={credentials.company}
                        maxLength={70}
                        onChange={handleOnChange}
                        id=""
                        className="input_field"
                        placeholder="Enter your company"
                      />
                      {errors.company && (
                        <span className="error">{errors.company}</span>
                      )}
                    </div>
                  </div>
                  <div className="d_grid column_gap20 grid_md100 grid_sm100">
                    <div className="group_lable w-full">
                      <label>Message</label>
                      <textarea
                        rows={8}
                        cols={12}
                        // maxLength={12}
                        name="message"
                        value={credentials.message}
                        onChange={handleOnChange}
                        id=""
                        className="input_field"
                        placeholder="Enter your message"
                      />
                      {errors.message && (
                        <span className="error">{errors.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="d_grid gap15 mt-10">
                    <button className="btn btn_primary btn_block btn_lg border_radius10 w-full">
                      Get In Touch
                    </button>
                  </div>
                </div>
                {showModal && (
                  <div>
                    <div>
                      <p
                        style={{
                          textAlign: "center",
                          color: "blue",
                          fontSize: "16px",
                        }}
                      >
                        Data has been saved successfully{" "}
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <div style={{ width: "100%", height: "100%", position: "relative" }}>
        <div
          id="google-maps-display"
          className="w-full h-full"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <iframe
            className="w-full h-full"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
              margin: 0,
              padding: 0,
              display: "block",
            }}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=Nirvasa+Healthcare+pvt.Ltd+Plot+No.-+404-405,+Phase+III,+Udyog+Vihar+III,+Sector+20,+Gurugram,+Haryana+122016&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>
    </>
  );
}


