export interface IIntegration {
    name: string;
    logoUrl?: string;
    fallbackText?: string;
    category: 'delivery' | 'pos' | 'ad' | 'ai' | 'other';
}

export const integrations: IIntegration[] = [
    // 배달 플랫폼
    {
        name: '배달의민족',
        logoUrl: 'https://www.baemin.com/favicon-196x196.png',
        fallbackText: '배달의민족',
        category: 'delivery',
    },
    {
        name: '요기요',
        fallbackText: '요기요',
        category: 'delivery',
    },
    {
        name: '쿠팡이츠',
        fallbackText: '쿠팡이츠',
        category: 'delivery',
    },
    // POS 시스템
    {
        name: 'OKPOS',
        fallbackText: 'OKPOS',
        category: 'pos',
    },
    {
        name: 'EasyPOS',
        fallbackText: 'EasyCheck',
        category: 'pos',
    },
    {
        name: 'Toss Place',
        fallbackText: 'Toss Place',
        category: 'pos',
    },
    {
        name: '페이히어',
        fallbackText: '페이히어',
        category: 'pos',
    },
    {
        name: 'KIS',
        fallbackText: 'KIS',
        category: 'pos',
    },
    {
        name: 'NICE',
        fallbackText: 'NICE',
        category: 'pos',
    },
    {
        name: 'KICC',
        fallbackText: 'KICC',
        category: 'pos',
    },
    // 광고/마케팅
    {
        name: '네이버',
        logoUrl: 'https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png',
        fallbackText: '네이버',
        category: 'ad',
    },
    {
        name: 'Meta',
        logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg',
        fallbackText: 'Meta',
        category: 'ad',
    },
    // AI 파트너
    {
        name: '메이아이',
        fallbackText: '메이아이',
        category: 'ai',
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
    title: '사장님이 이미 사용 중인 프로그램과 완벽하게 연동됩니다.',
    description: '배달의민족, 요기요, 쿠팡이츠 같은 배달앱부터 주요 POS 시스템까지. 레스토지니는 흩어진 데이터를 한 곳으로 모아주는 허브 역할을 합니다. 교체할 필요 없이, 지금 그대로 더 강력해지세요.',
};
