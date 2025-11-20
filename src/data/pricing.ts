export interface IStorePlan {
    name: string;
    description: string;
    monthlyPrice: number | 'custom';
    originalPrice?: number;
    isPromo?: boolean;
    promoMonths?: number;
    isRecommended?: boolean;
    isFree?: boolean;
    features: string[];
    ctaText: string;
}

export interface IHQPlan {
    phase: '1' | '2';
    phaseName: string;
    phaseNameEn: string;
    isOptional?: boolean;
    items: {
        name: string;
        description: string;
        price: string | number;
        note?: string;
    }[];
}

// RestoGenie Store 요금제 (가맹점주용)
export const storePlans: IStorePlan[] = [
    {
        name: 'Free',
        description: 'Basic 플랜 1개월 무료 체험',
        monthlyPrice: 0,
        isFree: true,
        features: [
            'Basic 플랜의 모든 기능',
            '1개월 무료 체험',
        ],
        ctaText: '1개월 무료 체험',
    },
    {
        name: 'Basic',
        description: '데이터 기반 관리의 시작',
        monthlyPrice: 9900,
        features: [
            'POS 데이터 집계',
            'AI 주간/월간 리포트',
            '10,000 AI 에이전트 크레딧',
            '기본 AI 분석 카드',
            '2건/월 AI 기반 실행 제안',
            '운영 문의 AI 챗봇',
            '최근 30일 대화 기록',
            '20건/월 온라인 리뷰 AI 응답',
            '50명/월 재방문/이탈 고객 분석',
            '메뉴 조합 추천',
            '주변 3곳 경쟁사 분석',
        ],
        ctaText: '플랜 시작하기',
    },
    {
        name: 'Deluxe',
        description: '본격적인 AI 마케팅 분석',
        monthlyPrice: 9900,
        originalPrice: 29900,
        isPromo: true,
        promoMonths: 6,
        isRecommended: true,
        features: [
            'Basic의 모든 기능 +',
            '배달 플랫폼 매출 상세 집계',
            '네이버/메타 광고 데이터 연동',
            '카카오톡 알림 및 리포트 전달',
            '30,000 AI 에이전트 크레딧',
            '상세 AI 분석 카드',
            '10건/월 AI 기반 실행 제안',
            '심층 분석 AI 챗봇',
            '최근 90일 대화 기록',
            '50건/월 온라인 리뷰 AI 응답',
            '200명/월 고객 분석',
            '주변 10곳 경쟁사 분석',
            '우선 지원',
            '최대 3개 매장 통합 관리',
        ],
        ctaText: '플랜 시작하기',
    },
    {
        name: 'Pro',
        description: 'AI 운영 자동화 & 심화 분석',
        monthlyPrice: 29900,
        originalPrice: 49900,
        isPromo: true,
        promoMonths: 6,
        features: [
            'Deluxe의 모든 기능 +',
            '50,000 AI 에이전트 크레딧',
            '심화 AI 분석 카드',
            '20건/월 AI 기반 실행 제안',
            '전략 컨설팅 AI 챗봇',
            '무제한 대화 기록 학습',
            '100건/월 온라인 리뷰 AI 응답',
            '350명/월 고객 분석',
            '주변 20곳 경쟁사 분석',
            '수요 예측 기반 발주 제안 (출시 예정)',
            '매출 연동 근무 스케줄 최적화 (출시 예정)',
            '전담 성공 매니저',
            '본사 전용 대시보드',
            '최대 10개 매장 통합 관리',
        ],
        ctaText: '플랜 시작하기',
    },
    {
        name: 'Pro+',
        description: 'CCTV 연동으로 방문 고객까지 완벽 분석',
        monthlyPrice: 89900,
        features: [
            'Pro의 모든 기능 +',
            '70,000 AI 에이전트 크레딧',
            '200건/월 온라인 리뷰 AI 응답',
            '500명/월 고객 분석',
            '지역구 전체 경쟁사 분석',
            'AI Vision (1개 매장)',
            '실시간 유동인구 분석',
            '방문 전환율 측정',
            '방문객 성별/연령대 분석',
        ],
        ctaText: '플랜 시작하기',
    },
];

