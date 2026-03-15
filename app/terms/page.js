"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="blob bottom-[-10%] left-[-5%] bg-green-600/20" />
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[40px]"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="bg-primary/20 p-4 rounded-2xl text-primary">
                <FileText size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black">Terms of Service</h1>
            </div>

            <div className="space-y-8 text-gray-400 font-medium leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Acceptable Use</h2>
                <p>VidSnap is provided for personal, non-commercial use. Users are responsible for ensuring they have the legal right to download content and must respect the intellectual property rights of creators and platforms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Service Limitations</h2>
                <p>We do not guarantee 100% uptime. The service relies on third-party platform APIs and tools (like yt-dlp) which may change without notice. We reserve the right to limit or restrict access to prevent abuse.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. No Warranty</h2>
                <p>VidSnap is provided "as is" without any warranties of any kind. We are not responsible for any damage to your device or data loss resulting from the use of our service.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Changes to Terms</h2>
                <p>We may update these terms from time to time. Your continued use of the service constitutes acceptance of the new terms.</p>
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
