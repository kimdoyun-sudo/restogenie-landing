'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { solutionSection } from '@/data/solution';
import Container from './Container';

const Solution: React.FC = () => {
    const { youtubeVideoId, youtubeSettings } = solutionSection;

    // YouTube embed URL 생성
    const youtubeUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=${youtubeSettings.autoplay}&mute=${youtubeSettings.mute}&controls=${youtubeSettings.controls}&loop=${youtubeSettings.loop}&playlist=${youtubeVideoId}&rel=${youtubeSettings.rel}&showinfo=${youtubeSettings.showinfo}&modestbranding=${youtubeSettings.modestbranding}`;

    return (
        <section id="solution" className="py-10 lg:py-20">
            <Container>
                <div className="text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                    {solutionSection.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-sm md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto"
                >
                    {solutionSection.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="w-full max-w-4xl mx-auto aspect-video rounded-lg shadow-xl overflow-hidden"
                >
                    <iframe
                        className="w-full h-full"
                        src={youtubeUrl}
                        title="RestoGenie Demo Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </motion.div>

                <p className="text-xs text-slate-400 mt-2">
                    {solutionSection.caption}
                </p>
                </div>
            </Container>
        </section>
    );
};

export default Solution;
