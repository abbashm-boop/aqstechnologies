import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RouteProgress } from "@/components/layout/route-progress";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <RouteProgress />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
