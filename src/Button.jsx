import icon_bg from './assets/shapes/button/arrow_bg.png';

export default function Button({ text, symbol, img, alt, handler }) {
  return (
    <button
      onClick={handler}
      className='font-[DINPro] pointer-events-auto tracking-wide text-3xl w-full flex gap-2 items-center self-end bg-[#ff6a9f] rounded-full h-24 p-6'
    >
      <div className='w-16 h-16 flex items-center justify-center relative'>
        <img
          src={icon_bg}
          alt='Icon Background'
          className='absolute w-20 z-10'
        />
        {img && (
          <img src={img} alt={alt} className='absolute right-5 w-6 z-20' />
        )}
        {symbol && (
          <p className='text-4xl text-white absolute bottom-5 z-20'>{symbol}</p>
        )}
      </div>
      <p className='relative bottom-1 font-semibold tracking-widest align-middle'>
        {text}
      </p>
    </button>
  );
}
