import { Link } from "react-router-dom";

import { socialLinks } from "../constant";

const Footer = () => {
  return (
    <footer className='footer font-mono z-10 h-16 flex items-center justify-center  bg-[#FDFFFF]'>
      <hr className='border-slate-200 ' />

      <div className='footer-container z-10 flex justify-around '>
        <p>
          © 2024 <strong>Anthony Dumartin</strong>.
        </p>

        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer