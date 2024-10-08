"use client";
import React from "react";
import { Form } from "antd";
import { ArrowRight } from "lucide-react";
const ContactForm = () => {
  const [form] = Form.useForm();
  return (
    <>
      <section className="bg-[#16213E] md:px-10 px-3 py-3 w-full">
        <p className="text-white my-1 text-lg">
          Tell us about your business challenges, and We&apos;ll prepare
          tailored insights
          <br /> for our initial discussion.
        </p>

        <Form form={form} layout="vertical" className="py-5 px-4 rounded-lg ">
          <div className="flex gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Full Name
                </span>
              }
              name="user_name"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter name"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Phone Number
                </span>
              }
              name="user_phone"
              style={{ width: "48%" }}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter phone no."
              />
            </Form.Item>
          </div>
          <div className="flex gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Work Email Address
                </span>
              }
              name="user_email"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter Email"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Company&nbsp;Name
                </span>
              }
              name="user_companyname"
              style={{ width: "48%" }}
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <input className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]" />
            </Form.Item>
          </div>
          <div className="flex  gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Website&nbsp;URL
                </span>
              }
              name="user_companywebsite"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter Company website"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Designation
                </span>
              }
              name="user_designation"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter Designation"
              />
            </Form.Item>
          </div>

          <div>
          <Form.Item
  label={
    <span className="text-white text-sm md:text-lg font-bold">
      Primary Business Challenge
    </span>
  }
  name="index_challenge"
  style={{ padding: "0px", margin: "0px" }}
  rules={[
    {
      required: true,
      message: "Please select one challenge",
    },
  ]}
>
  <div className="flex flex-col md:flex-row flex-wrap gap-5">
    {[
      "Customer Acquisition Strategies",
      "Retention Strategies",
      "Funnel Optimization",
      "CRM Growth",
      "Conversion Rate Optimization (CRO)",
      "Brand Strategy & Positioning",
      "Go-to-Market Strategy",
      "Product Growth & Market Fit",
      "SEO Strategy",
      "Other (Please specify below)",
    ].map((item, index) => (
      <label
        key={index}
        htmlFor={`radio-${index}`} // Label wraps everything, making the whole div clickable
        className="flex items-center gap-2 cursor-pointer" // Added cursor-pointer for better UX
      >
        <input
          className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
          type="radio" // Changed to radio for single-select
          id={`radio-${index}`}
          name="challenge" // Name is the same for all, making them mutually exclusive
          value={item}
        />

        <svg
          className="peer-checked:opacity-100 opacity-20"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_258_23863)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 10.8711C0 8.08632 1.15893 5.4156 3.22183 3.44647C5.28473 1.47734 8.08262 0.371094 11 0.371094C13.9174 0.371094 16.7153 1.47734 18.7782 3.44647C20.8411 5.4156 22 8.08632 22 10.8711C22 13.6559 20.8411 16.3266 18.7782 18.2957C16.7153 20.2648 13.9174 21.3711 11 21.3711C8.08262 21.3711 5.28473 20.2648 3.22183 18.2957C1.15893 16.3266 0 13.6559 0 10.8711H0ZM10.3723 15.3651L16.7053 7.80789L15.5613 6.93429L10.1611 13.3757L6.336 10.3335L5.39733 11.4087L10.3723 15.3665V15.3651Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_258_23863">
              <rect
                width="22"
                height="21"
                fill="white"
                transform="translate(0 0.371094)"
              />
            </clipPath>
          </defs>
        </svg>

        <span className="font-semibold text-white">{item}</span>
      </label>
    ))}
  </div>
