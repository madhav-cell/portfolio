import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_maddy21", // from EmailJS
        "template_d2il9zg", // from EmailJS
        form.current,
        "aJXtZw4PMqHN078NI" // from EmailJS
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <section id="contact" className="p-10">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded text-black"
          rows="5"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
