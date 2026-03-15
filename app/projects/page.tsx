"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

// --- SPOTLIGHT KART (Bu sayfaya özel) ---
function ProjectCard({ project, index }: { project: any, index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(6, 182, 212, 0.15), transparent 80%)`,
        }}
      />
      
      <Link href={`/projects/${project.id}`} className="block h-full relative z-20">
        <div className="aspect-video relative overflow-hidden bg-neutral-900">
            {/* Placeholder yerine proje görseli gelmeli */}
            <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="text-xs font-mono text-cyan-400 mb-2">{project.category}</div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            </div>
        </div>
        <div className="p-6 border-t border-white/5 bg-white/5">
            <p className="text-neutral-400 text-sm line-clamp-2 mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-1 bg-white/5 border border-white/5 rounded text-[10px] text-neutral-300">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </Link>
    </motion.div>
  );
}

const allProjects = [
  {
    id: "tubitak-proje",
    title: "İl İlçe Köy Bilgi Sistemi",
    category: "Web & Ödüllü Proje",
    desc: "TÜBİTAK 2209-A kabulü alan ve 'Halk Yararına Faydalı' kategorisinde özel ödül kazanan kapsamlı bilgi sistemi.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=TUBITAK+Proje",
    tags: ["PHP", "MySQL", "TÜBİTAK"]
  },
  {
    id: "mohu-app",
    title: "MOHU Mobil",
    category: "Mobil Uygulama",
    desc: "Niğde Ömer Halisdemir Üniversitesi öğrencileri için kampüs rehberi.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=MOHU+App",
    tags: ["Flutter", "API", "Eğitim"]
  },
  {
    id: "kargom-ucuz",
    title: "Kargom Ucuz Backend",
    category: "Backend & Lojistik",
    desc: "Kargo firmalarının tekliflerini karşılaştırıp en uygun maliyeti sunan sistem.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Kargo+Backend",
    tags: ["Node.js", "Rest API"]
  },
  {
    id: "voltarge-go",
    title: "VoltargeGo",
    category: "Mobil Uygulama",
    desc: "Elektrikli araç şarj istasyonlarını bulan ve rota oluşturan uygulama.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=VoltargeGo",
    tags: ["Flutter", "Maps API"]
  },
  {
    id: "face-detection",
    title: "Face Detection AI",
    category: "Yapay Zeka",
    desc: "Galerinizdeki fotoğrafları tarayarak kişileri bulan yapay zeka uygulaması.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Face+AI",
    tags: ["Python", "TensorFlow"]
  },
  {
    id: "sosyal-app",
    title: "SosyalApp",
    category: "Sosyal Medya",
    desc: "Yapay zeka ile içerik analizi yapan yeni nesil sosyal platform.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Sosyal+App",
    tags: ["AI", "Flutter", "Firebase"]
  },
  {
    id: "al-chatt",
    title: "AI Chatt",
    category: "Yapay Zeka",
    desc: "Llama dil modeli ile geliştirilmiş sohbet botu.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=AI+Chatt",
    tags: ["LLM", "Llama", "Python"]
  },
  {
    id: "gano-hesapla",
    title: "Gano Hesapla",
    category: "Eğitim Aracı",
    desc: "Üniversite ders notlarını PDF'ten okuyarak ortalama hesaplayan araç.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=Gano+App",
    tags: ["OCR", "Flutter"]
  },
  {
    id: "eticaret-b2b",
    title: "B2B E-Ticaret",
    category: "E-Ticaret",
    desc: "B2B ve B2C süreçlerini yöneten kapsamlı mobil e-ticaret arayüzü.",
    image: "https://placehold.co/600x400/1a1a1a/FFF?text=E-Ticaret",
    tags: ["Flutter", "Rest API"]
  }
];

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-cyan-500/30">
      
      <div className="fixed inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        
        <header className="flex justify-between items-center mb-20">
            <Link href="/" className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Ana Sayfa
            </Link>
            <div className="text-xl font-bold tracking-tighter">FYT<span className="text-cyan-500">.</span></div>
        </header>

        <div className="text-center mb-20">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-6">
                Tüm Projeler
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }} className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Fikir aşamasından canlıya, geliştirdiğim dijital ürünlerin tam listesi.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
            ))}
        </div>

      </div>
    </main>
  );
}