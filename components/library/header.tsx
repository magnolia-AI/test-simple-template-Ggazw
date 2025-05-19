'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight">Athenaeum</Link>
        
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/collection" className="hover:text-primary transition-colors">Collection</Link>
          <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
          <Link href="/membership" className="hover:text-primary transition-colors">Membership</Link>
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:inline-flex">Sign In</Button>
          <Button>Join Now</Button>
        </div>
      </div>
    </motion.header>
  );
}
