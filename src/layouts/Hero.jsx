import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <section
  className="mt-32 px-6 sm:px-8 md:p-12 lg:px-20 text-white grid gap-6 grid-cols-3 grid-rows-1 auto-rows-fr"
  id="home"
>
  <div className="hero h-100 backdrop-blur-md bg-[#0d0d0d] rounded-[48px] hero-profile p-6 sm:p-8 md:p-12 lg:p-20 inset-0 border border-white/10 overflow-hidden z-1 col-span-3 md:col-span-2">

    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-1">
          <div
            style={{ backgroundColor: "#a3850d" }}
            className="w-10 h-[2px]"
          ></div>
          <p className="text-sm font-medium text-gray-400">Welcome.</p>
        </div>

        <p className="text-4xl font-bold">
          Hi I am{" "}
          <span style={{ color: "#a3850d" }} className="text-4xl">
            Ilham
          </span>
        </p>
      </div>

      <p className="text-justify">
  <span className="text-base sm:text-md md:text-lg lg:text-lg font-medium text-gray-400">
    A Computer Engineering student passionate about software
    development, particularly in creating responsive and user-friendly
    websites as well as Android applications that solve real-world
    problems and provide great user experiences.
  </span>
</p>

      <div className="flex space-x-4">
        <a target="__blank" href="https://www.instagram.com/ilham20___">
          <div className="w-10 cursor-pointer h-10 bg-transparent border border-gray-200 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className="text-white" />
          </div>
        </a>
        <a
          target="__blank"
          href="https://linkedin.com/in/ilham-‎-29857b249"
        >
          <div className="w-10 cursor-pointer h-10 bg-transparent border border-gray-200 rounded-lg flex items-center justify-center">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-white" />
          </div>
        </a>
        <a href="#">
          <div className="w-32 cursor-pointer text-sm h-10 bg-transparent border border-gray-200 text-white font-semibold rounded-lg flex items-center justify-center">
            Get In Touch
          </div>
        </a>
      </div>
    </div>
  </div>

  {/* Hero photo: hilang di layar kecil */}
  <div className="hero-photo hidden md:block bg-[#0d0d0d] rounded-[48px] p-4 inset-0 border border-white/10 overflow-hidden pointer-events-none z-1">
    <div className="w-full h-full relative">
      <img
        src="/assets/img/ilham2.png"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-top rounded-[32px]"
      />
    </div>
  </div>
</section>

  );
}

export default Hero;
