'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCircleExclamation } from 'react-icons/fa6';

import { waitlistFormConfig } from '@/data/waitlist';

interface ErrorModalProps {
    isOpen: boolean;
    onClose: () => void;
    message?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ isOpen, onClose, message }) => {
    // ESC 키로 닫기
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white rounded-xl shadow-2xl w-full max-w-sm mx-auto p-6 text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <FaCircleExclamation className="text-5xl text-red-500 mb-4 mx-auto" />

                        <h3 className="text-xl font-bold text-slate-800 mb-2">
                            {waitlistFormConfig.errorModalTitle}
                        </h3>

                        <p className="text-slate-600 mb-6 text-sm whitespace-pre-line">
                            {message || waitlistFormConfig.errorModalMessage}
                        </p>

                        <button
                            onClick={onClose}
                            className="w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition text-sm"
                        >
                            {waitlistFormConfig.errorModalButtonText}
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ErrorModal;
