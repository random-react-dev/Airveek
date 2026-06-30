import BusinessOutcomesSection from "@modules/homev2/components/business-outcomes-section";
import ComparisonSection from "@modules/homev2/components/comparison-section";
import CustomerStorySection from "@modules/homev2/components/customer-story-section";
import FaqSection from "@modules/homev2/components/faq-section";
import FinalCtaSection from "@modules/homev2/components/final-cta-section";
import HeroSection from "@modules/homev2/components/hero-section";
import PricingSection from "@modules/homev2/components/pricing-section";
import PlatformSection from "@/modules/homev2/components/platform-section";
import SecurityDataControlSection from "@modules/homev2/components/security-data-control-section";

export default function HomeV2Page() {
  return (
    <>
      <HeroSection />
      <PlatformSection />
      <BusinessOutcomesSection />
      <CustomerStorySection />
      <ComparisonSection />
      <PricingSection />
      {/* <SecurityDataControlSection /> */}
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
