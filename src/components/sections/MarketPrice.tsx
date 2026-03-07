'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { SALE_DATA } from '@/lib/constants'

export default function MarketPrice() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="precio" className="relative w-full py-20 bg-void">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8" ref={ref}>
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 mb-12 border-l-4 border-cyber pl-6"
        >
          <div className="flex items-center gap-2 text-cyber">
            <span className="font-mono text-xs">$</span>
            <span className="text-xs font-bold tracking-widest uppercase font-mono">
              Market Analysis v1.0.4
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase italic">
            THE <span className="text-cyber">INVESTMENT</span> PROTOCOL
          </h2>
          <p className="text-text-muted text-lg max-w-2xl">
            Comparación de precios para el MacBook Pro M3 Pro (16&quot;) en
            Uruguay — retail vs mercado secundario.
          </p>
        </motion.header>

        {/* Price Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {/* Card 1: Retail New */}
          <div className="flex flex-col gap-6 rounded-xl border border-border-dim bg-surface/50 p-8 transition-all hover:border-border-dim/80">
            <div className="flex flex-col gap-2">
              <h3 className="text-text-muted text-sm font-bold uppercase tracking-wider">
                Retail Nuevo (UY)
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-4xl font-bold">
                  ~${SALE_DATA.market.retailUY.toLocaleString()}
                </span>
                <span className="text-text-muted text-sm">USD</span>
              </div>
              <span className="font-mono text-[10px] text-text-muted tracking-wider">
                Con impuestos de importación UY
              </span>
            </div>
            <div className="h-px bg-border-dim w-full" />
            <ul className="flex flex-col gap-4 text-sm text-text-main">
              <li className="flex items-center gap-3">
                <span className="text-cyber">✓</span>
                <span>Reseller oficial Apple</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <span className="text-red-400">✗</span>
                <span>Con impuestos de importación UY</span>
              </li>
              <li className="flex items-center gap-3 text-text-muted">
                <span className="text-red-400">✗</span>
                <span>Sin accesorios adicionales</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Used Worn */}
          <div className="flex flex-col gap-6 rounded-xl border border-border-dim bg-surface/50 p-8 transition-all hover:border-border-dim/80">
            <div className="flex flex-col gap-2">
              <h3 className="text-text-muted text-sm font-bold uppercase tracking-wider">
                Usado Desgastado (Mercado)
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-4xl font-bold">
                  $3.000–3.800
                </span>
                <span className="text-text-muted text-sm">USD</span>
              </div>
            </div>
            <div className="h-px bg-border-dim w-full" />
            <ul className="flex flex-col gap-4 text-sm text-text-main">
              <li className="flex items-center gap-3 text-yellow-400">
                <span>⚠</span>
                <span>Condición B-Grade</span>
              </li>
              <li className="flex items-center gap-3 text-yellow-400">
                <span>⚠</span>
                <span>Pantalla con marcas de teclas</span>
              </li>
              <li className="flex items-center gap-3 text-yellow-400">
                <span>⚠</span>
                <span>Cuerpo con rayones y/o golpes</span>
              </li>
              <li className="flex items-center gap-3 text-red-400">
                <span>✗</span>
                <span>Batería ~80% de salud</span>
              </li>
            </ul>
          </div>

          {/* Card 3: THIS UNIT — highlighted */}
          <div className="relative flex flex-col gap-6 rounded-xl border-2 border-cyber bg-cyber/5 p-8 shadow-[0_0_40px_rgba(13,242,147,0.1)] overflow-hidden">
            <div className="absolute top-0 right-0 bg-cyber text-void font-bold text-[10px] px-4 py-1 uppercase tracking-widest rounded-bl-lg">
              Best Value
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-cyber text-sm font-bold uppercase tracking-wider">
                ESTA UNIDAD (Pristina)
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-4xl font-bold text-white">
                  ${SALE_DATA.price.toLocaleString()}
                </span>
                <span className="text-cyber text-sm">USD</span>
              </div>
            </div>
            <div className="h-px bg-cyber/20 w-full" />
            <ul className="flex flex-col gap-4 text-sm text-white">
              <li className="flex items-center gap-2">
                <span className="text-cyber">★</span>
                <span>{SALE_DATA.battery.health}% Salud de Batería</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyber">✓</span>
                <span>Pristina: Sin rayones</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyber">✓</span>
                <span>Cargador MagSafe + Case incluido</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-cyber">✓</span>
                <span>macOS formateado, listo para usar</span>
              </li>
            </ul>
            <a
              href={SALE_DATA.contact.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full bg-cyber hover:bg-cyber/90 text-void font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 font-mono text-sm tracking-wider"
            >
              CONSULTAR AHORA →
            </a>
          </div>
        </motion.div>

        {/* Savings + Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 items-stretch"
        >
          {/* Savings banner */}
          <div className="flex-1 flex items-center justify-between rounded-xl bg-surface border border-border-dim p-8">
            <div className="flex flex-col gap-1">
              <p className="text-text-muted text-sm font-medium uppercase tracking-widest">
                Ahorro vs Retail
              </p>
              <div className="flex items-center gap-4">
                <p className="font-mono text-5xl font-bold text-cyber">
                  ~${SALE_DATA.market.savings.toLocaleString()}
                </p>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold border border-red-500/30">
                  -{SALE_DATA.market.savingsPct}% OFF
                </span>
              </div>
            </div>
            <div className="hidden lg:block text-text-muted/20 text-6xl">↓</div>
          </div>

          {/* Location badge */}
          <div className="flex flex-col justify-center gap-4 rounded-xl bg-surface border border-border-dim px-8 py-6">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-cyber uppercase tracking-widest">
                Puntos de Retiro
              </span>
            </div>
            {SALE_DATA.locations.map((loc) => (
              <div key={loc.city} className="flex items-center gap-3">
                <div className="flex items-center justify-center rounded-lg bg-cyber/10 text-cyber shrink-0 w-9 h-9 border border-cyber/20">
                  <span className="text-base">📍</span>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-sm font-bold leading-none">
                    {loc.city}
                  </p>
                  <p className="text-text-muted text-xs">{loc.dept}, Uruguay</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini specs teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            {
              label: 'Ciclos Batería',
              value: `${SALE_DATA.battery.cycles} ciclos`,
            },
            { label: 'Memoria', value: `${SALE_DATA.specs.ram} Unified` },
            { label: 'Almacenamiento', value: `${SALE_DATA.specs.ssd} SSD` },
            { label: 'Procesador', value: `M3 Pro (${SALE_DATA.specs.cpu})` },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col p-4 rounded-lg border border-border-dim/50"
            >
              <span className="text-text-muted text-xs font-bold uppercase mb-2 font-mono">
                {item.label}
              </span>
              <span className="font-mono text-xl text-white">{item.value}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
