import React, { useEffect } from 'react';

import { GrClose } from "react-icons/gr";
import { twMerge } from 'tailwind-merge';



const ModalWrapper = ({ children, modalState, closeModal }) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
   
    if (modalState.open) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [modalState.open]);
  return (
    <div
      className={`fixed left-0 top-0 grid min-w-full place-items-center bg-rq-grey transition-all duration-500 ${
        modalState.open
          ? 'pointer-events-auto z-40 h-screen opacity-100'
          : 'pointer-events-none z-[-10] h-0 opacity-0'
      }`}
      onClick={handleModalClick}
    >
      <main
        className={twMerge(
          'relative flex max-w-[90%] items-center justify-center rounded-3xl bg-rq-white transition-all duration-300 sm:max-w-lg md:max-w-xl xl:max-w-3xl',
          modalState.open ? 'opacity-100' : 'opacity-0',
          modalState.view === 'adminClientModal' && 'sm:max-w-xl md:max-w-3xl xl:max-w-5xl',
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type='button'
          className='absolute right-10 top-8 z-50 cursor-pointer transition hover:scale-105'
          onClick={closeModal}
        >
          <figure className='relative'>
            <GrClose className='h-4 w-4 scale-90 md:scale-100' />
          </figure>
        </button>
        {children}
      </main>
    </div>
  );
};

export default ModalWrapper;