// RestoGenie HQ 요금제 (가맹본부용)
export const hqPlans: IHQPlan[] = [
    {
        phase: '1',
        phaseName: 'Access',
        phaseNameEn: '가맹점 운영 효율 극대화',
        items: [
            {
                name: '초기 구축비',
                description: '브랜드 맞춤형 AI 환경 구축 및 全 가맹점 데이터 연동을 위한 전문 기술 서비스',
                price: 20000000,
                note: '※ 초기 구축비는 200개 가맹점 기준이며, 초과 시 규모에 따라 추가 비용이 발생할 수 있습니다. (별도 협의)',
            },
            {
                name: 'RestoGenie 가맹점주 버전 월 이용료',
                description: 'AI 챗봇, 점포별 대시보드 및 리포트 제공',
                price: '점포당 50,000원',
            },
        ],
    },
    {
        phase: '2',
        phaseName: 'Control',
        phaseNameEn: '본사 통합 관리 및 전략 수립',
        isOptional: true,
        items: [
            {
                name: 'RestoGenie HQ 통합 대시보드',
                description: '全 가맹점 데이터 통합 및 비교 분석, 자동 요약 리포트',
                price: '가맹점당 월 +15,000원',
            },
            {
                name: '시스템 커스터마이징',
                description: '별도 데이터 연동, AI Agent 프로세스 구축 등',
                price: '별도 문의',
            },
        ],
    },
];

export const pricingSection = {
    storeTitle: 'RestoGenie Store - 가맹점주를 위한 AI 운영 파트너',
    storeSubtitle: '개인 점주부터 다점포 운영까지, 데이터 기반 매장 관리로 매출을 높이고 비용을 줄이세요.',
    hqTitle: 'RestoGenie HQ - 가맹본부를 위한 AI 경영 솔루션',
    hqSubtitle: '흩어진 가맹점 데이터를 하나로 통합하고, 본사의 의사결정을 AI로 혁신하여 브랜드의 지속가능한 성장을 만듭니다.',
    annualDiscountLabel: '연간 결제',
    annualDiscountRate: 20,
    monthlyLabel: '월간 결제',
};

export const hqAccessFeatures = {
    title: '가맹점 월 5만원 플랜 (Access Plan) 상세 기능',
    subtitle: '각 가맹점은 RestoGenie Store Pro 요금제에 준하는 강력한 AI 기능들을 제공받아, 데이터 기반으로 매장을 운영하고 매출을 증대시킬 수 있습니다.',
    categories: [
        {
            title: '📊 데이터 & 리포트',
            features: [
                'POS/배달/광고 데이터 통합',
                'AI 주간/월간 리포트',
                '카카오톡 알림 및 리포트',
            ],
        },
        {
            title: '🤖 AI 에이전트',
            features: [
                '50,000 AI 크레딧/월',
                'AI 분석 카드 (심화)',
                'AI 기반 실행 제안 (20건/월)',
                'AI 챗봇 (전략 컨설팅)',
                'AI 컨텍스트 학습 (무제한)',
            ],
        },
        {
            title: '📈 마케팅 & 고객 관리',
            features: [
                '온라인 리뷰 AI 응답 (100건/월) (출시예정)',
                '재방문/이탈 고객 분석',
                '메뉴 조합 추천',
                '경쟁사 분석 (주변 20곳) (출시예정)',
            ],
        },
        {
            title: '⚙️ 운영 자동화 (출시예정)',
            features: [
                '수요 예측 기반 발주 제안',
                '매출 연동 근무 스케줄 최적화',
            ],
        },
        {
            title: '🏢 본사-가맹점 연동',
            features: [
                '본사 매뉴얼 기반 AI 챗봇',
                '본사 공지사항 실시간 확인',
            ],
        },
        {
            title: '✨ 고객 지원',
            features: [
                '우선 지원 채널 제공',
                '전담 성공 매니저 배정',
            ],
        },
    ],
};

export const hqProcess = {
    title: 'RestoGenie HQ 단계별 도입 프로세스',
    phases: [
        {
            phase: 1,
            title: 'Access: 가맹점 운영 효율 극대화',
            items: [
                {
                    title: '가맹점 전용 AI 비서',
                    description: '본사 매뉴얼, 공지, 레시피를 학습한 AI 챗봇이 가맹점주의 모든 질문에 24시간 답변하며, 슈퍼바이저의 반복 업무를 줄여줍니다.',
                },
                {
                    title: '데이터 기반 점포 운영',
                    description: '각 가맹점의 POS, 배달, 광고 데이터를 분석하여 AI 분석 카드와 리포트를 제공, 점주가 데이터에 기반한 의사결정을 내리도록 돕습니다.',
                },
            ],
        },
        {
            phase: 2,
            title: 'Control: 본사 통합 관리 및 전략 수립',
            items: [
                {
                    title: '본사 통합 대시보드',
                    description: '전 가맹점의 핵심 성과 지표(KPI)를 실시간으로 비교 분석하여, 브랜드 전체의 현황을 한눈에 파악합니다.',
                },
                {
                    title: '자동 요약 리포트',
                    description: 'AI가 매주 우수/부진 가맹점 현황과 주요 이슈를 요약한 리포트를 자동 생성하여, 본사의 신속한 의사결정을 지원합니다.',
                },
                {
                    title: 'ERP 연동 (선택)',
                    description: '본사 ERP와 연동하여 원가, 재고 데이터를 통합 분석하고 브랜드 전체의 수익성을 극대화하는 전략을 수립합니다.',
                },
            ],
        },
    ],
};

