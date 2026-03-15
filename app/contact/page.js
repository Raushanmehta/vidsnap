"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="blob top-[10%] left-[10%] bg-emerald-600/20" />
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[40px]"
          >
            <div className="text-center mb-12">
              <div className="bg-primary/20 w-16 h-16 rounded-3xl flex items-center justify-center mx-auto mb-6 text-primary shadow-xl">
                <Mail size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4">Get in Touch</h1>
              <p className="text-gray-400 text-lg font-medium">Have questions or feedback? We'd love to hear from you.</p>
            </div>

            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Message</label>
                <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary/50 outline-none resize-none" placeholder="Your message..."></textarea>
              </div>
              <button type="submit" className="premium-button w-full py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3">
                <Send size={24} />
                <span>SEND MESSAGE</span>
              </button>
            </form>

            <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-lg font-bold mb-2">Email Us</h3>
                <p className="text-primary font-bold">support@vidsnap.app</p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Response Time</h3>
                <p className="text-gray-400 font-medium">We usually reply within 24 hours.</p>
              </div>
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
