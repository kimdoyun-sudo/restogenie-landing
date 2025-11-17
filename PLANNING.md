# RestoGenie 랜딩 페이지 기획서

## 📌 프로젝트 개요

- **프로젝트명**: RestoGenie 랜딩 페이지
- **목적**: 외식업 사장님을 위한 AI 운영 파트너 서비스 소개 및 웨이트리스트 모집
- **기술 스택**: Next.js 14 + TypeScript + Tailwind CSS
- **배포**: Vercel (https://restogenie-landing.vercel.app)
- **서비스**: https://www.restogenie.co.kr
- **소스 기반**: documents/index.html, documents/plans.html (HTML 템플릿에서 마이그레이션)

---

## 🎯 타겟 사용자

### Primary
- **RestoGenie Store (B2C)**: 개인 점주, 소규모 프랜차이즈 (1-10개 매장)
- **RestoGenie HQ (Enterprise)**: 가맹본부 (10개 이상 매장)

### 페르소나
- 30-50대 외식업 사장님
- 재고/인력/마케팅 관리에 어려움을 겪는 사용자
- 데이터 기반 운영에 관심이 있지만 전문 지식이 부족한 사용자

---

## 📐 정보 구조 (IA)

### 페이지 섹션 순서

```
1. Header (Sticky Navigation)
   ├─ 로고 (RestoGenie)
   ├─ 메뉴: 핵심 기능 | 요금제 | 연동 안내 | 대기자 등록
   └─ 모바일 햄버거 메뉴

2. Hero Section
   ├─ 메인 헤드라인: "사장님은 음식에만 집중하세요. 돈 새는 구멍은 AI가 막아드립니다."
   ├─ 서브 헤드라인: RestoGenie 소개
   ├─ CTA 버튼: 대기자 등록
   └─ 런칭 정보: "12월 정식 런칭 | 첫 100개 파트너 매장 한정 혜택"

3. Problem Section (6가지 페인포인트)
   ├─ 예측 불가능한 비용
   ├─ 끝없는 인력난
   ├─ 막막한 마케팅
   ├─ 반복적인 행정 업무
   ├─ '감'에 의존하는 운영
   └─ 신규 직원 교육
   * 모바일: 좌우 스크롤 가능 카드
   * 데스크톱: 그리드 레이아웃

4. Solution Section (Turning Point)
   ├─ 제목: "이제, 똑똑한 AI 파트너 'RestoGenie'에게 맡기세요."
   ├─ 설명: 데이터 통합 및 문제 해결 제시
   └─ YouTube 데모 영상 (ID: 4lVFVymrx4c)

5. Features Section (8개 핵심 기능)
   ├─ AI 챗봇: 본사 매뉴얼/레시피 기반 질의응답
   ├─ 통합 대시보드: POS/배달/광고 데이터 통합
   ├─ AI 마케팅: 고객 세분화 자동 프로모션
   ├─ 광고 최적화: ROAS 기반 AI 자동 조절
   ├─ 재고 관리: AI 수요 예측 폐기율 제로 도전
   ├─ 인력 관리: 매출 연동 AI 황금 스케줄
   ├─ 상권 분석: CCTV 연동 방문 전환율 측정
   └─ 리뷰 관리: 멀티 플랫폼 리뷰 통합 AI 답변

6. Integration Section (연동 안내)
   ├─ 제목: "사장님이 이미 사용 중인 프로그램과 완벽하게 연동됩니다."
   └─ 15+ 연동 로고
      ├─ 배달: 배달의민족, 요기요, 쿠팡이츠
      ├─ POS: OKPOS, EasyPOS, Toss Place, 페이히어, KIS, NICE, KICC
      ├─ 광고: 네이버, Meta
      └─ AI: 메이아이, OpenAI

7. Pricing Section (요금제)
   ├─ 탭 1: RestoGenie Store (B2C)
   │   ├─ Free: 1개월 무료 체험
   │   ├─ Basic: 9,900원/월
   │   ├─ Deluxe: 9,900원/월 (6개월 할인, 정가 29,900원)
   │   ├─ Pro: 29,900원/월 (6개월 할인, 정가 49,900원)
   │   ├─ Pro+: 89,900원/월
   │   └─ Enterprise: 별도 문의
   │   * 월간/연간 결제 토글 (연간 20% 할인)
   │   * 상세 기능 비교 테이블 (20+ 기능)
   │
   └─ 탭 2: RestoGenie HQ (Enterprise)
       ├─ Access Plan
       │   ├─ 초기 구축비: 10,000,000원 (200개 가맹점 기준)
       │   └─ 월 이용료: 가맹점당 50,000원
       ├─ Control Plan (선택)
       │   ├─ 본사 통합 대시보드: +15,000원/월
       │   └─ ERP 연동: 별도 문의
       └─ 단계별 도입 프로세스 설명

8. FAQ Section (5개 질문)
   ├─ RestoGenie는 안전한가요?
   ├─ 여러 기기에서 사용할 수 있나요?
   ├─ POS/배달앱 연동이 가능한가요?
   ├─ 초보자도 사용할 수 있나요?
   └─ 도움이 필요할 때는 어떻게 하나요?

9. Waitlist Section (대기자 등록)
   ├─ 제목: "성공하는 매장의 미래, 먼저 경험하세요."
   ├─ 혜택 리스트
   │   ├─ 가장 먼저 RestoGenie 도입 기회
   │   ├─ 런칭 기념 첫 3개월 50% 할인
   │   └─ 외식업 운영 노하우 뉴스레터 무료 구독
   ├─ 웨이트리스트 폼
   │   ├─ 매장명 (required)
   │   ├─ 이름 (required)
   │   ├─ 연락처 (required, 10-11자리)
   │   ├─ 이메일 (required, 정규식 검증)
   │   ├─ 지역 (optional)
   │   ├─ 도입목적/문의사항 (optional, textarea)
   │   └─ 개인정보 동의 (required, checkbox)
   └─ 제출 후 성공/에러 모달

10. Footer
    ├─ 회사 정보
    │   ├─ 회사명: 주식회사 컨트롤엠
    │   ├─ 대표자: 원종관
    │   ├─ 사업자등록번호: 794-87-03025
    │   ├─ 주소: 경기도 고양시 덕양구 으뜸로 130, 805호
    │   └─ 이메일: ctrl-m@ctrl-m.co.kr
    ├─ 빠른 링크: 핵심 기능, 요금제, 연동 안내
    ├─ 개인정보 처리방침 | 이용약관
    └─ COPYRIGHT 2025 CTRL-M Inc.
```

---

## 🚫 비활성화된 섹션

### Stats Section
- **이유**: 실제 통계 데이터 없음 (파트너 매장 수, 거래량 등)
- **대안**: 베타 런칭 후 실제 데이터로 활성화

### Testimonials Section
- **이유**: 고객 후기 없음 (베타 단계)
- **대안**: 베타 파트너 후기 수집 후 활성화

---

## 🎨 디자인 시스템

### 컬러 팔레트

```css
/* Primary Colors */
--primary-600: #4f46e5;      /* Indigo - 주요 버튼, 링크 */
--primary-700: #3730a3;      /* Indigo Dark - 호버 상태 */

/* Background */
--bg-primary: #f8fafc;       /* Slate-50 - 페이지 배경 */
--bg-card: #ffffff;          /* White - 카드 배경 */
--bg-section: #f1f5f9;       /* Slate-100 - 섹션 구분 */

/* Text */
--text-primary: #0f172a;     /* Slate-900 - 제목, 본문 */
--text-secondary: #475569;   /* Slate-600 - 부제목, 설명 */
--text-tertiary: #94a3b8;    /* Slate-400 - 보조 텍스트 */

/* Accent Colors */
--success: #10b981;          /* Green - 성공 상태 */
--error: #ef4444;            /* Red - 에러, 할인 뱃지 */
--warning: #f59e0b;          /* Amber - 경고 */
--info: #3b82f6;             /* Blue - 정보, 추천 */
```

### 타이포그래피

```css
/* 폰트 */
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;

/* 모바일 기본 */
--text-base: 15px;

/* 데스크톱 기본 */
@media (min-width: 768px) {
  --text-base: 16px;
}

/* 헤드라인 크기 */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### 레이아웃

```css
/* 컨테이너 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;  /* mobile */
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;  /* desktop */
  }
}

