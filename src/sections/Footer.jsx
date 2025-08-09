import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Email: productivearyan123@gmail.com,   Phone #: +1 623-666-2898 
</p>
        </div>
       
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
           © {new Date().getFullYear()} Aryan Patel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
