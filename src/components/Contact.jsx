import React from "react";
import Button from "./Button";
import { toast } from "sonner";

const Contact = () => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("mauryagaurav1612@gmail.com");

      toast.success("Email copied to clipboard", {
        position: "bottom-center",
      });
    } catch (error) {
      console.log(error);
      toast.error(`Failed to copy email: ${error}`, {
        position: "top-center",
        richColors: true,
      });
    }
  };
  return (
    <section id="contact" className="contact-container">
      <h2>
        Wanna create <br /> something <span>awesome</span> <br /> together?
      </h2>
      <div className="contact-content">
        <Button
          href="mailto:mauryagaurav1612@gmail.com"
          label="Let's Talk"
          className={"w-60 gap-2 rounded-full px-5 py-3"}
        />
        <div>
          <p>Don't like flashy buttons? Reach out at</p>
          <button onClick={copyToClipboard}>mauryagaurav1612@gmail.com</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
