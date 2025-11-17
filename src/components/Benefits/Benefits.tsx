'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { storeBenefits, hqBenefits, storeFutureFeatures, hqFutureFeatures, featuresSection } from '@/data/benefits';
import Container from '../Container';
import ImageModal from './ImageModal';
import { IBenefit } from '@/types';

const Benefits: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'store' | 'hq'>('hq');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; title: string } | null>(null);

    const handleImageClick = (benefit: IBenefit) => {
        setSelectedImage({
            src: benefit.imageSrc,
            alt: benefit.title,
            title: benefit.title,
        });
        setModalOpen(true);
    };

    const currentBenefits = activeTab === 'store' ? storeBenefits : hqBenefits;
    const currentTitle = activeTab === 'store' ? featuresSection.storeTitle : featuresSection.hqTitle;
    const currentSubtitle = activeTab === 'store' ? featuresSection.storeSubtitle : featuresSection.hqSubtitle;
    const currentFutureFeatures = activeTab === 'store' ? storeFutureFeatures : hqFutureFeatures;
    const currentFutureTitle = activeTab === 'store' ? featuresSection.storeFutureTitle : featuresSection.hqFutureTitle;

    return (
        <section id="features" className="py-10 lg:py-20 bg-slate-50">
            <Container>
                {/* Tab Navigation - Navy Theme */}
                <div className="max-w-md mx-auto mb-8 p-1 bg-slate-200 rounded-full flex items-center space-x-1">
                    <button
                        onClick={() => setActiveTab('hq')}
                        className={`w-1/2 py-2 px-3 md:px-4 text-xs md:text-sm rounded-full text-center font-semibold transition ${
                            activeTab === 'hq'
                                ? 'bg-[#E8EDF9] text-[#09298E] border-2 border-[#09298E]'
                                : 'text-slate-600 hover:text-[#09298E]'
                        }`}
                    >
                        가맹본부
                    </button>
                    <button
                        onClick={() => setActiveTab('store')}
                        className={`w-1/2 py-2 px-3 md:px-4 text-xs md:text-sm rounded-full text-center font-semibold transition ${
                            activeTab === 'store'
                                ? 'bg-[#E8EDF9] text-[#09298E] border-2 border-[#09298E]'
                                : 'text-slate-600 hover:text-[#09298E]'
                        }`}
                    >
                        가맹점주
                    </button>
                </div>

                {/* Title and Subtitle */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-xl md:text-4xl font-bold text-slate-900 mb-3">
                        {currentTitle}
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto">
                        {currentSubtitle}
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {currentBenefits.map((benefit, index) => (
                        <motion.div
                            key={`${activeTab}-${index}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col"
                        >
                            <div
                                className="relative bg-slate-100 overflow-hidden cursor-pointer group"
                                onClick={() => handleImageClick(benefit)}
                            >
                                <Image
                                    src={benefit.imageSrc}
                                    alt={benefit.title}
                                    width={1600}
                                    height={1067}
                                    quality={95}
                                    className="w-full h-80 md:h-96 object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                                />
                                {/* Zoom hint */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <span className={`inline-block ${benefit.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-3 self-start`}>
                                    {benefit.badge}
                                </span>
                                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm md:text-base text-slate-600 mb-6 flex-grow">
                                    {benefit.description}
                                </p>
                                <ul className="space-y-2 text-sm text-slate-600">
                                    {benefit.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex items-start gap-2">
                                            {bullet.icon}
                                            <div>
                                                <span className="font-semibold">{bullet.title}</span>
                                                {bullet.description && (
                                                    <span className="block text-xs text-slate-500">{bullet.description}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Future Features Section - Text Only */}
                <motion.div
                    key={`${activeTab}-future`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 md:mt-20"
                >
                    <h3 className="text-lg md:text-2xl font-bold text-slate-700 text-center mb-8">
                        {currentFutureTitle}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {currentFutureFeatures.map((feature, index) => (
                            <motion.div
                                key={`${activeTab}-future-${index}`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/50 rounded-lg shadow-sm p-6 md:p-8 border-2 border-dashed border-slate-200"
                            >
                                <span className={`inline-block ${feature.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                                    {feature.badge}
                                </span>
                                <h4 className="text-lg md:text-2xl font-bold text-slate-700 mb-4">
                                    {feature.title}
                                </h4>
                                <p className="text-sm md:text-base text-slate-500 mb-6">
                                    {feature.description}
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    {feature.bullets.map((bullet, bulletIndex) => (
                                        <li key={bulletIndex} className="flex items-start gap-2">
                                            {bullet.icon}
                                            <div>
                                                <span className="font-semibold">{bullet.title}</span>
                                                {bullet.description && (
                                                    <span className="block text-xs text-slate-400">{bullet.description}</span>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Image Modal */}
                {selectedImage && (
                    <ImageModal
                        isOpen={modalOpen}
                        onClose={() => setModalOpen(false)}
                        imageSrc={selectedImage.src}
                        imageAlt={selectedImage.alt}
                        title={selectedImage.title}
                    />
                )}
            </Container>
        </section>
    );
};

export default Benefits;