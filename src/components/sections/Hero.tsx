'use client'

import Image from 'next/image'
import { motion } from 'motion/react'
import { SALE_DATA } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col w-full bg-void overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-grid" />

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col lg:flex-row items-center justify-center max-w-[1440px] mx-auto w-full px-6 py-24 lg:px-12 gap-12 lg:gap-24 mt-16">
        {/* Left Column */}
        <div className="flex-1 flex flex-col items-start w-full max-w-2xl space-y-8">
          {/* Location Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 font-mono text-sm tracking-wide text-text-muted border border-border-dim/50 rounded-full px-4 py-1.5 bg-surface/50"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber" />
            </span>
            <span>MALDONADO // UY</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-2"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-[7rem] font-bold leading-[0.85] tracking-tighter text-white uppercase font-display">
              M3 PRO
              <br />
              <span className="text-text-muted/40">18GB RAM</span>
              <br />
              <span className="text-text-muted/40">512GB SSD</span>
            </h1>
          </motion.div>

          {/* Specs mini-grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-x-8 gap-y-2 font-mono text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <span className="text-cyber text-base">◈</span>
              <span>12-CORE CPU</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber text-base">◈</span>
              <span>18-CORE GPU</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber text-base">◈</span>
              <span>{SALE_DATA.battery.health}% BATTERY</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyber text-base">◈</span>
              <span>PRISTINE COND.</span>
            </div>
          </motion.div>

          {/* Price + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-6 w-full pt-4"
          >
            {/* Price Badge */}
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
                Asking Price
              </span>
              <div className="inline-flex items-center justify-center px-6 py-3 border border-border-dim rounded-lg bg-surface/30 backdrop-blur-sm">
                <span className="font-mono text-2xl font-bold text-white tracking-tight">
                  US$ {SALE_DATA.price.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden sm:block h-12 w-px bg-border-dim" />

            {/* CTA */}
            <a
              href={SALE_DATA.contact.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-white text-void font-mono font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-lg w-full sm:w-auto transition-all hover:bg-cyber hover:scale-[1.02] duration-200 text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <span>Consultá por WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column — Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 w-full flex items-center justify-center lg:justify-end group"
        >
          <div className="relative w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-surface to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl scale-75 group-hover:scale-100" />

            {/* Product image */}
            <div className="relative z-10 w-full transition-all duration-500 ease-out transform group-hover:rotate-1 group-hover:scale-[1.02]">
              <div
                className="glow-bloom w-full aspect-[4/3] relative rounded-xl shadow-2xl overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(black 80%, transparent 100%)',
                  WebkitMaskImage:
                    'linear-gradient(black 80%, transparent 100%)',
                }}
              >
                <Image
                  src="/images/Apple-MacBook-Pro.jpg"
                  alt="MacBook Pro M3 Pro 16 Space Black — vista superior"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 90vw, 50vw"
                />
              </div>

              {/* Floating data points */}
              <div className="absolute -right-4 top-10 bg-void/90 border border-border-dim p-2 rounded backdrop-blur-md hidden lg:block animate-[pulse-slow_3s_ease-in-out_infinite]">
                <div className="flex items-center gap-2 font-mono text-[10px] text-cyber">
                  <span className="text-cyber">✓</span>
                  <span>NO SCRATCHES</span>
                </div>
              </div>
              <div className="absolute -left-6 bottom-20 bg-void/90 border border-border-dim p-2 rounded backdrop-blur-md hidden lg:block">
                <div className="font-mono text-[10px] text-text-muted">
                  <span className="block text-white">
                    CYCLE COUNT: {SALE_DATA.battery.cycles}
                  </span>
                  <span className="block">
                    HEALTH: {SALE_DATA.battery.health}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Bottom fade + scroll indicator */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-void to-transparent pointer-events-none z-20" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 font-mono text-[10px] tracking-[0.3em]">
        <span className="text-cyber text-center animate-[bounce-slow_2s_ease-in-out_infinite]">
          LA BESTIA ESTÁ LISTA PARA SER TUYA
        </span>
        <span className="text-sm text-cyber animate-[bounce-slow_2s_ease-in-out_infinite]">
          ↓
        </span>
      </div>
    </section>
  )
}
