const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-32 px-5 bg-background">
            <p className="text-lg font-medium text-center">주요 배달 플랫폼 및 POS 시스템과 <span className="text-secondary">연동</span> 가능</p>
            <div className="mt-5 w-full flex flex-wrap flex-row items-center justify-evenly gap-5 sm:gap-10 opacity-45 logos-container">
                {/* 배달의민족 */}
                <svg width="140" height="48" viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="10" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#00C4C4">배달의민족</text>
                </svg>

                {/* 쿠팡이츠 */}
                <svg width="120" height="48" viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="5" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#EA4335">쿠팡이츠</text>
                </svg>

                {/* 요기요 */}
                <svg width="100" height="48" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="10" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#F43142">요기요</text>
                </svg>

                {/* 네이버 */}
                <svg width="100" height="48" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="10" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#03C75A">NAVER</text>
                </svg>

                {/* 카카오 */}
                <svg width="100" height="48" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="5" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#000000">Kakao</text>
                </svg>

                {/* 토스 */}
                <svg width="80" height="48" viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5/6">
                    <text x="10" y="32" fontFamily="'Pretendard', -apple-system, sans-serif" fontSize="26" fontWeight="800" fill="#0064FF">Toss</text>
                </svg>
            </div>
        </section>
    )
}

export default Logos