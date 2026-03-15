"use client";
import React from 'react';
import Link from 'next/link';
import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Download className="text-primary w-8 h-8" />
        <span className="text-2xl font-black gradient-text tracking-tighter">VidSnap</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">Home</Link>
        <Link href="/#faq" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">FAQ</Link>
        <Link href="/api-docs" className="text-sm font-bold text-gray-400 hover:text-primary transition-colors uppercase tracking-widest">API</Link>
      </div>
    </nav>
  );
};

export default Navbar;
