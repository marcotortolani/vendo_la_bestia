'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const SLIDES = [
  {
    id: 'angle_01',
    label: '[ANGLE_01]',
    title: 'CHASSIS INTEGRITY 100%',
    counter: '01 / 04',
    bg: 'from-zinc-900 to-black',
    description: 'Vista superior — sin rayones ni marcas',
  },
  {
    id: 'screen_02',
    label: '[SCREEN_02]',
    title: 'PANTALLA // SIN MARCAS DE TECLAS',
    counter: '02 / 04',
    bg: 'from-zinc-800 to-black',
    description: 'Display prístino, sin presión ni rayados',
  },
  {
    id: 'keyboard_03',
    label: '[KEYBOARD_03]',
    title: 'TECLADO // TECLAS PERFECTAS',
    counter: '03 / 04',
    bg: 'from-neutral-900 to-black',
    description: 'Teclas sin desgaste, retroiluminación perfecta',
  },
  {
    id: 'system_04',
    label: '[SYSTEM_04]',
    title: `CYCLE COUNT: 106 // VERIFIED`,
    counter: '04 / 04',
    bg: 'from-black to-zinc-900',
    isCode: true,
    description: 'Datos verificados del sistema',
  },
]

export default function VisualEvidence() {
  const ref = useRef(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [currentSlide, setCurrentSlide] = useState(0)

  function scrollTo(index: number) {
    const el = scrollRef.current
    if (!el) return
    const slides = el.querySelectorAll('.slide-item')
    const target = slides[index] as HTMLElement
    if (target) {
      el.scrollTo({ left: target.offsetLeft - 16, behavior: 'smooth' })
      setCurrentSlide(index)
    }
  }

  function prev() {
    scrollTo(Math.max(0, currentSlide - 1))
  }

  function next() {
    scrollTo(Math.min(SLIDES.length - 1, currentSlide + 1))
  }

  return (
    <section
      id="condicion"
      className="relative w-full py-20 bg-void overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-dot-grid" />

      <div
        ref={ref}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-border-dim pb-6"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <span className="text-cyber text-xl">◉</span>
              <h2 className="text-text-main tracking-tight text-3xl md:text-5xl font-bold uppercase leading-none">
                {'// VISUAL_EVIDENCE'}
              </h2>
            </div>
            <p className="text-text-muted font-mono text-xs md:text-sm tracking-widest pl-1">
              UNRETOUCHED IMAGERY. VERIFY PHYSICAL INTEGRITY.
            </p>
            <p className="text-cyber font-display text-lg md:text-2xl font-bold pl-1 mt-1">
              Una bestia cuidada como ninguna.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-3 bg-surface border border-border-dim px-4 py-2 rounded-full">
            <div className="relative flex h-3 w-3">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-cyber opacity-75"
                style={{ animation: 'pulse-green 2s infinite' }}
              />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyber" />
            </div>
            <span className="font-mono text-xs text-cyber font-bold tracking-wider">
              CONDITION: PRISTINE_
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group"
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 md:gap-8 pb-12 w-full"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                className="slide-item snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[45vw] flex flex-col gap-3 group/card"
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg border border-border-dim bg-surface">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />

                  {slide.isCode ? (
                    <div className="h-full w-full bg-[#1e1e1e] p-6 font-mono text-xs text-green-400 overflow-hidden relative">
                      <p>&gt; system_profiler SPHardwareDataType</p>
                      <p className="text-white mt-2">Hardware Overview:</p>
                      <p className="text-white ml-4">
                        {' '}
                        Model Name: MacBook Pro
                      </p>
                      <p className="text-white ml-4"> Chip: Apple M3 Pro</p>
                      <p className="text-white ml-4"> Memory: 18 GB</p>
                      <p className="text-white ml-4">
                        {' '}
                        Serial Number: **********
                      </p>
                      <br />
                      <p>&gt; ioreg -l | grep CycleCount</p>
                      <p className="text-white ml-4">
                        {' '}
                        &quot;CycleCount&quot; = 106
                      </p>
                      <p className="text-white ml-4">
                        {' '}
                        &quot;BatteryHealth&quot; = 97
                      </p>
                      <p className="text-white ml-4">
                        {' '}
                        &quot;Condition&quot; = &quot;Normal&quot;
                      </p>
                      <br />
                      <p className="text-cyber">&gt; _ </p>
                    </div>
                  ) : (
                    <div
                      className={`h-full w-full bg-gradient-to-br ${slide.bg} flex items-center justify-center transition-transform duration-700 ease-out group-hover/card:scale-105`}
                    >
                      <div className="text-center space-y-3">
                        <div className="font-mono text-[10px] text-cyber tracking-widest">
                          {slide.label}
                        </div>
                        <div className="w-24 lg:w-36 h-24 border border-border-dim rounded-lg bg-surface-highlight mx-auto flex items-center justify-center">
                          <span className="font-mono text-xs text-text-muted text-center px-2">
                            {slide.description}
                          </span>
                        </div>
                        <div className="font-mono text-[10px] text-cyber/60 tracking-widest uppercase">
                          [FOTO_REAL_AQUI]
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Data overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 flex justify-between items-end">
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-cyber text-xs tracking-widest">
                        {slide.label}
                      </span>
                      <span className="font-mono text-white text-sm md:text-base font-bold">
                        {slide.title}
                      </span>
                    </div>
                    <span className="font-mono text-text-muted text-xs border border-border-dim px-2 py-1 bg-black/50 backdrop-blur-sm">
                      {slide.counter}
                    </span>
                  </div>

                  {/* Corner reticles */}
                  <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-cyber/30 z-20" />
                  <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-cyber/30 z-20" />
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="w-full h-px bg-border-dim">
            <div
              className="h-full bg-cyber shadow-[0_0_10px_rgba(13,242,147,0.5)] transition-all duration-300"
              style={{
                width: `${((currentSlide + 1) / SLIDES.length) * 100}%`,
              }}
            />
          </div>

          {/* Navigation controls */}
          <div className="flex justify-between items-center mt-6 w-full border-t border-border-dim/50 pt-4">
            <div className="flex gap-4">
              <button
                onClick={prev}
                disabled={currentSlide === 0}
                className="group flex items-center gap-2 px-4 py-2 border border-border-dim hover:border-cyber/50 bg-surface hover:bg-surface/80 transition-all rounded-sm disabled:opacity-30"
              >
                <span className="text-text-muted group-hover:text-cyber text-sm">
                  ←
                </span>
                <span className="font-mono text-xs text-text-muted group-hover:text-cyber tracking-widest font-bold">
                  PREV_IMG
                </span>
              </button>
              <button
                onClick={next}
                disabled={currentSlide === SLIDES.length - 1}
                className="group flex items-center gap-2 px-4 py-2 border border-border-dim hover:border-cyber/50 bg-surface hover:bg-surface/80 transition-all rounded-sm disabled:opacity-30"
              >
                <span className="font-mono text-xs text-text-muted group-hover:text-cyber tracking-widest font-bold">
                  NEXT_IMG
                </span>
                <span className="text-text-muted group-hover:text-cyber text-sm">
                  →
                </span>
              </button>
            </div>
            <div className="hidden md:flex items-center gap-2 text-text-muted/40 font-mono text-[10px] uppercase tracking-widest">
              <span>Scroll or swipe to inspect</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
