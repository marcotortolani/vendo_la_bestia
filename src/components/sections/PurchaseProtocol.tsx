'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { SALE_DATA } from '@/lib/constants'

const LOGISTICS = [
  {
    icon: '💵',
    label: 'Efectivo USD / Transferencia / USDT',
    symbol: '>',
  },
  {
    icon: '📍',
    label: 'Retiro: Piriápolis (Maldonado) o Montevideo Centro',
    symbol: '>',
  },
  {
    icon: '🚫',
    label: 'Sin permutas / Sin envíos',
    symbol: '>',
  },
]

export default function PurchaseProtocol() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState(false)

  return (
    <section
      id="contacto"
      className="relative w-full py-24 bg-void overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#27272a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 w-full max-w-2xl mx-auto px-6 flex flex-col gap-12"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 border-b border-border-dim pb-6"
        >
          <div className="flex items-center gap-2 text-cyber mb-2">
            <span className="font-mono text-lg">$</span>
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Protocol_End
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
            Detalles de la transacción
          </h2>
          <p className="font-mono text-text-muted text-sm">
            Confirmá la logística antes de iniciar el contacto.
          </p>
        </motion.div>

        {/* Logistics list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-4 font-mono text-sm md:text-base"
        >
          {LOGISTICS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="group flex items-center gap-4 p-4 rounded bg-surface border border-border-dim transition-colors hover:border-text-muted/50"
            >
              <span className="text-cyber font-bold text-lg">
                {item.symbol}
              </span>
              <div className="flex items-center gap-3 flex-1">
                <span className="text-xl">{item.icon}</span>
                <span className="text-text-main">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Price reminder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-between p-6 rounded-lg border border-cyber/20 bg-cyber/5"
        >
          <div>
            <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
              Precio final
            </div>
            <div className="font-mono text-3xl font-bold text-white">
              US$ {SALE_DATA.price.toLocaleString()}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">
              Condición
            </div>
            <div className="font-mono text-cyber font-bold">PRISTINE_</div>
          </div>
        </motion.div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={SALE_DATA.contact.waLink}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-full h-16 bg-cyber hover:bg-cyber/90 text-void font-mono font-bold text-lg rounded-md transition-all duration-300 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(13,242,147,0.1)] hover:shadow-[0_0_30px_rgba(13,242,147,0.3)] tracking-wider"
          >
            <motion.span
              animate={{
                y: hovered ? -40 : 0,
                opacity: hovered ? 0 : 1,
              }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center gap-3"
            >
              <span>💬</span>
              CONTACTAR POR WHATSAPP
            </motion.span>
            <motion.span
              animate={{
                y: hovered ? 0 : 40,
                opacity: hovered ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className="absolute flex items-center gap-3"
            >
              ABRIR CHAT →
            </motion.span>

            {/* Glare */}
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
          </a>
        </motion.div>

        {/* Footer signature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-2 pt-8 border-t border-border-dim"
        >
          <div className="h-1 w-1 rounded-full bg-cyber animate-pulse" />
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
            System Upgrade // 2026
          </p>
          <p className="font-mono text-[10px] text-border-dim uppercase tracking-widest mt-1">
            Maldonado // UY
          </p>
        </motion.div>
      </div>
    </section>
  )
}
