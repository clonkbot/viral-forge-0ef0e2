import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const trendingNiches = [
  'AI Tools & Tech',
  'Productivity Hacks',
  'Money & Finance',
  'Fitness Motivation',
  'Gaming Highlights',
  'Cooking/Recipes',
  'Pet Content',
  'True Crime Stories',
  'Relationship Advice',
  'ASMR',
  'Satisfying Videos',
  'Life Hacks',
]

interface GeneratedVideo {
  hook: string
  script: string[]
  hashtags: string[]
  duration: string
  style: string
}

function App() {
  const [niche, setNiche] = useState('')
  const [customNiche, setCustomNiche] = useState('')
  const [description, setDescription] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState<GeneratedVideo | null>(null)
  const [glitchText, setGlitchText] = useState('VIRAL FORGE')

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        const chars = 'V1R4L_F0RG3!@#$%'
        let glitched = ''
        for (let i = 0; i < 11; i++) {
          glitched += Math.random() > 0.7 ? chars[Math.floor(Math.random() * chars.length)] : 'VIRAL FORGE'[i]
        }
        setGlitchText(glitched)
        setTimeout(() => setGlitchText('VIRAL FORGE'), 100)
      }
    }, 200)
    return () => clearInterval(interval)
  }, [])

  const generateVideo = () => {
    if (!niche && !customNiche) return
    if (!description.trim()) return

    setIsGenerating(true)

    setTimeout(() => {
      const selectedNiche = customNiche || niche
      const hooks = [
        `POV: You just discovered the ${selectedNiche} secret nobody talks about...`,
        `This ${selectedNiche} hack will change your life in 15 seconds`,
        `Stop scrolling. This ${selectedNiche} tip is ACTUALLY useful.`,
        `I can't believe I'm sharing this ${selectedNiche} strategy for free...`,
        `The algorithm doesn't want you to see this ${selectedNiche} content`,
      ]

      const scripts = [
        [
          `Here's what nobody tells you about ${selectedNiche}...`,
          description.slice(0, 100) + '...',
          'And the craziest part?',
          'This actually works. Try it and comment your results.',
          'Follow for more!'
        ],
        [
          'I tested this so you don\'t have to.',
          `When it comes to ${selectedNiche}...`,
          description.slice(0, 80) + '...',
          'The results were insane.',
          'Save this for later!'
        ]
      ]

      const hashtagSets = [
        [`#${selectedNiche.toLowerCase().replace(/[^a-z0-9]/g, '')}`, '#viral', '#fyp', '#trending', '#mustwatch'],
        ['#shorts', '#tiktok', '#foryou', '#hack', '#tips'],
      ]

      setGeneratedVideo({
        hook: hooks[Math.floor(Math.random() * hooks.length)],
        script: scripts[Math.floor(Math.random() * scripts.length)],
        hashtags: [...hashtagSets[0], ...hashtagSets[1].slice(0, 3)],
        duration: ['15s', '30s', '45s', '60s'][Math.floor(Math.random() * 4)],
        style: ['Fast cuts', 'Talking head', 'Text on screen', 'B-roll montage'][Math.floor(Math.random() * 4)]
      })
      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,240,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,240,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#00f0ff' : '#ff00aa',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="py-6 md:py-8 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="font-orbitron text-3xl md:text-5xl lg:text-6xl font-black tracking-wider relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-[#00f0ff] via-[#ff00aa] to-[#aaff00] bg-clip-text text-transparent">
                {glitchText}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00f0ff] to-[#ff00aa] bg-clip-text text-transparent blur-lg opacity-50">
                {glitchText}
              </span>
            </h1>
            <p className="font-fira text-[#00f0ff] text-xs md:text-sm mt-2 tracking-widest opacity-80">
              {'>'} HACK_THE_ALGORITHM {'<'}
            </p>
          </motion.div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-4 md:px-8 pb-8 md:pb-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">

              {/* Input Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Niche Selection */}
                <div className="relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00f0ff] via-transparent to-[#ff00aa] rounded-xl opacity-50" />
                  <div className="relative bg-[#0a0a0f]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#00f0ff]/20">
                    <label className="font-orbitron text-xs md:text-sm text-[#00f0ff] tracking-wider mb-4 block flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#00f0ff] rounded-full animate-pulse" />
                      SELECT_NICHE
                    </label>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
                      {trendingNiches.map((n) => (
                        <button
                          key={n}
                          onClick={() => { setNiche(n); setCustomNiche(''); }}
                          className={`font-fira text-xs px-2 py-2 md:px-3 md:py-2.5 rounded-lg transition-all duration-300 border ${
                            niche === n
                              ? 'bg-[#00f0ff]/20 border-[#00f0ff] text-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.3)]'
                              : 'border-white/10 text-white/60 hover:border-[#ff00aa]/50 hover:text-[#ff00aa]'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Or enter custom niche..."
                        value={customNiche}
                        onChange={(e) => { setCustomNiche(e.target.value); setNiche(''); }}
                        className="w-full font-fira text-sm bg-black/50 border border-[#ff00aa]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#ff00aa] focus:shadow-[0_0_20px_rgba(255,0,170,0.2)] transition-all"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff00aa]/50 font-fira text-xs">
                        CUSTOM_
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description Input */}
                <div className="relative">
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-[#ff00aa] via-transparent to-[#aaff00] rounded-xl opacity-50" />
                  <div className="relative bg-[#0a0a0f]/90 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#ff00aa]/20">
                    <label className="font-orbitron text-xs md:text-sm text-[#ff00aa] tracking-wider mb-4 block flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#ff00aa] rounded-full animate-pulse" />
                      CONTENT_INPUT
                    </label>
                    <textarea
                      placeholder="Describe your video idea, key points, or what you want to share..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={5}
                      className="w-full font-fira text-sm bg-black/50 border border-[#ff00aa]/30 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#ff00aa] focus:shadow-[0_0_20px_rgba(255,0,170,0.2)] transition-all resize-none"
                    />
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-fira text-xs text-white/30">{description.length}/500</span>
                      <span className="font-fira text-xs text-[#aaff00]/50">TIP: Be specific!</span>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <motion.button
                  onClick={generateVideo}
                  disabled={isGenerating || (!niche && !customNiche) || !description.trim()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-[#00f0ff] via-[#ff00aa] to-[#aaff00] rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-gradient-to-r from-[#00f0ff] via-[#ff00aa] to-[#aaff00] rounded-xl px-8 py-4 font-orbitron font-bold tracking-wider text-black text-sm md:text-base">
                    {isGenerating ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="animate-spin">{'⟳'}</span>
                        GENERATING...
                      </span>
                    ) : (
                      '[ FORGE_VIRAL_CONTENT ]'
                    )}
                  </div>
                </motion.button>
              </motion.div>

              {/* Preview/Output Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                {/* Phone mockup */}
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-b from-[#00f0ff]/20 via-[#ff00aa]/20 to-[#aaff00]/20 rounded-[40px] md:rounded-[60px] blur-2xl" />

                  {/* Phone frame */}
                  <div className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] bg-gradient-to-b from-[#1a1a2e] to-[#0a0a0f] rounded-[35px] md:rounded-[45px] p-2 md:p-3 border-2 border-[#00f0ff]/30 shadow-[0_0_60px_rgba(0,240,255,0.2)]">
                    {/* Screen */}
                    <div className="w-full h-full bg-black rounded-[28px] md:rounded-[36px] overflow-hidden relative">
                      {/* Notch */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 md:w-24 h-5 md:h-6 bg-black rounded-full z-20 border border-[#1a1a2e]" />

                      {/* Scan lines */}
                      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
                        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.03) 2px, rgba(0,240,255,0.03) 4px)'
                      }} />

                      <AnimatePresence mode="wait">
                        {!generatedVideo && !isGenerating && (
                          <motion.div
                            key="placeholder"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center p-6 text-center"
                          >
                            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-dashed border-[#00f0ff]/40 rounded-full flex items-center justify-center mb-4">
                              <span className="text-2xl md:text-3xl opacity-50">{'▶'}</span>
                            </div>
                            <p className="font-orbitron text-[#00f0ff]/50 text-xs md:text-sm tracking-wider">PREVIEW_AWAITING</p>
                            <p className="font-fira text-white/30 text-xs mt-2">Enter niche + description</p>
                          </motion.div>
                        )}

                        {isGenerating && (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col items-center justify-center p-6"
                          >
                            <div className="relative w-20 h-20 md:w-24 md:h-24">
                              <motion.div
                                className="absolute inset-0 border-2 border-[#00f0ff] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              <motion.div
                                className="absolute inset-2 border-2 border-[#ff00aa] rounded-full"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                              />
                              <motion.div
                                className="absolute inset-4 border-2 border-[#aaff00] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                              />
                            </div>
                            <p className="font-fira text-[#00f0ff] text-xs md:text-sm mt-6 animate-pulse">
                              {'>>> FORGING_VIRAL <<<'}
                            </p>
                          </motion.div>
                        )}

                        {generatedVideo && !isGenerating && (
                          <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="h-full flex flex-col bg-gradient-to-b from-[#0a0a0f] via-[#1a1a2e] to-[#0a0a0f] relative"
                          >
                            {/* Video header */}
                            <div className="p-3 md:p-4 border-b border-[#00f0ff]/20 mt-6 md:mt-8">
                              <div className="flex items-center gap-2">
                                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#ff00aa]" />
                                <span className="font-fira text-xs text-white/80">@your_channel</span>
                                <span className="ml-auto text-[#aaff00] font-orbitron text-[10px]">{generatedVideo.duration}</span>
                              </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-3 md:p-4 overflow-y-auto space-y-4">
                              {/* Hook */}
                              <div>
                                <span className="font-orbitron text-[10px] text-[#00f0ff] tracking-wider">HOOK:</span>
                                <p className="font-fira text-xs md:text-sm text-white mt-1 leading-relaxed">{generatedVideo.hook}</p>
                              </div>

                              {/* Script */}
                              <div>
                                <span className="font-orbitron text-[10px] text-[#ff00aa] tracking-wider">SCRIPT:</span>
                                <div className="mt-2 space-y-2">
                                  {generatedVideo.script.map((line, i) => (
                                    <motion.p
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="font-fira text-[11px] md:text-xs text-white/70 leading-relaxed pl-2 border-l border-[#ff00aa]/30"
                                    >
                                      {line}
                                    </motion.p>
                                  ))}
                                </div>
                              </div>

                              {/* Style */}
                              <div className="flex gap-4">
                                <div>
                                  <span className="font-orbitron text-[10px] text-[#aaff00] tracking-wider">STYLE:</span>
                                  <p className="font-fira text-xs text-white/60">{generatedVideo.style}</p>
                                </div>
                              </div>

                              {/* Hashtags */}
                              <div>
                                <span className="font-orbitron text-[10px] text-[#00f0ff] tracking-wider">HASHTAGS:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {generatedVideo.hashtags.map((tag, i) => (
                                    <span key={i} className="font-fira text-[10px] text-[#00f0ff]/80">{tag}</span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            {/* Action buttons */}
                            <div className="p-3 md:p-4 border-t border-[#ff00aa]/20 space-y-2">
                              <button
                                onClick={() => copyToClipboard(`${generatedVideo.hook}\n\n${generatedVideo.script.join('\n')}\n\n${generatedVideo.hashtags.join(' ')}`)}
                                className="w-full py-2.5 md:py-3 bg-gradient-to-r from-[#00f0ff] to-[#ff00aa] rounded-lg font-orbitron text-xs font-bold text-black tracking-wider hover:opacity-90 transition-opacity"
                              >
                                COPY_SCRIPT
                              </button>
                              <button
                                onClick={generateVideo}
                                className="w-full py-2 border border-[#aaff00]/50 rounded-lg font-fira text-[10px] text-[#aaff00] hover:bg-[#aaff00]/10 transition-colors"
                              >
                                {'↻'} REGENERATE
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Side icons mockup */}
                  <div className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 space-y-4 hidden sm:block">
                    {['♥', '💬', '↗', '🎵'].map((icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1 }}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-sm md:text-base"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-4 px-4 text-center border-t border-white/5">
          <p className="font-fira text-[10px] md:text-xs text-white/30 tracking-wider">
            Requested by @Quincy · Built by @clonkbot
          </p>
        </footer>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}

export default App
