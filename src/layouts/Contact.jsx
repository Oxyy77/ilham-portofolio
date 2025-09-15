import { Mail, Phone, MapPin } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <section
      className="flex flex-col justify-center items-center pt-24 py-8 min-h-screen text-white bg-[#0d0d0d]"
      id="contact"
    >
      {/* Header */}
      <div className="flex justify-center items-center flex-col text-center">
        <div className="flex flex-col items-center">
          <div
            style={{ backgroundColor: "#a3850d" }}
            className="w-10 h-[2px] mb-2"
          ></div>
          <p className="text-md font-medium text-gray-400">Get in touch.</p>
          <p className="text-4xl font-bold">
            My{" "}
            <span style={{ color: "#a3850d" }} className="text-4xl">
              Contact
            </span>
          </p>
        </div>
      </div>

      {/* Contact Info */}
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-16 px-6 w-full max-w-5xl">

        {/* Email */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-[#222] transition">
          <Mail className="w-10 h-10 mb-4 text-[#a3850d]" />
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400">ilhmoxy@gmail.com</p>
        </div>

        {/* Phone */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-[#222] transition">
          <Phone className="w-10 h-10 mb-4 text-[#a3850d]" />
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">+62 898 4828 899</p>
        </div>

        {/* Address */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-[#222] transition">
          <MapPin className="w-10 h-10 mb-4 text-[#a3850d]" />
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <p className="text-gray-400">Bukittinggi, Sumatera Barat</p>
        </div>

        {/* Social Media */}
        <div className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg hover:bg-[#222] transition flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">Social Media</h3>
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/ilham-‎-29857b249"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#a3850d] transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/ilham20___"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#a3850d] transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            {/* GitHub */}
            <a
              href="https://github.com/Oxyy77"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#a3850d] transition"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
}

export default Contact;
