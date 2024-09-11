'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import IconClose from '@/atoms/Icons/IconClose';
import IconHamburger from '@/atoms/Icons/IconHamburger';

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // close menu when click mouse outside
    let mouseHandler = (e: MouseEvent): void => {
      if (!menuRef?.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    // close menu when press "escape" on keyboard
    let keyHandler = (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', mouseHandler);
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('mousedown', mouseHandler);
      document.removeEventListener('keydown', keyHandler);
    };
  });

  return (
    <>
      <button
        className="absolute top-0 left-5 outline-none"
        onClick={() => setOpen(true)}
      >
        <IconHamburger />
      </button>
      <motion.div
        ref={menuRef}
        animate={open ? 'open' : 'close'}
        variants={{
          open: { opacity: 1, x: 0 },
          close: { opacity: 0, x: '-100%' },
        }}
        className="fixed top-0 left-0 bottom-0 py-5 pl-5 pr-16 bg-background-primary shadow-[0_0_10px_3px_rgba(0,0,0,0.4)] opacity-0 z-[99999]"
      >
        <button className="outline-none" onClick={() => setOpen(false)}>
          <IconClose />
          <nav className="flex flex-col gap-5 mt-10 cursor-default">
            <Link
              href="/"
              className="text-left text-2xl transition-all duration-300 ease-in-out hover:text-text-default-hover"
            >
              One image
            </Link>
            <Link
              href="/multiple"
              className="text-left text-2xl transition-all duration-300 ease-in-out hover:text-text-default-hover"
            >
              Multiple images
            </Link>
          </nav>
        </button>
      </motion.div>
    </>
  );
};

export default Navigation;
