"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="blob top-[-10%] right-[-5%] bg-emerald-600/20" />
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[40px]"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                <Shield size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black">Privacy Policy</h1>
            </div>

            <div className="space-y-8 text-gray-400 font-medium leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
                <p>VidSnap is designed to be a privacy-first platform. We do not require account creation, and we do not store personal information about our users. When you use our service, we only process the video URL you provide to facilitate the download.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Cookies</h2>
                <p>We use minimal, essential cookies only to ensure the website functions correctly and to improve user experience. We do not use tracking or advertising cookies.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Log Files</h2>
                <p>Standard server logs are maintained for a brief period to monitor for technical issues and prevent abuse. These logs contain anonymous data such as IP address and browser type, which are not linked to any personal identity.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. External Links</h2>
                <p>Our service allows you to download content from third-party platforms like YouTube and Facebook. We are not responsible for the privacy practices of those platforms.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm font-bold mb-2">© 2026 VidSnap. All Rights Reserved.</p>
        <p className="text-gray-500 text-[10px] font-medium tracking-[0.2em] uppercase">
          Developed by <a href="https://raushanmehta.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Raushan Mehta.in</a> • Designed by Raushan Mehta
        </p>
      </footer>
    </>
  );
}