</Form.Item>



            <input
              placeholder="Specify other Business challenge"
              className="md:w-1/2 border-b-2 py-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
            />
          </div>
          <div className="my-5">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Your Growth Focus
                </span>
              }
              name="interest"
              style={{ padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please select an interest" }]}
            >
              <div className="flex flex-col md:flex-row gap-y-5 gap-x-10">
                {[
                  "Acquisition Growth",
                  "Retention Growth",
                  "Conversion Optimization",
                  "Branding & Messaging",
                  "Sales Growth",
                  "Other (custom entry)",

                ].map((item, x) => (
                  <label
                    key={x}
                    htmlFor={`radio-interest-${x}`} // Label wraps everything, making the whole div clickable
                    className="flex items-center gap-2 cursor-pointer" // Added cursor-pointer for better UX
                  >
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="checkbox"
                      id={`radio-interest-${x}`}
                      value={item}
                    />

                    <svg
                      className="peer-checked:opacity-100 opacity-20"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_258_23863)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 10.8711C0 8.08632 1.15893 5.4156 3.22183 3.44647C5.28473 1.47734 8.08262 0.371094 11 0.371094C13.9174 0.371094 16.7153 1.47734 18.7782 3.44647C20.8411 5.4156 22 8.08632 22 10.8711C22 13.6559 20.8411 16.3266 18.7782 18.2957C16.7153 20.2648 13.9174 21.3711 11 21.3711C8.08262 21.3711 5.28473 20.2648 3.22183 18.2957C1.15893 16.3266 0 13.6559 0 10.8711H0ZM10.3723 15.3651L16.7053 7.80789L15.5613 6.93429L10.1611 13.3757L6.336 10.3335L5.39733 11.4087L10.3723 15.3665V15.3651Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_258_23863">
                          <rect
                            width="22"
                            height="21"
                            fill="white"
                            transform="translate(0 0.371094)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-semibold text-white">{item}</span>
                  </label>
                ))}
              </div>
            </Form.Item>
            <input
              placeholder="Specify other Consulting Area of Interest"
              className="md:w-1/2 border-b-2 py-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
            />
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Problem Statement Brief
                </span>
              }
              name="situation"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please enter your situation" },
              ]}
            >
              <input
                className="w-full border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
                placeholder="Enter Brief Description"
              />
            </Form.Item>
          </div>
          <div className="my-5">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  How Soon Are You Looking to Engage with Us?
                </span>
              }
              name="engage_time"
              style={{ padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please select an engagement time" },
              ]}
            >
              <div className="flex gap-x-4 md:gap-x-10">
                {[
                  "Immediate [Less than 15 days]",
                  "Within 30 Days",
                  "Just exploring for now",
                ].map((item, y) => (
                  <label
                    key={y}
                    htmlFor={`radio-engage-${y}`}
                    className="flex items-center gap-2 cursor-pointer" // Label wraps everything, making the whole div clickable
                  >
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="radio"
                      name="engage_time" // Group the radios together by name
                      id={`radio-engage-${y}`}
                      value={item} // Set value for form submission
                    />

                    <svg
                      className="peer-checked:opacity-100 opacity-20"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_258_23863)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 10.8711C0 8.08632 1.15893 5.4156 3.22183 3.44647C5.28473 1.47734 8.08262 0.371094 11 0.371094C13.9174 0.371094 16.7153 1.47734 18.7782 3.44647C20.8411 5.4156 22 8.08632 22 10.8711C22 13.6559 20.8411 16.3266 18.7782 18.2957C16.7153 20.2648 13.9174 21.3711 11 21.3711C8.08262 21.3711 5.28473 20.2648 3.22183 18.2957C1.15893 16.3266 0 13.6559 0 10.8711H0ZM10.3723 15.3651L16.7053 7.80789L15.5613 6.93429L10.1611 13.3757L6.336 10.3335L5.39733 11.4087L10.3723 15.3665V15.3651Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_258_23863">
                          <rect
                            width="22"
                            height="21"
                            fill="white"
                            transform="translate(0 0.371094)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <span className="font-semibold text-white">{item}</span>
                  </label>
                ))}
              </div>
            </Form.Item>
            <div className="my-5">
              <Form.Item
                label={
                  <span className="text-white text-sm md:text-lg font-bold">
                    How Did You Hear About Us?
                  </span>
                }
                name="hear_about"
                style={{ padding: "0px", margin: "0px" }}
                rules={[{ required: true, message: "Please select from the options" }]}
              >
                <select
                  className="lg:w-[20%] sm:w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="Referral">Referral</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Search Engine">Search Engine</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </Form.Item>
            </div>

            <br />
            <div className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
              Request Consultation
              <div className="p-2  bg-white rounded-full text-black group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
                <ArrowRight />
              </div>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
};

export default ContactForm;
