'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FaStar,
    FaTags,
    FaEnvelopeOpenText,
} from 'react-icons/fa6';

import { waitlistSection, waitlistBenefits } from '@/data/waitlist';
import WaitlistForm from './WaitlistForm';
import Container from '../Container';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    FaStar,
    FaTags,
    FaEnvelopeOpenText,
};

const Waitlist: React.FC = () => {
    return (
        <section id="waitlist" className="py-10 lg:py-20 bg-[#09298E] text-white">
            <Container>
                <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold mb-4"
                >
                    {waitlistSection.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-slate-200 mb-8 md:mb-12"
                >
                    {waitlistSection.description}
                </motion.p>

                {/* 혜택 리스트 */}
                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-md mx-auto space-y-3 mb-8 md:mb-12 text-slate-100 text-sm md:text-base"
                >
                    {waitlistBenefits.map((benefit, index) => {
                        const IconComponent = iconMap[benefit.icon];
                        return (
                            <li key={index} className="flex items-center justify-center gap-3">
                                {IconComponent && <IconComponent className={benefit.iconColor} />}
                                <span>{benefit.text}</span>
                            </li>
                        );
                    })}
                </motion.ul>

                {/* Waitlist Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <WaitlistForm />
                </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Waitlist;
