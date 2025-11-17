'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaMinus } from 'react-icons/fa';

import {
    storePlans,
    pricingSection,
    hqPlans,
    hqAccessFeatures,
    hqProcess,
    hqContact,
    storeFeatureComparison,
} from '@/data/pricing';

const PricingTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'store' | 'hq'>('hq');
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <div className="py-8 md:py-16">
            {/* 탭 네비게이션 */}
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

            {/* Store 탭 내용 */}
            {activeTab === 'store' && (
                <div>
                    {/* 헤더 */}
                    <motion.header
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 md:mb-12"
                    >
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4">
                            {pricingSection.storeTitle}
                        </h1>
                        <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                            {pricingSection.storeSubtitle}
                        </p>
                    </motion.header>

                    {/* 월간/연간 토글 */}
                    <div className="flex items-center justify-center space-x-2 md:space-x-3 mb-8 md:mb-10">
                        <span className={`font-medium text-xs md:text-base ${!isAnnual ? 'text-slate-700' : 'text-slate-500'}`}>
                            {pricingSection.monthlyLabel}
                        </span>
                        <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                id="billing-toggle"
                                className="sr-only peer"
                                checked={isAnnual}
                                onChange={() => setIsAnnual(!isAnnual)}
                            />
                            <div className="w-10 h-6 md:w-11 md:h-7 bg-slate-300 rounded-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 md:after:h-6 md:after:w-6 after:transition-all peer-checked:after:translate-x-full"></div>
                        </label>
                        <span className={`font-medium text-xs md:text-base ${isAnnual ? 'text-slate-700' : 'text-slate-500'}`}>
                            {pricingSection.annualDiscountLabel}
                        </span>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold ml-2 px-2.5 py-0.5 rounded-full">
                            {pricingSection.annualDiscountRate}% 할인
                        </span>
                    </div>

                    {/* Store 요금제 카드 */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
                        {storePlans.map((plan, index) => {
                            const monthlyPrice = typeof plan.monthlyPrice === 'number' ? plan.monthlyPrice : 0;
                            const displayPrice = isAnnual && monthlyPrice > 0
                                ? Math.round((monthlyPrice * 12 * 0.8) / 12)
                                : plan.isPromo && plan.originalPrice
                                ? plan.monthlyPrice
                                : monthlyPrice;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className={`bg-white rounded-xl shadow-md p-4 md:p-6 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-lg ${
                                        plan.isRecommended ? 'border-2 border-blue-600 relative' : ''
                                    }`}
                                >
                                    {plan.isRecommended && (
                                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                                추천
                                            </span>
                                        </div>
                                    )}

                                    <h2 className={`text-lg md:text-xl font-bold ${plan.isRecommended ? 'text-blue-600' : 'text-slate-900'}`}>
                                        {plan.name}
                                    </h2>

                                    <p className="text-xs md:text-sm text-slate-500 mt-1 md:mt-2 mb-4 md:mb-6 h-12 md:h-16">
                                        {plan.description}
                                    </p>

                                    <div className="mb-4 md:mb-6">
                                        {plan.monthlyPrice === 'custom' ? (
                                            <span className="text-2xl md:text-3xl font-extrabold">별도 문의</span>
                                        ) : (
                                            <>
                                                {plan.isPromo && plan.originalPrice && (
                                                    <div>
                                                        <span className="text-lg md:text-xl font-bold text-slate-400 line-through">
                                                            ₩{plan.originalPrice.toLocaleString()}
                                                        </span>
                                                        <span className="ml-2 text-xs font-semibold bg-red-100 text-red-600 px-2 py-1 rounded-full">
                                                            {plan.promoMonths}개월 할인가
                                                        </span>
                                                    </div>
                                                )}
                                                <span className={`text-2xl md:text-3xl font-extrabold ${plan.isPromo ? 'text-red-600' : ''}`}>
                                                    ₩{displayPrice.toLocaleString()}
                                                </span>
                                                <span className="text-slate-500 text-xs md:text-sm">/ 월</span>
                                                {isAnnual && monthlyPrice > 0 && (
                                                    <p className="text-xs md:text-sm text-slate-500 mt-1">
                                                        연간 ₩{((monthlyPrice * 12 * 0.8)).toLocaleString()}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <button
                                        className={`w-full mt-auto text-center font-semibold py-2 md:py-3 rounded-lg text-xs md:text-sm transition-colors ${
                                            plan.isRecommended
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : plan.isFree
                                                ? 'bg-slate-800 text-white hover:bg-slate-900'
                                                : 'bg-slate-200 text-slate-800 hover:bg-slate-300'
                                        }`}
                                    >
                                        {plan.ctaText}
                                    </button>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* B2C 기능 비교 테이블 */}
                    <StoreFeatureTable />
                </div>
            )}

            {/* HQ 탭 내용 */}
            {activeTab === 'hq' && <HQContent />}
        </div>
    );
};

// Store 기능 비교 테이블 컴포넌트
const StoreFeatureTable: React.FC = () => {
    const renderValue = (value: string) => {
        if (value === '✓') {
            return <FaCheck className="text-green-500 mx-auto" />;
        } else if (value === '✗') {
            return <FaTimes className="text-slate-400 mx-auto" />;
        } else if (value === '△') {
            return <FaMinus className="text-slate-400 mx-auto" />;
        } else {
            return <span className="font-bold">{value}</span>;
        }
    };

    return (
        <section className="mt-12 md:mt-16">
            <h3 className="text-xl md:text-3xl font-bold text-center mb-8 md:mb-10 text-slate-900">
                모든 플랜 기능 비교
            </h3>
            <div className="bg-white rounded-xl shadow-lg overflow-x-auto">
                <table className="w-full text-left whitespace-nowrap">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-700 text-sm md:text-base sticky left-0 bg-slate-50 z-20">
                                기능
                            </th>
                            {storePlans.map((plan) => (
                                <th
                                    key={plan.name}
                                    className="py-3 px-4 md:py-4 md:px-6 font-semibold text-slate-700 text-center text-sm md:text-base"
                                >
                                    {plan.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {storeFeatureComparison.map((section, sectionIndex) => (
                            <React.Fragment key={sectionIndex}>
                                <tr>
                                    <td colSpan={storePlans.length + 1} className="sticky left-0 bg-slate-100 font-bold text-slate-700 z-10 py-3 px-4 md:py-4 md:px-6 text-sm md:text-base">
                                        {section.category}
                                    </td>
                                </tr>
                                {section.features.map((feature, featureIndex) => (
                                    <tr key={featureIndex}>
                                        <td className="py-3 px-4 md:py-4 md:px-6 sticky left-0 bg-white z-10 text-sm md:text-base">
                                            {feature.name}
                                        </td>
                                        {feature.values.map((value, valueIndex) => (
                                            <td key={valueIndex} className="py-3 px-4 md:py-4 md:px-6 text-center text-sm md:text-base">
                                                {renderValue(value)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

// HQ 탭 내용 컴포넌트
const HQContent: React.FC = () => {
    return (
        <div>
            {/* 헤더 */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-12"
            >
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 md:mb-4">
                    {pricingSection.hqTitle}
                </h1>
                <p className="text-sm md:text-lg text-slate-600 max-w-2xl mx-auto">
                    {pricingSection.hqSubtitle}
                </p>
            </motion.header>

            {/* HQ 요금제 구성 */}
            <section className="mb-12 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-10">
                    RestoGenie HQ 요금제 구성
                </h2>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                    <div className="p-6 md:p-8">
                        <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-6">단계별 맞춤형 도입 플랜</h3>
                        <table className="w-full text-left text-xs md:text-base">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2 md:py-3 font-semibold text-slate-600">항목</th>
                                    <th className="py-2 md:py-3 font-semibold text-slate-600">내용</th>
                                    <th className="py-2 md:py-3 font-semibold text-slate-600 text-right">비용</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hqPlans.map((plan, planIndex) =>
                                    plan.items.map((item, itemIndex) => (
                                        <tr key={`${planIndex}-${itemIndex}`} className="border-b">
                                            {itemIndex === 0 && (
                                                <td
                                                    rowSpan={plan.items.length}
                                                    className="py-4 md:py-5 font-bold text-indigo-600 align-top"
                                                >
                                                    {plan.phase}단계 ({plan.phaseName})
                                                    {plan.isOptional && (
                                                        <span className="block text-xs font-normal text-slate-500">(선택)</span>
                                                    )}
                                                </td>
                                            )}
                                            <td className="py-3 md:py-4">
                                                <p className="font-semibold">{item.name}</p>
                                                <p className="text-xs text-slate-500 mt-2">{item.description}</p>
                                                {item.note && (
                                                    <p className="text-xs text-slate-500 pt-2">{item.note}</p>
                                                )}
                                            </td>
                                            <td className="py-3 md:py-4 text-right font-bold md:text-lg align-top">
                                                {typeof item.price === 'number' ? `₩${item.price.toLocaleString()}` : item.price}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-slate-100 p-4 md:p-6 text-center text-xs md:text-sm text-slate-600">
                        <p>※ 가맹점 수에 따른 볼륨 할인 정책이 적용됩니다. 자세한 내용은 별도 문의 바랍니다.</p>
                    </div>
                </div>
            </section>

            {/* 도입 프로세스 */}
            <section className="mb-12 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-10">
                    {hqProcess.title}
                </h2>
                <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                    {hqProcess.phases.map((phase, index) => (
                        <div key={index}>
                            <div className="flex items-center mb-4 md:mb-6">
                                <div className="bg-indigo-600 text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center font-bold text-base md:text-lg">
                                    {phase.phase}
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-slate-800 ml-3 md:ml-4">
                                    {phase.title}
                                </h3>
                            </div>
                            <div className="flex justify-center">
                                <div className={`grid gap-4 md:gap-6 ${
                                    phase.items.length <= 2
                                        ? 'grid-cols-1 md:grid-cols-2'
                                        : 'md:grid-cols-2 lg:grid-cols-3'
                                }`}>
                                    {phase.items.map((item, itemIndex) => (
                                        <div
                                            key={itemIndex}
                                            className="bg-white p-4 md:p-6 rounded-lg shadow-md border-l-4 border-indigo-500"
                                        >
                                            <h4 className="font-bold text-sm md:text-lg mb-2">{item.title}</h4>
                                            <p className="text-xs md:text-sm text-slate-600">{item.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {index < hqProcess.phases.length - 1 && (
                                <div className="text-center my-6 md:my-8">
                                    <div className="text-xl md:text-3xl text-slate-400">↓</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* Access Plan 상세 기능 */}
            <section className="mb-12 md:mb-16">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 text-center mb-8 md:mb-10">
                    {hqAccessFeatures.title}
                </h2>
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
                    <p className="text-center text-slate-600 mb-8 md:mb-10 text-sm md:text-base">
                        {hqAccessFeatures.subtitle}
                    </p>
                    <div className="flex justify-center">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {hqAccessFeatures.categories.map((category, index) => (
                                <div key={index}>
                                    <h4 className="text-sm md:text-base font-bold text-indigo-600 border-b-2 border-indigo-200 pb-2 mb-4">
                                        {category.title}
                                    </h4>
                                    <ul className="space-y-2 text-xs md:text-sm">
                                        {category.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start gap-2">
                                                <FaCheck className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 문의하기 */}
            <section className="text-center bg-white py-12 md:py-16 rounded-xl shadow-lg">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">
                    {hqContact.title}
                </h2>
                <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm md:text-base">
                    {hqContact.description}
                </p>
                <a
                    href={hqContact.ctaUrl}
                    className="inline-block bg-indigo-600 text-white font-bold py-3 px-6 md:px-8 rounded-full text-sm md:text-lg hover:bg-indigo-700 transition"
                >
                    {hqContact.ctaText}
                </a>
            </section>
        </div>
    );
};

export default PricingTabs;
