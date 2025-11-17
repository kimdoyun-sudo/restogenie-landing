import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    companyInfo: {
        companyName: string;
        ceo: string;
        businessNumber: string;
        address: string;
        email: string;
    };
    quickLinks: IMenuItem[];
    legalLinks: IMenuItem[];
    copyright: string;
    socials?: ISocials;
} = {
    companyInfo: {
        companyName: '주식회사 컨트롤엠',
        ceo: '원종관',
        businessNumber: '794-87-03025',
        address: '경기도 고양시 덕양구 으뜸로 130, 805호(덕은동, 위프라임트윈타워)',
        email: 'ctrl-m@ctrl-m.co.kr',
    },
    quickLinks: [
        {
            text: "핵심 기능",
            url: "#features"
        },
        {
            text: "연동 안내",
            url: "#integration"
        },
        {
            text: "요금제",
            url: "/plans"
        }
    ],
    legalLinks: [
        {
            text: "개인정보 처리방침",
            url: "#" // TODO: 실제 개인정보 처리방침 페이지 URL로 변경
        },
        {
            text: "이용약관",
            url: "#" // TODO: 실제 이용약관 페이지 URL로 변경
        }
    ],
    copyright: 'COPYRIGHT 2025 CTRL-M Inc. ALL RIGHTS RESERVED.',
    // socials: {
    //     // SNS 링크는 필요시 활성화
    //     // instagram: 'https://www.instagram.com',
    //     // facebook: 'https://facebook.com',
    // }
}