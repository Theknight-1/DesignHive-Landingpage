"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Landing = () => {
  const headingRef = useRef();
  useGSAP(() => {
    if (!headingRef.current) return;

    gsap.from(headingRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
    gsap.from(headingRef.current.children, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
      stagger: 0.1,
    });
  }, [headingRef]);

  const Circle = () => {
    return <div className="rounded-full w-6 h-6 bg-blue-500 mx-auto"></div>;
  };
  const Pillar = () => {
    return (
      <div className="rounded-full w-2 h-full bg-gradient-to-t from-orange-600 to-indigo-600"></div>
    );
  };
  return (
    <>
      <div className="relative h-screen z-0">
        <section className="flex h-[70%]  w-full mt-28">
          <div className="flex-1 space-y-5">
            <div className="flex w-60 rounded-lg">
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=390583&amp;theme=dark&amp;period=daily"
                alt="Product Video Examples - Learn from the best product videos on the internet | Product Hunt"
                width="250"
                height="54"
              />
            </div>
            <div className="border border-[#ffffff2d] rounded-lg text-[#ffffff2d] mt-5 inline-block">
              <p className="ml-3 mr-2">
                Get inspired & unlock the full potential of video marketing
              </p>
            </div>
            <div className="">
              <h1
                ref={headingRef}
                className="lg:text-[62px] md:text-[50px]  sm:text-[42px] text-[30px] leading-none font-bold text-white"
              >
                Create Landing Page Designs That{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600">
                  {" "}
                  Convert{" "}
                </span>
              </h1>
              <p className="text-gray-400 mt-4 text-lg">
                Learn from more than 100+ hand selected videos of companies that
                create engaging, shareable product Landing Page that not only
                boost brand awareness but also convert customers.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="hidden w-auto lg:block">
                <a
                  href="#"
                  target="_blank"
                  className="relative block px-5 py-2 overflow-hidden text-lg text-white border-2 group font-heading rounded-lg"
                  style={{
                    backgroundImage: "",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 w-full h-full transition duration-500 ease-in-out transform -translate-y-full group-hover:-translate-y-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(to left, #f8721d, #d347ef, #5146e6)",
                    }}
                  ></div>
                  <p className="relative z-10 group-hover:text-white xl:text-[20px]">
                    Get access now of 100+ Landing pages
                  </p>
                </a>
              </div>
              <button className="border px-5 text-sm rounded text-white hover:bg-[#ffffff09]">
                Learn more
              </button>
            </div>
            <div className="-mt-12 lg:max-w-md">
              <div className="flex flex-wrap -m-3">
                <div className="w-auto px-3 pt-5">
                  <img
                    className="rounded-lg w-14 h-14"
                    src="https://avatars.githubusercontent.com/u/1665273?v=4"
                    alt=""
                  />
                </div>
                <div className="flex-1 p-3">
                  <p className="mb-4 text-sm text-gray-500">
                    <span className="font-serif text-sm sm:text-xl px-0.5">
                      “
                    </span>
                    <i>
                      I am about to launch a new product and needed inspiration
                      for creating our new Product Hunt Landing Page. This site
                      has been an amazing resource for us.
                    </i>
                    <span className="font-serif text-xl px-0.5">”</span>
                  </p>
                  <p className="text-xs text-gray-600 font-heading sm:text-sm">
                    {" "}
                    Alex Styl, founder of{" "}
                    <a
                      href="https://www.composables.com/?ref=productvideoexamples.com"
                      target="_blank"
                    >
                      Composables
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden w-auto lg:block">
            <div className="flex flex-col flex-wrap justify-center items-center">
              <video
                autoPlay={true}
                muted={true}
                className="transition duration-1000 ease-out rounded-md mb-14 hover:-translate-y-3"
                width="400"
                height="280"
                poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
              >
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                  type="video/mp4"
                />
              </video>
              <video
                autoPlay={true}
                muted={true}
                className="transition duration-1000 ease-out rounded-md mb-14 hover:-translate-y-3"
                width="400"
                height="280"
                poster="https://i.ytimg.com/vi/UoVHy7gY0AQ/maxresdefault.jpg"
              >
                <source
                  src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/demo_vid_01_optim - 02.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
        <section className="container relative  mx-auto overflow-hidden max-w-7xl mt-5">
          <div className="w-full bg-[#030303bd] p-1">
            <div className="max-w-2xl mx-auto mb-6">
              <h2 className="text-3xl font-bold text-center text-gray-100 font-heading sm:text-5xl">
                {" "}
                Finding inspiration is{" "}
                <div className="relative inline-flex">
                  <h2 className="relative text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">
                    {" "}
                    hard.{" "}
                  </h2>
                </div>
              </h2>
              <h2 className="text-center text-white ">
                {" "}
                Stop wasting your time.
              </h2>
              <p className="max-w-xl mx-auto mt-5 text-center text-gray-100 sm:text-lg opacity-60">
                {" "}
                You are a SaaS founder, marketing agency or video freelancer and
                are planning to create a Website's Landing page that will stand
                out from the crowd? <br />
                <br className="block hidden:sm" />
                We got you covered.{" "}
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-center mt-6">
            <div className="flex-1">
              <div className="flex flex-col space-y-5 rounded-md  p-8 md:col-span-2">
                <div className="flex items-center justify-start">
                  <h2 className="w-10/12 text-4xl font-semibold text-gray-100">
                    Learn from a growing library of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">
                      product videos
                    </span>
                  </h2>
                </div>
                <div className="pt-6 space-y-5 sm:pt-0">
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(247, 149, 51)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          134+ product video examples
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        Full access to hundreds of product video examples for
                        inspiration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(243, 112, 85)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          Tools and Tutorials
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {" "}
                        Get access to tools and tutorials <span>(soon)</span> on
                        how you can easily create your own engaging product
                        videos with little effort.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(239, 78, 123)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col mb-10">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          Pay once, love forever
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {" "}
                        Not another annoying subscription. Get lifetime access
                        to our library of high quality product videos for single
                        one-time payment. ROI guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-auto  lg:flex flex-col items-center justify-center ">
              <Circle />
              <Pillar />
              <Circle />
            </div>
            <div className="flex-1">
              <div className="sm:ml-auto mx-auto w-10/12 lg:relative  lg:right-0  max-w-max overflow-hidden bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600 rounded-3xl demo-video-card mt-5">
                <video
                  autoPlay={true}
                  muted={true}
                  playackrate={2}
                  loop={true}
                  className="relative transition duration-500 ease-in-out transform left-8 top-7 hover:-translate-x-5 hover:-translate-y-3 rounded-xl"
                  width="600"
                  height="280"
                >
                  <source
                    src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/app_demo_vid.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex-1">
              <div className="sm:ml-auto mx-auto w-10/12 lg:relative  lg:right-0  max-w-max overflow-hidden bg-gradient-to-r from-orange-500 via-fuchsia-500 to-indigo-600 rounded-3xl demo-video-card mt-5">
                <video
                  autoPlay={true}
                  muted={true}
                  playackrate={2}
                  loop={true}
                  className="relative transition duration-500 ease-in-out transform left-8 top-7 hover:-translate-x-5 hover:-translate-y-3 rounded-xl"
                  width="600"
                  height="280"
                >
                  <source
                    src="https://pub-47262dfbd9f344c3ac9d4010d96108db.r2.dev/app_demo_vid.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className=" flex flex-col items-center justify-center ">
              <Pillar />
              <Circle />
            </div>
            <div className="flex-1">
              <div className="flex flex-col space-y-5 rounded-md  p-8 md:col-span-2">
                <div className="flex items-center justify-start">
                  <h2 className="w-10/12 text-4xl font-semibold text-gray-100">
                    Learn from a growing library of{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-fuchsia-500 opacity-90 to-indigo-600">
                      product videos
                    </span>
                  </h2>
                </div>
                <div className="pt-6 space-y-5 sm:pt-0">
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(247, 149, 51)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          134+ product video examples
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        Full access to hundreds of product video examples for
                        inspiration.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(243, 112, 85)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          Tools and Tutorials
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {" "}
                        Get access to tools and tutorials <span>(soon)</span> on
                        how you can easily create your own engaging product
                        videos with little effort.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start justify-start space-x-4">
                    <div
                      className="lg:flex items-center justify-center flex-shrink-0 block w-10 h-10 rounded-lg"
                      style={{ backgroundColor: "rgb(239, 78, 123)" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-col mb-10">
                      <div className="flex items-center justify-start contents-center">
                        <h3 className="m-0 font-semibold text-gray-200">
                          Pay once, love forever
                        </h3>
                      </div>
                      <p className="text-sm text-gray-400">
                        {" "}
                        Not another annoying subscription. Get lifetime access
                        to our library of high quality product videos for single
                        one-time payment. ROI guaranteed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container relative  mx-auto overflow-hidden max-w-7xl mt-5">
          <div className="w-full p-1 bg-black">
            <div className="max-w-[90%]  mx-auto flex justify-center items-center">
              <div className="h-[20rem] w-full bg-green-500 m-5 flex justify-center items-center">
                <div className="flex-1 h-[16rem] bg-red-600 rounded-xl text-white">
                  <div>{/* svg will come here */}</div>
                  <h1 className="border-t w-[70%] mx-auto"></h1>
                  <div>
                    <h1 className="text-3xl font-semibold">Fast Development</h1>
                    <p className="text-sm">
                      We are committed to provide new designs, collaborations ,
                      and improve.
                    </p>
                  </div>
                </div>
                <div className="flex-1">2</div>
                <div className="flex-1">3</div>
                <div className="flex-1">4</div>
              </div>
            </div>
          </div>
        </section>
      </div>
      ;
    </>
  );
};

export default Landing;
