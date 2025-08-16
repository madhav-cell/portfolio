import React from "react";

const items = [
  { name: "Chris Fox", role: "CEO, Mighty Schools", quote: "Madhav saved us from a web disaster." },
  { name: "Rebecca Flex", role: "CEO, Company", quote: "No one is better than Madhav." }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12">
      <h2 className="text-3xl font-bold text-green-400 mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(t => (
          <div key={t.name} className="bg-white/5 border border-white/10 rounded p-4">
            <p className="text-gray-300 italic">“{t.quote}”</p>
            <p className="mt-3 font-medium">{t.name}</p>
            <p className="text-sm text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
