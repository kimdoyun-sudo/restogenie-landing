'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { integrations, integrationSection } from '@/data/integration';
import Container from './Container';

const Integration: React.FC = () => {
    return (
        <div className="text-center">
            <Container>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-4xl font-bold text-slate-900 mb-4"
                >
                    {integrationSection.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base md:text-lg text-slate-600 mb-12 max-w-3xl mx-auto"
                >
                    {integrationSection.description}
                </motion.p>

                {/* 로고 그리드: 모바일 3열, 데스크톱 5열 */}
                <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                    {integrations.map((integration, index) => (
                        <IntegrationCard
                            key={index}
                            integration={integration}
                            index={index}
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

interface IntegrationCardProps {
    integration: {
        name: string;
        logoUrl?: string;
        fallbackText?: string;
    };
    index: number;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration, index }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="flex items-center justify-center h-[70px] md:h-[90px] transition-all duration-200 group"
        >
            {integration.logoUrl && !imageError ? (
                <Image
                    src={integration.logoUrl}
                    alt={integration.name}
                    width={120}
                    height={50}
                    className="max-h-[40px] md:max-h-[50px] w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-200"
                    onError={() => setImageError(true)}
                />
            ) : (
                <span className="text-sm md:text-base font-semibold text-slate-600">
                    {integration.fallbackText || integration.name}
                </span>
            )}
        </motion.div>
    );
};

export default Integration;
