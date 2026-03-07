'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SALE_DATA } from '@/lib/constants'

function CircleProgress({ value }: { value: number }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true })

  return (
    <div
      ref={containerRef}
      className="relative w-28 h-28 flex items-center justify-center mt-4"
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
        <path
          className="circle-bg"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path
          className="circle-progress"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          style={{
            strokeDasharray: inView ? `${value}, 100` : '0, 100',
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-display font-bold text-white">
          {value}%
        </span>
        <span className="text-[10px] font-mono text-cyber uppercase">
          Salud
        </span>
      </div>
    </div>
  )
}

export default function BentoSpecs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="specs" className="relative w-full py-20 bg-void">
      <div
        className="relative z-10 w-full max-w-7xl px-4 md:px-8 mx-auto"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-border-dim pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="font-mono text-cyber text-sm tracking-widest uppercase mb-2 block">
              {'/// Specs_Manifest'}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white uppercase">
              System Architecture
            </h2>
          </div>
          <div className="flex items-center gap-2 text-text-muted font-mono text-xs md:text-sm">
            <span className="text-cyber">✓</span>
            <span>VERIFIED BENCHMARKS</span>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[minmax(180px,auto)]">
          {/* Card 1: Chip (2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-surface border border-border-dim rounded-xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group transition-all hover:-translate-y-0.5 hover:border-border-dim/80 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest mb-1">
                  Processor Unit
                </h3>
                <p className="font-display text-3xl md:text-4xl font-bold text-white tracking-tight">
                  M3 Pro Silicon
                </p>
              </div>
              <span className="text-border-dim group-hover:text-cyber transition-colors text-2xl">
                ◈
              </span>
            </div>
            <div className="relative z-10 grow flex items-center justify-center my-6">
              <div className="w-32 h-32 md:w-44 md:h-44 bg-void border border-border-dim rounded-lg flex items-center justify-center relative shadow-2xl">
                <span className="font-display font-bold text-center text-2xl md:text-4xl text-white">
                  M3 Pro Chip
                </span>
                <div className="absolute -left-10 top-1/2 w-10 h-px bg-border-dim group-hover:bg-cyber/50 transition-colors" />
                <div className="absolute -right-10 top-1/2 w-10 h-px bg-border-dim group-hover:bg-cyber/50 transition-colors" />
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 border-t border-border-dim pt-6">
              <div>
                <span className="block text-4xl font-mono font-bold text-white mb-1">
                  12<span className="text-cyber text-lg ml-1">Core</span>
                </span>
                <span className="text-text-muted text-xs font-mono uppercase">
                  CPU Architecture
                </span>
              </div>
              <div className="text-right">
                <span className="block text-4xl font-mono font-bold text-white mb-1">
                  18<span className="text-cyber text-lg ml-1">Core</span>
                </span>
                <span className="text-text-muted text-xs font-mono uppercase">
                  GPU Architecture
                </span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: RAM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 bg-surface border border-border-dim rounded-xl p-6 flex flex-col relative group transition-all hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest">
                Unified Memory
              </h3>
              <span className="text-border-dim text-xl">◎</span>
            </div>
            <div className="grow flex items-end gap-4">
              <div className="flex flex-col justify-end w-full">
                <div className="text-4xl font-display font-bold text-white mb-1">
                  18<span className="text-lg text-text-muted ml-1">GB</span>
                </div>
                <div className="w-full bg-border-dim h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-cyber h-full w-[85%]" />
                </div>
                <div className="flex justify-between mt-2 font-mono text-[10px] text-text-muted">
                  <span>BANDWIDTH</span>
                  <span className="text-cyber">OPTIMIZED</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: SSD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-1 bg-surface border border-border-dim rounded-xl p-6 flex flex-col relative group transition-all hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest">
                Solid State
              </h3>
              <span className="text-border-dim text-xl">◫</span>
            </div>
            <div className="grow flex flex-col justify-center">
              <div className="text-4xl font-display font-bold text-white">
                512<span className="text-lg text-text-muted ml-1">GB</span>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono border-b border-border-dim pb-2">
                  <span className="text-text-muted">READ</span>
                  <span className="text-white">5.8 GB/s</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono pt-1">
                  <span className="text-text-muted">WRITE</span>
                  <span className="text-cyber">7.4 GB/s</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Display (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-1 md:col-span-2 bg-surface border border-border-dim rounded-xl p-6 flex flex-row items-center justify-between relative group overflow-hidden transition-all hover:-translate-y-0.5"
          >
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-cyber/10 to-transparent" />
            <div className="relative z-10 flex flex-col justify-between h-full max-w-[60%]">
              <div>
                <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest mb-2">
                  Visual Output
                </h3>
                <p className="font-display text-2xl md:text-3xl font-bold text-white leading-tight">
                  Liquid Retina XDR
                </p>
              </div>
              <div className="mt-4 flex gap-4 font-mono text-xs text-text-muted">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  3456 x 2234
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  1600 nits
                </span>
              </div>
            </div>
            <div className="relative z-10 flex flex-col items-end">
              <div className="border border-cyber/30 bg-cyber/10 text-cyber px-3 py-1 rounded text-xs font-bold font-mono tracking-wider mb-2 backdrop-blur-sm">
                ProMotion
              </div>
              <div className="text-5xl font-display font-bold text-white opacity-90">
                120<span className="text-xl ml-1 text-text-muted">Hz</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Power Cell & Display (2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="col-span-1 md:col-span-2 bg-surface border border-border-dim rounded-xl p-6 flex flex-col relative group transition-all hover:-translate-y-0.5"
          >
            <div className="font-mono text-text-muted text-xs uppercase tracking-widest mb-4">
              Power Cell &amp; Display
            </div>
            <div className="flex flex-col sm:flex-row gap-6 grow">
              {/* Left: Battery */}
              <div className="flex-1 flex flex-col items-center justify-center">
                <CircleProgress value={SALE_DATA.battery.health} />
                <div className="mt-3 text-center space-y-1">
                  <p className="font-mono text-xs text-text-muted">
                    Ciclos:{' '}
                    <span className="text-white">
                      {SALE_DATA.battery.cycles}
                    </span>
                    <span className="mx-2 text-border-dim">·</span>
                    Salud:{' '}
                    <span className="text-white">
                      {SALE_DATA.battery.health}%
                    </span>
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-cyber/10 border border-cyber/30 rounded px-2 py-0.5">
                    <span className="w-1.5 h-1.5 bg-cyber rounded-full" />
                    <span className="font-mono text-[10px] text-cyber uppercase tracking-wider font-bold">
                      EXCELENTE
                    </span>
                  </div>
                  <p className="font-mono text-[10px] text-text-muted">
                    {'< 200 ciclos · top 10% vida útil'}
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px bg-border-dim self-stretch" />
              <div className="sm:hidden h-px w-full bg-border-dim" />

              {/* Right: Screen usage */}
              <div className="flex-1 flex flex-col justify-center gap-3">
                <div>
                  <p className="font-mono text-text-muted text-[10px] uppercase tracking-widest mb-1">
                    Uso de pantalla
                  </p>
                  <div className="text-4xl font-display font-bold text-white leading-none">
                    1.016
                    <span className="text-lg text-text-muted ml-1.5">h</span>
                  </div>
                  <p className="font-mono text-[10px] text-text-muted mt-1">
                    ~9.6 h / ciclo
                  </p>
                </div>
                {/* Range bar */}
                <div>
                  <div className="relative h-3 w-full flex rounded-full overflow-hidden gap-px mb-1.5">
                    <div className="flex-[2] bg-cyber/70" />
                    <div className="flex-[2] bg-zinc-600/50" />
                    <div className="flex-[2] bg-amber-600/30" />
                    <div className="flex-[2] bg-red-800/30" />
                    <div
                      className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_6px_white]"
                      style={{
                        left: `${Math.min((SALE_DATA.battery.hours / 4000) * 100, 100)}%`,
                      }}
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[9px] text-text-muted">
                    <span className="text-cyber">EXCELENTE</span>
                    <span>BUENO</span>
                    <span>REGULAR</span>
                    <span>MALO</span>
                  </div>
                </div>
                <p className="font-mono text-[10px] text-text-muted">
                  Mini-LED · 10.000–30.000 h vida útil estimada
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Ports (1x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 bg-surface border border-border-dim rounded-xl p-6 flex flex-col justify-between relative group transition-all hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest">
                I/O & PORTS
              </h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'MagSafe 3', sub: '140W charging' },
                { label: 'HDMI 2.1', sub: '8K @ 60Hz / 4K @ 240Hz' },
                { label: '3x Thunderbolt 4', sub: '40Gb/s' },
                { label: 'SDXC + 3.5mm', sub: 'UHS-II / Hi-Impedance' },
              ].map((port, i) => (
                <div
                  key={i}
                  className="border-b border-border-dim pb-2 last:border-0 last:pb-0"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-display text-xs font-bold">
                      {port.label}
                    </span>
                    <span className="text-[10px] font-mono text-cyber">
                      {port.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 7: Connectivity */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="col-span-1 bg-surface border border-border-dim rounded-xl p-6 flex flex-col justify-between relative group transition-all hover:-translate-y-0.5"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-mono text-text-muted text-xs uppercase tracking-widest">
                Connectivity
              </h3>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-display font-bold text-white">
                  Wi-Fi 6E
                </div>
                <div className="font-mono text-[10px] text-text-muted">
                  Up to 2.4 Gbps
                </div>
              </div>
              <div>
                <div className="text-sm font-display font-bold text-white">
                  Bluetooth 5.3
                </div>
                <div className="font-mono text-[10px] text-text-muted">
                  Low-energy protocol
                </div>
              </div>
              <div className="border-t border-border-dim pt-3">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-text-muted">DUAL EXTERNAL</span>
                  <span className="text-cyber font-bold">DISPLAY</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status bar */}
        <div className="mt-6 flex justify-between items-center border-t border-border-dim pt-4 font-mono text-[10px] text-text-muted">
          <div>ID: M3-PRO-UY-001</div>
          <div className="flex items-center gap-4">
            <a
              href="https://support.apple.com/en-us/117737"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyber hover:underline underline-offset-2 transition-opacity hover:opacity-80"
            >
              <span>↗</span>
              <span>FULL SPECS — APPLE.COM</span>
            </a>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyber rounded-full animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
