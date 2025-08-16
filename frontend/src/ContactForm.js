import { useState } from "react";
import axios from "axios";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send message. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 text-black rounded"/>
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 text-black rounded"/>
      <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" required className="w-full p-2 text-black rounded"/>
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required className="w-full p-2 text-black rounded"/>
      <button type="submit" className="bg-green-400 text-black px-4 py-2 rounded hover:bg-green-500">Send Message</button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}

export default ContactForm;
