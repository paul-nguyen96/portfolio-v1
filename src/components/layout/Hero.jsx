import React from "react";

function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200 items-start py-6">
      <div className="hero-content text-start">
        <div className="max-w-5xl">
          <h2 className="text-l mb-4">Hi, my name is </h2>
          <h1 className="text-6xl font-bold mb-4">Paul Nguyen.</h1>
          <h1 className="text-6xl font-bold mb-4">
            I like to build things for the web.
          </h1>
          <p className="py-6 mb-4 w-4/6 h-full">
            I am a Web Developement enthusiast with a passion for learning.
            Currently, I'm focusing on the 100Devs Bootcamp and learning new technologies in web
            development.
          </p>
          <button className="btn btn-primary">
            <a href="https://github.com/paul-nguyen96">Check out my Github!</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
