import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useValidateForm from "./useValidateForm";
import TitleHeader from "./TitleHeader.helpers";

const ContactForm = ({ onClose }) => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [values, handleChange, errors, resetValues] = useValidateForm({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for errors before submit
    if (errors.name || errors.email || !values.message) {
      console.log("Form has validation errors");
      return;
    }

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      resetValues();
      setIsSubmitted(true); // showing success window
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    // successful submission window
    return (
      <div className="baseBorder baseBgBtn p-12 rounded-[35px] flex-col-center gap-10">
        <span className="font-semibold text-3xl md:text-5xl text-center">
          Thank you!
        </span>
        <p className="text-center">
          Your message has been sent successfully.
          <br />
          Expect a response by email soon.
        </p>

        <button
          type="button"
          className="w-full lg:w-1/2 p-4 rounded-lg uppercase text-lg text-black text-center cursor-pointer bg-white-50"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    );
  }

  return (
    <div className="size-auto baseBorder baseBgBtn pb-2 pt-8 px-2 rounded-[35px]">
      <TitleHeader
        title="Get in Touch"
        sub="💬 Have questions or ideas? Let's talk! 🚀"
      />
      <div className="mt-6">
        <div className="flex items-start baseBorder rounded-[26px] p-5">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-10"
          >
            <div className="h-20">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                required
                autoComplete="family-name"
                autoCapitalize="sentences"
              />
              {errors.name && (
                <p className="text-gold-50 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div className="h-20">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                required
                autoComplete="email"
              />
              {errors.email && (
                <p className="text-gold-50 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                rows="5"
                required
                autoComplete="on"
                autoCapitalize="sentences"
              />
            </div>

            <div className="w-full flex justify-between flex-col md:flex-row gap-5">
              <button
                type="button"
                className="w-full lg:w-1/2 p-4 rounded-lg uppercase text-lg text-blue-50 text-center cursor-pointer outline outline-blue-50"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={loading}
                className="w-full lg:w-1/2"
              >
                <div className="cta-button group">
                  <div className="bg-circle" />
                  <p className="text">
                    {loading ? "Sending..." : "Send Message"}
                  </p>
                  <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                  </div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
