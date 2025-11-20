'use client';

import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa6';

import { waitlistFields, waitlistFormConfig } from '@/data/waitlist';
import SuccessModal from './SuccessModal';
import ErrorModal from './ErrorModal';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const WaitlistForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        // 클라이언트 측 검증
        const storeType = formData.get('storeType') as string;
        const storeName = formData.get('storeName') as string;
        const name = formData.get('name') as string;
        const phone = formData.get('phone') as string;
        const email = formData.get('email') as string;
        const privacy = formData.get('privacy');

        // 필수 필드 검증
        if (!storeType || !storeName || !name || !phone || !email) {
            alert('모든 필수 항목을 입력해주세요.');
            return;
        }

        // 이메일 정규식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('올바른 이메일 주소를 입력해주세요.');
            return;
        }

        // 전화번호 검증 (10-11자리)
        const phoneCleaned = phone.replace(/-/g, '');
        const phoneRegex = /^\d{10,11}$/;
        if (!phoneRegex.test(phoneCleaned)) {
            alert('올바른 연락처 형식(10-11자리 숫자)을 입력해주세요.');
            return;
        }

        // 개인정보 동의 검증
        if (!privacy) {
            alert('개인정보 처리방침에 동의해주세요.');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(waitlistFormConfig.googleAppsScriptUrl, {
                method: 'POST',
                mode: 'cors',
                credentials: 'omit',
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                try {
                    const errorJson = JSON.parse(errorText);
                    throw new Error(errorJson.message || `서버 응답 오류: ${response.status}`);
                } catch {
                    throw new Error(errorText || `서버 응답 오류: ${response.status}`);
                }
            }

            const result = await response.json();

            if (result.result === 'success') {
                // 폼 초기화
                form.reset();
                // 성공 모달 표시
                setShowSuccessModal(true);
            } else {
                throw new Error(result.message || 'Apps Script에서 오류를 반환했습니다.');
            }
        } catch (error) {
            console.error('Error sending form data:', error);

            if (error instanceof Error) {
                if (error.name === 'TypeError' && error.message === 'Failed to fetch') {
                    setErrorMessage('폼 제출에 실패했습니다.\n네트워크 연결을 확인하거나 CORS 설정을 점검하세요.');
                } else {
                    setErrorMessage(`요청 처리 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.\n(${error.message})`);
                }
            } else {
                setErrorMessage(waitlistFormConfig.errorModalMessage);
            }

            setShowErrorModal(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-lg shadow-xl space-y-4">
                {waitlistFields.map((field) => {
                    if (field.type === 'checkbox') {
                        return (
                            <div key={field.id} className="flex items-start">
                                <input
                                    type="checkbox"
                                    id={field.id}
                                    name={field.name}
                                    required={field.required}
                                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded mt-0.5"
                                />
                                <div className="ml-2 block text-xs md:text-sm text-slate-600">
                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            setShowPrivacyModal(true);
                                        }}
                                        className="underline hover:text-indigo-600 transition-colors"
                                    >
                                        개인정보 처리방침
                                    </button>
                                    에 동의합니다.
                                </div>
                            </div>
                        );
                    }

                    if (field.type === 'select') {
                        return (
                            <div key={field.id} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-center">
                                <label htmlFor={field.id} className="text-sm font-medium text-slate-700 text-left">
                                    {field.label}
                                </label>
                                <select
                                    id={field.id}
                                    name={field.name}
                                    required={field.required}
                                    className="w-full border-slate-300 rounded-md shadow-sm text-slate-900 focus:border-indigo-500 focus:ring-indigo-500"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        {field.placeholder}
                                    </option>
                                    {field.options?.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        );
                    }

                    if (field.type === 'textarea') {
                        return (
                            <div key={field.id} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-start">
                                <label htmlFor={field.id} className="text-sm font-medium text-slate-700 pt-2 text-left">
                                    {field.label}
                                </label>
                                <textarea
                                    id={field.id}
                                    name={field.name}
                                    rows={field.rows || 3}
                                    maxLength={field.maxLength}
                                    required={field.required}
                                    placeholder={field.placeholder}
                                    className="w-full border-slate-300 rounded-md shadow-sm text-slate-900 focus:border-indigo-500 focus:ring-indigo-500"
                                />
                            </div>
                        );
                    }

                    return (
                        <div key={field.id} className="grid grid-cols-[80px_1fr] md:grid-cols-[120px_1fr] gap-4 items-center">
                            <label htmlFor={field.id} className="text-sm font-medium text-slate-700 text-left">
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                id={field.id}
                                name={field.name}
                                required={field.required}
                                placeholder={field.placeholder}
                                pattern={field.pattern}
                                className="w-full border-slate-300 rounded-md shadow-sm text-slate-900 focus:border-indigo-500 focus:ring-indigo-500"
                            />
                        </div>
                    );
                })}

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-md hover:bg-indigo-700 transition text-sm md:text-lg flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                            <span>{waitlistFormConfig.submitButtonLoadingText}</span>
                        </>
                    ) : (
                        <>
                            <span>{waitlistFormConfig.submitButtonText}</span>
                            <FaArrowRight />
                        </>
                    )}
                </button>
            </form>

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
            />

            <ErrorModal
                isOpen={showErrorModal}
                onClose={() => setShowErrorModal(false)}
                message={errorMessage}
            />

            <PrivacyPolicyModal
                isOpen={showPrivacyModal}
                onClose={() => setShowPrivacyModal(false)}
            />
        </>
    );
};

export default WaitlistForm;
