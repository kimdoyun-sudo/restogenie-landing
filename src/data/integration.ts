export interface IIntegration {
    name: string;
    logoUrl?: string;
    fallbackText?: string;
    category: 'delivery' | 'pos' | 'ad' | 'ai' | 'other';
    needsInvert?: boolean; // 흰색 글자 로고는 색상 반전 필요
}

export const integrations: IIntegration[] = [
    // 배달 플랫폼
    {
        name: '배달의민족',
        logoUrl: '/images/partners/배달의 민족.png',
        fallbackText: '배달의민족',
        category: 'delivery',
    },
    {
        name: '요기요',
        logoUrl: '/images/partners/logo-yogiyo.png',
        fallbackText: '요기요',
        category: 'delivery',
        needsInvert: true,
    },
    {
        name: '쿠팡이츠',
        logoUrl: '/images/partners/coupang Eats.png',
        fallbackText: '쿠팡이츠',
        category: 'delivery',
        needsInvert: true,
    },
    // POS 시스템
    {
        name: 'OKPOS',
        logoUrl: '/images/partners/okpos.png',
        fallbackText: 'OKPOS',
        category: 'pos',
    },
    {
        name: 'EasyCheck',
        logoUrl: '/images/partners/easycheck.gif',
        fallbackText: 'EasyCheck',
        category: 'pos',
    },
    {
        name: 'Toss Place',
        logoUrl: '/images/partners/토스플레이스.png',
        fallbackText: 'Toss Place',
        category: 'pos',
        needsInvert: true,
    },
    {
        name: 'Payhere',
        logoUrl: '/images/partners/payhere.png',
        fallbackText: 'Payhere',
        category: 'pos',
    },
    {
        name: 'KICC',
        logoUrl: '/images/partners/kicc.jpg',
        fallbackText: 'KICC',
        category: 'pos',
    },
    // 광고/마케팅
    {
        name: '네이버',
        logoUrl: '/images/partners/Naver_Logotype.png',
        fallbackText: '네이버',
        category: 'ad',
    },
    {
        name: 'Meta',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
        fallbackText: 'Meta',
        category: 'ad',
        needsInvert: true,
    },
    // AI 파트너
    {
        name: 'mAy-I',
        logoUrl: '/images/partners/메이아이.svg',
        fallbackText: 'mAy-I',
        category: 'ai',
        needsInvert: true,
    },
    {
        name: 'OpenAI',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg',
        fallbackText: 'OpenAI',
        category: 'ai',
    },
    // 기타
    {
        name: '+ 연동 확대 중',
        fallbackText: '+ 연동 확대 중',
        category: 'other',
    },
];

export const integrationSection = {
    title: '사장님이 이미 사용 중인 프로그램과 연동을 지원합니다.',
    description: '배달의민족, 요기요, 쿠팡이츠 같은 배달앱부터 주요 POS 시스템까지. 레스토지니는 흩어진 데이터를 한 곳으로 모아주는 허브 역할을 합니다. 기존 시스템을 활용하실 수 있습니다.',
};
