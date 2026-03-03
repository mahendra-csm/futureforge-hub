import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ParticipantsSection from "@/components/ParticipantsSection";
import BenefitsSection from "@/components/BenefitsSection";
import CollaborationsSection from "@/components/CollaborationsSection";
import AbstractSection from "@/components/AbstractSection";
import CertificateSection from "@/components/CertificateSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import RegistrationForm from "@/components/RegistrationForm";
import { CountdownTimer, FAQSection, TestimonialsPlaceholder, WhatsAppButton, ExitIntentPopup } from "@/components/ExtrasSection";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <CountdownTimer />
      <AboutSection />
      <ParticipantsSection />
      <BenefitsSection />
      <CollaborationsSection />
      <AbstractSection />
      <CertificateSection />
      <WhyChooseSection />
      <RegistrationForm />
      <TestimonialsPlaceholder />
      <FAQSection />
      <WhatsAppButton />
      <ExitIntentPopup />
    </main>
  );
};

export default Index;
