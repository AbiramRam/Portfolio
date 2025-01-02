import Logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-0 flex items-center justify-between py-0">
      <div className="flex flex-shrink-0 items-center">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="m-8 flex items-center justify-between gap-10 text-2xl">
        {/* LinkedIn */}
        <a
          href="http://www.linkedin.com/in/abiram-pathmanathan-310b04225" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/your-profile" // Replace with your Facebook profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebook />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/your-profile" // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-black"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/your-profile" // Replace with your Instagram profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
