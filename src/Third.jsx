import bottle from './assets/images/third/bottle.png';
import Button from './Button';

import dish from './assets/icons/third/dish.png';
import calendar from './assets/icons/third/calendar.png';

import close from './assets/icons/fourth/btn_close.png';

import arrowLeft from './assets/icons/fourth/arrow_left.png';
import arrowRight from './assets/icons/fourth/arrow_right.png';
import emptyCircle from './assets/icons/fourth/empty_circle.png';
import filledCircle from './assets/icons/fourth/filled_circle.png';
import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

import bubble from './assets/images/third/bubble.png';
import bubble2 from './assets/images/third/bubble_3.png';

const Third = forwardRef(function Third(props, ref) {
  let [isOverlayOn, setIsOverlayOn] = useState(false);

  let handleMoreButton = useCallback(() => {
    setIsOverlayOn(true);
  });

  let handleCloseButton = useCallback(() => {
    setIsOverlayOn(false);
  });

  let [anim, setAnim] = useState(0);

  useEffect(() => {
    setAnim(1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnim(-anim);
    }, 2000);

    return () => clearInterval(interval);
  }, [anim]);

  return (
    <div
      ref={ref}
      className={`w-screen relative box-border h-screen flex gap-20 items-center pl-14 font-[DINPro] transition-all  ease-in-out  duration-500 ${
        isOverlayOn && ' bg-black bg-opacity-60'
      }`}
    >
      <img
        src={bubble}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-50 duration-[3000ms] absolute w-32 z-30 ${
          anim === 1
            ? 'scale-100 left-48 bottom-16'
            : 'scale-110 left-40 bottom-24'
        }`}
      />
      <img
        src={bubble}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-60 duration-[3000ms] absolute w-16 z-50 ${
          anim === 1
            ? 'scale-125 left-4 bottom-20'
            : 'scale-100 left-10 bottom-12'
        }`}
      />
      <img
        src={bubble}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-40 duration-[3000ms] absolute w-12 z-30 ${
          anim === 1 ? 'scale-125 left-20 top-48' : 'scale-100 left-24 top-52'
        }`}
      />
      <img
        src={bubble2}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-80 duration-[3000ms] absolute w-12 z-50 ${
          anim === 1 ? 'scale-125 left-48 top-36' : 'scale-150 left-52 top-28'
        }`}
      />
      <img
        src={bubble2}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-100 duration-[3000ms] absolute w-32 z-20 ${
          anim === 1
            ? 'scale-125 left-4 bottom-36'
            : 'scale-150 left-0 bottom-20'
        }`}
      />
      <img
        src={bubble2}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-100 duration-[3000ms] absolute w-32 z-50 ${
          anim === 1
            ? 'scale-125 left-[230px] -bottom-16'
            : 'scale-150 left-[170px] -bottom-8'
        }`}
      />
      <img
        src={bubble2}
        alt='Bubble Image'
        className={`transition-all ease-in-out opacity-100 duration-[3000ms] absolute w-16   z-50 ${
          anim === 1
            ? 'scale-125 left-[240px] top-[270px]'
            : 'scale-100 left-[190px] top-[290px]'
        }`}
      />
      {isOverlayOn && <Overlay handleCloseButton={handleCloseButton} />}
      <div className='shrink-0'>
        <img
          src={bottle}
          alt='Bottle Image'
          className='relative h-[90vh] top-[5vh] z-40'
        />
      </div>
      <div className=' mt-20 flex flex-col gap-16 w-fit pointer-events-none'>
        <div>
          <p className='text-2xl relative z-40'>
            {isOverlayOn ? 'ПРЕИМУЩЕСТВА' : 'КЛЮЧЕВОЕ СООБЩЕНИЕ'}
          </p>
          <p className='text-8xl z-40 relative right-2 font-[Gilroy]'>
            BREND<span className='font-extrabold tracking-widest'>XY</span>
          </p>
        </div>
        <div className='grid relative right-32 gap-12 grid-cols-2 grid-rows-2 h-[40vh]'>
          <div className='row-span-2'>
            <Card
              icon={dish}
              alt={'Dish Icon'}
              text={`Ehicula ipsum a arcu
cursus vitae. Eu non
diam phasellus
vestibulum lorem sed
risus ultricies
`}
              left_margin={true}
            />
          </div>
          <Card
            icon={calendar}
            alt={'Calendar Icon'}
            text={`A arcu
cursus vitae
`}
          />
          <Button text={'Подробнее'} symbol={'+'} handler={handleMoreButton} />
        </div>
      </div>
    </div>
  );
});

