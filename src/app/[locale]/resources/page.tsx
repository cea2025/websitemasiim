import { setRequestLocale } from 'next-intl/server';
import ResourcesHero from '@/components/resources/ResourcesHero';
import MarketCharts from '@/components/resources/MarketCharts';
import FeaturedContent from '@/components/resources/FeaturedContent';
import ToolsSection from '@/components/resources/ToolsSection';
import ArticlesSection from '@/components/resources/ArticlesSection';
import PodcastsSection from '@/components/resources/PodcastsSection';

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ResourcesHero />
      <MarketCharts />
      <FeaturedContent />
      <ToolsSection />
      <ArticlesSection />
      <PodcastsSection />
    </>
  );
}

