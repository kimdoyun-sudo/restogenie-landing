'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

interface PrivacyPolicyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', duration: 0.5 }}
                        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-200">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900">개인정보 수집 및 이용 동의</h2>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-slate-600 transition-colors"
                                aria-label="Close"
                            >
                                <FaTimes size={24} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 overflow-y-auto max-h-[calc(80vh-140px)]">
                            <div className="space-y-4">
                                <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                                    (주)컨트롤엠은 '레스토지니' 서비스 제공을 위해 아래와 같이 개인정보를 수집·이용합니다.
                                </p>

                                <table className="w-full border-collapse border border-slate-300 text-sm md:text-base">
                                    <tbody>
                                        <tr>
                                            <th className="border border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-900 w-1/3">
                                                수집·이용 목적
                                            </th>
                                            <td className="border border-slate-300 px-4 py-3 text-slate-700">
                                                서비스 런칭 알림 및 혜택 제공, 상담 문의
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-900">
                                                수집 항목
                                            </th>
                                            <td className="border border-slate-300 px-4 py-3 text-slate-700">
                                                회사/매장명, 이름, 연락처, 이메일, 지역, 문의사항
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-slate-300 bg-slate-100 px-4 py-3 text-left font-semibold text-slate-900">
                                                보유 기간
                                            </th>
                                            <td className="border border-slate-300 px-4 py-3 text-slate-700">
                                                <strong>수집 목적 달성 시 또는 이용자의 파기 요청 시까지</strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="space-y-2">
                                    <p className="text-slate-900 font-semibold text-sm md:text-base">
                                        동의 거부 권리 안내
                                    </p>
                                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                                        귀하는 개인정보 수집 이용에 대한 동의를 거부할 수 있습니다. 단, 거부 시 런칭 혜택 제공 및 대기자 등록이 제한됩니다.
                                    </p>
                                </div>

                                <hr className="border-t border-slate-200 my-4" />

                                <div className="text-xs md:text-sm text-slate-500 space-y-1">
                                    <p>책임자: 주식회사 컨트롤엠</p>
                                    <p>문의: restogenie@ctrl-m.co.kr</p>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end p-6 border-t border-slate-200">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-indigo-600 text-white font-bold rounded-md hover:bg-indigo-700 transition text-sm md:text-base"
                            >
                                확인
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PrivacyPolicyModal;
