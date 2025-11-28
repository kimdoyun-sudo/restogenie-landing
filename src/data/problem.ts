export interface IProblem {
    icon: string;
    iconColor: string;
    title: string;
    description: string;
    subtitle: string;
    stat?: {
        value: string;
        direction?: 'up' | 'down';
        variant: 'success' | 'error' | 'warning' | 'info';
    };
}

export const problems: IProblem[] = [
    {
        icon: 'FaDatabase',
        iconColor: 'text-slate-600', // 데이터/시스템 문제
        title: '여기저기 흩어져 있는 데이터',
        description: '배달앱, POS, 플랫폼... 여러 시스템에 데이터가 분산되어 전체 그림을 보기 어렵지 않으신가요?',
        subtitle: '(데이터 통합 불가, 시스템 파편화)',
        stat: {
            value: '시스템 5개+',
            variant: 'warning',
        },
    },
    {
        icon: 'FaBrain',
        iconColor: 'text-slate-600', // 데이터/시스템 문제
        title: '\'감\'에 의존하는 운영',
        description: '매출이 떨어져도 원인이 상권 때문인지, 운영 문제인지... 데이터 없이 \'정성적 예측\'만 하고 계신가요?',
        subtitle: '(정량적 데이터 부재, KPI 측정 불가)',
        stat: {
            value: '데이터 0%',
            variant: 'error',
        },
    },
    {
        icon: 'FaSackXmark',
        iconColor: 'text-red-500', // 비용 문제
        title: '예측 불가능한 비용',
        description: '눈덩이처럼 불어나는 배달 수수료, 광고비... 매달 정산 후 남는 게 없으신가요?',
        subtitle: '(높은 배달 수수료, 비효율적 광고 지출)',
        stat: {
            value: '평균 18%',
            direction: 'up',
            variant: 'error',
        },
    },
    {
        icon: 'FaBullhorn',
        iconColor: 'text-blue-500', // 성장 문제
        title: '막막한 마케팅',
        description: '배달앱 광고, SNS 운영... 뭐부터 해야 할지, 효과는 있는지 알 수 없어 답답하시죠?',
        subtitle: '(광고 효율 측정 불가, 전문성 부족)',
        stat: {
            value: 'ROI 불명',
            variant: 'info',
        },
    },
    {
        icon: 'FaFileInvoiceDollar',
        iconColor: 'text-amber-500', // 시간 문제
        title: '반복적인 행정 업무',
        description: '매일 반복되는 매출 정산, 보고서 작성, 리뷰 답변... 본질적인 업무에 집중할 시간이 부족합니다.',
        subtitle: '(행정력 부담, 리뷰 관리의 번거로움)',
        stat: {
            value: '일 3시간 소요',
            variant: 'warning',
        },
    },
    {
        icon: 'FaBookOpen',
        iconColor: 'text-amber-500', // 시간 문제
        title: '흩어진 운영 매뉴얼',
        description: '레시피, 운영 가이드, 본사 공지가 카톡과 문서에 분산되어 찾기 어렵고, 새 직원에게 전달하기도 번거로우신가요?',
        subtitle: '(매뉴얼 관리 어려움, 지식 공유 부재)',
        stat: {
            value: '자료 찾기 어려움',
            variant: 'warning',
        },
    },
];

export const problemSection = {
    title: '사장님, 혹시 이런 고민 하고 계신가요?',
    mobileScrollHint: '좌우로 스크롤하여 더 많은 고민 보기',
};
