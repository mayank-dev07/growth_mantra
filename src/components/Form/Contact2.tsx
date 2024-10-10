"use client";
import React, { useState } from "react";
import { Form } from "antd";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [growthFocus, setGrowthFocus] = useState<string[]>([]);
  const [otherOption, setOtherOption] = useState<string>("");
  const [otherChallenge, setOtherChallenge] = useState<string>("");
  const [selectedChallenge, setSelectedChallenge] = useState<string>("");

  const handleGrowthFocusChange = (value: string) => {
    if (value === "Other (Please specify below)") {
      if (!growthFocus.includes(value)) {
        setGrowthFocus((prev) => [...prev, value]);
      }
    } else {
      setGrowthFocus((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value]
      );

      if (growthFocus.includes("Other (Please specify below)")) {
        setOtherOption("");
      }
    }

    if (growthFocus.length > 0 && value !== "Other (Please specify below)") {
      if (growthFocus.includes("Other (Please specify below)")) {
        setGrowthFocus((prev) => [
          ...prev.filter((item) => item !== "Other (Please specify below)"),
          otherOption,
        ]);
      }
    }
  };

  const handleChallengeChange = (value: string) => {
    if (value === "Other (Please specify below)") {
      setSelectedChallenge(value);
    } else {
      setSelectedChallenge(value);
    }

    if (selectedChallenge === "Other (Please specify below)") {
      setOtherChallenge("");
    }
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherOption(e.target.value);
  };

  const handleOtherChallenge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtherChallenge(e.target.value);
  };

  const handleSubmit = async () => {
    const url =
      "https://script.google.com/macros/s/AKfycbxY0SDqQ63RkXgF8L7MLH3uCHMM3SecOMz310ztVknk0vsENLcnnBfgHNplSg2Xrm8z1g/exec";

    try {
      const values = await form.validateFields();

      const formData = {
        ...values,
        primaryBusinessChallenge:
          selectedChallenge === "Other (Please specify below)"
            ? otherChallenge
            : selectedChallenge,
        growthFocus: growthFocus.includes("Other (Please specify below)")
          ? [
              ...growthFocus.filter(
                (item) => item !== "Other (Please specify below)"
              ),
              otherOption,
            ]
          : growthFocus,
      };

      console.log("Form Data:", formData);

      const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.result === "success") {
        alert("Data submitted successfully!");
        setGrowthFocus([]);
        setOtherOption("");
        setOtherChallenge("");
        setSelectedChallenge("");
        form.resetFields();
      } else {
        alert("Error: " + result.error);
      }
    } catch (errorInfo) {
      console.error("Validation Failed:", errorInfo);
    }
  };
  return (
    <>
      <section className="bg-[#16213E] md:px-10 px-3 py-3 w-full">
        <p className="text-white my-1 text-lg">
          {`Tell us about your growth challenges, and we'll recommend the best`}
          <br />
          services for your needs.
        </p>

        <Form
          form={form}
          layout="vertical"
          className="py-5 px-4 rounded-lg "
          onFinish={handleSubmit}
        >
          <div className="flex gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Full Name
                </span>
              }
              name="name"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                placeholder="Enter name"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Phone Number
                </span>
              }
              name="phoneNo"
              style={{ width: "48%" }}
              rules={[
                { required: true, message: "Please enter your number" },
                {
                  pattern: /^[0-9]{10}$/,
                  message: "Please enter a valid 10-digit phone number",
                },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                placeholder="Enter phone no."
              />
            </Form.Item>
          </div>
          <div className="flex gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Work&nbsp;Email&nbsp;Address
                </span>
              }
              name="email"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please enter your work email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                placeholder="Enter Email"
              />
            </Form.Item>

            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Company&nbsp;Name
                </span>
              }
              name="companyName"
              style={{ width: "48%" }}
              rules={[
                { required: true, message: "Please enter your company name" },
                {
                  type: "string",
                  message: "Please enter a valid company name",
                },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                placeholder="Enter company name"
              />
            </Form.Item>
          </div>
          <div className="flex  gap-4 mb-4">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Website&nbsp;URL
                </span>
              }
              name="companyWebsite"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please enter your website url" },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                placeholder="Enter Company website"
              />
            </Form.Item>
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Designation
                </span>
              }
              name="designation"
              style={{ width: "48%", padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please enter your Designation" },
              ]}
            >
              <input
                className="w-full  border-b-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
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
              name="primaryBusinessChallenge"
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
                  "Conversion Rate Optimization (CRO)",
                  "Brand Strategy & Positioning",
                  "Product Growth & Market Fit",
                  "Go-to-Market Strategy",
                  "Retention Strategies",
                  "Funnel Optimization",
                  "CRM Growth",
                  "SEO Strategy",
                  "Other (Please specify below)",
                ].map((item, index) => (
                  <label
                    key={index}
                    htmlFor={`radio-${index}`}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="radio"
                      id={`radio-${index}`}
                      name="engagementTimeline"
                      value={item}
                      onChange={() => handleChallengeChange(item)}
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

            {selectedChallenge === "Other (Please specify below)" && (
              <input
                placeholder={`Specify your "Primary Business challenge"`}
                className="w-full md:w-1/2 border-b-2 py-2 border-white bg-transparent text-white placeholder-gray-300 outline-none"
                value={otherChallenge}
                onChange={handleOtherChallenge}
              />
            )}
          </div>
          <div className="my-5">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  Your Growth Focus
                </span>
              }
              name="growthFocus"
              style={{ padding: "0px", margin: "0px" }}
              rules={[{ required: true, message: "Please select an interest" }]}
            >
              <div className="flex flex-col md:flex-row gap-y-5 gap-x-5">
                {[
                  "Strategy & Planning",
                  "User Persona Identification",
                  "Go-to-Market Strategy",
                  "Brand Solutions",
                  "Growth Marketing",
                  "Product Growth",
                  "Other (Please specify below)",
                ].map((item, index) => (
                  <label
                    key={index}
                    htmlFor={`checkbox-growthFocus-${index}`}
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    <input
                      className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                      type="checkbox"
                      id={`checkbox-growthFocus-${index}`}
                      value={item}
                      checked={growthFocus.includes(item)}
                      onChange={() => handleGrowthFocusChange(item)}
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

              {growthFocus.includes("Other (Please specify below)") && (
                <div className="mt-3">
                  <input
                    placeholder={`Specify your "Growth Focus Area"`}
                    className="w-full md:w-1/2 border-b-2 py-2 border-white bg-transparent text-white placeholder-gray-300 outline-none "
                    value={otherOption}
                    onChange={handleOtherChange}
                  />
                </div>
              )}
            </Form.Item>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-5 gap-10">
            <Form.Item
              label={
                <span className="text-white text-sm md:text-lg font-bold">
                  How Soon Are You Looking to Engage with Us?
                </span>
              }
              name="engagementTimeline"
              style={{ padding: "0px", margin: "0px" }}
              rules={[
                { required: true, message: "Please select an engagement time" },
              ]}
            >
              <div className="flex flex-wrap gap-5 gap-x-4 md:gap-x-10">
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
                      name="engagementTimeline" // Group the radios together by name
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
                name="referralSource"
                style={{ padding: "0px", margin: "0px" }}
                rules={[
                  { required: true, message: "Please select from the options" },
                ]}
              >
                <div className="flex flex-wrap gap-5 gap-x-4 md:gap-x-10">
                  {[
                    "Social Media",
                    "Search Engine",
                    "Advertisement",
                    "Referral",
                    "Other",
                  ].map((item, y) => (
                    <label
                      key={y}
                      htmlFor={`radio-referral-${y}`}
                      className="flex items-center gap-2 cursor-pointer" // Label wraps everything, making the whole div clickable
                    >
                      <input
                        className="peer relative appearance-none shrink-0 w-4 h-4 mt-1 hidden"
                        type="radio"
                        name="referralSource" // Group the radios together by name
                        id={`radio-referral-${y}`}
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
            </div>
            <br />
          </div>

          <div className="w-full flex justify-center items-center">
            <button
              type="submit"
              className="group rounded-full w-fit px-2 pl-4 py-[0.4rem] flex text-sm md:text-base text-white bg-[#16213E] hover:bg-white hover:text-[#16213E] border-[1px] shadow-xl tracking-wider items-center gap-4 cursor-pointer transition-all duration-500 ease-in-out"
            >
              Schedule a call
              <div className="p-2 bg-white rounded-full text-black group-hover:bg-[#16213E] group-hover:text-white transition-all duration-300 ease-in-out">
                <ArrowRight />
              </div>
            </button>
          </div>
        </Form>
      </section>
    </>
  );
};

export default ContactForm;
