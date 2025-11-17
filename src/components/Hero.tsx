'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 overflow-hidden min-h-[90vh]"
        >
            {/* Dynamic Gradient Background with Mesh Effect - Navy Theme */}
            <div className="absolute left-0 top-0 bottom-0 right-0 -z-10 w-full overflow-hidden">
                {/* Base gradient - Navy to Light */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8EDF9] via-[#F0F4FF] to-white"></div>

                {/* Animated gradient blobs - Navy/Blue theme */}
                <motion.div
                    className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #09298E 0%, #436FFF 50%, transparent 70%)'
                    }}
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #436FFF 0%, #0D3AB8 50%, transparent 70%)'
                    }}
                    animate={{
                        x: [0, -30, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background: 'radial-gradient(circle, #FA8823 0%, #09298E 50%, transparent 70%)'
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Grid pattern overlay - Navy tint */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#09298E08_1px,transparent_1px),linear-gradient(to_bottom,#09298E08_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            </div>

            {/* Floating decorative elements - Navy theme */}
            <motion.div
                className="absolute top-20 right-20 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#09298E] to-[#436FFF] opacity-30 blur-sm"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                className="absolute bottom-40 left-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#FA8823] to-[#436FFF] opacity-30 blur-sm"
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Bottom fade */}
            <div className="absolute left-0 right-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent backdrop-blur-sm"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="text-center">
                    {/* Badge - Navy theme */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#09298E]/20 shadow-lg mb-6"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FA8823] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FA8823]"></span>
                        </span>
                        <span className="text-sm font-medium text-[#09298E]">AI 기반 스마트 운영</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 max-w-4xl mx-auto leading-[1.15] mb-6"
                        style={{ fontFamily: 'var(--font-display)', wordBreak: 'keep-all' }}
                    >
                        {heroDetails.heading.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < heroDetails.heading.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09298E] to-[#436FFF]">
                            {heroDetails.headingHighlight}
                        </span>
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
                    >
                        {heroDetails.subheading.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                {index < heroDetails.subheading.split('\n').length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </motion.p>

                    {/* CTA Button - Orange accent */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-8 flex flex-col items-center justify-center gap-4"
                    >
                        <a
                            href={heroDetails.ctaUrl}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FA8823] to-[#FF6B35] text-white font-bold py-4 px-8 rounded-full text-sm md:text-lg hover:from-[#FF6B35] hover:to-[#FA8823] transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
                        >
                            {heroDetails.ctaText}
                        </a>
                        <div className="text-center text-xs md:text-sm">
                            <p className="text-slate-500">
                                {heroDetails.launchInfo}
                            </p>
                        </div>
                    </motion.div>

                    {/* Hero Image with Float Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 60, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                        className="relative mt-16 md:mt-20"
                    >
                        <motion.div
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            {/* Glow effect behind image - Navy/Orange theme */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#436FFF]/30 via-[#09298E]/20 to-transparent blur-3xl scale-110"></div>

                            <Image
                                src={heroDetails.centerImageSrc}
                                width={1000}
                                height={900}
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 1000px"
                                priority={true}
                                unoptimized={true}
                                alt="RestoGenie app mockup"
                                className="relative mx-auto drop-shadow-2xl rounded-2xl"
                            />
                        </motion.div>

                        {/* Decorative ring - Navy theme */}
                        <motion.div
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-64 h-8 rounded-full bg-gradient-to-r from-transparent via-[#09298E]/20 to-transparent blur-xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
