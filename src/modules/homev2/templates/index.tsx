import ComparisonSection from "@modules/homev2/components/comparison-section";
import FaqSection from "@modules/homev2/components/faq-section";
import FinalCtaSection from "@modules/homev2/components/final-cta-section";
import HeroSection from "@modules/homev2/components/hero-section";
import PinnedFeaturesSection from "@modules/homev2/components/pinned-features-section";
import PricingSection from "@modules/homev2/components/pricing-section";
import ProductProofSection from "@modules/homev2/components/product-proof-section";
import SecurityCaseStudySection from "@modules/homev2/components/security-case-study-section";

export default function HomeV2Page() {
  return (
    <>
      <HeroSection />
      <ProductProofSection />
      <PinnedFeaturesSection />
      <ComparisonSection />
      <PricingSection />
      <SecurityCaseStudySection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
