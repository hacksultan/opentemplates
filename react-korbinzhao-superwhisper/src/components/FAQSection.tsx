import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs: FAQItem[] = [
    {
      question: "What languages does SuperWhisper support?",
      answer: "SuperWhisper supports over 50 languages including English, Spanish, French, German, Chinese, Japanese, and many more. Our AI models are continuously updated to improve accuracy across all supported languages."
    },
    {
      question: "Does SuperWhisper work offline?",
      answer: "Yes! SuperWhisper processes all audio locally on your device, which means you can use it without an internet connection. This also ensures your privacy since your voice data never leaves your device."
    },
    {
      question: "How accurate is the transcription?",
      answer: "SuperWhisper achieves industry-leading accuracy rates of 95%+ for clear audio in supported languages. The accuracy depends on factors like audio quality, speaking clarity, and background noise."
    },
    {
      question: "What file formats can I export to?",
      answer: "You can export your transcriptions in various formats including plain text (.txt), Markdown (.md), Rich Text Format (.rtf), and PDF. We also support copying directly to your clipboard."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! SuperWhisper offers a 14-day free trial with full access to all features. No credit card required to start your trial."
    },
    {
      question: "What are the system requirements?",
      answer: "SuperWhisper requires macOS 11.0 or later and at least 4GB of RAM. For optimal performance, we recommend 8GB of RAM and a modern Intel or Apple Silicon processor."
    }
  ];

  return (
    <section id="faq" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-600">FAQ</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get answers to the most common questions about SuperWhisper.
          </p>
        </div>
        
        <div className="mt-16 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openItems.includes(index) ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
