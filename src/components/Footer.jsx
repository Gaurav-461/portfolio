import { Link } from "react-router";
import { mediaUrls, navLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="footer">
      <p>
        👋 Thanks for stopping by! Here is more of me if you are interested :)
      </p>
      <div className="links-container">
        <div className="links">
          <strong className="text-left font-bold">PAGES</strong>
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              className="transition-all duration-300 hover:scale-130 hover:text-white"
              to={href}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="links">
          <strong className="font-bold">LET'S CONNECT</strong>
          {mediaUrls.map(({ label, href }) => (
            <Link
              key={label}
              className="transition-all duration-300 hover:scale-130 hover:text-white"
              to={href}
              target="_blank"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
