import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-[#0d0d0d] text-gray-400 py-6 text-center border-t border-gray-700">
      <div className="flex justify-center space-x-6 mb-3">
        <a href="https://linkedin.com/in/ilham-‎-29857b249" target="_blank" rel="noreferrer" className="hover:text-[#a3850d]">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.instagram.com/ilham20___" target="_blank" rel="noreferrer" className="hover:text-[#a3850d]">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://github.com/Oxyy77" target="_blank" rel="noreferrer" className="hover:text-[#a3850d]">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </div>
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-[#a3850d] font-semibold">Ilham</span>. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
