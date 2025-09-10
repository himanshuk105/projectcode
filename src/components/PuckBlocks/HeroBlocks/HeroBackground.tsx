import { HeroBlock } from '@/Typesafe/HeroBlockTypes'

// components/HeroBackground.tsx
export default function HeroBackground({
  heading,
  subheading,
  buttontext,
  highlightText,
}: HeroBlock) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full animate-gradient bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:400%_400%]"></div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {heading}
          <span className="text-indigo-400">{highlightText}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-200 mb-8">{subheading}</p>
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-lg font-semibold shadow-lg">
          {buttontext}
        </button>
      </div>
    </section>
  )
}
