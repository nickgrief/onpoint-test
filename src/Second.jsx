import line from './assets/shapes/scroll/line.png';
import scroll from './assets/shapes/scroll/btn.png';
import pinkSperm1 from './assets/images/first/pink_sperm_1.png';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

const Second = forwardRef(function Second(props, ref) {
  let { page } = props;
  let [anim, setAnim] = useState(0);

  useEffect(() => {
    if (page === 1) {
      setAnim(1);
    } else if (page === 0) {
      setAnim(-1);
    }
  }, [page]);

  return (
    <div
      ref={ref}
      className='font-[DINPro] relative gap-8 w-screen h-screen flex flex-col items-start justify-center pl-14'
    >
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[3000ms] absolute w-96 z-10 ${
          anim === 1
            ? 'scale-100 right-32 top-32 opacity-100'
            : 'scale-50 right-0 top-64 opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[1000ms] absolute w-[600px] z-10 ${
          anim === 1
            ? 'scale-100 right-0 top-[200px] opacity-100'
            : 'scale-50 -right-[150px] top-[450px] opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[3000ms] absolute w-32 z-10 ${
          anim === 1
            ? 'scale-100 right-8 top-[80px] opacity-100'
            : 'scale-50 -right-[150px] top-[200px] opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[2000ms] absolute w-64 z-10 ${
          anim === 1
            ? 'scale-100 -right-[150px] top-32 opacity-100'
            : 'scale-50 -right-[200px] top-64 opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[3000ms] absolute w-[500px] z-10 ${
          anim === 1
            ? 'scale-100 -right-[380px] top-[500px] opacity-100'
            : 'scale-50 -right-[400px] top-[600px] opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[2000ms] absolute w-[550px] z-10 ${
          anim === 1
            ? 'scale-100 -right-[400px] top-[400px] opacity-100'
            : 'scale-50 -right-[450px] top-[500px] opacity-0'
        }`}
      />
      <img
        src={pinkSperm1}
        alt='Pink Sperm'
        className={`transition-all rotate-[30deg] ease-in-out duration-[1000ms] absolute w-[550px] z-10 ${
          anim === 1
            ? 'scale-100 -right-[200px] top-[150px] opacity-100'
            : 'scale-50 -right-[300px] top-[400px] opacity-0'
        }`}
      />
      <div className='text-3xl ml-2 z-40'>
        <p>ТЕКСТ</p>
        <p>СООБЩЕНИЯ</p>
      </div>
      <TextSection />
    </div>
  );
});

export default Second;

function TextSection() {
  let textRef = useRef(null);
  let scrollRef = useRef(null);

  let [isPicked, setIsPicked] = useState(false);
  let [offset, setOffset] = useState(0);
  let [touchStart, setTouchStart] = useState(null);

  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  let onTouchDown = useCallback((event) => {
    setIsPicked(true);
    setTouchStart(event.changedTouches[0].clientY);
  });

  let onTouchMove = useCallback(
    (event) => {
      if (!isPicked) return;
      let touch = event.changedTouches[0];
      let y = touch.clientY;
      let off = clamp(y - touchStart + offset, 0, 362);
      setOffset(off);
    },
    [isPicked]
  );

  let onTouchEnd = useCallback(() => {
    setIsPicked(false);
  });

  useEffect(() => {
    textRef.current.scroll(0, (offset * 220) / 362);
  }, [offset]);

  return (
    <div className='flex w-11/12 h-3/5 gap-12 z-40'>
      <div className='w-12 relative flex justify-center'>
        <img
          src={line}
          alt='Scroll Line'
          className='h-full w-2 absolute z-20'
        />
        <img
          ref={scrollRef}
          onTouchStart={onTouchDown}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          src={scroll}
          alt='Scroll Button'
          style={{
            top: `${offset}px`,
          }}
          className={`w-5 absolute z-30`}
        />
      </div>
      <div className='bg-white w-full text-2xl p-8 rounded-[3rem] shadow-2xl '>
        <div ref={textRef} className='overflow-hidden h-full -ml-32 pl-32'>
          <span className='font-bold'>Lorem ipsum dolor sit amet,</span>{' '}
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Duis ut diam quam nulla. Mauris in
          aliquam sem fringilla ut morbi tincidunt. Vitae aliquet nec
          ullamcorper sit amet risus nullam eget felis. Nulla pharetra diam sit
          amet nisl. Eget nulla facilisi etiam dignissim diam quis enim
          lobortis. Est sit amet facilisis magna. Neque laoreet suspendisse
          interdum consectetur libero id. Nec ullamcorper sit amet risus nullam
          eget felis eget. Mollis aliquam ut porttitor leo a diam sollicitudin
          tempor id. Euismod quis viverra nibh cras pulvinar mattis nunc. Massa
          massa ultricies mi quis. Sit amet massa vitae tortor condimentum
          lacinia. Et malesuada fames ac turpis egestas integer eget. Elementum
          pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
          Amet justo donec enim diam vulputate ut pharetra sit. Risus ultricies
          tristique nulla aliquet enim tortor at auctor. Velit sed ullamcorper
          morbi tincidunt ornare massa. Quis hendrerit dolor magna eget est
          lorem ipsum. Etiam dignissim diam quis enim. Gravida neque convallis a
          cras. Ut enim blandit volutpat maecenas volutpat. Mauris sit amet
          massa vitae tortor condimentum lacinia quis vel.
        </div>
      </div>
    </div>
  );
}
