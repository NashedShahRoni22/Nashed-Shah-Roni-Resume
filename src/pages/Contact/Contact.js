import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import {
  FaMap,
  FaVoicemail,
  FaPhoneSquare,
  FaLocationArrow,
} from "react-icons/fa";
import { toast } from "react-hot-toast";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x5b6iik', 'template_p003lfa', form.current, 'T7Rbwdh-wnhQbFFMU')
      .then((result) => {
          console.log(result.text);
          toast.success("Message Sent Successfully!");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="mx-10 text-white">
      <h1 className="text-4xl text-center font-bold tracking-widest">
        GET IN <span className="text-[#EB4A4C]">TOUCH</span>
      </h1>
      <div className="lg:flex gap-16">
        <div className="my-20 lg:w-1/2">
          <h3 className="text-3xl font-semibold">
            <span className="text-[#EB4A4C]">DON'T</span> BE SHY !
          </h3>
          <div className="bg-[#EB4A4C] w-full h-1 mt-4"></div>
          <p className="my-5">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="flex items-center gap-4 my-8">
            <div>
              <FaMap className="text-3xl"></FaMap>
            </div>
            <div>
              <p className="text-xl text-[#EB4A4C] font-semibold">
                ADDRESS POINT
              </p>
              <p>543, High Dream Palace, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-8">
            <div>
              <FaVoicemail className="text-3xl"></FaVoicemail>
            </div>
            <div>
              <p className="text-xl text-[#EB4A4C] font-semibold">MAIL ME</p>
              <p>nashedshah.2016@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 my-8">
            <div>
              <FaPhoneSquare className="text-3xl"></FaPhoneSquare>
            </div>
            <div>
              <p className="text-xl text-[#EB4A4C] font-semibold">CALL ME</p>
              <p>+880-1318214398</p>
            </div>
          </div>
        </div>
        <div className="my-20 lg:w-1/2">
          <h3 className="text-3xl font-semibold">
            LEFT AN <span className="text-[#EB4A4C]">EMAIL</span>
          </h3>
          <div className="bg-[#EB4A4C] w-full h-1 my-4"></div>

          {/* form start here */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              className="input input-bordered w-full my-3 rounded-xl p-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              className="input input-bordered w-full my-3 rounded-xl p-2"
            />
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              className="input input-bordered w-full my-3 rounded-xl h-36 p-2"
            />
            <br />
            <button className="btn bg-[#EB4A4C] text-white hover:bg-transparent rounded-xl">
              <FaLocationArrow className="mr-4" /> Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
