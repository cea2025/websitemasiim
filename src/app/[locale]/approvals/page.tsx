import { setRequestLocale } from 'next-intl/server';
import ApprovalsHero from '@/components/approvals/ApprovalsHero';
import ApprovalsGrid from '@/components/approvals/ApprovalsGrid';
import ApprovalsPartners from '@/components/approvals/ApprovalsPartners';

export default async function ApprovalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ApprovalsHero />
      <ApprovalsGrid />
      <ApprovalsPartners />
    </>
  );
}

