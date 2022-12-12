import React from "react";
import {
  FaMap,
  FaVoicemail,
  FaPhoneSquare,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="mx-10">
      <h1 className="text-white text-5xl text-center font-bold tracking-widest">
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
          <form>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full my-3 rounded-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full my-3 rounded-full"
            />
            <input
              type="text"
              placeholder="Message"
              className="input input-bordered w-full my-3 rounded-full"
            />
            <br />
            <button className="btn bg-[#EB4A4C] text-white hover:bg-transparent rounded-3xl">
              <FaLocationArrow className="mr-4" /> Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
