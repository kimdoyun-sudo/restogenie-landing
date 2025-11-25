import { FaCheck } from "react-icons/fa6";

import { IBenefit, IFutureBenefit } from "@/types"

// RestoGenie Store 핵심 기능 (가맹점주용)
export const storeBenefits: IBenefit[] = [
    {
        title: "통합 대시보드",
        description: "POS, 배달의민족, 쿠팡이츠, 네이버 광고... 주요 데이터를 한 곳에 모아 보여줍니다. 오늘 얼마를 벌었는지, 어떤 채널이 문제인지 파악하세요.",
        badge: "통합 관리",
        badgeColor: "bg-blue-100 text-blue-800",
        bullets: [
            {
                title: "POS, 배달앱, 광고 채널 데이터 통합",
                description: "매출 현황을 한눈에 확인",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "실시간 채널별 성과 분석",
                description: "데이터 기반 의사결정",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "카카오톡 일일 마감 리포트 발송",
                description: "언제 어디서나 매출 확인",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/카테고리 별 판매성과.png"
    },
    {
        title: "AI 자동 요약 리포트",
        description: "AI가 매주/매월 매장 데이터를 분석하여 주요 이슈, 개선 포인트, 성과를 자동으로 요약한 리포트를 생성합니다. 복잡한 데이터 분석 없이도 한눈에 매장 상황을 파악하세요.",
        badge: "AI 리포트",
        badgeColor: "bg-indigo-100 text-indigo-800",
        bullets: [
            {
                title: "주간/월간 자동 요약 리포트",
                description: "AI 기반 핵심 이슈 분석",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "매출 증감 원인 자동 분석",
                description: "데이터 기반 인사이트 제공",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "개선 포인트 및 액션 플랜 제안",
                description: "실행에 참고할 수 있는 조언",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/AI 자동요약 리포트.png"
    },
    {
        title: "AI 챗봇",
        description: "본사 매뉴얼, 레시피, 프로모션 공지를 AI가 학습합니다. \"신메뉴 레시피 알려줘\", \"오늘 마감 매출 얼마야?\" 음성이나 텍스트로 물어보면 AI가 답변을 도와드립니다.",
        badge: "AI 비서",
        badgeColor: "bg-purple-100 text-purple-800",
        bullets: [
            {
                title: "본사 매뉴얼/레시피 기반 질의응답",
                description: "음성 또는 텍스트로 답변 제공",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "실시간 매장 데이터(매출, 재고) 조회",
                description: "궁금한 정보를 빠르게 확인 가능",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "(출시 예정) 신규 직원 자동 교육",
                description: "교육 비용 절감 및 표준화",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/AI Chat.png"
    },
    {
        title: "마케팅 최적화",
        description: "고객 데이터를 분석해 재방문/이탈 고객 식별을 도와드리고, 고객 세분화를 통해 맞춤형 프로모션을 발송합니다. 광고 효율(ROAS)을 분석하여 비효율 채널 개선을 도와드립니다.",
        badge: "매출 증대",
        badgeColor: "bg-blue-100 text-blue-800",
        bullets: [
            {
                title: "재방문/이탈 고객 자동 분석",
                description: "고객 행동 패턴 기반 타겟팅",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "고객 세분화 및 맞춤형 프로모션",
                description: "마케팅 업무 자동화 지원",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "실시간 광고(ROAS) 채널별 분석",
                description: "광고비 효율 분석",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "(출시 예정) AI 에이전트 기반 자동 On/Off 및 CPC 조정",
                description: "승인만으로 광고 자동 조절",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/광고비용.png"
    },
    {
        title: "리뷰 관리",
        description: "배달앱, 네이버 등 모든 플랫폼의 고객 리뷰를 한 곳에서 모아보고, AI가 생성해주는 답변으로 신속하게 응대하세요.",
        badge: "리뷰 관리",
        badgeColor: "bg-green-100 text-green-800",
        bullets: [
            {
                title: "멀티 플랫폼 리뷰 통합 관리",
                description: "모든 리뷰를 한 곳에서",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "(출시 예정) AI 기반 리뷰 답글 자동 생성",
                description: "신속한 고객 응대",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "(출시 예정) 클레임 리뷰 자동 케어",
                description: "부정 리뷰 관리 자동화",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/리뷰 현황.png"
    },
    {
        title: "상권 분석",
        description: "CCTV를 연동해 매장 앞 유동인구와 방문 전환율을 분석합니다. 매출 하락의 원인이 상권 문제인지, 운영 문제인지 데이터로 정확히 파악하세요.",
        badge: "AI Vision",
        badgeColor: "bg-purple-100 text-purple-800",
        bullets: [
            {
                title: "실시간 유동인구 분석",
                description: "CCTV 기반 방문객 추적",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "피크 시간대 측정",
                description: "시간대별 방문, 주문 전환 파악",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "방문객 성별/연령대 분석",
                description: "타겟 고객 파악",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/features/피크타임.png"
    },
];

// RestoGenie HQ 핵심 기능 (가맹본부용)
export const hqBenefits: IBenefit[] = [
    {
        title: "전 가맹점 통합 대시보드",
        description: "등록된 가맹점의 핵심 성과 지표(KPI)를 비교 분석합니다. 매출, 재고, 고객 만족도를 한눈에 파악하고 우수 점포와 부진 점포를 확인하세요.",
        badge: "통합 관리",
        badgeColor: "bg-indigo-100 text-indigo-800",
        bullets: [
            {
                title: "전 가맹점 KPI 실시간 모니터링",
                description: "매출, 재고, 고객만족도 통합 대시보드",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "우수/부진 가맹점 자동 식별",
                description: "성과 기반 순위 및 알림",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "지역별/기간별 비교 분석",
                description: "데이터 기반 전략 수립",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/hq/dashboard.png"
    },
    {
        title: "AI 자동 요약 리포트",
        description: "AI가 매주/매월 전 가맹점 데이터를 분석하여 주요 이슈, 우수 사례, 개선 필요 사항을 자동으로 요약한 리포트를 생성합니다. 본사 경영진의 신속한 의사결정을 지원합니다.",
        badge: "AI 리포트",
        badgeColor: "bg-blue-100 text-blue-800",
        bullets: [
            {
                title: "주간/월간 자동 요약 리포트",
                description: "AI 기반 핵심 이슈 분석",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "우수 사례 및 베스트 프랙티스 공유",
                description: "성공 점포 노하우 전파",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "개선 필요 가맹점 자동 알림",
                description: "조기 대응으로 리스크 관리",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/hq/weekly-report.png"
    },
    {
        title: "본사 매뉴얼 AI 학습",
        description: "본사의 운영 매뉴얼, 레시피, 프로모션 가이드를 AI가 학습합니다. 각 가맹점의 AI 챗봇이 본사 매뉴얼 기반으로 질문에 답변하여 슈퍼바이저의 반복 업무를 줄여줍니다.",
        badge: "교육 자동화",
        badgeColor: "bg-purple-100 text-purple-800",
        bullets: [
            {
                title: "본사 매뉴얼/레시피 자동 학습",
                description: "전 가맹점 AI 챗봇에 실시간 반영",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "슈퍼바이저 반복 업무 자동화",
                description: "AI 기반 가맹점 지원",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "신규 가맹점 교육 비용 절감",
                description: "표준화된 AI 교육 시스템",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/hq/manual.png"
    },
    {
        title: "가맹점 커뮤니케이션",
        description: "본사 공지사항, 프로모션 안내, 신제품 정보를 전 가맹점에 빠르게 전달합니다. 각 가맹점의 확인 여부를 추적하고 중요 공지는 자동 리마인드합니다.",
        badge: "소통 강화",
        badgeColor: "bg-red-100 text-red-800",
        bullets: [
            {
                title: "본사 공지사항 실시간 전달",
                description: "전 가맹점 동시 알림",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "확인 여부 자동 추적",
                description: "미확인 가맹점 자동 리마인드",
                icon: <FaCheck size={20} className="text-indigo-500" />
            },
            {
                title: "양방향 커뮤니케이션",
                description: "가맹점 피드백 수집 및 분석",
                icon: <FaCheck size={20} className="text-indigo-500" />
            }
        ],
        imageSrc: "/images/hq/communication.png"
    },
];

// RestoGenie Store 차후 지원 예정
export const storeFutureFeatures: IFutureBenefit[] = [
    {
        title: "재고 관리",
        description: "판매 데이터를 분석해 필요한 식자재를 정확히 예측하고, 유통기한 임박 상품을 먼저 사용하도록 알려줍니다.",
        badge: "차후 지원 예정",
        badgeColor: "bg-slate-100 text-slate-600",
        bullets: [
            {
                title: "AI 수요 예측 기반 발주량 제안",
                description: "과다/과소 발주 방지",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "유통기한 임박 알림",
                description: "폐기율 감소 지원",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "원클릭 자동 발주",
                description: "발주 업무 자동화",
                icon: <FaCheck size={20} className="text-slate-400" />
            }
        ]
    },
    {
        title: "인력 관리",
        description: "과거 매출, 날씨, 주변 이벤트 데이터를 기반으로 적정 근무 인원을 추천합니다.",
        badge: "차후 지원 예정",
        badgeColor: "bg-slate-100 text-slate-600",
        bullets: [
            {
                title: "시간대별 최적 근무 인원 추천",
                description: "인건비 관리 지원",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "매출/날씨/이벤트 연동 예측",
                description: "데이터 기반 스케줄링",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "자동 스케줄 생성 및 공유",
                description: "스케줄 관리 자동화",
                icon: <FaCheck size={20} className="text-slate-400" />
            }
        ]
    }
];

// RestoGenie HQ 차후 지원 및 커스터마이징 논의
export const hqFutureFeatures: IFutureBenefit[] = [
    {
        title: "본사 ERP 연동",
        description: "본사 ERP와 연동하여 원가, 재고, 물류 데이터를 통합 분석합니다. 각 가맹점의 수익성을 정확히 파악하고 브랜드 전체의 수익성을 극대화하는 전략을 수립하세요.",
        badge: "커스터마이징 논의",
        badgeColor: "bg-slate-100 text-slate-600",
        bullets: [
            {
                title: "원가/재고/물류 데이터 통합",
                description: "ERP 시스템 완벽 연동",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "가맹점별 수익성 심층 분석",
                description: "메뉴별/지역별 원가 분석",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "AI 기반 수익 최적화 제안",
                description: "데이터 기반 전략 수립",
                icon: <FaCheck size={20} className="text-slate-400" />
            }
        ]
    },
    {
        title: "브랜드 전략 수립 지원",
        description: "전 가맹점의 매출, 고객, 상권 데이터를 통합 분석하여 신메뉴 출시, 프로모션 기획, 입지 선정 등 브랜드 전략 수립을 AI가 지원합니다.",
        badge: "차후 지원 예정",
        badgeColor: "bg-slate-100 text-slate-600",
        bullets: [
            {
                title: "신메뉴 출시 시뮬레이션",
                description: "지역별/연령대별 수요 예측",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "프로모션 효과 분석",
                description: "과거 프로모션 성과 기반 제안",
                icon: <FaCheck size={20} className="text-slate-400" />
            },
            {
                title: "신규 입지 추천",
                description: "상권 분석 기반 최적 입지 제안",
                icon: <FaCheck size={20} className="text-slate-400" />
            }
        ]
    }
];

export const featuresSection = {
    storeTitle: 'RestoGenie Store 핵심 기능',
    storeSubtitle: '가맹점주를 위한 AI 운영 파트너',
    hqTitle: 'RestoGenie HQ 핵심 기능',
    hqSubtitle: '가맹본부를 위한 AI 경영 솔루션',
    storeFutureTitle: '차후 지원 예정',
    hqFutureTitle: '차후 지원 및 커스터마이징 논의',
};

// 하위 호환성을 위한 기본 export (Store 기능)
export const benefits = storeBenefits;
