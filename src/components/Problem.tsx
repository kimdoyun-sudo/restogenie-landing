'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    FaSackXmark,
    FaBullhorn,
    FaFileInvoiceDollar,
    FaBrain,
    FaBookOpen,
    FaDatabase,
    FaArrowLeft,
    FaArrowRight,
} from 'react-icons/fa6';

import { problems, problemSection } from '@/data/problem';
import Container from './Container';
import Chip from './Chip';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
    FaSackXmark,
    FaBullhorn,
    FaFileInvoiceDollar,
    FaBrain,
    FaBookOpen,
    FaDatabase,
};

const Problem: React.FC = () => {
    return (
        <section id="problem" className="py-10 lg:py-20 bg-slate-50">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-4xl font-bold text-slate-900 text-center mb-12 md:mb-16"
                >
                    {problemSection.title}
                </motion.h2>

                <div className="relative">
                    {/* 모바일: 좌우 스크롤 가능한 카드 / 데스크톱: 3열 그리드 */}
                    <div className="flex overflow-x-auto pb-6 md:pb-0 md:grid md:grid-cols-3 gap-4 md:gap-8 scrollbar-hide">
                        {problems.map((problem, index) => {
                            const IconComponent = iconMap[problem.icon];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex-none w-[90%] md:w-auto bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
                                >
                                    {IconComponent && (
                                        <IconComponent className={`${problem.iconColor} text-4xl md:text-5xl mx-auto mb-4`} />
                                    )}

                                    {/* Stat Chip */}
                                    {problem.stat && (
                                        <div className="mb-3 flex justify-center">
                                            <Chip variant={problem.stat.variant} animate>
                                                {problem.stat.direction && (
                                                    <span className="mr-1">{problem.stat.direction === 'up' ? '↑' : '↓'}</span>
                                                )}
                                                {problem.stat.value}
                                            </Chip>
                                        </div>
                                    )}

                                    <h3 className="text-base md:text-xl font-bold mb-2 text-slate-900">
                                        {problem.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-slate-600 mb-3">
                                        {problem.description}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {problem.subtitle}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* 모바일 스크롤 힌트 */}
                    <div className="md:hidden text-center mt-4 text-slate-400 text-xs flex items-center justify-center gap-2">
                        <FaArrowLeft className="text-slate-400" />
                        <span>{problemSection.mobileScrollHint}</span>
                        <FaArrowRight className="text-slate-400" />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Problem;
