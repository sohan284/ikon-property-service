"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`bg-gray-50/50 border rounded-sm overflow-hidden transition-colors duration-300 ${isOpen ? 'border-secondary shadow-md shadow-secondary/5' : 'border-gray-200 shadow-sm '}`}
          >
            <button
              onClick={() => toggleOpen(index)}
              className="w-full flex items-center justify-between cursor-pointer p-6 bg-gray-50/50 transition-colors text-left"
            >
              <h4 className={`text-[1.05rem] font-bold pr-8 leading-snug transition-colors duration-300 ${isOpen ? 'text-secondary' : 'text-primary'}`}>
                {faq.q}
              </h4>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className={`shrink-0 ${isOpen ? 'text-secondary' : 'text-primary/40'}`}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden bg-gray-50"
                >
                  <div className="p-6 mt-4 pt-0 text-primary/70 font-medium leading-relaxed text-left border-gray-100 mx-6">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
