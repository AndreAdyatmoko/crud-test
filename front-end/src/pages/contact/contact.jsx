import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Contact = () => {
  return (
    <div className="bg-customBg2 text-gray-900 flex flex-col min-h-screen py-16">
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-screen-lg flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 text-3xl font-libre text-white">
            <div className="py-8">
              <p className="text-base font-sans text-teal-300">Contact Us</p>
            </div>
            <div>
              <p className="text-4xl sm:xl font-sans max-w-full">
                Get in touchwith our team
              </p>
            </div>
            <div className="py-4">
              <p className="text-sm py-4 font-sans text-zinc-400 hover:text-white">
                Have questions? We would love to hear from you. Please fill out
                the form below, and one of our team members will get back to you
                as soon as possible.
              </p>
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-2 rounded-xl text-lg bg-gray-800 text-white focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-2 rounded-xl text-lg bg-gray-800 text-white focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="p-2 rounded-xl text-lg bg-gray-800 text-white focus:outline-none"
                ></textarea>
                <button className="flex items-center gap-2 text-black bg-white rounded-full focus:outline-none font-freeman hover:text-teal-300 px-4 py-2">
                  <IoIosArrowDroprightCircle />
                  <p className="text-xs font-sans text-center">Send Message</p>
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex py-24">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.916060491735!2d-122.08424928469597!3d37.42206597982515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0b4d635afbf%3A0x34c55e555d0f4ec9!2sGoogleplex!5e0!3m2!1sen!2sus!4v1646323083083!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
