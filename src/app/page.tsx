import Navigation from '@/components/Navigation'
import Hero from '@/components/sections/Hero'
import BentoSpecs from '@/components/sections/BentoSpecs'
import VisualEvidence from '@/components/sections/VisualEvidence'
import Performance from '@/components/sections/Performance'
import MarketPrice from '@/components/sections/MarketPrice'
import DeliveryProtocol from '@/components/sections/DeliveryProtocol'
import PurchaseProtocol from '@/components/sections/PurchaseProtocol'
import WhatsAppFAB from '@/components/WhatsAppFAB'

export default function Home() {
  return (
    <main className="bg-void min-h-screen">
      <Navigation />
      <Hero />
      <BentoSpecs />
      <VisualEvidence />
      <Performance />
      <MarketPrice />
      <DeliveryProtocol />
      <PurchaseProtocol />
      <WhatsAppFAB />

      {/* Footer */}
      <footer className="border-t border-border-dim py-8 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center bg-void gap-4">
        <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          © 2026 VOID_ENGINEERING // ASSET_TRANSFER_DEPT
        </p>
        <div className="flex gap-4 items-center">
          <div className="w-2 h-2 rounded-full bg-cyber/20" />
          <div className="w-2 h-2 rounded-full bg-cyber/40" />
          <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
        </div>
        <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
          Maldonado // UY
        </p>
      </footer>
    </main>
  )
}
