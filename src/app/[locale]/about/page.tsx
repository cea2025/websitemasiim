import { setRequestLocale } from 'next-intl/server';
import AboutHero from '@/components/about/AboutHero';
import OurStory from '@/components/about/OurStory';
import ManagementTeam from '@/components/about/ManagementTeam';
import RabbinicalApproval from '@/components/about/RabbinicalApproval';
import AboutValues from '@/components/about/AboutValues';
import AboutCTA from '@/components/about/AboutCTA';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <OurStory />
      <ManagementTeam />
      <RabbinicalApproval />
      <AboutValues />
      <AboutCTA />
    </>
  );
}

