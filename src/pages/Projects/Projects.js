import React from "react";
import project1 from "../../images/chitromaya/portofolio-chitromaya (1).jpg";
import project2 from "../../images/chitromaya/portofolio-chitromaya (2).png";
import project3 from "../../images/chitromaya/portofolio-chitromaya (3).png";
import project4 from "../../images/chitromaya/portofolio-chitromaya (4).png";

import mobileBechi1 from "../../images/mobilebechi/Mobile-Bechi.jpg";
import mobileBechi2 from "../../images/mobilebechi/Mobile-Bechi-Admin.png";
import mobileBechi3 from "../../images/mobilebechi/Mobile-Bechi-Buyer.png";
import mobileBechi4 from "../../images/mobilebechi/Mobile-Bechi-Seller.png";

import learnwithfun1 from "../../images/learnwithfun/learn-with-fun (1).png";
import learnwithfun2 from "../../images/learnwithfun/learn-with-fun (2).png";
import learnwithfun3 from "../../images/learnwithfun/learn-with-fun (3).png";
import learnwithfun4 from "../../images/learnwithfun/learn-with-fun (4).png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Projects = () => {
  return (
    <section className="text-white">
      <section className="mx-5 mt-5 mb-20">
        <h1 className="text-3xl font-bold tracking-widest">
          <span className="text-sky-500">MY</span> Projcets
        </h1>
        <div className="bg-sky-500 w-full h-1 mt-4"></div>
        <div className="mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:col-span-1 w-full">
              <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                  <img src={project1} alt={"title"} />
                </div>
                <div>
                  <img src={project2} alt={"title"} />
                </div>
                <div>
                  <img src={project3} alt={"title"} />
                </div>
                <div>
                  <img src={project4} alt={"title"} />
                </div>
              </Carousel>
            </div>

            <div className="lg:col-span-1 w-full text-left">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Chitromaya</h1>
                <p className="text-white text-sm">(Nov 12 - Nov -27)/2022</p>
              </div>
              <p className="text-white my-3"></p>
              <div className="my-5 flex items-center gap-5">
                <a
                  href="https://chitromaya-7e217.web.app/"
                  className="text-white btn text-center bg-sky-500 py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Chitromaya-Client-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Client Side
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Chitromaya-Server-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Server Side
                </a>
              </div>
              <ul className="text-white my-4 flex flex-col gap-3">
                <li>
                  <p>
                    1. This is an application where user will find several
                    photography services for their different programs.
                  </p>
                </li>
                <li>
                  <p>
                    2. User can review any services available in chitromaya. But
                    before reviewing they must have to register themselves in
                    Chitromaya.
                  </p>
                </li>
                <li>
                  <p>
                    3. User will find their previously added review and also
                    already added review in any services by other users.
                  </p>
                </li>
                <li>
                  <p>
                    4. There is also role for admin who can add new services in
                    the website.
                  </p>
                </li>
              </ul>
              <h2 className="text-white font-bold  uppercase">Technology</h2>
              <div className="mt-5">
                <ul className="flex flex-wrap gap-5">
                  <li className="glass px-3 border-white rounded text-sm">
                    React JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Tailwind CSS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Node JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Express JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    MongoDB
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Firebase
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    JWT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:col-span-1 w-full">
              <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                  <img src={mobileBechi1} alt={"title"} />
                </div>
                <div>
                  <img src={mobileBechi2} alt={"title"} />
                </div>
                <div>
                  <img src={mobileBechi3} alt={"title"} />
                </div>
                <div>
                  <img src={mobileBechi4} alt={"title"} />
                </div>
              </Carousel>
            </div>
            <div className="lg:col-span-1 w-full text-left">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">Mobile Bechi</h1>
                <p className="text-white text-sm">(Dec 11 - Dec -17)/2022</p>
              </div>
              <p className="text-white my-3"></p>
              <div className="my-5 flex items-center gap-5">
                <a
                  href="https://mobile-bechi.web.app/"
                  className="text-white btn text-center bg-sky-500 py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Mobile-Bechi-Client-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Client Side
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Mobile-Bechi-Server-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Server Side
                </a>
              </div>
              <ul className="text-white my-4 flex flex-col gap-3">
                <li>
                  <p>
                    1. Mobile Bechi is a used mobile re selling market place.
                    User and buy or sell their used android,apple or feature
                    mobile phone.
                  </p>
                </li>
                <li>
                  <p>
                    2. Users can be registered as an seller or buyer using
                    firebase authentication of google authorization.
                  </p>
                </li>
                <li>
                  <p>
                    3. Buyers will find different products added by different
                    sellers. They can add product in their wishlist and also can
                    report any product.
                  </p>
                </li>
                <li>
                  <p>
                    4. Buyer can buy any product using stripe payment gateway.
                    One item can not be book or buy for second time. Buyer can
                    remove a pre-booked item also.
                  </p>
                </li>
                <li>
                  <p>
                    5. Seller can add their product according to categorey. They
                    can farther update or remove their product. Buyer can
                    advertise their product for placing in landing page also.
                  </p>
                </li>
                <li>
                  <p>
                    5. The big role is for admin. Admin can verify any seller.
                    He have right to observe all the buyer and seller and can
                    remove them from the application.
                  </p>
                </li>
              </ul>
              <h2 className="text-white font-bold  uppercase">Technology</h2>
              <div className="mt-5">
                <ul className="flex flex-wrap gap-5">
                  <li className="glass px-3 border-white rounded text-sm">
                    React JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Tailwind CSS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Node JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Express JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    MongoDB
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Firebase
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Stripe
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    JWT
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="lg:col-span-1 w-full">
              <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                  <img src={learnwithfun1} alt={"title"} />
                </div>
                <div>
                  <img src={learnwithfun2} alt={"title"} />
                </div>
                <div>
                  <img src={learnwithfun3} alt={"title"} />
                </div>
                <div>
                  <img src={learnwithfun4} alt={"title"} />
                </div>
              </Carousel>
            </div>
            <div className="lg:col-span-1 w-full text-left">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-white">
                  Learn With Fun
                </h1>
                <p className="text-white text-sm">(Oct 11 - Oct -17)/2022</p>
              </div>
              <p className="text-white my-3"></p>
              <div className="my-5 flex items-center gap-5">
                <a
                  href="https://learn-with-fun-6ce4e.web.app/"
                  className="text-white btn text-center bg-sky-500 py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Website
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Learn-With-Fun-Client-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Client Side
                </a>
                <a
                  href={
                    "https://github.com/NashedShahRoni22/Learn-With-Fun-Server-Side-"
                  }
                  className="text-white btn bg-transparent text-center hover:bg-white hover:text-black py-2 rounded  uppercase text-xs px-5 "
                  target="_blank"
                  rel="noreferrer"
                >
                  Server Side
                </a>
              </div>
              <ul className="text-white my-4 flex flex-col gap-3">
                <li>
                  <p>
                    1. Learn with Fun is a learning platform for web development
                    learners. User can find diffrent courses related web
                    development.
                  </p>
                </li>
                <li>
                  <p>
                    2. User can have premium access in their desire course by
                    registering themselves using email and password or third
                    party authentication like google, github or facebook.
                  </p>
                </li>
                <li>
                  <p>3. User can download the course details as pdf also.</p>
                </li>
              </ul>
              <h2 className="text-white font-bold  uppercase">Technology</h2>
              <div className="mt-5">
                <ul className="flex flex-wrap gap-5">
                  <li className="glass px-3 border-white rounded text-sm">
                    React JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Bootstrap
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Node JS
                  </li>
                  <li className="glass px-3 border-white rounded text-sm">
                    Express JS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Projects;
