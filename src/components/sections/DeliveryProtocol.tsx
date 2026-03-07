'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const CARDS = [
  {
    id: 'reset',
    code: 'SYSTEM_RESET',
    image: '/images/welcome-screen.webp',
    icon: '↺',
    title: 'SYSTEM_RESET',
    desc: 'macOS Tahoe formateado.',
    highlight: "Listo para la experiencia de 'Mac Nueva'.",
    checklist: 'VERIFIED_OS_INTEGRITY',
    meta: 'FILE_SYS: APFS_ENCRYPTED',
  },
  {
    id: 'power',
    code: 'POWER_ARRAY',
    icon: '⚡',
    title: 'POWER_ARRAY',
    desc: 'Cargador MagSafe 3 140W + Cable USB-C trenzado originales.',
    highlight: 'Full original accessories.',
    checklist: 'MAGSAFE_3_TESTED',
    meta: 'INPUT: 100-240V_AUTO',
  },
  {
    id: 'case',
    code: 'CHASSIS_PROTECTION',
    icon: '⬡',
    title: 'CHASSIS_PROTECTION',
    desc: 'Hard Case Black Translucent de INCASE — incluido de regalo.',
    highlight: 'Protección modular de polycarbonate.',
    checklist: 'IMPACT_RATING_VERIFIED',
    meta: 'MAT: POLYCARBONATE_V2',
  },
]

const CHECKLIST = [
  '001_FACTORY_RESET_VERIFIED',
  '002_MAGSAFE_3_CONNECTIVITY_TESTED',
  '003_CHASSIS_ARMOR_FITTED_&_CLEANED',
  '004_BATTERY_HEALTH_CONFIRMED_97%',
]

export default function DeliveryProtocol() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="protocolo"
      className="relative w-full py-20 bg-void overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#18181b 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div
        ref={ref}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full text-center mb-16 mx-auto"
        >
          <div className="inline-block px-3 py-1 mb-4 border border-cyber/30 bg-cyber/5 rounded-full">
            <span className="text-cyber text-[10px] font-mono font-bold tracking-[0.3em]">
              SYSTEM_VERIFICATION_REQUIRED
            </span>
          </div>
          <h2 className="text-text-main text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-mono">
            DELIVERY_PROTOCOL
          </h2>
          <p className="text-text-muted font-mono text-xs uppercase tracking-widest">
            Initialization of hardware transfer sequence 08-B
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
        >
          {CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i + 0.3 }}
              className="group relative flex flex-col bg-surface-highlight/50 border border-border-dim p-6 hover:border-cyber/50 transition-all duration-500 rounded-sm"
            >
              <div className="absolute top-0 right-2 text-cyber/20 group-hover:text-cyber transition-colors text-lg">
                {card.icon}
              </div>

              {/* Image / placeholder */}
              <div className="w-full aspect-video mb-6 bg-surface-highlight overflow-hidden relative rounded-sm">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-surface-highlight to-black" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-mono text-[10px] text-text-muted tracking-widest">
                        [FOTO_{card.code}]
                      </span>
                    </div>
                  </>
                )}
                <div className=" px-2 py-0.5 rounded-full bg-neutral-500/80 absolute bottom-3 left-3 flex items-center">
                  <span className="font-mono text-[8px] text-white">
                    {card.meta}
                  </span>
                </div>
              </div>

              <h3 className="text-text-main font-mono text-lg font-bold mb-2">
                {card.title}
              </h3>
              <div className="space-y-2">
                <p className="text-text-muted text-xs leading-relaxed">
                  {card.desc}{' '}
                  <span className="text-cyber/80">{card.highlight}</span>
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-dim">
                  <span className="text-cyber text-sm">✓</span>
                  <span className="text-text-muted font-mono text-[10px]">
                    {card.checklist}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl w-full mx-auto bg-surface/30 border border-border-dim p-8 rounded-lg backdrop-blur-sm"
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-cyber text-xl">✓</span>
            <h4 className="text-text-main font-mono text-sm tracking-widest uppercase">
              Pre-Transfer Checklist
            </h4>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {CHECKLIST.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 group py-2 border-b border-border-dim/50 last:border-0"
              >
                <div className="w-5 h-5 rounded border border-cyber/50 bg-cyber/10 flex items-center justify-center shrink-0">
                  <span className="text-cyber text-xs">✓</span>
                </div>
                <span className="text-text-muted font-mono text-xs group-hover:text-cyber transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 flex justify-between items-end border-t border-cyber/20">
            <div>
              <p className="text-text-muted/40 font-mono text-[9px] mb-1 uppercase tracking-tighter">
                Authorized Signature
              </p>
              <div className="text-cyber font-mono text-sm tracking-widest italic opacity-80">
                V_ENG_AUTO_STAMP
              </div>
            </div>
            <div className="text-right">
              <p className="text-text-muted/40 font-mono text-[9px] mb-1 uppercase tracking-tighter">
                Status
              </p>
              <div className="text-cyber font-mono text-sm font-bold animate-pulse">
                DEPLOYMENT_READY
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
