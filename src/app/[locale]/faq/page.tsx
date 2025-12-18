import { setRequestLocale } from 'next-intl/server';
import FAQHero from '@/components/faq/FAQHero';
import FAQContent from '@/components/faq/FAQContent';
import FAQCTA from '@/components/faq/FAQCTA';

export default async function FAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FAQHero />
      <FAQContent />
      <FAQCTA />
    </>
  );
}

