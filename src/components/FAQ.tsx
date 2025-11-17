'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { BiMinus, BiPlus } from 'react-icons/bi';

import { faqs } from '@/data/faq';
import Container from './Container';

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-4xl font-bold text-slate-900 text-center mb-12 md:mb-16"
                >
                    자주 묻는 질문
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <div
                                        className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                                            open
                                                ? 'bg-white border-indigo-600 shadow-lg'
                                                : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                                        }`}
                                    >
                                        <DisclosureButton className="flex items-start justify-between w-full p-6 text-left group">
                                            <span className="text-base md:text-xl font-bold text-slate-900 pr-8 group-hover:text-indigo-600 transition-colors duration-300">
                                                {faq.question}
                                            </span>
                                            <div
                                                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                                    open
                                                        ? 'bg-indigo-600 text-white rotate-180'
                                                        : 'bg-slate-100 text-slate-600 group-hover:bg-indigo-100'
                                                }`}
                                            >
                                                {open ? <BiMinus className="w-5 h-5" /> : <BiPlus className="w-5 h-5" />}
                                            </div>
                                        </DisclosureButton>

                                        <Transition
                                            enter="transition duration-300 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-200 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <DisclosurePanel className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FAQ;