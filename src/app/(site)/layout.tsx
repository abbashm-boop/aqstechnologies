import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { RouteProgress } from "@/components/layout/route-progress";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <RouteProgress />
      <SiteHeader />
      <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
      <SiteFooter />
      <WhatsAppButton />
    </>
  );
}
