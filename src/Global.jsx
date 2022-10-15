import home from './assets/icons/global/home.png';
import pipe from './assets/icons/global/pipe.png';
import logo from './assets/icons/global/logo.png';

export default function Global({ onHomeClick }) {
  return (
    <div className='z-50'>
      <Navigation onHomeClick={onHomeClick} />
      <Logo />
    </div>
  );
}

function Navigation({ onHomeClick }) {
  return (
    <div className='fixed top-6 left-20 flex gap-6 items-center z-50'>
      <img
        src={home}
        alt='Home Icon'
        className='h-[18px] z-50'
        onClick={onHomeClick}
      />
      <img src={pipe} alt='Pipe Icon' className='h-8 w-[1.5px] z-50' />
      <button className='font-[Circe] tracking-widest z-50'>PROJECT</button>
    </div>
  );
}

function Logo() {
  return (
    <div className='fixed bottom-4 left-20 w-16 z-50'>
      <img src={logo} alt='OnPoint Logo' />
    </div>
  );
}
