import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import useForm from "../components/validateForm";
import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [values, handleChange, errors, resetValues] = useForm({
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

    setLoading(true); // Show loading state

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Reset form and stop loading
      resetValues();
    } catch (error) {
      console.error("EmailJS Error:", error); // Optional: show toast
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    // <section id="contact" className="flex-center section-padding z-100">
    <>
      {/* <div className="size-full lg:size-1/2 md:px-10 px-5"> */}
      <div className="size-auto baseBorder baseBgBtn p-5">
        <TitleHeader
          title="Get in Touch – Let's Connect"
          sub="💬 Have questions or ideas? Let's talk! 🚀"
        />
        <div className="mt-4">
            <div className="h-[588px] xl:h-[610px] flex items-start baseBorder rounded-xl p-10">
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
                  />
                </div>

                <button type="submit" disabled={loading}>
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
              </form>
           
          </div>
          {/* min-h-96 */}
          {/* <div className="xl:col-span-7">
            <div className="bg-[#cd7c2e] size-full hover:cursor-grab rounded-3xl overflow-hidden"></div>
          </div> */}
        </div>
      </div>
    </>
    // </section>
  );
};

export default Contact;
