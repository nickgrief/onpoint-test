import Button from './Button';
import arrow from './assets/shapes/button/arrow.png';
import { forwardRef, useEffect, useState } from 'react';

import worm from './assets/images/first/worm.png';
import pinkSperm from './assets/images/first/pink_sperm.png';
import pinkSperm1 from './assets/images/first/pink_sperm_1.png';
import baktiBG from './assets/images/first/bakti_bg.png';
import baktiBG2 from './assets/images/first/bakti_bg_2.png';
import bakti4 from './assets/images/first/bakti_4.png';
import bakti1 from './assets/images/first/bakti_1.png';
import bakti2 from './assets/images/first/bakti_2.png';
import bakti3 from './assets/images/first/bakti_3.png';

const First = forwardRef(function First(props, ref) {
  let { onNextClick } = props;
  let [anim, setAnim] = useState(0);

  useEffect(() => {
    setAnim(1);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnim(-anim);
    }, 5000);

    return () => clearInterval(interval);
  }, [anim]);

  return (
    <div
      ref={ref}
      className='relative w-screen h-screen flex items-center pl-14'
    >
      <img
        src={worm}
        alt='Worm Image'
        className='absolute left-0 top-20 w-28'
      />
      <img
        src={pinkSperm}
        alt='Pink Sperm Image'
        className='absolute left-0 bottom-16 w-64'
      />
      <img
        src={pinkSperm1}
        alt='Another Pink Sperm Image'
        className='absolute right-0 top-40 w-[615px]'
      />
      <img
        src={baktiBG}
        alt='Bakti Far Away Image'
        className='absolute right-8 top-8 w-20'
      />
      <img
        src={baktiBG2}
        alt='Another Bakti Far Away Image'
        className='absolute left-80 bottom-16 w-20'
      />
      <img
        src={bakti4}
        alt='Pulsating Bakti In Foreground'
        className={`transition-all ease-in-out duration-[6000ms] absolute w-64 ${
          anim === 1
            ? 'scale-90 right-[280px] -bottom-4'
            : 'scale-110 right-[320px] bottom-0'
        }`}
      />
      <img
        src={bakti1}
        alt='Moving Bakti'
        className={`transition-all ease-in-out duration-[6000ms] z-10 absolute w-32 ${
          anim === 1
            ? 'scale-50 left-24 bottom-24'
            : 'scale-75 left-32 bottom-32'
        }`}
      />
      <img
        src={bakti2}
        alt='Moving Bakti 2'
        className={`transition-all ease-in-out duration-[6000ms] z-10 absolute w-32 ${
          anim === 1 ? 'scale-50 right-24 top-24' : 'scale-75 right-32 top-16'
        }`}
      />
      <img
        src={bakti3}
        alt='Moving Bakti 3'
        className={`transition-all ease-in-out duration-[6000ms] z-0 absolute w-16 ${
          anim === 1 ? 'scale-50 right-48 top-32' : 'scale-75 right-8 top-20'
        }`}
      />
      <Text onNextClick={onNextClick} />
    </div>
  );
});

export default First;

function Text({ onNextClick }) {
  return (
    <div className='font-[Gilroy] text-[7rem] leading-[1.15] z-40'>
      <p className='font-[DINPro] text-3xl'>ПРИВЕТ,</p>
      <p>
        ЭТО <span className='font-bold'>НЕ</span>
      </p>
      <p>КОММЕРЧЕСКОЕ</p>
      <div className='flex gap-12 items-baseline'>
        <p>ЗАДАНИЕ</p>
        <Button
          handler={onNextClick}
          text={'Что дальше?'}
          img={arrow}
          alt={'Arrow Icon'}
        />
      </div>
    </div>
  );
}
