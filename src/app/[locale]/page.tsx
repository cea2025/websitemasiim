import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Rabbis from '@/components/sections/Rabbis';
import CombinedSavings from '@/components/sections/CombinedSavings';
import Statistics from '@/components/sections/Statistics';
import HowItWorks from '@/components/sections/HowItWorks';
import Program from '@/components/sections/Program';
import Values from '@/components/sections/Values';
import ForWho from '@/components/sections/ForWho';
import CTA from '@/components/sections/CTA';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Rabbis />
      <CombinedSavings />
      <Statistics />
      <HowItWorks />
      <Program />
      <Values />
      <ForWho />
      <CTA />
    </>
  );
}
