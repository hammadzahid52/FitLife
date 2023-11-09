import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font mt-16">
        <div className="px-6 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link to="/">
            <span className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
              <img src={Logo} alt="Fitness Craze" className="w-6, h-6" />
              <span className="ml-3 text-xl">Fitness Freak</span>
            </span>
          </Link>

          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 dark:text-gray-100">
            © 2022 Fitness Freak 
          </p>

          
        </div>
      </footer>
    </>
  );
};

export default Footer;
