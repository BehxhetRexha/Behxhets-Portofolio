import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import HH from "../Molecules/HH";

import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("mqaaneng");
  if (state.succeeded) {
    return <p>Your message has been sent.</p>;
  }
  const Variantat = {
    hidden: { opacity: 0, x: 240 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div id="Contact" className="allContact">
      <HH text="Get in Touch" />
      <motion.div
        className="Contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        variants={Variantat}
      >
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label htmlFor="email">Ask question</label>
          <textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </div>
  );
}

export default ContactForm;
