import { setRequestLocale } from 'next-intl/server';
import ProgramsHero from '@/components/programs/ProgramsHero';
import ProgramsCards from '@/components/programs/ProgramsCards';
import ToolsSection from '@/components/programs/ToolsSection';
import ProgramsFAQ from '@/components/programs/ProgramsFAQ';

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProgramsHero />
      <ProgramsCards />
      <ToolsSection />
      <ProgramsFAQ />
    </>
  );
}

