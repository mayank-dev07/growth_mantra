"use client";
import React from "react";
import { Form } from "antd";
import { ArrowRight } from "lucide-react";
const ContactForm = () => {
  const [form] = Form.useForm();
  return (
    <>
      <section className="bg-[#E74C3C] md:px-10 px-3 py-3 w-full">
        <h2 className="text-6xl font-extrabold text-white "> Inquiry Form</h2>
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
                  Name
                </span>
              }
              name="name"
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
                  Phone No
                </span>
              }
              name="phone"
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
                  Work Email
                </span>
              }
              name="name"
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
              name="phone"
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
                  Company&nbsp;Website
                </span>
              }
              name="name"
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
              name="name"
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
              name="challenge"
              style={{ padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 ">
                {[
                  "Defining Growth Strategy",
                  "Entering New Markets",
                  "Scaling Operations",
                  "Improving Product-Market Fit",
                  "Enhancing Brand Positioning",
                  "Other",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="checkbox"
                      id={`checkbox-${index}`}
                    />

                    <svg
                      className="peer-checked:opacity-100 opacity-20"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_258_23863)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="font-semibold text-white"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </Form.Item>

            <input
              placeholder="Specify other Business challenge"
              className="md:w-1/2  border-b-2 py-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]"
            />
          </div>
          <div className="my-5">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Consulting Areas of Interest
                </span>
              }
              name="challenge"
              style={{ padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <div className="flex flex-col md:flex-row gap-y-5 gap-x-10 ">
                {[
                  "Strategy & Planning",
                  "User Persona Identification",
                  "Go-to-Market Strategy",
                  "Brand Solutions",
                  "Growth Marketing",
                  "Product Growth",
                  "Other",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="checkbox"
                      id={`checkbox-${index}`}
                    />

                    <svg
                      className="peer-checked:opacity-100 opacity-20"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_258_23863)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="font-semibold text-white"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </Form.Item>
          </div>
          <div className="flex flex-wrap gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Brief Description of Your Situation
                </span>
              }
              name="name"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none focus:border-[#435a22]" />
            </Form.Item>
          </div>
          <div className="my-5">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  How Soon Are You Looking to Engage a Us?
                </span>
              }
              name="challenge"
              style={{ padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <div className="flex gap-x-4 md:gap-x-10 ">
                {[
                  "Immediate [Less than 15 days]",
                  "Within 30 Days",
                  "Just exploring for now",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="checkbox"
                      id={`checkbox-${index}`}
                    />

                    <svg
                      className="peer-checked:opacity-100 opacity-20"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_258_23863)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
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
                    <label
                      htmlFor={`checkbox-${index}`}
                      className="font-semibold text-white"
                    >
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </Form.Item>
          </div>
          <Form.Item>
            <button className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base  text-[#E74C3C] bg-white hover:text-white hover:bg-[#E74C3C] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out">
              Book Your Free Strategy Session
              <div className="p-2  bg-[#E74C3C] rounded-full text-white group-hover:text-[#E74C3C] group-hover:bg-white transition-all duration-300 ease-in-out">
                <ArrowRight />
              </div>
            </button>
          </Form.Item>
        </Form>
      </section>
    </>
  );
};

export default ContactForm;
