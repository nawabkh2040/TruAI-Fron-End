import React, { useEffect, useState } from "react";
import logo from "../../../assets/logo-CX2Yl9fi.png";
import { Button } from "../../ui/button";
import BlurText from "../../BlurText";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#0B0E1A]/80 backdrop-blur-md" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between px-6 md:px-10 h-24">

     
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="TruAI Logo" className="h-12" />
          <span className="hidden md:block text-white font-semibold text-xl">
            <BlurText
              text="Empowering media authenticity"
              delay={250}
              animateBy="words"
              direction="top"
            />
          </span>
        </div>

      
        <div className="hidden md:flex gap-10 text-gray-300 font-medium">
          {[
            { label: "Home", id: "home" },
            { label: "About", id: "about" },
            { label: "Features", id: "feature" },
            { label: "Questions", id: "question" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <p
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="relative cursor-pointer hover:text-white transition hover:scale-105
              after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
              after:bg-white after:transition-all hover:after:w-full"
            >
              {item.label}
            </p>
          ))}
        </div>

        
        <div className="hidden md:block">
          <Button
            className="bg-yellow-300 text-gray-700 rounded-full px-5 py-6 hover:bg-yellow-400"
            onClick={() => navigate("/upload")}
          >
            Get Started
          </Button>
        </div>

        
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-[#0B0E1A] px-6 pb-6 pt-4 space-y-4 text-gray-300">
          {["home", "about", "feature", "question", "contact"].map((item) => (
            <p
              key={item}
              onClick={() => scrollToSection(item)}
              className="block text-lg hover:text-white transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </p>
          ))}

          <Button
            className="w-full bg-yellow-300 text-gray-800 mt-3"
            onClick={() => navigate("/upload")}
          >
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
