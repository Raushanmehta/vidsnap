"use client";
import React from 'react';
import Navbar from '@/components/Navbar';
import { Terminal, Code, Cpu, Cloud, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ApiDocs() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="blob top-[-5%] left-[-5%] bg-emerald-600/10" />
        <div className="blob bottom-[-5%] right-[-5%] bg-green-600/10" />
        
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 rounded-[40px]"
          >
            <div className="flex items-center space-x-6 mb-12">
              <div className="bg-primary/20 p-5 rounded-3xl text-primary shadow-2xl">
                <Terminal size={40} />
              </div>
              <div>
                <h1 className="text-5xl font-black">API Reference</h1>
                <p className="text-gray-400 text-lg mt-2 font-medium">Integrate VidSnap intelligence into your own apps.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <ApiFeature icon={<Zap />} title="Real-time" desc="Instant metadata fetching." />
              <ApiFeature icon={<Code />} title="RESTful" desc="Easy to use JSON API." />
              <ApiFeature icon={<Cloud />} title="Scalable" desc="Built for high-traffic." />
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-3xl font-black mb-6 flex items-center space-x-3">
                  <span className="text-primary text-xl">01</span>
                  <span>Get Video Info</span>
                </h2>
                <div className="glass p-6 rounded-3xl overflow-x-auto mb-4 border-white/5">
                  <pre className="text-sm font-mono text-gray-300">
{`POST /api/video/video-info
Content-Type: application/json

{
  "url": "https://youtube.com/watch?v=..."
}`}
                  </pre>
                </div>
                <p className="text-gray-400 font-medium">Returns title, thumbnail, duration, and all available formats with IDs.</p>
              </section>

              <section>
                <h2 className="text-3xl font-black mb-6 flex items-center space-x-3">
                  <span className="text-primary text-xl">02</span>
                  <span>Initiate Download</span>
                </h2>
                <div className="glass p-6 rounded-3xl overflow-x-auto mb-4 border-white/5">
                  <pre className="text-sm font-mono text-gray-300">
{`GET /api/video/download?url=URL&formatId=ID`}
                  </pre>
                </div>
                <p className="text-gray-400 font-medium">Redirects to the direct file download stream. Supports MP4 and MP3 formats.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-gray-600 text-sm font-bold mb-2">© 2026 VidSnap Developer Portal.</p>
        <p className="text-gray-500 text-[10px] font-medium tracking-[0.2em] uppercase">
          Developed by <a href="https://raushanmehta.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Raushan Mehta.in</a> • Designed by Raushan Mehta
        </p>
      </footer>
    </>
  );
}

const ApiFeature = ({ icon, title, desc }) => (
  <div className="glass p-6 rounded-3xl border-white/5 hover:bg-white/[0.04] transition-colors">
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-1">{title}</h3>
    <p className="text-gray-500 text-sm font-medium">{desc}</p>
  </div>
);
