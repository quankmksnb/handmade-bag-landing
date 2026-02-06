"use client";
import { useState } from 'react';
import { faqs } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Everything you need to know</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl shadow-md overflow-hidden hover:shadow-lg hover:scale-102 transition-all duration-300">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/50 transition-colors">
                <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                <span className={`text-2xl text-pink-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>↓</span>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
