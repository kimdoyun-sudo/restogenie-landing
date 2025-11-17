export interface IWaitlistField {
    id: string;
    name: string;
    label: string;
    type: 'text' | 'email' | 'tel' | 'textarea' | 'checkbox';
    placeholder?: string;
    required: boolean;
    pattern?: string;
    rows?: number;
    maxLength?: number;
}

export interface IWaitlistBenefit {
    icon: string;
    iconColor: string;
    text: string;
}

export const waitlistSection = {
    title: '성공하는 매장의 미래, 먼저 경험하세요.',
    description: '지금 대기자 명단에 등록하시면 특별한 런칭 혜택을 가장 먼저 받아보실 수 있습니다.',
};

export const waitlistBenefits: IWaitlistBenefit[] = [
    {
        icon: 'FaStar',
        iconColor: 'text-amber-400',
        text: '가장 먼저 레스토지니 도입 기회 제공',
    },
    {
        icon: 'FaTags',
        iconColor: 'text-amber-400',
        text: '런칭 기념, 첫 3개월 50% 할인 혜택',
    },
    {
        icon: 'FaEnvelopeOpenText',
        iconColor: 'text-amber-400',
        text: '외식업 운영 노하우 뉴스레터 무료 구독',
    },
];

export const waitlistFields: IWaitlistField[] = [
    {
        id: 'storeName',
        name: 'storeName',
        label: '매장명',
        type: 'text',
        placeholder: '매장명을 입력하세요',
        required: true,
    },
    {
        id: 'name',
        name: 'name',
        label: '이름',
        type: 'text',
        placeholder: '성함을 입력하세요',
        required: true,
    },
    {
        id: 'phone',
        name: 'phone',
        label: '연락처',
        type: 'tel',
        placeholder: '\'-\' 없이 숫자만 입력하세요',
        required: true,
        pattern: '^\\d{10,11}$',
    },
    {
        id: 'email',
        name: 'email',
        label: '이메일',
        type: 'email',
        placeholder: '이메일 주소를 입력하세요',
        required: true,
        pattern: '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$',
    },
    {
        id: 'location',
        name: 'location',
        label: '지역 (선택)',
        type: 'text',
        placeholder: '예: 서울시 강남구',
        required: false,
    },
    {
        id: 'inquiry',
        name: 'inquiry',
        label: '도입목적 / 문의사항 (선택)',
        type: 'textarea',
        placeholder: '도입하시려는 목적이나 궁금한 점을 500자 이내로 알려주세요.',
        required: false,
        rows: 3,
        maxLength: 500,
    },
    {
        id: 'privacy',
        name: 'privacy',
        label: '개인정보 처리방침에 동의합니다.',
        type: 'checkbox',
        required: true,
    },
];

export const waitlistFormConfig = {
    submitButtonText: '런칭 혜택 받고 대기자 등록하기',
    submitButtonLoadingText: '등록 중...',
    successModalTitle: '접수 완료!',
    successModalMessage: '레스토지니 대기자 명단에 등록되었습니다.\n런칭 소식을 가장 먼저 알려드릴게요!',
    successModalButtonText: '확인',
    errorModalTitle: '오류 발생',
    errorModalMessage: '죄송합니다. 요청 처리 중 오류가 발생했습니다.\n잠시 후 다시 시도하거나 고객센터로 문의해주세요.',
    errorModalButtonText: '확인',
    privacyPolicyUrl: '#', // TODO: 실제 개인정보 처리방침 페이지 URL로 변경
    googleAppsScriptUrl: 'https://script.google.com/macros/s/AKfycbxuDvGKClt8EIobA0eA4fVmpuxpf3nVeC9SgWPeUDQMKeJmk9wx7-EHP0VScFJ1JM1I2Q/exec',
};
