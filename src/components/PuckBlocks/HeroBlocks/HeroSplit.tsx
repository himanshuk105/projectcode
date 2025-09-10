import { HeroBlock } from '@/Typesafe/HeroBlockTypes'

export default function HeroSplit({
  heading,
  subheading,
  buttontext,
  imageurl,
  buttonOther,
  backgroundType,
}: HeroBlock) {
  return (
    <section
      className={`w-full ${backgroundType == 'Complete' ? '' : 'bg-gray-900'}  text-white`}
      style={
        backgroundType === 'Complete'
          ? {
              backgroundImage: `url(${imageurl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : {}
      }
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16 md:py-24 ${backgroundType == 'Complete' ? 'justify-center' : ''}`}
      >
        {/* Left Side - Text */}
        <div
          className={` ${backgroundType == 'Complete' ? '' : 'flex-1 md:text-left'}  text-center`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{heading}</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">{subheading}</p>
          <div
            className={`flex flex-col md:flex-row gap-4 justify-center  ${backgroundType == 'Complete' ? '' : 'md:justify-start'}`}
          >
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-medium shadow-lg">
              {buttontext}
            </button>
            <button className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-lg text-white font-medium">
              {buttonOther}
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        {backgroundType == 'right' && (
          <div className="flex-1 mt-10 md:mt-0 flex justify-center">
            <img src={imageurl} alt="Hero Image" className="rounded-2xl shadow-2xl" />
          </div>
        )}
      </div>
    </section>
  )
}
