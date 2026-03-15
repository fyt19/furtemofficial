"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, Layers, Calendar, MonitorPlay, AlertCircle, Globe } from "lucide-react";

// Bu bileşen artık veriyi (project) dışarıdan "prop" olarak alacak
export default function ProjectClient({ project, id }: { project: any, id: string }) {

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <AlertCircle size={64} className="text-red-500 mb-4" />
        <h2 className="text-3xl font-bold mb-2">Proje Bulunamadı 😔</h2>
        <p className="text-neutral-500 mb-6">Aradığınız "{id}" kodlu proje sistemde yok.</p>
        <Link href="/projects" className="px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors">
          Tüm Projelere Dön
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        <header className="flex justify-between items-center mb-16">
            <Link href="/projects" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Geri Dön
            </Link>
            <div className="text-sm text-neutral-500 font-mono hidden md:block">
                PROJECT ID: <span className="text-cyan-500">{id.toUpperCase()}</span>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 text-cyan-500 font-bold mb-6">
                    <span className="w-10 h-[2px] bg-cyan-500"></span> {project.category}
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                    {project.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-lg text-neutral-400 leading-relaxed mb-10">
                    {project.desc}
                </motion.p>
                
                <div className="flex flex-wrap gap-4">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors">
                            <Globe size={20} /> Siteyi Ziyaret Et
                        </a>
                    )}
                    <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                        <Github size={20} /> Kaynak Kod
                    </a>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm h-fit">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                    <Layers className="text-cyan-500" /> Proje Detayları
                </h3>
                <div className="space-y-6">
                    <div>
                        <div className="text-xs text-neutral-500 mb-2 font-mono uppercase tracking-wider">Teknolojiler</div>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t: string) => (
                                <span key={t} className="px-3 py-1 bg-white/10 rounded-lg text-sm border border-white/5 text-cyan-100">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="h-[1px] bg-white/10"></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="text-xs text-neutral-500 mb-1 font-mono uppercase tracking-wider">Tarih</div>
                            <div className="flex items-center gap-2 font-bold"><Calendar size={16} /> {project.date}</div>
                        </div>
                        <div>
                            <div className="text-xs text-neutral-500 mb-1 font-mono uppercase tracking-wider">Platform</div>
                            <div className="flex items-center gap-2 font-bold"><MonitorPlay size={16} /> Web / Mobil</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* ÖNİZLEME ALANI */}
        <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold">Önizleme</h2>
                <div className="h-[1px] bg-white/10 flex-grow"></div>
            </div>

            {/* 1. MOBİL GÖRÜNÜM (Sadece Resim) */}
            <div className="md:hidden block">
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <div className="aspect-video bg-neutral-800 flex items-center justify-center text-neutral-500 relative">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover"
                        />
                         {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity backdrop-blur-sm">
                                <span className="px-6 py-3 bg-white text-black font-bold rounded-full flex items-center gap-2 transform hover:scale-105 transition-transform">
                                    <Globe size={18} /> Telefondan Aç
                                </span>
                            </a>
                         )}
                    </div>
                </div>
                <p className="text-center text-neutral-500 text-xs mt-3 flex items-center justify-center gap-1">
                    <MonitorPlay size={12} /> Mobilde performans için ekran görüntüsü gösteriliyor.
                </p>
            </div>

            {/* 2. DESKTOP GÖRÜNÜM – Proje görseli + canlı site linki (iframe çoğu sitede engelli olduğu için) */}
            <div className="hidden md:block border border-white/10 rounded-xl overflow-hidden bg-[#1a1a1a] shadow-2xl relative">
                <div className="bg-[#111] px-4 py-3 flex items-center gap-4 border-b border-white/5">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <div className="flex-grow bg-[#000] rounded-md px-3 py-1 text-xs text-neutral-500 font-mono text-center truncate select-none">
                        {project.liveUrl || "proje görüntüleme"}
                    </div>
                </div>

                <div className="w-full aspect-video min-h-[400px] bg-neutral-900 relative group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                    />
                    {project.liveUrl ? (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        >
                            <span className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-400 transition-colors shadow-xl">
                                <Globe size={22} /> Canlı siteyi ziyaret et
                            </span>
                        </a>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                            <p className="text-neutral-400 text-sm">Canlı link mevcut değil</p>
                        </div>
                    )}
                </div>
            </div>
        </section>

        {/* DETAYLI AÇIKLAMA */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Proje Hakkında</h2>
                <div className="prose prose-invert prose-lg max-w-none text-neutral-400">
                    <p>{project.longDesc}</p>
                    <p className="mt-4">
                        Geliştirme sürecinde modern yazılım mimarileri ve temiz kod (Clean Code) prensipleri benimsendi. 
                        Performans optimizasyonları sayesinde kullanıcı deneyimi en üst seviyeye çıkarıldı.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mb-6">Öne Çıkan Özellikler</h2>
                <ul className="space-y-4">
                    {project.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-300">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2.5 shrink-0"></div>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        </section>

      </div>
    </main>
  );
}