import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 items-start py-6 pl-6">
      <div className="hero-content text-start">
        <div className="max-w-5xl">
          <h2 className="text-l mb-4">Hi, my name is </h2>
          <h1 className="text-4xl font-bold mb-4">Paul Nguyen.</h1>
          <h1 className="text-4xl font-bold mb-4">
            I like to build things for the web.
          </h1>
          <p className="py-2 mb-8 w-11/12 h-full">
            I am a Web Developement enthusiast with a passion for learning.
            Currently, I'm enrolled in <a href="https://oregonstate.edu/">Oregon State University</a>{" "}
            studying Computer Science and learning new technologies in web
            development via 100Devs and The Odin Project.
          </p>
          <button className="btn btn-primary pl-6 pr-6 bg-inherit">
            <a href="https://github.com/paul-nguyen96">Check out my Github!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