export default Third;

function Card({ icon, alt, text, left_margin }) {
  return (
    <div
      className={`bg-white relative h-full w-full text-2xl p-10 rounded-[3rem] shadow-2xl ${
        left_margin && 'pl-20'
      }`}
    >
      <img src={icon} alt={alt} className='w-20 absolute -top-10' />
      <p className='text-[1.8rem]'>{text}</p>
    </div>
  );
}

function Overlay({ handleCloseButton }) {
  let [pageIndex, setPageIndex] = useState(0);
  let [opacity, setOpacity] = useState(0);

  let pageOne = (
    <div
      className={`absolute transition-all ease-in-out duration-500 text-[1.6rem] pl-[11.5rem] pt-52 flex flex-col gap-1 pr-8 opacity-${
        pageIndex === 0 ? '100' : '0'
      }`}
    >
      <p className='font-bold text-[#8cc9e8]'>01</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <p className='font-bold text-[#8cc9e8]'>02</p>
      <p>Faucibus pulvinar elementum integer enim</p>
      <p className='font-bold text-[#8cc9e8]'>03</p>
      <p>Faucibus pulvinar elementum integer enim</p>
    </div>
  );

  let pageTwo = (
    <div
      className={`absolute transition-all ease-in-out duration-500 text-[1.6rem] pl-[11.5rem] pt-52 flex flex-col gap-1 pr-8 opacity-${
        pageIndex === 1 ? '100' : '0'
      }`}
    >
      <p className='font-bold text-[#8cc9e8]'>04</p>
      <p>Mi bibendum neque egestas congue quisque egestas diam</p>
      <p className='font-bold text-[#8cc9e8]'>05</p>
      <p>Venenatis lectus magna fringilla urna</p>
      <p className='font-bold text-[#8cc9e8]'>06</p>
      <p>Venenatis lectus magna fringilla urna</p>
    </div>
  );

  let pages = [pageOne, pageTwo];

  let handleSwitchPage = useCallback((to) => {
    setPageIndex(to);
  });

  useLayoutEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <div
      className={`absolute transition-all ease-in-out duration-500 z-20 bg-white w-9/12 h-[80%] ml-32 mt-24 rounded-l-none rounded-[3rem] opacity-${opacity}`}
    >
      <button
        onClick={handleCloseButton}
        className='absolute right-8 top-8 w-12 h-12 z-50'
      >
        <img src={close} alt='Close Button' className='relative' />
      </button>
      {pages[0]}
      {pages[1]}
      <div className='absolute bottom-12 left-[11.5rem] flex gap-4 h-4'>
        <button onClick={() => handleSwitchPage(0)}>
          <img src={arrowLeft} alt='Left Arrow Icon' className='h-4' />
        </button>
        {pageIndex == 0 ? (
          <img src={filledCircle} alt='Filled Circle Icon' />
        ) : (
          <img src={emptyCircle} alt='Empty Circle Icon' />
        )}
        {pageIndex == 0 ? (
          <img src={emptyCircle} alt='Empty Circle Icon' />
        ) : (
          <img src={filledCircle} alt='Filled Circle Icon' />
        )}
        <button onClick={() => handleSwitchPage(1)}>
          <img src={arrowRight} alt='Right Arrow Icon' className='h-4' />
        </button>
      </div>
    </div>
  );
}
