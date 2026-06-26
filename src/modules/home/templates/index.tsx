import ChannelBookingSection from "@modules/home/components/channel-booking-section";
import DemoPricingSection from "@modules/home/components/demo-pricing-section";
import FeaturesSection from "@modules/home/components/features-section";
import FinalCtaSection from "@modules/home/components/final-cta-section";
import HeroSection from "@modules/home/components/hero-section";
import IntegrationsSection from "@modules/home/components/integrations-section";
import MobileHousekeepingSection from "@modules/home/components/mobile-housekeeping-section";
import PainPointsSection from "@modules/home/components/pain-points-section";
import PropertyTypesSection from "@modules/home/components/property-types-section";
import SupportSecuritySection from "@modules/home/components/support-security-section";
import TrustStrip from "@modules/home/components/trust-strip";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <PainPointsSection />
      <FeaturesSection />
      <ChannelBookingSection />
      <MobileHousekeepingSection />
      <PropertyTypesSection />
      <IntegrationsSection />
      <DemoPricingSection />
      <SupportSecuritySection />
      <FinalCtaSection />
    </>
  );
}
