'use client'

// pages/faq.tsx
import { FC, useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ: FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900 font-nunito">
      <main className="container mx-auto px-6 py-10 max-w-full">
        <section className="bg-white shadow-lg rounded-lg p-8 w-full" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-sky">Frequently Asked Questions</h1>
          <div className="space-y-6">
            <FAQItem
              question="What is MedEase?"
              answer="MedEase is a tool designed to help users find hospitals in Nigeria, export hospital information to a CSV file, and share this information. It simplifies access to healthcare services in the region."
              dataAos="fade-right"
            />
            <FAQItem
              question="How does MedEase benefit me?"
              answer="MedEase makes it easier to locate hospitals, view contact details, and manage hospital information efficiently. It offers tools for searching, exporting, and sharing data to streamline your healthcare needs."
              dataAos="fade-left"
            />
            <FAQItem
              question="What features are available for free?"
              answer="The basic features of MedEase, including hospital search, viewing contact details, and exporting data to a CSV file, are available for free. These features provide essential functionality for locating and managing hospital information."
              dataAos="fade-right"
            />
            <FAQItem
              question="What are the premium packages, and what do they include?"
              answer="Premium packages offer additional features such as enhanced search filters, advanced export options, priority support, and an ad-free experience. For detailed information on premium packages and pricing, visit our pricing page."
              dataAos="fade-left"
            />
            <FAQItem
              question="How do I upgrade to a premium package?"
              answer="You can upgrade to a premium package by visiting our pricing page and selecting the package that suits your needs. Follow the instructions to complete the upgrade process."
              dataAos="fade-right"
            />
            <FAQItem
              question="How often is the hospital data updated?"
              answer="We strive to keep our hospital data current and accurate. Our team regularly updates the information to ensure you have access to the most recent details."
              dataAos="fade-left"
            />
            <FAQItem
              question="Can I use MedEase on mobile devices?"
              answer="Yes, MedEase is optimized for use on both desktop and mobile devices. You can access all features from your smartphone, tablet, or computer."
              dataAos="fade-right"
            />
            <FAQItem
              question="How does MedEase ensure the privacy of my data?"
              answer="MedEase prioritizes your privacy and employs industry-standard security measures to protect your personal information. For more details, refer to our privacy policy."
              dataAos="fade-left"
            />
            <FAQItem
              question="How can I contact customer support?"
              answer="For support or inquiries, please contact our customer support team at support@example.com. We’re here to help with any questions or issues you may have."
              dataAos="fade-right"
            />
            <FAQItem
              question="What payment methods are accepted?"
              answer="MedEase accepts payments via credit/debit card and bank transfer. For detailed instructions on how to make a payment, please visit our payment page."
              dataAos="fade-left"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

const FAQItem: FC<{ question: string; answer: string; dataAos: string }> = ({ question, answer, dataAos }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 w-full" data-aos={dataAos}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-blue-sky">{question}</h3>
        <span className="text-xl font-bold text-gray-500">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
