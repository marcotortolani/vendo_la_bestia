'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SALE_DATA } from '@/lib/constants'

export default function Performance() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="performance" className="relative w-full py-20 bg-void">
      <div
        className="max-w-[1200px] mx-auto px-6 md:px-20 space-y-12"
        ref={ref}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <span className="text-cyber font-mono text-sm tracking-widest uppercase">
            Benchmark Comparison
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none uppercase">
            M3 PRO vs THE REST
          </h2>
          <p className="text-text-muted text-lg max-w-2xl leading-relaxed">
            Un salto generacional en silicio. Aplasta al M1 Pro y deja atrás a
            cualquier notebook Windows Core i7 del mismo rango de categoría.
          </p>
        </motion.div>

        {/* Performance Chart + Side metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
        >
          {/* Main bar chart */}
          <div className="lg:col-span-8 flex flex-col gap-6 rounded-2xl bg-surface/40 border border-border-dim/50 p-8">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                <h3 className="text-xl font-bold">Rendimiento Relativo</h3>
                <p className="text-text-muted font-mono text-sm">
                  Higher is better
                </p>
              </div>
              <div className="text-right">
                <span className="text-cyber text-4xl font-bold font-mono tracking-tighter">
                  {SALE_DATA.performance.gpuGain}
                </span>
                <p className="text-text-muted text-xs uppercase tracking-widest">
                  GPU faster
                </p>
              </div>
            </div>

            <div className="space-y-8 py-4">
              {/* M3 Pro bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">M3 Pro</span>
                    <span className="bg-cyber/10 text-cyber text-[10px] px-2 py-0.5 rounded-full font-mono">
                      ESTA UNIDAD
                    </span>
                  </div>
                  <span className="font-mono text-cyber text-lg">
                    {SALE_DATA.performance.m3pro.multiplier}x
                  </span>
                </div>
                <div className="h-10 w-full bg-surface-highlight/50 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-cyber rounded-lg transition-all duration-1000 shadow-[0_0_20px_rgba(13,242,147,0.3)]"
                    style={{
                      width: inView
                        ? `${SALE_DATA.performance.m3pro.barPct}%`
                        : '0%',
                    }}
                  />
                </div>
              </div>

              {/* M1 Pro bar (baseline) */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted font-bold">M1 Pro</span>
                    <span className="text-text-muted text-[10px] font-mono uppercase">
                      Baseline
                    </span>
                  </div>
                  <span className="font-mono text-text-muted text-lg">
                    {SALE_DATA.performance.m1pro.multiplier}x
                  </span>
                </div>
                <div className="h-10 w-full bg-surface-highlight/50 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-zinc-600/40 rounded-lg transition-all duration-1000 delay-150"
                    style={{
                      width: inView
                        ? `${SALE_DATA.performance.m1pro.barPct}%`
                        : '0%',
                    }}
                  />
                </div>
              </div>

              {/* Windows i7 bar */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-text-muted font-bold">
                      Windows Core i7
                    </span>
                    <span className="text-text-muted text-[10px] font-mono">
                      16GB RAM
                    </span>
                  </div>
                  <span className="font-mono text-text-muted text-lg">
                    {SALE_DATA.performance.windowsI7.multiplier}x
                  </span>
                </div>
                <div className="h-10 w-full bg-surface-highlight/50 rounded-lg overflow-hidden">
                  <div
                    className="h-full bg-zinc-700/50 rounded-lg transition-all duration-1000 delay-300"
                    style={{
                      width: inView
                        ? `${SALE_DATA.performance.windowsI7.barPct}%`
                        : '0%',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Side metrics */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            <div className="rounded-2xl bg-surface/40 border border-border-dim/50 p-6 flex flex-col justify-between min-h-[160px]">
              <span className="text-cyber text-xl mb-4">⬡</span>
              <div>
                <h4 className="text-text-muted text-sm font-medium">
                  CPU Performance
                </h4>
                <p className="text-3xl font-bold font-mono text-white mt-1">
                  12-core
                </p>
                <p className="text-cyber text-sm font-mono mt-2">
                  {SALE_DATA.performance.cpuGain} vs M1 Pro
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-surface/40 border border-border-dim/50 p-6 flex flex-col justify-between min-h-[160px]">
              <span className="text-cyber text-xl mb-4">⬢</span>
              <div>
                <h4 className="text-text-muted text-sm font-medium">
                  GPU Throughput
                </h4>
                <p className="text-3xl font-bold font-mono text-white mt-1">
                  18-core
                </p>
                <p className="text-cyber text-sm font-mono mt-2">
                  {SALE_DATA.performance.gpuGain} vs M1 Pro
                </p>
              </div>
            </div>
            <div className="rounded-2xl bg-surface/40 border border-border-dim/50 p-6 flex flex-col justify-between min-h-[160px]">
              <span className="text-cyber text-xl mb-4">⬟</span>
              <div>
                <h4 className="text-text-muted text-sm font-medium">
                  vs Windows i7
                </h4>
                <p className="text-3xl font-bold font-mono text-white mt-1">
                  2x faster
                </p>
                <p className="text-cyber text-sm font-mono mt-2">
                  {SALE_DATA.performance.vsWindowsGain} rendimiento
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: '◉',
              title: 'Neural Engine',
              desc: '16-core mejorado para machine learning acelerado y procesamiento de IA más rápido.',
            },
            {
              icon: '◎',
              title: 'Unified Memory',
              desc: 'Controlador de memoria de mayor ancho de banda, 18GB de memoria unificada de baja latencia.',
            },
            {
              icon: '◈',
              title: 'Eficiencia 3nm',
              desc: 'Construido en tecnología 3nm, más rendimiento por watt que nunca.',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 rounded-2xl border border-border-dim/30 bg-surface/20 p-8 hover:border-border-dim/60 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-cyber/10 flex items-center justify-center text-cyber text-xl">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
