import { socialMedia } from "../constants";

import BasicModal from "./ModalContact";
// import Button from '@mui/material/Button';

const Footer = () => {
  return (
    <footer
      className="w-[100dvw] flex-col-center px-5 md:px-10 xl:px-0 text-center gap-20 mb-10"
      id="contact"
    >
      <img
        src="/images/footer-bg.webp"
        alt="grid"
        className="absolute h-1/4 w-auto object-cover saturate-50  z-10"
      />

      <div className="flex-col-center gap-15 size-full md:px-20 px-4 z-20">
        <div className="flex flex-col items-center gap-4">
          <h2>Ready to take digital presence to the next level?</h2>
          <p>
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          {/* Discuss Project - btn onClick={покаже вікно з формой} */}
          <BasicModal />

        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 w-full">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © {new Date().getFullYear()} Dmitry M
          </p>

          <div className="flex items-center md:gap-3 gap-6 cursor-pointer">
            {socialMedia.map((info) => (
              <div
                key={info.id}
                className="size-10 flex-center rounded-lg baseBorder baseBgBtn backdrop-filter"
              >
                <img src={info.imgPath} alt="icons" width={18} height={18} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
