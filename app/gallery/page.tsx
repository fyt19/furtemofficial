"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Camera, Instagram } from "lucide-react";

// --- GALERİ RESİMLERİ ---
// Buraya public klasörüne atacağın kişisel fotoğraflarının isimlerini yaz.
// Farklı boyutlarda (dikey/yatay) resimler kullanırsan 'bento' grid daha güzel durur.
const galleryItems = [
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80", size: "col-span-1 row-span-1", title: "Kodlama Gecesi" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", size: "col-span-1 md:col-span-2 row-span-2", title: "Takım Çalışması" }, // Büyük Resim
  { src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80", size: "col-span-1 row-span-1", title: "Oyun Geliştirme" },
  { src: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80", size: "col-span-1 row-span-1", title: "Setup" },
  { src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80", size: "col-span-1 md:col-span-2 row-span-1", title: "Sunum Günü" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80", size: "col-span-1 row-span-1", title: "Ofis" },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-20">
            <Link href="/" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Ana Sayfa
            </Link>
            <div className="text-xl font-bold tracking-tighter">FYT<span className="text-cyan-500">.</span></div>
        </header>

        {/* Başlık */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-4">
                    Galeri
                </motion.h1>
                <p className="text-neutral-400 text-lg">Kod satırlarının arkasındaki yaşam, anılar ve kareler.</p>
            </div>
            <a href="https://instagram.com" target="_blank" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
                <Instagram size={20} /> Instagram'da Takip Et
            </a>
        </div>

        {/* Bento Grid Galeri */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {galleryItems.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative group rounded-2xl overflow-hidden ${item.size} border border-white/10`}
                >
                    <img 
                        src={item.src} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <span className="text-white font-bold flex items-center gap-2">
                            <Camera size={16} className="text-cyan-500" /> {item.title}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </main>
  );
}