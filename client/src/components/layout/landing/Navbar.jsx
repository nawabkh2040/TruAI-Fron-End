import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo.png";
import { Button } from "../../ui/button";
import BlurText from "../../BlurText";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full h-40 fixed top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#0B0E1A]/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex items-center px-10 h-full">
        
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="TruAI Logo"
            className="h-14 w-auto border"
          />
          <span className="text-white font-semibold text-2xl mt-6">
            <BlurText
              text="Empowering media authenticity"
              delay={250}
              animateBy="words"
              direction="top"
              className="text-2xl mb-8"
            />
          </span>
        </div>

        
        <div className="flex-1 flex justify-center gap-10 text-gray-300 font-medium">
          {["Home", "About", "Features", "Questions", "Contact"].map((item) => (
            <p
              key={item}
              className="
                relative cursor-pointer
                transition-all duration-300
                hover:text-white
                hover:scale-105
                active:scale-95
                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-white
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </p>
          ))}
        </div>

       
        <div>
          <Button className="bg-yellow-300 text-gray-700 rounded-full px-5 py-6 hover:bg-yellow-400 font-normal transition">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
