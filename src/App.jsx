import { useCallback, useMemo, useRef, useState } from 'react';
import First from './First';
import Global from './Global';
import Second from './Second';
import Third from './Third';

const DISTANCE = 100;

export default function App() {
  let [page, setPage] = useState(0);
  let [touchList, setTouchList] = useState([]);
  let [canMove, setCanMove] = useState(true);

  let appRef = useRef(null);
  let firstRef = useRef(null);
  let secondRef = useRef(null);
  let thirdRef = useRef(null);

  let pages = useMemo(
    () => [firstRef, secondRef, thirdRef],
    [firstRef, secondRef, thirdRef]
  );

  const onHomeClick = useCallback(() => {
    switchPage(-page);
  }, [page]);

  const onNextClick = useCallback(() => {
    switchPage(1);
  }, []);

  const onTouchStart = useCallback(
    (event) => {
      setTouchList([
        ...touchList,
        {
          x: event.changedTouches[0].clientX,
          id: event.changedTouches[0].identifier,
        },
      ]);
    },
    [touchList]
  );

  const onTouchEnd = useCallback(
    (event) => {
      setTouchList(
        [...touchList].filter(
          (touch) => touch.id != event.changedTouches[0].identifier
        )
      );
    },
    [touchList]
  );

  const onTouchMove = useCallback(
    (event) => {
      if (!canMove) return;
      for (let touch of event.changedTouches) {
        let prevPos = touchList.find(
          (prevTouch) => prevTouch.id === touch.identifier
        ).x;

        if (touch.clientX - prevPos > DISTANCE) {
          switchPage(-1);
        } else if (prevPos - touch.clientX > DISTANCE) {
          switchPage(1);
        }
      }
    },
    [touchList, canMove]
  );

  const switchPage = useCallback(
    (to) => {
      setCanMove(false);
      setTimeout(() => {
        setCanMove(true);
      }, 250);
      if (to > 0) {
        if (page >= pages.length - 1) return;
      } else {
        if (page <= 0) return;
      }
      setPage(page + to);
      pages[page + to].current.scrollIntoView({ behavior: 'smooth' });
    },
    [page, pages]
  );

  return (
    <div
      ref={appRef}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      className='w-[300vw] h-full'
    >
      <Global onHomeClick={onHomeClick} />
      <div className="flex w-full bg-contain bg-[url('./assets/images/bg.png')]">
        <First ref={firstRef} onNextClick={onNextClick} />
        <Second ref={secondRef} page={page} />
        <Third ref={thirdRef} />
      </div>
    </div>
  );
}