export const hqContact = {
    title: '지금 바로 AI 혁신을 시작하세요',
    description: '전문 컨설턴트가 방문하여 귀사의 비즈니스에 최적화된 맞춤형 도입 전략과 기대효과를 상세히 안내해 드립니다.',
    ctaText: '전문가와 상담하기',
    ctaUrl: 'mailto:restogenie@ctrl-m.co.kr?subject=RestoGenie HQ 도입 문의',
};

// Store 요금제 기능 비교 테이블
export const storeFeatureComparison = [
    {
        category: '📊 데이터 연동 & 리포트',
        features: [
            { name: 'POS 데이터 집계', values: ['✓', '✓', '✓', '✓', '✓'] },
            { name: '배달 플랫폼 매출 상세 집계', values: ['✗', '✗', '✓', '✓', '✓'] },
            { name: '네이버/메타 광고 데이터 연동', values: ['✗', '✗', '✓', '✓', '✓'] },
            { name: 'AI 주간/월간 리포트', values: ['△', '✓', '✓', '✓', '✓'] },
            { name: '카카오톡 알림 및 리포트 전달', values: ['✗', '✗', '✓', '✓', '✓'] },
        ]
    },
    {
        category: '🤖 AI 에이전트',
        features: [
            { name: 'AI 에이전트 크레딧', values: ['1,000', '10,000', '30,000', '50,000', '70,000'] },
            { name: 'AI 분석 카드', values: ['△', '기본', '상세', '심화', '심화'] },
            { name: 'AI 기반 실행 제안', values: ['✗', '2건/월', '10건/월', '20건/월', '30건/월'] },
            { name: 'AI 챗봇', values: ['기본 문의', '운영 문의', '심층 분석', '전략 컨설팅', '전략 컨설팅'] },
            { name: 'AI 대화 기록 및 컨텍스트 학습', values: ['✗', '최근 30일', '최근 90일', '무제한', '무제한'] },
        ]
    },
    {
        category: '📈 마케팅 & 고객 관리',
        features: [
            { name: '온라인 리뷰 AI 응답 (출시 예정)', values: ['✗', '20건/월', '50건/월', '100건/월', '200건/월'] },
            { name: '재방문/이탈 고객 분석', values: ['10명/월', '50명/월', '200명/월', '350명/월', '500명/월'] },
            { name: '메뉴 조합 추천', values: ['✗', '✓', '✓', '✓', '✓'] },
            { name: '경쟁사 분석 (출시 예정)', values: ['✗', '주변 3곳', '주변 10곳', '주변 20곳', '지역구 전체'] },
        ]
    },
    {
        category: '⚙️ 운영 자동화 (Pro 이상 출시 예정)',
        features: [
            { name: '수요 예측 기반 발주 제안', values: ['✗', '✗', '✗', '✓', '✓'] },
            { name: '매출 연동 근무 스케줄 최적화', values: ['✗', '✗', '✗', '✓', '✓'] },
        ]
    },
    {
        category: '🏢 프랜차이즈 기능 (출시 예정)',
        features: [
            { name: '다수 매장 통합 관리', values: ['✗', '✗', '최대 3개', '최대 10개', '최대 10개'] },
            { name: '본사 전용 대시보드', values: ['✗', '✗', '✗', '✓', '✓'] },
        ]
    },
    {
        category: '✨ 고급 기능 및 지원',
        features: [
            { name: 'AI Vision (매장별)', values: ['✗', '✗', '✗', '✗', '1개 매장'] },
            { name: '우선 지원', values: ['✗', '✗', '✓', '✓', '✓'] },
            { name: '전담 성공 매니저', values: ['✗', '✗', '✗', '✓', '✓'] },
        ]
    }
];
