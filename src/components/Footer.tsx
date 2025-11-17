import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { footerDetails } from '@/data/footer';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-8 px-4">
            <div className="max-w-7xl w-full mx-auto">
                {/* Ctrl-M Logo */}
                <div className="text-center mb-4">
                    <Link href="https://www.ctrl-m.co.kr/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src="https://www.ctrl-m.co.kr/ado/images/CTRL-M_logo.svg"
                            alt="Ctrl-M 로고"
                            width={80}
                            height={24}
                            className="h-6 w-auto mx-auto hover:opacity-80 transition-opacity"
                        />
                    </Link>
                </div>

                {/* 회사 정보 */}
                <div className="text-center text-xs text-slate-400 space-y-1 mb-4">
                    <p>
                        {footerDetails.companyInfo.companyName} | 대표자: {footerDetails.companyInfo.ceo} | 사업자등록번호: {footerDetails.companyInfo.businessNumber}
                    </p>
                    <p>{footerDetails.companyInfo.address}</p>
                    <p>
                        <a href={`mailto:${footerDetails.companyInfo.email}`} className="hover:text-white transition">
                            {footerDetails.companyInfo.email}
                        </a>
                    </p>
                </div>

                {/* 법적 링크 */}
                <div className="text-center text-xs text-slate-400 mb-4">
                    {footerDetails.legalLinks.map((link, index) => (
                        <React.Fragment key={link.text}>
                            <Link href={link.url} className="hover:text-white transition">
                                {link.text}
                            </Link>
                            {index < footerDetails.legalLinks.length - 1 && <span className="mx-2">|</span>}
                        </React.Fragment>
                    ))}
                </div>

                {/* 저작권 */}
                <div className="text-center text-xs text-slate-500">
                    <p>{footerDetails.copyright}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
