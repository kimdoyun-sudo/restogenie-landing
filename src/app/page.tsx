import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Benefits from "@/components/Benefits/Benefits";
import Integration from "@/components/Integration";
import FAQ from "@/components/FAQ";
import Waitlist from "@/components/Waitlist/Waitlist";
import Container from "@/components/Container";
import Section from "@/components/Section";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Container>
        <Problem />

        <Solution />

        <Benefits />

        <Section
          id="integration"
          title="연동 안내"
          description="RestoGenie는 다양한 외식업 솔루션과 연동됩니다"
        >
          <Integration />
        </Section>

        <FAQ />

        <Section
          id="waitlist"
          title="대기자 명단 등록"
          description="26년 정식 런칭 시 특별 혜택을 받으세요"
        >
          <Waitlist />
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
