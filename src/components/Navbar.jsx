import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // icon hamburger & close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false); // Tutup menu setelah klik
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 px-6 md:px-20 w-full z-50 pt-6 transition-all duration-400 ease-in-out"
    >
      <div className="relative py-4 px-6 md:px-10 text-white rounded-xl shadow-xl border border-white/20 backdrop-blur-md bg-black/10 flex justify-between items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500 to-gray-500 blur-2xl opacity-20"></div>

        {/* Logo */}
        <h2 className="text-xl md:text-2xl font-bold">Ilham</h2>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-10">
          {["Home", "About", "Service", "Project", "Contact"].map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="relative cursor-pointer text-white 
                        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#a3850d]
                        after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 py-4 bg-[#1a1a1a] rounded-xl shadow-lg">
          <ul className="flex flex-col gap-4 text-white">
            {["Home", "About", "Service", "Project", "Contact"].map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="cursor-pointer hover:text-[#a3850d] transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
