export const SALE_DATA = {
  price: 3500,
  currency: 'USD',
  model: 'MacBook Pro M3 Pro 16"',
  color: 'Space Black',
  year: 2024,

  battery: {
    health: 97,
    cycles: 106,
    hours: null, // TODO: obtener desde System Settings > Screen Time > App Usage
  },

  specs: {
    chip: 'Apple M3 Pro',
    cpu: '12-core',
    gpu: '18-core',
    ram: '18GB',
    ramType: 'Unified Memory',
    ssd: '512GB',
    display: 'Liquid Retina XDR',
    displaySize: '16.2"',
    displayRes: '3456 x 2234',
    displayHz: 120,
    displayNits: 1600,
    ports: ['3x Thunderbolt 4', 'HDMI 2.1', 'SDXC', 'MagSafe 3', '3.5mm'],
    wifi: 'Wi-Fi 6E',
    bluetooth: '5.3',
  },

  condition: {
    label: 'PRISTINE',
    description: 'Sin rayones, sin marcas de teclas. Cuerpo como nuevo.',
    os: 'macOS Tahoe',
    formatted: true,
  },

  includes: [
    {
      id: 'magsafe',
      label: 'Cargador MagSafe 3 140W original',
      icon: 'bolt',
      code: 'POWER_ARRAY',
    },
    {
      id: 'cable',
      label: 'Cable USB-C trenzado original',
      icon: 'cable',
      code: 'CABLE_OEM',
    },
    {
      id: 'case',
      label: 'Incase Hard Case (regalo)',
      icon: 'shield',
      code: 'CHASSIS_PROTECTION',
    },
    {
      id: 'reset',
      label: 'macOS formateado, listo para configurar',
      icon: 'settings_backup_restore',
      code: 'SYSTEM_RESET',
    },
  ],

  transaction: {
    payment: ['Efectivo USD', 'Transferencia', 'USDT'],
    location: 'Montevideo Centro, Uruguay',
    noTrades: true,
    noShipping: true,
  },

  contact: {
    whatsapp: '+541161386615',
    waLink:
      'https://wa.me/541161386615?text=Hola%2C%20me%20interesa%20la%20MacBook%20Pro%20M3%20Pro%20de%20US%24%203.500',
  },

  market: {
    retailUY: 5000, // aprox con impuestos de importación Uruguay
    usedWorn: 3200, // usado con desgaste en mercado local (rango $3.000–$3.200)
    savings: 1500, // ahorro vs retail (5000 - 3500)
    savingsPct: 30,
  },

  locations: [
    { city: 'Piriápolis', dept: 'Maldonado' },
    { city: 'Montevideo', dept: 'Centro' },
  ],

  performance: {
    m3pro:     { label: 'M3 Pro',               multiplier: 1.4, barPct: 100 },
    m1pro:     { label: 'M1 Pro',               multiplier: 1.0, barPct: 72  },
    windowsI7: { label: 'Windows Core i7 16GB', multiplier: 0.7, barPct: 50  },
    cpuGain: '+20%',
    gpuGain: '+40%',
    vsWindowsGain: '+2x',
  },
} as const
