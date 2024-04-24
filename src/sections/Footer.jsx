import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col  ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ab,
            dicta error consequatur aliquid repudiandae tenetur pariatur dele
          </p>
          <div className=" flex items-center gap-5 mt-8">
            {socialMedia.map((icon,index) => (
              <div
                key={index}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 text-white justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item,index) => (
            <div key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6 ">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link,index) => (
                  <li
                    key={index}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal cursor-pointer hover:text-slate-gray"
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex text-white justify-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="justify-start items-center cursor-pointer font-montserrat gap-2 flex flex-1">
          <img
            src={copyrightSign}
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
