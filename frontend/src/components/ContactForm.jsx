import React, { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");
    try {
      await axios.post(`${API}/api/contact`, form);
      setStatus("✅ Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("❌ Failed to send. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input className="w-full p-2 rounded text-black" placeholder="Name" name="name" value={form.name} onChange={handleChange} required />
      <input className="w-full p-2 rounded text-black" placeholder="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      <input className="w-full p-2 rounded text-black" placeholder="Subject" name="subject" value={form.subject} onChange={handleChange} required />
      <textarea className="w-full p-2 rounded text-black" rows="4" placeholder="Message" name="message" value={form.message} onChange={handleChange} required />
      <button className="bg-green-400 text-black px-4 py-2 rounded font-medium hover:bg-green-500">Send</button>
      {status && <p className="text-sm text-gray-300">{status}</p>}
    </form>
  );
}
