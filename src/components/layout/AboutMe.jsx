import React from "react";

function AboutMe() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6 md:w-3/5">
            Hello! My name is Paul and I graduated from Texas A&M University
            with a B.S in Applied Exercise Physiology. Currently, I am pursuing
            a post-baccalaureate degree at Oregon State University for Computer
            Science.
          </p>
          <p>blah blah blah </p>
          <p className="h-1/2 w-10/12 mt-4">
          Here are a few technologies I've been working with recently:
        </p>
        <div className="container flex flex-row w-5/6 my-2">
          <div className="mr-12 mb-10">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node</li>
          </div>
          <div>
            <li>HTML/CSS</li>
            <li>Python</li>
            <li>Selenium</li>
          </div>
        </div>
        </div>
        <img
          src="/images/headshot.jpg"
          className=" w-1/2 rounded-lg shadow-2xl border-solid border-cyan-500 border-2 md:w-1/6"
        />
        <div className=""></div>
      </div>
    </div>
    /*
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content flex flex-col translate-x-8 lg:flex-row">
        <h1 className="text-2xl py-6">About Me</h1>
        <p className="h-1/2 w-10/12">
          Hello! My name is Paul and I graduated from Texas A&M University with
          a B.S in Applied Exercise Physiology. Currently, I am pursuing a
          post-baccalaureate degree at Oregon State University for Computer
          Science.
        </p>
        <p className="h-1/2 w-10/12 mt-4">
          Here are a few technologies I've been working with recently:
        </p>
        <div className="container flex flex-row w-5/6 my-2">
          <div className="mr-12 mb-10">
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node</li>
          </div>
          <div>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Selenium</li>
          </div>
        </div>

        <div className="">
          <img
            className="object-scale-down h-2/5 w-full"
            src="/images/headshot.jpg"
            alt="Portfolio Headshot"
          />
        </div>
      </div>
    </div>*/
  );
}

export default AboutMe;
