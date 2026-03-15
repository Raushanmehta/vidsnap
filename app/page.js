"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { 
  Search, Youtube, Facebook, Shield, Zap, Sparkles, 
  Loader2, Download, AlertCircle, Instagram, CheckCircle, 
  Play, MousePointer2, Settings, HelpCircle, ChevronDown, 
  Twitter, Share2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/video';
const HEALTH_URL = process.env.NEXT_PUBLIC_API_URL ? process.env.NEXT_PUBLIC_API_URL.replace('/api/video', '/health') : 'http://localhost:5000/health';

export default function Home() {

  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [error, setError] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);

  const handleFetchInfo = async () => {
    if (!url) return;
    setLoading(true);
    setError('');
    setVideoInfo(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/video-info`, { url });
      setVideoInfo(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch video details. Please check the URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async (formatId) => {
    window.location.href = `${API_BASE_URL}/download?url=${encodeURIComponent(url)}&formatId=${formatId}`;
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow scroll-smooth">
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="blob top-[-10%] left-[-5%] bg-emerald-600/20" />
          <div className="blob bottom-[10%] right-[-5%] bg-green-600/20" />
        </div>


        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full glass border-white/10 text-primary text-sm font-semibold tracking-wide"
            >
              🚀 The World's Fastest Video Downloader
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight"
            >
              Download Any <br />
              <span className="gradient-text">Video Instantly</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-2xl mb-14 max-w-3xl mx-auto font-medium"
            >
              VidSnap is the most efficient way to save content from YouTube, 
              Facebook, and Instagram in ultra-high quality.
            </motion.p>

            {/* Downloader Input Area */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="glass p-2.5 rounded-3xl flex flex-col md:flex-row items-center shadow-3xl group transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50">
                <div className="flex-grow relative w-full">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 text-primary group-focus-within:text-white transition-colors">
                    <Search className="w-7 h-7" />
                  </span>
                  <input 
                    type="text" 
                    placeholder="Paste your video link here..."
                    className="w-full bg-transparent border-none focus:ring-0 text-xl pl-16 pr-6 py-5 outline-none placeholder:text-gray-600"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleFetchInfo()}
                  />
                </div>
                <button 
                  onClick={handleFetchInfo}
                  disabled={loading}
                  className="premium-button w-full md:w-auto px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {loading ? <Loader2 className="w-7 h-7 animate-spin" /> : <span>DOWNLOAD</span>}
                </button>
              </div>
              
              {error && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex items-center space-x-3 text-red-400 bg-red-400/10 px-6 py-3 rounded-2xl border border-red-400/20 justify-center w-fit mx-auto"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-semibold">{error}</span>
                </motion.div>
              )}
            </motion.div>

            <AnimatePresence>
              {videoInfo && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 40 }}
                  className="glass-card max-w-5xl mx-auto rounded-[40px] overflow-hidden text-left shadow-4xl p-8 md:p-12 mb-24 relative"
                >
                   <div className="absolute top-0 right-0 p-8">
                     <div className="px-4 py-1 bg-primary/20 rounded-full text-xs font-bold text-primary uppercase tracking-widest">Available Now</div>
                   </div>

                  <div className="flex flex-col lg:flex-row gap-12">
                    <div className="w-full lg:w-[400px] relative shrink-0 aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                      <img 
                        src={videoInfo.thumbnail} 
                        alt={videoInfo.title} 
                        className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000'}
                      />
                      <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg text-xs font-bold">{videoInfo.duration}</div>
                    </div>
                    
                    <div className="flex-grow flex flex-col">
                      <h2 className="text-3xl font-black mb-4 leading-tight">{videoInfo.title}</h2>
                      <div className="flex items-center space-x-4 mb-8">
                         <div className="flex -space-x-2">
                           <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center border-2 border-[#020617]"><Youtube size={14} /></div>
                           <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-2 border-[#020617]"><Facebook size={14} /></div>
                           <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center border-2 border-[#020617]"><Instagram size={14} /></div>
                         </div>
                         <span className="text-gray-500 text-sm font-bold">Supported Platforms</span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-0">
                        {videoInfo.formats.map((format, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleDownload(format.formatId)}
                            className="group relative overflow-hidden bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/50 p-5 rounded-2xl flex flex-col items-center justify-center transition-all duration-300"
                          >
                            <span className="text-lg font-black group-hover:text-primary transition-colors">{format.resolution}</span>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Quality • {format.ext}</span>
                            <Download className="w-5 h-5 mt-4 text-primary opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* New Section 1: Supported Platforms */}
        <section className="py-32 px-6 border-y border-white/5 relative bg-gradient-to-b from-transparent to-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 px-4">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">One Tool, <span className="text-emerald-500">All Platforms.</span></h2>
              <p className="text-gray-400 text-lg font-medium max-w-2xl mx-auto">We support the biggest social networks with high-speed processing and no quality loss.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <PlatformCard icon={<Youtube className="w-12 h-12 text-red-500" />} name="YouTube" detail="4K Support" />
              <PlatformCard icon={<Facebook className="w-12 h-12 text-blue-500" />} name="Facebook" detail="Full HD" />
              <PlatformCard icon={<Instagram className="w-12 h-12 text-pink-500" />} name="Instagram" detail="Reels & Stories" />
              <PlatformCard icon={<Twitter className="w-12 h-12 text-sky-400" />} name="Twitter" detail="Fast Save" />
            </div>
          </div>
        </section>

        {/* New Section 2: How It Works */}
        <section id="how-it-works" className="py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-20 tracking-tight">How It Works?</h2>
            <div className="grid md:grid-cols-3 gap-16 relative">
              <div className="hidden md:block absolute top-1/3 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />
              
              <StepItem 
                number="01" 
                icon={<Share2 className="w-8 h-8" />}
                title="Copy URL" 
                description="Find your favorite video on social media and copy the share link." 
              />
              <StepItem 
                number="02" 
                icon={<MousePointer2 className="w-8 h-8" />}
                title="Paste Link" 
                description="Paste the link into the FastDL search box above." 
              />
              <StepItem 
                number="03" 
                icon={<Download className="w-8 h-8" />}
                title="Get File" 
                description="Select your preferred quality and hit download. It's that easy!" 
              />
            </div>
          </div>
        </section>

        {/* New Section 3: FAQ */}
        <section id="faq" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Got Questions?</h2>
              <p className="text-gray-400 text-lg font-medium">Everything you need to know about VidSnap.</p>
            </div>
            
            <div className="space-y-4">
              <FaqItem 
                question="Is VidSnap free to use?" 
                answer="Yes! VidSnap is 100% free and will always be. We don't have any hidden subscription or paywalls."
                index={0}
                active={activeFaq}
                setActive={setActiveFaq}
              />
              <FaqItem 
                question="What resolutions are supported?" 
                answer="We support everything from 360p up to 4K resolution, depending on the original source quality of the video."
                index={1}
                active={activeFaq}
                setActive={setActiveFaq}
              />
              <FaqItem 
                question="Can I download videos on Mobile?" 
                answer="Absolutely. VidSnap is fully responsive and works perfectly on Chrome, Safari, and other mobile browsers."
                index={2}
                active={activeFaq}
                setActive={setActiveFaq}
              />
               <FaqItem 
                question="Is there a limit on downloads?" 
                answer="No, there are zero limits. You can download as many videos as you want, anytime you want."
                index={3}
                active={activeFaq}
                setActive={setActiveFaq}
              />
            </div>
          </div>
        </section>

        {/* Features Final Section */}
        <section className="py-32 px-6 bg-emerald-500/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10">
              <FeatureCard icon={<Zap className="w-7 h-7" />} title="Instant Speed" description="We use server-side multithreading to fetch and merge videos in lightning speed." />
              <FeatureCard icon={<Shield className="w-7 h-7" />} title="Safe Storage" description="We don't keep any logs of what you download. Your privacy is our highest priority." />
              <FeatureCard icon={<Sparkles className="w-7 h-7" />} title="HD Formats" description="Access all available qualities including HDR and high bitrate MP4 files." />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-20 border-t border-white/5 bg-black relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="flex items-center space-x-3">
              <Download className="text-primary w-10 h-10" />
              <span className="text-3xl font-black gradient-text tracking-tighter">VidSnap</span>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
              <a href="/api-docs" className="hover:text-primary transition-colors">API</a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 text-sm font-bold mb-2">© 2026 VidSnap. High Performance Video Downloader Engine.</p>
            <p className="text-gray-500 text-xs font-medium tracking-widest uppercase">
              Developed by <a href="https://raushanmehta.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">Raushan Mehta.in</a> • Designed by <span className="text-primary">Raushan Mehta</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

const PlatformCard = ({ icon, name, detail }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-[32px] text-center group cursor-default"
  >
    <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-black mb-1">{name}</h3>
    <p className="text-xs text-primary font-bold uppercase tracking-widest">{detail}</p>
  </motion.div>
);

const StepItem = ({ number, icon, title, description }) => (
  <div className="relative group">
    <div className="w-20 h-20 bg-primary/10 rounded-[28px] flex items-center justify-center mx-auto mb-8 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
      {icon}
    </div>
    <div className="absolute top-0 right-1/3 text-6xl font-black text-white/[0.03] select-none">{number}</div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-gray-500 font-medium leading-relaxed">{description}</p>
  </div>
);

const FaqItem = ({ question, answer, index, active, setActive }) => (
  <div className="glass rounded-2xl overflow-hidden mb-4 border-white/5">
    <button 
      onClick={() => setActive(active === index ? null : index)}
      className="w-full px-8 py-6 flex items-center justify-between text-left group"
    >
      <span className="text-lg font-bold group-hover:text-primary transition-colors">{question}</span>
      <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {active === index && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="px-8 pb-6 text-gray-400 font-medium leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="glass p-10 rounded-[40px] hover:bg-white/[0.04] transition-colors border-white/5 group">
    <div className="bg-primary w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-primary/20 transform group-hover:rotate-6 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
  </div>
);
