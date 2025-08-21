import { socialMedia } from "../../constants";
import ContactModal from "../Contact/ContactModal";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-dvw h-[500px] text-center mt-25 md:mt-35"
      aria-labelledby="contact-title"
    >
      <img
        src="/images/footerBg.webp"
        alt="grid"
        className="absolute w-dvw h-[inherit] object-cover overflow-hidden saturate-50"
      />

      <div className="flex flex-col items-center justify-end gap-12 md:gap-50 md:px-20 px-4">
        <div className="flex flex-col items-center gap-14 z-50 w-full md:px-20">
          <h2 id="contact-title">
            Ready to take digital presence to the next level?
          </h2>
          <p className="text-wrap">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          <ContactModal />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center gap-4 w-full">
          <p className="text-sm font-light">
            Copyright © {new Date().getFullYear()} Dmitry M
          </p>

          <div className="flex-center gap-4">
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.linkPath}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={info.name}
                className="block size-10 rounded-lg baseBorder baseBgBtn backdrop-filter bg-auto bg-center bg-no-repeat cursor-pointer z-10"
                style={{ backgroundImage: `url(${info.imgPath})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
