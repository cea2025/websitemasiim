import { setRequestLocale } from 'next-intl/server';
import HowItWorksHero from '@/components/how-it-works/HowItWorksHero';
import ProcessSteps from '@/components/how-it-works/ProcessSteps';
import HowItWorksCTA from '@/components/how-it-works/HowItWorksCTA';

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HowItWorksHero />
      <ProcessSteps />
      <HowItWorksCTA />
    </>
  );
}