/* 섹션 간격 */
--spacing-section-mobile: 4rem;   /* 64px */
--spacing-section-desktop: 6rem;  /* 96px */

/* 카드 간격 */
--spacing-card: 1.5rem;  /* 24px */
```

### 애니메이션

```css
/* Fade-in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
  opacity: 0;
}

/* Modal Transitions */
.modal-enter {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave {
  opacity: 1;
  transform: scale(1);
}

.modal-leave-active {
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Card Hover */
.card-hover {
  transition: all 0.3s ease-in-out;
}

.card-hover:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}
```

---

## 🎭 아이콘 시스템

### 라이브러리
- **React Icons**: Font Awesome (fa6), Feather Icons (fi), Bootstrap Icons (bs), Phosphor Icons (pi)

### 아이콘 매핑

#### Problem Section
```tsx
import {
  FaSackXmark,                          // 예측 불가능한 비용
  FaPersonWalkingDashedLineArrowRight,  // 끝없는 인력난
  FaBullhorn,                           // 막막한 마케팅
  FaFileInvoiceDollar,                  // 반복적인 행정 업무
  FaBrain,                              // '감'에 의존하는 운영
  FaBookOpen                            // 신규 직원 교육
} from 'react-icons/fa6';
```

#### Features Section
```tsx
import {
  FiMessageCircle,  // AI 챗봇
  FiBarChart2,      // 통합 대시보드
  FiTarget,         // AI 마케팅
  FiTrendingUp,     // 광고 최적화
  FiPackage,        // 재고 관리
  FiCalendar,       // 인력 관리
  FiMapPin,         // 상권 분석
  FiStar            // 리뷰 관리
} from 'react-icons/fi';
```

#### Stats Section (비활성화 예정)
```tsx
import { BsBarChartFill, BsFillStarFill } from 'react-icons/bs';
import { PiGlobeFill } from 'react-icons/pi';
```

---

## 📝 콘텐츠 가이드

### 톤 앤 매너
- **친근하고 공감하는 톤**: "사장님", "~하셨나요?", "~해드립니다"
- **구체적인 문제 제시**: "버려지는 식자재", "눈덩이처럼 불어나는 수수료"
- **솔루션 중심**: "AI가 ~", "자동으로 ~", "데이터 기반 ~"
- **긴급감 조성**: "첫 100개 매장", "12월 런칭"

### 주요 메시지

#### Value Proposition
> "사장님은 음식에만 집중하세요. 돈 새는 구멍은 AI가 막아드립니다."

#### Problem Statement
> "매달 정산 후 남는 게 없으신가요?"
> "오늘도 직원이 그만뒀나요?"
> "광고비를 쓰고 있지만 효과는 알 수 없죠?"

#### Solution Statement
> "흩어져 있는 매장 데이터를 하나로 모아, 사장님이 놓치고 있던 문제의 원인을 찾아내고 해결책까지 제시합니다."

---

## 🖼️ 이미지 가이드

### 필수 이미지 (Placeholder 사용)

#### Hero Section
- **파일명**: `/images/hero-mockup.webp`
- **크기**: 1200x800px 권장
- **내용**: RestoGenie 대시보드 메인 화면 스크린샷 또는 목업
- **현재**: Placeholder 사용

#### Features Section (8개)
- **파일명**: `/images/feature-{1-8}.webp`
- **크기**: 600x400px 권장
- **내용**: 각 기능별 실제 화면 스크린샷
- **현재**: placehold.co 사용
  ```
  https://placehold.co/600x400/e0e7ff/4338ca?text=AI+챗봇+데모
  https://placehold.co/600x400/e0f2fe/0891b2?text=통합+대시보드
  https://placehold.co/600x400/dbeafe/1d4ed8?text=AI+마케팅
  https://placehold.co/600x400/dbeafe/1d4ed8?text=광고+최적화
  https://placehold.co/600x400/fee2e2/b91c1c?text=AI+재고관리
  https://placehold.co/600x400/fef3c7/b45309?text=AI+인력관리
  https://placehold.co/600x400/f3e8ff/7e22ce?text=AI+상권분석
  https://placehold.co/600x400/dcfce7/166534?text=AI+리뷰관리
  ```

### 연동 로고 (URL 사용 가능)
- **배달의민족**: `https://rg-proto.jp.ngrok.io/images/logo_baemin.png`
- **요기요**: `https://rg-proto.jp.ngrok.io/images/logo_yogiyo.png`
- **쿠팡이츠**: `https://rg-proto.jp.ngrok.io/images/logo_coupangeats.png`
- **OKPOS**: `https://rg-proto.jp.ngrok.io/images/logo_okpos.png`
- **EasyPOS**: `https://rg-proto.jp.ngrok.io/images/logo_easypos.png`
- **Toss Place**: `https://rg-proto.jp.ngrok.io/images/logo_tossplace.png`
- **페이히어**: `https://rg-proto.jp.ngrok.io/images/logo_payhere.png`
- **네이버**: `https://rg-proto.jp.ngrok.io/images/logo_naver.png`
- **Meta**: `https://rg-proto.jp.ngrok.io/images/logo_meta.png`
- **메이아이**: `https://rg-proto.jp.ngrok.io/images/logo_mayi.png`
- **OpenAI**: `https://rg-proto.jp.ngrok.io/images/logo_openai.png`
- **KIS, NICE, KICC**: 텍스트로 표시

### 메타 이미지
- **OG Image**: `/images/og-image.jpg` (1200x675px, SNS 공유용)
- **Twitter Image**: `/images/twitter-image.jpg` (1200x675px)
- **Favicon**: `/src/app/favicon.ico` (32x32px 또는 SVG)

---

## 🔌 외부 연동

### Google Apps Script (웨이트리스트)
- **URL**: `https://script.google.com/macros/s/AKfycbxuDvGKClt8EIobA0eA4fVmpuxpf3nVeC9SgWPeUDQMKeJmk9wx7-EHP0VScFJ1JM1I2Q/exec`
- **Method**: POST
- **Content-Type**: FormData
- **응답 형식**: `{ result: 'success' }` 또는 `{ result: 'error', message: '...' }`

### 채널톡 (고객 지원)
- **플러그인 키**: `6730846e-0cb4-4d5e-8997-7d768be6b050`
- **위치**: 우측 하단 플로팅 버튼
- **연동 위치**: `layout.tsx` (전역)

### YouTube 데모 영상
- **Video ID**: `4lVFVymrx4c`
- **설정**: autoplay=1, mute=1, loop=1, controls=0
- **위치**: Solution Section

---

## 📱 반응형 디자인

### Breakpoints

```css
/* Mobile First */
/* xs: 0px ~ 639px */

/* sm: 640px ~ 767px */
@media (min-width: 640px) { ... }

/* md: 768px ~ 1023px */
@media (min-width: 768px) { ... }

/* lg: 1024px ~ 1279px */
@media (min-width: 1024px) { ... }

/* xl: 1280px ~ 1535px */
@media (min-width: 1280px) { ... }

/* 2xl: 1536px+ */
@media (min-width: 1536px) { ... }
```

### 모바일 최적화

#### Problem Section
- **모바일**: 좌우 스크롤 가능한 카드 (90% width)
- **데스크톱**: 3열 그리드

#### Pricing Table
- **모바일**: 가로 스크롤, 첫 번째 컬럼 sticky
- **데스크톱**: 전체 테이블 표시

#### Navigation
- **모바일**: 햄버거 메뉴 (토글)
- **데스크톱**: 수평 메뉴

---

## 🧪 폼 검증 규칙

### 웨이트리스트 폼

#### 이메일
```typescript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  alert('올바른 이메일 주소를 입력해주세요.');
}
```

#### 전화번호
```typescript
const phoneCleaned = phone.replace(/-/g, '');
const phoneRegex = /^\d{10,11}$/;
if (!phoneRegex.test(phoneCleaned)) {
  alert('올바른 연락처 형식(10-11자리 숫자)을 입력해주세요.');
}
```

#### 필수 항목
```typescript
if (!storeName || !name || !phone || !email || !privacy) {
  alert('모든 필수 항목을 입력해주세요.');
  return;
}
```

---

## 🚀 향후 계획

### 베타 출시 후 추가 예정
1. **Stats Section 활성화** - 실제 파트너 매장 수, 거래량 데이터 표시
2. **Testimonials Section 활성화** - 베타 파트너 후기 수집 및 표시
3. **실제 스크린샷** - Placeholder 이미지를 실제 제품 화면으로 교체
4. **Gemini API 데모** (선택) - 마케팅 문구 생성 기능 추가

### 고려 중인 기능
- 블로그/뉴스레터 섹션
- 케이스 스터디 페이지
- 파트너 성공 사례
- 상세 기능 소개 페이지 (별도)

---

## 📊 성공 지표 (KPI)

### 주요 목표
- **웨이트리스트 등록**: 100개 파트너 매장
- **전환율**: 방문자 대비 웨이트리스트 등록 5% 이상
- **페이지 체류 시간**: 평균 2분 이상
- **채널톡 문의**: 주간 10건 이상

### 추적 필요 이벤트
- Hero CTA 클릭
- Problem 섹션 스크롤 깊이
- YouTube 영상 재생
- Pricing 탭 전환
- Waitlist 폼 시작 vs 완료율
- 채널톡 오픈

---

## 📞 연락처

- **이메일**: ctrl-m@ctrl-m.co.kr
- **회사**: 주식회사 컨트롤엠
- **대표**: 원종관
- **사업자등록번호**: 794-87-03025
- **주소**: 경기도 고양시 덕양구 으뜸로 130, 805호(덕은동, 위프라임트윈타워)

---

*최종 업데이트: 2025-01-17*
